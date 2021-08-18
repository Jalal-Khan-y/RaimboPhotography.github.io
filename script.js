const image_boxes = document.getElementsByClassName("wild-box"); 
const arrows = document.getElementsByClassName("arrows");


// FOR WILD PHOTOGRAPHY


let clicked = (value) => {
    bydefault = bydefault + value ;
    swipe(bydefault);
}

let swipe = (number) =>{
    if(bydefault == image_boxes.length){
        bydefault = 0 ;
        number = 0 ;
    }
    if(bydefault < 0){
        bydefault = image_boxes.length -1 ;
        number = image_boxes.length -1;
    }
    for(items of image_boxes){
        items.style.display = "none" ;
    }
    image_boxes[number].style.display = "inline-block";
}

let bydefault = 0;
swipe(bydefault);



// FOR NATURE PHOTOGRAPHY

const nature_boxes = document.getElementsByClassName("nature-box"); 
const arrows2 = document.getElementsByClassName("arrows2");
let clicked2 = (value2) => {
    bydefault2 = bydefault2 + value2 ;
    swipe2(bydefault2);
}

let swipe2 = (number2) =>{
    if(bydefault2 == nature_boxes.length){
        bydefault2 = 0 ;
        number2 = 0 ;
    }
    if(bydefault2 < 0){
        bydefault2 = nature_boxes.length -1 ;
        number2 = nature_boxes.length -1;
    }
    for(items2 of nature_boxes){
        items2.style.display = "none" ;
    }
    nature_boxes[number2].style.display = "inline-block";
}
let bydefault2 = 0;
swipe2(bydefault2);


// FOR MOBILE PHOTOGRAPHY

const mobile_boxes = document.getElementsByClassName("mobile-box"); 
const arrows3 = document.getElementsByClassName("arrows3");
let clicked3 = (value3) => {
    bydefault3 = bydefault3 + value3 ;
    swipe3(bydefault3);
}

let swipe3 = (number3) =>{
    if(bydefault3 == mobile_boxes.length){
        bydefault3 = 0 ;
        number3 = 0 ;
    }
    if(bydefault3 < 0){
        bydefault3 = mobile_boxes.length -1 ;
        number3 = mobile_boxes.length -1;
    }
    for(items3 of mobile_boxes){
        items3.style.display = "none" ;
    }
    mobile_boxes[number3].style.display = "inline-block";
}
let bydefault3 = 0;
swipe3(bydefault3);



// FOR MORE PCITURES

const more_boxes = document.getElementsByClassName("more-box"); 
const arrows4 = document.getElementsByClassName("arrows4");
let clicked4 = (value4) => {
    bydefault4 = bydefault4 + value4 ;
    swipe4(bydefault4);
}

let swipe4 = (number4) =>{
    if(bydefault4 == more_boxes.length){
        bydefault4 = 0 ;
        number4 = 0 ;
    }
    if(bydefault4 < 0){
        bydefault4 = more_boxes.length -1 ;
        number4 = more_boxes.length -1;
    }
    for(items4 of more_boxes){
        items4.style.display = "none" ;
    }
    more_boxes[number4].style.display = "inline-block";
}
let bydefault4 = 0;
swipe4(bydefault4);


// OUR BEST

const best_boxes = document.getElementsByClassName("best-box"); 
const arrows5 = document.getElementsByClassName("arrows5");
let clicked5 = (value5) => {
    bydefault5 = bydefault5 + value5 ;
    swipe5(bydefault5);
}

let swipe5 = (number5) =>{
    if(bydefault5 == best_boxes.length){
        bydefault5 = 0 ;
        number5 = 0 ;
    }
    if(bydefault5 < 0){
        bydefault5 = best_boxes.length -1 ;
        number5 = best_boxes.length -1;
    }
    for(items5 of best_boxes){
        items5.style.display = "none" ;
    }
    best_boxes[number5].style.display = "inline-block";
}
let bydefault5 = 0;
swipe5(bydefault5);

// SIDE NAV TOGGLE

const button = document.querySelector(".hamburger");
const side_nav = document.querySelector(".side-nav")
let tgl = true;
// side_nav.style.display = "none";
button.addEventListener("click" , function(){
  
    tgl = !tgl ;
    if(!tgl){
        side_nav.style.display = "none";
    }
    else{
        side_nav.style.cssText = "display :flex; ";
    }

})

// EXTRA NAV

let extra_nav = document.querySelector(".extra-nav");
extra_nav.style.display = "none";
let temp = true ;
document.addEventListener("scroll", function(){
    
    if(pageYOffset > 850){
            extra_nav.style.display = "flex";
            // console.log("scrolling...");
        }
        else{
            extra_nav.style.display = "none";
        }
})


// OTHER MODIFICATIONS
let profile = document.querySelector(".picture");
profile.addEventListener("click" , function(){
    profile.style.cssText = "width : 80%; height: 25em; transition : 1s ;"
})
profile.addEventListener("dblclick" , function(){
    profile.style.cssText = "width : 55%; height: 15em; transition : 1s ;"
})

let logo = document.querySelector(".logo");
logo.addEventListener("click" , function(){
    logo.style.cssText = "width : 20%; height: 4em; transition : 1s ; left:40%; top : 15%;"
})
logo.addEventListener("dblclick" , function(){
    logo.style.cssText = "width : 14%; height: 2em; transition : 1s ; left:9%; "
})


// let neon_animation = document.querySelector(".neon-animation");
// neon_animation.addEventListener("click" , function(){
//     neon_animation.style.cssText = "transform :scale(1.3); position:absolute; left:44.5%; top:38.8%; transition:4s;"
// })

let enh = document.querySelector(".extra-nav-headings");
let enl = document.querySelector(".extra-nav-logo");

extra_nav.addEventListener("mouseover",function(){
    enh.style.display = 'flex';
    enl.style.display = 'flex';
})
extra_nav.addEventListener("mouseout",function(){
    enh.style.display = 'none';
    enl.style.display = 'none';
})