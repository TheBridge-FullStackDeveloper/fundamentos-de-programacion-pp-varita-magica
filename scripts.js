const colors = ['606c38', '283618', 'fefae0', 'dda15e', 'bc6c25'];
const randomGifs = ['./assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif', './assets/magic-4.gif', './assets/magic-5.gif', './assets/magic-6.gif', './assets/abracadabra.gif']

const getRandom = (array) => {
    let hex = '#'
    let randomIndex = Math.floor(Math.random() * array.length)

    if(array === colors){
        return hex += array[randomIndex]
    } else{
        return array[randomIndex]
    }
    
}

getRandom(colors);



const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++){
    
    links[i].onclick = function(e){
        e.preventDefault()
    }
}

const imgs = document.getElementsByTagName('img');

for (let i = 0; i < imgs.length; i++){

    let original = imgs[i].getAttribute('src');
    
    imgs[i].onclick = function(e){
        e.target.src = './assets/magic-1.gif'
    }
    imgs[i].onmouseover = function(e){
        e.target.src = getRandom(randomGifs)
    }
    imgs[i].onmouseleave = function(e){
        e.target.src = original;
    }
};


const parrafo = document.getElementsByTagName('p');

 for (let i = 0; i < parrafo.length; i++){

    let original = parrafo[i].getAttribute('color');
    
    parrafo[i].onclick = function (e) {
        e.currentTarget.style.color = 'red';
        e.currentTarget.style.background = 'purple'
    }
    
    parrafo[i].onmouseover = function(e){
        e.currentTarget.style.color = 'yellow';
        e.currentTarget.style.background = 'red';
    }
    parrafo[i].onmouseleave = function(e){
        e.currentTarget.style.color = original;
        e.currentTarget.style.background = original;
    }
}


const art = document.getElementsByTagName('article');

 for (let i = 0; i < art.length; i++){
    let original = art[i].style.backgroundColor;


    art[i].onclick = function (e) {
        e.currentarget.style.backgroundColor = 'green'
    }

    art[i].onmouseover = function (e) {
        
        e.currentTarget.style.backgroundColor = getRandom(colors);
    }

    art[i].onmouseleave= function (e) {
        e.currentTarget.style.backgroundColor = original;
    }
    
}









