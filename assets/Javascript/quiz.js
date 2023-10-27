const input = document.querySelector("div#input");
const txterror = input.querySelector("p#incorreto");
const btforget = document.querySelector("button#btforget");
const btconfirm = document.querySelector("button#btconfirm");
const navbut = document.querySelector("#navbut");
const btmin = navbut.querySelector("button#btmin");
const btmax = navbut.querySelector("button#btmax");
const btesc = navbut.querySelector("button#btesc");
const erroraudio = new Audio("../audios/Erro-win7.mp3");
input.addEventListener('keydown', ev => {
    if(ev.key=='Enter'){
        txterror.classList.add("visivel");
        erroraudio.play();
    }
})
btconfirm.addEventListener('click', () => {
    errorquiz("Senha incorreta!")
    const errorbox = document.querySelector("#dialog-demo");
    errorbox.classList.add("visivel");
    erroraudio.play();
});
// btesc.addEventListener('click', () => {
//     fatherpopup.classList.remove("visivel");
// });
btforget.onclick = async function() {
    cxdiag.innerHTML = '<div id="perguntas"></div>'
    const perguntas = document.querySelector("div#perguntas");
    perguntas.innerHTML += `
        <div>
            <p id="question>Responda a estas perguntas de segurança para confirmar a sua identidade:</p>
        </div>
    `
    const url = document.querySelector("input#url");
    url.setAttribute("value", "https://www.booble.com.br/account/recovery.html");
    const requestquiz = await fetch("../json/quiz.json");
    const pquiz = await requestquiz.json();
    console.log(pquiz[0]["alternativas"]);
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
    }
}