import json


class CarDataService:
    def __init__(self, file_paths):
        self.file_paths = file_paths
        self.car_info = {}
        self.load_car_data()

    # open json file
    def open_json_file(self, file_path):
        with open(file_path) as file:
            return json.load(file)

    # load car data from json files
    def load_car_data(self):
        for key, value in self.file_paths.items():
            self.car_info[key] = self.open_json_file(value)

    # get manufacturer logo
    def get_manufacturer_logo(self, manufacturer_name):
        manufacturers = self.open_json_file(
            'server/app/json_data/car_manufacturers_logos.json')

        for manufacturer in manufacturers:
            if manufacturer.get("name") == manufacturer_name:
                return manufacturer["image"]["original"]
        return None

    # get manufacturer names and logos
    def get_manufacturers(self):
        return_data = []
        manufactures = self.car_info.get('manufacturers', [])

        for manufacturer in manufactures:
            return_data.append({
                'name': manufacturer,
                'logo': self.get_manufacturer_logo(manufacturer)
            })

        return return_data

    # get models
    def get_models(self):
        return self.car_info.get('models', [])

    # get colors
    def get_colors(self):
        return self.car_info.get('color', [])

    # get other properties
    def get_other_properties(self):
        return self.car_info.get('car_other_properties', [])


if __name__ == "__main__":
    file_paths = {
        'manufacturers': 'server/app/json_data/car_manufacturers.json',
        'models': 'server/app/json_data/car_models.json',
        'color': 'server/app/json_data/car_colors.json',
        'car_other_properties': 'server/app/json_data/car_other_properties.json'
    }
    x = CarDataService(file_paths)

    print(x.get_manufacturers())
