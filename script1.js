const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement immédiat pour envoyer les données

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // On change le texte du bouton pour faire patienter l'utilisateur
    const btn = form.querySelector('.btn-submit span');
    const originalText = btn.innerHTML;
    btn.innerHTML = "Envoi...";

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
                // L'ALERTE QUE TU VOULAIS
                alert("Demande reçue ! Merci de patienter 1J pour vous mettre dans un groupe. Une note vous sera envoyée sur votre email.");
                
                // Rafraîchit la page pour vider les champs et tout remettre à zéro
                window.location.reload(); 
            } else {
                alert("Erreur lors de l'envoi. Réessayez.");
                btn.innerHTML = originalText;
            }
        })
        .catch(error => {
            alert("Vérifiez votre connexion internet.");
            btn.innerHTML = originalText;
        });
});