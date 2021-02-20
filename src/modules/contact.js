function createInfo(){
    const container = document.createElement('div');
    container.setAttribute('class','contact-div');
    const makeReserv= document.createElement('h3');
    makeReserv.textContent="MAKE A RESERVATION";
    makeReserv.setAttribute('class','makeReserv');

    const phone= document.createElement('h3');
    phone.textContent='PHONE NUMBER';
    phone.setAttribute('class','phone');

    const phoneNumber= document.createElement('h3');
    phoneNumber.textContent='251-968-2627';
    phoneNumber.setAttribute('class','phoneNumber');



    container.appendChild(makeReserv);
    container.appendChild(phone);
    container.appendChild(phoneNumber);


    return container;
}





function loadContact(){

    const main = document.getElementById('tab-content');
    main.innerHTML = '';

    const contact= createInfo();
    main.appendChild(contact);

}
export default loadContact;