import * as minimist from "minimist";
import { ProducController } from "./controllers";

function parsear(argv) {
  const resultado = minimist(argv);
  return { search: resultado.search };
}

function main() {
  const controller = new ProducController();
  const params = parsear(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  resultado.then((resultado) => console.log(resultado));
}
main();
