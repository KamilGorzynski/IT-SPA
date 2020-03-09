from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask import g
import json

import sqlite3
import os

app = Flask(__name__)
CORS(app)
api = Api(app)


def get_db():
    if not g.get('db'):
        con = sqlite3.connect(os.path.join(app.root_path, 'it-spa.db'))
        con.row_factory = sqlite3.Row
        g.db = con
    return g.db


@app.teardown_appcontext
def close_db(error):
    if g.get('db'):
        g.db.close()


def get_all_from_table(table):
    db = get_db()
    cursor = db.execute('SELECT * FROM {0};'.format(table))
    return json.dumps([dict(row) for row in cursor.fetchall()])


@app.route('/rooms')
def rooms():
    return get_all_from_table('Rooms')


@app.route('/treatments')
def treatments():
    return get_all_from_table('Treatments')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
