import numpy as np
from PIL import Image
import cv2

im = Image.open(r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\media_1788082574044.png')
rgb = np.array(im.convert('RGB')).astype(float)
h, w, _ = rgb.shape

# Let's sample pure background areas (left edge, top edge, between lines)
# Background is blue: R < 130, G < 210, B > 180
# Foreground is either White (R > 180), or Red LEGO logo (R > 160, G < 50), or Black LEGO border

# Identify non-foreground pixels for background fitting
non_fg = (rgb[:, :, 0] < 150) & (rgb[:, :, 1] < 190)

# Fit 2D plane to R, G, B channels of background
yy, xx = np.mgrid[0:h, 0:w]
X = np.column_stack([xx[non_fg], yy[non_fg], np.ones(np.sum(non_fg))])

bg_est = np.zeros_like(rgb)
for c in range(3):
    y_val = rgb[:, :, c][non_fg]
    coeffs, _, _, _ = np.linalg.lstsq(X, y_val, rcond=None)
    bg_est[:, :, c] = coeffs[0]*xx + coeffs[1]*yy + coeffs[2]

# Now for white text: C = alpha * 255 + (1 - alpha) * bg
# alpha = (C - bg) / (255 - bg)
# Average across RGB:
diff = rgb - bg_est
denom = 255.0 - bg_est

# White text alpha:
alpha_white = np.clip(np.mean(diff / np.maximum(denom, 1.0), axis=2), 0.0, 1.0)

# For LEGO logo:
# Red area:
is_lego_red = (rgb[:, :, 0] > 140) & (rgb[:, :, 1] < 60) & (rgb[:, :, 2] < 60)
# LEGO yellow text:
is_lego_yellow = (rgb[:, :, 0] > 160) & (rgb[:, :, 1] > 130) & (rgb[:, :, 2] < 90)
# LEGO black outline:
is_lego_black = (rgb[:, :, 0] < 50) & (rgb[:, :, 1] < 50) & (rgb[:, :, 2] < 50) & (xx < 150) & (yy > 400)

# Combine alpha
alpha = np.zeros((h, w), dtype=float)

# In the text area:
text_region = (alpha_white > 0.08)
alpha[text_region] = (alpha_white[text_region] - 0.08) / (1.0 - 0.08)
alpha[alpha > 1.0] = 1.0

# LEGO logo region:
lego_region = (xx >= 50) & (xx <= 145) & (yy >= 470) & (yy <= 560)
alpha[lego_region & (is_lego_red | is_lego_yellow | is_lego_black | (alpha_white > 0.1))] = 1.0

# Cleanup outside bounding box
bbox_y1, bbox_y2 = 130, 565
bbox_x1, bbox_x2 = 55, 690

mask_bbox = np.zeros((h, w), dtype=bool)
mask_bbox[bbox_y1:bbox_y2, bbox_x1:bbox_x2] = True
alpha[~mask_bbox] = 0.0

# Smooth alpha slightly
alpha_uint8 = (np.clip(alpha, 0, 1) * 255).astype(np.uint8)

# Output RGBA
out_rgba = np.zeros((h, w, 4), dtype=np.uint8)
out_rgba[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
# For white text, set pure white color to eliminate blue fringes
is_pure_text = (alpha > 0.1) & (~lego_region)
out_rgba[is_pure_text, 0] = 255
out_rgba[is_pure_text, 1] = 255
out_rgba[is_pure_text, 2] = 255
out_rgba[:, :, 3] = alpha_uint8

# Crop to tight bounding box
cropped_rgba = out_rgba[bbox_y1:bbox_y2, bbox_x1:bbox_x2]
res_img = Image.fromarray(cropped_rgba, 'RGBA')
res_img.save(r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images\logo_lego_cropped.png')
print('Extracted transparent text graphic:', res_img.size)
