import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of all images (excluding the logo)
  const images = [
    '01653efd-18ac-446b-90ac-899d1ce35c49.jpeg',
    '20a5f75a-97dd-4d40-98da-82ed21019eea.jpeg',
    '2a370524-4adf-4eea-8045-5131068f5495.jpeg',
    '30590b53-4659-42f7-946d-e903bb9f81e2.jpeg',
    '32ed621e-36fa-49d3-9a36-4e102b7b8cb3.jpeg',
    '3b926988-ab1e-443e-bd7d-7c8b6b275faa.jpeg',
    '3e6f7de7-d988-43fa-afa7-1ccde0059fe5.jpeg',
    '3fc1445e-8494-43ed-b28a-9a1f1751f6e9.jpeg',
    '4b3a295b-b125-44f9-8187-45e3d32d5f63.jpeg',
    '58a4784e-07e8-4e50-848d-36f88ab0031c.jpeg',
    '5abe55a9-ec53-4fdf-b60f-4d9c4fdd7a99.jpeg',
    '61b04907-35f8-47a9-95f2-77f0475c8b26.jpeg',
    '66ecbd44-814c-4ac1-aa34-d9a17940379e.jpeg',
    '6c9a2555-b3b0-4a3e-b34a-8973bacff6bf.jpeg',
    '70f70ff0-3708-4256-95c5-5c422502c534.jpeg',
    '7358cdb7-f1bf-4283-933a-5377e32cab79.jpeg',
    '7eefd2a3-2083-43b6-9c97-009e733a1bca.jpeg',
    '9286a3fe-9fdf-4f0c-a788-e2acf0cd4025.jpeg',
    'a1519ca8-71fa-4c89-a59d-c6831e3bebc5.jpeg',
    'aa1e9cf2-3f7f-4c0c-9db9-97663cead638.jpeg',
    'b121688c-f4af-453a-ad1c-3532627b36e3.jpeg',
    'b90479c9-017a-4425-8d8c-9991090b43b4.jpeg',
    'c7d6e9e7-0190-4261-914b-3b7a6d58dc17.jpeg',
    'dea1cc59-9969-4fbd-9f17-aaf359b70f9b.jpeg',
    'dfd6650c-714e-4bb9-93f9-d96f9582d5b6.jpeg',
    'e2e4df33-6c40-4c4e-8765-4826f4bd9c91.jpeg',
    'e67fd295-03bf-4328-817e-dbb736ce3131.jpeg',
    'fa8b5e15-03e6-44de-b158-6df0fe077281.jpeg',
    'IMG_9694.jpeg',
    'IMG_9695.jpeg'
  ];

  const openModal = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Galeria e Punimeve</h1>
          <p>Shikoni projektet dhe punimet tona të përfunduara</p>
        </div>
      </div>

      <div className="gallery-content">
        <div className="container">
          <div className="gallery-stats">
            <div className="stat-item">
              <h3>{images.length}</h3>
              <p>Projekte të Përfunduara</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Vjet Eksperiencë</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Klientë të Kënaqur</p>
            </div>
          </div>

          <div className="gallery-grid">
            {images.map((imageName, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openModal(imageName)}
              >
                <img 
                  src={`/images/${imageName}`}
                  alt={`Projekt Infra Project ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-icon">🔍</span>
                    <span className="gallery-text">Kliko për të shikuar</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img 
              src={`/images/${selectedImage}`}
              alt={`Projekt Infra Project`}
              className="modal-image"
            />
            <div className="modal-info">
              <p>Projekt Infra Project - Punime profesionale ndertimore</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
