function createHeader(){
    const div= document.createElement('div');
    div.setAttribute('class','header-container');

    const header= document.createElement('h2');
    header.setAttribute('id','header');
    header.innerHTML='333  Amethyst Drive, Alabama, 36542 | 251-968-2627';
    div.appendChild(header);
    return div;
}
function createBtn(text){
    const btn = document.createElement('button');
    btn.setAttribute('id',text);
    btn.setAttribute('class','item');

    btn.innerText=text.toUpperCase();

    return btn;
}
function createNav(){
    
    const nav = document.createElement('nav');
    const menu= createBtn('menu');
    const logo= createBtn('resto');

    const contact= createBtn('contact');

    nav.appendChild(menu);
    nav.appendChild(logo);
    nav.appendChild(contact);
    return nav;
}
function createMain(id){
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main; 
}

function createFooter(){
    const footer= document.createElement('footer');
    const develop=document.createElement('h3');
    develop.innerText='Developed by Gusloox';
    develop.setAttribute('id','develop');

    const allRights=document.createElement('h3');
    allRights.innerText='All Rights Reserved';
    allRights.setAttribute('id','rights');

    footer.appendChild(develop);
    footer.appendChild(allRights);


    return footer;
}


function loadPage(){
    const container = document.querySelector('#content');
    const header=createHeader();
    container.appendChild(header);

    const nav = createNav();
    container.appendChild(nav);

    const main = createMain('tab-content');
    container.appendChild(main);

    const footer= createFooter();
    container.appendChild(footer)
}

export default loadPage;