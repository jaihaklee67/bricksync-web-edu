import numpy as np
import cv2
from PIL import Image

# Read image
src = cv2.imread(r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\media_1788082574044.png')
# Convert BGR to RGB
rgb = cv2.cvtColor(src, cv2.COLOR_BGR2RGB)
h, w, _ = rgb.shape

# The background is a blue gradient (R in 0..150, G in 90..210, B in 180..245)
# The text is White (R>220, G>220, B>220)
# The LEGO logo has Red (R>180, G<30, B<30), Yellow (R>200, G>180, B<50), Black
# The FORTNITE logo is White
# Island! is White

# Let's create an accurate alpha mask
# Background estimation:
# In RGB, white has high brightness and low saturation
# Red has high R, low G/B
# Blue background has high B, medium G, low R (R < 160)

r = rgb[:, :, 0].astype(float)
g = rgb[:, :, 1].astype(float)
b = rgb[:, :, 2].astype(float)

# White text: r > 180, g > 190, b > 210 with (r+g+b)/3 > 210
# Red LEGO logo: r > 150 and r > g*1.5 and r > b*1.5
# Black border in LEGO logo: r < 80, g < 80, b < 80 and near red logo
# Yellow in LEGO logo: r > 180, g > 150, b < 100

is_white = (r > 190) & (g > 190) & (b > 200)
is_red = (r > 140) & (g < 60) & (b < 60)
is_yellow = (r > 170) & (g > 140) & (b < 100)
is_lego_black = (r < 50) & (g < 50) & (b < 50)

# Build foreground mask
fg_mask = is_white | is_red | is_yellow

# Find bounding box of foreground
ys, xs = np.where(fg_mask)
min_y, max_y = ys.min(), ys.max()
min_x, max_x = xs.min(), xs.max()

print(f'Text bbox: x=({min_x}, {max_x}), y=({min_y}, {max_y})')
