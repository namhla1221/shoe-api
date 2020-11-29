create table shoes
(
    id serial not null primary key,
    brand text not null,
    color text not null,
    shoeSize int not null,
    price DECIMAL not null,
    quantity int not null
);

CREATE TABLE shoetable
(
    id serial not null PRIMARY KEY ,
    qty int not null,
    brand_id int not null,
    subtotal DECIMAL not null,
    foreign key (brand_id) references shoes(id)
);

-- --  INSERT data into shoes
INSERT INTO shoes(brand,color,shoeSize,price,quantity)VALUES('Adidas', 'brown', 3,600,5);
INSERT INTO shoes(brand,color,shoeSize,price,quantity)VALUES('Vans', 'white', 5,800, 6);
INSERT INTO shoes(brand,color,shoeSize,price,quantity)VALUES('Nike', 'black', 4,1200,3);

