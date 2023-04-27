const form = document.querySelector('form')

function salvarForm (event) {
    event.preventDefault();
    const catname = document.querySelector('#m-name').value;
    const hname = document.querySelector('#h-name').value;

    const formdata = {
        catname, hname 
    }
    
    const dadossalvos = localStorage.getItem('Form');
    let todososdados = []
    
    if (dadossalvos) {
        todososdados = JSON.parse(dadossalvos);

    }
    todososdados.push(formdata); 

    localStorage.setItem('Form', JSON.stringify(todososdados));

    form.reset();

}

let inputCatName = document.querySelector('#m-name')
let inputOwnerName = document.querySelector('#h-name')
let saveBtn = document.querySelector('.s-btn')

function verify () {
    if (inputCatName.value && inputOwnerName.value) {
        saveBtn.classList.remove('disabled');
    }else {
        saveBtn.classList.add('disabled');
    }
}

inputCatName.addEventListener('input', verify);
inputOwnerName.addEventListener('input', verify);