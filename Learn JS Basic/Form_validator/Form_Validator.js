Validator({
    form: '#form-1',

    form_message: '.form-message',

    rules: [
        Validator.isRequired('#fullname'),
        Validator.isRequired('#email'),
        Validator.isEmail('#email'),
        Validator.isRequired('#password'),
        Validator.minRequired('#password',6),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirm('#password_confirmation', function(){
        return document.querySelector('#password').value;
        }, 'Mật Khẩu Không Chính Xác!'),
        Validator.isRequired('#avatar'),
        Validator.isRequired('input[name="gender"]'),
        Validator.isRequired('#province'),
    ],

    UsersAPI : 'http://localhost:3000/courses',

    creatUser: function(data){
        var option={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(this.UsersAPI,option)
            .then(res => res.json())
    },

    onsubmit: function(data){
        var user = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            province: data.province
        }
        this.creatUser(user);
    }
})

Validator({
    form: '#form-2',

    form_message: '.form-message',

    rules: [
        Validator.isRequired('#email-DN'),
        Validator.isEmail('#email-DN'),
        Validator.isRequired('#password-DN'),
        Validator.minRequired('#password-DN',6),
    ],

    UsersAPI : 'http://localhost:3000/courses',

    checkUser: function(data, Users){
        return Users.some(user => {
            return (data.email===user.email) && (data.password===user.password);
        })
    },

    getUsers: function(data){
        fetch(this.UsersAPI)
            .then(res => res.json())
            .then(Users =>{
                var messSignInElement = document.querySelector('.mess-signIn');
                if(!this.checkUser(data, Users)){
                    messSignInElement.textContent = 'Hóa Chúa Tể Thất Bại!';
                    messSignInElement.classList.remove('success');
                    messSignInElement.classList.add('invalid');
                }
                else{
                    messSignInElement.classList.remove('invalid');
                    messSignInElement.classList.add('success');
                    messSignInElement.textContent = 'Hóa Chúa Tể Thành Công!';
                }
            })
    },

    onsubmit: function(data){
        this.getUsers(data);
    }
})