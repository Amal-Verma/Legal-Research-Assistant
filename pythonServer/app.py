from flask import Flask, request, jsonify
from bot import ai_chat_bot

app = Flask(__name__)

@app.route('/bot', methods=['POST'])
def scrape_endpoint():
    try:
        # Get prompt text from request body
        prompt_text = request.json.get('prompt')

        # Scrape the website using the prompt text
        response_text = ai_chat_bot(prompt_text)

        # Return the response as JSON
        return jsonify({'response': response_text})

    except Exception as e:
        print('error')
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=3001)  # Change the port to 3000

