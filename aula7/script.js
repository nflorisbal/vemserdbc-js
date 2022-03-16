let todoCount = 0;

const addTodoItem = () => {
    const btnPlus = document.getElementById('btn-add');
    btnPlus.addEventListener('click', createTodoTask);
}

const removeTodoItem = () => {

}

const changeTitleTodo = () => {
    const titleTodo = document.getElementById('title-todo');
    if (todoCount === 0)
        titleTodo.textContent = 'Nenhum "To Do" cadastrado ainda.';
    else
        titleTodo.textContent = 'To Do:';
}

const setDivTodo = (element, id) => {
    element.setAttribute('id', id);
    element.classList.add('todo-item', 'd-flex', 'border', 'border-secondary', 'justify-content-between', 'mb-2');
}

const setButton = (element, id, content) => {
    element.setAttribute('id', id);
    element.classList.add('btn', 'col-1');
    element.textContent = content;
}

const createTodoTask = () => {
    todoCount++;
    const divListTodo = document.getElementById('list-items')   
    const newDivTodo = document.createElement('div');
    const btnCheck = document.createElement('button');
    const btnDelete = document.createElement('button');
    const pTask = document.createElement('p');
    
    setDivTodo(newDivTodo, `todo-item-${todoCount}`);
    setButton(btnCheck, `btn-check-${todoCount}`, 'C');
    setButton(btnDelete, `btn-delete-${todoCount}`, 'D');
    pTask.setAttribute('class', 'col-10');


    divListTodo.appendChild(newDivTodo);
    newDivTodo.appendChild(btnCheck);
    newDivTodo.appendChild(pTask);
    newDivTodo.appendChild(btnDelete);

    changeTitleTodo();
}


const init = () => {
    addTodoItem();
}

init();