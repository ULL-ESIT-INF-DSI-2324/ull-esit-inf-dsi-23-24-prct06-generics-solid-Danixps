import 'mocha';
import { expect } from 'chai';
import { Dish, MenuInstance, MenuSolution, Solver, HEURISTIC_TYPE } from '../src/ejercicio-2';

describe('Atributos de MenuSolution', () => {
    it('Calcular el grado de valor nutricional e insalubridad', () => {
        const platos: Dish[] = [
            {name: 'Escaldón', nutritionalScore: 80, unhealthinessScore: 20},
            {name: 'Papas fritas', nutritionalScore: 50, unhealthinessScore: 70}
        ];
        const solution = new MenuSolution(platos);

        expect(solution.getTotalNutritionalScore()).to.equal(130);
        expect(solution.getTotalUnhealthinessScore()).to.equal(90);
    });
});
describe('Distintas heurísticas para ir resolviendo el menú', () => {
    const platos: Dish[] = [
      {name: 'Ensalada', nutritionalScore: 80, unhealthinessScore: 50},
      {name: 'Carne Fiesta', nutritionalScore: 50, unhealthinessScore: 70},
      {name: 'Perrito Caliente', nutritionalScore: 30, unhealthinessScore: 60}
    ];
   
    const menuInstance = new MenuInstance(platos, 130);
    let menu_new = [platos[0], platos[1]];

     it('Resolver primera heurística, ir introduciendo en el menú aquellos platos de menor grado nutricional primero', () => {
        const solver = new Solver(menuInstance, HEURISTIC_TYPE.FIRST);
        const solution = solver.solve();
        menu_new = [platos[0], platos[1]];
          
        for (const dish of menu_new) {
            expect(solution.selectedDishes).to.deep.include(dish);
        }
          
        expect(solution.getTotalUnhealthinessScore()).to.be.lessThan(menuInstance.maxUnhealthiness);
          });

    it('Resolver segunda heurística, ir introduciendo en el menú aquellos platos de menor grado de insalubridad primero', () => {
        const solver = new Solver(menuInstance, HEURISTIC_TYPE.SECOND);
        const solution = solver.solve();
        menu_new = [platos[0], platos[2]];
        

        for (const dish of menu_new) {
            expect(solution.selectedDishes).to.deep.include(dish);
        }
        expect(solution.getTotalUnhealthinessScore()).to.be.lessThan(menuInstance.maxUnhealthiness);
    });
  
    it('Resolver con tercera heurística con ratio valor nutricional / grado de insalubridad', () => {
      const solver = new Solver(menuInstance, HEURISTIC_TYPE.THIRD);
      const solution = solver.solve();
      menu_new = [platos[0], platos[1]];
  
      for (const dish of menu_new) {
        expect(solution.selectedDishes).to.deep.include(dish);
    }
      expect(solution.getTotalUnhealthinessScore()).to.be.lessThan(menuInstance.maxUnhealthiness);
    });
  });