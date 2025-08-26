const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = ()=>{
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then(data => {
            data.forEach(todo => {
                addToDom(todo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               )
            });
        })
}

const addToDom = (todo) =>{
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id' , todo.id)

    if(todo.completed) {
        div.classList.add('done')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }

    document.getElementById('todo-list').appendChild(div)
}

const createTodo = (e)=>{
    e.preventDefault()

    let inputValue = e.target.firstElementChild.value;
    
    const newTodo = {
        title: inputValue,
        completed: false
    }

    fetch(apiUrl , {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => addToDom(data))

    inputValue.innerText = ''
}

const init = () => {
    document.addEventListener('DOMContentLoaded' , getTodos);
    document.querySelector('#todo-form').addEventListener('submit' , createTodo)
}

init()