import numpy as np
from PIL import Image

fn = r'C:\Users\PC\Downloads\main page_FN.png'
im = Image.open(fn)
print('main page_FN size:', im.size, im.mode)

# Check user uploaded image
up = r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\media_1788082574044.png'
im_up = Image.open(up)
print('media_1788082574044 size:', im_up.size, im_up.mode)
