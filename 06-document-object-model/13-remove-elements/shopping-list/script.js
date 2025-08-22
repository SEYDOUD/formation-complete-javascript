function removeClearButton(){
    const clearBtn = document.querySelector('#clear')
    clearBtn.remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const item = document.querySelector(`li:nth-child(${itemNumber})`)
    item.remove()
}

function removeItem2(itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)

    ul.removeChild(li);
}

function removeItem3(itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li')[itemNumber - 1] // not 0 based

    ul.removeChild(li);
}

function removeItem4(itemNumber) {
    const li = document.querySelectorAll('li')
    li[itemNumber - 1].remove();
}

const removeItem5 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove()

removeClearButton();
// removeFirstItem();
// removeItem(1)
removeItem5(1)