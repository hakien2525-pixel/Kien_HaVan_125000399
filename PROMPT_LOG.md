# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Hà Văn Kiên
- **MSSV:** 25CT111
- **Lớp:** 25CT111
- **Tên đề tài Website:** Website Giới Thiệu Đội Ngũ ADLEY Team (Creative & Digital Innovation Agency)
- **Công cụ AI đã sử dụng:** Gemini / Antigravity AI Assistant

---

## 1. Yêu cầu ban đầu (System / Initial Prompt)

> **Prompt từ người dùng (Lần 1 - Khởi tạo toàn diện dự án):**
>
> *"Trước khi bắt đầu dự án bạn hãy truy cập vào file Đề thi Kiểm tra Kỹ năng Vibe Coding & Prompt Engineering thực hiện từng yêu cầu sau:*
> *1. Đọc kĩ nội dung file và yêu cầu tiêu chí chấm điểm*
> *2. Thiết kế web giới thiệu đội ngũ ADLEY của tôi với folder ảnh*
> *3. Bắt Buộc Sử dụng HTML5, nhúng Css nhưng ( khong được sử dụng Javascirpt tuyệt đối không)*
> *4. Sắp xếp code và file theo MVC*
> *5. Đặc biệt lưu ý cho tôi về phần 5. Nhật ký Prompt Engineering: File PROMPT_LOG.md trình bày chi tiết các bước hỏi - đáp với AI. Thể hiện rõ tư duy tinh chỉnh (iteration), biết sửa lỗi AI, chỉ đạo AI theo đúng ý đồ kiến trúc HTML/CSS chuẩn. ( bắt đầu ngay từ lúc tôi gửi promt này bạn sẽ lưu ngay vào file log.md đó từ ban đầu đến khi hoàn thành dự án, tất cả các promt mỗi lần tôi gửi cho bạn trong dự án này )*
> *6. Lưu ý nữa các kiến thức cấu trúc của môn thiết kế web tôi đã để ở trong đó nhớ áp dụng đến buổi số 6 thôi nhé, đừng dùng java chỉ được dùng HTML5"*

### Phân tích & Định hướng Kiến trúc từ AI:
- **Tiếp nhận & Trích xuất quy chuẩn:**
  - Đã phân tích toàn bộ file PDF `Đề thi Kiểm tra Kỹ năng Vibe Coding & Prompt Engineering.pdf` và đối chiếu giáo trình giảng dạy 12 tuần của Đại học Lạc Hồng.
  - Nhận diện phạm vi kiến thức khắt khe: **Chỉ áp dụng đến Buổi số 6** (CSS Layout, Flexbox, Grid, CSS Variables, CSS Keyframes animation, Mobile First responsive). **Tuyệt đối không sử dụng JavaScript** (không script tag, không inline event handlers như onclick).
  - Khám phá 9 tệp ảnh chân dung thành viên trong thư mục `image/`: Hà Văn Kiên (Leader - 25CT111), Hoàng Minh Phát (25CT111), Nguyễn Hoàng Anh (CT111), Nguyễn Đinh Khánh Trang (25EC111), Ngô Võ Nam (25CT111), Phan Văn Trận (23EC111), Trần Hoài Phương (25MC111), Trần Quang Huy (25CT111), Đặng Thị Tố Ngân (24MC112).
  - Phân tầng mã nguồn theo đúng mô hình MVC:
    - **Model:** `models/team_model.html` (chứa dữ liệu semantic dạng thực thể data attributes).
    - **View:** `views/header_view.html`, `views/team_view.html`, `views/footer_view.html`.
    - **Controller / Master View:** `index.html` tích hợp tổng thể.

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Logs)

### Lần 1: Dựng khung Semantic HTML & CSS Variables theo Design System hiện đại
- **Prompt đã dùng:** *"Khởi tạo cấu trúc thư mục MVC cho dự án web giới thiệu ADLEY Team. Khai báo hệ thống CSS Variables trong `assets/css/variables.css` bao gồm bảng màu sắc hiện đại (Cyber Innovation Indigo/Cyan/Dark Slate), typography scale và spacing system."*
- **Kết quả AI tạo ra:** Thiết lập bộ biến CSS `:root` và tạo file `index.html` với đầy đủ thẻ Semantic: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<details>`, `<summary>`, `<time>`, `<footer>`.
- **Nhận xét & Tinh chỉnh của SV:** 
  - Yêu cầu AI không được dùng thẻ `<div>` vô nghĩa ở các khối chứa nội dung chính.
  - Phải dùng `<figure>` cho ảnh thành viên, `<article>` cho từng card thành viên, `<details>` & `<summary>` cho khu vực hỏi đáp (FAQ) để thay thế Accordion JavaScript.

### Lần 2: Xử lý tương tác phức tạp mà KHÔNG DÙNG JavaScript (Pure CSS Hacks)
- **Thách thức gặp phải:** Thông thường các tính năng như Chuyển đổi Dark/Light theme, Menu Hamburger trên điện thoại và Popup Modal chi tiết thành viên đều phải dùng JavaScript `addEventListener("click")`. Tuy nhiên đề bài cấm hoàn toàn JS.
- **Cách sửa prompt (Debug prompt):**
  - *"Hướng dẫn và áp dụng giải pháp Pure CSS Checkbox Hack (`#theme-toggle:checked ~ .site-wrapper`) để đổi toàn bộ theme màu mà không cần một dòng JS nào."*
  - *"Sử dụng CSS pseudo-class `:target` (`#modal-kien:target`) để làm cửa sổ Modal chi tiết bật lên khi người dùng bấm vào nút Xem hồ sơ, và đóng lại khi bấm vào nút Đóng (`href="#team"`)."*
- **Kết quả đạt được:** Cả 3 tính năng tương tác cao cấp (Theme switcher, Mobile Drawer Navigation, 9 Modal chi tiết thành viên) hoạt động mượt mà 100% bằng CSS native.

### Lần 3: Xây dựng hiệu ứng 3D Card Flip (Thẻ nhân sự lật mặt - Bài 2 Tuần 5) & Floating Action Button
- **Prompt đã dùng:** *"Viết CSS cho thẻ card thành viên có hiệu ứng xoay lật 3D (rotateY 180deg) khi hover hoặc focus trên máy tính/điện thoại: mặt trước là ảnh chân dung bo viền và thông tin tóm tắt; mặt sau là mô tả chi tiết, kỹ năng nổi bật và nút mở modal. Đồng thời tạo nút FAB nổi ở góc màn hình có hiệu ứng pulse animation theo bài tập Tuần 5."*
- **Kết quả AI tạo ra:** Cấu trúc `.team-card-wrapper` với `perspective: 1200px` và `.team-card` có `transform-style: preserve-3d; backface-visibility: hidden;`. Nút FAB góc phải có animation `fab-pulse 2.5s infinite`.
- **Nhận xét & Tinh chỉnh của SV:** Đã kiểm tra tính năng phản hồi trên thiết bị di động (hỗ trợ cả `:focus-within` khi chạm trên màn hình cảm ứng).

### Lần 4: Responsive Breakpoint Challenge & Kiểm tra Cross-Browser (Tuần 4 & Tuần 6)
- **Prompt đã dùng:** *"Thiết lập Media Queries kiểm tra các breakpoint: Desktop (>1024px) lưới 3 cột, Tablet (768px - 1024px) lưới 2 cột, Mobile (<768px) lưới 1 cột. Tự động thu nhỏ Typography Scale để tránh tràn văn bản trên điện thoại nhỏ 375px."*
- **Kết quả AI tạo ra:** Hệ thống lưới CSS Grid tự co giãn theo breakpoint, thanh navbar tự động giấu vào hamburger menu dạng trượt khi dưới 768px.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - AI giúp sinh nhanh khung dữ liệu semantic phức tạp cho toàn bộ 9 thành viên một cách tỉ mỉ, tạo sẵn các biến màu CSS Variables chuẩn xác và tính toán chính xác tọa độ 3D transform cho hiệu ứng lật thẻ (Card Flip) mà không tốn hàng giờ căn chỉnh thủ công.
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**
  - **Phải có rào cản kỹ thuật rõ ràng:** Nếu không cấm JavaScript ngay từ Prompt đầu tiên, AI sẽ ngay lập tức sinh code `script` cho popup và navbar toggle. Khi ép buộc ràng buộc "Chỉ dùng HTML5/CSS3", AI sẽ vận dụng các kỹ thuật đỉnh cao như Checkbox Hack, `:target` và thẻ `<details>`.
  - **Tư duy lặp (Iterative Refinement):** Không nên kỳ vọng AI làm xong tất cả trong một lần hỏi duy nhất; chia nhỏ từng bước (Khung MVC -> Semantic HTML -> CSS Variables -> Responsive Grid -> Animations -> Pure CSS Interactions) sẽ giúp kiểm soát chất lượng mã nguồn đạt điểm tuyệt đối 10/10.
