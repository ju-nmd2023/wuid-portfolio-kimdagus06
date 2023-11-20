/* This event listener ensures that the enclosed code runs when the DOM content is fully loaded. 
Put JavaScript inside this event listener to avoid trying to access elements that haven't been rendered yet. */
document.addEventListener("DOMContentLoaded", function(){
    /* Mouse following effect */
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");

    document.addEventListener("mousemove", function(e){
        /* Move with mouse cursor */
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    /* Dark mode */
    /* Interactive Dark mode button in main page. */
    /* toggle - basically switch */
    const toggleDarkModeButton = document.getElementById('toggle__darkmode');
    const htmlElement = document.documentElement;

    /* When it's not clicked, it returns false. So it means a variable (darkMode) is initialized as false */
    let darkMode = false;

    /* Interact when user clicks a button. */
    toggleDarkModeButton.addEventListener('click', function(){
        darkMode = !darkMode;
        htmlElement.classList.toggle('dark-mode', darkMode); /* Set css */
        /* darkMode variable is used to apply CSS styles for dark mode. */
    });
});
