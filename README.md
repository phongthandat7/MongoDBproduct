# 🧭 Data Management System — Node.js + MongoDB Compass

## 📌 Giới thiệu
Dự án xây dựng hệ thống **quản lý dữ liệu động** sử dụng **Node.js (Express + Mongoose)** kết nối tới **MongoDB Compass**.  
Mục tiêu là tạo nền tảng dữ liệu có thể mở rộng — từ quản lý **Product**, **User**, **Order** đến các **module phức tạp hơn** như Category, Inventory, hoặc Analytics.

---

## 🧩 Công nghệ sử dụng
- **Backend:** Node.js (Express Framework)  
- **Database:** MongoDB (local)  
- **ORM:** Mongoose  
- **Công cụ:** MongoDB Compass, Postman, Nodemon  

---

## 🚀 Roadmap & Milestone

### 🧱 1️⃣ Thiết lập môi trường & Kết nối MongoDB
- Khởi tạo project Node.js, cài Express và Mongoose.  
- Tạo file cấu hình kết nối MongoDB local.  
- Kiểm tra và quản lý dữ liệu trực quan bằng **MongoDB Compass**.  
- Xác định database chính `mainDB` làm nền tảng mở rộng cho nhiều collection (product, user, order,...).

---

### 📦 2️⃣ Thiết kế cấu trúc dữ liệu
- Xây dựng các schema cơ bản:
  - **Product:** title, imageUrl, price, description, userId  
  - **User:** name, email, role  
  - **Order:** productId, quantity, totalPrice, date  
- Sử dụng Mongoose Schema để dễ mở rộng khi thêm module mới.  
- Quản lý và xem collection trong Compass.

---

### ⚙️ 3️⃣ Tạo Controller API
- Tạo controller chung xử lý CRUD cho từng loại dữ liệu.  
- Sử dụng các phương thức Mongoose (`save`, `find`, `updateOne`, `deleteOne`).  
- Kết nối API với Compass để theo dõi dữ liệu thay đổi realtime.  

---

### 🔗 4️⃣ Định nghĩa Route
- Tạo route riêng cho từng nhóm dữ liệu:
  - `/admin/products`
  - `/admin/users`
  - `/admin/orders`  
- Sử dụng RESTful pattern để mở rộng dễ dàng.  

---

### 🧪 5️⃣ Validate & Middleware
- Kiểm tra dữ liệu đầu vào trước khi ghi vào MongoDB.  
- Xử lý lỗi, thiếu trường, hoặc kiểu dữ liệu không hợp lệ.  
- Dễ dàng thêm middleware cho các module khác (auth, logging, analytics...).  

---

### 💾 6️⃣ Tạo và Quản lý Dữ liệu
- Sinh dữ liệu mẫu bằng script (seed data).  
- Theo dõi thay đổi qua Compass: thêm, sửa, xóa document.  
- Dễ dàng thêm collection mới chỉ bằng cách khai báo schema mới.

---

### 🔍 7️⃣ Mở rộng Hệ thống
- Thêm các tính năng: phân quyền user, quản lý đơn hàng, báo cáo thống kê.  
- Mỗi tính năng mới chỉ cần thêm **model + controller + route**, không ảnh hưởng đến cấu trúc hiện tại.  
- MongoDB Compass giúp quan sát mối quan hệ giữa các collection và dữ liệu mở rộng.

---

## 📊 API Tóm tắt
| Method | Endpoint | Mô tả |  
|--------|-----------|-------|  
| GET | `/admin/products` | Lấy danh sách sản phẩm |  
| GET | `/admin/products/:id` | Lấy chi tiết sản phẩm |  
| POST | `/admin/add-product` | Thêm sản phẩm mới |  
| PUT | `/admin/edit-product/:id` | Cập nhật sản phẩm |  
| DELETE | `/admin/delete-product/:id` | Xóa sản phẩm |  
| *(Có thể mở rộng với `/admin/users`, `/admin/orders`...)* | |  

---

## 📚 Tài liệu tham khảo
- [MongoDB Compass Documentation](https://www.mongodb.com/docs/compass/current/)  
- [Mongoose Official Docs](https://mongoosejs.com/docs/)  
- [Express.js Guide](https://expressjs.com/en/starter/hello-world.html)  

---

> 🧠 **Tổng kết:**  
Dự án này không chỉ là CRUD cho Product, mà là **nền tảng quản lý dữ liệu có thể mở rộng**.  
Với Node.js + MongoDB Compass, ta dễ dàng bổ sung module mới, theo dõi dữ liệu trực quan, và triển khai linh hoạt cho nhiều bài toán thực tế (quản lý hàng hóa, người dùng, giao dịch,...).
