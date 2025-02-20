document.querySelector('.button').addEventListener('click', function() {
    const text = document.querySelector('.textarea').value;
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const alphabetCount = text.replace(/[^a-zA-Z]/g, '').length;
    const specialCharCount = text.replace(/[a-zA-Z0-9\s]/g, '').length;

    document.getElementById('word').textContent = `Words: ${wordCount}`;
    document.getElementById('alphabet').textContent = `Alphabets: ${alphabetCount}`;
    document.getElementById('special-char').textContent = `Special Characters: ${specialCharCount}`;
});