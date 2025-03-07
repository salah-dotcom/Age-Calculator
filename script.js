let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let datenow = new Date().getFullYear();

btn.addEventListener('click', function(){
    let date = new Date(input.value).getFullYear();
    if(date >= datenow){
        document.getElementById('result').innerHTML = `<p id="para" style="font-size: 20px; color: #f00">Please Enter a valid Year</p>`
        input.value = '';
    }else if(input.value === ''){
         document.getElementById('result').innerHTML = `<p id="para" style="font-size: 20px; color: #f00">Please Enter Your BirthDay</p>`
    }else{
        let calc = datenow - date;
        document.getElementById('result').innerHTML = `<p id="para"> Your Age is <span >${calc}</span></p>`
        input.value = '';
    }
})