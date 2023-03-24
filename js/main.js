const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
yearElement.innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" +  date.getFullYear() + " ©️";
   
}

new SimpleLightbox({ elements: '.container-galerie a'  });
new SimpleLightbox({ elements: '.orar-imagini a'  });
AOS.init({
    duration: 1000,
    offset: 100,
    once: true
});

emailjs.init("CF9ieUgLhOx9y2nzR");

function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_bfoqkp5", "template_lfwojh7", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}