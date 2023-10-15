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
                    <input id="url" type="url" value="https://www.booble.com.br/login.html"><button><p>Pesquisar</p></button>
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
    btforget.addEventListener('click', () => {
        const cxdiag = fatherpopup.querySelector("div#cxdiag");
        const url = fatherpopup.querySelector("input#url");
        url.setAttribute("value", "https://www.booble.com.br/login/recovery.html");
        cxdiag.innerHTML = `
            <div id="perguntas">
                <div>
                    <p>Responda a estas perguntas de segurança para confirmar a sua identidade:</p>
                </div>
                <div>
                    <p id="question">Qual é a melhor água do mundo?</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question"></p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
                <div>
                    <p id="question">Pergunta</p>
                    <select>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                        <option value="a">a</option>
                    </select>
                </div>
            </div>
        `
    })
}