function createNewItem(item){
    const items = document.querySelector('.items')

    const li = document.createElement('li');

    const text = document.createTextNode(item)

    const button = createButton('remove-item btn-link text-red')



    items.appendChild(li)
    li.appendChild(text)
    li.appendChild(button)

    console.log(li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)

    return button;
}
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes
    return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');