from flask import Flask, request, jsonify
from scrape import scrape_website

app = Flask(__name__)

@app.route('/scrape', methods=['POST'])
def scrape_endpoint():
    try:
        # Get prompt text from request body
        prompt_text = request.json.get('prompt')

        # Scrape the website using the prompt text
        response_text = scrape_website(prompt_text)

        # Return the response as JSON
        return jsonify({'response': response_text})

    except Exception as e:
        print('error')
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=3000)  # Change the port to 3000

