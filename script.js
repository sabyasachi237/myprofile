const linkInfo={
    "github":"https://github.com/sabyasachi237",
    "linkedin":"https://www.linkedin.com/in/sabyasachi-sen-4954491b6",
    "twitter":"https://twitter.com/ssen5271",
    "facebook":"https://www.facebook.com/aarjun.sing.54",
    "mail":"mailto: sabyasachisen237@gmail.com",
}


const onHandleClick = (link) => {
    window.location.href = linkInfo[link]
}
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.dark-mode-button');
    const body = document.querySelector('body');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle dark mode by toggling a CSS class on the body
            body.classList.toggle('dark-mode');
            
            // Update button text based on dark mode state
            if (body.classList.contains('dark-mode')) {
                button.textContent = "Disable Dark Mode";
            } else {
                button.textContent = "Enable Dark Mode";
            }
        });
    });
});



