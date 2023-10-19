import webcolors
import json


def color_name_to_rgb(color_name):
    try:
        rgb = webcolors.name_to_rgb(color_name)
        return rgb
    except ValueError:
        raise ValueError(f"Color '{color_name}' not found")


with open("./server/app/json_data/car_colors.json") as f:
    all_colours = json.load(f)

edited_colours = {}

for car, colours in all_colours.items():
    print(f"{car}-------------------------")
    errors = 0

    edited_colours[car] = {}
    for colour in colours.get("colors"):
        try:
            if (type(colour) == dict):
                edited_colours[car].update(colour)
            else:
                print(f"{colour}")
                rgb = color_name_to_rgb(colour)
                edited_colours[car].update(
                    {colour: {"r": rgb.red, "g": rgb.green, "b": rgb.blue}})
        except:
            print(f"👉👉👉 Color '{colour}' not found-------")
    print("\n")

# Save the edited_colours dictionary as a JSON file
with open('./server/app/json_data/car_colors_rgb.json', 'w') as output_file:
    json.dump(edited_colours, output_file, indent=2)

print(edited_colours)
