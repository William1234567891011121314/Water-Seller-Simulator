//constantes
const precosbase = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
//variáveis
var contador = document.getElementById("contador");
var dinheirobutton = document.getElementById("umafr");
var multiplicador = document.getElementById("multiplicador");
var txt = [document.getElementById("txtmaquinasdevenda"), document.getElementById("txtcarros"), document.getElementById("txtpipa"), document.getElementById("txtfabrica"), document.getElementById("txtpolo"), document.getElementById("txtasteroides"), document.getElementById("txtplanetas"), document.getElementById("txtgalaxias"), document.getElementById("txtuniversos"), document.getElementById("txttempo")];
var counter = [document.getElementById("vendedores"), document.getElementById("maquinasdevenda"), document.getElementById("carroscounter"), document.getElementById("pipacounter"), document.getElementById("fabricacounter"), document.getElementById("polocounter"), document.getElementById("asteroidecounter"), document.getElementById("planetascounter"), document.getElementById("galaxiascounter"), document.getElementById("universoscounter"), document.getElementById("tempocounter")];
var button = [document.getElementById("vendedorbutton"), document.getElementById("maquinadevendabutton"), document.getElementById("carrosbutton"), document.getElementById("pipabutton"), document.getElementById("fabricabutton"), document.getElementById("polobutton"), document.getElementById("asteroidebutton"), document.getElementById("planetasbutton"), document.getElementById("galaxiasbutton"), document.getElementById("universosbutton"), document.getElementById("tempobutton")];
var precos = [150, 1500, 10000, 50000, 1000000, 10000000, 100000000, 10**9, 10**10, 10**11, 10**12];
var auxbool = [true, true, true, true, true, true];
var objetos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneytime = 1000;
var multiplicadordecompra = 1;
var dinheiro = 0;
var prefixo = "";
var clicks = 0;
var clickmodifier = 1;
var agenciaespacial = false;
//funções
function verificador(preco) {
    if(preco<1000000){
        prefixo = "";
        return preco;
    }
    if(preco>=1000000 && preco<1000000000){
        if(preco==1000000){
            prefixo = "Milhão";
            preco = preco/1000000;
            return preco;
        }
        prefixo = "Milhões";
        preco = preco/1000000;
        return preco;
    }
    if(preco>=1000000000 && preco<1000000000000){
        if(preco==1000000000){
            prefixo = "Bilhão";
            preco = preco/1000000000;
            return preco;
        }
        prefixo = "Bilhões";
        preco = preco/1000000000;
        return preco;
    }
    if(preco>=1000000000000 && preco<1000000000000000){
        if(preco==1000000000000){
            prefixo = "Trilhão";
            preco = preco/1000000000000;
            return preco;
        }
        prefixo = "Trilhões";
        preco = preco/1000000000000;
        return preco;
    }
    if(preco>=1000000000000000 && preco<1000000000000000000){
        if(preco==1000000000000000){
            prefixo = "Quatrilhão";
            preco = preco/1000000000000000;
            return preco;
        }
        prefixo = "Quatrilhões";
        preco = preco/1000000000000000;
        return preco;
    }
}
function atualizarcontador() {
    document.querySelector("title").innerHTML = "R$" + Math.floor(verificador(dinheiro)) + " " + prefixo + " -Water Seller Simulator";
    contador.innerHTML = Math.floor(verificador(dinheiro)) + " " + prefixo;
}
function atualizardinheiro() {
    moneyloop = setInterval(() => {
        dinheiro += objetos[0] + (objetos[1] * 10) + (objetos[2] * 100) + (objetos[3] * 500) + (objetos[4] * 10000) + (objetos[5] * 100000) + (objetos[6] * 500000) + (objetos[7] * 10**7) + (objetos[8] * 10**8) + (objetos[9] * 10**9) + (objetos[10] * 10**10);
        atualizarcontador();
    }, moneytime);
}
function calculomultiplicador(n1, n2) {
    let auxwhile = 2;
    while(auxwhile<=multiplicadordecompra){
        n1+=n2*auxwhile;
        auxwhile++;
    }vendedores
    return n1;
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
function spaceerrorbox() {
    if(auxbool){
        auxbool[5] = false;
        let errorbox = document.createElement("div");
        let txterrorbox = document.createElement("p");
        let errorboxbutton = document.createElement("button");
        let errorboxdiv = document.createElement("div");
        document.querySelector("body").appendChild(errorbox);
        errorbox.appendChild(txterrorbox);
        errorbox.appendChild(errorboxdiv);
        errorboxdiv.appendChild(errorboxbutton);
        txterrorbox.innerHTML = "Você não tem uma agência espacial para explorar o espaço!"
        errorboxbutton.innerHTML = "Ok"
        errorbox.style.border = "1px solid black";
        errorbox.style.display = "inline";
        errorbox.style.position = "absolute";
        errorboxdiv.style.display = "flex";
        errorboxdiv.style.justifyContent = "space-around";
        errorbox.style.top = "35%";
        errorbox.style.left  = "35%";
        errorbox.style.backgroundColor = "white";
        errorboxbutton.onclick = function() {
            document.querySelector("body").removeChild(errorbox);
            auxbool[5] = true;
        }
    }
}
function moneyerrorbox() {
    if(auxbool[5]){
        auxbool[5] = false;
        let errorbox = document.createElement("div");
        let txterrorbox = document.createElement("p");
        let errorboxbutton = document.createElement("button");
        let errorboxdiv = document.createElement("div");
        document.querySelector("body").appendChild(errorbox);
        errorbox.appendChild(txterrorbox);
        errorbox.appendChild(errorboxdiv);
        errorboxdiv.appendChild(errorboxbutton);
        txterrorbox.innerHTML = "Você não tem dinheiro suficiente para efetuar essa compra!"
        errorboxbutton.innerHTML = "Ok"
        errorbox.style.border = "1px solid black";
        errorbox.style.display = "inline";
        errorbox.style.position = "absolute";
        errorboxdiv.style.display = "flex";
        errorboxdiv.style.justifyContent = "space-around";
        errorbox.style.top = "35%";
        errorbox.style.left  = "35%";
        errorbox.style.backgroundColor = "white";
        errorboxbutton.onclick = function() {
            document.querySelector("body").removeChild(errorbox);
            auxbool[5] = true;
        }
    }
}
function verificarloja() {
    if(clicks>=400 && auxbool[0]){
        let firstevent = document.createElement("div");
        let firsteventbutton = document.createElement("button");
        firstevent.innerHTML = "Comprar curso do metaforando.";
        document.getElementById("loja").appendChild(firstevent);
        firstevent.appendChild(firsteventbutton);
        firsteventbutton.innerHTML = "R$1500";
        auxbool[0] = false;
        firsteventbutton.onclick = function() {
            if(dinheiro>=1500){
                dinheiro-=1500;
                atualizarcontador();
                clickmodifier += 3;
                document.getElementById("loja").removeChild(firstevent);
                return
            }
            moneyerrorbox();
        }
    }
    if(clicks>=1200 && auxbool[1]){
        let secondclickevent = document.createElement("div");
        let secondclickeventbutton = document.createElement("button");
        document.getElementById("loja").appendChild(secondclickevent);
        secondclickevent.innerHTML = "Pagar comissão para os vendedores.";
        secondclickevent.appendChild(secondclickeventbutton);
        secondclickeventbutton.innerHTML = "R$6000";
        auxbool[1] = false;
        secondclickeventbutton.onclick = function() {
            if(dinheiro>=6000){
                dinheiro-=6000;
                atualizarcontador();
                clickmodifier += 28;
                document.getElementById("loja").removeChild(secondclickevent);
                return
            }
            moneyerrorbox();
        }
    }
    if(objetos[4]>=1 && auxbool[2]){
        let espacialevent = document.createElement("div");
        let espacialeventbutton = document.createElement("button");
        espacialevent.innerHTML = "Fundar agência espacial";
        document.getElementById("loja").appendChild(espacialevent);
        espacialevent.appendChild(espacialeventbutton);
        espacialeventbutton.innerHTML = "R$350 Milhões";
        auxbool[2] = false;
        espacialeventbutton.onclick = function() {
            if(dinheiro>=350000000){
                dinheiro-=350000000;
                atualizarcontador();
                agenciaespacial = true;
                document.getElementById("loja").removeChild(espacialevent);
                return;
            }
            moneyerrorbox();
        }
    }
    if(clicks>=1500 && auxbool[3]){
        let multiplicadorevent = document.createElement("div");
        let multiplicadoreventbutton = document.createElement("button");
        multiplicadorevent.innerHTML = "Comprar um botão multiplicador de compras.";
        document.getElementById("loja").appendChild(multiplicadorevent);
        multiplicadorevent.appendChild(multiplicadoreventbutton);
        multiplicadoreventbutton.innerHTML = "R$10000";
        auxbool[3] = false;
        multiplicadoreventbutton.onclick = function() {
            if(dinheiro>=10000){
                dinheiro-=10000;
                atualizarcontador();
                multiplicador.style.display = "block";
                document.getElementById("loja").removeChild(multiplicadorevent);
                multiplicador.innerHTML = multiplicadordecompra + "x";
                return;
            }
            moneyerrorbox();
        }
    }
    if(clicks>=2200 && auxbool[4]){
        let thirdclickevent = document.createElement("div");
        let thirdclickeventbutton = document.createElement("button");
        thirdclickevent.innerHTML = "Investir em propaganda na internet";
        document.getElementById("loja").appendChild(thirdclickevent);
        thirdclickevent.appendChild(thirdclickeventbutton);
        thirdclickeventbutton.innerHTML = "R$50000";
        auxbool[4] = false;
        thirdclickeventbutton.onclick = function() {
            if(dinheiro>=50000){
                dinheiro-=50000;
                atualizarcontador();
                moneytime = 800;
                clearInterval(moneyloop);
                atualizardinheiro();
                document.getElementById("loja").removeChild(thirdclickevent);
                return;
            }
            moneyerrorbox();
        }
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
    loja.style.display = "grid";
    tresfr.style.display = "none";
    umafr.style.display = "none";
    verificarloja();
}
document.getElementById("menumain").onclick = function() {
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
    moneyerrorbox();
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
    moneyerrorbox();
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
    moneyerrorbox();
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
    moneyerrorbox();
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
    moneyerrorbox();
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
    moneyerrorbox();
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
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
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
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[8].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[8], precosbase[8])){
        if(agenciaespacial){
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
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
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
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[10].onclick = function() {
    if(dinheiro>=calculomultiplicador(precos[10], precosbase[10])){
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
    moneyerrorbox();
}