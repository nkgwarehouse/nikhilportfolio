/* 1. */ const translate = document.querySelectorAll(".translate");
const translateinx = document.querySelectorAll(".translateinx");

/* 2. */const opacity = document.querySelectorAll(".opacity");

/* 3. */const section = document.querySelector("section");

/* 4. */const big_title = document.querySelector(".big-title");

/* 5. */const header = document.querySelector("header");

/* 6. */const shadow = document.querySelector(".shadow");

/* 7. */const content = document.querySelector(".content");

/* 8. */const image_container = document.querySelector(".imgContainer");

/* 9. */const border = document.querySelector(".border");
/*______________________________________________________________________________________ */


/* --3. */let section_height = section.offsetHeight;
let section_width = section.offsetWidth;
/* --5. */let header_height =header.offsetHeight;
let header_width =header.offsetWidth;


window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    // let scrolll = window.pageXOffset;
    let sectionY = section.getBoundingClientRect();
    let sectionX = section.getBoundingClientRect().left;

/* --1. */  /*__________________________________________________________________________ */
          translate.forEach(element =>{
        let speed = element.dataset.speed;
        // let value = element.dataset.value;
        element.style.transform = `translateY(${scroll * speed}px)`;
        // element.style.transform = `translateX(${scroll * speed}px)`;
        });
/*______________________________________________________________________________________ */
/* --1. */  /*__________________________________________________________________________ */
translateinx.forEach(element =>{
   
    let speed = element.dataset.speed;

    element.style.transform = `translateX(${scroll * speed}px)`;
    });
/*______________________________________________________________________________________ */


/* --2. */ opacity.forEach(element => {
    element.style.opacity = scroll / (sectionX + section_width);
/* --3. */        element.style.opacity = scroll / (sectionY.top + section_height);
    });
/*______________________________________________________________________________________ */


/* --4. *//* --5. */    big_title.style.opacity = - scroll / (header_height / 2) + 1;
/* --6. */    shadow.style.height = `${scroll * 0.5 + 300}px`;
/*______________________________________________________________________________________ */


/* --7. */    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
/* --8. */    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
/*______________________________________________________________________________________ */


/* --9. */    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
/*______________________________________________________________________________________ */

                                           
})
