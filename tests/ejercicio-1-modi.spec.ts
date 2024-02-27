import 'mocha';
import {expect} from 'chai';
import {Ajedrez}  from '../src/ejercicio-1-modi';

describe('Misma fila', () => {
    it('Misma fila', () => {
        const tablero1 = new Ajedrez(
            [
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','B','-','-', '-', '-', 'N', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              
            
            
        ]);
      expect(tablero1.checkAtack()).to.be.equal(true);
    });
  });

  describe('Misma col', () => {
    it('Misma col', () => {
        const tablero1 = new Ajedrez(
            [
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', 'N', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', 'B', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              
            
            
        ]);
      expect(tablero1.checkAtack()).to.be.equal(true);
    });
  });
  describe('Misma diagonal', () => {
    it('Misma diagonal', () => {
        const tablero1 = new Ajedrez(
            [
              ['N','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', 'B'],
              
            
            
        ]);
      expect(tablero1.checkAtack()).to.be.equal(true);
    });
  });
  describe('Misma diagonal', () => {
    it('Misma diagonal', () => {
        const tablero1 = new Ajedrez(
            [
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','N','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', 'B', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              
            
            
        ]);
      expect(tablero1.checkAtack()).to.be.equal(true);
    });
  });

  describe('Distinta diagonal', () => {
    it('Distinta diagonal', () => {
        const tablero1 = new Ajedrez(
            [
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','N','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', 'B', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              
            
            
        ]);
      expect(tablero1.checkAtack()).to.be.equal(false);
    });
  });

  describe('Mal dimensionamiento arrays', () => {
    it('Devuelve undefined', () => {
        const tablero1 = new Ajedrez(
            [
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', 'N', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', '-', '-'],
              ['-','-','-','-', '-', '-', 'B', '-'],       
        ]);
      expect(tablero1.checkAtack()).to.be.equal(undefined);
    });
  });

  describe('Mal dimensionamiento tamaño de arrays', () => {
    it('Devuelve undefined', () => {
        const tablero1 = new Ajedrez(
            [
                ['-','-','-','-', '-', '-', '-', '-'],
                ['-','-','-','-', '-', '-', 'N', '-'],
                ['-','-','-','-', '-', '-', '-', '-'],
                ['-','-','-','-', '-', '-', '-'],
                ['-','-','-','-', '-', '-', '-', '-'],
                ['-','-','-','-', '-', '-', 'B', '-'],
                ['-','-','-','-', '-', '-', '-', '-'],
                ['-','-','-','-', '-', '-', '-'],    
        ]);
      expect(tablero1.checkAtack()).to.be.equal(undefined);
    });
  });

  