// Toggle-menu

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


function closeMenu() {
  mobileMenu.classList.add("hidden");
}

// Smooth Scroll behavior

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    
    closeMenu();
  });
});


// Hero-Section Slider

var swiper1 = new Swiper(".mySwiper1", {
spaceBetween: 30,
loop: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
});




//  Image-thumbnail video Play
 
const thumbnail1 = document.getElementById('thumbnail1');
const video1 = document.getElementById('video1');

thumbnail1.addEventListener('click', () => {
  thumbnail1.classList.add('hidden');  
  video1.classList.remove('hidden');   
  video1.play();                      
});

  

// Brand-Logo slider

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,  
    spaceBetween: 30,  
    loop: true,  
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,  
      draggable: true,  
    },
    breakpoints: {
      320: {
        slidesPerView: 2,  
        spaceBetween: 10,  
      },
      640: {
        slidesPerView: 3, 
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,  
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,  
        spaceBetween: 25,
      },
      1280: {
        slidesPerView: 6,  
        spaceBetween: 30,
      },
    },
  });


// Card-Slider

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2, 
    spaceBetween: 30, 
    loop: true, 
    pagination: {
      el: ".swiper-pagination", 
      clickable: true, 
    },
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      320: {
        slidesPerView: 1, 
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2, 
        spaceBetween: 30, 
      },
    },
  });


//  Image-thumbnail video Play
 
const thumbnail2 = document.getElementById('thumbnail2');
const video2 = document.getElementById('video2');

thumbnail2.addEventListener('click', () => {
  thumbnail2.classList.add('hidden');  
  video2.classList.remove('hidden');   
  video2.play();                      
});


// Toggle-Accordion-Item

function toggleAccordionItem(event) {
  const content = event.currentTarget.nextElementSibling;

  if (content.style.maxHeight) {
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
  }
}

    // Valid Form Alert message:

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form Submitted');
        alert('Thank you for submitting the form!');
 
    }


// Updated Year 
  
document.getElementById('year').textContent = new Date().getFullYear();