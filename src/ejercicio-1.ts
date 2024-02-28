//Nombre del archivo: ejercicio-1.ts
//Descripción: Dado un conjunto de referencias bibliográficas, se desea modelar un gestor de referencias bibliográficas que permita añadir, mostrar, buscar y exportar referencias bibliográficas en formato IEEE.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 03/02/2024

abstract class Item {
  constructor(protected name: string) {}

  abstract getName(): string;
}

class Box<T extends Item> {
  private items: T[] = [];

  addItem(item: T): void {
      this.items.push(item);
  }

  removeItem(item: T): void {
      const index = this.items.indexOf(item);
      if (index > -1) {
          this.items.splice(index, 1);
      }
  }

  listItems(): void {
      this.items.forEach(item => console.log(item.getName()));
  }

  findItem(name: string): T | undefined {
      return this.items.find(item => item.getName() === name);
  }
}

// Crear una clase concreta que extienda de Item
class Furniture extends Item {
  constructor(name: string) {
      super(name);
  }
  getName(): string {
      return this.name;
  }
}

// Crear una nueva caja
const box = new Box<Furniture>();

// Crear nuevos muebles
const chair = new Furniture('Chair');
const table = new Furniture('Table');


// Añadir los muebles a la caja
box.addItem(chair);
box.addItem(table);

// Listar los items en la caja
box.listItems(); // Debería imprimir "Chair" y "Table"

// Buscar un item en la caja
const foundItem = box.findItem('Chair');
console.log(foundItem); // Debería imprimir el objeto Furniture para la silla

// Eliminar un item de la caja
box.removeItem(chair);

// Listar los items en la caja de nuevo
box.listItems(); // Ahora solo debería imprimir "Table"

