document.customElement.define('stealify-element',class extends HTMLElement{
    connectedCallback() {
        console.log('el',this.innerText);
    }
})

