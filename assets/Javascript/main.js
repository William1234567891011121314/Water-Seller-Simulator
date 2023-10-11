﻿//constantes
const lojanotificationdiv = document.querySelector("#lojanotificationdiv");
const lojanotificationtxt = lojanotificationdiv.querySelector("#lojanotification");
const sitetitle = document.querySelector("title");
const body = document.querySelector("body");
const main = body.querySelector("#main");
const loja = main.querySelector("#loja");
const garrafa = main.querySelector("#garrafa");
const conquistas = main.querySelector("#trofeus");
const nav = body.querySelector("#nav");
const menuloja = nav.querySelector("#menuloja");
const menumain = nav.querySelector("#menumain");
const menutrofeus = nav.querySelector("#menutrofeus");
const fatherpopup = body.querySelector("#fatherpopup");
const precosbase = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
const contador = body.querySelector("#contador");
const dinheirobutton = main.querySelector("#garrafa");
const multiplicador = body.querySelector("#multiplicador");
const txt = [main.querySelector("#txtmaquinasdevenda"), main.querySelector("#txtcarros"), main.querySelector("#txtpipa"), main.querySelector("#txtfabrica"), main.querySelector("#txtpolo"), main.querySelector("#txtasteroides"), main.querySelector("#txtplanetas"), main.querySelector("#txtgalaxias"), main.querySelector("#txtuniversos"), main.querySelector("#txttempo")];
const counter = [main.querySelector("#vendedores"), main.querySelector("#maquinasdevenda"), main.querySelector("#carroscounter"), main.querySelector("#pipacounter"), main.querySelector("#fabricacounter"), main.querySelector("#polocounter"), main.querySelector("#asteroidecounter"), main.querySelector("#planetascounter"), main.querySelector("#galaxiascounter"), main.querySelector("#universoscounter"), main.querySelector("#tempocounter")];
const button = [main.querySelector("#vendedorbutton"), main.querySelector("#maquinadevendabutton"), main.querySelector("#carrosbutton"), main.querySelector("#pipabutton"), main.querySelector("#fabricabutton"), main.querySelector("#polobutton"), main.querySelector("#asteroidebutton"), main.querySelector("#planetasbutton"), main.querySelector("#galaxiasbutton"), main.querySelector("#universosbutton"), main.querySelector("#tempobutton")];
const clickaudio = new Audio("./assets/audios/Click.mp3");
const menuaudio = new Audio("./assets/audios/Menus.mp3");
//variáveis
var precos = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
var aux = [];
var auxtrofeu = [];
var lojanotification = 0;
var multiplicadores = [1, 10, 200, 500, 10000, 100000, 500000, 10**7, 10**8, 10**9, 10**10];
var objetos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneytime = 1000;
var multiplicadordecompra = 1;
var dinheiro = 0;
var prefixo = "";
var clicks = 0;
var clickmodifier = 1;
var tecnologias = [false, false, false];
var tempo;
//funções
function verificador(verificadorinput) {
    if(verificadorinput<1000000){
        prefixo = "";
        return verificadorinput;
    }
    if(verificadorinput>=1000000 && verificadorinput<1000000000){
        if(verificadorinput===1000000){
            prefixo = " Milhão";
            return verificadorinput/1000000;
        }
        prefixo = " Milhões";
        return verificadorinput/1000000;
    }
    if(verificadorinput>=1000000000 && verificadorinput<1000000000000){
        if(verificadorinput===1000000000){
            prefixo = " Bilhão";
            return verificadorinput/1000000000;
        }
        prefixo = " Bilhões";
        return verificadorinput/1000000000;
    }
    if(verificadorinput>=1000000000000 && verificadorinput<1000000000000000){
        if(verificadorinput===1000000000000){
            prefixo = " Trilhão";
            return verificadorinput/1000000000000;
        }
        prefixo = " Trilhões";
        return verificadorinput/1000000000000;
    }
    if(verificadorinput>=1000000000000000 && verificadorinput<1000000000000000000){
        if(verificadorinput===1000000000000000){
            prefixo = " Quatrilhão";
            return verificadorinput/1000000000000000;
        }
        prefixo = " Quatrilhões";
        return verificadorinput/1000000000000000;
    }
}
function calculomultiplicador(n1, n2) {
    let auxwhile = 2;
    let n3 = n2;
    for (; auxwhile<=multiplicadordecompra; n1+=n2, n3+=n1, auxwhile++);
    return n3;
}
const atualizar = {
    contador() {
        sitetitle.innerHTML = "R$" + Math.round(verificador(dinheiro)) + prefixo + " -Water Seller Simulator";
        contador.innerHTML = Math.round(verificador(dinheiro)) + prefixo;
    },
    notifications() {
        lojanotificationtxt.innerHTML = lojanotification;
        if(lojanotification>0){
            lojanotificationdiv.style.display = "flex";
            return;
        }
        lojanotificationdiv.style.display = "none";
    },
    async trofeus() {
        try{
            const requesttrofeus = await fetch("./assets/json/trofeus.json");
            const trofeus = await requesttrofeus.json();
            for (let n = 0; n <= trofeus.length; n++){
                if(eval(trofeus[n]["condition"]) && auxtrofeu[n]){
                    fatherpopup.classList.add("trofeu");
                    auxtrofeu[n] = false;
                    fatherpopup.innerHTML += 
                    `<div id="trofeu">
                        <img src=${trofeus[n]["endereço"]}>
                        <div>
                            <h2>${trofeus[n]["titulo"]}</h2>
                            <p>${trofeus[n]["descricao"]}</p>
                        </div>
                    </div>`
                    let trofeudiv = body.querySelector("#trofeu");
                    setTimeout(() => {
                        trofeudiv.style.animationName = "deslizarinicio";
                        fatherpopup.classList.add("visivel");
                    }, 6000);
                    setTimeout(() => {
                        trofeudiv.style.animationName = "deslizarfim";
                        fatherpopup.classList.add("visivel");
                    }, 1000);
                    setTimeout(() => {
                        fatherpopup.removeChild(trofeudiv);
                        fatherpopup.classList.remove("visivel");
                        fatherpopup.classList.remove("trofeu");
                    },7000);
                    let conquista = conquistas.querySelector(`#${trofeus[n]["id"]}`);
                    let conquistatitulo = conquista.querySelector(".informationdiv>h3");
                    let conquistatxt = conquista.querySelector(".informationdiv>p");
                    conquistatitulo.innerHTML = trofeus[n]["titulo"];
                    conquistatxt.innerHTML = trofeus[n]["descricao"];
                    conquista.style.backgroundImage = `url(${trofeus[n]["endereço"]})`;
                }
            }
        }catch(trofeuserror){
            //console.log("Deu ruim nos trofeus: ", trofeuserror); => a culpa é do interpretador
        }
    },
    dinheiro() {
        moneyloop = setInterval(() => {
            dinheiro += objetos[0] * multiplicadores[0] + (objetos[1] * multiplicadores[1]) + (objetos[2] * multiplicadores[2]) + (objetos[3] * multiplicadores[3]) + (objetos[4] * multiplicadores[4]) + (objetos[5] * multiplicadores[5]) + (objetos[6] * multiplicadores[6]) + (objetos[7] * multiplicadores[7]) + (objetos[8] * multiplicadores[8]) + (objetos[9] * multiplicadores[9]) + (objetos[10] * multiplicadores[10]);
            atualizar.contador();
            verificarloja();
            atualizar.notifications();
            atualizar.trofeus();
            tempo += moneytime;
        }, moneytime);
    },
    async torres() {
        const requesttorres = await fetch("./assets/json/torres.json");
        const torres = await requesttorres.json();
        for (let i = 0; i<=torres.length; i++){
            console.log(torres[i]["name"]);
            if(dinheiro >= precosbase[i]){
                txt[i].innerHTML = torres[i]["name"];
                counter[i].innerHTML = objetos[i];
                button[i].innerHTML = "R$" + verificador(calculomultiplicador(precos[i], precosbase[i])) + " " + prefixo;
            }
        }
    }
}
let popupaux = true;
function errorbox(txt) {
    fatherpopup.classList.add("visivel");
    fatherpopup.innerHTML = `
    <div id="popup">
        <p>${txt}</p>
        <div>
            <button id="errorboxbutton">Ok</button>
        </div>
    </div>`;
    const popup = fatherpopup.querySelector("#popup");
    const errorboxbutton = popup.querySelector("#errorboxbutton");
    const popuptext = popup.querySelector("p");
    popuptext.classList.add("visivel");
    popup.classList.add("visivel");
    errorboxbutton.classList.add("visivel");
    function visivel(){
        fatherpopup.classList.remove("visivel");
        popup.classList.remove("visivel");
        popuptext.classList.remove("visivel");
        errorboxbutton.classList.remove("visivel");
        fatherpopup.innerHTML = "";
    }
    errorboxbutton.addEventListener('click', () => {
        visivel();
    });
    fatherpopup.addEventListener('click', ev => {
        if(ev.target==fatherpopup){
            visivel();
        }
    });
    body.addEventListener('keydown', ev => {
        if(ev.key == "Escape"){
            visivel();
        }
    });
}
async function verificarloja() {
    try{
        const requestloja = await fetch("./assets/json/loja.json");
        const lojaitens = await requestloja.json();
        for (let auxloja = 0; auxloja < lojaitens.length; auxloja++) {
            if (eval(lojaitens[auxloja]["condicao"]) && aux[auxloja]) {
                aux[auxloja] = false;
                let itemDiv = document.createElement("div");
                itemDiv.className = `item-${auxloja}`;
                itemDiv.innerHTML = `
                    <div class="ultimo">
                        <img class="information" src="./assets/Information.png">
                        <div class="informationdiv">${lojaitens[auxloja]["descricao"]}</div>
                        <p>${lojaitens[auxloja]["titulo"]}</p>
                    </div>
                    <button id="button-${auxloja}">${lojaitens[auxloja]["precotxt"]}</button>`;
                loja.appendChild(itemDiv);
                lojanotification++;
                (function(auxloja) {
                    document.querySelector(`#button-${auxloja}`).onclick = function (){
                        if(dinheiro>=lojaitens[auxloja]["preco"]){
                            dinheiro -= lojaitens[auxloja]["preco"];
                            loja.removeChild(loja.querySelector(`.item-${auxloja}`));
                            lojanotification--;
                            atualizar.notifications();
                            atualizar.contador();
                            eval(lojaitens[auxloja]["efeito"]);
                            return;
                        }
                        errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
                    }
                })(auxloja);
            }
        }
    }catch(lojaerror){
        console.log("Deu ruim na loja: ", lojaerror);
    }
}
function verificadormultiplicador() {
    atualizar.vendedores();
    atualizar.motoboys();
    if(objetos[1]>0 || objetos[2]>0){
        atualizar.carros();
    }
    if(objetos[2]>0 || objetos[3]>0){
        atualizar.pipas();
    }
    if(objetos[3]>0 || objetos[4]>0){
        atualizar.fabricas();
    }
    if(objetos[4]>0 || objetos[5]>0){
        atualizar.polos();
    }
    if(objetos[5]>0 || objetos[6]>0){
        atualizar.asteroides();
    }
    if(objetos[6]>0 || objetos[7]>0){
        atualizar.planetas();
    }
    if(objetos[7]>0 || objetos[8]>0){
        atualizar.galaxias();
    }
    if(objetos[8]>0 || objetos[9]>0){
        atualizar.universos();
    }
    if(objetos[9]>0 || objetos[10]>0){
        atualizar.delorean();
    }
}
function moneyclick(ev) {
    clicks++;
    dinheiro+=clickmodifier;
    atualizar.contador();
    clickaudio.play();
    let clickimg = document.createElement("img");
    clickimg.setAttribute("src", "./assets/Click.png");
    clickimg.setAttribute("id", "garrafaclick");
    clickimg.style.top = ev.clientY + "px";
    clickimg.style.left = ev.clientX + "px";
    let rotate = Math.random(0,1);
    if(rotate>0.5){
        clickimg.style.animationName = "rightrotate";
    }else{
        clickimg.style.animationName = "leftrotate";
    }
    body.appendChild(clickimg);
    setTimeout(() => {
        garrafa.style.transform = "scale(100%)";
        body.removeChild(clickimg);
    }, 300)
    garrafa.style.transform = "scale(75%)";
}
//código
if(window.innerWidth<window.innerHeight){
    body.addEventListener('click', ev => {
        console.log(ev.target);
        if(!ev.target.closest("#nav") && !ev.target.closest("button")){
            moneyclick(ev);
        }
    });
    main.removeChild(main.querySelector("#umafr"));
}
async function gerar() {
    try{
        const requesttrofeus = await fetch("./assets/json/trofeus.json");
        const trofeus = await requesttrofeus.json();
        trofeus.forEach(eltrofeu => {auxtrofeu.push(true)});
        const requestloja = await fetch("./assets/json/loja.json");
        const lojaitens = await requestloja.json();
        lojaitens.forEach(elloja => {aux.push(true)});
    }catch(gerarerror){
        console.log("Deu ruim no async do gerar auxelements: ", gerarerror);
    }
}
gerar();
atualizar.dinheiro();
multiplicador.onclick = function() {
    if(multiplicadordecompra>=100){
        multiplicadordecompra = multiplicadordecompra/100;
        multiplicador.innerHTML = multiplicadordecompra + "x";
        verificadormultiplicador();
        return;
    }
    multiplicadordecompra = multiplicadordecompra*10;
    multiplicador.innerHTML = multiplicadordecompra + "x";
    verificadormultiplicador()
}
menuloja.onclick = function() {
    menuaudio.play();
    main.style.borderBottom = "1px solid black";
    main.style.display = "block";
    loja.style.display = "block";
    tresfr.style.display = "none";
    conquistas.style.display = "none";
    umafr.style.display = "none";
}
menumain.onclick = function() {
    menuaudio.play();
    main.style.borderBottom = "1px solid black";
    main.style.display = "grid";
    loja.style.display = "none";
    tresfr.style.display = "grid";
    conquistas.style.display = "none";
    umafr.style.display = "flex";
}
menutrofeus.onclick = function() {
    menuaudio.play();
    main.style.borderBottom = "1px solid black";
    main.style.display = "block";
    loja.style.display = "none";
    tresfr.style.display = "none";
    conquistas.style.display = "grid";
    umafr.style.display = "none";
}
dinheirobutton.addEventListener('click', ev => {
    moneyclick(ev);
});
async function torresbutton(){
    const requesttorres = await fetch("./assets/json/torres.json");
    const torres = await requesttorres.json(); 
    for (let i = 0; i <= torres.length; i++) {
        button[i].onclick = function() {
            if(dinheiro>=calculomultiplicador(precos[i], precosbase[i])){
                if(eval(torres[i]["tecnologias"])){
                    objetos[i]+=multiplicadordecompra;
                    dinheiro-=calculomultiplicador(precos[i], precosbase[i]);
                    precos[i]=precosbase[i] * (objetos[i]+1);
                    atualizar.torres();
                    atualizar.contador();
                } else {
                    errorbox("Você não tem tecnologia o suficiente para efetuar essa compra!");
                }
            } else {
                errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
            }
        }
    }
}
torresbutton();