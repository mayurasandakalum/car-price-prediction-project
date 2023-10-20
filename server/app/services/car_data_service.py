import json
import datetime


class CarDataService:
    def __init__(self, file_paths):
        self.file_paths = file_paths
        self.car_info = {}
        self.label_encodings = {}
        self.load_car_data()

    # open json file
    def open_json_file(self, file_path):
        with open(file_path) as file:
            return json.load(file)

    # load car data from json files
    def load_car_data(self):
        for key, value in self.file_paths.items():
            if key == 'color':
                self.car_info[key] = self.open_json_file(value)
            else:
                self.car_info[key] = self.open_json_file(value)

        self.label_encodings = self.open_json_file(
            'server/app/json_data/label_encodings_2.json')

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
    def get_colors(self, param):
        return self.car_info.get('color', []).get(param.upper())

    # get other properties
    def get_other_properties(self):
        return self.car_info.get('car_other_properties', [])

    def get_encodings(self, data: dict):
        # check manufacturer
        data['manufacturer'] = self.label_encodings.get('manufacturer').get(
            data['manufacturer'].lower())

        # check model
        data['model'] = self.label_encodings.get('model').get(
            data['model'].lower())

        # check production year
        current_year = datetime.datetime.now().year
        data['lifetime'] = current_year - data['productionYear']
        data.pop('productionYear')

        # check color
        data['color'] = self.label_encodings.get('color').get(
            data['color'].lower())

        # check category
        data['category'] = self.label_encodings.get('category').get(
            data['category'].lower())

        # # check leather interior
        # if data['leatherInterior']:
        #     data['leatherInterior'] = 1
        # else:
        #     data['leatherInterior'] = 0

        # check fuel type
        data['fuelType'] = self.label_encodings.get('fuel type').get(
            data['fuelType'].lower())

        # check gear box type
        data['gearBoxType'] = self.label_encodings.get('gear box type').get(
            data['gearBoxType'].lower())

        # check drive wheel
        data['driveWheel'] = self.label_encodings.get('drive wheel').get(
            data['driveWheel'].lower())

        # check wheel
        data['wheel'] = self.label_encodings.get('wheel').get(
            data['wheel'].lower())

        print(list(data.values()))


if __name__ == "__main__":
    file_paths = {
        'manufacturers': 'server/app/json_data/car_manufacturers.json',
        'models': 'server/app/json_data/car_models.json',
        'color': 'server/app/json_data/car_colors_apis.json',
        'car_other_properties': 'server/app/json_data/car_other_properties.json'
    }
    x = CarDataService(file_paths)

    # x.get_encodings({
    #     "manufacturer": "porsche",
    #     "model": "airtrek",
    #     "productionYear": 1999,
    #     "color": "Carnelian red",
    #     "category": "Goods wagon",
    #     "leatherInterior": 1,
    #     "fuelType": "LPG",
    #     "gearBoxType": "Variator",
    #     "driveWheel": "4x4",
    #     "wheel": "Left wheel",
    #     "volume": 12.3,
    #     "levy": 6404,
    #     "cylinders"
    #     doors
    #     airbags
    # })
