
function Validator(options) {

    // Get Expect Parent Element From Child Element In Classes
    function getParentE(childE, nameParentE) {
        while(childE.parentElement){
            if(childE.parentElement.matches(nameParentE)){
                return childE.parentElement;
            }
            childE = childE.parentElement;
        }
    }

    // Check Input Has Had Information of User Yet?
    function validate(rule, inputElement){
        var errMessage;

        //get rules fucntion of rule selector
        var rules = selectorRules[rule.selector];
        
        // check rule to rule is Expected?
        for(var i=0; i<rules.length;i++){
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errMessage = rules[i](inputElement.value);
                    break;
            }
            if(errMessage) break;
        }

        //  release errMessage
        var formInput = getParentE(inputElement, '.form-group');
        if(errMessage){
            formInput.querySelector(options.form_message).innerText = errMessage;
            formInput.classList.add('invalid');
        }
        else{
            formInput.querySelector(options.form_message).innerText = '';
            formInput.classList.remove('invalid');
        }
        return !errMessage;
    }

    //---Begin---
    var formElement = document.querySelector(options.form);
    var selectorRules = {};
    if(formElement){

        //Submit form
        formElement.onsubmit = function(e){
            e.preventDefault();

            //  Check All Input has had Inf of User yet? 
            var isFormValid = true;
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(rule, inputElement);
                if(!isValid){
                    isFormValid = false;
                }
            })
            
            //Get Information User in form
            if(isFormValid){
                if(typeof options.onsubmit === 'function'){
                    var enableInputs = this.querySelectorAll('[name]:not([disabled])');
                    var formValues =  Array.from(enableInputs).reduce((values, input) => {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name = "'+ input.name +'"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) return values
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                                break;
                        }
                        return values;
                    },{})
                    options.onsubmit(formValues);
                }
            }
        }

        //check form active
        options.rules.forEach(rule => {
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(inputElement => {
                if(inputElement){
                
                    // Solve On Blur
                    inputElement.onblur = function(){
                        validate(rule,inputElement);
                    }
    
                    // Solve On Input
                    inputElement.oninput = function(){
                        var formInput = getParentE(inputElement, '.form-group');
                        formInput.querySelector('.form-message').textContent = '';
                        formInput.classList.remove('invalid');
                    }
                }
            })

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector] = [rule.test];
            }
        });
    }
    
}

Validator.isRequired = function(selector){
    return {
        selector,
        test: function(value){
            return value? undefined : 'Vui lòng nhập vào trường này!';
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector,
        test: function(value){
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value)? undefined : `Vui lòng nhập email!`;
        }
    }
}

Validator.minRequired = function(selector, min){
    return {
        selector,
        test: function(value){
            return (value.length >= min)? undefined : `Vui lòng nhập ít nhất ${min} kí tự`; 
        }
    }
}

Validator.isConfirm = function(selector, callback, message){
    return {
        selector,
        test: function(value){
            return value === callback()? undefined : message || 'Nhap lai khong chinh xac';
        }
    }
}