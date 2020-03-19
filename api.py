from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///it-spa.db'
db = SQLAlchemy(app)
CORS(app)
api = Api(app)


class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32))
    password_hash = db.Column(db.String(128))


class Rooms(db.Model):
    __tablename__ = 'Rooms'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    beds = db.Column(db.Integer, nullable=True)
    guests = db.Column(db.Integer, nullable=True)
    price = db.Column(db.Float, nullable=True)
    description = db.Column(db.Text, default='Description')


class Treatments(db.Model):
    __tablename__ = 'Treatments'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    area = db.Column(db.String(50), nullable=True)
    time = db.Column(db.Integer, nullable=True)
    price = db.Column(db.Float, nullable=True)
    description = db.Column(db.Text, default='Description')
    photo = db.Column(db.Text, default='https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')


@app.route('/rooms')
def rooms():
    rooms_list = []
    for room in Rooms.query.all():
        rooms_list.append({
            "id": room.id,
            "name": room.name,
            "beds": room.beds,
            "guests": room.guests,
            "price": room.price,
            "description": room.description
        })
    return jsonify(rooms_list)


@app.route('/treatments')
def treatments():
    treatments_list = []
    for treatment in Treatments.query.all():
        treatments_list.append({
            "id": treatment.id,
            "name": treatment.name,
            "area": treatment.area,
            "time": treatment.time,
            "price": treatment.price,
            "description": treatment.description,
            "photo": treatment.photo
        })

    return jsonify(treatments_list)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
