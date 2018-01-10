import os
import json
import datetime

import polib


def generate_po_file(element_name, file):
    file_data = json.load(file)
    po = polib.POFile()
    po.metadata = {
        'POT-Creation-Date': str(datetime.datetime.now()),
        'Content-Type': 'text/plain; charset=utf-8'
    }
    for key in file_data:
        entry = polib.POEntry(
            msgid=key,
            msgstr=file_data[key]
        )
        po.append(entry)
    po.save(f'generatedPoFiles/{element_name}.po')


if __name__ == '__main__':
    for fileName in os.listdir('prePootleFiles'):
        generate_po_file(fileName, open(f'prePootleFiles/{fileName}', 'r'))