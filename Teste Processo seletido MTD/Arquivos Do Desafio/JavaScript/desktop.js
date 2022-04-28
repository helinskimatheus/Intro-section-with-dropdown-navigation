function showMenuDropdownFeatures(){
    let showDropdown = document.querySelector('.features-menu');
    if(showDropdown.classList.contains('active-features')){
        document.querySelector('.icon-features').src="./Assets/Icons/icon-arrow-down.svg";
        showDropdown.classList.remove('active-features');
    }
    else{
        document.querySelector('.icon-features').src="./Assets/Icons/icon-arrow-up.svg";
        showDropdown.classList.add('active-features');
    }
}

function showMenuDropdownCompany(){
    let showDropdown = document.querySelector('.company-menu');
    if(showDropdown.classList.contains('active-company')){
        document.querySelector('.icon-company').src = "./Assets/Icons/icon-arrow-down.svg";
        showDropdown.classList.remove('active-company');
    }
    else{
        document.querySelector('.icon-company').src = "./Assets/Icons/icon-arrow-up.svg";
        showDropdown.classList.add('active-company');
    }
}