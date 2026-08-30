import numpy as np
from PIL import Image

im = Image.open(r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\media_1788082574044.png')
arr = np.array(im.convert('RGBA'))

print('Image size:', im.size)
# Sample background colors
print('Top-left pixel:', arr[10, 10])
print('Bottom-left pixel:', arr[-10, 10])
print('Top-right pixel:', arr[10, -10])
print('Bottom-right pixel:', arr[-10, -10])
