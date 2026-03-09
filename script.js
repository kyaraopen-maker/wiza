const listMembres = [
    { id: 1, nom: "HIRAM Architech Web", st: "Payé" },
    { id: 2, nom: "Jean Dupont", st: "En attente" },
    { id: 3, nom: "Marie Kone", st: "En attente" },
    { id: 4, nom: "Luc Mpemba", st: "En attente" },
    { id: 5, nom: "Sarah Lissouba", st: "En attente" },
    { id: 6, nom: "Marc Ngouabi", st: "En attente" },
    { id: 7, nom: "Pierre Tchicaya", st: "En attente" },
    { id: 8, nom: "Alice Youlou", st: "En attente" },
    { id: 9, nom: "Kevin Mboli", st: "En attente" },
    { id: 10, nom: "Inès Bongo", st: "En attente" },
    { id: 11, nom: "Paul Samba", st: "En attente" },
    { id: 12, nom: "Esther Malonga", st: "En attente" },
    { id: 13, nom: "Guy Kolelas", st: "En attente" },
    { id: 14, nom: "Rita Mavoungou", st: "En attente" },
    { id: 15, nom: "Membre Final", st: "En attente" }
];
// 1122456789087645323456787665567898765432 -D- 23455476543234578999899998765432467889 

function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
//12345678909876543212345678901234567655554 -I- 123456789098765432123456789098765431234 

function loadMembres() {
    const box = document.getElementById('members-list');
    box.innerHTML = listMembres.map(m => `
        <div class="member-item">
            <div class="avatar-mini">${m.id}</div>
            <strong>${m.nom}</strong>
            <span class="status-pill ${m.st === 'Payé' ? 'paid' : 'wait'}">${m.st}</span>
        </div>
    `).join('');
}
//1234567890°098765432345677567976567890 -V- 3456789876789098765432123456789098765431234567
 
function initiatePay(operator) {
    let ussdCode = "";

    if (operator === 'MTN') {
        // Encode le # par %23 pour que le téléphone l'affiche bien
        ussdCode = "*105%23"; 
    } else if (operator === 'Airtel') {
        ussdCode = "*128%23";
    }

    if (ussdCode !== "") {
        // Ouvre le composeur d'appel avec le code
        window.location.href = "tel:" + ussdCode;
    }
}
//123456712345687654 -I- 1234560123456798765 -N- 1234567898765432n-E- 123456789009876541234567

function sendLoan() {
    alert("Demande envoyée ! Patienter pour une confirmation sur votre email.");
}

window.onload = loadMembres;


// Fonction pour changer de formulaire
function switchForm(type) {
    const payForm = document.getElementById('payment-form');
    const loanForm = document.getElementById('loan-form');
    const tabs = document.querySelectorAll('.tab-btn');

    if (type === 'payment') {
        payForm.style.display = 'block';
        loanForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        payForm.style.display = 'none';
        loanForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

// Ce script gère TOUS les formulaires avec la classe .transaction-form ou .glass-form
const allForms = document.querySelectorAll('form');

allForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche la redirection vers la page verte

        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = "Envoi en cours...";
        btn.disabled = true;

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
                // L'alerte JS avec ton message exact
                alert("Votre demande a été envoyée avec succès ! Vous allez recevoir une note sur votre email.");
                
                // Rafraîchit la page pour vider les champs (Nom, ID transaction, etc.)
                window.location.reload(); 
            } else {
                alert("Erreur lors de l'envoi. Vérifiez votre connexion.");
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        })
        .catch(error => {
            alert("Une erreur est survenue.");
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
    });
});


function switchWizaForm(type, element) {
    const payForm = document.getElementById('payment-form');
    const loanForm = document.getElementById('loan-form');
    const indicator = document.getElementById('tab-active-bg');
    
    // Animation du fond bleu
    if (type === 'payment') {
        indicator.style.transform = 'translateX(0%)';
        payForm.style.display = 'block';
        loanForm.style.display = 'none';
    } else {
        indicator.style.transform = 'translateX(100%)';
        payForm.style.display = 'none';
        loanForm.style.display = 'block';
    }
}