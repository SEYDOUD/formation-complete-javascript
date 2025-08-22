// Quick & Dirty
function createListItems (item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`

    document.querySelector('.items').appendChild(li)
}

// Clean  & Performant
function createNewItem(item){
    const items = document.querySelector('.items')

    const li = document.createElement('li');

    const text = document.createTextNode(item)

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark'

    items.appendChild(li)
    li.appendChild(text)
    li.appendChild(button)
    button.appendChild(icon)

    console.log(li);
}

createListItems('Eggs');
createNewItem('Cheese');