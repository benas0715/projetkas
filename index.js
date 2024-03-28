// Paimti taskus

let taskai = localStorage.getItem('taskai')

let randomZodis = zodzioGeneravimas();

// Puslapio elementai

const zodzioDisplay  = document.getElementById("sumaisytasTekstas")
const form = document.getElementById("forma")
const taskuDisplay = document.getElementById("taskai")

// Rodyti taskus 
taskuDisplay.innerText = taskai;

let sumaisytasZodis = zodzioSumaisymas(randomZodis);

// Zodzio sumaisymas 



zodzioDisplay.innerText = sumaisytasZodis;

// Event listeners
form.addEventListener("submit", (forma) => {
    forma.preventDefault();

    let inputas = document.getElementById("spejimoInput");
    let spejimas = inputas.value; 

    if (spejimas == randomZodis){
        atspeta(inputas);
    } else {
        alert("Neatspejote, bandykite dar karta")
        inputas.value = ""
    }
});

function atspeta(inputas){
        alert("Atspejote, sveikiname!")
        taskai++;
        localStorage.setItem('taskai', taskai)

        // Is naujo nustatyti taskus nes pridejo dar viena
        taskuDisplay.innerText = taskai;
}

function zodzioGeneravimas(){
    const zodziai = ["labas", "kompiuteris", "laidas"];
    const randomSkaicius = Math.floor(Math.random() * zodziai.length)
    const randomZodis = zodziai[randomSkaicius]

    return randomZodis
}

function zodzioSumaisymas(sumaisytasZodis){
    for (let i = 0; i < sumaisytasZodis.length; i++) {

        let zodzioAr = sumaisytasZodis.split("")
        console.log(zodzioAr)
    
        const skaicius = Math.floor(Math.random() * zodzioAr.length)
        const skaicius2 = Math.floor(Math.random() * zodzioAr.length)
        let pirmaRaide = zodzioAr[skaicius];
        let antraRaide = zodzioAr[skaicius2];
    
        let holder = pirmaRaide;
        pirmaRaide = antraRaide;
        antraRaide = holder;
    
        zodzioAr[skaicius] = pirmaRaide;
        zodzioAr[skaicius2] = antraRaide;
    
        sumaisytasZodis = zodzioAr.join('')
    
        return sumaisytasZodis;   
        
    }
}