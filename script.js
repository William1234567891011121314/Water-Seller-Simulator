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
var auxbool = [true, true, true, true, true, true, true, true];
var multiplicadores = [1, 10, 200, 500, 10000, 100000, 500000, 10**7, 10**8, 10**9, 10**10];
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
        dinheiro += objetos[0] * multiplicadores[0] + (objetos[1] * multiplicadores[1]) + (objetos[2] * multiplicadores[2]) + (objetos[3] * multiplicadores[3]) + (objetos[4] * multiplicadores[4]) + (objetos[5] * multiplicadores[5]) + (objetos[6] * multiplicadores[6]) + (objetos[7] * multiplicadores[7]) + (objetos[8] * multiplicadores[8]) + (objetos[9] * multiplicadores[9]) + (objetos[10] * multiplicadores[10]);
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
        errorbox.style.top = "18vw";
        errorbox.style.left  = "31vw";
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
        errorbox.style.top = "18vw";
        errorbox.style.left  = "31vw";
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
        let firsteventinformationdiv = document.createElement("div");
        let firsteventbutton = document.createElement("button");
        let firsteventinformation = document.createElement("img");
        let firsteventinformationtext = document.createElement("p");
        let firsteventinformationdes = document.createElement("div");
        firsteventinformationtext.innerHTML = "Comprar curso do metaforando.";
        document.getElementById("loja").appendChild(firstevent);
        firstevent.appendChild(firsteventinformationdiv);
        firstevent.appendChild(firsteventbutton);
        firsteventinformationdiv.appendChild(firsteventinformation);
        firsteventinformationdiv.appendChild(firsteventinformationtext);
        firstevent.appendChild(firsteventinformationdes);
        firsteventinformation.setAttribute("src", "./assets/Information.png");
        firsteventinformationdiv.setAttribute("class", "ultimo");
        firsteventinformationdes.innerHTML = "Aumenta a quantidade de dinheiro ganho por click para 4."
        firsteventbutton.innerHTML = "R$1500";
        firstevent.style.position = "relative";
        firsteventinformation.style.height = "3vw";
        firsteventinformation.style.margin = "1vw";
        firsteventinformation.style.cursor = "pointer";
        firsteventinformationdes.style.border = "1px solid black";
        firsteventinformationdes.style.backgroundColor = "white"
        firsteventinformationdes.style.position = "absolute";
        firsteventinformationdes.style.display = "none";
        firsteventinformationtext.style.fontSize = "1.4vw";
        firsteventinformation.addEventListener('mouseover', function() {
            firsteventinformationdes.style.display = "block";
        });
        firsteventinformation.addEventListener('mouseout', function() {
            firsteventinformationdes.style.display = "none";
        });
        auxbool[0] = false;
        auxbool[7] = false;
        firsteventbutton.onclick = function() {
            if(dinheiro>=1500){
                dinheiro-=1500;
                atualizarcontador();
                clickmodifier += 3;
                document.getElementById("loja").removeChild(firstevent);
                auxbool[7] = true;
                return
            }
            moneyerrorbox();
        }
    }
    if(clicks>=1200 && auxbool[1]){
        let secondevent = document.createElement("div");
        let secondeventbutton = document.createElement("button");
        let secondeventinformationdiv = document.createElement("div");
        let secondeventinformation = document.createElement("img");
        let secondeventinformationtext = document.createElement("p");
        let secondeventinformationdes = document.createElement("div");
        document.getElementById("loja").appendChild(secondevent);
        secondeventinformationtext.innerHTML = "Pagar comissão para os vendedores.";
        secondevent.appendChild(secondeventinformationdiv);
        secondevent.appendChild(secondeventbutton);
        secondeventinformationdiv.appendChild(secondeventinformation);
        secondeventinformationdiv.appendChild(secondeventinformationtext);
        secondevent.appendChild(secondeventinformationdes);
        secondeventinformation.setAttribute("src", "./assets/Information.png");
        secondeventinformationdiv.setAttribute("class", "ultimo");
        secondeventinformationdes.innerHTML = "Dobra o lucro dos vendedores.";
        secondeventbutton.innerHTML = "R$6000";
        secondevent.style.position = "relative";
        secondeventinformation.style.height = "3vw";
        secondeventinformation.style.margin = "1vw";
        secondeventinformation.style.cursor = "pointer";
        secondeventinformationdes.style.border = "1px solid black";
        secondeventinformationdes.style.backgroundColor = "white"
        secondeventinformationdes.style.position = "absolute";
        secondeventinformationdes.style.display = "none";
        secondeventinformationtext.style.fontSize = "1.4vw";
        secondeventinformation.addEventListener('mouseover', function() {
            secondeventinformationdes.style.display = "block";
        });
        secondeventinformation.addEventListener('mouseout', function() {
            secondeventinformationdes.style.display = "none";
        });
        auxbool[1] = false;
        auxbool[7] = false;
        secondeventbutton.onclick = function() {
            if(dinheiro>=6000){
                dinheiro-=6000;
                atualizarcontador();
                multiplicadores[0] = 2;
                document.getElementById("loja").removeChild(secondevent);
                auxbool[7] = true;
                return
            }
            moneyerrorbox();
        }
    }
    if(objetos[5]>=1 && auxbool[2]){
        let espacialevent = document.createElement("div");
        let espacialeventbutton = document.createElement("button");
        let espacialeventinformationdiv = document.createElement("div");
        let espacialeventinformation = document.createElement("img");
        let espacialeventinformationtext = document.createElement("p");
        let espacialeventinformationdes = document.createElement("div");
        espacialeventinformationtext.innerHTML = "Fundar agência espacial";
        document.getElementById("loja").appendChild(espacialevent);
        espacialevent.appendChild(espacialeventinformationdiv);
        espacialevent.appendChild(espacialeventbutton);
        espacialeventbutton.innerHTML = "R$350 Milhões";
        espacialeventinformationdiv.appendChild(espacialeventinformation);
        espacialeventinformationdiv.appendChild(espacialeventinformationtext);
        espacialevent.appendChild(espacialeventinformationdes);
        espacialeventinformation.setAttribute("src", "./assets/Information.png");
        espacialeventinformationdiv.setAttribute("class", "ultimo");
        espacialeventinformationdes.innerHTML = "Permite vender água no espaço.";
        espacialevent.style.position = "relative";
        espacialeventinformation.style.height = "3vw";
        espacialeventinformation.style.margin = "1vw";
        espacialeventinformation.style.cursor = "pointer";
        espacialeventinformationdes.style.border = "1px solid black";
        espacialeventinformationdes.style.backgroundColor = "white"
        espacialeventinformationdes.style.position = "absolute";
        espacialeventinformationdes.style.display = "none";
        espacialeventinformationtext.style.fontSize = "1.4vw";
        espacialeventinformation.addEventListener('mouseover', function() {
            espacialeventinformationdes.style.display = "block";
        });
        espacialeventinformation.addEventListener('mouseout', function() {
            espacialeventinformationdes.style.display = "none";
        });
        auxbool[2] = false;
        auxbool[7] = false;
        espacialeventbutton.onclick = function() {
            if(dinheiro>=350000000){
                dinheiro-=350000000;
                atualizarcontador();
                agenciaespacial = true;
                document.getElementById("loja").removeChild(espacialevent);
                auxbool[7] = true;
                return;
            }
            moneyerrorbox();
        }
    }
    if(clicks>=1500 && auxbool[3]){
        let multiplicadorevent = document.createElement("div");
        let multiplicadoreventbutton = document.createElement("button");
        let multiplicadoreventinformationdiv = document.createElement("div");
        let multiplicadoreventinformation = document.createElement("img");
        let multiplicadoreventinformationtext = document.createElement("p");
        let multiplicadoreventinformationdes = document.createElement("div");
        multiplicadoreventinformationtext.innerHTML = "Comprar um botão multiplicador de compras.";
        document.getElementById("loja").appendChild(multiplicadorevent);
        multiplicadorevent.appendChild(multiplicadoreventinformationdiv);
        multiplicadorevent.appendChild(multiplicadoreventbutton);
        multiplicadoreventbutton.innerHTML = "R$10000";
        multiplicadoreventinformationdiv.appendChild(multiplicadoreventinformation);
        multiplicadoreventinformationdiv.appendChild(multiplicadoreventinformationtext);
        multiplicadorevent.appendChild(multiplicadoreventinformationdes);
        multiplicadoreventinformation.setAttribute("src", "./assets/Information.png");
        multiplicadoreventinformationdiv.setAttribute("class", "ultimo");
        multiplicadoreventinformationdes.innerHTML = "Com esse botão você pode comprar 10 ou 100 itens com um único click!";
        multiplicadorevent.style.position = "relative";
        multiplicadoreventinformation.style.height = "3vw";
        multiplicadoreventinformation.style.margin = "1vw";
        multiplicadoreventinformation.style.cursor = "pointer";
        multiplicadoreventinformationdes.style.border = "1px solid black";
        multiplicadoreventinformationdes.style.backgroundColor = "white"
        multiplicadoreventinformationdes.style.position = "absolute";
        multiplicadoreventinformationdes.style.display = "none";
        multiplicadoreventinformationtext.style.fontSize = "1.4vw";
        multiplicadoreventinformation.addEventListener('mouseover', function() {
            multiplicadoreventinformationdes.style.display = "block";
        });
        multiplicadoreventinformation.addEventListener('mouseout', function() {
            multiplicadoreventinformationdes.style.display = "none";
        });
        auxbool[3] = false;
        auxbool[7] = false;
        multiplicadoreventbutton.onclick = function() {
            if(dinheiro>=10000){
                dinheiro-=10000;
                atualizarcontador();
                multiplicador.style.display = "block";
                document.getElementById("loja").removeChild(multiplicadorevent);
                multiplicador.innerHTML = multiplicadordecompra + "x";
                auxbool[7] = true;
                return;
            }
            moneyerrorbox();
        }
    }
    if(clicks>=2200 && auxbool[4]){
        let thirdclickevent = document.createElement("div");
        let thirdeventbutton = document.createElement("button");
        let thirdeventinformationdiv = document.createElement("div");
        let thirdeventinformation = document.createElement("img");
        let thirdeventinformationtext = document.createElement("p");
        let thirdeventinformationdes = document.createElement("div");
        document.getElementById("loja").appendChild(thirdclickevent);
        thirdeventinformationtext.innerHTML = "Investir em propaganda na internet.";
        thirdclickevent.appendChild(thirdeventinformationdiv);
        thirdclickevent.appendChild(thirdeventbutton);
        thirdeventinformationdiv.appendChild(thirdeventinformation);
        thirdeventinformationdiv.appendChild(thirdeventinformationtext);
        thirdclickevent.appendChild(thirdeventinformationdes);
        thirdeventinformation.setAttribute("src", "./assets/Information.png");
        thirdeventinformationdiv.setAttribute("class", "ultimo");
        thirdeventinformationdes.innerHTML = "Recarga de dinheiro 20% mais rápida.";
        thirdeventbutton.innerHTML = "R$50000";
        thirdclickevent.style.position = "relative";
        thirdeventinformation.style.height = "3vw";
        thirdeventinformation.style.margin = "1vw";
        thirdeventinformation.style.cursor = "pointer";
        thirdeventinformationdes.style.border = "1px solid black";
        thirdeventinformationdes.style.backgroundColor = "white"
        thirdeventinformationdes.style.position = "absolute";
        thirdeventinformationdes.style.display = "none";
        thirdeventinformationtext.style.fontSize = "1.4vw";
        thirdeventinformation.addEventListener('mouseover', function() {
            thirdeventinformationdes.style.display = "block";
        });
        thirdeventinformation.addEventListener('mouseout', function() {
            thirdeventinformationdes.style.display = "none";
        });
        auxbool[4] = false;
        auxbool[7] = false;
        thirdeventbutton.onclick = function() {
            if(dinheiro>=50000){
                dinheiro-=50000;
                atualizarcontador();
                moneytime = 800;
                clearInterval(moneyloop);
                atualizardinheiro();
                document.getElementById("loja").removeChild(thirdclickevent);
                auxbool[7] = true;
                return;
            }
            moneyerrorbox();
        }
    }
    if(auxbool[6] && auxbool[7]){
        let disponibilidade = document.createElement("div");
        let disponibilidadetxt = document.createElement("p");
        let disponibilidadebutton = document.createElement("button");
        loja.appendChild(disponibilidade);
        disponibilidade.appendChild(disponibilidadetxt);
        disponibilidade.appendChild(disponibilidadebutton);
        disponibilidade.setAttribute("id", "nadanaloja")
        disponibilidadetxt.innerHTML = "Não há nada disponível por enquanto.";
        disponibilidadebutton.innerHTML = "Atualizar loja";
        disponibilidade.style.borderBottom = "0px"
        auxbool[6] = false;
        disponibilidadebutton.onclick = function() {
            verificarloja();
            if(!auxbool[7]){
                loja.removeChild(disponibilidade);
            }
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