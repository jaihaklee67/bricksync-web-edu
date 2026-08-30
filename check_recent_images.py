import os
import glob
from datetime import datetime

for root in [r'C:\Users\PC\Desktop', r'C:\Users\PC\Downloads', r'C:\Users\PC\.gemini\antigravity\scratch\bricksync-web\public\images']:
    print(f'=== {root} ===')
    for f in os.listdir(root):
        fp = os.path.join(root, f)
        if os.path.isfile(fp) and any(fp.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.webp']):
            mtime = datetime.fromtimestamp(os.path.getmtime(fp))
            if (datetime.now() - mtime).days < 10 or 'main' in f.lower() or 'hero' in f.lower():
                print(f'{f} | {os.path.getsize(fp)/(1024*1024):.2f} MB | {mtime}')
