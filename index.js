const zodziai = ["labas", "kompiuteris", "laidas"];
const randomSkaicius = Math.floor(Math.random() * zodziai.length)
const randomZodis = zodziai[randomSkaicius]

let sumaisytasZodis = randomZodis;

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

    
    
}