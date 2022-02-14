// search bar code is here 
document.querySelector('#search-btn').onclick=()=>{
    document.querySelector('#search').classList.toggle('active');
}

document.querySelector('#close-btn').onclick=()=>{
    document.querySelector('#search').classList.remove("active");
}

// heart shoping bar code is here 
document.querySelector('#heart-btn').onclick=()=>{
    document.querySelector('#heart').classList.toggle('active');
}

document.querySelector('#close-btn-2').onclick=()=>{
    document.querySelector('#heart').classList.remove("active");
}


// heart shoping bar code is here 
document.querySelector('#shoping-btn').onclick=()=>{
    document.querySelector('#heart').classList.toggle('active');
}

document.querySelector('#close-btn-2').onclick=()=>{
    document.querySelector('#heart').classList.remove("active");
}


// navlist code is here 
document.querySelector('#menu').onclick=()=>{
  document.querySelector('#navlist').classList.toggle('active');
}




// on window scroll 

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav .navlist a');

window.onscroll = () =>{

    // menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
    document.querySelector('#heart').classList.remove("active");
    document.querySelector('#navlist').classList.remove("active");
  
    // section.forEach(sec =>{
  
    //   let top = window.scrollY;
    //   let height = sec.offsetHeight;
    //   let offset = sec.offsetTop - 150;
    //   let id = sec.getAttribute('id');
  
    //   if(top >= offset && top < offset + height){
    //     navLinks.forEach(links =>{
    //       links.classList.remove('active');
    //       document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
    //     });
    //   };
  
    // });
  
  }



//   review swiper is here  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizhontal',
    // loop: true,
    speed: 1000,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });