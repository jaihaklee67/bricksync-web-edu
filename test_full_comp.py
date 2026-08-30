from PIL import Image
import numpy as np

# Load all hero assets
bg = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\BackGround.png').resize((1920, 1080)).convert('RGBA')
hero_bg = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\hero_bg.png').convert('RGBA')
wheel = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\lego_ferris_wheel_crop.png').convert('RGBA')
blocks = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\code_blocks_crop.png').convert('RGBA')
char = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\character_crop.png').convert('RGBA')
text = Image.open(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\logo_lego_cropped.png').convert('RGBA')

# Canvas: 1920x1080, with -9.5% y-shift -> -102.6px
shift_y = int(-1080 * 0.095)

# Layer 2: hero_bg (right:0, top: 23.5%, w: 49%)
w2 = int(1920 * 0.49)
h2 = int(w2 * (hero_bg.size[1] / hero_bg.size[0]))
hero_bg_res = hero_bg.resize((w2, h2), Image.Resampling.LANCZOS)
x2 = 1920 - w2
y2 = int(1080 * 0.235) + shift_y

# Layer 3: wheel (left: 42.5%, top: 13.5%, h: 65.5%)
h3 = int(1080 * 0.655)
w3 = int(h3 * (wheel.size[0] / wheel.size[1]))
wheel_res = wheel.resize((w3, h3), Image.Resampling.LANCZOS)
x3 = int(1920 * 0.425)
y3 = int(1080 * 0.135) + shift_y

# Layer 4: blocks (left: 46.2%, top: 74.5%, w: 24.5%)
w4 = int(1920 * 0.245)
h4 = int(w4 * (blocks.size[1] / blocks.size[0]))
blocks_res = blocks.resize((w4, h4), Image.Resampling.LANCZOS)
x4 = int(1920 * 0.462)
y4 = int(1080 * 0.745) + shift_y

# Layer 5: char (left: 68.6%, top: 52.0%, h: 46.0%)
h5 = int(1080 * 0.460)
w5 = int(h5 * (char.size[0] / char.size[1]))
char_res = char.resize((w5, h5), Image.Resampling.LANCZOS)
x5 = int(1920 * 0.686)
y5 = int(1080 * 0.520) + shift_y

# Layer 6: text (left: 6.5%, top: 33.5%, w: 42.0%)
w6 = int(1920 * 0.40)
h6 = int(w6 * (text.size[1] / text.size[0]))
text_res = text.resize((w6, h6), Image.Resampling.LANCZOS)
x6 = int(1920 * 0.065)
y6 = int(1080 * 0.315) + shift_y

# Composite in order
comp = bg.copy()
comp.paste(hero_bg_res, (x2, y2), hero_bg_res)
comp.paste(wheel_res, (x3, y3), wheel_res)
comp.paste(text_res, (x6, y6), text_res)
comp.paste(blocks_res, (x4, y4), blocks_res)
comp.paste(char_res, (x5, y5), char_res)

comp.save(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\full_hero_preview_new.png')
print('Generated full_hero_preview_new.png successfully')
