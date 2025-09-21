import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>Rreth Nesh</h1>
          <p>Infra Project - Partneri Juaj i Besuar në Ndërtim</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-story">
            <div className="story-text">
              <h2>Historia Jonë</h2>
              <p>
                Infra Project u themelua me vizionin e ofrimit të shërbimeve më cilësore 
                në fushën e ndërtimit. Me mbi 15 vjet eksperiencë në treg, ne kemi përfunduar 
                me sukses mbi 50 projekte të ndryshme, duke u bërë një nga ndërmarrjet më të 
                besueshme në Shqipëri.
              </p>
              <p>
                Misioni ynë është të ofrojmë shërbime ndertimore me cilësi të lartë, duke 
                respektuar standardet më të larta të sigurisë dhe duke përfunduar projektet 
                brenda afateve dhe buxhetit të planifikuar.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/IMG_9694.jpeg" alt="Ekipi ynë në punë" className="story-img" />
            </div>
          </div>

          <div className="values-section">
            <h2>Vlerat Tona</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Cilësia</h3>
                <p>Ne përpiqemi për cilësinë më të lartë në çdo projekt që realizojmë.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⏰</div>
                <h3>Përkatësia</h3>
                <p>Respektojmë afatet dhe dorëzojmë projektet në kohën e caktuar.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Besueshmëria</h3>
                <p>Jemi partnerë i besuar për klientët tanë për mbi 15 vjet.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>Inovacioni</h3>
                <p>Përdorim teknologjinë më të re dhe metodat më moderne.</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Ekipi Jonë</h2>
            <p className="team-intro">
              Ekipi ynë përbëhet nga profesionistë të kualifikuar me eksperiencë të gjatë 
              në fushën e ndërtimit. Çdo anëtar i ekipit është i specializuar në fushën e tij 
              dhe kontribuon në suksesin e projekteve tona.
            </p>
            <div className="team-stats">
              <div className="team-stat">
                <h3>25+</h3>
                <p>Profesionistë të Kualifikuar</p>
              </div>
              <div className="team-stat">
                <h3>15+</h3>
                <p>Vjet Eksperiencë Mesatare</p>
              </div>
              <div className="team-stat">
                <h3>100%</h3>
                <p>Certifikime Profesionale</p>
              </div>
            </div>
          </div>

          <div className="certifications-section">
            <h2>Certifikimet dhe Licencat</h2>
            <div className="certifications-grid">
              <div className="cert-item">
                <div className="cert-icon">📜</div>
                <h3>Licencë Ndërtimi</h3>
                <p>Licencuar për ndërtime të kategorive të ndryshme</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">🛡️</div>
                <h3>Siguria në Punë</h3>
                <p>Certifikuar për standardet e sigurisë në punë</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">🌱</div>
                <h3>Mirëmbajtja e Mjedisit</h3>
                <p>Respektojmë standardet mjedisore</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">⭐</div>
                <h3>Cilësia ISO</h3>
                <p>Certifikuar për standardet e cilësisë</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Dëshironi të Punoni Me Ne?</h2>
          <p>Kontaktoni për të diskutuar projektin tuaj dhe për të marrë një ofertë falas</p>
          <a href="/contact" className="btn btn-primary">Kontakto Tani</a>
        </div>
      </div>
    </div>
  );
};

export default About;

