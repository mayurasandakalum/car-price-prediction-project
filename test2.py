import webcolors


def rgb_to_color_name(rgb):
    try:
        color_name = webcolors.rgb_to_name(rgb)
        return color_name
    except ValueError:
        return "Color not found"


# Example usage
rgb = (135, 206, 235)  # RGB value for green
color_name = rgb_to_color_name(rgb)
print(f"The color name for RGB {rgb} is {color_name}")
