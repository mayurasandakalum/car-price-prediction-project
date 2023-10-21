from flask import jsonify, request
from application import app
from app.services.response_service import ResponseService
from app.services.car_data_service import CarDataService

# file paths for json data
file_paths = {
    'manufacturers': 'app/json_data/car_manufacturers.json',
    'models': 'app/json_data/car_models.json',
    'color': 'app/json_data/car_colors_apis.json',
    'car_other_properties': 'app/json_data/car_other_properties.json'
}

# create instances of services
car_data_service = CarDataService(file_paths)
response_service = ResponseService()

# route for manufacturers


@app.route('/api/manufacturers', methods=['GET'])
def get_manufacturers():
    try:
        result_data = car_data_service.get_manufacturers()

        success_response = response_service.create_success_response(
            data=result_data
        )
        response = jsonify(success_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        response = jsonify(error_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response, 400

# route for models


@app.route('/api/models/<param>', methods=['GET'])
def get_models(param):
    try:
        result_data = car_data_service.get_models()

        success_response = response_service.create_success_response(
            data=result_data.get(str(param).upper())
        )
        response = jsonify(success_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        response = jsonify(error_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response, 400

# route for colors


@app.route('/api/colors/<param>', methods=['GET'])
def get_colors(param):
    try:
        result_data = car_data_service.get_colors(param)

        success_response = response_service.create_success_response(
            data=result_data
        )
        response = jsonify(success_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        response = jsonify(error_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response, 400


@app.route('/api/car-other-props', methods=['GET'])
def get_other_props():
    try:
        result_data = car_data_service.get_other_properties()

        success_response = response_service.create_success_response(
            data=result_data
        )
        response = jsonify(success_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        response = jsonify(error_response)
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response, 400


@app.route('/api/predict-car-price', methods=['POST'])
def predict_car_price():
    if request.is_json:
        data = request.get_json()
        # print("Received JSON data:")
    else:
        data = request.form.to_dict()
        # print("Received form data:")

    # print("data:", data)

    prediction = car_data_service.predict_car_price(data)

    success_response = response_service.create_success_response(
        data={"predictedPrice": prediction}
    )
    response = jsonify(success_response)
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
