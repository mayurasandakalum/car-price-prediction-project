import webcolors


def color_name_to_rgb(color_name):
    try:
        rgb = webcolors.name_to_rgb(color_name)
        return rgb
    except ValueError:
        raise ValueError(f"Color '{color_name}' not found")


# Example usage
color_name = "brown"
rgb = color_name_to_rgb(color_name)
print(f"The RGB value for {color_name} is {rgb}")
