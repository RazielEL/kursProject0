function performSearch() {
	const allWords = document.getElementById('allWords').value;
	const exactPhrase = document.getElementById('exactPhrase').value;
	const anyWords = document.getElementById('anyWords').value;
	const noneWords = document.getElementById('noneWords').value;
	let query = '';
	if (allWords) {
		query += allWords.split(' ').join(' ') + ' ';
	}
	if (exactPhrase) {
		query += `"${exactPhrase}" `;
	}
	if (anyWords) {
		query += anyWords.split(' ').join(' OR ') + ' ';
	}
	if (noneWords) {
		query += noneWords.split(' ').map(word => `-${word}`).join(' ') + ' ';
	}
	    query = query.trim();

    if (query) {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchURL;
    } 
}
		
function performLuckySearch(event) {
    event.preventDefault();
    var query = document.getElementById('searchQuery').value;
    if (query.trim() !== '') {
        window.location.href = 'https://www.google.com/search?btnI=1&q=' + encodeURIComponent(query);
	} else if (query.trim() ==''){
		window.location.href= 'https://doodles.google';
	}
}

function validateForm() {
    var searchQuery = document.getElementById('searchQuery').value;
    if (searchQuery.trim() === '') {
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}