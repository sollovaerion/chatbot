import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Infra Project</h1>
          <h2>Nderrmarrje Ndertimore</h2>
          <p className="hero-description">
            Ofrojmë shërbime profesionale ndertimore me cilësi të lartë. 
            Nga ndërtimi i objekteve të reja deri te renovimi dhe menaxhimi i projekteve.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Shërbimet Tona</a>
            <a href="#contact" className="btn btn-secondary">Kontakto</a>
          </div>
        </div>
      </section>

      <section id="services" className="services-preview">
        <div className="container">
          <h2>Shërbimet Tona</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Ndërtim</h3>
              <p>Ndërtim objektesh të reja me teknologji moderne</p>
            </div>
            <div className="service-card">
              <h3>Asfaltim</h3>
              <p>Asfaltim rrugësh dhe parkingesh me cilësi të lartë</p>
            </div>
            <div className="service-card">
              <h3>Menaxhim Projektesh</h3>
              <p>Menaxhim profesional i projekteve ndertimore</p>
            </div>
            <div className="service-card">
              <h3>Renovim</h3>
              <p>Renovim dhe modernizim objektesh ekzistuese</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Rreth Nesh</h2>
              <p>
                Infra Project është një ndërmarrje ndertimore me eksperiencë të gjatë në treg. 
                Ofrojmë shërbime të shumëllojshme nga ndërtimi i objekteve të reja deri te 
                menaxhimi dhe mirëmbajtja e projekteve ekzistuese.
              </p>
              <p>
                Ekipi ynë profesional garanton cilësi të lartë dhe përfundimin e projekteve 
                brenda afateve të caktuara dhe buxhetit të planifikuar.
              </p>
              <a href="/gallery" className="btn btn-primary">Shiko Galerinë</a>
            </div>
            <div className="about-image">
              <img src="/images/IMG_9694.jpeg" alt="Ekipi ynë në punë" className="about-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

