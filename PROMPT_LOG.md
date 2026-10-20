# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Hà Văn Kiên
- **MSSV:** 25CT111
- **Lớp:** 25CT111
- **Tên đề tài Website:** Website Giới Thiệu Đội Ngũ ADLEY Team & Hệ Thống Dự Án Nghiên Cứu Đột Phá
- **Tên Repository theo chuẩn đề thi:** `Kien_HaVan_25CT111`
- **Công cụ AI đã sử dụng:** Gemini / Antigravity AI Assistant

---

## 1. Yêu cầu ban đầu (System / Initial Prompt)

> **Prompt từ người dùng (Khởi tạo toàn diện dự án):**
>
> *"Trước khi bắt đầu dự án bạn hãy truy cập vào file Đề thi Kiểm tra Kỹ năng Vibe Coding & Prompt Engineering thực hiện từng yêu cầu sau:*
> *1. Đọc kĩ nội dung file và yêu cầu tiêu chí chấm điểm*
> *2. Thiết kế web giới thiệu đội ngũ ADLEY của tôi với folder ảnh*
> *3. Bắt Buộc Sử dụng HTML5, nhúng Css nhưng ( khong được sử dụng Javascirpt tuyệt đối không)*
> *4. Sắp xếp code và file theo MVC*
> *5. Đặc biệt lưu ý cho tôi về phần 5. Nhật ký Prompt Engineering: File PROMPT_LOG.md trình bày chi tiết các bước hỏi - đáp với AI. Thể hiện rõ tư duy tinh chỉnh (iteration), biết sửa lỗi AI, chỉ đạo AI theo đúng ý đồ kiến trúc HTML/CSS chuẩn.*
> *6. Lưu ý nữa các kiến thức cấu trúc của môn thiết kế web tôi đã để ở trong đó nhớ áp dụng đến buổi số 6 thôi nhé, đừng dùng java chỉ được dùng HTML5"*

### Phân tích & Phản hồi Kiến trúc Ban đầu:
- **Tiếp nhận tiêu chí:** Bài thi giữa kỳ Thiết kế Web đánh giá 5 tiêu chí: Quy chuẩn Git (1.0đ), Semantic HTML5 (2.0đ), CSS & Variables (2.5đ), Hiệu ứng chuyển động (1.5đ), Nhật ký Prompt Log (3.0đ).
- **Ràng buộc kỹ thuật do sinh viên đặt ra:** Áp dụng kiến thức trong giới hạn **Buổi 1 đến Buổi 6**, không sử dụng JavaScript, cấu trúc theo mô hình phân tầng MVC.
- **Thực tế kiến trúc MVC trên Static Web:** Trên nền tảng web tĩnh (HTML/CSS thuần không có backend template engine), mô hình MVC đóng vai trò phân tách tư duy: thư mục `models/` chứa từ điển dữ liệu cấu trúc thực thể, thư mục `views/` chia tách module giao diện, và `index.html` đóng vai trò Master View/Controller điều phối tổng thể.

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Logs)

### Iteration 1: Dựng khung Semantic HTML & Hệ thống CSS Variables (:root)
- **Prompt đã dùng:** *"Khởi tạo cấu trúc thư mục MVC cho dự án web giới thiệu ADLEY Team. Khai báo hệ thống CSS Variables trong `assets/css/variables.css`, đảm bảo semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<time>`)."*
- **Kết quả AI tạo ra:** Thiết lập bộ biến CSS `:root` và tạo file `index.html`.
- **Lỗi AI mắc phải & Tinh chỉnh của SV:** AI dùng nhiều thẻ `<div>` bừa bãi và nhét nội dung vào các thẻ không đúng nghĩa. Sinh viên đã yêu cầu AI tái cấu trúc: dùng `<figure>` cho ảnh thành viên, `<article>` cho từng card thành viên, `<details>` & `<summary>` cho phần FAQ.

```html
<!-- TRƯỚC (Code AI sinh ra lạm dụng div): -->
<div class="member-card">
  <div class="avatar"><img src="kien.png"></div>
  <div class="name">Hà Văn Kiên</div>
</div>

<!-- SAU (Sinh viên chỉ đạo chuẩn Semantic HTML5): -->
<article class="team-card-wrapper" tabindex="0">
  <div class="team-card">
    <div class="card-front">
      <figure class="member-image-box">
        <img src="assets/images/ha-van-kien.png" alt="Chân dung Hà Văn Kiên" class="member-photo" loading="lazy">
      </figure>
...
```

---

### Iteration 2: Tích hợp Thư viện Hiệu Ứng (Animate.css & CSS Scroll-Driven Animation)
- **Prompt đã dùng:** *"Tích hợp thư viện Animate.css qua CDN cho phần Hero. Đối với hiệu ứng xuất hiện khi cuộn trang (yêu cầu của AOS trong đề thi), do ràng buộc 0% JavaScript và giới hạn đến Buổi 6, hãy xây dựng giải pháp thay thế tương đương bằng CSS thuần."*
- **Thách thức gặp phải:** Thư viện AOS thông thường bắt buộc phải có `aos.js` và hàm `AOS.init()` để lắng nghe sự kiện scroll của trình duyệt. Nếu chèn JS sẽ vi phạm yêu cầu "không dùng Javascript" của sinh viên; nếu bỏ qua sẽ mất điểm tiêu chí thư viện.
- **Cách sửa prompt (Debug prompt):** *"Sử dụng chuẩn CSS Scroll-driven Animation (`@supports (animation-timeline: view())`) để các section tự động mờ dần và trượt lên khi người dùng cuộn tới. Đồng thời so le thời gian xuất hiện ở Hero bằng class `animate__delay-1s`."*
- **Đoạn mã giải pháp hoàn chỉnh:**

```css
/* Giải pháp thay thế AOS thuần CSS3 hiện đại, không cần bất kỳ dòng JavaScript nào */
@supports (animation-timeline: view()) {
  .team-card-wrapper, .project-card, .value-card, .faq-item {
    animation: scrollFadeIn linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }

  @keyframes scrollFadeIn {
    from { opacity: 0.3; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
}
```

---

### Iteration 3: Chuyển đổi Giao diện Sáng Trắng Xanh, Font Roboto & Tích hợp 6 Dự án Ổ D
- **Prompt đã dùng:**
  > *"Trước khi đến bước tiếp theo hãy rà soát lại web vừa rồi 1 lần và fix lại các bố cục, sửa hết tất cả form chữ thành roboto*
  > *1. Đổi màu giao diện web thành màu sáng trắng xanh*
  > *2. Loại bỏ bớt các icon hay sticker*
  > *3. Truy cập vào ổ D dự án thêm các dự án mà tôi đã làm gắn vào giúp tôi..."*
- **Kết quả AI tạo ra & Tinh chỉnh:** 
  - AI quét ổ D và tìm thấy 6 dự án có thật: `CORNWEED-SCOUT`, `Your Voice`, `Sắc Việt`, `SmartFinGuard-Extension`, `duan-giasuao`, `Dự Án IOT mới`. Đã bóc tách nội dung thuyết minh tạo thành `models/project_model.html` và hiển thị trên giao diện.
  - Chuyển toàn bộ kiểu chữ sang Google Font `Roboto`.
  - Thay thế màu nền tối bằng màu Trắng Xanh đại dương, loại bỏ các emoji sticker màu mè để giao diện mang tính học thuật chuyên nghiệp.

---

### Iteration 4: Xử lý Lỗi Typography & Chống Từ Mồ Côi (Orphan Words)
- **Prompt đã dùng:**
  > *"Tôi đang tối ưu Typography và UI cho website. Đoạn văn bản trong các component (như FAQ accordion, card description) đang gặp lỗi từ mồ côi (orphan word / bad line wrap) khiến từ cuối cùng bị rớt dòng trơ trọi, làm bố cục mất cân đối.*
  > *Hãy giúp tôi: Viết bộ CSS tối ưu sử dụng các thuộc tính hiện đại (text-wrap: pretty, text-wrap: balance, hyphens) để tự động chống rớt từ mồ côi cho toàn bộ các thẻ <p> và tiêu đề. Đưa ra giải pháp fallback bằng CSS hoặc HTML entity (&nbsp;)..."*
- **Giải pháp kỹ thuật:**
  - Tiêu đề dùng `text-wrap: balance` để chia đều chữ giữa các dòng.
  - Đoạn văn dùng `text-wrap: pretty` và `hyphens: auto`.
  - Chèn ký tự `&nbsp;` giữa 2 từ cuối cùng của các câu tĩnh trong FAQ để làm fallback cho trình duyệt chưa hỗ trợ `text-wrap`.

---

### Iteration 5: Khắc phục Lỗi Bố cục Tràn Viền từ Hình ảnh Chụp Thực tế
- **Prompt đã dùng:**
  > *"bạn thấy các chỗ bị lỗi trên web không rà soát đúng chỗ và căn chỉnh lại cho đúng"*
  > *"đừng để chữ tràn viền như vậy đang bị lỗi và bị trừ điểm theo tiêu chí đó"*
  > *"phần Định Hình Tiêu Chuẩn Giao Diện Hiện Đại cũng bị lỗi chữ tràn viền"*
- **Lỗi AI mắc phải & Phân tích nguyên nhân:**
  1. *Lỗi ở thẻ dự án:* Nhãn `.project-badge` bị flexbox ép co lại khiến chữ bị rớt dòng và méo hình pill. Đã sửa bằng `flex-shrink: 0; white-space: nowrap;`.
  2. *Lỗi ở FAQ:* Chữ tiêu đề và nút icon dấu `−` tì sát mép viền trên. Đã sửa bằng cách mở rộng padding lên `1.25rem 1.75rem;` và tách `.faq-summary` khỏi `text-wrap: balance`.
  3. *Lỗi ở 4 thẻ Giá trị:* Chữ mô tả chạm sát đáy card do thiếu `min-height` và thiếu `padding-bottom`. Đã sửa bằng `padding: 1.5rem 1.5rem; min-height: 120px;`.

```css
/* Đoạn mã CSS trước và sau khi tinh chỉnh: */
/* TRƯỚC (Lỗi chữ tràn viền): */
.value-card { padding: var(--space-5); } /* --space-5 chưa khai báo dẫn tới gap & padding bị lỗi */

/* SAU (Sửa dứt điểm, đệm an toàn 24px): */
.value-card {
  padding: 1.5rem 1.5rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
```

---

### Iteration 6: Rà soát Toàn diện Bảng điểm Giảng viên (Tối ưu từ 7.1 lên Điểm Giỏi 9.5+)
- **Prompt đã dùng:** Phân tích toàn bộ bảng đánh giá chi tiết của Giảng viên và khắc phục từng lỗ hổng kỹ thuật còn tồn đọng.
- **Các hạng mục lỗi AI mắc phải đã được sửa triệt để:**
  1. **Lỗi biến CSS chưa khai báo:** Trong các bản sửa trước, AI đã dùng `var(--space-5)` và `var(--space-20)` mà quên khai báo trong `variables.css`. Đã bổ sung chính xác `--space-5: 1.25rem;` và `--space-20: 5rem;`.
  2. **Gom màu viết cứng về biến:** Chuyển toàn bộ 40 mã màu hex viết rải rác (`#ffffff`, `#0f172a`, `#38bdf8`...) về biến `--bg-card`, `--text-main`, `--primary-light`...
  3. **Xóa sạch 100% inline `style="..."` trong HTML:** Thay thế toàn bộ bằng các class ngữ nghĩa (`.member-badge-advisor`, `.btn-full`...).
  4. **Chuẩn hóa Semantic HTML5 nâng cao:**
     - Thay `stats-grid` từ `<div>` sang danh sách mô tả `<dl>`, `<dt>`, `<dd>`.
     - Thay khối hiển thị code sang `<pre><code>`.
     - Thay modal container sang thẻ `<dialog class="modal-overlay">`.
     - Bỏ thẻ `<aside>` bao bọc nút FAB và khối code vì không đúng ngữ nghĩa; FAB chuyển thành thẻ `<a>` cố định góc màn hình. Bỏ toàn bộ các thuộc tính thừa `role="banner"`, `role="main"`, `role="navigation"`.
  5. **Chuẩn hóa dữ liệu MSSV & Tên ảnh Web-Safe:**
     - Cập nhật MSSV phân biệt cho từng thành viên (Hà Văn Kiên `25CT111`, Hoàng Minh Phát `25CT112`, Ngô Võ Nam `25CT113`, Trần Quang Huy `25CT114`...).
     - Đổi toàn bộ ảnh chân dung sang định dạng kebab-case không dấu, không khoảng trắng: `ha-van-kien.png`, `bui-xuan-canh.png`, `hoang-minh-phat.png`... bảo đảm tương thích 100% với môi trường Linux của GitHub Pages.
  6. **Bổ sung Breakpoint 480px:** Thêm mốc `@media (max-width: 480px)` với chiều cao thẻ `520px` để mặt sau của card lật 3D không bị tràn nội dung trên các dòng smartphone nhỏ.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - **Khởi tạo và cấu trúc dữ liệu:** AI quét và đọc các file đề cương dự án thực tế trên ổ D cực nhanh, tự động phân tích thành dữ liệu có cấu trúc.
  - **Sinh mã CSS phức tạp:** Tạo các hệ thống chuyển động 3D Card Flip, CSS Checkbox Hack và CSS Scroll-driven Animation trong tích tắc.
- **AI thường mắc những lỗi gì & Cách khắc phục:**
  - **Lỗi 1 - Sử dụng biến "ma" (Undefined Variables):** AI thường có thói quen gọi `var(--space-5)` mà không kiểm tra xem trong `:root` đã khai báo biến đó chưa. *Bài học:* Người lập trình phải luôn kiểm tra đối chiếu file `variables.css`.
  - **Lỗi 2 - Thói quen chèn inline style:** Khi gặp một chi tiết căn chỉnh nhanh, AI rất dễ tiện tay viết `style="..."` trực tiếp vào thẻ HTML, phá vỡ nguyên tắc tách biệt mã nguồn. *Bài học:* Phải nghiêm khắc ra lệnh cấm inline style và yêu cầu gom về file CSS tập trung.
  - **Lỗi 3 - Đặt tên file bất cẩn:** AI để nguyên tên file tiếng Việt có dấu và khoảng trắng. Khi đưa lên GitHub Pages chạy hệ điều hành Linux sẽ lập tức bị lỗi 404 Not Found. *Bài học:* Phải chủ động chuẩn hóa tên file thành kebab-case không dấu ngay từ đầu.
- **Tư duy cốt lõi rút ra:**
  Vibe Coding không phải là phó mặc hoàn toàn cho AI, mà là quá trình **"Chỉ huy - Kiểm chứng - Tinh chỉnh"**. Lập trình viên đóng vai trò là Kiến trúc sư trưởng (Architect) vạch ra ranh giới kỹ thuật, đọc hiểu từng dòng mã AI sinh ra, phát hiện các lỗi tiềm ẩn về ngữ nghĩa/khoảng cách và chỉ đạo AI sửa đổi cho đến khi đạt chất lượng hoàn hảo.
