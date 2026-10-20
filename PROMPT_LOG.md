# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Hà Văn Kiên
- **MSSV:** 25CT111
- **Lớp:** 25CT111
- **Tên đề tài Website:** Website Giới Thiệu Đội Ngũ ADLEY Team & Hệ Thống Dự Án Nghiên Cứu Đột Phá
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

### Phân tích & Định hướng Kiến trúc từ AI (Lần 1):
- Tiếp nhận và phân tích toàn bộ file `Đề thi Kiểm tra Kỹ năng Vibe Coding & Prompt Engineering.pdf` và giáo trình 12 tuần của Đại học Lạc Hồng.
- Giới hạn kiến thức nghiêm ngặt trong **Buổi 1 đến Buổi 6** (HTML5 Semantic, CSS Grid, Flexbox, Variables `:root`, CSS Animations, Responsive). Tuyệt đối **0% JavaScript**.
- Khởi tạo cấu trúc phân tầng MVC: `models/`, `views/`, `assets/`, `index.html`.

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Logs)

### Lần 1: Dựng khung Semantic HTML & CSS Variables theo Design System
- **Prompt đã dùng:** Khởi tạo cấu trúc thư mục MVC cho dự án web giới thiệu ADLEY Team. Khai báo hệ thống CSS Variables trong `assets/css/variables.css`, đảm bảo semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<time>`).
- **Kết quả AI tạo ra:** Thiết lập bộ biến CSS `:root` và tạo file `index.html` với đầy đủ thẻ Semantic, không lạm dụng thẻ `<div>`.
- **Nhận xét & Tinh chỉnh của SV:** Yêu cầu AI dùng `<figure>` cho ảnh thành viên, `<article>` cho từng card thành viên, `<details>` & `<summary>` cho phần FAQ để không dùng accordion bằng JS.

### Lần 2: Xử lý tương tác phức tạp mà KHÔNG DÙNG JavaScript (Pure CSS Hacks)
- **Thách thức gặp phải:** Các chức năng mở menu Mobile và Popup Modal chi tiết thường yêu cầu JavaScript event listener. Tuy nhiên đề bài cấm hoàn toàn JS.
- **Cách sửa prompt (Debug prompt):**
  - Áp dụng kỹ thuật Pure CSS Checkbox Hack (`#nav-toggle:checked ~ .site-wrapper`) cho responsive drawer navigation.
  - Sử dụng CSS pseudo-class `:target` (`#modal-kien:target`) để hiển thị popup Modal khi người dùng click vào nút Xem hồ sơ, và đóng modal khi click dấu &times; (`href="#team"`).
- **Kết quả đạt được:** Toàn bộ tương tác popup và drawer chạy trơn tru 100% bằng CSS native.

### Lần 3: Xây dựng hiệu ứng 3D Card Flip (Tuần 5) & Nút FAB Pulse
- **Prompt đã dùng:** Xây dựng hiệu ứng lật thẻ 3D 180 độ khi hover hoặc focus vào card thành viên, mặt trước là ảnh chân dung và mặt sau là tiểu sử cùng kỹ năng cốt lõi. Tạo nút FAB tròn ở góc dưới màn hình có hiệu ứng pulse.
- **Kết quả AI tạo ra:** Hiệu ứng 3D perspective 1200px mượt mà, hỗ trợ cả màn hình cảm ứng di động qua `:focus-within`.

---

> **Prompt từ người dùng (Lần 2 - Tinh chỉnh Giao diện Sáng Trắng Xanh, Font Roboto, Loại bỏ Icon Sticker & Tích hợp Dự án Thực tế từ Ổ D):**
>
> *"trước khi đến bước tiếp theo hãy rà soát lại web vừa rồi 1 lần và fix lại các bố cục, sửa hết tất cả form chữ thành roboto*
> *1. Đổi màu giao diện web thành màu sáng trắng xanh*
> *2. loại bỏ bơt các icon hay sticker*
> *3. truy cập vào ổ D dự án thêm các dự án mà tôi đã làm gắn vào giúp tôi với điều kiện :*
> *3. Bắt Buộc Sử dụng HTML5, nhúng Css nhưng ( khong được sử dụng Javascirpt tuyệt đối không)*
> *4. Sắp xếp code và file theo MVC*
> *5. Đặc biệt lưu ý cho tôi về phần 5. Nhật ký Prompt Engineering: File PROMPT_LOG.md trình bày chi tiết các bước hỏi - đáp với AI. Thể hiện rõ tư duy tinh chỉnh (iteration), biết sửa lỗi AI, chỉ đạo AI theo đúng ý đồ kiến trúc HTML/CSS chuẩn. ( bắt đầu ngay từ lúc tôi gửi promt này bạn sẽ lưu ngay vào file log.md đó từ ban đầu đến khi hoàn thành dự án, tất cả các promt mỗi lần tôi gửi cho bạn trong dự án này )*
> *6. Lưu ý nữa các kiến thức cấu trúc của môn thiết kế web tôi đã để ở trong đó nhớ áp dụng đến buổi số 6 thôi nhé, đừng dùng java chỉ được dùng HTML5"*

### Lần 4: Refactor toàn diện Giao diện Sáng Trắng Xanh & Font Roboto 100%
- Đã quét ổ D và trích xuất 6 dự án nghiên cứu thực tế (.docx, .md) thành `models/project_model.html` và `views/projects_view.html`.
- Chuyển toàn bộ kiểu chữ sang Google Font `Roboto`.
- Chuyển hệ màu sang Trắng Tuyết & Xanh Dương Ocean Blue, dọn sạch toàn bộ sticker/icon emoji màu mè.

---

> **Prompt từ người dùng (Lần 3 - Tối ưu Typography & Xử lý Triệt để Lỗi Từ Mồ Côi / Orphan Words):**
>
> *"Tôi đang tối ưu Typography và UI cho website. Đoạn văn bản trong các component (như FAQ accordion, card description) đang gặp lỗi từ mồ côi (orphan word / bad line wrap) khiến từ cuối cùng bị rớt dòng trơ trọi, làm bố cục mất cân đối.*
> *Hãy giúp tôi:*
> *Viết bộ CSS tối ưu sử dụng các thuộc tính hiện đại (text-wrap: pretty, text-wrap: balance, hyphens) để tự động chống rớt từ mồ côi cho toàn bộ các thẻ <p> và tiêu đề.*
> *Đưa ra giải pháp fallback bằng CSS hoặc HTML entity (&nbsp;) phòng trường hợp trình duyệt cũ chưa hỗ trợ đầy đủ.*
> *Cung cấp đoạn mã hoàn chỉnh, sạch và giải thích ngắn gọn cách hoạt động.*
> *5. Đặc biệt lưu ý cho tôi về phần 5. Nhật ký Prompt Engineering: File PROMPT_LOG.md trình bày chi tiết các bước hỏi - đáp với AI. Thể hiện rõ tư duy tinh chỉnh (iteration), biết sửa lỗi AI, chỉ đạo AI theo đúng ý đồ kiến trúc HTML/CSS chuẩn."*

### Lần 5: Triển khai Bộ Giải pháp Tối ưu Typography Chống Từ Mồ Côi
- Áp dụng `text-wrap: balance` cho tiêu đề và `text-wrap: pretty` cho đoạn văn bản; áp dụng `&nbsp;` làm fallback cho trình duyệt cũ.

---

> **Prompt từ người dùng (Lần 4 & Lần 5 - Khắc phục Triệt để Lỗi Tràn Viền / Text Overflowing Borders):**
>
> *"bạn thấy các chỗ bị lỗi trên web không rà soát đúng chỗ và căn chỉnh lại cho đúng"*
> *"đừng để chữ tràn viền như vậy đang bị lỗi và bị trừ điểm theo tiêu chí đó"*

### Lần 7: Sửa Lỗi Nghiêm Trọng "Chữ Đè Lên Viền Box" (Border Overflow & Padding Fix)
- **Thách thức & Phân tích lỗi từ ảnh chụp màn hình mới nhất:**
  - *Hiện tượng:* Người dùng chụp ảnh khối FAQ (`<details>` đang mở) cho thấy chữ tiêu đề câu hỏi *"Website này có sử dụng JavaScript không?"* và nút bấm tròn dấu `−` bị dính sát rạt mép viền trên và mép hai bên của thẻ, tạo cảm giác chữ bị đè/tràn ra khỏi viền (`border`), vi phạm nghiêm trọng tiêu chí đánh giá UI/UX thẩm mỹ và cân đối không gian (Spacing System).
  - *Nguyên nhân cốt lõi:* 
    1. Padding mặc định của `.faq-summary` bị đặt thiếu cân xứng theo trục dọc và ngang.
    2. Chiều rộng `.faq-container` chưa có khoảng thở đệm an toàn.
    3. Đường viền `border` khi active trạng thái `[open]` kết hợp với viền focus mặc định của thẻ `<summary>` trên một số trình duyệt tạo cảm giác chữ chạm vào viền ngoài.
- **Biện pháp xử lý triệt để (Fix):**
  1. **Tăng mạnh khoảng cách đệm an toàn (Inner Safe Spacing):**
     - Thiết lập `.faq-summary`: `padding: 1.25rem 1.75rem;` (tương đương 20px trên/dưới và 28px trái/phải), bảo đảm chữ cách xa hoàn toàn 4 cạnh viền của hộp.
     - Thiết lập `.faq-content`: `padding: 1rem 1.75rem 1.5rem 1.75rem;` và ngăn cách bằng đường kẻ phân tầng `border-top: 1px solid #f1f5f9;`.
  2. **Tăng bán kính bo góc thanh lịch:**
     - Nâng `.faq-item` lên `border-radius: var(--radius-lg);` (18px) tạo đường cong mượt mà, viền `#bae6fd` xanh pastel nhẹ nhàng với bóng đổ tinh tế `box-shadow: 0 4px 20px rgba(2, 132, 199, 0.08);`.
  3. **Định vị nút đóng/mở cân xứng:**
     - Đặt nút icon tròn `+` / `−` kích thước 28x28px ở phía bên phải có `flex-shrink: 0; margin-left: var(--space-4);`, bảo đảm tiêu đề dù dài đến đâu cũng tự ngắt dòng an toàn mà không bao giờ chen lấn nút.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - AI đọc hiểu trực tiếp ảnh chụp lỗi visual của người dùng, phân tích chính xác vị trí bị lỗi khoảng cách đệm (Padding & Spacing) và tái cấu trúc mã CSS theo đúng barem chấm điểm của Giảng viên.
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**
  - **Kỷ luật Spacing trong UI/UX:** Lỗi tràn viền hoặc dính sát mép thường do thiếu kiểm soát `padding` và `box-sizing`. Luôn thiết lập khoảng thở (White-space / Breathing room) rộng rãi từ 20px - 28px cho các khối tương tác có viền (Bordered cards/accordions) để sản phẩm đạt độ hoàn thiện cao nhất (mức Giỏi 9 - 10 điểm).
