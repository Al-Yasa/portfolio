document.addEventListener('DOMContentLoaded', function() {
    var aboutBtn = document.querySelector('.about-btn'), // select about button
        projectBtns = document.querySelectorAll('.project-btn'); // select project buttons

    aboutBtn.addEventListener('click', function(e) { // add click event listener to button
        e.preventDefault(); // prevent default behaviour of anchor link (refresh page)

        var input = document.createElement('input'); // Create inputField
        document.body.appendChild(input); // add input element to DOM
        input.value = 'belhenniche.yassaa@gmail.com'; // set input value to email
        input.select(); // focus on input
        document.execCommand('copy'); // copy value of input to clipboard
        input.remove(); // remove input element from DOM
    });

    projectBtns.forEach(function(projectBtn) {
       projectBtn.addEventListener('click', function(e) { // add click event listener to buttons
            // e.preventDefault(); // prevent default behaviour of anchor links (open new tab)
        });
    });

});
