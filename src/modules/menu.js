function createMenu(text,price,src,id){
    const food = document.createElement('div');
    food.setAttribute('class','food-item-div');
    food.setAttribute('id',id);

    const desc = document.createElement('h3');
    desc.setAttribute('class','food-desc');
    desc.textContent=text;

    const foodPrice = document.createElement('h3');
    foodPrice.setAttribute('class','food-price');
    foodPrice.textContent=price;

    const img = document.createElement('img');
    img.setAttribute('src',src);

    food.appendChild(desc);
    food.appendChild(foodPrice);
    food.appendChild(img);

    return food;
}

function loadMenu(){
    const main = document.getElementById('tab-content');
    main.innerHTML = '';
    const div= document.createElement('div');
    div.setAttribute('id','menu-container');
    

    const food=[
        createMenu('RIB-EYE STEAK',
        '€19,90',
        'https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png','1'),
        createMenu('TOMAHAWK',
        '€44,00','https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png',"2"),
        createMenu("RIBS WITH JACK DANIEL'S",
        '€13,00',
        'https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0669.jpg',"3"),
        createMenu('T-BONE',
        '€23,00','https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0753.jpg',"4"),
        createMenu("BUTCHER'S BEEF",
        '€9,90','https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png',"item5"),
        createMenu('CHICKEN FINGERS',
        '€12,00','https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0800.jpg',"item6")
    ];
    food.forEach((foods) => {
        div.appendChild(foods);
      });
      main.appendChild(div);
}
export default loadMenu;