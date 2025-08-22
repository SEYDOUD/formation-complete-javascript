const clearBtn = document.querySelector('#clear');


function onClear() {
    const items = document.querySelector('ul')
    const itemList = items.querySelectorAll('li')
    
    itemList.forEach((item)=>{
        item.remove()
    })
}

//Javascript Event Listener
// clearBtn.onclick = () => {
//     alert('clear item')
// }

// clearBtn.onclick = () => {
//     console.log('clear items');
// }

// addEventListener()
// clearBtn.addEventListener('click' , () => alert('clear items'))

clearBtn.addEventListener('click' , onClear)

// setTimeout(()=> clearBtn.removeEventListener('click' , onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000)