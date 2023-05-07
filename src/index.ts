import { extendMarkdownItWithMermaid } from './stealify.ts';
import * as vscode from 'vscode';

const configSection = 'markdown-stealify';

export function activate(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(configSection) || e.affectsConfiguration('workbench.colorTheme')) {
            vscode.commands.executeCommand('markdown.preview.refresh');
        }
    }));

    return {
        extendMarkdownIt(md: any) {
            extendMarkdownItWithMermaid(md, {
                languageIds: () => {
                    return vscode.workspace.getConfiguration(configSection).get<string[]>('languages', ['stealify']);
                }
            });
 
            return md;
        }
    }
}

