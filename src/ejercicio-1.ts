//Nombre del archivo: ejercicio-1.ts
//Descripción: Dado un conjunto de referencias bibliográficas, se desea modelar un gestor de referencias bibliográficas que permita añadir, mostrar, buscar y exportar referencias bibliográficas en formato IEEE.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 03/02/2024

type cadena = string;

/**
 * La interfaz BibliographicReferences representa una referencia bibliográfica con su título, autores, palabras clave, resumen, fecha de publicación, páginas y editorial.
 * 
 * @param title Título de la referencia bibliográfica
 * @param authors Autores de la referencia bibliográfica
 * @param keywords Palabras clave de la referencia bibliográfica
 * @param abstract Resumen de la referencia bibliográfica
 * @param publicationDate Fecha de publicación de la referencia bibliográfica
 * @param pages Páginas de la referencia bibliográfica
 * @param editorial Editorial de la referencia bibliográfica
 * @param getIEEE() Devuelve la cita en formato IEEE de la referencia bibliográfica
 */
export interface BibliographicReferences {
  title: cadena;
  authors: cadena;
  keywords: cadena;
  abstract: cadena;
  publicationDate: cadena;
  pages: cadena;
  editorial: cadena;
  getIEEE(): cadena;
}

/**
 * La clase BibliographicManager representa un gestor de referencias bibliográficas.
 * 
*/
export class BibliographicManager {
  private bibliographicReferences: BibliographicReferences[] = [];

 /** 
  * addBibliographicReference() añade una referencia bibliográfica al gestor.
  * 
  * @param bibliographicReference Referencia bibliográfica a añadir
  * ```typescript
  * const bibliographicManager = new BibliographicManager();
  * bibliographicManager.addBibliographicReference(new JournalArticle('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', '1', '1'));
  * ```
  */
  public addBibliographicReference(bibliographicReference: BibliographicReferences): void {
    this.bibliographicReferences.push(bibliographicReference);
  }
  
  /**
   * showBibliographicReferences() muestra las referencias bibliográficas del gestor.
   * ```typescript
   * const bibliographicManager = new BibliographicManager();
   * bibliographicManager.showBibliographicReferences();
   * ```
   */
  public showBibliographicReferences(): void {
    console.table(this.bibliographicReferences);
  }
  
  /**
   * searchBibliographicReferencesByKeywords() busca referencias bibliográficas por palabras clave.
   * 
   * @param keywords Palabras clave a buscar
   * ```typescript
   * const bibliographicManager = new BibliographicManager();
   * bibliographicManager.searchBibliographicReferencesByKeywords('Palabra1');
   * ```
   */
  public searchBibliographicReferencesByKeywords(keywords: cadena): void {
    const results = this.bibliographicReferences.filter((reference) => reference.keywords.includes(keywords));
    console.table(results);
  }
  
  /**
   * exportBibliographicReferencesInIEEEFormat() exporta las referencias bibliográficas en formato IEEE.
   * ```typescript
   * const bibliographicManager = new BibliographicManager();
   * bibliographicManager.exportBibliographicReferencesInIEEEFormat();
   * ```
   */
  public exportBibliographicReferencesInIEEEFormat(): void {
    const results = this.bibliographicReferences.map((reference) => reference.getIEEE());
    console.table(results);
  }
}

/**
 * La clase JournalArticle representa un artículo de revista con su título, autores, palabras clave, resumen, fecha de publicación, páginas, editorial, número de revista y volumen de revista.
 * 
 * @param title Título del artículo de revista
 * @param authors Autores del artículo de revista
 * @param keywords Palabras clave del artículo de revista
 * @param abstract Resumen del artículo de revista
 * @param publicationDate Fecha de publicación del artículo de revista
 * @param pages Páginas del artículo de revista
 * @param editorial Editorial del artículo de revista
 * @param journalNumber Número de revista del artículo de revista
 * @param journalVolume Volumen de revista del artículo de revista
 */
export class JournalArticle implements BibliographicReferences {
  constructor( public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena, public pages: cadena,
    public editorial: cadena, public journalNumber: cadena, public journalVolume: cadena
  ) {}
  
  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores del artículo de revista.
   * @returns Cita en formato IEEE de los autores del artículo de revista
   * ```typescript
   * const journalArticle = new JournalArticle('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', '1', '1');
   * journalArticle.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
   */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }

  /**
   * getIEEE() devuelve la cita en formato IEEE del artículo de revista.
   * @returns Cita en formato IEEE del artículo de revista
   * ```typescript
   * const journalArticle = new JournalArticle('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', '1', '1');
   * journalArticle.getIEEE(); // "A. Autor1, B. Autor2, "Título", Editorial, vol. 1, no. 1, pp. 1-10, 01/01/2024."
   * ```
   */
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() + `, "${this.title}", ${this.editorial}, vol. ${this.journalVolume}, no. ${this.journalNumber}, pp. ${this.pages}, ${this.publicationDate}.`;
  }
}

/**
 * La clase ConferenceContribution representa una contribución a conferencia con su título, autores, palabras clave, resumen, fecha de publicación, páginas, editorial, nombre de la conferencia y localización de la conferencia.
 * 
 * @param title Título de la contribución a conferencia
 * @param authors Autores de la contribución a conferencia
 * @param keywords Palabras clave de la contribución a conferencia
 * @param abstract Resumen de la contribución a conferencia
 * @param publicationDate Fecha de publicación de la contribución a conferencia
 * @param pages Páginas de la contribución a conferencia
 * @param editorial Editorial de la contribución a conferencia
 * @param conferenceName Nombre de la conferencia de la contribución a conferencia
 * @param conferenceLocation Localización de la conferencia de la contribución a conferencia
 */
export class ConferenceContribution implements BibliographicReferences {
  constructor(public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena, public pages: cadena,
    public editorial: cadena, public conferenceName: cadena, public conferenceLocation: cadena) {}
  
  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores de la contribución a conferencia.
   * @returns Cita en formato IEEE de los autores de la contribución a conferencia
   * ```typescript
   * const conferenceContribution = new ConferenceContribution('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre de la conferencia', 'Localización de la conferencia');
   * conferenceContribution.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
  */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() +`, "${this.title}", in ${this.conferenceName}, ${this.conferenceLocation}, ${this.publicationDate}, pp. ${this.pages}.`;
  }
}


/**
 * La clase BookChapter representa un capítulo de libro con su título, autores, palabras clave, resumen, fecha de publicación, páginas, editorial, nombre del libro y editor del libro.
 * 
 * @param title Título del capítulo de libro
 * @param authors Autores del capítulo de libro
 * @param keywords Palabras clave del capítulo de libro
 * @param abstract Resumen del capítulo de libro
 * @param publicationDate Fecha de publicación del capítulo de libro
 * @param pages Páginas del capítulo de libro
 * @param editorial Editorial del capítulo de libro
 * @param bookTitle Nombre del libro del capítulo de libro
 * @param bookEditor Editor del libro del capítulo de libro
 */
export class BookChapter implements BibliographicReferences {
  constructor( public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena,
    public pages: cadena, public editorial: cadena, public bookTitle: cadena, public bookEditor: cadena
  ) {}

  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores de la contribución a conferencia.
   * @returns Cita en formato IEEE de los autores de la contribución a conferencia
   * ```typescript
   * const conferenceContribution = new ConferenceContribution('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre de la conferencia', 'Localización de la conferencia');
   * conferenceContribution.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
  */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }

  /**
   * getIEEE() devuelve la cita en formato IEEE del capítulo de libro.
   * @returns Cita en formato IEEE del capítulo de libro
   * ```typescript
   * const bookChapter = new BookChapter('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre del libro', 'Editor del libro');
   * bookChapter.getIEEE(); // "A. Autor1, B. Autor2, "Título", in Nombre del libro, Editor del libro, Editorial, 01/01/2024, pp. 1-10."
   * ```
   */
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() + `, "${this.title}", in ${this.bookTitle}, ${this.bookEditor}, ${this.editorial}, ${this.publicationDate}, pp. ${this.pages}.`;
  }
}

/**
 * La clase Book representa un libro con su título, autores, palabras clave, resumen, fecha de publicación, páginas, editorial y ISBN.
 * 
 * @param title Título del libro
 * @param authors Autores del libro
 * @param keywords Palabras clave del libro
 * @param abstract Resumen del libro
 * @param publicationDate Fecha de publicación del libro
 * @param pages Páginas del libro
 * @param editorial Editorial del libro
 * @param isbn ISBN del libro
 */
export class Book implements BibliographicReferences {
  constructor( public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena,
    public pages: cadena, public editorial: cadena, public isbn: cadena
  ) {}
  
  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores de la contribución a conferencia.
   * @returns Cita en formato IEEE de los autores de la contribución a conferencia
   * ```typescript
   * const conferenceContribution = new ConferenceContribution('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre de la conferencia', 'Localización de la conferencia');
   * conferenceContribution.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
  */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }

  /**
   * getIEEE() devuelve la cita en formato IEEE del libro.
   * @returns Cita en formato IEEE del libro
   * ```typescript
   * const book = new Book('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'ISBN');
   * book.getIEEE(); // "A. Autor1, B. Autor2, "Título", Editorial, 01/01/2024, pp. 1-10."
   * ```
   */
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() + `, "${this.title}", ${this.editorial}, ${this.publicationDate}, pp. ${this.pages}.`;
  }
}


/**
 * La clase DegreeThesis representa una tesis de grado con su título, autores, palabras clave, resumen, fecha de publicación, páginas, tutor y universidad.
 * 
 * @param title Título de la tesis de grado
 * @param authors Autores de la tesis de grado
 * @param keywords Palabras clave de la tesis de grado
 * @param abstract Resumen de la tesis
 * @param publicationDate Fecha de publicación de la tesis de grado
 * @param pages Páginas de la tesis de grado
 * @param tutor Tutor de la tesis de grado
 * @param university Universidad de la tesis de grado
 */
export class DegreeThesis implements BibliographicReferences {
  constructor( public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena, 
    public pages: cadena, public tutor: cadena, public university: cadena
  ) {}
  editorial: string;

  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores de la contribución a conferencia.
   * @returns Cita en formato IEEE de los autores de la contribución a conferencia
   * ```typescript
   * const conferenceContribution = new ConferenceContribution('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre de la conferencia', 'Localización de la conferencia');
   * conferenceContribution.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
  */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }

  /**
   * getIEEE() devuelve la cita en formato IEEE de la tesis de grado.
   * @returns Cita en formato IEEE de la tesis de grado
   * ```typescript
   * const degreeThesis = new DegreeThesis('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Tutor', 'Universidad');
   * degreeThesis.getIEEE(); // "A. Autor1, B. Autor2, "Título", Universidad, 01/01/2024, pp. 1-10."
   * ```
   */
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() + `, "${this.title}", ${this.university}, ${this.publicationDate}, pp. ${this.pages}.`;
  }
}


/**
 * La clase MasterThesis representa una tesis de máster con su título, autores, palabras clave, resumen, fecha de publicación, páginas, tutor y universidad.
 * 
 * @param title Título de la tesis de máster
 * @param authors Autores de la tesis de máster
 * @param keywords Palabras clave de la tesis de máster
 * @param abstract Resumen de la tesis
 * @param publicationDate Fecha de publicación de la tesis de máster
 * @param pages Páginas de la tesis de máster
 * @param tutor Tutor de la tesis de máster
 * @param university Universidad de la tesis de máster
 */
export class MasterThesis implements BibliographicReferences {
  constructor( public title: cadena, public authors: cadena, public keywords: cadena, public abstract: cadena, public publicationDate: cadena,
    public pages: cadena, public tutor: cadena, public university: cadena
  ) {}
  editorial: string;

  /**
   * getIEEEAuthorCitation() devuelve la cita en formato IEEE de los autores de la contribución a conferencia.
   * @returns Cita en formato IEEE de los autores de la contribución a conferencia
   * ```typescript
   * const conferenceContribution = new ConferenceContribution('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Editorial', 'Nombre de la conferencia', 'Localización de la conferencia');
   * conferenceContribution.getIEEEAuthorCitation(); // "A. Autor1, B. Autor2"
   * ```
  */
  public getIEEEAuthorCitation(): cadena {
    const authors = this.authors.split(', ');
    return authors.map((author) => author.split(' ')[0][0] + '. ' + author.split(' ')[1]).join(', ');
  }

  /**
   * getIEEE() devuelve la cita en formato IEEE de la tesis de máster.
   * @returns Cita en formato IEEE de la tesis de máster
   * ```typescript
   * const masterThesis = new MasterThesis('Título', 'Autor1, Autor2', 'Palabra1, Palabra2', 'Resumen', '01/01/2024', '1-10', 'Tutor', 'Universidad');
   * masterThesis.getIEEE(); // "A. Autor1, B. Autor2, "Título", Universidad, 01/01/2024, pp. 1-10."
   * ```
   */
  public getIEEE(): cadena {
    return this.getIEEEAuthorCitation() + `, "${this.title}", ${this.university}, ${this.publicationDate}, pp. ${this.pages}.`;
  }
}

