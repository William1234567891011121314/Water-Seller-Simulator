function quiz() {
    fatherpopup.innerHTML = `
        <iframe src="./assets/Html/quiz.html" name="isite"></iframe>
    `;
    fatherpopup.classList.add("visivel");
    const iframe = fatherpopup.querySelector("iframe");
    iframe.addEventListener("load", function() {
        const iframeDocument = iframe.contentWindow.document;
        const iframenav = iframeDocument.querySelector('.window-top');
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