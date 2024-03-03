import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import { Invoice, PdfInvoice, HtmlInvoice, BillingSystem } from '../src/ejercicio-2';

describe('Invoice', () => {
  it('should create an instance of Invoice', () => {
    const invoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    expect(invoice).to.be.instanceOf(Invoice);
  });
});

describe('PdfInvoice', () => {
  it('should create a PDF invoice', () => {
    const pdfInvoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    pdfInvoice.generate();
    expect(fs.existsSync('001.pdf')).to.equal(true);
  });
});

describe('HtmlInvoice', () => {
  it('should create an HTML invoice', () => {
    const htmlInvoice = new HtmlInvoice('002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
    htmlInvoice.generate();
    expect(fs.existsSync('002.html')).to.equal(true);
  });
});

describe('BillingSystem', () => {
  it('should generate a PDF invoice', () => {
    const billingSystem = new BillingSystem();
    const pdfInvoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    billingSystem.generateInvoice(pdfInvoice);
    expect(fs.existsSync('001.pdf')).to.equal(true);
  });

  it('should generate an HTML invoice', () => {
    const billingSystem = new BillingSystem();
    const htmlInvoice = new HtmlInvoice('002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
    billingSystem.generateInvoice(htmlInvoice);
    expect(fs.existsSync('002.html')).to.equal(true);
  });
});