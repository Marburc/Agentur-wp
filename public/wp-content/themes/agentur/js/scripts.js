

// webpack
// if (module.hot) {
//     module.hot.accept()
// }

// //navbar adding active class when clicked
// const burger = document.querySelector('.burger');
// const links = document.querySelector('.navbar__links');
//
// burger.addEventListener('click', () => {
//     links.classList.toggle('active')
//
// })


// warten bis Content fertig geladen ist für Animation
document.body.className += "js-loading";
window.addEventListener("load", showPage, false);
function showPage() {
    document.body.className = document.body.className.replace("js-loading", "")
}

// Scroll Animation

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

