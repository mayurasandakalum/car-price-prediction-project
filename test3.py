import json

api_base = "https://www.thecolorapi.com/id?format=svg&rgb={},{},{}"

with open('./server/app/json_data/car_colors_rgb.json') as f:
    car_RGB_colors = json.load(f)

car_colors_apis = {}

for car, colors in car_RGB_colors.items():
    car_colors_apis[car] = {}
    for color, rgb in colors.items():
        api_url = api_base.format(rgb["r"], rgb["g"], rgb["b"])
        car_colors_apis[car].update({color: api_url})

# Save the car_colors_apis dictionary as a JSON file
with open('./server/app/json_data/car_colors_apis.json', 'w') as output_file:
    json.dump(car_colors_apis, output_file, indent=2)

print(car_colors_apis)


# for r in range(10):  # Loop through values from 0 to 255 for red (r)
#     for g in range(10):  # Loop through values from 0 to 255 for green (g)
#         for b in range(10):  # Loop through values from 0 to 255 for blue (b)
#             api_url = api_base.format(r, g, b)
#             url_list.append(api_url)

# # Now, url_list contains a list of API URLs with different RGB values
# print(url_list)
