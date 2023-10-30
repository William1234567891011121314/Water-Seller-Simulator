function quiz() {
    sitediv.classList.add("visivel");
    const iframe = sitediv.querySelector("iframe");
    const iframeDocument = iframe.ContentWindow.document;
    const iframenav = iframeDocument.querySelector(".windows glass active")

    iframe.addEventListener("load", function() {
        let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;
        iframenav.onmousedown = dragMouseDown;
        function dragMouseDown (e) {
            previousPosX = e.screenX;
            previousPosY = e.screenY;
            iframeDocument.onmouseup = closeDragElement;
            sitediv.onmouseup = closeDragElement;
            iframeDocument.onmousemove = elementDrag;
            sitediv.onmousemove = elementDrag;
        }
        function elementDrag (e) {
            e.preventDefault();
            currentPosX = previousPosX - e.screenX;
            currentPosY = previousPosY - e.screenY;
            previousPosX = e.screenX;
            previousPosY = e.screenY;
            iframe.style.top = (iframe.offsetTop - currentPosY) + 'px';
            iframe.style.left = (iframe.offsetLeft - currentPosX) + 'px';
        }
        function closeDragElement () {
            iframeDocument.onmouseup = null;
            iframeDocument.onmousemove = null;
            sitediv.onmouseup = null;
            sitediv.onmousemove = null;
        }
    });
}
function errorquiz(txt){
    document.querySelector("body").innerHTML += `
    <div class="window glass active" id="dialog-demo" role="dialog" aria-labelledby="dialog-title">
        <div class="title-bar">
            <div class="title-bar-text" id="dialog-title">Problem Diagnostics</div>
            <div class="title-bar-controls">
            <button aria-label="Close" onclick="history.back()"></button>
        </div>
    </div>
    <div class="window-body has-space">
        <div id="error-txt">
            <img src="../error-win7.jpeg">
            <h2 class="instruction instruction-primary">${txt}</h2>
        </div>
    </div>
    <footer style="text-align: right">
        <button onclick="history.back()">Cancelar</button>
    </footer>
    `
    iframe.addEventListener("load", function() {
        const errorboxnav = iframeDocument.querySelector('#dialog-demo');
        let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;
        errorboxnav.onmousedown = dragMouseDown;
        function dragMouseDown (e) {
            previousPosX = e.screenX;
            previousPosY = e.screenY;
            iframeDocument.onmouseup = closeDragElement;
            sitediv.onmouseup = closeDragElement;
            iframeDocument.onmousemove = elementDrag;
            sitediv.onmousemove = elementDrag;
        }
        function elementDrag (e) {
            e.preventDefault();
            currentPosX = previousPosX - e.screenX;
            currentPosY = previousPosY - e.screenY;
            previousPosX = e.screenX;
            previousPosY = e.screenY;
            iframe.style.top = (iframe.offsetTop - currentPosY) + 'px';
            iframe.style.left = (iframe.offsetLeft - currentPosX) + 'px';
        }
        function closeDragElement () {
            iframeDocument.onmouseup = null;
            iframeDocument.onmousemove = null;
            sitediv.onmouseup = null;
            sitediv.onmousemove = null;
        }
    })
}