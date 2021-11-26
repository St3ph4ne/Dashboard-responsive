let menuItems = [
    {'url':"http://localhost:890/", 'text':"commands"},
    {'url':"http://localhost:890/", 'text':"Flow"},
    {'url':"http://localhost:890/", 'text':"UI"}
];

let menu = document.getElementById("left-menu");

for(let i = 0; i < menuItems.length; i++){

    let newLi = document.createElement("li");

    let item = menuItems[i];

    menu.appendChild(newLi);
    
    let newA = document.createElement("a");

    newA.textContent = item.text;

    newA.href = item.url + item.text + "/" + item.text + ".html";

    newLi.appendChild(newA);
}
