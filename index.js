/*  javaScript for On The Job
    9/01/2024
    Creating a fade in animation to add more to this webpage
*/


// fade effect while scolling //

function fadeInOnScroll(element, duration) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`; 
    const checkVisibility = () => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            element.style.opacity = 1; 
        }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
}


const menu = document.getElementsByClassName('menu');
for (let i = 0; i < menu.length; i++) {
    fadeInOnScroll(menu[i], 2000); // 2 seconds duration
}

const devsFavs = document.getElementsByClassName('devsFavs');
for (let i = 0; i < devsFavs.length; i++) {
    fadeInOnScroll(devsFavs[i], 2500); // 2.5 seconds duration
}

const hoursLocationContainer = document.getElementsByClassName('hours-location-container');
for (let i = 0; i < hoursLocationContainer.length; i++) {
    fadeInOnScroll(hoursLocationContainer[i], 3000); // 3 seconds duration
}

//  Fade effect for the hero content  //

function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.display = 'block';

    const interval = 50; 
    const increment = interval / duration; 

    const fade = setInterval(function() {
        opacity += increment;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fade);
        }
    }, interval);
}

// Fade in the Food Truck Icon
const foodTruckIcon = document.getElementById('foodTruckIcon');
fadeIn(foodTruckIcon, 2000); // 2 seconds duration