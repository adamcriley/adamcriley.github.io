var element = document.getElementById("me");

async function supportsWebp() {
    if (!self.createImageBitmap) return false;
  
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
    if(await supportsWebp()) {
        console.log('look at you, with your big fancy up to date browser');
    }
    else {
        element.classList.remove("leftpic");
        console.log('browser does no support new things. Now you can no see my beautiful face. :-(');
    }
})();