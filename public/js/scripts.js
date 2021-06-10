const body = document.body;
const theme = localStorage.getItem('theme');
console.log(theme)
if (theme === "dark" || theme ===  "nature" || theme === "mushroom") {
    body.classList.remove("primary")
    body.classList.add(theme)  
}
// mobile nav
let navIcon = document.querySelector("i");
let navList = document.querySelector(".navList");
       
const showHideNav = function() {
    navList.classList.toggle("navList")
}
        
navIcon.addEventListener("click", showHideNav);

// homepage dropdown
let hasDropdown = document.querySelector(".has-dropdown");
let dropdown = document.querySelector(".dropdown");

hasDropdown.addEventListener("click", () => {
    dropdown.classList.toggle("show");
})

// theme changing
const primaryButton = document.getElementById('primary');
const darkButton = document.getElementById('dark');
const natureButton = document.getElementById('nature');
const mushroomButton = document.getElementById('mushroom');

primaryButton.addEventListener("click", () => {
    if (body.className === 'dark' || body.className === 'nature' || body.className === 'mushroom') {
        body.classList.replace("dark", "primary")
        body.classList.replace("mushroom", "primary")
        body.classList.replace("nature", "primary")
        localStorage.setItem('theme', 'primary')
    }
})
darkButton.addEventListener("click", () => {
    if (body.classList == 'primary' || body.classList =='nature' || body.classList == 'mushroom') {
        body.classList.replace("primary", "dark")
        body.classList.replace("mushroom", "dark")
        body.classList.replace("nature", "dark")
        localStorage.setItem('theme', 'dark')
    } 
})
    
natureButton.addEventListener("click", () => {
    if (body.classList == 'dark' || body.classList =='primary' || body.classList == 'mushroom') {
        body.classList.replace("dark", "nature")
        body.classList.replace("primary", "nature")
        body.classList.replace("mushroom", "nature")
        body.classList.add('nature')
        localStorage.setItem('theme', 'nature')
    }
})
mushroomButton.addEventListener("click", () => {
    if (body.classList == 'dark' || body.classList =='nature' || body.classList == 'primary') {
        body.classList.replace("dark", "mushroom")
        body.classList.replace("primary", "mushroom")
        body.classList.replace("nature", "mushroom")
        localStorage.setItem('theme', 'mushroom')
    } 
})