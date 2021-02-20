function imgHandler(){
    const div = document.createElement('div');
    div.setAttribute('class','img-div')
    const h1=document.createElement('h3');
    h1.textContent='ABOUT US'
    h1.setAttribute('id','aboutus')
    const h3=document.createElement('h3');
    h3.textContent="“Do right and far exceed expectations daily. We do the right thing and lead by putting people first. Each and every connection with our team, guests and shareholders is our opportunity to create an experience that FEEDs – Far Exceeds Expectations Daily – and show how much we care.”".toUpperCase();
    h3.setAttribute('class','aboutText')
    
    div.appendChild(h1);
    div.appendChild(h3);
    return div;
}





function loadHome(){
    const main = document.getElementById('tab-content');
    main.innerHTML = '';

    const div = imgHandler();
    main.appendChild(div);
    return main;
}


export default loadHome;