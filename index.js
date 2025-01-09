document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        if (selectedLanguage === 'all' || card.classList.contains(selectedLanguage)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('languageSelect').value = 'all';
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.style.display = 'block');
});

// yaha par uptate karna hai isko data base se connect karna hai 
function submitFeedback() {
    alert('Your feedback has been submitted!');
}