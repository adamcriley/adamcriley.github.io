var element = document.getElementById("me");

async function supportsWebp() {
    if (!self.createImageBitmap) return false;
  
    const webpData = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
    if(await supportsWebp()) {
        element.classList.add("leftpic");
    }
    else {
        console.log('browser does no support new things. Now you can no see my beautiful face. :-(');
    }
})();