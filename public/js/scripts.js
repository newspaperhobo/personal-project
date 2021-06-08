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