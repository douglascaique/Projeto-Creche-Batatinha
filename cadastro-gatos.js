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




