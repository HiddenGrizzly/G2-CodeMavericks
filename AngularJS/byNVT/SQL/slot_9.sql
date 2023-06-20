create database slot_9
go
use slot_9
go
--Tạo bảng
create table loai_san_pham (
	ma_loai_sp char(4) primary key,
	ten_loai_sp nvarchar(255)
);
create table nguoi_chiu_trach_nhiem (
	ma_nguoi_chiu_trach_nhiem int primary key,
	ten_nguoi_chiu_trach_nhiem nvarchar(255)
);
create table san_pham (
	ma_san_pham char(9) primary key,
	ngay_san_xuat date,
	ma_loai_sp char(4),
	ma_nguoi_chiu_trach_nhiem int,
	foreign key (ma_loai_sp) references loai_san_pham(ma_loai_sp),
	foreign key (ma_nguoi_chiu_trach_nhiem) references nguoi_chiu_trach_nhiem(ma_nguoi_chiu_trach_nhiem)
);
--Chèn dữ liệu vào bảng 
insert into nguoi_chiu_trach_nhiem values (987688, N'Nguyễn Văn An'), (666888, N'Nguyễn Văn Bình'), (345678, N'Đinh Tiến Dũng');
insert into loai_san_pham values ('Z37E', N'Máy tính xách tay Z37'), ('CS20', N'Đồng hồ Casio 20'), ('NO1A', N'Điện thoại cục gạch nokia'),
('SamS', N'Tivi màn hình cong Samsung');
insert into san_pham values ('Z37111111', '12/12/09', 'Z37E', 987688), ('CS2012345', '11/11/01', 'CS20', 987688),
							('Z37111222', '12/12/10', 'Z37E', 987688), ('NO1A12355', '10/10/20', 'NO1A', 987688),
							('CS2013579', '10/10/10', 'CS20', 666888), ('NO1A98765', '09/09/09', 'NO1A', 666888),
							('NO1A23456', '08/08/08', 'NO1A', 345678), ('NO1A01234', '07/07/07', 'NO1A', 345678);
--4a: Danh sách loại sản phẩm của công ty
select * from loai_san_pham;
--4b: Danh sách sản phẩm
select * from san_pham;
--4c: Danh sách người chịu trách nhiệm của công ty
select * from nguoi_chiu_trach_nhiem;
--5a: Danh sách loại sản phẩm của công ty theo thứ tự tăng dần của tên
select * from loai_san_pham order by ten_loai_sp asc;
--5b: Danh sách người chịu trách nhiệm theo thứ tự tăng dần của tên
select * from nguoi_chiu_trach_nhiem order by ten_nguoi_chiu_trach_nhiem asc;
--5c: Các sản phẩm có loại Z37E
select * from san_pham where ma_loai_sp like 'Z37E';
--5d: Các sản phẩm Nguyễn Văn An Chịu trách nhiệm theo thứ tự giảm dần của mã
select * from san_pham s join nguoi_chiu_trach_nhiem n on s.ma_nguoi_chiu_trach_nhiem = n.ma_nguoi_chiu_trach_nhiem where n.ten_nguoi_chiu_trach_nhiem like N'Nguyễn Văn An' order by ma_san_pham desc;

