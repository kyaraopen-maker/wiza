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

function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

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

function initiatePay(op) {
    const code = op === 'MTN' ? '*104#' : '*128#';
    alert(`WIZA SECURE\nAction: Composez ${code} pour vos 4 000 FCFA.`);
}

function sendLoan() {
    alert("Demande envoyée ! Enki analyse votre dossier.");
}

window.onload = loadMembres;