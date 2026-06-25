import inquirer from "inquirer";
import chalk from "chalk";

import duenoController from "./app/controllers/dueñoController.js";
import mascotaController from "./app/controllers/mascotaController.js";

function mostrarEncabezado() {
  console.clear();
}

async function init() {
  mostrarEncabezado();
  const setup = await inquirer.prompt([
    {
      type: "select",
      name: "opcion",
      message: `¿Qué deseas hacer?`,
      choices: [
        {
          name: "Gestionar Dueños",
          value: "1",
        },
        {
          name: "Gestionar Mascotas",
          value: "2",
        },
        {
          name: "Agendar Citas",
          value: "3",
        },
        {
          name: "Registrar Consultas",
          value: "4",
        },
        {
          name: "Ver Historial",
          value: "5",
        },
        {
          name: "Salir",
          value: "6",
        },
      ],
    },
  ]);

  console.log(chalk.bgGray.black("Opción seleccionada: " + setup.opcion));
  return setup.opcion;
}

async function MainMenu(opcion) {
  if (opcion === "1") {
    const dueno = new duenoController(opcion);
    await dueno.init();
  } else if (opcion === "2") {
    const mascota = new mascotaController(opcion);
    await mascota.init();
  } else if (opcion === "3") {
    console.log(chalk.bgYellow.black("Agendar citas (En desarrollo)"));
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } else if (opcion === "4") {
    console.log(chalk.bgBlue.white("Registrar consultas (En desarrollo)"));
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } else if (opcion === "5") {
    console.log(chalk.bgCyan.white("Ver historial (En desarrollo)"));
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } else if (opcion === "6") {
    // Lógica para salir
    console.log(chalk.green.bold("¡Hasta luego!"));
    process.exit(0);
  } else {
    console.log(
      chalk.bgRed.white(
        "Opción no válida. Por favor, selecciona una opción válida.",
      ),
    );
  }
}

//(async function () {
let opcion;
do {
  opcion = await init();
  await MainMenu(opcion);
} while (opcion !== "6");
//})();
