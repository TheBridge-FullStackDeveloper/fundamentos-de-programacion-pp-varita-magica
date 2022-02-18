//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const webLinks = document.querySelectorAll("a");

for (let i = 0; i < webLinks.length; i++) {
    webLinks[i].setAttribute("href", "#")
    webLinks[i].onclick = function () {
    this.style.color = "red";
  };
}
//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
const Gifs = {
    imagenes: ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"]

}
const imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].onclick = function () {
        let numero = Math.floor(Math.random() * 6);
        this.src = getRandom(Gifs.imagenes)
  };
}


//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++){
    parrafos[i].onclick = function(){
        this.style.background = getRandom(colors);   
        this.style.color = getRandom(colors);
    }
}


//2.3 Bloques de `article` o `section`: Cambia el color de fondo.
const articles = document.querySelectorAll("article");
const sections = document.querySelectorAll("section");
for (let i = 0; i < articles.length; i++){
    articles[i].onclick = function(){
        this.style.color = getRandom(colors);
    }
}

for (let j = 0; j < sections.length; j++){
    sections[j].onclick = function(){
        this.style.color = getRandom(colors);
    }
}


//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
const imagenesHover = document.querySelectorAll("img");
for (let i = 0; i < imagenesHover.length; i++) {

    imagenesHover[i].onmouseover = function () {

        this.src = "./assets/abracadabra.gif"
  };
  imagenesHover[i].onmouseout = function () {
        let numero = Math.floor(Math.random() * 6);
        this.src = Gifs.imagenes[numero];

    };
}

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < parrafos.length; i++){
    parrafos[i].onmouseover = function(){
       
        this.style.background = getRandom(colors);   
        this.style.color = getRandom(colors);
    }
}

//4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ['#dc2f02', '#4361ee', '#283618']
const getRandom = (array) =>{
    
    let numero = Math.floor(Math.random() * array.length);
    return array[numero];
    console.log(array[numero])
}