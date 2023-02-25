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


@app.route("/", methods=["GET"])
@cross_origin()
def get_example():
    response = jsonify(message="Simple server is running")
    return response

@app.route("/forecast/ph", methods=["POST"])
@cross_origin()
def index():
    data = request.get_json(force=True)
    prediction = model.predict(np.array(data).reshape((1, 4, 1)))
    predicted_value = expm1(prediction.flatten()[0])
    return jsonify({"value": str(predicted_value)})

@app.route('/predict/forecast/temperature',methods=['POST'])
@cross_origin()
def temperature_forecast_api():
    data = request.get_json(force=True)
    Temp_lr_tsf_pred = Temp_lr_tsf.predict([data])
    Temp_lr_tsf_pred = Temp_lr_tsf_pred.tolist()
    return jsonify(prediction=Temp_lr_tsf_pred[0])


if __name__ == "__main__":
    app.run(debug=True)