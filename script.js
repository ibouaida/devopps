document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    
    const currentYear = new Date().getFullYear();
    const deathYear = currentYear + (80 - age); // On suppose une espérance de vie de 80 ans
    const funnyPredictions = [
        "dans une bataille épique avec des chatons.",
        "en ayant mangé trop de gâteau.",
        "en découvrant une nouvelle dimension.",
        "en dansant sur un volcan actif.",
        "en écrivant un roman à succès."
    ];
    
    const randomPrediction = funnyPredictions[Math.floor(Math.random() * funnyPredictions.length)];
    
    const resultMessage = `${firstName} ${lastName}, vous serez présumé mort en ${deathYear} ${randomPrediction}.`;
    
    document.getElementById('result').innerText = resultMessage;
});
