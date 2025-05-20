from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing (for React frontend)

@app.route('/rainfall', methods=['POST'])
def predict_rainfall():
    data = request.get_json()

    # Input values from React form
    preci = float(data.get('Preci', 0))
    max_temp = float(data.get('max', 0))
    min_temp = float(data.get('min', 0))
    wind = float(data.get('wind', 0))

    # TODO: Replace the following with actual ML model predictions
    accuracy_1 = "95.2"
    accuracy_2 = "97.6"
    final_prediction = "Rain Expected"

    # Example output conditions
    v_h_r_1 = "Very High Rainfall" if preci > 80 else ""
    h_r_1 = "High Rainfall" if preci > 60 else ""
    s_s_1 = "Some Shower" if preci > 40 else ""
    m_s_1 = "Moderate Shower" if preci > 20 else ""

    # Return response to frontend
    return jsonify({
        "accuracy_1": accuracy_1,
        "accuracy_2": accuracy_2,
        "final": final_prediction,
        "v_h_r_1": v_h_r_1,
        "h_r_1": h_r_1,
        "s_s_1": s_s_1,
        "m_s_1": m_s_1
    })

if __name__ == '__main__':
    app.run(debug=True)
