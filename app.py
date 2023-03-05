from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from tensorflow import keras
import pandas as pd
import numpy as np
import pickle
import joblib
from math import expm1

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


model = keras.models.load_model("/home/neilalden/mysite/pH_prediction_model.h5", "rb")
scaler = joblib.load("/home/neilalden/mysite/data_scaler.joblib", "rb")

@app.route("/forecast/ph", methods=["POST"])
@cross_origin()
def index():
    data = request.get_json(force=True)
    prediction = model.predict(np.array(data).reshape((1, 4, 1)))
    predicted_value = expm1(prediction.flatten()[0])
    return jsonify({"value": str(predicted_value)})

if __name__ == "__main__":
    app.run(debug=True)