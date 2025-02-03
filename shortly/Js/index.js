/*Variables*/
const form = document.getElementById('link-form')
const input = document.getElementById('link-input')
const message = document.getElementById('err-msg')
const menu = document.getElementById('menu')
const btnMenu = document.getElementById('menu-btn')

//Events

form.addEventListener('submit', validateData)
btnMenu.addEventListener('click', navToggle)


//Functions

function navToggle(){
    btnMenu.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle('animate')
    
    

   
    
    
}


function isValidURL(url) {
    const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' +                  // Protocolo (http o https)
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // Dominio (ej. example.com)
        '((\\d{1,3}\\.){3}\\d{1,3}))' +       // o dirección IP (ej. 192.168.0.1)
        '(\\:\\d+)?' +                        // Puerto (opcional, ej. :8080)
        '(\\/[-a-zA-Z\\d%@_.~+&:]*)*' +       // Ruta (opcional)
        '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' +   // Query string (opcional)
        '(\\#[-a-zA-Z\\d_]*)?$',              // Fragmento (opcional)
        'i'                                   // Ignorar mayúsculas/minúsculas
    );

    return urlPattern.test(url);
}

function validateData(e){
    e.preventDefault()

    if(input.value == ''){
        message.innerHTML = `Please enter something`
        input.classList.add('inner-shadow')
    }else if(!isValidURL(input.value)){
        message.innerHTML = `Please enter a valid URL`
        input.classList.add('inner-shadow')
    }else{
        message.innerHTML = ``
        input.classList.remove('inner-shadow')
    }

    setTimeout(()=>{
        message.innerHTML = ``
        input.classList.remove('inner-shadow')
    
    }, 3000)
    
    
}



