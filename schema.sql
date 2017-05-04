create database Bamazon;
use Bamazon;

create table products(
item_id INTEGER(10) NOT NULL auto_increment,
product_name varchar(20) not null,
department_name varchar(20) not null,
price decimal (5,2) not null,
stock_quantity INTEGER(10) not null,
primary key(item_id)
);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("headphone","electronics",89.99, 10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("sweatpants","clothes",9.99, 9);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("polo","clothes",19, 3);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("radio","electronics",129, 23);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Advil","health",2.99, 100);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("vitaminC","health",6, 80);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("lamp","decoration",14.99, 2);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("TV","electronics",699.99, 1);
 INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("GoPro","electronics",400, 11);
 INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("glitter","decoration",4.99, 18);

select * from products;