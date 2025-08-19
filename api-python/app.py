from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint 1: Verificación de estado
@app.route('/check', methods=['GET'])
def check():
    return 'OK', 200

# Endpoint 2: Retornar objeto JSON
@app.route('/', methods=['GET'])
def get_data():
    response = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Estudiante - 201904013"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000)
