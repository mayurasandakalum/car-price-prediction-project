
class ResponseService:
    @staticmethod
    def create_success_response(data=None, message="Data retrieved successfully"):
        response = {
            "status": "success",
            "message": message,
            "data": data
        }
        return response

    @staticmethod
    def create_error_response(message="Something went wrong", error_code=500):
        response = {
            "status": "error",
            "message": message,
            "error_code": error_code,
        }
        return response
