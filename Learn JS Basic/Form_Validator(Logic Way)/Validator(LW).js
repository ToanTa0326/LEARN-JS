function Validator(formSelector){
    const _this = this;

    function getParentE(childE, nameParentE){
        while(childE){
            if(childE.matches(nameParentE)) return childE;
            childE = childE.parentElement;
        }
    }

    var ValidatorRules = {
        required: value => {
            return value? undefined : `Vui Lòng Nhập Trường Này!`;
        },
        email: value => {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value)? undefined : `Vui Lòng Nhập Email Của Bạn!`;
        },
        min: min => {
            return value => {
                return value.length >= min? undefined : `Vui Lòng Nhập ${min} Kí Tự!`;
            }
        },
        isConfirm: (value, callback) => {
            return value === callback() ? undefined : `Mật Khẩu Không Chính Xác!`;
        }
    }

    const formE = document.querySelector(formSelector);
    let formRules = {};

    if(formE){
        let inputs = document.querySelectorAll('input[rules]');

        // Get Form Rules from input's attribute
        inputs.forEach(input => {
            let rules = input.getAttribute('rules').split('|');

            rules.forEach(rule => {
                let ruleHasValue = rule.includes(':');
                let ruleInfos;
                
                if(ruleHasValue){
                    ruleInfos = rule.split(":");
                    rule = ruleInfos[0];
                }

                let ruleFunc = ValidatorRules[rule];

                if(ruleHasValue) ruleFunc = ruleFunc(ruleInfos[1]);

                if(!Array.isArray(formRules[input.name])){
                    formRules[input.name] = [];
                }

                formRules[input.name].push(ruleFunc);
            })

            input.onblur = handleValidate;
            input.oninput = handleClearMessage;
        })

        // Check input value
        function handleValidate(event){
            let message,
                formGroup = getParentE(event.target, '.form-group'),
                rules = formRules[event.target.name];
                
            rules.some(rule => {
                switch (event.target.type) {
                    case 'radio':
                    case 'checkbox':
                        message = rule(
                            formE.querySelector('input[name]' + ':checked')
                        )
                        break;
                    default:
                        message = rule(event.target.value,
                            () => formE.querySelector('#password').value)
                        break;
                }
                return message;
            })

            if(message){
                formGroup.classList.add('invalid');
                formGroup.querySelector('.form-message').innerHTML = message;
            }

            return !message;
        }

        // Clear err mess when client input info
        function handleClearMessage(event){
            let formGroup = getParentE(event.target, '.form-group');
            formGroup.classList.remove('invalid');
            formGroup.querySelector('.form-message').innerHTML = '';
        }

        // Submit form
        formE.onsubmit = function(event){
            event.preventDefault();

            let inputs = formE.querySelectorAll('input[name][rules]'),
                isFormValid = true;

                // check form valid
                inputs.forEach((input, index) => {
                    let isValid = handleValidate({target: input});
                    if(!isValid){
                        isFormValid = false;
                    }
                })

                // get user infos from form when submt
                if(isFormValid){
                    if(typeof _this.onsubmit === 'function'){
                        let enableInputs = this.querySelectorAll('[name]:not([disable])');

                        let formValues = Array.from(enableInputs).reduce((values, input) => {
                            switch (input.type) {
                                case 'radio':
                                    values[input.name] = this.querySelector('input[name="' + input.name + '"]:checked').value; 
                                    break;
                                case 'checkbox':
                                    if(input.matches(':checked')) return values;

                                    if(!Array.isArray(values[input.name]))
                                        values[input.name] = [];

                                    values[input.name].push(input.value);
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                default:
                                    values[input.name] = input.value;
                                    break;
                            }
                            return values;
                        }, {})

                        _this.onsubmit(formValues);
                    }
                }

        }
    }
}