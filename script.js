//constantes
const precosbase = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
//variáveis
var contador = document.getElementById("contador");
var dinheirobutton = document.getElementById("garrafa");
var multiplicador = document.getElementById("multiplicador");
var txt = [document.getElementById("txtmaquinasdevenda"), document.getElementById("txtcarros"), document.getElementById("txtpipa"), document.getElementById("txtfabrica"), document.getElementById("txtpolo"), document.getElementById("txtasteroides"), document.getElementById("txtplanetas"), document.getElementById("txtgalaxias"), document.getElementById("txtuniversos"), document.getElementById("txttempo")];
var counter = [document.getElementById("vendedores"), document.getElementById("maquinasdevenda"), document.getElementById("carroscounter"), document.getElementById("pipacounter"), document.getElementById("fabricacounter"), document.getElementById("polocounter"), document.getElementById("asteroidecounter"), document.getElementById("planetascounter"), document.getElementById("galaxiascounter"), document.getElementById("universoscounter"), document.getElementById("tempocounter")];
var button = [document.getElementById("vendedorbutton"), document.getElementById("maquinadevendabutton"), document.getElementById("carrosbutton"), document.getElementById("pipabutton"), document.getElementById("fabricabutton"), document.getElementById("polobutton"), document.getElementById("asteroidebutton"), document.getElementById("planetasbutton"), document.getElementById("galaxiasbutton"), document.getElementById("universosbutton"), document.getElementById("tempobutton")];
var precos = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
var aux = true;
var multiplicadores = [1, 10, 200, 500, 10000, 100000, 500000, 10**7, 10**8, 10**9, 10**10];
var objetos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneytime = 1000;
var multiplicadordecompra = 1;
var dinheiro = 0;
var prefixo = "";
var clicks = 0;
var clickmodifier = 1;
var agenciaespacial = false;
var motordedobra = false;
var motorinterdimensional = false;
var delorean = false;
//funções
function verificador(verificadorinput) {
    if(verificadorinput<1000000){
        prefixo = "";
        return verificadorinput;
    }
    if(verificadorinput>=1000000 && verificadorinput<1000000000){
        if(verificadorinput==1000000){
            prefixo = "Milhão";
            verificadorinput = verificadorinput/1000000;
            return verificadorinput;
        }
        prefixo = "Milhões";
        verificadorinput = verificadorinput/1000000;
        return verificadorinput;
    }
    if(verificadorinput>=1000000000 && verificadorinput<1000000000000){
        if(verificadorinput==1000000000){
            prefixo = "Bilhão";
            verificadorinput = verificadorinput/1000000000;
            return verificadorinput;
        }
        prefixo = "Bilhões";
        verificadorinput = verificadorinput/1000000000;
        return verificadorinput;
    }
    if(verificadorinput>=1000000000000 && verificadorinput<1000000000000000){
        if(verificadorinput==1000000000000){
            prefixo = "Trilhão";
            verificadorinput = verificadorinput/1000000000000;
            return verificadorinput;
        }
        prefixo = "Trilhões";
        verificadorinput = verificadorinput/1000000000000;
        return verificadorinput;
    }
    if(verificadorinput>=1000000000000000 && verificadorinput<1000000000000000000){
        if(verificadorinput==1000000000000000){
            prefixo = "Quatrilhão";
            verificadorinput = verificadorinput/1000000000000000;
            return verificadorinput;
        }
        prefixo = "Quatrilhões";
        verificadorinput = verificadorinput/1000000000000000;
        return verificadorinput;
    }
}
function atualizarcontador() {
    document.querySelector("title").innerHTML = "R$" + Math.floor(verificador(dinheiro)) + " " + prefixo + " -Water Seller Simulator";
    contador.innerHTML = Math.floor(verificador(dinheiro)) + " " + prefixo;
}
function atualizardinheiro() {
    moneyloop = setInterval(() => {
        dinheiro += objetos[0] * multiplicadores[0] + (objetos[1] * multiplicadores[1]) + (objetos[2] * multiplicadores[2]) + (objetos[3] * multiplicadores[3]) + (objetos[4] * multiplicadores[4]) + (objetos[5] * multiplicadores[5]) + (objetos[6] * multiplicadores[6]) + (objetos[7] * multiplicadores[7]) + (objetos[8] * multiplicadores[8]) + (objetos[9] * multiplicadores[9]) + (objetos[10] * multiplicadores[10]);
        atualizarcontador();
    }, moneytime);
}
function calculomultiplicador(n1, n2) {
    let auxwhile = 2;
    let n3 = n2;
    for(; auxwhile<=multiplicadordecompra; n1+=n2, n3+=n1, auxwhile++);
    return n3;
}
function atualizarvendedor() {
    counter[0].innerHTML = objetos[0];
    button[0].innerHTML = "R$" + verificador(calculomultiplicador(precos[0], precosbase[0])) + " " + prefixo;
}
function atualizarmaquinadevenda() {
    txt[0].innerHTML = "Contratar motoboy.";
    counter[1].innerHTML = objetos[1];
    button[1].innerHTML = "R$" + verificador(calculomultiplicador(precos[1], precosbase[1])) + " " + prefixo;
}
function atualizarcarros() {
    txt[1].innerHTML = "Comprar carro da água.";
    counter[2].innerHTML = objetos[2];
    button[2].innerHTML = "R$" + verificador(calculomultiplicador(precos[2], precosbase[2])) + " " + prefixo;
}
function atualizarpipa() {
    txt[2].innerHTML = "Comprar caminhão pipa.";
    counter[3].innerHTML = objetos[3];
    button[3].innerHTML = "R$" + verificador(calculomultiplicador(precos[3], precosbase[3])) + " " + prefixo;
}
function atualizarfabrica() {
    txt[3].innerHTML = "Fábrica de garrafas d'água.";
    counter[4].innerHTML = objetos[4];
    button[4].innerHTML = "R$" + verificador(calculomultiplicador(precos[4], precosbase[4])) + " " + prefixo;
}
function atualizarpolos() {
    txt[4].innerHTML = "Construir um polo industrial.";
    counter[5].innerHTML = objetos[5];
    button[5].innerHTML = "R$" + verificador(calculomultiplicador(precos[5], precosbase[5])) + " " + prefixo;
}
function atualizarasteroides() {
    txt[5].innerHTML = "Minerar asteroides de gelo.";
    counter[6].innerHTML = objetos[6];
    button[6].innerHTML = "R$" + verificador(calculomultiplicador(precos[6], precosbase[6])) + " " + prefixo;
}
function atualizarplanetas() {
    txt[6].innerHTML = "Naves inter-planetárias.";
    counter[7].innerHTML = objetos[7];
    button[7].innerHTML = "R$" + verificador(calculomultiplicador(precos[7], precosbase[7])) + " " + prefixo;
}
function atualizargalaxias() {
    txt[7].innerHTML = "Naves inter-galácticas.";
    counter[8].innerHTML = objetos[8];
    button[8].innerHTML = "R$" + verificador(calculomultiplicador(precos[8], precosbase[8])) + " " + prefixo;
}
function atualizaruniversos() {
    txt[8].innerHTML = "Naves inter-universais.";
    counter[9].innerHTML = objetos[9];
    button[9].innerHTML = "R$" + verificador(calculomultiplicador(precos[9], precosbase[9])) + " " + prefixo;
}
function atualizardelorean() {
    txt[9].innerHTML = "Comprar máquinas do tempo.";
    counter[10].innerHTML = objetos[10];
    button[10].innerHTML = "R$" + verificador(calculomultiplicador(precos[10], precosbase[10])) + " " + prefixo;
}
function errorbox(txt) {
    if(aux){
        aux = false;
        let errorbox = document.createElement("div");
        let txterrorbox = document.createElement("p");
        let errorboxbutton = document.createElement("button");
        let errorboxdiv = document.createElement("div");
        document.querySelector("body").appendChild(errorbox);
        errorbox.appendChild(txterrorbox);
        errorbox.appendChild(errorboxdiv);
        errorboxdiv.appendChild(errorboxbutton);
        txterrorbox.innerHTML = txt;
        errorboxbutton.innerHTML = "Ok"
        errorbox.style.border = "1px solid black";
        errorbox.style.display = "inline";
        errorbox.style.position = "absolute";
        errorboxdiv.style.display = "flex";
        errorboxdiv.style.justifyContent = "space-around";
        errorbox.style.top = "18vw";
        errorbox.style.left  = "31vw";
        errorbox.style.backgroundColor = "white";
        errorboxbutton.onclick = function() {
        document.querySelector("body").removeChild(errorbox);
        aux = true;
        }
    }
}
function divloja (txt, des, precotxt, preco, modificador) {
    let event = document.createElement("div");
    let eventinformationdiv = document.createElement("div");
    let eventbutton = document.createElement("button");
    let eventinformation = document.createElement("img");
    let eventinformationtext = document.createElement("p");
    let eventinformationdes = document.createElement("div");
    eventinformationtext.innerHTML = txt;
    document.getElementById("loja").appendChild(event);
    event.appendChild(eventinformationdiv);
    event.appendChild(eventbutton);
    eventinformationdiv.appendChild(eventinformation);
    eventinformationdiv.appendChild(eventinformationtext);
    event.appendChild(eventinformationdes);
    eventinformation.setAttribute("src", "./assets/Information.png");
    eventinformationdiv.setAttribute("class", "ultimo");
    eventinformationdes.innerHTML = des;
    eventbutton.innerHTML = precotxt;
    event.style.position = "relative";
    eventinformation.style.height = "3vw";
    eventinformation.style.margin = "1vw";
    eventinformation.style.cursor = "pointer";
    eventinformationdes.style.border = "1px solid black";
    eventinformationdes.style.backgroundColor = "white"
    eventinformationdes.style.position = "absolute";
    eventinformationdes.style.display = "none";
    eventinformationtext.style.fontSize = "1.4vw";
    eventinformation.addEventListener('mouseover', function() {
        eventinformationdes.style.display = "block";
    });
    eventinformation.addEventListener('mouseout', function() {
        eventinformationdes.style.display = "none";
    });
    aux = false;
    eventbutton.onclick = function() {
        if(dinheiro>=preco){
            dinheiro-=preco;
            atualizarcontador();
            modificador;
            document.getElementById("loja").removeChild(event);
            return;
        }
        errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
    }
}
function verificarloja() {
    if(clicks>=400 && aux){
        divloja("Comprar curso do metaforando.", "Aumenta a quantidade de dinheiro ganho por click para 4.", "R$1500", 1500, clickmodifier =+ 3);
    }
    if(objetos[0]>=50 && aux){
        divloja("Pagar comissão para os vendedores.", "Dobra o lucro dos vendedores.", "R$12000", 12000, multiplicadores[0] *= 2);
    }
    if(objetos[1]>=50 && aux){
        divloja("Instalar modo turbo nas motos dos motoboys.", "Dobra o lucro dos motoboys.", "R$16000", 16000, multiplicadores[1] *= 2);
    }
    if(objetos[2]>=50 && aux){
        divloja("Comprar alto-falante mais alto para os carros.", "Dobra o lucro dos carros.", "R$80000", 80000, multiplicadores[2] *= 2);
    }
    if(objetos[3]>=50 && aux){
        divloja("Comprar tanque de água maior para os caminhões pipa.", "Dobra o lucro dos caminhões pipa.", "R$200000", 200000, multiplicadores[3] *= 2);
    }
    if(objetos[4]>=50 && aux){
        divloja("Forçar seus funcionários a fazer hora extra.", "Dobra o lucro das fábricas.", "R$4 Milhões", 4000000, multiplicadores[4] *= 2);
    }
    if(objetos[5]>=50 && aux){
        divloja("Instalar esteiras entre fábrcas nos polos industriais.", "Dobra o lucro dos polos industriais.", "R$40 Milhões", 40000000, multiplicadores[5] *= 2);
    }
    if(objetos[6]>=50 && aux){
        divloja("Desenvolver velas solares.", "Dobra o lucro dos mineradores de asteroides.", "R$400 Milhões", 400000000, multiplicadores [6] *= 2);
    }
    if(objetos[7]>=50 && aux){
        divloja("Desenvolver motor de antimatéria.", "Dobra o lucro das naves inter-planetárias.", "R$4 Bilhões", 4000000000, multiplicadores[7] *= 2);
    }
    if(objetos[7]>0 && aux){
        divloja("Desenvolver motor de dobra espacial.", "Torna possível viagens inter-galacticas.", "R$50 Bilhões", 50000000000, motordedobra = true);
    }
    if(objetos[8]>0 && aux){
        divloja("Desenvolver propulsores de viagem interdimensional.", "Torna possível viagens entre universos.", "R$40 Bilhões", 40000000000, motorinterdimensional = true);
    }
    if(objetos[9]>0 && aux){
        divloja("Desenvolver máquina de viagem no tempo.", "Torna possível viagens no tempo.", "R$4 Trilhões", 4000000000000, delorean = true);
    }
    if(objetos[5]>=1 && aux){
        divloja("Fundar agência espacial.", "Permite vender água no espaço.", "R$350 Milhões", 350000000, agenciaespacial = true);
    }
    if(clicks>=1500 && aux){
        divloja("Comprar um botão multiplicador de compras.", "Com esse botão você pode comprar 10 ou 100 itens com um único click!", "R$10000", 10000, multiplicador.style.display = "block", multiplicador.innerHTML = multiplicadordecompra + "x");
    }
    if(clicks>=2200 && aux){
        divloja("Investir em propaganda na internet.", "Recarga de dinheiro 20% mais rápida.", "R$50000", 50000, moneytime = 800, clearInterval(moneyloop));
    }
}
function verificadormultiplicador() {
    atualizarvendedor();
    atualizarmaquinadevenda();
    if(objetos[1]>0 || objetos[2]>0){
        atualizarcarros();
    }
    if(objetos[2]>0 || objetos[3]>0){
        atualizarpipa();
    }
    if(objetos[3]>0 || objetos[4]>0){
        atualizarfabrica();
    }
    if(objetos[4]>0 || objetos[5]>0){
        atualizarpolos();
    }
    if(objetos[5]>0 || objetos[6]>0){
        atualizarasteroides();
    }
    if(objetos[6]>0 || objetos[7]>0){
        atualizarplanetas();
    }
    if(objetos[7]>0 || objetos[8]>0){
        atualizargalaxias();
    }
    if(objetos[8]>0 || objetos[9]>0){
        atualizaruniversos();
    }
    if(objetos[9]>0 || objetos[10]>0){
        atualizardelorean();
    }
}
//código
atualizardinheiro();
multiplicador.onclick = function() {
    if(multiplicadordecompra>=100){
        multiplicadordecompra = multiplicadordecompra/100;
        multiplicador.innerHTML = multiplicadordecompra + "x";
        verificadormultiplicador();
        return;
    }
    multiplicadordecompra = multiplicadordecompra*10;
    multiplicador.innerHTML = multiplicadordecompra + "x";
    verificadormultiplicador();
}
document.getElementById("menuloja").onclick = function() {
    document.getElementById("main").style.borderBottom = "1px solid black";
    loja.style.display = "block";
    tresfr.style.display = "none";
    umafr.style.display = "none";
    verificarloja();
}
document.getElementById("menumain").onclick = function() {
    document.getElementById("main").style.borderBottom = "1px solid black";
    loja.style.display = "none";
    tresfr.style.display = "grid";
    umafr.style.display = "flex";
}
dinheirobutton.onclick = function() {
    clicks++;
    dinheiro+=clickmodifier;
    atualizarcontador();
    setTimeout(() => {
        garrafa.style.transform = "scale(100%)";
    }, 100)
    garrafa.style.transform = "scale(75%)";
}
button[0].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[0], precosbase[0])){
        objetos[0]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[0], precosbase[0]);
        precos[0]=precosbase[0] * (objetos[0]+1);
        atualizarvendedor();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[1].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[1], precosbase[1])){
        objetos[1]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[1], precosbase[1]);
        precos[1]=precosbase[1] * (objetos[1]+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[2].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[2], precosbase[2])){
        objetos[2]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[2], precosbase[2]);
        precos[2]=precosbase[2] * (objetos[2]+1);
        atualizarcarros();
        atualizarpipa();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[3].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[3], precosbase[3])){
        objetos[3]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[3], precosbase[3]);
        precos[3]=precosbase[3] * (objetos[3]+1);
        atualizarpipa();
        atualizarcarros();
        atualizarfabrica();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[4].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[4], precosbase[4])){
        objetos[4]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[4], precosbase[4]);
        precos[4]=precosbase[4] * (objetos[4]+1);
        atualizarfabrica();
        atualizarcarros();
        atualizarpipa();
        atualizarpolos();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[5].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[5], precosbase[5])){
        objetos[5]+=multiplicadordecompra;
        dinheiro-=calculomultiplicador(precos[5], precosbase[5]);
        precos[5]=precosbase[5] * (objetos[5]+1);
        atualizarpolos();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarasteroides();
        atualizarcontador();
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[6].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[6], precosbase[6])){
        if(agenciaespacial){
            objetos[6]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[6], precosbase[6]);
            precos[6]=precosbase[6] * (objetos[6]+1);
            atualizarasteroides();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarplanetas();
            atualizarcontador();
            return;
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[7].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[7], precosbase[7])){
        if(agenciaespacial){
            objetos[7]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[7], precosbase[7]);
            precos[7]=precosbase[7] * (objetos[7]+1);
            atualizarplanetas();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizargalaxias();
            atualizarcontador();
            return;
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[8].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[8], precosbase[8])){
        if(agenciaespacial){
            if(motordedobra){
                objetos[8]+=multiplicadordecompra;
                dinheiro-=calculomultiplicador(precos[8], precosbase[8]);
                precos[8]=precosbase[8] * (objetos[8]+1);
                atualizargalaxias();
                atualizarcarros();
                atualizarpipa();
                atualizarfabrica();
                atualizarpolos();
                atualizarasteroides();
                atualizarplanetas();
                atualizaruniversos();
                atualizarcontador();
                return;
            }
            errorbox("Você não tem tecnologia o suficiente para viajar entre galáxias!");
        }
        errorbox("Você não tem uma agência espacial para explorar o espaço!");
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[9].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[9], precosbase[9])){
        if(agenciaespacial){
            objetos[9]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[9], precosbase[9]);
            precos[9]=precosbase[9] * (objetos[9]+1);
            atualizaruniversos();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            atualizardelorean();
            atualizarcontador();
            return;
        }
        errorbox("Você não tem uma agênica espacial para explorar o espaço!");
        return;
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}
button[10].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[10], precosbase[10])){
        if(delorean){
            objetos[10]+=multiplicadordecompra;
            dinheiro-=calculomultiplicador(precos[10], precosbase[10]);
            precos[10]=precosbase[10] * (objetos[10]+1);
            atualizardelorean();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            atualizaruniversos();
            atualizarcontador();
            return;
        }
        errorbox("Você não tem tecnologia de viagem no tempo!");
    }
    errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
}