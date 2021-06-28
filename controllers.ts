import { ProductCollection } from "./models";

class ProducController {
  productos: ProductCollection;
  constructor() {
    this.productos = new ProductCollection();
  }
  processOptions(option) {
    if (option.search) {
      return this.productos.getById(option.search);
    } else {
      return this.productos.getAll();
    }
  }
}
export { ProducController, ProductCollection };
