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
var moneytime = 1000;
var multiplicadordecompra = 1;
var dinheiro = 0;
var vendedores = 0;
var motoboy = 0;
var carros = 0;
var pipas = 0;
var fabricas = 0;
var polos = 0;
var asteroides = 0;
var planetas = 0;
var galaxias = 0;
var universos = 0;
var tempo = 0;
var aux = "";
var clicks = 0;
var clickmodifier = 1;
var agenciaespacial = false;
//funções
function verificador() {
    if(preco<1000000){
        aux = "";
        preco = preco;
        return
    }
    if(preco>=1000000 && preco<1000000000){
        if(preco==1000000){
            aux = "Milhão";
            preco = preco/1000000;
            return;
        }
        aux = "Milhões";
        preco = preco/1000000;
        return;
    }
    if(preco>=1000000000 && preco<1000000000000){
        if(preco==1000000000){
            aux = "Bilhão";
            preco = preco/1000000000;
            return;
        }
        aux = "Bilhões";
        preco=preco/1000000000;
        return;
    }
    if(preco>=1000000000000 && preco<1000000000000000){
        if(preco==1000000000000){
            aux = "Trilhão";
            preco = preco/1000000000000;
            return;
        }
        aux = "Trilhões";
        preco = preco/1000000000000;
        return;
    }
    if(preco>=1000000000000000 && preco<1000000000000000000){
        if(preco==1000000000000000){
            aux = "Quatrilhão";
            preco = preco/1000000000000000;
            return;
        }
        aux = "Quatrilhões";
        preco = preco/1000000000000000;
        return;
    }
}
function atualizarcontador() {
    contador.innerHTML = dinheiro;
}
function atualizardinheiro() {
    moneyloop = setInterval(() => {dinheiro += vendedores + (motoboy * 10) + (carros * 100) + (pipas * 500) + (fabricas * 10000) + (polos * 100000) + (asteroides * 500000) + (planetas * 10**7) + (galaxias * 10**8) + (universos * 10**9) + (tempo * 10**10), atualizarcontador()}, moneytime)
}
function atualizarvendedor() {
    preco=precos[0]*multiplicadordecompra;
    counter[0].innerHTML = vendedores;
    verificador();
    button[0].innerHTML = "R$" + preco + " ";
}
function atualizarmaquinadevenda() {
    if(dinheiro<=precosbase[1]){
        return;
    }
    preco=precos[1]*multiplicadordecompra;
    txt[0].innerHTML = "Contratar motoboy";
    counter[1].innerHTML = motoboy;
    verificador();
    button[1].innerHTML = "R$" + preco + " ";
}
function atualizarcarros() {
    if(dinheiro<=precosbase[2]){
        return;
    }
    preco=precos[2]*multiplicadordecompra;
    txt[1].innerHTML = "Comprar carro da água.";
    counter[2].innerHTML = carros;
    verificador();
    button[2].innerHTML = "R$" + preco + " " + aux;
}
function atualizarpipa() {
    if(dinheiro<=precosbase[3]){
        return;
    }
    preco=precos[3]*multiplicadordecompra;
    txt[2].innerHTML = "Comprar caminhão pipa.";
    counter[3].innerHTML = pipas;
    verificador();
    button[3].innerHTML = "R$" + preco + " " + aux;
}
function atualizarfabrica() {
    if(dinheiro<=precosbase[4]){
        return;
    }
    preco=precos[4]*multiplicadordecompra;
    txt[3].innerHTML = "Fábrica de garrafas d'água.";
    counter[4].innerHTML = fabricas;
    verificador();
    button[4].innerHTML = "R$" + preco + " " + aux;
}
function atualizarpolos() {
    if(dinheiro<=precosbase[5]){
        return;
    }
    preco=precos[5]*multiplicadordecompra;
    txt[4].innerHTML = "Construir um polo industrial.";
    counter[5].innerHTML = polos;
    verificador();
    button[5].innerHTML = "R$" + preco + " " + aux;
}
function atualizarasteroides() {
    if(dinheiro<=precosbase[6]){
        return;
    }
    preco=precos[6]*multiplicadordecompra;
    txt[5].innerHTML = "Minerar asteroides de gelo.";
    counter[6].innerHTML = asteroides;
    verificador();
    button[6].innerHTML = "R$" + preco + " " + aux;
}
function atualizarplanetas() {
    if(dinheiro<=precosbase[7]){
        return;
    }
    preco=precos[7]*multiplicadordecompra;
    txt[6].innerHTML = "Naves inter-planetárias.";
    counter[7].innerHTML = planetas;
    verificador();
    button[7].innerHTML = "R$" + preco + " " + aux;
}
function atualizargalaxias() {
    if(dinheiro<=precosbase[8]){
        return;
    }
    preco=precos[8]*multiplicadordecompra;
    txt[7].innerHTML = "Naves inter-galácticas.";
    counter[8].innerHTML = galaxias;
    verificador();
    button[8].innerHTML = "R$" + preco + " " + aux;
}
function atualizaruniversos() {
    if(dinheiro<=precosbase[9]){
        return;
    }
    preco=precos[9]*multiplicadordecompra;
    txt[8].innerHTML = "Naves inter-universais.";
    counter[9].innerHTML = universos;
    verificador();
    button[9].innerHTML = "R$" + preco + " " + aux;
}
function atualizardelorean() {
    if(dinheiro<=precosbase[10]){
        return;
    }
    preco=precos[10]*multiplicadordecompra;
    txt[9].innerHTML = "Comprar máquinas do tempo.";
    counter[10].innerHTML = tempo;
    verificador();
    button[10].innerHTML = "R$" + preco + " " + aux;
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
        firstevent.innerHTML = "Comprar curso do metaforando";
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
        secondclickevent.innerHTML = "Pagar comissão para os vendedores";
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
    if(polos>=1 && auxbool[2]){
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
//código
atualizardinheiro();
multiplicador.onclick = function() {
    if(multiplicadordecompra>=100){
        multiplicadordecompra = multiplicadordecompra/100;
        multiplicador.innerHTML = multiplicadordecompra + "x";
        atualizarvendedor();
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        atualizarasteroides();
        atualizarplanetas();
        atualizargalaxias();
        atualizaruniversos();
        atualizardelorean();
        return;
    }
    multiplicadordecompra = multiplicadordecompra*10;
    multiplicador.innerHTML = multiplicadordecompra + "x";
    atualizarvendedor();
    atualizarmaquinadevenda();
    atualizarcarros();
    atualizarpipa();
    atualizarfabrica();
    atualizarpolos();
    atualizarasteroides();
    atualizarplanetas();
    atualizargalaxias();
    atualizaruniversos();
    atualizardelorean();
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
    if(dinheiro>=precos[0]){
        vendedores+=multiplicadordecompra;
        precos[0]=precosbase[0] * (vendedores+1);
        atualizarvendedor();
        atualizarmaquinadevenda();
        dinheiro-=precos[0]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[1].onclick = function() {
    if(dinheiro>=precos[1]){
        motoboy+=multiplicadordecompra;
        precos[1]=precosbase[1] * (motoboy+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        dinheiro-=precos[1]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[2].onclick = function() {
    if(dinheiro>=precos[2]){
        carros+=multiplicadordecompra;
        precos[2]=precosbase[2] * (carros+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        dinheiro-=precos[2]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[3].onclick = function() {
    if(dinheiro>=precos[3]){
        pipas+=multiplicadordecompra;
        precos[3]=precosbase[3] * (pipas+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        dinheiro-=precos[3]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[4].onclick = function() {
    if(dinheiro>=precos[4]){
        fabricas+=multiplicadordecompra;
        precos[4]=precosbase[4] * (fabricas+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        dinheiro-=precos[4]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[5].onclick = function() {
    if(dinheiro>=precos[5]){
        polos+=multiplicadordecompra;
        precos[5]=precosbase[5] * (polos+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        atualizarasteroides();
        dinheiro-=precos[5]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}
button[6].onclick = function() {
    if(dinheiro>=precos[6]){
        if(agenciaespacial){
            asteroides+=multiplicadordecompra;
            precos[6]=precosbase[6] * (asteroides+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            dinheiro-=precos[6]*multiplicadordecompra;
            atualizarcontador();
            return;
        }
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[7].onclick = function() {
    if(dinheiro>=precos[7]){
        if(agenciaespacial){
            planetas+=multiplicadordecompra;
            precos[7]=precosbase[7] * (planetas+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            dinheiro-=precos[7]*multiplicadordecompra;
            atualizarcontador();
            return;
        }
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[8].onclick = function() {
    if(dinheiro>=precos[8]){
        if(agenciaespacial){
            galaxias+=multiplicadordecompra;
            precos[8]=precosbase[8] * (galaxias+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            atualizaruniversos();
            dinheiro-=precos[8]*multiplicadordecompra;
            atualizarcontador();
            return;
        }
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[9].onclick = function() {
    if(dinheiro>=precos[9]){
        if(agenciaespacial){
            universos+=multiplicadordecompra;
            precos[9]=precosbase[9] * (universos+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            atualizaruniversos();
            atualizardelorean();
            dinheiro-=precos[9]*multiplicadordecompra;
            atualizarcontador();
            return;
        }
        spaceerrorbox();
        return;
    }
    moneyerrorbox();
}
button[10].onclick = function() {
    if(dinheiro>=precos[10]){
        tempo+=multiplicadordecompra;
        precos[10]=precosbase[10] * (tempo+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        atualizarasteroides();
        atualizarplanetas();
        atualizargalaxias();
        atualizaruniversos();
        atualizardelorean();
        dinheiro-=precos[10]*multiplicadordecompra;
        atualizarcontador();
        return;
    }
    moneyerrorbox();
}