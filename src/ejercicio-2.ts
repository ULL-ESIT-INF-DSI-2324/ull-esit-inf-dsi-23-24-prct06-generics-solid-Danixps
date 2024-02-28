//Nombre del archivo: ejercicio-2.ts
//Descripción: El objetivo de este ejercicio es modelar un menú de platos con distintas heurísticas para resolverlo.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 23/02/2024;
import fs = require('fs');
interface Format_voice<T> {  
  id: string;
  customerName: string;
  items: T[]; // Replace 'T' with a concrete type, such as 'any[]' or a specific type.
  totalAmount: number;
  generate(): void;
}

abstract class Invoice<T> implements Format_voice<T> {
  constructor(public id: string, public customerName: string, public items: T[], public totalAmount: number) {}
  abstract generate(): void;
}

class PdfInvoice<T> extends Invoice<T> {
    generate(): void {
      // Logic to generate PDF invoice
      const invoiceData = `Invoice ID: ${this.id}\nCustomer Name: ${this.customerName}\nItems: ${this.items.join(', ')}\nTotal Amount: ${this.totalAmount}`;
      fs.writeFileSync(`${this.id}.pdf`, invoiceData);
    }
  }

class HtmlInvoice<T> extends Invoice<T> {
  generate(): void {
    // Logic to generate HTML invoice
    const invoiceData = `Invoice ID: ${this.id}<br>Customer Name: ${this.customerName}<br>Items: ${this.items.join(', ')}<br>Total Amount: ${this.totalAmount}`;
    fs.writeFileSync(`${this.id}.html`, invoiceData);
  }
}

class BillingSystem {
  generateInvoice<T>(invoice: Invoice<T>): void {
      invoice.generate();
  }
}

const billingSystem = new BillingSystem();
const pdfInvoice = new PdfInvoice('INV-001', 'John Doe', ['Item 1', 'Item 2'], 100);
billingSystem.generateInvoice(pdfInvoice); 


const htmlInvoice = new HtmlInvoice('INV-002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
billingSystem.generateInvoice(htmlInvoice); 