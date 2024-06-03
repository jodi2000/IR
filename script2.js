document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    fetchResultsAndSuggestions(query);
});

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;
    fetchResultsAndSuggestions(query);
});

// Mock API function
function fetchResultsAndSuggestions(query) {
    // Simulating an API call
    setTimeout(() => {
        const data = mockData;

        displayResults(data.results);
        displaySuggestions(data.suggestions);
    }, 500); // Simulating network latency
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        const resultTitle = document.createElement('h3');
        resultTitle.innerText = result;
        resultItem.appendChild(resultTitle);

        resultsContainer.appendChild(resultItem);
    });
}

function displaySuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        
        suggestionItem.innerText = suggestion;

        suggestionsContainer.appendChild(suggestionItem);
    });
}
// Mock data
const mockData = {
    results: [
        "Result 1: Example search result",
        "Result 2: Another search result",
        "Result 3: Yet another search result",
        "Result 4: More search results",
        "Result 5: Even more search results"
    ],
    suggestions: [
        "Suggestion 1",
        "Suggestion 2",
        "Suggestion 3",
        "Suggestion 4",
        "Suggestion 5",
        "Suggestion 5"

    ]
};

