from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!sssssss"

@app.route('/predict', methods=['POST'])
def predict():
    dataset_name = request.form.get('dataset_name')

    response = {
        'dataset_name': dataset_name
    }
    
    return jsonify(response)

@app.route('/search',methods=['GET'])
def search():
    search = request.args.get('search')  # Get query parameter from URL
    results = [
        {
            'doc_id': '1',
            'title': 'Title 1',
            'condition': 'Condition 1',
            'summary': 'Summary 1',
            'detailed_description': 'Detailed description 1',
            'eligibility': 'Eligibility 1'
        },
        {
            'doc_id': '2',
            'title': 'Title 2',
            'condition': 'Condition 2',
            'summary': 'Summary 2',
            'detailed_description': 'Detailed description 2',
            'eligibility': 'Eligibility 2'
        }
    ]
    suggestions = [
        {'id': '1', 'text': 'Suggestion 1'},
        {'id': '2', 'text': 'Suggestion 2'}
    ]
    
    response = {
        'results': results,
        'suggestions': suggestions
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=8080)