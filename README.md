# ADLEY Team - Landing Page Giới Thiệu Đội Ngũ & Dự Án Nghiên Cứu

Dự án bài thi Giữa kỳ Học phần **Thiết kế Web** - Khoa Công nghệ Thông tin, Trường Đại học Lạc Hồng (LHU).

- **Sinh viên thực hiện:** Hà Văn Kiên
- **MSSV:** 125000399
- **Lớp:** 25CT111
- **Tên đề tài:** Website Giới Thiệu Đội Ngũ ADLEY Team & Hệ Thống 7 Dự Án Nghiên Cứu Đột Phá
- **Tên Repository theo chuẩn đề thi:** `Kien_HaVan_125000399`
- **GitHub Repository URL:** [https://github.com/hakien2525-pixel/Kien_HaVan_125000399](https://github.com/hakien2525-pixel/Kien_HaVan_125000399)
- **GitHub Pages Demo Live:** [https://hakien2525-pixel.github.io/Kien_HaVan_125000399/](https://hakien2525-pixel.github.io/Kien_HaVan_125000399/)

---

## 🎯 Tuân Thủ Toàn Diện Barem Chấm Thi (Buổi 1 - 6)

1. **Chuẩn Semantic HTML5 Tuyệt Đối (2.0 Điểm):**
   - 100% sử dụng thẻ ngữ nghĩa W3C: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<time>`, `<dl>`, `<dt>`, `<dd>`, `<pre>`, `<code>`, `<details>`, `<summary>`, `<footer>`.
   - Danh sách chỉ số thống kê thể hiện bằng `<dl>`, `<dt>`, `<dd>`.
   - Khối hiển thị code kiến trúc dùng `<pre><code>` giữ nguyên định dạng khoảng trắng tự nhiên.
   - Không tồn tại các `role` dư thừa (`role="banner"`, `role="main"`, `role="navigation"`...).
   - Loại bỏ 100% thuộc tính `style="..."` inline; tách biệt triệt để HTML và CSS.
2. **Kỹ Thuật CSS Variables & Design System (2.5 Điểm):**
   - **Form chữ:** Google Fonts `Roboto` đồng bộ toàn trang kèm font monospace `Consolas, Courier New` cho khối code.
   - **Hệ thống CSS Variables (`:root`):** Quản trị màu sắc sáng trắng xanh, typography scale, radius, shadow, và đầy đủ biến khoảng cách `--space-5: 1.25rem;` và `--space-20: 5rem;`.
   - **Zero Hardcoded Colors:** 100% màu sắc trong CSS được gọi qua hàm `var(--...)`.
   - **Mobile-First Responsive 3 Breakpoints:** `1024px` (Tablet), `768px` (Mobile Drawer), `480px` (Màn hình điện thoại nhỏ) với cơ chế chống tràn viền và chống cuộn ngang.
3. **Hiệu Ứng Chuyển Động & Thư Viện (1.5 Điểm):**
   - Thư viện `Animate.css` cho phần Hero với hiệu ứng so le `animate__delay-1s`.
   - **W3C CSS Scroll-Driven Animation** (`animation-timeline: view()`): Tạo hiệu ứng cuộn trang mượt mà như AOS mà vẫn tuân thủ nghiêm ngặt nguyên tắc **0% JavaScript**.
   - Hiệu ứng **3D Card Flip (Lật thẻ 180 độ)** dùng kỹ thuật CSS Checkbox Hack kết hợp bàn phím `:focus-visible` và nút "Lật lại" tiện lợi, hoàn toàn không dính lỗi tự lật khi hover.
   - Nút liên hệ nổi **Floating Action Button (FAB)** với hiệu ứng nhịp tim `pulse animation`.
4. **Hệ Thống 7 Dự Án Nghiên Cứu Thực Tế Từ Ổ D:**
   - Đầy đủ 7 công trình nghiên cứu: *CORNWEED-SCOUT, YourVoice, Sắc Việt, SmartFin-Guard, Gia Sư Ảo, Thiết Bị Cảnh Báo Khí Độc IoT, Smart Robot Assistant Alpha Mini*.
   - Toàn bộ 7 dự án đều được gắn hình ảnh thực tế sắc nét từ thư mục `image/`, nạp lazy-loading.
5. **Đường Dẫn Web-Safe 100% Không Lỗi 404:**
   - 100% file ảnh được chuẩn hóa dạng kebab-case không dấu, không dấu cách (`ha-van-kien.png`, `project-cornweed-scout.png`...).
   - Mọi liên kết nội bộ (`#hero`, `#about`, `#team`, `#projects`, `#faq`, `#contact`, `PROMPT_LOG.md`) đều trỏ chính xác, phân biệt hoa/thường an toàn trên Linux/GitHub Pages.
6. **Nhật Ký Prompt Engineering (3.0 Điểm):**
   - Tệp [PROMPT_LOG.md](PROMPT_LOG.md) ghi lại đầy đủ 13 lần tinh chỉnh (Iteration), thể hiện năng lực điều phối, phát hiện lỗi và sửa lỗi AI bài bản.

---

## 📂 Cấu Trúc Mã Nguồn (Modular Architecture)

```text
Kien_HaVan_125000399/
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design System: Hệ biến :root toàn cục
│   │   ├── base.css           # Reset CSS, Typography Roboto, Ambient light, Scroll Animation
│   │   ├── layout.css         # Khung lưới container, Header sticky, Nav, Footer
│   │   ├── components.css     # Buttons, Badges, Tags, Form inputs, Checkbox Drawer, FAB
│   │   ├── sections.css       # Bố cục Hero, Stats, About, Team 3D Card, Projects, FAQ, Contact
│   │   └── responsive.css     # 3 mốc Breakpoint: 1024px, 768px, 480px (Guard chống tràn chữ)
│   └── images/                # Bộ ảnh chân dung & ảnh dự án chuẩn web-safe kebab-case
├── image/                     # Thư mục ảnh gốc lưu trữ nguồn tài nguyên
├── index.html                 # Tệp giao diện chính (Semantic HTML5 - Cascade Modular CSS)
├── PROMPT_LOG.md              # Nhật ký Prompt Engineering (Vibe Coding chuẩn barem LHU)
└── README.md                  # Tài liệu hướng dẫn & Báo cáo tổng kết dự án
```

---

## 👥 Danh Sách Giảng Viên & 9 Thành Viên ADLEY Team

- 👨‍🏫 **Thầy Bùi Xuân Cảnh** - *Giảng Viên Hướng Dẫn Học Phần Thiết Kế Web*
1. **Hà Văn Kiên (Leader)** - Lớp: `25CT111` - *Tech Lead & System Architect*
2. **Hoàng Minh Phát** - Lớp: `25CT111` - *UI/UX Specialist & Animations*
3. **Nguyễn Đinh Khánh Trang** - Lớp: `25EC111` - *Creative Director & Brand Strategist*
4. **Đặng Thị Tố Ngân** - Lớp: `24MC112` - *Product Designer & Accessibility Expert*
5. **Nguyễn Hoàng Anh** - Lớp: `CT111` - *Semantic HTML5 & Clean DOM Engineer*
6. **Ngô Võ Nam** - Lớp: `25CT111` - *Layout Architect & CSS Grid Master*
7. **Phan Văn Trận** - Lớp: `23EC111` - *QA & Cross-Browser Compatibility Specialist*
8. **Trần Hoài Phương** - Lớp: `25MC111` - *Visual Media & Image Optimizer*
9. **Trần Quang Huy** - Lớp: `25CT111` - *Git Coordinator & Prompt Log Auditor*

---

## 🛠️ Công Nghệ Sử Dụng

- **Ngôn ngữ:** HTML5, CSS3.
- **Cam kết:** **0% JavaScript (Không dùng `<script>`, không inline event handler).**
- **Thư viện hiệu ứng:** Animate.css (CDN), W3C Native Scroll-Driven Animations.
- **Font chữ:** Google Fonts (Roboto & Roboto Mono).
- **Hosting:** GitHub Pages.
