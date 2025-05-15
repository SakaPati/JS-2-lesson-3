import { products } from '../db/data.js';
import template from '../template/template.hbs';

const container = document.querySelector('.container');
const html = template({ products });
container.innerHTML = html;