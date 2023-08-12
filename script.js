//constantes
const precosbase = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
const contador = document.getElementById("contador");
const dinheirobutton = document.getElementById("garrafa");
const multiplicador = document.getElementById("multiplicador");
const txt = [document.getElementById("txtmaquinasdevenda"), document.getElementById("txtcarros"), document.getElementById("txtpipa"), document.getElementById("txtfabrica"), document.getElementById("txtpolo"), document.getElementById("txtasteroides"), document.getElementById("txtplanetas"), document.getElementById("txtgalaxias"), document.getElementById("txtuniversos"), document.getElementById("txttempo")];
const counter = [document.getElementById("vendedores"), document.getElementById("maquinasdevenda"), document.getElementById("carroscounter"), document.getElementById("pipacounter"), document.getElementById("fabricacounter"), document.getElementById("polocounter"), document.getElementById("asteroidecounter"), document.getElementById("planetascounter"), document.getElementById("galaxiascounter"), document.getElementById("universoscounter"), document.getElementById("tempocounter")];
const button = [document.getElementById("vendedorbutton"), document.getElementById("maquinadevendabutton"), document.getElementById("carrosbutton"), document.getElementById("pipabutton"), document.getElementById("fabricabutton"), document.getElementById("polobutton"), document.getElementById("asteroidebutton"), document.getElementById("planetasbutton"), document.getElementById("galaxiasbutton"), document.getElementById("universosbutton"), document.getElementById("tempobutton")];
//variáveis
var precos = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
var aux = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
var aux2 = -1;
var lojanotification = 0;
var multiplicadores = [1, 10, 200, 500, 10000, 100000, 500000, 10**7, 10**8, 10**9, 10**10];
var objetos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneytime = 1000;
var multiplicadordecompra = 1;
var dinheiro = 0;
var prefixo = "";
var clicks = 0;
var clickmodifier = 1;
var tecnologias = [false, false, false, false];
var agenciaespacial = false;
var motordedobra = false;
var motorinterdimensional = false;
var delorean = false;
//funções
async function verificartrofeu(n,condition) {
    try{
        const request = await fetch("trofeus.json");
        const trofeus = await request.json();
        if(condition){
            document.querySelector("body").innerHTML += 
            `<div id="conquista">
                <img src="./assets/trofeus/10.bmp">
                <div>
                    <h2>${trofeus[n]["titulo"]}</h2>
                    <p>${trofeus[n]["descricao"]}</p>
                </div>
            </div>`
            let trofeudiv = document.getElementById("conquista");
            setTimeout(() => {
                trofeudiv.style.animationName = "deslizarinicio";
            }, 6000);
            setTimeout(() => {
                trofeudiv.style.animationName = "deslizarfim";
                trofeudiv.style.display = "flex";
            }, 1000);
            setTimeout(() => {
                document.querySelector("body").removeChild(trofeudiv);
            },7000);
        }
    }catch(eror){
        console.log(eror);
    }
}
function verificador(verificadorinput) {
    if(verificadorinput<1000000){
        prefixo = "";
        return verificadorinput;
    }
    if(verificadorinput>=1000000 && verificadorinput<1000000000){
        if(verificadorinput===1000000){
            prefixo = " Milhão"
            return verificadorinput/1000000;
        }
        prefixo = " Milhões"
        return verificadorinput/1000000;
    }
    if(verificadorinput>=1000000000 && verificadorinput<1000000000000){
        if(verificadorinput===1000000000){
            prefixo = " Bilhão"
            return verificadorinput/1000000000;
        }
        prefixo = " Bilhões"
        return verificadorinput/1000000000;
    }
    if(verificadorinput>=1000000000000 && verificadorinput<1000000000000000){
        if(verificadorinput===1000000000000){
            prefixo = " Trilhão"
            return verificadorinput/1000000000000;
        }
        prefixo = " Trilhões"
        return verificadorinput/1000000000000;
    }
    if(verificadorinput>=1000000000000000 && verificadorinput<1000000000000000000){
        if(verificadorinput===1000000000000000){
            prefixo = " Quatrilhão"
            return verificadorinput/1000000000000000;
        }
        prefixo = " Quatrilhões"
        return verificadorinput/1000000000000000;
    }
}
function calculomultiplicador(n1, n2) {
    let auxwhile = 2;
    let n3 = n2;
    for(; auxwhile<=multiplicadordecompra; n1+=n2, n3+=n1, auxwhile++);
    return n3;
}
const atualizar = {
    contador() {
        document.querySelector("title").innerHTML = "R$" + Math.round(verificador(dinheiro)) + prefixo + " -Water Seller Simulator";
        contador.innerHTML = Math.round(verificador(dinheiro)) + prefixo;
    },
    notifications() {
        let lojanotificationtxt = document.getElementById("lojanotification");
        let lojanotificationdiv = document.getElementById("lojanotificationdiv");
        lojanotificationtxt.innerHTML = lojanotification;
        if(lojanotification>0){
            lojanotificationdiv.style.display = "flex";
            return;
        }
        lojanotificationdiv.style.display = "none";
    },
    dinheiro() {
        moneyloop = setInterval(() => {
            dinheiro += objetos[0] * multiplicadores[0] + (objetos[1] * multiplicadores[1]) + (objetos[2] * multiplicadores[2]) + (objetos[3] * multiplicadores[3]) + (objetos[4] * multiplicadores[4]) + (objetos[5] * multiplicadores[5]) + (objetos[6] * multiplicadores[6]) + (objetos[7] * multiplicadores[7]) + (objetos[8] * multiplicadores[8]) + (objetos[9] * multiplicadores[9]) + (objetos[10] * multiplicadores[10]);
            atualizar.contador();
            verificarloja();
            atualizar.notifications();
        }, moneytime);
    },
    vendedores() {
        counter[0].innerHTML = objetos[0];
        button[0].innerHTML = "R$" + verificador(calculomultiplicador(precos[0], precosbase[0])) + " " + prefixo;
    },
    motoboys() {
        txt[0].innerHTML = "Contratar motoboy.";
        counter[1].innerHTML = objetos[1];
        button[1].innerHTML = "R$" + verificador(calculomultiplicador(precos[1], precosbase[1])) + " " + prefixo;
    },
    carros() {
        txt[1].innerHTML = "Comprar carro da água.";
        counter[2].innerHTML = objetos[2];
        button[2].innerHTML = "R$" + verificador(calculomultiplicador(precos[2], precosbase[2])) + " " + prefixo;
    },
    pipas() {
        txt[2].innerHTML = "Comprar caminhão pipa.";
        counter[3].innerHTML = objetos[3];
        button[3].innerHTML = "R$" + verificador(calculomultiplicador(precos[3], precosbase[3])) + " " + prefixo;
    },
    fabricas() {
        txt[3].innerHTML = "Fábrica de garrafas d'água.";
        counter[4].innerHTML = objetos[4];
        button[4].innerHTML = "R$" + verificador(calculomultiplicador(precos[4], precosbase[4])) + " " + prefixo;
    },
    polos() {
        txt[4].innerHTML = "Construir um polo industrial.";
        counter[5].innerHTML = objetos[5];
        button[5].innerHTML = "R$" + verificador(calculomultiplicador(precos[5], precosbase[5])) + " " + prefixo;
    },
    asteroides() {
        txt[5].innerHTML = "Minerar asteróides de gelo.";
        counter[6].innerHTML = objetos[6];
        button[6].innerHTML = "R$" + verificador(calculomultiplicador(precos[6], precosbase[6])) + " " + prefixo;
    },
    planetas() {
        txt[6].innerHTML = "Naves inter-planetárias.";
        counter[7].innerHTML = objetos[7];
        button[7].innerHTML = "R$" + verificador(calculomultiplicador(precos[7], precosbase[7])) + " " + prefixo;
    },
    galaxias() {
        txt[7].innerHTML = "Naves inter-galácticas.";
        counter[8].innerHTML = objetos[8];
        button[8].innerHTML = "R$" + verificador(calculomultiplicador(precos[8], precosbase[8])) + " " + prefixo;
    },
    universos() {
        txt[8].innerHTML = "Naves inter-universais.";
        counter[9].innerHTML = objetos[9];
        button[9].innerHTML = "R$" + verificador(calculomultiplicador(precos[9], precosbase[9])) + " " + prefixo;
    },
    delorean() {
        txt[9].innerHTML = "Comprar máquinas do tempo.";
        counter[10].innerHTML = objetos[10];
        button[10].innerHTML = "R$" + verificador(calculomultiplicador(precos[10], precosbase[10])) + " " + prefixo;
    }
}
let popupaux = true;
function errorbox(txt) {
    if(popupaux){
        popupaux = false;
        document.getElementById("fatherpopup").innerHTML += `
        <div id="popup">
            <p>${txt}</p>
            <div>
                <button id="errorboxbutton">Ok</button>
            </div>
        </div>`;
        let errorboxbutton = document.getElementById("errorboxbutton");
        let errorbox = document.getElementById("popup");
        errorboxbutton.addEventListener('click', () => {
            document.getElementById("fatherpopup").removeChild(errorbox);
            popupaux = true;
        });
    }
}
async function verificarloja() {
    try{
        const request = await fetch("loja.json");
        const lojaitens = await request.json();
        let event = document.getElementById("loja");
        let eventbuttons = [];
        let eventdivs = [];
        for (let auxloja = 0; auxloja < lojaitens.length; auxloja++) {
            if (eval(lojaitens[auxloja]["condicao"]) && aux[auxloja]) {
                aux2++
                aux[auxloja] = false;
                event.innerHTML += `
                <div class="item-${aux2}">
                    <div class="ultimo">
                        <img class="information" src="./assets/Information.png">
                        <p>${lojaitens[auxloja]["titulo"]}</p>
                        <div class="informationdiv">${lojaitens[auxloja]["descricao"]}</div>
                    </div>
                    <button id="button-${aux2}">${lojaitens[auxloja]["precotxt"]}</button>
                </div>`;
                lojanotification++;
                eventbuttons.push(document.getElementById(`button-${aux2}`));
                eventdivs.push(document.querySelector(`.item-${aux2}`));
                console.log(eventbuttons[aux2]);
                eventbuttons[aux2].onclick = function (){
                    if(dinheiro>=lojaitens[auxloja]["preco"]){
                        dinheiro -= lojaitens[auxloja]["preco"];
                        event.removeChild(eventdivs[aux2]);
                        lojanotification--;
                        atualizar.notifications();
                        atualizar.contador();
                        return;
                    }
                    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
                }
            }
        }
    }catch(eror){
        console.log(eror);
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
//código
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
document.getElementById("menuloja").onclick = function() {
    document.getElementById("main").style.borderBottom = "1px solid black";
    document.getElementById("main").style.display = "block";
    loja.style.display = "block";
    tresfr.style.display = "none";
    umafr.style.display = "none";
    document.getElementById("trofeus").style.display = "none";
}
document.getElementById("menumain").onclick = function() {
    document.getElementById("main").style.borderBottom = "1px solid black";
    document.getElementById("main").style.display = "grid";
    loja.style.display = "none";
    tresfr.style.display = "grid";
    umafr.style.display = "flex";
    document.getElementById("trofeus").style.display = "none";
}
document.getElementById("menutrofeus").onclick = function() {
    document.getElementById("main").style.borderBottom = "1px solid black";
    document.getElementById("main").style.display = "block";
    loja.style.display = "none";
    tresfr.style.display = "none";
    umafr.style.display = "none";
    document.getElementById("trofeus").style.display = "grid";
}
dinheirobutton.addEventListener('click', ev => {
    clicks++;
    dinheiro+=clickmodifier;
    atualizar.contador();
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
    umafr.appendChild(clickimg);
    setTimeout(() => {
        garrafa.style.transform = "scale(100%)";
            umafr.removeChild(clickimg);
    }, 300)
    garrafa.style.transform = "scale(75%)";
});
button[0].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[0], precosbase[0])){
        objetos[0]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[0], precosbase[0]);
        precos[0]=precosbase[0] * (objetos[0]+1);
        atualizar.vendedores();
        atualizar.contador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[1].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[1], precosbase[1])){
        objetos[1]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[1], precosbase[1]);
        precos[1]=precosbase[1] * (objetos[1]+1);
        atualizar.motoboys();
        atualizar.carros();
        atualizar.contador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[2].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[2], precosbase[2])){
        objetos[2]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[2], precosbase[2]);
        precos[2]=precosbase[2] * (objetos[2]+1);
        atualizar.carros();
        atualizar.pipas();
        atualizar.contador();
        return;
    }
    if(objetos[1]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[3].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[3], precosbase[3])){
        objetos[3]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[3], precosbase[3]);
        precos[3]=precosbase[3] * (objetos[3]+1);
        atualizar.pipas();
        atualizar.carros();
        atualizar.fabricas();
        atualizar.contador();
        return;
    }
    if(objetos[2]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[4].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[4], precosbase[4])){
        objetos[4]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[4], precosbase[4]);
        precos[4]=precosbase[4] * (objetos[4]+1);
        atualizar.fabricas();
        atualizar.carros();
        atualizar.pipas();
        atualizar.polos();
        atualizar.contador();
        return;
    }
    if(objetos[3]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[5].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[5], precosbase[5])){
        objetos[5]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[5], precosbase[5]);
        precos[5]=precosbase[5] * (objetos[5]+1);
        atualizar.polos();
        atualizar.carros();
        atualizar.pipas();
        atualizar.fabricas();
        atualizar.asteroides();
        atualizar.contador();
        return;
    }
    if(objetos[4]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[6].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[6], precosbase[6])){
        if(tecnologias[0]){
            objetos[6]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[6], precosbase[6]);
            precos[6]=precosbase[6] * (objetos[6]+1);
            atualizar.asteroides();
            atualizar.carros();
            atualizar.pipas();
            atualizar.fabricas();
            atualizar.polos();
            atualizar.planetas();
            atualizar.contador();
            return;
        }
        if(objetos[5]<1){
            return;
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    if(objetos[5]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[7].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[7], precosbase[7])){
        if(tecnologias[0]){
            objetos[7]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[7], precosbase[7]);
            precos[7]=precosbase[7] * (objetos[7]+1);
            atualizar.planetas();
            atualizar.carros();
            atualizar.pipas();
            atualizar.fabricas();
            atualizar.polos();
            atualizar.asteroides();
            atualizar.galaxias();
            atualizar.contador();
            return;
        }
        if(objetos[6]<1){
            return;
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    if(objetos[6]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[8].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[8], precosbase[8])){
        if(tecnologias[0]){
            if(tecnologias[1]){
                objetos[8]+=multiplicadordecompra;
                dinheiro-=calculomultiplicador(precos[8], precosbase[8]);
                precos[8]=precosbase[8] * (objetos[8]+1);
                atualizar.galaxias();
                atualizar.carros();
                atualizar.pipas();
                atualizar.fabricas();
                atualizar.polos();
                atualizar.asteroides();
                atualizar.planetas();
                atualizar.universos();
                atualizar.contador();
                return;
            }
            if(objetos[7]<1){
                return;
            }
            errorbox("Você não tem tecnologia o suficiente para viajar entre galáxias!");
            return;
        }
        if(objetos[7]<1){
            return;
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    if(objetos[7]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[9].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[9], precosbase[9])){
        if(tecnologias[0]){
            if(tecnologias[1] && tecnologias[2]){
                objetos[9]+=multiplicadordecompra;
                dinheiro-=calculomultiplicador(precos[9], precosbase[9]);
                precos[9]=precosbase[9] * (objetos[9]+1);
                atualizar.universos();
                atualizar.carros();
                atualizar.pipas();
                atualizar.fabricas();
                atualizar.polos();
                atualizar.asteroides();
                atualizar.planetas();
                atualizar.galaxias();
                atualizar.delorean();
                atualizar.contador();
                return;
            }
            errorbox("Vecê não tem tecnologia o suficiente para efetuar essa compra!");
            return;
        }
        if(objetos[8]<1){
            return;
        }
        errorbox("Você não tem uma agênica espacial para explorar o espaço!");
        return;
    }
    if(objetos[8]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[10].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[10], precosbase[10])){
        if(tecnologias[3]){
            objetos[10]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[10], precosbase[10]);
            precos[10]=precosbase[10] * (objetos[10]+1);
            atualizar.delorean();
            atualizar.carros();
            atualizar.pipas();
            atualizar.fabricas();
            atualizar.polos();
            atualizar.asteroides();
            atualizar.planetas();
            atualizar.galaxias();
            atualizar.universos();
            atualizar.contador();
            return;
        }
        if(objetos[9]<1){
            return;
        }
        errorbox("Você não tem tecnologia de viagem no tempo!");
    }
    if(objetos[9]<1){
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}