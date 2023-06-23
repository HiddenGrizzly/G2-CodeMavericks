create database slot10_as5
use slot10_as5
--2: Viết các câu lệnh để tạo bảng
create table DanhBa (
	ma_nguoi int primary key,
	ho_va_ten nvarchar(255),
	dia_chi nvarchar(255),
	ngay_sinh date
);
create table DienThoai (
	ma_nguoi int,
	so_dien_thoai varchar(20),
	foreign key (ma_nguoi) references DanhBa(ma_nguoi)
);
--3: Thêm dữ liệu vào bảng
insert into DanhBa values