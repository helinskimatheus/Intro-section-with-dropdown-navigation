
function showMenuMobile(){
    let navBarMobile = document.querySelector('.nav-bar-mobile');
    if(navBarMobile.classList.contains('open')){
        navBarMobile.classList.remove('open');
        document.querySelector('.icon').src = "./Assets/Icons/icon-menu.svg";
    }
    else{
        navBarMobile.classList.add('open');
        document.querySelector('.icon').src = "./Assets/Icons/icon-close-menu.svg";
    }
}

function showMenuFeaturesMobile(){
    let showDropdown = document.querySelector('.features-menu-mobile');
    if(showDropdown.classList.contains('active-features-mobile')){
        document.querySelector('.icon-features-mobile').src = "./Assets/Icons/icon-arrow-down.svg";
        showDropdown.classList.remove('active-features-mobile');
    }
    else{
        document.querySelector('.icon-features-mobile').src = "./Assets/Icons/icon-arrow-up.svg";
        showDropdown.classList.add('active-features-mobile');
    }
}

function showMenuCompanyMobile(){
    let showDropdown = document.querySelector('.company-menu-mobile');
    if(showDropdown.classList.contains('active-company-mobile')){
        document.querySelector('.icon-company-mobile').src = "./Assets/Icons/icon-arrow-down.svg";
        showDropdown.classList.remove('active-company-mobile');
    }
    else{
        document.querySelector('.icon-company-mobile').src = "./Assets/Icons/icon-arrow-up.svg";
        showDropdown.classList.add('active-company-mobile');
    }
}