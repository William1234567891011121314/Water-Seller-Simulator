function quiz() {
    fatherpopup.innerHTML = `
        <div id="quiz">
            <div id="navquiz">
                <div>
                    <img src="./assets/favicon.ico">
                    <p>Waterscape navigator</p>
                </div>
                <div id="navbut">
                    <button id="btmin"><img src="./assets/min.png"></button>
                    <button id="btmax"><img src="./assets/max.png"></button>
                    <button id="btesc"><img src="./assets/esc.png"></button>
                </div>
            </div>
            <div id="site">
                <div>
                    <input id="url" type="url" value="https://www.booble.com.br/account/login.html"><button><p>Pesquisar</p></button>
                </div>
                <div id="cxdiag">
                    <div>
                        <div id="input">
                            <p>Senha:</p>
                            <input type="password">
                            <p id="incorreto">Senha incorreta</p>
                        </div>
                        <div id="botoes">
                            <button id="btforget"><p>Esqueci minha senha</p></button>
                            <button id="btconfirm"><p>Confirmar</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    makeDraggable(fatherpopup.querySelector("div#quiz"));
    fatherpopup.classList.add("visivel");
    const input = fatherpopup.querySelector("div#input");
    const txterror = input.querySelector("p#incorreto");
    const btforget = fatherpopup.querySelector("button#btforget");
    const btconfirm = fatherpopup.querySelector("button#btconfirm");
    const navbut = fatherpopup.querySelector("#navbut");
    const btmin = navbut.querySelector("button#btmin");
    const btmax = navbut.querySelector("button#btmax");
    const btesc = navbut.querySelector("button#btesc");
    input.addEventListener('keydown', ev => {
        if(ev.key=='Enter'){
            txterror.classList.add("visivel");
            erroraudio.play();
        }
    })
    btconfirm.addEventListener('click', () => {
        txterror.classList.add("visivel");
        erroraudio.play();
    })
    btesc.addEventListener('click', () => {
        fatherpopup.classList.remove("visivel");
    })
    btforget.onclick = async function() {
        cxdiag.innerHTML = '<div id="perguntas"></div>'
        const perguntas = fatherpopup.querySelector("div#perguntas");
        perguntas.innerHTML += `
            <div>
                <p>Responda a estas perguntas de segurança para confirmar a sua identidade:</p>
            </div>
        `
        const url = fatherpopup.querySelector("input#url");
        url.setAttribute("value", "https://www.booble.com.br/account/recovery.html");
        const requestquiz = await fetch("./assets/json/quiz.json");
        const pquiz = await requestquiz.json();
        console.log(pquiz[0]["alternativas"])
        for(let i = 0; i<pquiz.length; i++){
            perguntas.innerHTML += `
                <div>
                    <p id="question">${pquiz[i]["pergunta"]}</p>
                </div>
                <select id="alt${i}">
                </select>
                `
            const alt = perguntas.querySelector(`select#alt${i}`);
            pquiz[i]["alternativas"].forEach(element => {
                alt.innerHTML+=`
                    <option value="${element}">${element}</option>
                `
            });
        };
    };
};
function makeDraggable (element) { 
    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;
    if (element.querySelector('div#navquiz')) {
        element.querySelector('div#navquiz').onmousedown = dragMouseDown;
    } 
    else {
        element.onmousedown = dragMouseDown;
    }
    function dragMouseDown (e) {
        e.preventDefault();
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag (e) {
        e.preventDefault();
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        element.style.top = (element.offsetTop - currentPosY) + 'px';
        element.style.left = (element.offsetLeft - currentPosX) + 'px';
    }
    function closeDragElement () {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}