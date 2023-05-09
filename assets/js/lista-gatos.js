const storedFormData = JSON.parse(localStorage.getItem('Form'));
const listContainer = document.querySelector('.form-info');

if (storedFormData) {
  const list = document.createElement('div');
  list.classList.add('lista-de-miau');

  for (let i = 0; i < storedFormData.length; i++) {
    const formData = storedFormData[i];
    const listItemContent = `
      <div class="pefil-miau">
        <img src="${formData.formImg}" alt="${formData.catname}" class="foto-do-gato">
        <h2 class="cat-name">${formData.catname}</h2>
      </div>
      <a href="#"><button class="notas">Lançar notas</button></a>
    `;
    const listItem = document.createElement('div');
    listItem.classList.add('cards');
    listItem.innerHTML = listItemContent;
    list.appendChild(listItem);
  }

  listContainer.appendChild(list);
} else {
  console.log('Nenhum dado foi encontrado no localStorage');
}