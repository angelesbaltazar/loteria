const mazo = [
    './img_loteria/1.jpg',
    './img_loteria/2.jpg',
    './img_loteria/3.jpg',
    './img_loteria/4.jpg',
    './img_loteria/5.jpg',
    './img_loteria/6.jpg',
    './img_loteria/7.jpg',
    './img_loteria/8.jpg',
    './img_loteria/9.jpg',
    './img_loteria/10.jpg',
    './img_loteria/11.jpg',
    './img_loteria/12.jpg',
    './img_loteria/13.jpg',
    './img_loteria/14.jpg',
    './img_loteria/15.jpg',
    './img_loteria/16.jpg',
    './img_loteria/17.jpg',
    './img_loteria/18.jpg',
    './img_loteria/19.jpg',
    './img_loteria/20.jpg',
    './img_loteria/21.jpg',
    './img_loteria/22.jpg',
    './img_loteria/23.jpg',
    './img_loteria/24.jpg',
    './img_loteria/25.jpg',
    './img_loteria/26.jpg',
    './img_loteria/27.jpg',
    './img_loteria/28.jpg',
    './img_loteria/29.jpg',
    './img_loteria/30.jpg',
    './img_loteria/31.jpg',
    './img_loteria/32.jpg',
    './img_loteria/33.jpg',
    './img_loteria/34.jpg',
    './img_loteria/35.jpg',
    './img_loteria/36.jpg',
    './img_loteria/37.jpg',
    './img_loteria/38.jpg',
    './img_loteria/39.jpg',
    './img_loteria/40.jpg',
    './img_loteria/41.jpg',
    './img_loteria/42.jpg',
    './img_loteria/43.jpg',
    './img_loteria/44.jpg',
    './img_loteria/45.jpg',
    './img_loteria/46.jpg',
    './img_loteria/47.jpg',
    './img_loteria/48.jpg',
    './img_loteria/49.jpg',
    './img_loteria/50.jpg',
    './img_loteria/51.jpg',
    './img_loteria/52.jpg',
    './img_loteria/53.jpg',
    './img_loteria/54.jpg',
    
]

function rotarImagenes(){
    let carruselRotar=Math.floor((Math.random()*mazo.length));
    
    document.getElementById("carousel-inner").src=mazo[carruselRotar];
}
onload =function (){

    rotarImagenes();
    setInterval(rotarImagenes,2000);
}

let contador = 0

function siguienteCarta(){
    document.getElementById("cartas").src = mazo[contador];
    contador ++;
}