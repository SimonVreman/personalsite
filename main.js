window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    var sectionWelcome = document.getElementById('section-welcome').scrollHeight;
    var sectionIntro = document.getElementById('section-intro').scrollHeight;
    var sectionProjects = document.getElementById('section-projects').scrollHeight;
    var navbar = document.getElementById('navbar-mobile').scrollHeight + document.getElementById('navbar').scrollHeight - document.getElementById('nav-content').scrollHeight;
    if (scroll > sectionWelcome - navbar && scroll < sectionWelcome + sectionIntro - navbar) {
        document.getElementById('navbar').className = 'green';
        document.getElementById('navbar-mobile').className = 'green';
    } else if (scroll > sectionIntro + sectionWelcome - navbar && scroll < sectionWelcome + sectionIntro + sectionProjects - navbar) {
        document.getElementById('navbar').className = 'red';
        document.getElementById('navbar-mobile').className = 'red';
    } else if (scroll > sectionWelcome + sectionIntro + sectionProjects - navbar) {
        document.getElementById('navbar').className = 'orange';
        document.getElementById('navbar-mobile').className = 'orange';
    } else {
        document.getElementById('navbar').className = 'blue';
        document.getElementById('navbar-mobile').className = 'blue';
    }
 });

 var navopen = false;

function clickedNav() {
    if (!navopen) {
        document.getElementById('nav-content').className = 'fadein'
    } else {
        document.getElementById('nav-content').className = 'fadeout'
    }
    navopen = !navopen
}