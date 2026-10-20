# ADLEY Team - Landing Page Giới Thiệu Đội Ngũ (Midterm Project)

Dự án bài thi Giữa kỳ Học phần **Thiết kế Web** - Khoa Công nghệ Thông tin, Trường Đại học Lạc Hồng.

- **Sinh viên thực hiện (Leader):** Hà Văn Kiên
- **MSSV:** 25CT111
- **Lớp:** 25CT111
- **Tên Repository GitHub theo chuẩn đề thi:** `Kien_HaVan_25CT111`
- **Đề tài:** Website Giới Thiệu Đội Ngũ Sáng Tạo & Đột Phá Công Nghệ ADLEY Team
- **Công cụ hỗ trợ:** Antigravity AI / Vibe Coding (Prompt Engineering)

---

## 🎯 Tuân Thủ Toàn Diện Quy Chuẩn Kỹ Thuật (Buổi 1 - 6)

1. **Chuẩn Semantic HTML5 Chuẩn Xác Tuyệt Đối (Không Thẻ Rác / Không Div Bừa Bãi):**
   - Đầy đủ thẻ ngữ nghĩa: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<dialog>`, `<details>`, `<summary>`, `<time>`, `<footer>`.
   - Danh sách thống kê biểu diễn bằng Description List `<dl>`, `<dt>`, `<dd>` thay vì thẻ `div`.
   - Khối hiển thị code sử dụng cặp thẻ `<pre><code>` theo đúng chuẩn W3C.
   - Thẻ hiển thị pop-up modal thông tin cá nhân sử dụng `<dialog>`.
   - Loại bỏ toàn bộ `role="banner"`, `role="main"`, `role="navigation"` vì các thẻ Semantic gốc đã tự thân mang vai trò chuẩn.
   - **Xóa sạch 100% thuộc tính `style="..."` inline** trong HTML để tách biệt hoàn toàn giữa cấu trúc và giao diện.
2. **Kỹ thuật CSS Hiện Đại & Design System Bài Bản (Buổi 3 - 4):**
   - **Form chữ:** Google Font `Roboto` đồng bộ 100% kèm `Roboto Mono` cho khối code.
   - **Hệ thống CSS Variables (`:root`):** Định nghĩa toàn bộ màu sắc, bán kính, bóng đổ, và đặc biệt bổ sung đầy đủ biến khoảng cách `--space-5: 1.25rem;` và `--space-20: 5rem;` giúp khoảng cách lưới và padding luôn hoạt động chuẩn xác.
   - **Xóa bỏ mã màu viết cứng:** Toàn bộ mã màu hex được gom tập trung về hệ thống biến CSS.
   - **Responsive Đầy Đủ 3 Breakpoint:** `1024px` (Tablet ngang), `768px` (Tablet dọc / Phablet), `480px` (Smartphone màn hình nhỏ). Đảm bảo mặt sau thẻ lật 3D không bao giờ bị tràn chữ trên điện thoại nhỏ.
3. **Hiệu Ứng Chuyển Động & Scroll-driven Animation:**
   - Tích hợp `Animate.css` cho Hero title và các thành phần chính với hiệu ứng so le thời gian `animate__delay-1s`.
   - Hiệu ứng **CSS Scroll-driven Animation** (`animation-timeline: view()`) hiện đại tạo trải nghiệm cuộn trang mượt mà như AOS mà vẫn duy trì nguyên tắc 100% thuần CSS native.
   - Hiệu ứng **Card Flip 3D (Lật thẻ 180 độ)** xem thông tin chi tiết từng thành viên khi rê chuột/chạm.
   - Nút liên hệ nổi **Floating Action Button (FAB)** với nhịp tim `pulse animation` tinh tế.
4. **Dự Án Nghiên Cứu Thực Tế Từ Ổ D:**
   - 6 dự án nghiên cứu có thật được trích xuất từ ổ đĩa D: CORNWEED-SCOUT, YourVoice, Sắc Việt, SmartFin-Guard Extension, Gia Sư Ảo, Thiết Bị Cảnh Báo Khí Độc Theo Độ Sâu.
5. **Chuẩn Hóa Đường Dẫn Hình Ảnh Web-Safe:**
   - Đổi toàn bộ tên file ảnh có dấu cách, tiếng Việt sang dạng kebab-case chuẩn: `ha-van-kien.png`, `bui-xuan-canh.png`, `hoang-minh-phat.png`,... đảm bảo hoạt động hoàn hảo 100% trên GitHub Pages mà không bị lỗi 404.

---

## 📂 Cấu Trúc Mã Nguồn Theo Mô Hình MVC

```text
TKweb/ (Repository: Kien_HaVan_25CT111)
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design System: Khai báo toàn diện biến CSS :root
│   │   └── style.css          # Dàn trang Grid/Flexbox, 3D flip card, responsive 3 breakpoints
│   └── images/                # Bộ ảnh chân dung định dạng kebab-case chuẩn web
├── models/
│   ├── team_model.html        # Model: Từ điển dữ liệu cấu trúc thực thể 9 thành viên ADLEY
│   └── project_model.html     # Model: Dữ liệu thực thể 6 dự án thực tế từ ổ D
├── views/
│   ├── header_view.html       # View: Module thanh điều hướng Header
│   ├── team_view.html         # View: Khung hiển thị lưới nhân sự
│   ├── projects_view.html     # View: Khung hiển thị 6 dự án nghiên cứu
│   └── footer_view.html       # View: Module chân trang Sticky Footer
├── index.html                 # Controller / Master View: Tích hợp tổng thể và điều phối
├── PROMPT_LOG.md              # Nhật ký Prompt Engineering (Vibe Coding Log chuẩn barem đề thi)
└── README.md                  # Tài liệu giới thiệu dự án
```

---

## 👥 Danh Sách Giảng Viên & 9 Thành Viên ADLEY Team (Chuẩn Hóa MSSV)

- 👨‍🏫 **Thầy Bùi Xuân Cảnh** - *Giảng Viên Hướng Dẫn Học Phần Thiết Kế Web*
1. **Hà Văn Kiên (Leader)** - MSSV: `25CT111` - *Tech Lead & System Architect*
2. **Hoàng Minh Phát** - MSSV: `25CT112` - *UI/UX Specialist & Animations*
3. **Nguyễn Đinh Khánh Trang** - MSSV: `25EC111` - *Creative Director & Brand Strategist*
4. **Đặng Thị Tố Ngân** - MSSV: `24MC112` - *Product Designer & Accessibility Expert*
5. **Nguyễn Hoàng Anh** - MSSV: `CT111` - *Semantic HTML5 & Clean DOM Engineer*
6. **Ngô Võ Nam** - MSSV: `25CT113` - *Layout Architect & CSS Grid Master*
7. **Phan Văn Trận** - MSSV: `23EC111` - *QA & Cross-Browser Compatibility Specialist*
8. **Trần Hoài Phương** - MSSV: `25MC111` - *Visual Media & Image Optimizer*
9. **Trần Quang Huy** - MSSV: `25CT114` - *Git Coordinator & Prompt Log Auditor*
