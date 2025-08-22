const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

// Isn't really efficient when the list is huge
// listItems.forEach(item => {
//   item.addEventListener('click' , (e)=>{
//     e.target.remove();
//   })
// })

// event delegation
list.addEventListener('click' , (e)=>{
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
})

list.addEventListener('mouseover' , (e)=>{
  if(e.target.tagName === 'LI'){
    e.target.style.color = 'red'
  }
})