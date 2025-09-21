import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Nderrmarrje Ndertimore',
      description: 'Ofrojmë shërbime të plota ndertimore për objekte të ndryshme, nga shtëpitë private deri te ndërtesa komerciale.',
      icon: '🏗️',
      features: ['Ndërtim shtëpish', 'Ndërtim objektesh komerciale', 'Ndërtim objektesh industriale', 'Ndërtim infrastrukturash']
    },
    {
      id: 2,
      title: 'Asfaltim',
      description: 'Shërbime profesionale asfaltimi për rrugë, parkingje dhe zonat e tjera të transportit.',
      icon: '🛣️',
      features: ['Asfaltim rrugësh', 'Asfaltim parkingjesh', 'Mirëmbajtje rrugësh', 'Asfaltim zonash sportive']
    },
    {
      id: 3,
      title: 'Prejtim',
      description: 'Shërbime prejtimi dhe përgatitjeje terrenit për ndërtime të ndryshme.',
      icon: '🚧',
      features: ['Prejtim terreni', 'Lëvizje dheu', 'Nivelim terreni', 'Përgatitje bazamentesh']
    },
    {
      id: 4,
      title: 'Menaxhim Projektesh',
      description: 'Menaxhim profesional i projekteve ndertimore nga planifikimi deri te përfundimi.',
      icon: '📋',
      features: ['Planifikim projektesh', 'Koordinim ekipi', 'Menaxhim buxheti', 'Monitorim progresi']
    },
    {
      id: 5,
      title: 'Konstruksion Metalik',
      description: 'Ndërtim struktura metalike për objekte të ndryshme me teknologji moderne.',
      icon: '🔩',
      features: ['Struktura metalike', 'Hangarë industriale', 'Konstruksion çeliku', 'Montim struktura']
    },
    {
      id: 6,
      title: 'Renovim',
      description: 'Renovim dhe modernizim objektesh ekzistuese për të përmirësuar funksionalitetin dhe estetikën.',
      icon: '🔨',
      features: ['Renovim shtëpish', 'Modernizim objektesh', 'Rinovim fasadash', 'Përmirësim infrastrukturash']
    },
    {
      id: 7,
      title: 'Fusha Sportive',
      description: 'Ndërtim dhe mirëmbajtje fushash sportive me standarde profesionale.',
      icon: '⚽',
      features: ['Fusha futbolli', 'Fusha tenisi', 'Fusha basketbolli', 'Fusha voleybolli']
    },
    {
      id: 8,
      title: 'Punimi dhe Finalizimi',
      description: 'Punime të detajuara dhe finalizimi profesional i projekteve ndertimore.',
      icon: '✨',
      features: ['Punime të detajuara', 'Finalizim cilësor', 'Inspektim cilësie', 'Dorëzim projekti']
    },
    {
      id: 9,
      title: 'Punime Suvatimi',
      description: 'Shërbime profesionale suvatimi për mbrojtje dhe dekorim objektesh.',
      icon: '🎨',
      features: ['Suvatim mbrojtës', 'Suvatim dekorativ', 'Suvatim termik', 'Suvatim hidroizolues']
    },
    {
      id: 10,
      title: 'Instalime Ndertimore',
      description: 'Instalime elektrike, hidraulike dhe të tjera për objekte të ndryshme.',
      icon: '⚡',
      features: ['Instalime elektrike', 'Instalime hidraulike', 'Instalime gazi', 'Instalime klimatizimi']
    },
    {
      id: 11,
      title: 'Demolim Objektesh',
      description: 'Shërbime të sigurta dhe profesionale demolimi objektesh të vjetra.',
      icon: '💥',
      features: ['Demolim i kontrolluar', 'Lëvizje mbeturinash', 'Siguri në punë', 'Mirëmbajtje mjedisi']
    },
    {
      id: 12,
      title: 'Ndërtim Palestrave Sportive',
      description: 'Ndërtim palestrave dhe qendrave sportive me teknologji moderne.',
      icon: '🏋️',
      features: ['Palestra sportive', 'Qendra fitnesi', 'Pishina', 'Salla sportive']
    },
    {
      id: 13,
      title: 'Tregtia me Shumice e Metaleve',
      description: 'Tregtim me shumicë të metaleve dhe mineraleve për ndërtime.',
      icon: '🏭',
      features: ['Metale të ndryshme', 'Mineralet', 'Çeliku', 'Aluminumi']
    },
    {
      id: 14,
      title: 'Furnizim Paisje Objektet Shtëpirore',
      description: 'Furnizim paisje dhe materialesh për objekte shtëpirore.',
      icon: '🏠',
      features: ['Paisje shtëpirore', 'Materiale ndertimore', 'Dekorime', 'Mobilje']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Shërbimet Tona</h1>
          <p>Ofrojmë një gamë të gjerë shërbimesh ndertimore me cilësi të lartë</p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-content">
                  <div className="service-header">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Dëshironi të Punoni Me Ne?</h2>
          <p>Kontaktoni për një konsultim falas dhe për të diskutuar projektin tuaj</p>
          <a href="/contact" className="btn btn-primary">Kontakto Tani</a>
        </div>
      </div>
    </div>
  );
};

export default Services;

