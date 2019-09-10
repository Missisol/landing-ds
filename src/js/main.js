'use strict';

class SubmitForm {

    constructor(apiURL, inputNames, formSelector, btnSubmit, formEl = null, formValue = {}) {
        this.inputNames = inputNames;
        this.apiURL = apiURL;
        this.formSelector = formSelector;
        this.formEl = formEl;
        this.formValue = formValue;
    }

    init() {
        this.formEl = document.querySelector(this.formSelector);

        this.formEl.addEventListener('submit', e => this.formSubmit(e));
    }

    formSubmit(e) {
        e.preventDefault();

        if (this.validate()) {

            this.inputStringify();
            this.fetchForm();
        }
    }

    validate() {
        let isValid = true;
        let message = '';

        for (let input of this.inputNames) {
            const inputEl = this.formEl[`${input}`];

            if (inputEl.name === 'userName') {
                if (!this.checkName(inputEl)) {
                    isValid = false;
                }
            }

            if (inputEl.name === 'userPhone') {
                if (!this.checkPhone(inputEl, message)) {
                    isValid = false;
                }
            }
        }

        return isValid;
    }

    checkName(inputEl) {
        let message = null;
        const regexp = /[^a-zа-я]|(^$)/gi;

        regexp.test(inputEl.value) ?
            (inputEl.value === '' ? message = 'Поле не должно быть пустым' :
                message = 'Поле должно содержать только буквы')
            : null;

        return this.validFunction(inputEl, message);
    }

    checkPhone(inputEl) {
        let message = null;

        inputEl.value === '' ? message = 'Поле не должно быть пустым' : null;

        return this.validFunction(inputEl, message);
    }


    validFunction(inputEl, message) {

        let isValid = true;

        if (message !== null) {
            this.setInvalidField(inputEl, message);
            isValid = false;
        } else {
            this.setValidField(inputEl);
        }

        return isValid;
    }

    setInvalidField(inputEl, message) {

        // inputEl.classList.add('error');

        const field = document.querySelector(`.contacts__field-${inputEl.name}`);
        field.innerHTML = message;
    }

    setValidField(inputEl) {

        // inputEl.classList.remove('error');

        const field = document.querySelector(`.contacts__field-${inputEl.name}`);
        field.innerHTML = '';
    }

    inputStringify() {
        let inputValue = '';

        for (let input of this.inputNames) {

            const inputEl = this.formEl[`${input}`];
            inputValue += `${input}=${inputEl.value}; `;
        }

        inputValue = inputValue.trim();

        return inputValue;
    }

    fetchForm() {
        this.formValue.input = this.inputStringify();
        console.log(this.formValue);

        fetch(this.apiURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.formValue)
        })
            .then(res => res.json())
            .then(responseOK => {
                this.accept();
            })
            .catch(err => console.log(err));

        // Функция должна вызываться в случае ответа сервера ОК
        this.accept();
    }

    accept() {
        this.formEl.classList.add('unvisible');

        document.querySelector('.contacts__accept')
            .classList.add('show');
    }
}

const api = 'http://localhost:3000/api/users';
const inputs = [
    'userName',
    'userPhone',
];
const formSelector = '.contacts__form';
const btnSubmit = '.contacts__submit';

const send = new SubmitForm(api, inputs, formSelector, btnSubmit);
send.init();

