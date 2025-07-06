
// button container
const buttons = document.querySelectorAll('.tab-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const targetId = button.dataset.target;
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});




// section one text content
  const items = document.querySelectorAll(".accordion-item");

  items.forEach(item => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });


  // scroll 
window.addEventListener('scroll', function () {
    const blackScreen = document.querySelector('.black-screen');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 50) {
        blackScreen.style.opacity = 1;
        blackScreen.style.pointerEvents = 'auto';
    } else {
        blackScreen.style.opacity = 0;
        blackScreen.style.pointerEvents = 'none';
    }
});


// anmation for partnership section

const sections = document.querySelectorAll(".partnership-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2 
});

sections.forEach(section => {
  observer.observe(section);
});



