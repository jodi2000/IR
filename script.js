document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    fetchResultsAndSuggestions(query);
});

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;
    fetchResultsAndSuggestions(query);
});

function fetchResultsAndSuggestions(query) {
    fetch(`http://127.0.0.1:8080/search?search=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayResults(data.results);
        displaySuggestions(data.suggestions);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        const resultTitle = document.createElement('h3');
        resultTitle.innerText = result.title;
        resultItem.appendChild(resultTitle);

        const resultCondition = document.createElement('p');
        resultCondition.innerHTML = `<strong>Condition:</strong> ${result.condition}`;
        resultItem.appendChild(resultCondition);

        const resultSummary = document.createElement('p');
        resultSummary.innerHTML = `<strong>Summary:</strong> ${result.summary}`;
        resultItem.appendChild(resultSummary);

        const resultDescription = document.createElement('p');
        resultDescription.innerHTML = `<strong>Detailed Description:</strong> ${result.detailed_description}`;
        resultItem.appendChild(resultDescription);

        const resultEligibility = document.createElement('p');
        resultEligibility.innerHTML = `<strong>Eligibility:</strong> ${result.eligibility}`;
        resultItem.appendChild(resultEligibility);

        resultsContainer.appendChild(resultItem);
    });
}

function displaySuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        
        suggestionItem.innerText = suggestion.text;

        suggestionsContainer.appendChild(suggestionItem);
    });
}
