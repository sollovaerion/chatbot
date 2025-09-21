import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Kontakto</h1>
          <p>Na kontaktoni për të diskutuar projektin tuaj</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informacionet e Kontaktit</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Adresa</h3>
                  <p>Rr. Dëshmorët e Kombit, Nr. 15<br />
                  Tiranë, Shqipëri</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Telefoni</h3>
                  <p>+355 4 123 4567<br />
                  +355 69 123 4567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@infraproject.al<br />
                  contact@infraproject.al</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h3>Orari i Punës</h3>
                  <p>Hënë - Premte: 08:00 - 18:00<br />
                  Shtunë: 09:00 - 15:00</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Na Ndiqni</h3>
                <div className="social-icons">
                  <button className="social-link" aria-label="Facebook">📘</button>
                  <button className="social-link" aria-label="Instagram">📷</button>
                  <button className="social-link" aria-label="Twitter">🐦</button>
                  <button className="social-link" aria-label="LinkedIn">💼</button>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Dërgo Mesazh</h2>
              <p>Plotësoni formularin më poshtë dhe ne do t'ju kontaktojmë brenda 24 orëve.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Emri i Plotë *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefoni</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Shërbimi i Interesuar</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Zgjidhni një shërbim</option>
                    <option value="nderrmarrje">Nderrmarrje Ndertimore</option>
                    <option value="asfaltim">Asfaltim</option>
                    <option value="prejtim">Prejtim</option>
                    <option value="menaxhim">Menaxhim Projektesh</option>
                    <option value="konstruksion">Konstruksion Metalik</option>
                    <option value="renovim">Renovim</option>
                    <option value="fusha">Fusha Sportive</option>
                    <option value="finalizim">Punimi dhe Finalizimi</option>
                    <option value="suvatim">Punime Suvatimi</option>
                    <option value="instalime">Instalime Ndertimore</option>
                    <option value="demolim">Demolim Objektesh</option>
                    <option value="palestra">Ndërtim Palestrave</option>
                    <option value="tregti">Tregtia me Shumice</option>
                    <option value="furnizim">Furnizim Paisje</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesazhi *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Përshkruani projektin tuaj ose pyetjen..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Duke Dërguar...' : 'Dërgo Mesazhin'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Mesazhi u dërgua me sukses! Do t'ju kontaktojmë së shpejti.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <div className="container">
          <h2>Gjeni Ne</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span>🗺️</span>
              <p>Harta Interaktive</p>
              <small>Tiranë, Shqipëri</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
