// button 

let btn=document.querySelector('.menu-btn');

btn.addEventListener('click',()=>{
    let ulmenu= document.querySelector('.mini-menu');
    ulmenu.classList.toggle('slide-left');
    
})
// menu btn 2nd

let btn2=document.querySelector('.humb');
let btn3=document.querySelector('.down');
btn2.addEventListener('click',()=>{
    let ulmenu2=document.querySelector('.ul-humber');
    ulmenu2.classList.toggle('ul-show'); 
     
})
btn3.addEventListener('click',()=>{
    let ulmenu2=document.querySelector('.ul-humber');
    ulmenu2.classList.toggle('ul-show'); 
     
})

// slider image main

let slideindex=0;
// console.log(slideindex);

show();
function show(){
    let i;
    let slides=document.querySelectorAll('.slide');
    for(i=0;i < slides.length;i++){
        slides[i].style.display="none";
        
    }
    slideindex++;
    if(slideindex > slides.length){
        slideindex=1; }
        slides[slideindex-1].style.display='flex';
         
        
        setTimeout(show,2000);
   
}



// slide hover


function mous(){
   let c= document.querySelector('.row').classList.add('row-show');
    document.querySelector('.show-image').classList.add('img-shwo');

    // let cc=document.querySelectorAll('.row');
    // console.log(cc);
     

}
function mousout(){
    document.querySelector('.row').classList.remove('row-show');   
    document.querySelector('.show-image').classList.remove('img-shwo');   
}
let ca14=document.getElementById('card14').addEventListener('mouseover',mous);
let ca15=document.getElementById('card14').addEventListener('mouseout',mousout);
 
// slide hover
 

// cart view port

 let filterbtn=document.querySelectorAll('.view-slide');
 let filtercards=document.querySelectorAll('.cart');


    let filterfun=(ele)=>{
        let act=document.querySelector('.active').classList.remove('active');
        let fo= ele.target.classList.add('active');
           
        filtercards.forEach((card1)=>{
            card1.classList.add('hide');
            
            if(card1.dataset.name===ele.target.name||ele.target.dataset.name==='featured'){
                card1.classList.remove('hide');
            }
        })
    }
    
    
    filterbtn.forEach(button=>{
        button.addEventListener('click',filterfun);
})
// cart end
 
 
// scroll button

function scrollup(){
    window.scrollTo(0,0);
}
let scbtn=document.querySelector('.slide-top');
window.addEventListener('scroll',()=>{
    if(window.scrollY>=500){
        scbtn.style.display="block";
    }
    else{
        scbtn.style.display="none";
    }    
});

// scroll end
 

// use login 
    let loginpage=document.querySelector('.ico1');
    let closelogin=document.querySelector('.close18');
    // console.log(showlogin);
    loginpage.addEventListener('click',()=>{
        let showlogin=document.querySelector('.userlogin18');
        
        showlogin.classList.add('show18');  
    });
    // class remove
    closelogin.addEventListener('click',()=>{
        let showlogin=document.querySelector('.userlogin18');
            showlogin.classList.remove('show18');
    })
// use login END