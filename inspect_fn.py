from PIL import Image
import numpy as np

im = Image.open(r'C:\Users\PC\Downloads\main page_FN.png')
# Let's save a preview to check
im.save(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\main_page_fn_preview.png')
print('Saved preview')
