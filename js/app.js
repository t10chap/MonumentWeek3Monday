$(document).ready(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            });
        });
    });
    $('#submit').on("click", function (e) {
        e.preventDefault();
        console.log("clicked!");

        let inputs = document.querySelectorAll('.contact-input');
        inputs.forEach( (input) => {
            if(!input.value) {
                input.classList.add('error');
                $(input).siblings('.error-message').fadeIn();
            } else if (input.value) {
                input.classList.remove('error');
                $(input).siblings(".error-message").hide();
            }
        })
    });
});
