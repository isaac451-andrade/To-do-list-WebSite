const inputElement = document.querySelector('.new-task-input');
const buttonElement = document.querySelector('.new-task-button');
const taskContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.value.trim().length > 0

const handleAddTask = () => {
    const inputIsValid = validateInput();
    if (!inputIsValid) {
        return inputElement.classList.add('error');
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    

    
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleContent(taskContent))


    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-trash');

    deleteIcon.addEventListener('click', () => handleRemove(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteIcon);

    inputElement.value = '';
    taskContainer.appendChild(taskItemContainer);

}

const handleRemove = (taskItemContainer, taskContent) => {
    if (taskItemContainer.firstChild === taskContent) {
        taskItemContainer.remove();
    }
} 

const handleContent = (taskContent) => {
    const tasks = taskContainer.childNodes

    for (const task of tasks){
        if(task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle('completed')
        }
    }
}



const handleChangeInput = () => {
    const inputIsValid = validateInput();
    if(inputIsValid) {
        console.log('entrou')
        return inputElement.classList.remove('error');
    }
} 

buttonElement.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleChangeInput());