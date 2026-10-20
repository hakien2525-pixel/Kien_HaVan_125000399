// assets/js/team-flip.js - Xử lý lật thẻ thành viên ADLEY & tự động úp lại khi cuộn
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.team-card-wrapper');
  // Lật / úp thẻ khi click hoặc phím Enter / Space, bỏ qua nếu bấm link xem hồ sơ
  cards.forEach(card => {
    const toggle = (e) => {
      if (e.target.closest('a')) return;
      card.setAttribute('aria-pressed', card.classList.toggle('is-flipped'));
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle(e)));
  });
  // Tự động úp lại thẻ khi cuộn ra khỏi màn hình (threshold 0.1) bằng IntersectionObserver
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) { target.classList.remove('is-flipped'); target.setAttribute('aria-pressed', 'false'); }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => obs.observe(c));
});
