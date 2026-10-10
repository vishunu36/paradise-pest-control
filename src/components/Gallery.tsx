import React, { useState, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Gallery items — replace image paths with actual client photographs
// Organize by service category
const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Termite Control',
    src: '/images/gallery/termite-1.jpg',
    alt: 'Termite damage visible inside wooden cupboard panels — Paradise Pest Control Services',
    caption: 'Termite damage detected inside a wooden cupboard',
  },
  {
    id: 'g2',
    category: 'Termite Control',
    src: '/images/gallery/termite-2.jpg',
    alt: 'Mud tubes from subterranean termite infestation along a wall — Paradise Pest Control',
    caption: 'Mud tubes indicating subterranean termite activity along a wall',
  },
  {
    id: 'g3',
    category: 'Ground Treatment',
    src: '/images/gallery/ground-1.jpg',
    alt: 'Ground and foundation soil treatment being carried out — Paradise Pest Control Services',
    caption: 'Ground and foundation termite treatment in progress',
  },
  {
    id: 'g4',
    category: 'Termite Control',
    src: '/images/gallery/termite-walls-1.jpg',
    alt: 'Termite damage around a wooden door frame — Paradise Pest Control Services',
    caption: 'Termite damage observed around a door frame',
  },
  {
    id: 'g5',
    category: 'Bed Bug Control',
    src: '/images/gallery/bedbug-1.jpg',
    alt: 'Bed bug inspection of mattress seams — Paradise Pest Control Services',
    caption: 'Professional bed bug inspection on mattress',
  },
  {
    id: 'g6',
    category: 'Termite Control',
    src: '/images/gallery/termite-3.jpg',
    alt: 'Close-up of termite gallery in wooden furniture — Paradise Pest Control Services',
    caption: 'Termite galleries visible inside wooden furniture',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(g => g.category)))];

type GalleryItem = (typeof GALLERY_ITEMS)[0];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeCategory);

  const openLightbox = useCallback((item: GalleryItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex(g => g.id === lightboxItem.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightboxItem(filtered[next]);
  }, [lightboxItem, filtered]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
  }, [closeLightbox, navigate]);

  const handleImgError = (id: string) => {
    setImgErrors(prev => new Set(prev).add(id));
  };

  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section__header text-center" style={{ margin: '0 auto var(--space-2xl)' }}>
          <span className="section__label">Our Work</span>
          <h2 className="section__title" id="gallery-title">Photo Gallery</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Browse photographs from our pest control work across Hanamkonda, Warangal,
            and Hyderabad. Images show actual pest damage and treatment in progress.
          </p>
        </header>

        {/* Category filter */}
        <div className="gallery__filters" role="group" aria-label="Filter gallery by service category">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery__filter-btn${activeCategory === cat ? ' gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="gallery__grid" role="list">
          {filtered.map((item) => {
            const hasError = imgErrors.has(item.id);
            return (
              <button
                key={item.id}
                className="gallery__item"
                onClick={() => openLightbox(item)}
                aria-label={`View larger: ${item.caption}`}
                role="listitem"
              >
                {!hasError ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery__img"
                    loading="lazy"
                    onError={() => handleImgError(item.id)}
                  />
                ) : (
                  <div className="img-placeholder" style={{ height: '100%' }}>
                    <p>Image loading...</p>
                  </div>
                )}
                <div className="gallery__item-overlay">
                  <ZoomIn size={22} aria-hidden="true" />
                  <span className="gallery__item-caption">{item.caption}</span>
                </div>
                <div className="gallery__item-badge">{item.category}</div>
              </button>
            );
          })}
        </div>

        </div>

      {/* ── Lightbox ── */}
      {lightboxItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={e => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            {!imgErrors.has(lightboxItem.id) ? (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="lightbox__img"
                onError={() => handleImgError(lightboxItem.id)}
              />
            ) : (
              <div className="img-placeholder" style={{ height: '300px', width: '400px' }}>
                <p>Image not available</p>
              </div>
            )}
            <p className="lightbox__caption">{lightboxItem.caption}</p>
            <span className="lightbox__category badge badge--green">{lightboxItem.category}</span>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={e => { e.stopPropagation(); navigate(1); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
