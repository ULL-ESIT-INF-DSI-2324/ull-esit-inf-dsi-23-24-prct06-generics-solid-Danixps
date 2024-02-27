# PRÁCTICA 6 : Clases e interfaces genéricas. Principios SOLID

*Nombre y apellidos: [Daniel Bensa Expósito Paz](https://github.com/Danixps?tab=repositories, "Enlace Github")*

*Correo Institucional: alu0101481876@ull.edu.es*

*Asignatura: Desarrollo de Sistemas Informáticos (DSI)*


## Índice

1. [Introducción](#id1)

2. [Ejercicios de Tarea](#id2)

3. [Ejercicios de Modificación](#id2)

3. [Bibliografía](#id4)

<div id='id1' />

## 1. Introducción

El objetivo de esta práctica es desarrollar un conjunto de clases e interfaces en TypeScript.  A lo largo de esta práctica, aplicaremos principios de diseño sólidos, adoptaremos una metodología de desarrollo dirigido por pruebas y documentaremos nuestras decisiones de diseño en un informe detallado. Además, utilizaremos herramientas como TypeDoc para la documentación de código. El punto más importante es comprender como desarrollar las clases e interfaces para poder crear jerarquía simple, característica de Typescript para crearle sentido a nuestros programas.
<div id='id2' />

## 2. Ejercicios de Tarea

### 1. Gestor de referencias bibliográficas
Para el gestor de referencas bibliográficas he ceado una interfaz que va ser común en todas las referencias bibliográficas, con sus atributos. Después creo una clase gestora bibliográfica donde implemento los metodos de añadir un elemento bibliografico , los muestro como tablas, los busco por una palabra clave o exporto a formato IEEE, tendiendo en cuenta que esta clase tendrá como atributos un array de elementos bibliográficos. Después creo una clase JournalArticle, Conferences.... de todos los elementos bibliográficos donde heredan de la interfaz mencionada anteriormente todos los atributos básicos. Dentro de ellas se implementa un getIEEAuthor para conseguir el autor en IEE y un getIEE para mostarlo en cita IEE, con cada uno atributos propios.

### 2. Menús saludables orientados a objetos
Para el segundo ejercicio creo una interfaz Dish representando los atributos de un plato, nombre, grado nutricional y insalubridad. Creo una clase MenuInstance para la creacion de un menu compuesta por un array de platos y un maximo de insalubridad.Y por último la clase Solver característica del patrón de diseño strategy, donde dentro representa el contexto en el que se aplica un algoritmo concreto para resolver el problema de generar un menú saludable. En el constructor, se recibe el tipo de heurística que se utilizará para resolver el problema. Luego, el método solve() utiliza este tipo de heurística para seleccionar y ejecutar el algoritmo correspondiente. Estrategias que se usarán serán (firstHeuristic, secondHeuristic, thirdHeuristic). Estos métodos representan los diferentes algoritmos heurísticos disponibles para resolver el problema. Cada uno de ellos implementa una estrategia diferente para seleccionar los platos que formarán parte del menú saludable, según ciertos criterios (valor nutricional, grado de insalubridad, ratio nutricional/insalubridad). Cada estrategia calcula la solución del problema y devuelve una instancia de MenuSolution que contiene los platos seleccionados. 

Al utilizar el patrón Strategy, se logra un código modular y flexible, ya que permite agregar nuevos algoritmos de resolución fácilmente, sin necesidad de modificar el código existente en el contexto Solver. Esto facilita la extensibilidad y el mantenimiento del sistema.


<div id='id3' />

## 3. Ejercicios de Modiicación
### 1. Ajedrez

He definido dos tipos caracteres y tablero. El tipo caracteres representa los caracteres válidos en el tablero ('-', 'B', 'N'), mientras que el tipo tablero representa una matriz de caracteres que representa el tablero de ajedrez. He creado na interfaz que describe la estructura de un juego de ajedrez.

La clase Ajedrez que implementa la interfaz Ajedrez_juego. Esta clase representa un juego de ajedrez con un tablero. El constructor recibe un tablero de ajedrez y lo almacena como juego.

El Método checkAtack() verifica si la casilla B puede atacar a la casilla N en el tablero. El método recorre el tablero para encontrar las posiciones N y B. Luego, determina si el B ataca a N según las reglas del ajedrez, filas, columnas o diagonales. Retorna true si es posible y false si no lo es.

### 2. Parking

Este ejercicio esta sin acabar ya que no me dio tiempo en la hora de prácticas, pero por resumir, había definido la interfaz Caracteristicas_vehiculo que describe las características básicas de un vehículo, como la marca y el color.

He creado la clase Coche que implementa la interfaz Caracteristicas_coche. Esta clase representa un coche con una marca, un color y una altura.Y después la clase Moto que implementa la interfaz Caracteristicas_moto. Esta clase representa una moto con una marca, un color y una cilindrada. Y por último la clase Parking que implementa la interfaz Caracteristicas_parking. Esta clase representa un parking con una fecha, una hora y un número de plazas disponibles para coches y motos En el método showCaracteristic(), se puede mostrar las caracteristicass de cada vehiculo.


<div id='id4' />

## 4. Bibliografía

[Guión de la Práctica 6](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)