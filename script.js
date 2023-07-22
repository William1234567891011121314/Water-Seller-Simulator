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
var aux = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
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
        txt[5].innerHTML = "Minerar asteroides de gelo.";
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
function verificarloja() {
    if(clicks>=400 && aux[0]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Comprar curso do metaforando.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Aumenta a quantidade de dinheiro ganho por click para 4.";
        eventbutton.innerHTML = "R$1500";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=1500){
                dinheiro-=1500;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                clickmodifier +=3;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[0] = false;
    }
    if(objetos[0]>=50 && aux[1]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Pagar comissão para os vendedores.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos vendedores.";
        eventbutton.innerHTML = "R$12000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=12000){
                dinheiro-=12000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[0] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[1] = false;
    }
    if(objetos[1]>=50 && aux[2]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Instalar modo turbo nas motos dos motoboys.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos motoboys.";
        eventbutton.innerHTML = "R$16000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=16000){
                dinheiro-=16000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[1] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[2] = false;
    }
    if(objetos[2]>=50 && aux[3]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Comprar alto-falante mais alto para os carros.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos carros.";
        eventbutton.innerHTML =  "R$80000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=80000){
                dinheiro-=80000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[2] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[3] = false;
    }
    if(objetos[3]>=50 && aux[4]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Comprar tanque de água maior para os caminhões pipa.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos caminhões pipa.";
        eventbutton.innerHTML =  "R$200000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=200000){
                dinheiro-=200000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[3] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[4] = false;
    }
    if(objetos[4]>=50 && aux[5]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Forçar seus funcionários a fazer hora extra.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro das fábricas.";
        eventbutton.innerHTML =  "R$4 Milhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=4000000){
                dinheiro-=4000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[4] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[5] = false;
    }
    if(objetos[5]>=50 && aux[6]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Instalar esteiras entre fábrcas nos polos industriais.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos polos industriais.";
        eventbutton.innerHTML =  "R$40 Milhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=40000000){
                dinheiro-=40000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[5] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[6] = false;
    }
    if(objetos[6]>=50 && aux[7]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Desenvolver velas solares.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro dos mineradores de asteroides.";
        eventbutton.innerHTML =  "R$400 Milhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=400000000){
                dinheiro-=400000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[6] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[7] = false;
    }
    if(objetos[7]>=50 && aux[8]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Desenvolver motor de antimatéria.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Dobra o lucro das naves inter-planetárias.";
        eventbutton.innerHTML =  "R$4 Bilhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=4000000000){
                dinheiro-=4000000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicadores[7] *= 2;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[8] = false;
    }
    if(objetos[7]>0 && aux[9]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Desenvolver motor de dobra espacial.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Torna possível viagens inter-galacticas.";
        eventbutton.innerHTML =  "R$50 Bilhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=50000000000){
                dinheiro-=50000000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                tecnologias[1] = true;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[9] = false;
    }
    if(objetos[8]>0 && aux[10]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Desenvolver propulsores de viagem interdimensional.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Torna possível viagens entre universos.";
        eventbutton.innerHTML =  "R$400 Bilhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=400000000000){
                dinheiro-=400000000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                tecnologias[2] = true;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[10] = false;
    }
    if(objetos[9]>0 && aux[11]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Desenvolver máquina de viagem no tempo.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Torna possível viagens no tempo.";
        eventbutton.innerHTML =  "R$4 Trilhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=4000000000000){
                dinheiro-=4000000000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                tecnologias[3] = true;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[11] = false;
    }
    if(objetos[5]>=1 && aux[12]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Fundar agência espacial.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Permite vender água no espaço.";
        eventbutton.innerHTML =  "R$350 Milhões";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=350000000){
                dinheiro-=350000000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                tecnologias[0] = true;
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[12] = false;
    }
    if(clicks>=1500 && aux[13]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Comprar um botão multiplicador de compras.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Com esse botão você pode comprar 10 ou 100 itens com um único click!";
        eventbutton.innerHTML =  "R$10000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=10000){
                dinheiro-=10000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                multiplicador.style.display = "block";
                multiplicador.innerHTML = "1x"
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[13] = false;
    }
    if(clicks>=2200 && aux[14]){
        let event = document.createElement("div");
        let eventbutton = document.createElement("button");
        let eventinformationdiv = document.createElement("div");
        let eventinformation = document.createElement("img");
        let eventinformationtext = document.createElement("p");
        let eventinformationdes = document.createElement("div");
        eventinformationtext.innerHTML = "Investir em propaganda na internet.";
        document.getElementById("loja").appendChild(event);
        event.appendChild(eventinformationdiv);
        event.appendChild(eventbutton);
        eventinformationdiv.appendChild(eventinformation);
        eventinformationdiv.appendChild(eventinformationtext);
        event.appendChild(eventinformationdes);
        eventinformation.setAttribute("src", "./assets/Information.png");
        eventinformationdiv.setAttribute("class", "ultimo");
        eventinformationdes.innerHTML = "Recarga de dinheiro 20% mais rápida.";
        eventbutton.innerHTML =  "R$50000";
        event.style.position = "relative";
        eventinformation.style.height = "3vw";
        eventinformation.style.margin = "1vw";
        eventinformation.style.cursor = "pointer";
        eventinformationdes.style.border = "1px solid black";
        eventinformationdes.style.backgroundColor = "white";
        eventinformationdes.style.position = "absolute";
        eventinformationdes.style.display = "none";
        eventinformationtext.style.fontSize = "1.4vw";
        eventinformation.addEventListener('mouseover', function() {
            eventinformationdes.style.display = "block";
        });
        eventinformation.addEventListener('mouseout', function() {
            eventinformationdes.style.display = "none";
        });
        lojanotification+=1;
        atualizar.notifications();
        eventbutton.onclick = function() {
            if(dinheiro>=50000){
                dinheiro-=50000;
                lojanotification-=1;
                atualizar.contador();
                atualizar.notifications();
                moneytime = 800, clearInterval(moneyloop);
                document.getElementById("loja").removeChild(event);
                return;
            }
            errorbox("Você não tem dinheiro o suficiente para efetuar essa compra!");
        }
        aux[14] = false;
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
dinheirobutton.onclick = function() {
    clicks++;
    dinheiro+=clickmodifier;
    atualizar.contador();
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