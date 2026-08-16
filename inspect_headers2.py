import csv
from pathlib import Path

path = Path(r'c:\Users\aaron\Documents\again again\new_sheet.csv')
with path.open(newline='', encoding='utf-8') as f:
    rows = list(csv.reader(f))
header = rows[0]
print('rows', len(rows))
print('header len', len(header))
for i, cell in enumerate(header):
    print(i, repr(cell))
