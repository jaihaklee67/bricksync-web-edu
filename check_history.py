import json
import glob
import os

transcript_path = r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.system_generated\logs\transcript.jsonl'

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                txt = data.get('content', '')
                print(f"Step {data.get('step_index')}: {txt[:120]}")
        except:
            pass
