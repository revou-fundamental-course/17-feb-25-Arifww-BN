// setting validation form 
function validateForm() {
    // get input value
    let nameInput = document.getElementById('name_input');
    let emailInput = document.getElementById('email_input');
    let optionInput = document.getElementById('option_input');
    // Validation setting
    if (nameInput.value == '' && emailInput.value == '' && optionInput.value == '') {
        alert('Please fill in your name, email, and options');
    }else if (nameInput.value == '' && emailInput.value == '') {
        alert('Please fill in your name and email');
    }else if (emailInput.value == '' && optionInput.value == '') {
        alert('Please fill in your email and options');
    }else if (nameInput.value == '' && optionInput.value == '') {
        alert('Please fill in your name and options');
    }else if (nameInput.value == '') {
        alert('Please fill in your name');
    }else if(emailInput.value == '') {
        alert('Please fill in your email');
    }else if(optionInput.value == '') {
        alert('Please fill in your options');
    }else{
        alert('Form submitted successfully!');
    }
}
// For Index Identifier
let indexBanner = 0;
showBanner();
// next banner funtion
function nextBanner() {
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}
function showBanner() {
    let banner = document.getElementsByClassName('main-banner');
    // Reset Condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }
    // Loop to hide all image
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }
    // Show Banner
    banner[indexBanner].style.display = 'block';
}
// Auto Play
setInterval(nextBanner, 3000);