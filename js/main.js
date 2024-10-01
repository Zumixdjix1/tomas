/*======= ACTIVE LINK BASED ON PAGE ======== */

function setActiveLink() {
    // Get the current page's pathname
    const currentPath = window.location.pathname;

    // Select all the navigation links
    const navLinks = document.querySelectorAll('.nav__menu a');

    // Loop through each link and check if its href matches the current page's path
    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkPath = new URL(link.href).pathname;

        // If the link's path matches the current path, add 'active-link' class
        if (linkPath === currentPath) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

// Call the function when the page loads
window.addEventListener('load', setActiveLink);

/*========= CHANGE BACKGROUND HEADER =========== */

function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*======= SEARCH BAR ======== */
 
function initSearchBar() {
    let searchBtn = document.querySelector('.searchBtn');
    let closeBtn = document.querySelector('.closeBtn');
    let searchBox = document.querySelector('.searchBox');
   

    // Começar com a barra de pesquisa escondida
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');

    // Abrir a barra de pesquisa
    searchBtn.onclick = function() {
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
    }

    // Fechar a barra de pesquisa
    closeBtn.onclick = function() {
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
    }
}

// Chamar as funções quando a página carregar
window.addEventListener('load', function() {
    setActiveLink();
    scrollHeader();
    initSearchBar();
});

window.addEventListener('scroll', scrollHeader);


/*======= SCROLL SECTION ACTIVE LINK ======== 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========= CHANGE BACKGROUND HEADER =========== 

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




*/
