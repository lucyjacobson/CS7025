//INSPO GENERATOR

let images = [
    'ASSETS/IMAGE1.jpg',
    'ASSETS/IMAGE2.jpg',
    'ASSETS/IMAGE3.jpg',
    'ASSETS/IMAGE4.jpg',
    'ASSETS/IMAGE5.jpg',
    'ASSETS/IMAGE6.jpg',
    'ASSETS/IMAGE7.jpg',
    'ASSETS/IMAGE8.jpg',
    'ASSETS/IMAGE9.jpg',
    'ASSETS/IMAGE10.jpg'
];

let currentIndex = 0;

function generateNextImage() {
    let selectedImage = images[currentIndex];
    let imgElement = document.getElementById('randomImage');

    imgElement.src = selectedImage;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

//HOVER

document.addEventListener("DOMContentLoaded", () => {
  const projectImage = document.querySelectorAll(".project-item img");

  projectImage.forEach((item) => {
      item.addEventListener("mouseenter", () => {
          item.classList.add("hover-shadow");
      });

      item.addEventListener("mouseleave", () => {
          item.classList.remove("hover-shadow");
      });
  });
});

//TESTIMONIALS

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function () {
  $.ajax({
    url: "portfolio.json",
    dataType: "json",
    success: async function (data) {
      const testimonialImage = $("#testimonial-image");
      const totalImages = data.length;
      let index = 0;

      data.forEach((item) => {
        const img = new Image();
        img.src = item.path;  
      });

      const showImage = () => {
        const testimonial = data[index];
        testimonialImage.css("opacity", 0);
        setTimeout(() => {
          testimonialImage.attr("src", testimonial.path); 
          testimonialImage.css("opacity", 1); 
        }, 500);
      };

      showImage();

      setInterval(() => {
        index = (index + 1) % totalImages;
        showImage();
      }, 5000); // 5 secs
    },
  });

  //NAV LINKS

  let location = document.location.href;
  let locationBits = location.split("/");

  let page = locationBits[locationBits.length - 1];

  $('.nav-links a').each(function () {
      if ($(this).attr("href") === page || location.endsWith($(this).attr("href"))) {
          $(this).addClass("current-page");
      }
  });

//COLOR PICKER

window.onload = function () {
  const savedFavoriteColor = localStorage.getItem("favoriteColor"); 

  const colorSection = document.querySelector(".color-picker"); 

  if (colorSection) {
    if (savedFavoriteColor) {
      colorSection.style.backgroundColor = savedFavoriteColor;
      console.log(`Applied your saved color: ${savedFavoriteColor}`);
    } else {
      colorSection.style.backgroundColor = "white";
      console.log("No color saved, using default (white).");
    }
  }
};

const allColorButtons = document.querySelectorAll(".color-picker button");

allColorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const pickedColor = this.getAttribute("data-color");

    localStorage.setItem("favoriteColor", pickedColor);

    const colorSection = document.querySelector(".color-picker");

    if (colorSection) {
      colorSection.style.backgroundColor = pickedColor;
      console.log(`Changed background to: ${pickedColor}`);
    }

    allColorButtons.forEach((btn) => btn.classList.remove("active-outline"));
    this.classList.add("active-outline");
  });
});

});


//CONTACT FORM

(function() {
  emailjs.init("F5RMGo0ZduN9mTlKu"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const serviceID = "service_7t9apew"; 
  const templateID = "template_z66llxr"; 

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert("Message sent!"); 
          document.getElementById("contact-form").reset(); 
      })
      .catch((error) => {
          console.error("Error sending message:", error); 
          alert("Error sending message. Please try again.");
      });
});