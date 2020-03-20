from flask import Flask, request, g
from flask_restful import Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from passlib.apps import custom_app_context as pwd_context
from flask_httpauth import HTTPBasicAuth
from itsdangerous import (
    TimedJSONWebSignatureSerializer as Serializer,
    BadSignature
)


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///it-spa.db'
app.config['SECRET_KEY'] = 'secret_key'
db = SQLAlchemy(app)
CORS(app)
api = Api(app)
auth = HTTPBasicAuth()


@auth.verify_password
def verify_password(username_or_token, password):
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32))
    password_hash = db.Column(db.String(128))
    email = db.Column(db.String(128))

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

    def generate_auth_token(self):
        s = Serializer(app.config['SECRET_KEY'])
        return s.dumps({'id': self.id})

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except BadSignature:
            return None
        user = User.query.get(data['id'])
        return user


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


@app.route('/users', methods=['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email')
    if User.query.filter_by(username=username).first() is not None:
        return jsonify({'details': 'User exists!'}), 200
    user = User(username=username, email=email)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'details': 'User created!'}), 201


@app.route('/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token()
    return jsonify({'token': token.decode('ascii')})


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
@auth.login_required
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
