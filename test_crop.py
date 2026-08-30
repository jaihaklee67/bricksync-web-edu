from PIL import Image
import numpy as np

im = Image.open(r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\media_1788082574044.png')
w, h = im.size

# Let's crop the bottom row (LEGO FORTNITE Island!)
crop_bottom = im.crop((50, int(h * 0.72), w - 20, h - 50))
crop_bottom.save(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\test_bottom_row.png')
print('Cropped bottom row:', crop_bottom.size)
