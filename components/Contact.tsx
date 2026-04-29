export default function Contact() {
  return (
    <section id="contact">
      <div className="section-wrap">
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <div className="contact-box">
          <h3 className="contact-title">Have a project in mind?</h3>
          <p className="contact-sub">
            I&apos;m available for freelance projects, full-time roles,<br />
            and custom web solutions. Let&apos;s talk!
          </p>
          <div className="contact-info-grid">
            <a href="mailto:hsttasin90@gmail.com" className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <span className="contact-label">Email Me</span>
                <span className="contact-val">hsttasin90@gmail.com</span>
              </div>
            </a>
            <a href="tel:+8801234567890" className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <span className="contact-label">Call Me</span>
                <span className="contact-val">+880 1234-567890</span>
              </div>
            </a>
            <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💬</span>
              <div className="contact-details">
                <span className="contact-label">WhatsApp</span>
                <span className="contact-val">+880 1234-567890</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
