CREATE TABLE Rooms (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        VARCHAR (50),
    beds        INT,
    guests      INT,
    price       DECIMAL,
    description TEXT DEFAULT description
);

CREATE TABLE Treatments (
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    name   VARCHAR (50),
    area   VARCHAR (50),
    time INT,
    price  DECIMAL,
    description TEXT DEFAULT description
);


-- Rooms inserts

INSERT INTO Rooms (name,beds,guests,price)
VALUES ('Room1',1,1,170.00);

INSERT INTO Rooms (name,beds,guests,price)
VALUES ('Room2',1,2,240.00);

INSERT INTO Rooms (name,beds,guests,price)
VALUES ('Room3',2,3,290.00);

INSERT INTO Rooms (name,beds,guests,price)
VALUES ('Room4',2,4,340.00);



-- Treatments inserts

INSERT INTO Treatments (name,area,time,price)
VALUES ('hydromassage with essential oil','back','30',120.00);

INSERT INTO Treatments (name,area,time,price,description)
VALUES ('face massage','face','30',80.00);