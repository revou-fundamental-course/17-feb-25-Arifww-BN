
// function validateForm() {
//     let nameInput = document.getElementById('name_input');

//     // Kondisi Validasinya
//     if (nameInput.value == '') {
//         alert('Nama tidak boleh kosong');
//     } else {
//         alert('Welcome ' + nameInput.value);
//     }

//     let emailInput = document.getElementById('email_input');

//     // Kondisi Validasinya
//     if (emailInput.value == '') {
//         alert('email tidak boleh kosong');
//     } else {
//         alert('');
//     }
    

// }


function validateForm() {
    // Ambil nilai input
    let nameInput = document.getElementById('name_input');
    let emailInput = document.getElementById('email_input');
    let optionInput = document.getElementById('option_input');

    // Validasi nama
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

    // // Validasi nama
    // if (nameInput.value == '' && emailInput.value == '') {
    //     alert('Nama dan email tidak boleh kosong');
    // }else if(emailInput.value == '') {
    //     alert('Email tidak boleh kosong');
    // }else if(optionInput.value == '') {
    //     alert('dipilih salah satu');
    // }else{
    //     alert('Form berhasil dikirim!');
    // }

    // // Validasi nama
    // if (nameInput.value == '') {
    //     alert('Nama tidak boleh kosong');
    //     return;
    // }
    
    // // Validasi email
    // if (emailInput.value == '') {
    //     alert = 'Email tidak boleh kosong';
    //     return;
    // }
    
    
    // // Validasi option
    // if (optionInput.value == '') {
    //     alert = 'dipilih salah satu';
    //     return;
    // }

    // // Jika semua validasi berhasil
    // alert('Form berhasil dikirim!');

}

// For Index Identifier
let indexBanner = 0;

showBanner();

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

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

// Auto Play
setInterval(nextBanner, 3000);