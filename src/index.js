import loadPage from './modules/skeleton';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';


loadPage();
loadHome();
const home = document.getElementById('resto');
const menu = document.getElementById('menu');
const checkMenu = document.getElementById('check-menu');

const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    loadHome();
});
menu.addEventListener('click', () => {
    loadMenu();
});
contact.addEventListener('click', () => {
    loadContact();
});

