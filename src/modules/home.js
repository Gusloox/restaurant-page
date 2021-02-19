function imgHandler(){
    const div = document.createElement('div');
    div.setAttribute('class','img-div')
    // const img= document.createElement('img');
    // img.setAttribute('src','/dist/imgs/indexPhoto.jpg');
    //div.appendChild(img);

    const textDiv= document.createElement('div');
    textDiv.setAttribute('class','img-text');
    const h1=document.createElement('h1');
    h1.textContent='About Us'
    const h3=document.createElement('h3');
    h3.textContent="“Do right and far exceed expectations daily. We do the right thing and lead by putting people first. Each and every connection with our team, guests and shareholders is our opportunity to create an experience that FEEDs – Far Exceeds Expectations Daily – and show how much we care.”"
    const button=document.createElement('button');
    button.textContent="Check Menu";
    textDiv.appendChild(h1);
    textDiv.appendChild(h3);
    textDiv.appendChild(button);
    div.appendChild(textDiv);
    return div;
}





function loadHome(){
    const main = document.getElementById('tab-content');
    content.textContent = '';

    const div = imgHandler();
    main.appendChild(div);
    return main;
}


export default loadHome;