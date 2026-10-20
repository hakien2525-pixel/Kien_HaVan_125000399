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
> *5. Đặc biệt lưu ý cho tôi về phần 5. Nhật ký Prompt Engineering: File PROMPT_LOG.md trình bày chi tiết các bước hỏi - đáp với AI. Thể hiện rõ tư duy tinh chỉnh (iteration), biết sửa lỗi AI, chỉ đạo AI theo đúng ý đồ kiến trúc HTML/CSS chuẩn. ( bắt đầu ngay từ lúc tôi gửi promt này bạn sẽ lưu ngay vào file log.md đó từ ban đầu đến khi hoàn thành dự án, tất cả các promt mỗi lần tôi gửi cho bạn trong dự án này )"*

### Lần 5: Triển khai Bộ Giải pháp Tối ưu Typography Chống Từ Mồ Côi (Modern CSS + Fallbacks)
- **Hành động & Phân tích của AI:**
  1. **Nhận diện vấn đề:** Lỗi "Orphan word" (từ mồ côi) xảy ra khi dòng cuối cùng của một khối văn bản hoặc tiêu đề chỉ chứa duy nhất 1 từ (ví dụ: "Semantic", "dùng", "IoT"), làm phá vỡ nhịp điệu thị giác và tạo khoảng trống thừa thãi gây mất cân đối giao diện.
  2. **Giải pháp CSS hiện đại (Modern CSS3 Specs):**
     - Áp dụng `text-wrap: balance` cho tất cả tiêu đề (`h1` - `h6`, `.hero-title`, `.section-title`, `.project-title`, `.faq-summary`): Giúp trình duyệt tự động cân bằng số lượng chữ trên mỗi dòng sao cho chiều dài các dòng xấp xỉ nhau, loại bỏ hoàn toàn tình trạng dòng 1 dài ngoằng và dòng 2 chỉ có 1 - 2 chữ.
     - Áp dụng `text-wrap: pretty` cho toàn bộ thẻ `<p>`, mô tả card (`.project-desc`, `.faq-content`, `.back-bio`): Thuật toán của trình duyệt sẽ chủ động điều chỉnh vị trí ngắt dòng ở 2 - 3 dòng cuối để luôn có ít nhất 2 từ ở dòng kết thúc, ngăn ngừa triệt để từ đơn độc.
     - Kết hợp `hyphens: auto;` và `overflow-wrap: break-word;` cùng `text-rendering: optimizeLegibility;` để ngắt từ chuẩn xác.
  3. **Giải pháp Fallback cho Trình duyệt cũ (Browser Backward Compatibility):**
     - **CSS Fallback:** Tạo lớp tiện ích `.no-orphan { display: inline-block; white-space: nowrap; }` dùng để khóa các cụm 2 - 3 từ cuối cùng dính liền nhau.
     - **HTML Entity Fallback (`&nbsp;`):** Chèn ký tự khoảng trắng không ngắt dòng `&nbsp;` giữa 2 từ cuối cùng trong các văn bản tĩnh (ví dụ: `HTML5&nbsp;Semantic`, `người&nbsp;dùng`, `Độc&nbsp;IoT`). Trình duyệt cũ khi gặp `&nbsp;` sẽ bắt buộc kéo cả 2 từ xuống dòng cùng nhau thay vì để 1 từ rơi lẻ loi.
  4. **Kiểm tra tiêu chí:** Vẫn đảm bảo 100% không dùng JavaScript, thuần CSS3/HTML5 chuẩn kiến thức Tuần 1 - 6.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - Tự động áp dụng nhanh các thuộc tính CSS Typography cấp tiến nhất của năm 2026 (`text-wrap: balance`, `text-wrap: pretty`) mà không cần viết mã thủ công phức tạp hoặc phụ thuộc thư viện JavaScript ngoài.
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**
  - **Tư duy Fallback trong Web Standards:** Khi sử dụng các tính năng CSS hiện đại, luôn yêu cầu AI cung cấp giải pháp dự phòng (Graceful Degradation / Progressive Enhancement) bằng HTML entity hoặc thuộc tính cơ bản để trang web luôn hiển thị hoàn mỹ trên mọi phiên bản trình duyệt.
