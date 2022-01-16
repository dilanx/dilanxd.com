const DISTANCE = 80;

var style = getComputedStyle(document.body);
var nav = document.getElementById('nav');
window.onscroll = () => {update();}

function update() {
    if (document.body.scrollTop > DISTANCE || document.documentElement.scrollTop < DISTANCE) {
        document.body.style.setProperty('--nav-bg-c', style.getPropertyValue('--nav-bg-l'));
        document.body.style.setProperty('--nav-fg-c', style.getPropertyValue('--nav-fg-l'));
        nav.style.padding = '50px 0';
    } else {
        document.body.style.setProperty('--nav-bg-c', style.getPropertyValue('--nav-bg-d'));
        document.body.style.setProperty('--nav-fg-c', style.getPropertyValue('--nav-fg-d'));
        nav.style.padding = '5px 0';
    }
}