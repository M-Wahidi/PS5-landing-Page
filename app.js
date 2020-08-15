const toggleBtn = document.querySelector(".burger");
const navlinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', function () {
    navlinks.classList.toggle("active");
    toggleBtn.classList.toggle("toggle");
});