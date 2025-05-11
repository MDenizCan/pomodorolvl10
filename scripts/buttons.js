const themeSwitch = document.getElementById('theme-switch'); 
const body = document.body;

// Tema durumunu kontrol et
const darkModeSwitch = () => {
    body.classList.toggle('darkmode'); //bu ne ise yariyor ve niye koyduk?

    // Tema durumunu localStorage'a kaydet
    if (body.classList.contains('darkmode')) { //eger darkmode classi varsa
        localStorage.setItem('theme', 'darkmode'); //tema adi altinda local storageye darkmode ekliyoruz
    } else {
        localStorage.removeItem('theme'); // eger yoksa themeyi kaldiriyoruz ama niye kaldiriyoruz?
    }
}

// Sayfa yüklendiğinde tema kontrolü
if (localStorage.getItem('theme') === 'darkmode') { //eger local storageda darkmode varsa
    body.classList.add('darkmode');//bodye darkmode classini ekliyoruz
}

themeSwitch.addEventListener('click', darkModeSwitch); //bastiginda darkmode fonksiyonunu calistir
