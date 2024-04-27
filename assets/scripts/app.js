document.addEventListener("DOMContentLoaded", function() {
    const hamburgrTriggers = document.querySelectorAll(".hamburger");
    const hamburgerNav = document.querySelector(".hamburger-nav");
    const main = document.querySelectorAll('main')

    hamburgrTriggers.forEach(function(trigger){
        trigger.addEventListener('click', function(){
            trigger.classList.toggle('is-active');
            trigger.classList.toggle('shows')
            hamburgerNav.classList.toggle('show')
            main.forEach(function(e) {
                e.classList.toggle('hidden');
            });
        });
    });
});