//Nombre del archivo: ejercicio-2.ts
//Descripción: El objetivo de este ejercicio es modelar un menú de platos con distintas heurísticas para resolverlo.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 23/02/2024;

/**
 * La interfaz Dish representa un plato con su nombre, puntuación nutricional e insalubridad.
 * 
 * @param name Nombre del plato
 * @param nutritionalScore Puntuación nutricional
 * @param unhealthinessScore Puntuación de insalubridad
 */
export interface Dish {
    name: string;
    nutritionalScore: number;
    unhealthinessScore: number;
  }

/**
 * La clase MenuInstance representa una instancia de menú con un conjunto de platos y un máximo de insalubridad.
 * 
 * @param dishes Conjunto de platos
 * @param maxUnhealthiness Máximo de insalubridad
 */
export class MenuInstance {
    constructor(public dishes: Dish[], public maxUnhealthiness: number) {}
  }

/**
 * La clase MenuSolution representa una solución de menú con un conjunto de platos seleccionados.
 * 
 * @param selectedDishes Conjunto de platos seleccionados
 */
export  class MenuSolution {
    constructor(public selectedDishes: Dish[]) {}
  
    /**
     * getTotalNutritionalScore() devuelve la puntuación nutricional total de los platos seleccionados.
     * 
     * @returns Puntuación nutricional total
     * ```typescript
     * const platos: Dish[] = [
     *  {name: 'Escaldón', nutritionalScore: 80, unhealthinessScore: 20},
     * {name: 'Papas fritas', nutritionalScore: 50, unhealthinessScore: 70}
     * ];
     * const solution = new MenuSolution(platos);
     * 
     * expect(solution.getTotalNutritionalScore()).to.equal(130);
     * ```
     * */
    getTotalNutritionalScore(): number {
      return this.selectedDishes.reduce((total, dish) => total + dish.nutritionalScore, 0);
    }
    
    /**
     * getTotalUnhealthinessScore() devuelve la puntuación de insalubridad total de los platos seleccionados.
     * 
     * @returns Puntuación de insalubridad total
     * ```typescript
     * const platos: Dish[] = [
     *  {name: 'Escaldón', nutritionalScore: 80, unhealthinessScore: 20},
     * {name: 'Papas fritas', nutritionalScore: 50, unhealthinessScore: 70}
     * ];
     * const solution = new MenuSolution(platos);
     * 
     * expect(solution.getTotalUnhealthinessScore()).to.equal(90);
     * ```
     * */
    getTotalUnhealthinessScore(): number {
      return this.selectedDishes.reduce((total, dish) => total + dish.unhealthinessScore, 0);
    }
  }

/**
 * El enumerado HEURISTIC_TYPE representa los distintos tipos de heurísticas
 * 
 */
export  enum HEURISTIC_TYPE {FIRST, SECOND, THIRD}
  

/**
 * La clase Solver representa un solucionador de menús con una instancia de menú y un tipo de heurística.
 * 
 * @param menu
 * @param heuristicType
 * 
 * ```typescript
 * const platos: Dish[] = [
 * {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
 * {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
 * {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
 * ];
 * 
 * const menuInstance = new MenuInstance(platos, 130);
 * const solver = new Solver(menuInstance, HEURISTIC_TYPE.FIRST); 
 * const solution = solver.solve(); // Devuelve plato[0] y plato[1] ya que son los de mayor valor nutricional
 * ```
 */
export class Solver {
    constructor(private menuInstance: MenuInstance, private heuristicType: HEURISTIC_TYPE) {}
    
    /**
     * firstHeuristic() devuelve una solución de menú con la primera heurística, dependiendo del grado nutricional, de mayor a menor.
     * 
     * @returns Solución de menú
     * ```typescript
     * const platos: Dish[] = [
     * {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
     * {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
     * {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
     * ];
     * 
     * const menuInstance = new MenuInstance(platos, 130);
     * const solver = new Solver(menuInstance, HEURISTIC_TYPE.FIRST);
     * const solution = solver.solve(); // Devuelve plato[0] y plato[1] ya que son los de mayor valor nutricional
     * ```
     */
    firstHeuristic(): MenuSolution {
      const selectedDishes: Dish[] = [];
      let totalUnhealthiness = 0;
  
      const sortedDishes = [...this.menuInstance.dishes].sort((a, b) => b.nutritionalScore - a.nutritionalScore);
  
      for (const dish of sortedDishes) {
        if (totalUnhealthiness + dish.unhealthinessScore <= this.menuInstance.maxUnhealthiness) {
          selectedDishes.push(dish);
          totalUnhealthiness += dish.unhealthinessScore;
        }
      }
  
      return new MenuSolution(selectedDishes);
    }
    
    /**
     * secondHeuristic() devuelve una solución de menú con la segunda heurística, dependiendo del grado de insalubridad, de menor a mayor.
     * 
     * @returns Solución de menú
     * ```typescript
     * const platos: Dish[] = [
     * {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
     * {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
     * {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
     * ];
     * 
     * const menuInstance = new MenuInstance(platos, 130);
     * const solver = new Solver(menuInstance, HEURISTIC_TYPE.SECOND);
     * const solution = solver.solve(); // Devuelve plato[0] y plato[2] ya que son los de menor insalubridad
     * ```
     */
    secondHeuristic(): MenuSolution {
      const selectedDishes: Dish[] = [];
      let totalUnhealthiness = 0;

      const sortedDishes = [...this.menuInstance.dishes].sort((a, b) => a.unhealthinessScore - b.unhealthinessScore);
  
      for (const dish of sortedDishes) {
        if (totalUnhealthiness + dish.unhealthinessScore <= this.menuInstance.maxUnhealthiness) {
          selectedDishes.push(dish);
          totalUnhealthiness += dish.unhealthinessScore;
        }
      }
  
      return new MenuSolution(selectedDishes);
    }
    
    /**
     * thirdHeuristic() devuelve una solución de menú con la tercera heurística, dependiendo del ratio valor nutricional / grado de insalubridad, de mayor a menor.
     * 
     * @returns Solución de menú
     * ```typescript
     * const platos: Dish[] = [
     * {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
     * {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
     * {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
     * ];
     * 
     * const menuInstance = new MenuInstance(platos, 130);
     * const solver = new Solver(menuInstance, HEURISTIC_TYPE.THIRD);
     * const solution = solver.solve(); // Devuelve plato[0] y plato[1] ya que son los de mayor ratio valor nutricional / grado de insalubridad
     * ```
     */
    thirdHeuristic(): MenuSolution {
      const selectedDishes: Dish[] = [];
      let totalUnhealthiness = 0;

      const sortedDishes = [...this.menuInstance.dishes].sort((a, b) => (b.nutritionalScore / b.unhealthinessScore) - (a.nutritionalScore / a.unhealthinessScore));
  
      for (const dish of sortedDishes) {
        if (totalUnhealthiness + dish.unhealthinessScore <= this.menuInstance.maxUnhealthiness) {
          selectedDishes.push(dish);
          totalUnhealthiness += dish.unhealthinessScore;
        }
      }
  
      return new MenuSolution(selectedDishes);
    }
  
    /**
     * solve() devuelve una solución de menú dependiendo del tipo de heurística.
     * 
     * @returns Solución de menú
     * ```typescript
     * const platos: Dish[] = [
     * {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
     * {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
     * {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
     * ];
     * 
     * const menuInstance = new MenuInstance(platos, 130);
     * const solver = new Solver(menuInstance, HEURISTIC_TYPE.FIRST);
     * const solution = solver.solve(); // Devuelve plato[0] y plato[1] ya que son los de mayor valor nutricional
     * ```
     */
    solve(): MenuSolution {
      switch (this.heuristicType) {
        case HEURISTIC_TYPE.FIRST:
          return this.firstHeuristic();
        case HEURISTIC_TYPE.SECOND:
          return this.secondHeuristic();
        case HEURISTIC_TYPE.THIRD:
          return this.thirdHeuristic();
        default:
          return new MenuSolution([]);
      }
    }
  }

    