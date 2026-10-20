# ADLEY Team - Landing Page Giới Thiệu Đội Ngũ (Midterm Project)

Dự án bài thi Giữa kỳ Học phần **Thiết kế Web** - Khoa Công nghệ Thông tin, Trường Đại học Lạc Hồng.

- **Sinh viên thực hiện (Leader):** Hà Văn Kiên
- **MSSV:** 25CT111
- **Lớp:** 25CT111
- **Đề tài:** Website Giới Thiệu Đội Ngũ Sáng Tạo & Đột Phá Công Nghệ ADLEY Team
- **Công cụ hỗ trợ:** Antigravity AI / Vibe Coding (Prompt Engineering)

---

## 🎯 Tuân Thủ Quy Chuẩn Kỹ Thuật (Tuần 1 - Tuần 6)

1. **Chuẩn Semantic HTML5 (100% Không Lạm Dụng thẻ Div):**
   - Áp dụng đầy đủ: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<details>`, `<summary>`, `<time>`, `<footer>`.
2. **Kỹ thuật CSS Hiện Đại & Design System (Tuần 3 - Tuần 4):**
   - **Form chữ:** 100% Google Font `Roboto` (Weights: 300, 400, 500, 700, 900) hiển thị chuẩn mực, rõ ràng, thẩm mỹ học thuật.
   - **Màu sắc chủ đạo:** Tông màu **Sáng Trắng Xanh Dương (Bright White & Ocean Blue)** trang nhã, hiện đại, loại bỏ toàn bộ sticker/icon emoji màu mè gây rối mắt.
   - Quản trị toàn bộ bằng CSS Variables (`:root`) cho màu sắc, khoảng cách, typography và bán kính bo góc trong `assets/css/variables.css`.
   - Bố cục 2 chiều **CSS Grid** (3 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile).
   - Hệ thống **Flexbox** căn chỉnh linh hoạt cho Header, Hero CTA, Value Cards và Footer.
3. **Dự Án Nghiên Cứu Thực Tế Từ Ổ D:**
   - Đã liên kết và giới thiệu 6 công trình nghiên cứu nổi bật của tác giả từ ổ đĩa D:
     1. **CORNWEED-SCOUT:** Xe Trinh Sát AI Lập Bản Đồ Cỏ Dại Ruộng Ngô (Edge AI, RTK GNSS, Computer Vision).
     2. **YourVoice:** Ứng Dụng Phiên Dịch Ngôn Ngữ Ký Hiệu VSL Sang Văn Bản & Avatar 3D (Hội thi STKT Đồng Nai 2026).
     3. **Sắc Việt:** Nền Tảng Kết Nối Chợ Phiên Muôn Phương (Cuộc thi APEC Innovation II).
     4. **SmartFin-Guard Extension:** Hệ Thống Giám Định Tài Chính & Phê Duyệt Tín Dụng Bằng AI.
     5. **Gia Sư Ảo:** Hệ Thống Học Tập Cá Nhân Hóa Dữ Liệu Sách Giáo Khoa Thông Minh.
     6. **Thiết Bị Cảnh Báo Khí Độc Theo Độ Sâu:** Thiết Bị IoT Đo Phân Tầng Khí Trong Không Gian Kín (KHKT 2026 - 2027).
4. **Hiệu Ứng Chuyển Động & Thư Viện CSS (Tuần 5):**
   - Tích hợp `Animate.css` cho các hiệu ứng xuất hiện ban đầu (Hero title, Call to Action, Badge).
   - Hiệu ứng **Card Flip 3D (Lật thẻ 180 độ)** xem thông tin chi tiết từng thành viên khi rê chuột/chạm.
   - Nút liên hệ nổi **Floating Action Button (FAB)** có hiệu ứng nhịp tim (`pulse animation`) ở góc phải màn hình.
5. **Tuyệt Đối Không Sử Dụng JavaScript:**
   - Đạt chuẩn giới hạn nội dung đến Buổi 6 theo yêu cầu đề bài.
   - Cửa sổ xem chi tiết thành viên **Modal Popup** hoạt động bằng pseudo-class **CSS `:target`** (`#modal-kien:target`).
   - Mobile Hamburger Menu đóng/mở mượt mà bằng CSS pure toggle.
   - Accordion phần Hỏi & Đáp (FAQ) chạy bằng `<details>` và `<summary>` gốc của HTML5.

---

## 📂 Cấu Trúc Mã Nguồn Theo Mô Hình MVC

```text
TKweb/
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design System: Bảng màu Trắng Xanh, Font Roboto (:root)
│   │   └── style.css          # Bố cục Flexbox/Grid, hiệu ứng 3D flip card, responsive
│   └── images/                # Hình ảnh thành viên và Giảng viên hướng dẫn
├── models/
│   ├── team_model.html        # Model: Từ điển dữ liệu cấu trúc thực thể 9 thành viên ADLEY
│   └── project_model.html     # Model: Dữ liệu thực thể 6 dự án thực tế từ ổ D
├── views/
│   ├── header_view.html       # View: Thành phần thanh điều hướng và thương hiệu
│   ├── team_view.html         # View: Khung hiển thị lưới danh sách thành viên
│   ├── projects_view.html     # View: Khung hiển thị 6 dự án nghiên cứu
│   └── footer_view.html       # View: Thành phần chân trang sticky footer
├── index.html                 # Controller / Master View: Tích hợp tổng thể và điều phối
├── PROMPT_LOG.md              # Nhật ký Prompt Engineering (Vibe Coding Log)
└── README.md                  # Tài liệu giới thiệu dự án
```

---

## 👥 Danh Sách Giảng Viên & 9 Thành Viên ADLEY Team

- 👨‍🏫 **Thầy Bùi Xuân Cảnh** - *Giảng Viên Hướng Dẫn Học Phần Thiết Kế Web*
1. **Hà Văn Kiên (Leader)** - MSSV: `25CT111` - *Tech Lead & System Architect*
2. **Hoàng Minh Phát** - MSSV: `25CT111` - *UI/UX Specialist & Animations*
3. **Nguyễn Đinh Khánh Trang** - MSSV: `25EC111` - *Creative Director & Brand Strategist*
4. **Đặng Thị Tố Ngân** - MSSV: `24MC112` - *Product Designer & Accessibility Expert*
5. **Nguyễn Hoàng Anh** - MSSV: `CT111` - *Semantic HTML5 & Clean DOM Engineer*
6. **Ngô Võ Nam** - MSSV: `25CT111` - *Layout Architect & CSS Grid Master*
7. **Phan Văn Trận** - MSSV: `23EC111` - *QA & Cross-Browser Compatibility Specialist*
8. **Trần Hoài Phương** - MSSV: `25MC111` - *Visual Media & Image Optimizer*
9. **Trần Quang Huy** - MSSV: `25CT111` - *Git Coordinator & Prompt Log Auditor*
