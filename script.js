alert("Bienvenida a la consecionaria GAMA ULTRA");

let carros = [
  {
    id: "1",
    nombre: "Audi RS7",
    estado: "Nuevo",
    marca: "Audi",
    precio: "166,495",
  },
  {
    id: "2",
    nombre: "Lamborghini Murcielago",
    estado: "Nuevo",
    marca: "Lamborghini",
    precio: "392,250",
  },
  {
    id: "3",
    nombre: "Ferrari SF90",
    estado: "Usado",
    marca: "Ferrari",
    precio: "507,300",
  },
  {
    id: "4",
    nombre: "Mclaren 720s",
    estado: "Nuevo",
    marca: "Mclaren",
    precio: "284,700",
  },
  {
    id: "5",
    nombre: "BMW I8",
    estado: "Usado",
    marca: "BMW",
    precio: "163,300",
  },
];

let vehiculosOfresidos = `Tenemos para ofrecerte \n`;
let productoAComprar = [];

function tipoDeVehiculo() {
  for (const carro of carros) {
    vehiculosOfresidos += `\n ${carro.id} - ${carro.nombre}`;
  }

  let respuesta = Number(
    prompt(`${vehiculosOfresidos} \n ¿Cual te gustaria llevar?`)
  );

  while (isNaN(respuesta)) {
    alert("Porfavor introduce el numero del carro que le gusta");
    respuesta = prompt(`${vehiculosOfresidos} \n ¿Cual le gustaria llevar?`);
  }

  switch (respuesta) {
    case 1:
      productoAComprar.push(carros[0]);
      alert(`El auto ${carros[0].nombre} ya esta en porceso para su entrega`);
      break;
    case 2:
      productoAComprar.push(carros[1]);
      alert(`El auto ${carros[1].nombre} ya esta en porceso para su entrega`);
      break;
    case 3:
      productoAComprar.push(carros[2]);
      alert(`El auto ${carros[2].nombre} ya esta en porceso para su entrega`);
      break;
    case 4:
      productoAComprar.push(carros[3]);
      alert(`El auto ${carros[3].nombre} ya esta en porceso para su entrega`);
      break;
    case 5:
      productoAComprar.push(carros[4]);
      alert(`El auto ${carros[4].nombre} ya esta en porceso para su entrega`);
      break;
    default:
      alert("Gracias por su visita");
      break;
  }

  if (respuesta != "") {
    let otraPregunta = prompt(
      `¿le gustaria saber algo mas sobre el auto? \n - Si \n - No`
    ).toLowerCase();
    let info = carros.find((el) => (el.id = respuesta));

    if (otraPregunta == "si") {
      alert(
        "Ok, pase con la especialista ella le dará toda la informacion (Consola)"
      );
      console.log(info);
    } else if (otraPregunta == "no") {
      alert("Perfecto, pasemos al pago entonces");
    } else {
      alert("Asumo que no le interesa");
    }
  }

  let infoDePago = `Con la compra del coche ${productoAComprar[0].nombre} y todos sus papeles la cuenta sale en ${productoAComprar[0].precio} USD$`;
  alert(infoDePago);

  let pago = prompt(
    "Con que metodo desea pagar: \n - Efectivo \n - Tarjeta"
  ).toLowerCase();
  while (pago == "") {
    alert("Porfavor ingrese un metodo de pago valido para continuar");
    pago = prompt(
      "Con que metodo desea pagar: \n - Efectivo \n - Tarjeta"
    ).toLowerCase();
  }

  if (pago == "efectivo") {
    let pagoEnEfectivo = prompt(
      `Perfecto, le resibo ${productoAComprar[0].precio} USD$ (Ingrese el monto a entregar)`
    );
    while (pagoEnEfectivo != productoAComprar[0].precio) {
      alert("Monto erroneo");
      pagoEnEfectivo = prompt(
        `Perfecto, le resibo ${productoAComprar[0].precio} (Ingrese el monto a entregar)`
      );
    }
  } else if (pago == "tarjeta") {
    alert(
      "Perfecto, Ingrese el Monto a pagar y la contraseña pata efectuar el pago"
    );
    let pagoConTarjetaMonto = prompt(
      `Monto (${productoAComprar[0].precio} USD$)`
    );
    while (pagoConTarjetaMonto != productoAComprar[0].precio) {
        alert("Monto erroneo");
        pagoConTarjetaMonto = prompt(
          `Monto (${productoAComprar[0].precio} USD$)`
        );
      }
    let pagoConTarjetaContraceña = prompt("Contraceña");
    
    while (pagoConTarjetaContraceña == "") {
      alert("Porfavor ingrese una contraseña valida");
      pagoConTarjetaContraceña = prompt("Contraceña");
    }
  }
    alert("Perfecto, el coche esta listo");
    alert("Muchas gracias por preferirnos, que tengo buen dia");
    
}

tipoDeVehiculo();
