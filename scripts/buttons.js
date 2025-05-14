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
themeSwitch.addEventListener('click', darkModeSwitch);

//----------------------------------------------------------------------
// Ses açma kapama

const muteSwitch = document.getElementById('mute-switch');

const muteAudio = () => {
    muteSwitch.classList.toggle('isMuted'); //bu ne ise yariyor ve niye koyduk?

    if (muteSwitch.classList.contains('isMuted')) { //eger isMuted classi varsa
        localStorage.setItem('sound', 'isMuted'); //mute adi altinda local storageye isMuted ekliyoruz
        console.log("successfully muted sound");
    } else {
        localStorage.removeItem('sound'); // eger yoksa soundi kaldiriyoruz ama niye kaldiriyoruz?
    }
}

if (localStorage.getItem('sound') === 'isMuted') { //eger local storageda isMuted varsa
    muteSwitch.classList.add('isMuted');//themeSwitch'e isMuted classini ekliyoruz
}

muteSwitch.addEventListener('click', muteAudio);
