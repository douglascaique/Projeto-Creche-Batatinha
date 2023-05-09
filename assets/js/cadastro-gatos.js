const form = document.querySelector('form')

function salvarForm (event) {
    event.preventDefault();
    const catname = document.querySelector('#m-name').value;
    const hname = document.querySelector('#h-name').value;
    const formImg = document.querySelector('#upload-file').files[0];
    const catPreview = document.querySelector('#cat-svg');

    const formData = {
        catname, 
        hname, 
        formImg: formImg?.name || 'assets/gato-1.jpeg'
    }
    
    const savedData = localStorage.getItem('Form');
    let allData = []
    
    if (savedData) {
        allData = JSON.parse(savedData);

    }
    allData.push(formData); 

    localStorage.setItem('Form', JSON.stringify(allData));

    catPreview.src = 'assets/img/cat-svg.png';
    form.reset();
    

}

form.addEventListener("submit", salvarForm);

const uploadFile = document.querySelector('#upload-file');
const catPreview = document.querySelector('#cat-svg');
uploadFile.addEventListener('change', (event) => {
  const file = uploadFile.files[0];  
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        catPreview.src = reader.result;
    };
  }

});

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

