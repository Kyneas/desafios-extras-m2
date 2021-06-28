import * as jsonfile from "jsonfile";
class Product {
  id: number;
  name: string;
}

class ProductCollection {
  productos: Product[] = [];

  getAll() {
    const todos = jsonfile.readFile("./products.json");
    return todos;
  }
  getById(id: number) {
    const buscado = this.getAll().then((json) =>
      json.find((producto) => producto.id == id)
    );
    return buscado;
  }
}
export { ProductCollection };
