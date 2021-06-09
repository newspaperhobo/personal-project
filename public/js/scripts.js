// let showAll = document.querySelector("#showall")
// ;
// let desc = document.querySelectorAll(".hide");

// const showAllDesc = function(e) {
    //     for (let i=0; i< desc.length; i++) {
        //         desc[i].classList.toggle("show");
        //         e.stopPropagation()
        // }}
        
        // showAll.addEventListener("click", showAllDesc);

        
        // mobile nav
        let navIcon = document.querySelector("i");
        let navList = document.querySelector(".navList");
        
        const showHideNav = function() {
            navList.classList.toggle("navList")
        }
        
        navIcon.addEventListener("click", showHideNav);
        
        // library.html accordian
        // let img = document.querySelectorAll(".individual-card");
        // let carrot = document.querySelector(".fa-chevron-down")

        
        // const showHide = function() {
        //     for (let i = 0; i < img.length; i++)
        //     img[i].classList.toggle("show")
        // }
        
        // carrot.addEventListener("click", showHide);
 
        // const theme1 = function() {
        //     body.style.backgroundColor = "var(--primary-background-color)";
        //     for (let i=0; i < icons.length; i++) {
        //     icons[i].style.color = "var(--primary-nav-font-color)";
        //     }
        //     notebook.style.backgroundImage = "none"
        //     nav.style.backgroundColor = "var(--primary-nav-background)";
        //     filter.style.backgroundColor = "var(----primary-nav-background)";
        //     theme.style.backgroundColor = "var(---primary-button-yellow)"
        // }
       
let hasDropdown = document.querySelector(".has-dropdown");
let dropdown = document.querySelector(".dropdown");


hasDropdown.addEventListener("click", () => {
    dropdown.classList.toggle("show");
})

//             const primaryButton = document.getElementById('primary');
//             const darkButton = document.getElementById('dark');
//             const natureButton = document.getElementById('nature');
//             const mushroomButton = document.getElementById('mushroom');
//             const body = document.body;

//             const theme = localStorage.getItem('theme');

//             window.onload = function() {if (theme) {
//                 body.classList.add(theme)
//             }}
            

            
//             primaryButton.addEventListener("click", () => {
//                 if (body.classList === 'dark' || body.classList ==='nature' || body.classList === 'mushroom') {
//                     body.classList.remove("dark", "")
//                     body.classList.add('primary')
//                     localStorage.setItem('theme', 'primary')
//                 }
// })
//             darkButton.addEventListener("click", () => {
//                 if (body.classList == 'primary' || body.classList =='nature' || body.classList == 'mushroom') {
//                     body.classList.remove("primary", "nature", "mushroom")
//                     body.classList.add('dark')
//                     localStorage.setItem('theme', 'dark')
//                 } 
//             })
                
//             natureButton.addEventListener("click", () => {
//                 if (body.classList == 'dark' || body.classList =='primary' || body.classList == 'mushroom') {
//                     body.classList === ""
//                     body.classList.add('nature')
//                     localStorage.setItem('theme', 'nature')
//                 }
// })
//             mushroomButton.addEventListener("click", () => {
//                 if (body.classList == 'dark' || body.classList =='nature' || body.classList == 'primary') {
//                     body.classList === ""
//                     body.classList.add('mushroom')
//                     localStorage.setItem('theme', 'mushroom')
//                 } 
// })

let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('primary');
} else {
  setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
      let theme = this.dataset.theme;
      console.log(theme);
      setTheme(theme);
    });
  }

  function setTheme(theme) {
    if (theme == 'primary') {
      document.getElementById('switcher-id').href = '/styles/styles.css';
    } else if (theme == 'nature') {
      document.getElementById('switcher-id').href = '/styles/nature.css';
    } else if (theme == 'camping') {
      document.getElementById('switcher-id').href = '/styles/camping.css';
    } else if (theme == 'dark') {
      document.getElementById('switcher-id').href = '/styles/dark.css';
    }
    localStorage.setItem('style', theme);
  }

  
