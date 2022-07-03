const DISTANCE = 80;
var style = getComputedStyle(document.body);
var NAV_BG_L = style.getPropertyValue('--nav-bg-l');
var NAV_BG_D = style.getPropertyValue('--nav-bg-d');
var NAV_FG_L = style.getPropertyValue('--nav-fg-l');
var NAV_FG_D = style.getPropertyValue('--nav-fg-d');
var NAV_C_L = style.getPropertyValue('--nav-c-l');
var NAV_C_D = style.getPropertyValue('--nav-c-d');
const NAV_H_L = style.getPropertyValue('--nav-h-l');
const NAV_H_S = style.getPropertyValue('--nav-h-s');

var nav = document.getElementById('nav');
var body = document.body;
window.onscroll = () => {
  update();
};

function update() {
  if (
    document.body.scrollTop > DISTANCE ||
    document.documentElement.scrollTop < DISTANCE
  ) {
    body.style.setProperty('--nav-bg-c', NAV_BG_L);
    body.style.setProperty('--nav-fg-c', NAV_FG_L);
    body.style.setProperty('--nav-c-c', NAV_C_L);
    body.style.setProperty('--nav-h-c', NAV_H_L);
  } else {
    body.style.setProperty('--nav-bg-c', NAV_BG_D);
    body.style.setProperty('--nav-fg-c', NAV_FG_D);
    body.style.setProperty('--nav-c-c', NAV_C_D);
    body.style.setProperty('--nav-h-c', NAV_H_S);
  }
}

function toggleNav() {
  let e = document.getElementById('nav-overlay');
  let s = document.getElementById('nav-show');
  let b = document.body;
  if (e.style.height === '100%') {
    e.style.height = '0%';
    s.className = '';
    b.style.overflow = 'auto';
    update();
  } else {
    e.style.height = '100%';
    s.className = 'open';
    b.style.overflow = 'hidden';
    body.style.setProperty('--nav-bg-c', NAV_BG_L);
    body.style.setProperty('--nav-fg-c', NAV_FG_L);
    body.style.setProperty('--nav-c-c', NAV_C_L);
    body.style.setProperty('--nav-h-c', NAV_H_L);
  }
}

window.onresize = () => {
  let e = document.getElementById('nav-overlay');
  if (e.style.height === '100%') {
    toggleNav();
  }
};

var pageElements = document.getElementsByClassName('nav-links');

for (let i = 0; i < pageElements.length; i++) {
  let pages = pageElements[i].getElementsByTagName('a');
  for (let j = 0; j < pages.length; j++) {
    if (window.location.pathname.startsWith(pages[j].getAttribute('href'))) {
      pages[j].classList.add('active');
    }
  }
}

var darkModeButton = document.getElementById('dark-mode-button');
var darkModeIcon = document.getElementById('dark-mode-icon');

function setDarkMode(darkMode) {
  if (darkMode) {
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'true');
    darkModeIcon.className = 'fas fa-sun';
  } else {
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'false');
    darkModeIcon.className = 'fas fa-moon';
  }
  NAV_BG_L = style.getPropertyValue('--nav-bg-l');
  NAV_BG_D = style.getPropertyValue('--nav-bg-d');
  NAV_FG_L = style.getPropertyValue('--nav-fg-l');
  NAV_FG_D = style.getPropertyValue('--nav-fg-d');
  NAV_C_L = style.getPropertyValue('--nav-c-l');
  NAV_C_D = style.getPropertyValue('--nav-c-d');
  update();
}

if (localStorage.getItem('dark-mode') === 'true') {
  setDarkMode(true);
}

darkModeButton.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('dark'));
});
