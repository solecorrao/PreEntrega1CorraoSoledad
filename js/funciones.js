
function ingresarJubilado() {
    let sosJubilado = prompt("Sos Jubilado?\n1- Sí\n2- No");

    while (sosJubilado != 1 && sosJubilado != 2) {
        alert("Solo es posible indicar 1- Sos Jubilado o 2- NO Sos Jubilado!");
        sosJubilado = prompt("Sos Jubilado?\n1- Sí\n2- No");
    }
    console.log("Sos jubilado?: " + sosJubilado);

    return sosJubilado;
}


function ingresarTipoSocio() {
    let tipoSocio = prompt("Ingrese el Tipo de Socio: Base/Eminent/Otro:").toUpperCase();

    return tipoSocio;
}


function calcularInteresSocio(tipoSocio) {
    if (tipoSocio == "Base") {
        interesSocio = 25;
    } else if (tipoSocio == "Eminent") {
        interesSocio = 30;
    } else {
        interesSocio = 35;
    }

    return interesSocio;
}

function ingresarMontoSolicitado() {
    let montoSolicitado = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + montoSolicitadoMax + ")"));

    while (montoSolicitado > montoSolicitadoMax) {
        alert("Superaste el Monto Máximo permitido! Máx: $" + montoSolicitadoMax);
        montoSolicitado = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + montoSolicitadoMax + ")"));
    }

    return montoSolicitado;
}

function solicitarCuotas() {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea devolver el préstamo: 6/12/24/36")); //17

    while (cuotas != 6 && cuotas != 12 && cuotas != 24 && cuotas != 36) {
        alert("Solo es posible solicitar en 6/12/24/36 Cuotas!");
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 6/12/24/36"))
    }

    return cuotas;
}

function calcularInteresCuota(cuotas) {
    if (cuotas == 6) {
        interesCuota = 50;
    } else if (cuotas == 12) {
        interesCuota = 100;
    } else if (cuotas == 24) {
        interesCuota = 200;
    } else {
        interesCuota = 300;
    }

    return interesCuota;
}

function calculoValorCuota() {
    let cuotaNeto = montoSolicitado / cuotas; 
    let interesSocioCuota = interesSocio / cuotas; 
    let interesCuotaCuota = interesCuota / cuotas;
    let tnaCuota = TNA / cuotas;
    let teaCuota = TEA / cuotas;
    let cfteaCuota = CFTEA / cuotas;

    let cuotaNetoInteresSocioCuota = (cuotaNeto * interesSocioCuota) / 100;
    let cuotaNetoInteresCuotaCuota = (cuotaNeto * interesCuotaCuota) / 100;
    let cuotaNetoTnaCuota = (cuotaNeto * tnaCuota) / 100;
    let cuotaNetoTeaCuota = (cuotaNeto * teaCuota) / 100;
    let cuotaNetoCfteaCuota = (cuotaNeto * cfteaCuota) / 100;

    let valorCuota = cuotaNeto + cuotaNetoInteresSocioCuota + cuotaNetoInteresCuotaCuota + cuotaNetoTnaCuota + cuotaNetoTeaCuota + cuotaNetoCfteaCuota;
    console.log("Valor de Cuota: $" + valorCuota);

    return valorCuota;
}

function informarCalculoPrestamo() {
    // Verificar si es Jubilado, se aplica el descuento informado
    if (sosJubilado == 1) {
    valorCuota = valorCuota - ((valorCuota * descuentoJubilados) / 100);
    console.log("Descuento aplicado: $" + valorCuota);
    jubilado = "SÍ";
    }
    
    let salida = "SIMULADOR DE PRÉSTAMO BANCARIO:\n\n";
    salida += "Sos Jubilado: " + jubilado + "\n";
    salida += "Tipo de Socio: " + tipoSocio + "\n";
    salida += "Monto del Préstamo: $" + montoSolicitado + "\n";
    salida += "Cuotas: " + cuotas + "\n\n";
    salida += "Total a Pagar:\n";
    salida += cuotas + " cuotas de $" + valorCuota.toFixed(2);
    
    return salida;
}