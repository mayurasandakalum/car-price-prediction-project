from flask import jsonify
from app import app
from app.services.response_service import ResponseService
from app.services.car_data_service import CarDataService

# file paths for json data
file_paths = {
    'manufacturers': 'server/app/json_data/car_manufacturers.json',
    'models': 'server/app/json_data/car_models.json',
    'color': 'server/app/json_data/car_colors.json',
    'car_other_properties': 'server/app/json_data/car_other_properties.json'
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
        return jsonify(success_response)
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        return jsonify(error_response), 400

# route for models


@app.route('/api/models', methods=['GET'])
def get_models():
    try:
        result_data = car_data_service.get_models()

        success_response = response_service.create_success_response(
            data=result_data
        )
        return jsonify(success_response)
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        return jsonify(error_response), 400

# route for colors


@app.route('/api/colors', methods=['GET'])
def get_colors():
    try:
        result_data = car_data_service.get_colors()

        success_response = response_service.create_success_response(
            data=result_data
        )
        return jsonify(success_response)
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        return jsonify(error_response), 400


@app.route('/api/car_other_props', methods=['GET'])
def get_other_props():
    try:
        result_data = car_data_service.get_other_properties()

        success_response = response_service.create_success_response(
            data=result_data
        )
        return jsonify(success_response)
    except Exception as e:
        error_response = response_service.create_error_response(
            message="Operation failed", error_code=400, details=str(e))
        return jsonify(error_response), 400
