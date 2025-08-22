const button = document.querySelector('form button')
const div = document.getElementById('id-submit')
const form = document.querySelector('form')

button.addEventListener('click' , (e)=>{
  alert('Button was clicked')
  e.stopPropagation();
})

div.addEventListener('click' , ()=>{
  alert('Div was clicked')
})

form.addEventListener('click' , ()=>{
  alert('Form was clicked')
})

document.body.addEventListener('click' , ()=>{
  alert('Body was clicked')
})