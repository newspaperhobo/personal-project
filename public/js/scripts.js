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

        let body = document.querySelector("body"); 
        let icons = document.querySelectorAll("i");
        let links = document.querySelectorAll("a");
        let notebook = document.querySelector(".notebook");
        let nav = document.querySelector(".nav");
        let filter = document.querySelector(".library-sort");
        let theme = document.querySelector(".theme")
        let themes = document.querySelectorAll(".theme")
        const theme2 = function() {
            if (body.style.backgroundColor = "var(--secondary-background-color)") {
            body.style.backgroundColor = "var(--secondary-background-color)"
            for (let i=0; i < icons.length; i++) {
            icons[i].style.color = "black";
            }
            notebook.style.backgroundImage = "url('/imgs/backgrounds/amanita3.png')";
            nav.style.backgroundColor = "red";
            filter.style.backgroundColor = "red";
            for (let i=0; i < themes.length; i++) {
                themes[i].style.backgroundColor = "var(--secondary-background-color)"
                }
            } else theme1()
        }

        
        theme.addEventListener("click", theme2);
        
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
        

let dateInput = document.getElementById("date");
let currentDate = new Date().toLocaleDateString("en-US").split("/")
let formattedDate = `${currentDate[2]}-${currentDate[0]}-${currentDate[1]}`
dateInput.setAttribute = ("value", formattedDate);