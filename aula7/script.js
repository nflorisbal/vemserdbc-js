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

const createTodoTask = () => {
    todoCount++;

    const newDivTodo = document.createElement('div');
    newDivTodo.setAttribute('class', 'todo-item');
    newDivTodo.appendChild




    changeTitleTodo();
}


const init = () => {
    addTodoItem();
}

init();