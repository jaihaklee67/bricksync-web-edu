import cv2
import numpy as np
from PIL import Image

bg = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\BackGround.png')
text = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\logo_lego_cropped.png')

# In Hero.jsx:
# left-[6.5%] top-[33.5%] w-[42.0%]
# Let's composite on a 1920x1080 canvas
canvas = bg.resize((1920, 1080)).convert('RGBA')

# Target text width: 1920 * 0.42 = 806.4px
tw = int(1920 * 0.42)
th = int(tw * (text.size[1] / text.size[0]))
text_resized = text.resize((tw, th), Image.Resampling.LANCZOS)

tx = int(1920 * 0.065)
ty = int(1080 * 0.335)

canvas.paste(text_resized, (tx, ty), text_resized)
canvas.save(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\preview_new_hero_text.png')
print(f'Saved preview_new_hero_text.png at ({tx}, {ty}), size {tw}x{th}')
