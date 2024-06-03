document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const datasetSelect = document.getElementById('datasetSelect').value;
    const formData = new FormData();
    formData.append('dataset_name', datasetSelect);
    try {
        const response = await fetch('http://127.0.0.1:8080/predict', {
            method: 'POST',
            body: formData,
            // mode: 'no-cors'  // Set the mode to 'no-cors' if needed
        });
        console.log(response)
        if (response.status === 200) {
            const responseData = await response.json();  // Parse the response body as JSON
            
            console.log('Response:', responseData);  // Log the response data to the console

            const datasetName = responseData.dataset_name;
            console.log('Returned dataset name:', datasetName);
            
            // Forward to another page based on the selected dataset
            if (datasetSelect === 'dataset1') {
                window.location.href = 'index.html';  // Forward to page1.html
            } else if (datasetSelect === 'dataset2') {
                window.location.href = 'index2.html';  // Forward to page2.html
            } else {
                alert('Unknown dataset selected');
            }
        } else {
            alert('Failed to submit data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});