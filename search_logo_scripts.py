import glob
import os

scripts = glob.glob('*.py')
for s in scripts:
    with open(s, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
        if 'logo_lego' in c:
            print(f'=== Found logo_lego in {s} ===')
            print(c[:400])
