//variáveis
var vendedores = document.getElementById("vendedores");
var botaovendedor  = document.getElementById("vendedorbutton");
var txtmotoboy = document.getElementById("txtmaquinasdevenda");
var motoboycounter = document.getElementById("maquinasdevenda");
var motoboybutton = document.getElementById("maquinadevendabutton");
var txtcarros = document.getElementById("txtcarros");
var carroscounter = document.getElementById("carroscounter");
var carrosbutton = document.getElementById("carrosbutton");
var txtpipa = document.getElementById("txtpipa");
var pipacounter = document.getElementById("pipacounter");
var pipabutton = document.getElementById("pipabutton");
var txtfabrica = document.getElementById("txtfabrica");
var fabricacounter = document.getElementById("fabricacounter");
var fabricabutton = document.getElementById("fabricabutton");
var txtpolo = document.getElementById("txtpolo");
var polocounter = document.getElementById("polocounter");
var polobutton = document.getElementById("polobutton");
var txtasteroides = document.getElementById("txtasteroides");
var asteroidecounter = document.getElementById("asteroidecounter");
var asteroidebutton = document.getElementById("asteroidebutton");
var txtplanetas = document.getElementById("txtplanetas");
var planetascounter = document.getElementById("planetascounter");
var planetasbutton = document.getElementById("planetasbutton");
var txtgalaxias = document.getElementById("txtgalaxias");
var galaxiascounter = document.getElementById("galaxiascounter");
var galaxiasbutton = document.getElementById("galaxiasbutton");
var txtuniversos = document.getElementById("txtuniversos");
var universoscounter = document.getElementById("universoscounter");
var universosbutton = document.getElementById("universosbutton");
var txttempo = document.getElementById("txttempo");
var tempocounter = document.getElementById("tempocounter");
var tempobutton = document.getElementById("tempobutton");
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
var aux1 = true;
var aux2 = true;
var aux3 = true;
var clicks = 0;
var clickmodifier = 1;
var agenciaespacial = false;
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
    motoboybutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarcarros() {
    preco=precocarros;
    txtcarros.innerHTML = "Comprar carro da água.";
    carroscounter.innerHTML = carros;
    carrosbutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarpipa() {
    preco=precopipa;
    txtpipa.innerHTML = "Comprar caminhão pipa.";
    pipacounter.innerHTML = pipas;
    verificador();
    pipabutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarfabrica() {
    preco=precofabrica;
    txtfabrica.innerHTML = "Fábrica de garrafas d'água.";
    fabricacounter.innerHTML = fabricas;
    verificador();
    fabricabutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarpolos() {
    preco=precopolo;
    txtpolo.innerHTML = "Construir um polo industrial.";
    polocounter.innerHTML = polos;
    verificador();
    polobutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarasteroides() {
    preco=precoasteroide;
    txtasteroides.innerHTML = "Minerar asteroides de gelo.";
    asteroidecounter.innerHTML = asteroides;
    verificador();
    asteroidebutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizarplanetas() {
    preco=precoplaneta;
    txtplanetas.innerHTML = "Naves inter-planetárias.";
    planetascounter.innerHTML = planetas;
    verificador();
    planetasbutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizargalaxias() {
    preco=precogalaxia;
    txtgalaxias.innerHTML = "Naves inter-galácticas.";
    galaxiascounter.innerHTML = galaxias;
    verificador();
    galaxiasbutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizaruniversos() {
    preco=precouniverso;
    txtuniversos.innerHTML = "Naves inter-universais.";
    universoscounter.innerHTML = universos;
    verificador();
    universosbutton.innerHTML = "R$" + preco + " " + aux;
}
function atualizardelorean() {
    preco=precotempo;
    txttempo.innerHTML = "Comprar máquinas do tempo.";
    tempocounter.innerHTML = tempo;
    verificador();
    tempobutton.innerHTML = "R$" + preco + " " + aux;
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
        aux1 = false;
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
        aux3 = false;
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
        aux2 = false;
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