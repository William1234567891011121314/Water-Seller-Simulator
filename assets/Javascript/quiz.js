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
        url.setAttribute("value", "https://www.booble.com.br/account/recovery.html");
        cxdiag.innerHTML = `
            <div id="perguntas">
                <div>
                    <p>Responda a estas perguntas de segurança para confirmar a sua identidade:</p>
                </div>
                <div>
                    <p id="question">Qual é a melhor água do mundo?</p>
                    <select>
                        <option value="a">A minha</option>
                        <option value="a">Cristal</option>
                        <option value="a">Água da pedra</option>
                        <option value="a">Fuji</option>
                        <option value="a">A água do Vitor</option>
                        <option value="a">A do rio Camboriú</option>
                        <option value="a">A melhor água do mundo são os amigos que fazemos no caminho</option>
                        <option value="a">A da chuva</option>
                        <option value="a">Coca-cola</option>
                        <option value="a">O chorume</option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual é o nome do seu primo?</p>
                    <select>
                        <option value="a">João</option>
                        <option value="a">Gustavo</option>
                        <option value="a">Juriscleydison</option>
                        <option value="a">Alfredo</option>
                        <option value="a">Dudisdud99</option>
                        <option value="a">Doutor Fran</option>
                        <option value="a">Geraldo Alckmin</option>
                        <option value="a">Vitor (o baiano)</option>
                        <option value="a">Jefferson</option>
                        <option value="a">Lucas</option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual é a sua maravilha do mundo favorita?</p>
                    <select>
                        <option value="a">As piramidês do José</option>
                        <option value="a">Torre Eifel</option>
                        <option value="a">World Trade Center (o novo)</option>
                        <option value="a">O Vitor dormindo</option>
                        <option value="a">Beto Carreiro</option>
                        <option value="a">Cristo Luz</option>
                        <option value="a">Muralha da China</option>
                        <option value="a">RTX 4090</option>
                        <option value="a">A cara do Leonardo quando o Gabriel rouba a garrafa dele</option>
                        <option value="a">O Código do Varela</option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual a marca que você mais odeia?</p>
                    <select>
                        <option value="a">Positivo</option>
                        <option value="a">AMD (Ancient Micro Devices)</option>
                        <option value="a">Philco</option>
                        <option value="a">Dell</option>
                        <option value="a">Auto peças Simas turbo</option>
                        <option value="a">Nissin miojo</option>
                        <option value="a">Microsoft</option>
                        <option value="a">EA</option>
                        <option value="a">Nintendo</option>
                        <option value="a">Apple</option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual destes é mais lento?</p>
                    <select>
                        <option value="a">Jabuti (o cachorro)</option>
                        <option value="a">Jabuti (tartaruga)</option>
                        <option value="a">A radiação Hawking</option>
                        <option value="a">O netbook do Vitor</option>
                        <option value="a">Um HD com Windows 11</option>
                        <option value="a">Compilador python</option>
                        <option value="a">A internet do IFC</option>
                        <option value="a">A fila do café</option>
                        <option value="a">Tela de loading do GTA 5</option>
                        <option value="a">Boot do PC do IFC</option>
                    </select>
                </div>
                <div>
                    <p id="question">Eu tenho 5 velas, apaguei 2. Quantas sobraram?</p>
                    <select>
                        <option value="a">Duas</option>
                        <option value="a">Cinco</option>
                        <option value="a">Três</option>
                        <option value="a">Noventa e sete</option>
                        <option value="a">Nenhuma, depois de muito tempo o sol vai engolir a terra e nenhuma vela restará</option>
                        <option value="a">Undefined</option>
                        <option value="a">Dois e meio</option>
                        <option value="a">Pi</option>
                        <option value="a">50% de chance de ser 2, 25% de ser 3 e 25% de ser 4</option>
                        <option value="a">NaN</option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual o filósofo mais based?</p>
                    <select>
                        <option value="a">Sócrates</option>
                        <option value="a">Platão</option>
                        <option value="a">Heráclito</option>
                        <option value="a">Parmênides</option>
                        <option value="a">Anaximandro</option>
                        <option value="a">Demócrito</option>
                        <option value="a">Pitágoras</option>
                        <option value="a">Tales de mileto</option>
                        <option value="a">Lonardo Ignácio</option>
                        <option value="a">Nietzche</option>                                                                                                                                                                                                                                    </option>
                    </select>
                </div>
                <div>
                    <p id="question">Qual destes tem o linguajar de mais baixo nível?</p>
                    <select>
                        <option value="a">Varela</option>
                        <option value="a">MC No-brega</option>
                        <option value="a">Leno Brega</option>
                        <option value="a">MC Pipokinha</option>
                        <option value="a">Engenheiros da Intel</option>
                        <option value="a">Jabuti</option>
                        <option value="a">ET do parlamento Mexicano</option>
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
            </div>
        `
    })
}