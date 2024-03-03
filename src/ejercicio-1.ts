//Nombre del archivo: ejercicio-1.ts
//Descripción: El objetivo de este ejercicio es crear un sistema de mudanzas que permita crear cajas con distintos tipos de items.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 03/02/2024

/**
 * Descripción: La interfaz Item define los métodos que deben implementar las clases que la implementen.
 */
export interface Item<T> {
    getName(): string;
    getItem(name: string): T | undefined;
    searchItem(Item: T): boolean;
    getWeight(Item: T): number;
    getItembyname(name: string): T | undefined;

}

/**
 * Descripción: La clase Box define un array de items de tipo T y métodos para añadir, eliminar, listar, buscar y ordenar los items.
 * @param item_collection Colección de items.
 */
export class Box<T extends Item<T>> {
  constructor(private item_collection: T[]) {
        this.item_collection = item_collection;
  }

  /**
   * Descripción: Devuelve el nombre del item en la posición index.
   * @param index Posición del item en el array.
   * @returns Nombre del item.
   * ```typescript
   * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
   * box.getName(0); // Debería imprimir "Chair Kitchen"
   * ```
   */
  getName(index: number): string {
    return this.item_collection[index].getName();
  }
  
    /**
     * Descripción: Añade un item a la colección.
     * @param item Item a añadir.
     * ```typescript
     * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
     * box.addItem(new Furniture('Chair Room', 120));
     * ```
     */
  addItem(item: T): void {
    this.item_collection.push(item);
  }
  
    /**
     * Descripción: Elimina un item de la colección.
     * @param item Item a eliminar.
     * ```typescript
     * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
     * box.removeItem(new Furniture('Chair Kitchen', 180));
     * ```
     */
  removeItem(item: T): void {
    const index = this.item_collection.indexOf(item);
    if (index > -1) {
        this.item_collection.splice(index, 1);
    }
  }
	
		/**
		 * Descripción: Devuelve el número de items en la colección.
		 * @returns Número de items.
		 * ```typescript
		 * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
		 * box.getNumberOfItems(); // Debería imprimir 2
		 * ```
		 */
  listItems(): string {
    return this.item_collection.map(item => item.getName()).join('\n') + '\n';
  }
   
		/**
		 * Descripción: Devuelve el número de items en la colección.
		 * @param item_find Item a buscar.
		 * @returns Número de items.
		 * ```typescript
		 * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
		 * box.getNumberOfItems(); // Debería imprimir 2
		 * ```
		 */
  findItem(item_find: T): T | undefined {
    for (const item of this.item_collection) {
      if (item.searchItem(item_find)) {
        return item;
      } 
    }
    return undefined;
  }

		/**
		 * Descripción: Devuelve el número de items en la colección.
		 * @returns Número de items.
		 * ```typescript
		 * const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
		 * box.getNumberOfItems(); // Debería imprimir 2
		 * ```
		 */
  sortItemsbyWeight(): void {    
    this.item_collection.sort((a, b) => a.getWeight(a) - b.getWeight(b))    
  }
}


/**
 * Descripción: La clase Clothing define un item de tipo Clothing con un nombre, peso y talla.
 * @param name Nombre del item.
 * @param weight Peso del item.
 * @param size Talla del item.
 * ```typescript
 * const camisa_nike = new Clothing('Shirt Nike', 100);
 * ```
 */
export class Clothing implements Item<Clothing> {
    constructor(private name: string, private weight: number, private size: string = 'M') {
        this.name = name;
        this.weight = weight;
    }
  
	/**
	 * Descripción: Devuelve el nombre del item.
	 * @returns Nombre del item.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getName(); // Debería imprimir "Shirt Nike"
	 * ```
	 */
    getName(): string {
        return this.name;
    }
    
	/**
	 * Descripción: Devuelve el peso del item.
	 * @param Item Item del que se quiere obtener el peso.
	 * @returns Peso del item.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getWeight(camisa_nike); // Debería imprimir 100
	 * ```
	 */
    getWeight(Item: Clothing): number {
        return Item.weight;
    }
    
	/**
	 * Descripción: Comprueba si el item es igual al item pasado como parámetro.
	 * @param Item Item con el que se quiere comparar.
	 * @returns true si el item es igual al item pasado como parámetro, false en caso contrario.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.searchItem(new Clothing('Shirt Nike', 100)); // Debería imprimir true
	 * ```
	 */
    searchItem(Item: Clothing): boolean {
        if (Item.name === this.name && Item.weight === this.weight && Item.size === this.size) {
            return true;
        } else {
            return false;
        }
    }
    
	/**
	 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
	 * @param name Nombre del item.
	 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getItem('Shirt Nike'); // Debería imprimir el objeto Clothing
	 * ```
	 */
    getItem(name: string): Clothing | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
		
		/**
		 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
		 * @param name Nombre del item.
		 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
		 * ```typescript
		 * const camisa_nike = new Clothing('Shirt Nike', 100);
		 * camisa_nike.getItembyname('Shirt Nike'); // Debería imprimir el objeto Clothing
		 * ```
		 */
    getItembyname(name: string): Clothing | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
}


/**
 * Descripción: La clase Furniture define un item de tipo Furniture con un nombre, peso y número de piezas.
 * @param name Nombre del item.
 * @param weight Peso del item.
 * @param pieces Número de piezas del item.
 * ```typescript
 * const silla = new Furniture('Chair Kitchen', 180);
 * ```
 */
export class Furniture implements Item<Furniture> {
    constructor(private name: string, private weight: number, private pieces: number = 1) {
        this.name = name;
        this.weight = weight;
    }
    
	/**
	 * Descripción: Devuelve el nombre del item.
	 * @returns Nombre del item.
	 * ```typescript
	 * const silla = new Furniture('Chair Kitchen', 180);
	 * silla.getName(); // Debería imprimir "Chair Kitchen"
	 * ```
	 */
    getName(): string {
        return this.name;
    }
    
	/**
	 * Descripción: Devuelve el peso del item.
	 * @param Item Item del que se quiere obtener el peso.
	 * @returns Peso del item.
	 * ```typescript
	 * const silla = new Furniture('Chair Kitchen', 180);
	 * silla.getWeight(silla); // Debería imprimir 180
	 * ```
	 */
    getWeight(Item: Furniture): number {
        return Item.weight;
    }
    
	/**
	 * Descripción: Comprueba si el item es igual al item pasado como parámetro.
	 * @param Item Item con el que se quiere comparar.
	 * @returns true si el item es igual al item pasado como parámetro, false en caso contrario.
	 * ```typescript
	 * const silla = new Furniture('Chair Kitchen', 180);
	 * silla.searchItem(new Furniture('Chair Kitchen', 180)); // Debería imprimir true
	 * ```
	 */
    searchItem(Item: Furniture): boolean {
        if (Item.name === this.name && Item.weight === this.weight && Item.pieces === this.pieces) {
            return true;
        } else {
            return false;
        }
    }

	/**
	 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
	 * @param name Nombre del item.
	 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
	 * ```typescript
	 * const silla = new Furniture('Chair Kitchen', 180);
	 * silla.getItem('Chair Kitchen'); // Debería imprimir el objeto Furniture
	 * ```
	 */
    getItem(name: string): Furniture | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
    
	/**
	 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
	 * @param name Nombre del item.
	 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
	 * ```typescript
	 * const silla = new Furniture('Chair Kitchen', 180);
	 * silla.getItembyname('Chair Kitchen'); // Debería imprimir el objeto Furniture
	 * ```
	 */
    getItembyname(name: string): Furniture | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
}
