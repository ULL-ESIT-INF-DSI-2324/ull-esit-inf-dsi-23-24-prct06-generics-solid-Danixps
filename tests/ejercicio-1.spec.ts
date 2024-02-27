import 'mocha';
import {expect} from 'chai';
import {BibliographicReferences, JournalArticle, ConferenceContribution, BookChapter, Book, DegreeThesis, MasterThesis, BibliographicManager} from '../src/ejercicio-1';


describe('Articulo de Revista', () => {
  it('Debería devolver una IEEE citación', () => {
    const journalArticle = new JournalArticle(
      'DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains',
      'Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart',
      'Instance generation, Novelty search, Evolutionary algorithm, Optimisation, Knapsack problem',
      'To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.',
      '2021-11-21',
      '1-7',
      'SoftwareX',
      '101355',
      '22'
    );
    expect(journalArticle.getIEEE()).to.be.equal('A. Marrero, E. Segredo, C. León, E. Hart, "DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains", SoftwareX, vol. 22, no. 101355, pp. 1-7, 2021-11-21.');
    });
});

describe('ConferenceContribution', () => {
    it('Debería devolver una IEEE citación', () => {
        const conferenceContribution = new ConferenceContribution(
            'Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space',
            'Eduardo Segredo, Alejandro Marrero, Jakob Bossek, Emma Hart, Aneta Neumann',
            'Instance generation, instance-space analysis, knapsack problem, novelty search, evolutionary computation',
            'Generating new instances via evolutionary methods is commonly used to create new benchmarking data-sets, with a focus on attempting to cover an instance-space as completely as possible. Recent approaches have exploited Quality-Diversity methods to evolve sets of instances that are both diverse and discriminatory with respect to a portfolio of solvers, but these methods can be challenging whe attempting to find diversity in a high-dimensional feature-space. We address this issue by training a model based on Principal Component Analysis on existing instances to create a low-dimension projection of the high-dimension feature-vectors, and then apply Novelty Search directly in the new low-dimension space. We conduct experiments to evolve diverse and discriminatory instances of Knapsack Problems, comparing the use of Novelty Search',
            '2023',
            '312-320',
            'ACM',
            'GECCO',
            'Lisboa, Portugal',
        );
        expect(conferenceContribution.getIEEE()).to.be.equal('E. Segredo, A. Marrero, J. Bossek, E. Hart, A. Neumann, "Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space", in GECCO, Lisboa, Portugal, 2023, pp. 312-320.');
    });
});

describe('BookChapter', () => {
    it('Debería devolver una IEEE citación', () => {
        const bookChapter = new BookChapter(
            'Object-Oriented Programming',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '109-130',
            'Apress L. P',
            'Essential TypeScript 4: From Beginner to Pro',
            'Berkeley'
        );
        expect(bookChapter.getIEEE()).to.be.equal('A. Freeman, "Object-Oriented Programming", in Essential TypeScript 4: From Beginner to Pro, Berkeley, Apress L. P, 2021, pp. 109-130.');
    });
});

describe('Book', () => {
    it('Debería devolver una IEEE citación', () => {
        const book = new Book(
            'Essential TypeScript 4: From Beginner to Pro',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '1-300',
            'Editorial of the book',
            'ISBN' 
        );
        expect(book.getIEEE()).to.be.equal('A. Freeman, "Essential TypeScript 4: From Beginner to Pro", Editorial of the book, 2021, pp. 1-300.');
    });
    
});

describe('BachelorThesis', () => {
    it('Debería devolver una IEEE citación', () => {
        const degreeThesis = new DegreeThesis(
            'Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.',
            'Daniel Navarro',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        expect(degreeThesis.getIEEE()).to.be.equal('D. Navarro, "Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.", ULL, 2021, pp. 1-101.');
    });
});

describe('MasterThesis', () => {
    it('Debería devolver una IEEE citación', () => {
        const masterThesis = new MasterThesis(
            'On the automatic planning of healthy and balanced menus',
            'Alejandro Marrero',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        expect(masterThesis.getIEEE()).to.be.equal('A. Marrero, "On the automatic planning of healthy and balanced menus", ULL, 2021, pp. 1-101.');
    });
});

describe('Mostrar por la consola la información almacenada en formato tabla', () => {
    it('Mostrar información almacenada en formato tabla', () => {
        const bibliographicManager = new BibliographicManager();
        const journalArticle = new JournalArticle(
            'DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains',
            'Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart',
            'Instance generation, Novelty search, Evolutionary algorithm, Optimisation, Knapsack problem',
            'To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.',
            '2021-11-21',
            '1-7',
            'SoftwareX',
            '101355',
            '22'
          );
          const conferenceContribution = new ConferenceContribution(
            'Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space',
            'Eduardo Segredo, Alejandro Marrero, Jakob Bossek, Emma Hart, Aneta Neumann',
            'Instance generation, instance-space analysis, knapsack problem, novelty search, evolutionary computation',
            'Generating new instances via evolutionary methods is commonly used to create new benchmarking data-sets, with a focus on attempting to cover an instance-space as completely as possible. Recent approaches have exploited Quality-Diversity methods to evolve sets of instances that are both diverse and discriminatory with respect to a portfolio of solvers, but these methods can be challenging whe attempting to find diversity in a high-dimensional feature-space. We address this issue by training a model based on Principal Component Analysis on existing instances to create a low-dimension projection of the high-dimension feature-vectors, and then apply Novelty Search directly in the new low-dimension space. We conduct experiments to evolve diverse and discriminatory instances of Knapsack Problems, comparing the use of Novelty Search',
            '2023',
            '312-320',
            'ACM',
            'GECCO',
            'Lisboa, Portugal',
        );
        const bookChapter = new BookChapter(
            'Object-Oriented Programming',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '109-130',
            'Apress L. P',
            'Essential TypeScript 4: From Beginner to Pro',
            'Berkeley'
        );
        const book = new Book(
            'Essential TypeScript 4: From Beginner to Pro',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '1-300',
            'Editorial of the book',
            'ISBN' 
        );
        const degreeThesis = new DegreeThesis(
            'Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.',
            'Daniel Navarro',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        const masterThesis = new MasterThesis(
            'On the automatic planning of healthy and balanced menus',
            'Alejandro Marrero',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        bibliographicManager.addBibliographicReference(journalArticle);
        bibliographicManager.addBibliographicReference(conferenceContribution);
        bibliographicManager.addBibliographicReference(bookChapter);
        bibliographicManager.addBibliographicReference(book);
        bibliographicManager.addBibliographicReference(degreeThesis);
        bibliographicManager.addBibliographicReference(masterThesis);
        console.log(bibliographicManager.showBibliographicReferences());



        });
 });

 describe('búsquedas de elementos bibliográficos por palabras clave y mostrar los resultados de la búsqueda en formato de tabla. ', () => {
    it('búsquedas de elementos bibliográficos por palabras clave y mostrar los resultados de la búsqueda en formato de tabla. ', () => {
        const bibliographicManager = new BibliographicManager();
        const journalArticle = new JournalArticle(
            'DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains',
            'Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart',
            'Instance generation, Novelty search, Evolutionary algorithm, Optimisation, Knapsack problem',
            'To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.',
            '2021-11-21',
            '1-7',
            'SoftwareX',
            '101355',
            '22'
          );
          const conferenceContribution = new ConferenceContribution(
            'Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space',
            'Eduardo Segredo, Alejandro Marrero, Jakob Bossek, Emma Hart, Aneta Neumann',
            'Instance generation, instance-space analysis, knapsack problem, novelty search, evolutionary computation',
            'Generating new instances via evolutionary methods is commonly used to create new benchmarking data-sets, with a focus on attempting to cover an instance-space as completely as possible. Recent approaches have exploited Quality-Diversity methods to evolve sets of instances that are both diverse and discriminatory with respect to a portfolio of solvers, but these methods can be challenging whe attempting to find diversity in a high-dimensional feature-space. We address this issue by training a model based on Principal Component Analysis on existing instances to create a low-dimension projection of the high-dimension feature-vectors, and then apply Novelty Search directly in the new low-dimension space. We conduct experiments to evolve diverse and discriminatory instances of Knapsack Problems, comparing the use of Novelty Search',
            '2023',
            '312-320',
            'ACM',
            'GECCO',
            'Lisboa, Portugal',
        );
        const bookChapter = new BookChapter(
            'Object-Oriented Programming',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '109-130',
            'Apress L. P',
            'Essential TypeScript 4: From Beginner to Pro',
            'Berkeley'
        );
        const book = new Book(
            'Essential TypeScript 4: From Beginner to Pro',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '1-300',
            'Editorial of the book',
            'ISBN' 
        );
        const degreeThesis = new DegreeThesis(
            'Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.',
            'Daniel Navarro',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        const masterThesis = new MasterThesis(
            'On the automatic planning of healthy and balanced menus',
            'Alejandro Marrero',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        bibliographicManager.addBibliographicReference(journalArticle);
        bibliographicManager.addBibliographicReference(conferenceContribution);
        bibliographicManager.addBibliographicReference(bookChapter);
        bibliographicManager.addBibliographicReference(book);
        bibliographicManager.addBibliographicReference(degreeThesis);
        bibliographicManager.addBibliographicReference(masterThesis);
        console.log(bibliographicManager.searchBibliographicReferencesByKeywords('TypeScript'));
    
        });
 });

 
 describe('Exportacion de resultados en IEEE ', () => {
    it('Exportacion de resultados en IEEE', () => {
        const bibliographicManager = new BibliographicManager();
        const journalArticle = new JournalArticle(
            'DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains',
            'Alejandro Marrero, Eduardo Segredo, Coromoto León, Emma Hart',
            'Instance generation, Novelty search, Evolutionary algorithm, Optimisation, Knapsack problem',
            'To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.',
            '2021-11-21',
            '1-7',
            'SoftwareX',
            '101355',
            '22'
          );
          const conferenceContribution = new ConferenceContribution(
            'Generating diverse and discriminatory knapsack instances by searching for novelty in variable dimensions of feature-space',
            'Eduardo Segredo, Alejandro Marrero, Jakob Bossek, Emma Hart, Aneta Neumann',
            'Instance generation, instance-space analysis, knapsack problem, novelty search, evolutionary computation',
            'Generating new instances via evolutionary methods is commonly used to create new benchmarking data-sets, with a focus on attempting to cover an instance-space as completely as possible. Recent approaches have exploited Quality-Diversity methods to evolve sets of instances that are both diverse and discriminatory with respect to a portfolio of solvers, but these methods can be challenging whe attempting to find diversity in a high-dimensional feature-space. We address this issue by training a model based on Principal Component Analysis on existing instances to create a low-dimension projection of the high-dimension feature-vectors, and then apply Novelty Search directly in the new low-dimension space. We conduct experiments to evolve diverse and discriminatory instances of Knapsack Problems, comparing the use of Novelty Search',
            '2023',
            '312-320',
            'ACM',
            'GECCO',
            'Lisboa, Portugal',
        );
        const bookChapter = new BookChapter(
            'Object-Oriented Programming',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '109-130',
            'Apress L. P',
            'Essential TypeScript 4: From Beginner to Pro',
            'Berkeley'
        );
        const book = new Book(
            'Essential TypeScript 4: From Beginner to Pro',
            'Adam Freeman',
            'TypeScript, Programming, Web Development',
            'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications',
            '2021',
            '1-300',
            'Editorial of the book',
            'ISBN' 
        );
        const degreeThesis = new DegreeThesis(
            'Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.',
            'Daniel Navarro',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        const masterThesis = new MasterThesis(
            'On the automatic planning of healthy and balanced menus',
            'Alejandro Marrero',
            'Optimización, Algoritmos, Computación Evolutiva',
            'El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.',
            '2021',
            '1-101',
            'Eduardo Manuel Segredo González',
            'ULL', 

        );
        bibliographicManager.addBibliographicReference(journalArticle);
        bibliographicManager.addBibliographicReference(conferenceContribution);
        bibliographicManager.addBibliographicReference(bookChapter);
        bibliographicManager.addBibliographicReference(book);
        bibliographicManager.addBibliographicReference(degreeThesis);
        bibliographicManager.addBibliographicReference(masterThesis);
        console.log(bibliographicManager.exportBibliographicReferencesInIEEEFormat());

    });
 });