import { ProductCollection } from "./models";

class ProducController {
  productos: ProductCollection;
  constructor() {
    this.productos = new ProductCollection();
  }
  processOptions(option) {
    if (option.search == Number) {
      const encontrado = this.productos.getById(option.search);
      console.log(option.search);
      return encontrado;
    } else {
      return this.productos.getAll();
    }
  }
}
export { ProducController, ProductCollection };
