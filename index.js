let addItemHtml = '';
let addCompleteHtml = '';
let toDoArr = [];
let completeArr = [];
let counter = 0;
let spliced;
const errorMsg = document.querySelector('.error');
const addShrt = document.querySelector('#add');

let addItem = () => {
    for (let i = 0; i <= toDoArr.length - 1; i++) {
        counter++
        addItemHtml += `
            <li class="todo-item neo-out p-1">
                <p>${toDoArr[`${i}`]}</p>
                <div class="check-group">
                    <a name="Completed" onclick="complete(${i})"><i class="fas fa-check"></i></a>
                    <a onclick="remove(${i})"><i class="fas fa-trash"></i></a>
                </div>
            </li>
        `;
      }
      document.querySelector('#toDoItems').innerHTML = addItemHtml;
      if (counter => toDoArr.length) {
        addItemHtml = '';
        counter = 0;
      }
}
let add = () => {
    let checkIfValue = addShrt.value;
    if (checkIfValue === undefined || checkIfValue === '' || checkIfValue === isNaN(checkIfValue)) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        let addValue = addShrt.value;
        toDoArr.push(addValue);
        addItem();
        addShrt.value = '';
    }
}
let remove = (i) => {
    toDoArr.splice(i, 1);
    addItem();
}
let complete = (i) => {
    spliced = toDoArr.splice(i, 1);
    addItem();

    addCompleteHtml += `
            <li class="todo-item neo-out p-1">
                <p>${spliced}</p>
                <i class="fas fa-check complete"></i>
            </li>
        `
    document.querySelector('#toDoComplete').innerHTML = addCompleteHtml;
}