function quiz() {
    fatherpopup.innerHTML = `
        <iframe src="./assets/Html/quiz.html" name="isite"></iframe>
    `;
    fatherpopup.classList.add("visivel");
    const iframe = fatherpopup.querySelector("iframe");
    iframe.addEventListener("load", function() {
        const iframeDocument = iframe.contentWindow.document;
        const iframenav = iframeDocument.querySelector('.title-bar');
        let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;
        iframenav.onmousedown = dragMouseDown;
        function dragMouseDown (e) {
            previousPosX = e.screenX;
            previousPosY = e.screenY;
            iframeDocument.onmouseup = closeDragElement;
            fatherpopup.onmouseup = closeDragElement;
            iframeDocument.onmousemove = elementDrag;
            fatherpopup.onmousemove = elementDrag;
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
            fatherpopup.onmouseup = null;
            fatherpopup.onmousemove = null;
        }
    });
}
function errorquiz(txt){
    document.querySelector("body").innerHTML += `
    <div class="window active is-bright" id="dialog-demo" role="dialog" aria-labelledby="dialog-title">
        <div class="title-bar">
            <div class="title-bar-text" id="dialog-title">Problem Diagnostics</div>
            <div class="title-bar-controls">
            <button aria-label="Close" onclick="history.back()"></button>
        </div>
    </div>
    <div class="window-body has-space">
        <h2 class="instruction instruction-primary">${txt}</h2>
        <div role="progressbar" class="marquee"></div>
    </div>
    <footer style="text-align: right">
        <button onclick="history.back()">Cancel</button>
    </footer>
    `
}