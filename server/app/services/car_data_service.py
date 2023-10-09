import json


class CarDataService:
    def __init__(self, file_paths):
        self.file_paths = file_paths
        self.car_info = {}
        self.load_car_data()

    def open_json_file(self, file_path):
        with open(file_path) as file:
            return json.load(file)

    def load_car_data(self):
        for key, value in self.file_paths.items():
            self.car_info[key] = self.open_json_file(value)

    def get_manufacturers(self):
        return self.car_info.get('manufacturers', [])

    def get_models(self):
        return self.car_info.get('models', [])

    def get_colors(self):
        return self.car_info.get('color', [])

    def get_other_properties(self):
        return self.car_info.get('car_other_properties', [])
