// setting validation form 
function validateForm() {
    // get input value
    let nameInput = document.getElementById('name_input');
    let emailInput = document.getElementById('email_input');
    let optionInput = document.getElementById('option_input');
    // Validation setting
    if (nameInput.value == '' && emailInput.value == '' && optionInput.value == '') {
        alert('Nama, email, option tidak boleh kosong');
    }else if (nameInput.value == '' && emailInput.value == '') {
        alert('Nama dan email tidak boleh kosong');
    }else if (emailInput.value == '' && optionInput.value == '') {
        alert('email dan option tidak boleh kosong');
    }else if (nameInput.value == '' && optionInput.value == '') {
        alert('Nama dan option tidak boleh kosong');
    }else if (nameInput.value == '') {
        alert('Nama tidak boleh kosong');
    }else if(emailInput.value == '') {
        alert('Email tidak boleh kosong');
    }else if(optionInput.value == '') {
        alert('dipilih salah satu');
    }else{
        alert('Form berhasil dikirim!');
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