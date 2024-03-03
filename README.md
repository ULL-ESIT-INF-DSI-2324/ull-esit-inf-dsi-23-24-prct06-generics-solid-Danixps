# PRÁCTICA 6 : Clases e interfaces genéricas. Principios SOLID

*Nombre y apellidos: [Daniel Bensa Expósito Paz](https://github.com/Danixps?tab=repositories, "Enlace Github")*

*Correo Institucional: alu0101481876@ull.edu.es*

*Asignatura: Desarrollo de Sistemas Informáticos (DSI)*

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Danixps/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Danixps?branch=main)


## Índice

<div id='id1' />

## 1. [Introducción](#id1)



<div id='id2' />

## 2. [Ejercicios de Tarea](#id2)

### 1. Ejercicio 1 - La mudanza 
Para el ejercicio 1 primero, se define una interfaz `Item<T>`, que establece los métodos que deben implementar las clases que la implementen. Los métodos incluyen obtener el nombre de un item, buscar un item, obtener el peso de un item y obtener un item por su nombre. Luego, se define una clase `Box<T extends Item<T>>` que representa una caja que puede contener items de cualquier tipo que implemente la interfaz `Item`. La caja tiene métodos para obtener el nombre de un item, agregar y eliminar items, listar los items, buscar un item y ordenar los items por peso. Después, se definen dos clases que implementan la interfaz `Item`: `Clothing` y `Furniture`. `Clothing` representa una prenda de vestir con un nombre, peso y talla. `Furniture` representa un mueble con un nombre, peso y número de piezas. Ambas clases implementan los métodos definidos en la interfaz `Item`.

### 2. Ejercicio 2 - Facturas en diferentes formatos
Para el ejercicio 2, creo una interfaz `Format_voice` que establece los métodos y propiedades que deben implementar las clases que la implementen. Los métodos y propiedades incluyen un identificador de factura, el nombre del cliente, los items de la factura, el monto total de la factura y un método para generar la factura. También defino una clase abstracta `Invoice` que implementa la interfaz `Format_voice`. Esta clase define un objeto factura con los atributos id, customerName, items y totalAmount. También tiene un método abstracto `generate` que debe ser implementado por las subclases. Después, se implementan dos clases que extienden la clase `Invoice`: `PdfInvoice` y `HtmlInvoice`. `PdfInvoice` genera la factura en formato PDF y `HtmlInvoice` genera la factura en formato HTML. Ambas clases implementan el método `generate` de la clase `Invoice`. Por último se define una clase `BillingSystem` que tiene un método `generateInvoice` que toma una factura y la genera.


<div id='id3' />

### 3. [Ejercicio de Modificación](#id2)

Creé una interfaz `Arithmeticable` que define los métodos para las operaciones aritméticas básicas: suma, resta, multiplicación y división.
Después implementé una clase `ArithmeticableCollection` que implementa la interfaz `Arithmeticable`. Esta clase tiene un array de elementos que son del tipo `T`. Los métodos de esta clase realizan operaciones aritméticas en dos valores de tipo `T`.

Para crear la clase `Rational` que también implementa la interfaz `Arithmeticable`, aprovecho las funciones de prácticas anteriores. Esta clase está diseñada para trabajar con números racionales (números que se pueden expresar como el cociente de dos enteros). Los métodos de esta clase realizan operaciones aritméticas en dos números racionales.

Para crear la clase `Complex` que también implementa la interfaz `Arithmeticable`, aprovecho las funciones de prácticas anteriores. Esta clase está diseñada para trabajar con números complejos (números que tienen una parte real y una parte imaginaria). Los métodos de esta clase realizan operaciones aritméticas en dos números complejos.


<div id='id4' />

### 4. [Bibliografía](#id4)

[Guión de la Práctica 6](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)