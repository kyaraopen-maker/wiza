const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rafraîchissement immédiat

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            if (response.status == 200) {
                // 1. On cache le formulaire
                form.style.display = "none";
                // 2. On affiche ton message personnalisé
                successMessage.style.display = "block";
                // 3. On vide les champs pour la prochaine fois
                form.reset();
            }
        })
        .catch(error => {
            alert("Erreur de connexion.");
        });
});