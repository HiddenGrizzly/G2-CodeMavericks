create database slot_6
go
use slot_6
create schema orders;
create schema customers;
create schema products;
create table orders.orderi(
	order_id int not null primary key,
	customer_id int not null,
	day_acquire date not null,
	foreign key (customer_id) references customers.customer (customer_id),
);
create table customers.customer(
	customer_id int not null primary key,
	customer_name nvarchar(100) not null,
	customer_address nvarchar(100) not null,
	customer_tel varchar(10) not null
);
create table orders.order_detail(
	order_id int not null,
	product_id int not null,
	quantity int not null,
	primary key (order_id, product_id),
	foreign key (product_id) references products.product (product_id),
	foreign key (order_id) references orders.orderi (order_id)
);
create table products.product(
	product_id int primary key not null,
	product_name nvarchar(100) not null,
	product_description nvarchar(100) not null,
	product_donvi nvarchar(10) not null,
	product_price int not null
);

insert into products.product (product_id,product_name,product_description,product_donvi,product_price) 
values (1, 'Máy tính T450', 'Máy nhập mới', 'Chiếc', 1000);
insert into products.product (product_id,product_name,product_description,product_donvi,product_price) 
values (2, 'Điện thoại Nokia5670', 'Điện thoại đang hot', 'Chiếc', 200),(3, 'Máy in Samsung 450', 'Máy in đang ế', 'Chiếc', 100);
insert into customers.customer values (1, 'Nguyễn Văn An', '111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');
insert into customers.customer values (2, 'Nguyễn Văn Bình', '8 Nguyễn Trãi, Thanh Xuân, Hà Nội', '087654321');
insert into orders.orderi values (123, 1, '11-18-09');
insert into orders.order_detail values (123, 1, 1),(123, 2, 2), (123, 3, 1);
insert into orders.order_detail values (1, 1, 2),(1, 2, 3), (1, 3, 2);

select customer_name Ten_khach_hang, customer_address Dia_chi, customer_tel Dien_thoai
from customers.customer order by Ten_khach_hang asc;

select product_name Ten_san_pham, product_description Mo_ta, product_price Gia, product_donvi Don_vi
from products.product order by Gia desc;

select * from orders.orderi;

