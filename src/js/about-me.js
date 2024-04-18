import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');
console.log(container);
const accordion = new Accordion(container, {
    openOnInit: [0],
    showMultiple: true,
    onOpen: (currEl) => console.log('Open!', currEl)
});

