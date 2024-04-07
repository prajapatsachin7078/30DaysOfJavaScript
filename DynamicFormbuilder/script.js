const formName = document.querySelector('#formName');
const fieldType = document.querySelector('#fieldType');
const fieldLabel = document.querySelector('#fieldLabel');
const addField = document.querySelector('#addField');
const saveForm = document.querySelector('#saveForm');
const formsContainer = document.querySelector('#formsContainer');

let isSave = 0;

function addNewField() {
     isSave++;
    if(fieldLabel.value === ''){
        alert('Please add the field');
    }else{
    	alert('Your field in the form is added successfully');
    }
}

function saveNewForm() {
    if(isSave === 0){
        alert('Please add at least one field with a label to the form before saving.');
        return;
    }
    if (isSave == 1) {
      
        const h2 = document.createElement('h2');
        h2.style.marginBottom = '30px';
        h2.textContent = formName.value === ''?'Unnamed Form':formName.value;
        formsContainer.appendChild(h2);
    }
    
    const div = document.createElement('div');
    div.classList.add('formSubContainer');
    formsContainer.appendChild(div);
    
     const label = document.createElement('label');
    label.style.marginLeft = '4px';
    label.style.fontSize = '24px';
    label.textContent = fieldLabel.value;
    div.appendChild(label);


    const inputField = document.createElement('input');
    inputField.type = fieldType.value;

    div.appendChild(inputField);

    formsContainer.classList.add('dForm');
}

addField.addEventListener('click', addNewField);
saveForm.addEventListener('click', saveNewForm);


