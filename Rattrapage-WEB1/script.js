// document.getElementById('form')

function ajouter() {
    const nomInput = document.getElementById('nom');
    const montantInput = document.getElementById('montant');
    const categorieOption = document.getElementById('Catégorie')
    const tableauCorps = document.getElementById('tableau').getElementsByTagName('tbody')[0];

    const nom = nomInput.value;
    const montant = montantInput.value;
    const categorie = categorieOption.value;

    if (nom && montant) {
        const nouvelleLigne = tableauCorps.insertRow();
        const celluleNom = nouvelleLigne.insertCell(0);
        const celluleMontant = nouvelleLigne.insertCell(1);
        const celluleCategorie = nouvelleLigne.insertCell(1);

        celluleNom.textContent = nom;
        celluleMontant.textContent = montant;
        celluleCategorie.textContent = categorie;

        nomInput.value = '';
        montantInput.value = '';
    } else {
        alert("")
    }
}
