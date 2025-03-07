const UserInput = document.querySelector('#UserInput');
const PasswordInput = document.querySelector('#PasswordInput');
const btnLogin = document.querySelector('#btnLogin');
const message = document.querySelector('#message');
alert('LOGIN dengan user & password bray');
let database = [
    {
        'User':'admin',
        'Password':'admin'
    },
    {
        'User':'mumut',
        'Password':'mumut123'
    }
]
btnLogin.addEventListener('click',()=>{
    message.innerHTML = '';
    let User = UserInput.value;
    let Password = PasswordInput.value;
    let validate = true;
    if(User ===''){
        validate = false;
        message.innerHTML += '<div class ="alert alert-danger">User Tidak Boleh Kosong</div>';
    }
    if(Password === ''){
        validate = false;
        message.innerHTML += '<div class ="alert alert-danger">Password Tidak Boleh Kosong</div>';
    }

    if(validate){
        let success = {'User':false,'Password':false};
        for(let i=0;i<database.length;i++){
            if(User == database[i]['User']){
                success.User = true;
                if(Password == database[i]['Password']){
                    success.Password = true;
                }    
            }
        }
        if(success.User){
            if(success.Password){
                document.location.href = 'dasboard.html';
            }else{

                message.innerHTML = '<div class ="alert alert-danger">Password Salah</div>';
            }
        }else{
            message.innerHTML = '<div class ="alert alert-danger">User tidak dikenali</div>';
        }
    }

 });
