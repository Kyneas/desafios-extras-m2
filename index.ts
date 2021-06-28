import * as minimist from "minimist";
import { ProducController, ProductCollection } from "./controllers";

function parsear(argv) {
  const resultado = minimist(argv);
  return { search: resultado.search };
}

function main() {
  const controller = new ProducController();
  const productos = new ProductCollection();
  productos.getAll().then(() => {
    const params = parsear(process.argv.slice(2));
    const result = controller.processOptions(params);
    console.log(result);
  });
}

main();
