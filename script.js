// =========================
// REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},
{
threshold:0.15
}
);

document
.querySelectorAll(
'.story,.content-card,.brand,.stat,.quote,.contact'
)
.forEach(el=>{

el.classList.add('reveal');

observer.observe(el);

});

// =========================
// NAVBAR EFFECT
// =========================

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

if(window.scrollY > 50){

navbar.style.background =
'rgba(255,255,255,.96)';

navbar.style.boxShadow =
'0 20px 60px rgba(0,0,0,.08)';

}else{

navbar.style.background =
'rgba(255,255,255,.9)';

navbar.style.boxShadow =
'0 10px 40px rgba(0,0,0,.05)';
}

});

// =========================
// HERO IMAGE FLOAT
// =========================

const heroImage =
document.querySelector('.hero-right img');

window.addEventListener('mousemove',(e)=>{

const x =
(e.clientX/window.innerWidth - .5)*12;

const y =
(e.clientY/window.innerHeight - .5)*12;

heroImage.style.transform =
`translate(${x}px,${y}px)`;
});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});

// =========================
// ACTIVE NAV LINKS
// =========================

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('.nav-links a');

window.addEventListener('scroll',()=>{

let current='';

sections.forEach(section=>{

const top =
section.offsetTop - 150;

if(window.scrollY >= top){

current =
section.getAttribute('id');

}

});

navLinks.forEach(link=>{

link.classList.remove('active');

if(
link.getAttribute('href')
===
'#'+current
){

link.classList.add('active');
}

});

});

// ACTIVE COLOR

const style =
document.createElement('style');

style.innerHTML = `
.active{
color:#7c3aed !important;
}
`;

document.head.appendChild(style);