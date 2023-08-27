// SIMULADOR DE PRESTAMOS BANCO CODER PARA JUBILADOS
// Entradas
const TNA = 138;
const TEA = 261.08;
const CFTEA = 355.90;
const descuentoJubilados = 35;
const montoSolicitadoMax = 2000000;
let interesSocio;
let interesCuota;
let jubilado = "NO";

// Preguntar si sos jubilado
let sosJubilado = ingresarJubilado();

// Preguntar por tu Tipo de Socio
let tipoSocio = ingresarTipoSocio();
interesSocio = calcularInteresSocio(tipoSocio);

// Preguntar por el Monto del Préstamo
let montoSolicitado = ingresarMontoSolicitado();

// Preguntar por la Cantidad de Cuotas
let cuotas = solicitarCuotas();
interesCuota = calcularInteresCuota(cuotas);

// Cálculos de Interes
let valorCuota = calculoValorCuota();

// Salida
let salida = informarCalculoPrestamo(); 
alert(salida);
console.log(salida);