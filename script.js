//variáveis
var vendedores = document.getElementById("vendedores");
var botaovendedor  = document.getElementById("vendedorbutton");
var txtmotoboy = document.getElementById("txtmaquinasdevenda");
var motoboycounter = document.getElementById("maquinasdevenda");
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
var precovendedor = 150;
var precomotoboy = 1500;
var precocarros = 10000;
var precopipa = 50000;
var precofabrica = 1000000;
var precopolo = 10000000;
var precoasteroide = 100000000;
var precoplaneta = 10**9;
var precogalaxia = 10**10;
var precouniverso = 10**11;
var precotempo = 10**12;
var aux;
var aux1 = 1;
var aux2 = 1;
var aux3 = 1;
var aux4 = 1;
var clicks = 0;
var clickmodifier = 1;
var agenciaespacial = 0;
//funções
function verificador() {
    if(preco<1000000){
        aux = "";
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
    document.getElementById("contador").innerHTML = dinheiro;
}
function atualizardinheiro() {
    setInterval(() => {
        dinheiro += vendedores + (motoboy * 10) + (carros * 100) + (pipas * 500) + (fabricas * 10000) + (polos * 100000) + (asteroides * 500000) + (planetas * 10**7) + (galaxias * 10**8) + (universos * 10**9) + (tempo * 10**10);
        atualizarcontador();
    }, 1000)
}
function atualizarvendedor() {
    preco=precovendedor;
    vendedores.innerHTML = vendedores;
    verificador();
    botaovendedor.innerHTML = "R$" + preco + " " + aux;
}
function atualizarmaquinadevenda() {
    preco=precomotoboy;
    txtmotoboy.innerHTML = "Contratar motoboy";
    motoboycounter.innerHTML = motoboy;
    verificador();
    document.getElementById("maquinadevendabutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarcarros() {
    preco=precocarros;
    document.getElementById("txtcarros").innerHTML = "Comprar carro da água.";
    document.getElementById("carroscounter").innerHTML = carros;
    document.getElementById("carrosbutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarpipa() {
    preco=precopipa;
    document.getElementById("txtpipa").innerHTML = "Comprar caminhão pipa.";
    document.getElementById("pipacounter").innerHTML = pipas;
    verificador();
    document.getElementById("pipabutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarfabrica() {
    preco=precofabrica;
    document.getElementById("txtfabrica").innerHTML = "Fábrica de garrafas d'água.";
    document.getElementById("fabricacounter").innerHTML = fabricas;
    verificador();
    document.getElementById("fabricabutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarpolos() {
    preco=precopolo;
    document.getElementById("txtpolo").innerHTML = "Construir um polo industrial.";
    document.getElementById("polocounter").innerHTML = polos;
    verificador();
    document.getElementById("polobutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarasteroides() {
    preco=precoasteroide;
    document.getElementById("txtasteroides").innerHTML = "Minerar asteroides de gelo.";
    document.getElementById("asteroidecounter").innerHTML = asteroides;
    verificador();
    document.getElementById("asteroidebutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizarplanetas() {
    preco=precoplaneta;
    document.getElementById("txtplanetas").innerHTML = "Naves inter-planetárias.";
    document.getElementById("planetascounter").innerHTML = planetas;
    verificador();
    document.getElementById("planetasbutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizargalaxias() {
    preco=precogalaxia;
    document.getElementById("txtgalaxias").innerHTML = "Naves inter-galácticas.";
    document.getElementById("galaxiascounter").innerHTML = galaxias;
    verificador();
    document.getElementById("galaxiasbutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizaruniversos() {
    preco=precouniverso;
    document.getElementById("txtuniversos").innerHTML = "Naves inter-universais.";
    document.getElementById("universoscounter").innerHTML = universos;
    verificador();
    document.getElementById("universosbutton").innerHTML = "R$" + preco + " " + aux;
}
function atualizardelorean() {
    preco=precotempo;
    document.getElementById("txttempo").innerHTML = "Comprar máquinas do tempo.";
    document.getElementById("tempocounter").innerHTML = tempo;
    verificador();
    document.getElementById("tempobutton").innerHTML = "R$" + preco + " " + aux;
}
function spaceerrorbox() {
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
    }
}
function moneyerrorbox() {
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
    }
}
function verificarloja() {
    if(clicks>=400 && aux1){
        let firstevent = document.createElement("div");
        let firsteventbutton = document.createElement("button");
        firstevent.innerHTML = "Comprar curso do metaforando";
        document.getElementById("loja").appendChild(firstevent);
        firstevent.appendChild(firsteventbutton);
        firsteventbutton.innerHTML = "R$1500";
        aux1 = 0;
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
    if(clicks>=1200 && aux3){
        let secondclickevent = document.createElement("div");
        let secondclickeventbutton = document.createElement("button");
        document.getElementById("loja").appendChild(secondclickevent);
        secondclickevent.innerHTML = "Alugar outdoor";
        secondclickevent.appendChild(secondclickeventbutton);
        secondclickeventbutton.innerHTML = "R$6000";
        aux3 = 0;
        secondclickeventbutton.onclick = function() {
            if(dinheiro>=6000){
                dinheiro-=6000;
                atualizarcontador();
                clickmodifier += 12;
                document.getElementById("loja").removeChild(secondclickevent);
                return
            }
            moneyerrorbox();
        }
    }
    if(polos>=1 && aux2){
        let espacialevent = document.createElement("div");
        let espacialeventbutton = document.createElement("button");
        espacialevent.innerHTML = "Fundar agÃªncia espacial";
        document.getElementById("loja").appendChild(espacialevent);
        espacialevent.appendChild(espacialeventbutton);
        espacialeventbutton.innerHTML = "R$350 Milhões";
        aux2 = 0;
        espacialeventbutton.onclick = function() {
            if(dinheiro>=350000000){
                dinheiro-=350000000;
                atualizarcontador();
                agenciaespacial = 1;
                document.getElementById("loja").removeChild(espacialevent);
            }
        }
    }
}
//cÃ³digo
atualizardinheiro();
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
document.getElementById("umafr").onclick = function() {
    clicks++;
    dinheiro+=clickmodifier;
    atualizarcontador();
    setTimeout(() => {
        garrafa.style.transform = "scale(100%)";
    }, 50)
    garrafa.style.transform = "scale(65%)";
}
document.getElementById("vendedorbutton").onclick = function() {
    if(dinheiro>=precovendedor){
        vendedores++;
        dinheiro-=precovendedor;
        atualizarcontador();
        precovendedor=150 * (vendedores+1);
        atualizarvendedor();
        atualizarmaquinadevenda();
        return
    }
    moneyerrorbox();
}
document.getElementById("maquinadevendabutton").onclick = function() {
    if(dinheiro>=precomotoboy){
        motoboy++;
        dinheiro-=precomotoboy;
        atualizarcontador();
        precomotoboy=1500 * (motoboy+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        return
    }
    moneyerrorbox();
}
document.getElementById("carrosbutton").onclick = function() {
    if(dinheiro>=precocarros){
        carros++;
        dinheiro-=precocarros;
        atualizarcontador();
        precocarros=10000 * (carros+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        return
    }
    moneyerrorbox();
}
document.getElementById("pipabutton").onclick = function() {
    if(dinheiro>=precopipa){
        pipas++;
        dinheiro-=precopipa;
        atualizarcontador();
        precopipa=50000 * (pipas+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        return
    }
    moneyerrorbox();
}
document.getElementById("fabricabutton").onclick = function() {
    if(dinheiro>=precofabrica){
        fabricas++;
        dinheiro-=precofabrica;
        atualizarcontador();
        precofabrica=1000000 * (fabricas+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        return
    }
    moneyerrorbox();
}
document.getElementById("polobutton").onclick = function() {
    if(dinheiro>=precopolo){
        polos++;
        dinheiro-=precopolo;
        atualizarcontador();
        precopolo=10000000 * (polos+1);
        atualizarmaquinadevenda();
        atualizarcarros();
        atualizarpipa();
        atualizarfabrica();
        atualizarpolos();
        atualizarasteroides();
        return
    }
    moneyerrorbox();
}
document.getElementById("asteroidebutton").onclick = function() {
    if(dinheiro>=precoasteroide){
        if(agenciaespacial){
            asteroides++;
            dinheiro-=precoasteroide;
            atualizarcontador();
            precoasteroide=100000000 * (asteroides+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            return
        }
        spaceerrorbox();
        return
    }
    moneyerrorbox();
}
document.getElementById("planetasbutton").onclick = function() {
    if(dinheiro>=precoplaneta){
        if(agenciaespacial){
            planetas++;
            dinheiro-=precoplaneta;
            atualizarcontador();
            precoplaneta=10**9 * (planetas+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            return
        }
        spaceerrorbox();
        return
    }
    moneyerrorbox();
}
document.getElementById("galaxiasbutton").onclick = function() {
    if(dinheiro>=precogalaxia){
        if(agenciaespacial){
            galaxias++;
            dinheiro-=precogalaxia;
            atualizarcontador();
            precogalaxia=10**10 * (galaxias+1);
            atualizarmaquinadevenda();
            atualizarcarros();
            atualizarpipa();
            atualizarfabrica();
            atualizarpolos();
            atualizarasteroides();
            atualizarplanetas();
            atualizargalaxias();
            atualizaruniversos();
            return
        }
        spaceerrorbox();
        return
    }
    moneyerrorbox();
}
document.getElementById("universosbutton").onclick = function() {
    if(dinheiro>=precouniverso){
        if(agenciaespacial){
            universos++;
            dinheiro-=precouniverso;
            atualizarcontador();
            precouniverso=10**11 * (universos+1);
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
            return
        }
        spaceerrorbox();
        return
    }
    moneyerrorbox();
}
document.getElementById("tempobutton").onclick = function() {
    if(dinheiro>=precotempo){
        tempo++;
        dinheiro-=precotempo;
        atualizarcontador();
        precotempo=10**12 * (tempo+1);
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
        return
    }
    moneyerrorbox();
}