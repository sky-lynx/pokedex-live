import csv
from pathlib import Path

path = Path('new_sheet.csv')
with path.open(newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    print('len', len(header))
    for i, cell in enumerate(header[6:], start=6):
        print(i, repr(cell))
