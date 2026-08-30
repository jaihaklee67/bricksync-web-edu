import glob
import os
from PIL import Image

uploaded = glob.glob(r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.user_uploaded\*')
print(f'Found {len(uploaded)} user uploaded files:')
for f in sorted(uploaded, key=os.path.getmtime, reverse=True)[:15]:
    try:
        im = Image.open(f)
        print(f'{os.path.basename(f)} | Size: {im.size} | Time: {os.path.getmtime(f)}')
    except:
        pass
