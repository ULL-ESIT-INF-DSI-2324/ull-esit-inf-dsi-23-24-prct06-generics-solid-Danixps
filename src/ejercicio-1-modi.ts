//Nombre del archivo: ejercicio-1-modi.ts
//Descripción: 
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 21/02/2024

type caracteres = '-' | 'B' | 'N';
type tablero =  caracteres[][];

/**
 * La interfaz Ajedrez_juego representa un juego de ajedrez con un tablero.
 * 
 * @param juego Tablero de ajedrez
 */
interface Ajedrez_juego {
  juego: tablero;
}

/**
 * La clase Ajedrez representa un juego de ajedrez con un tablero.
 * 
 * @param juego Tablero de ajedrez
 */
export class Ajedrez implements Ajedrez_juego{
  constructor(public juego :tablero) {}
  
  /**
   * checkAtack() devuelve si el caballo ataca al alfil.
   * 
   * @returns true o false dependiendo si el rey ataca a la reina
   * ```typescript
   * const tablero1 = new Ajedrez(
   * [
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','B','-','-', '-', '-', 'N', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ]);
   * 
   * console.log(tablero1.checkAtack()); // true
   * ```
   * */
  public checkAtack() : boolean | undefined {
  if (this.juego.length !== 8 ) {
    return undefined;
  }
  const array_juego = this.juego; 
  let posN :number[] = [0,0];
  let posN_bool :boolean = false;
  let posB_bool :boolean =  false;
  let posN_n :number = 0;
  let posB_n :number = 0;



  let posb : number[] = [0,0] ;

  for (let i = 0; i < array_juego.length; i++) {
    for (let j = 0; j < array_juego[i].length; j++) {
      if (array_juego[i].length !== 8) {
        return undefined;
      }
      if (array_juego[i][j] === 'B') {
        posb = [i,j];
        posB_bool = true;
        posB_n++;


      } if (array_juego[i][j] === 'N') {
         posN  = [i,j];
         posN_bool = true;
        posN_n++;
      }

    }
  }
  if (posN_bool === true && posB_bool ===true && posN_n === 1 && posB_n == 1) {
    return this.Attack(posN,posb)
   }
  return false;


  }
  /**
   * Attack() devuelve si el caballo ataca al alfil.
   * 
   * @param posN Posición del caballo
   * @param posb Posición del alfil
   * @returns true o false dependiendo si el rey ataca a la reina
   * ```typescript
   * const tablero1 = new Ajedrez(
   * [
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','B','-','-', '-', '-', 'N', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ['-','-','-','-', '-', '-', '-', '-'],
   * ]);
   *  
   * console.log(tablero1.Attack([1,6],[1,1])); // true
   * ```
   */
  public Attack(posN :number[], posb : number[] ) : boolean{
    if (posN[1] == posb[1] || posN[0] == posb[0]) {
      return true
    }
    if (posN[1] - posb[1] === posN[0] - posb[0]) {
      return true
    }
    else {
      return false;
    }

  }
}

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

console.log(tablero1.checkAtack());

