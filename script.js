const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-120%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const featureLecturersList = [
  {
    image: 'images/new.png',
    name: 'Patrick Mukunzi',
    title: 'CEO Nobilis',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

  {
    image: 'images/new.png',
    name: 'Patrick Mukunzi',
    title: 'Faculty head EMU',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

  {
    image: 'images/Passport-Picture.JPG',
    name: 'Patrick Mukunzi',
    title: 'Faculty head EMU',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

  {
    image: 'images/new.png',
    name: 'Patrick Mukunzi',
    title: 'Faculty head EMU',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

  {
    image: 'images/new.png',
    name: 'Patrick Mukunzi',
    title: 'Lecturer Boston MIS',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

  {
    image: 'images/new.png',
    name: 'Patrick Mukunzi',
    title: 'Lecturer Texas Tech',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },

];

const lecturersSection = document.getElementById('lecturers');
lecturersSection.innerHTML = featureLecturersList.map((person) => `

<div class="lecturer-box">

<div class="lecturer-photo">
  <img src="${person.image}" alt="Lecturer pic">
</div>

<div class="lecturer-bio">

  <div class="lecturer-name">
    <h3>${person.name}</h3>
  </div>
  <div class="lecturer-job">
    <p>${person.title}</p>
  </div>
  <div class="lecturer-summary">
    <p>${person.bio}</p>
  </div>
</div>

</div>
`).join('');