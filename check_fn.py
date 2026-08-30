import os
from PIL import Image

fn = r'C:\Users\PC\Downloads\main page_FN.png'
if os.path.exists(fn):
    im = Image.open(fn)
    print('main page_FN.png size:', im.size)
