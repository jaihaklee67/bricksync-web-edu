import json
import sys

transcript_path = r'C:\Users\PC\.gemini\antigravity\brain\2550488a-862b-444c-8b78-bdeb51892157\.system_generated\logs\transcript.jsonl'

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get('step_index', 0)
            if 1415 <= step <= 1515:
                src = data.get('source', '')
                t = data.get('type', '')
                content = data.get('content', '')
                sys.stdout.buffer.write(f'Step {step} [{src}/{t}]: {content[:200]}\n'.encode('utf-8'))
        except:
            pass
