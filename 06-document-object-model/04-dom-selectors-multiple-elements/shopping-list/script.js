// querySelectorAll()
const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.forEach((item , index)=> {
//     item.style.color = 'red';

//     if (index === 1){
//         item.remove()
//     }

//     if (index === 0){
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// })

const listItems2 = document.getElementsByClassName('item')
console.log(listItems2[2]);

// It doesnt work without the conversion because is html collection and not nodelist
const listItemArray = Array.from(listItems2)
listItemArray.forEach(item => {
    console.log(item.innerText);
});

const listItem3 = document.getElementsByTagName('li')
console.log(listItem3[0].innerText);