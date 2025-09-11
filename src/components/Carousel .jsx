import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../assets/css/carousel.css";

const defaultBreakpoints = [
  { min: 1100, slides: 3 },
  { min: 760, slides: 2 },
  { min: 0, slides: 1 },
];

const Carousel = forwardRef((props, ref) => {
  const {
    children,
    breakpoints = defaultBreakpoints,
    autoplay = 4500,
    showDots = true,
    showArrows = true,
    loop = false,
    pauseOnHover = true,
    initialIndex = 0,
    className = "",
  } = props;

  const slides = React.Children.toArray(children);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const timerRef = useRef(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [index, setIndex] = useState(Math.max(0, initialIndex));

  const computeSPV = () => {
    const w = window.innerWidth;
    for (let bp of breakpoints) {
      if (w >= bp.min) return bp.slides;
    }
    return 1;
  };

  const layout = () => {
    const spv = computeSPV();
    setSlidesPerView(spv);
    const maxIndex = Math.max(0, slides.length - spv);
    setIndex((i) => Math.min(i, maxIndex));
    if (trackRef.current) {
      const childrenEls = Array.from(trackRef.current.children);
      const basis = `${100 / spv}%`;
      childrenEls.forEach((el) => (el.style.flex = `0 0 ${basis}`));
      requestAnimationFrame(() => moveTo(index, true));
    }
  };

  const moveTo = (i, silent = false) => {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    let nextIndex = Math.max(0, Math.min(i, maxIndex));

    setIndex(nextIndex);
    if (trackRef.current) {
      const percent = nextIndex * (100 / slidesPerView);
      trackRef.current.style.transition =
        "transform 480ms cubic-bezier(.22,.9,.32,1)";
      trackRef.current.style.transform = `translateX(${-percent}%)`;
    }

    if (!silent && autoplay) restartAutoplay();
  };

  const next = () => {
    if (index < slides.length - slidesPerView) moveTo(index + 1);
    else if (loop) moveTo(0);
  };
  const prev = () => {
    if (index > 0) moveTo(index - 1);
    else if (loop) moveTo(slides.length - slidesPerView);
  };

  const startAutoplay = () => {
    if (!autoplay || autoplay <= 0) return;
    stopAutoplay();
    timerRef.current = setInterval(() => {
      if (!loop && index >= slides.length - slidesPerView) {
        stopAutoplay();
        return;
      }
      moveTo(index + 1);
    }, autoplay);
  };
  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  useImperativeHandle(ref, () => ({
    next,
    prev,
    moveTo,
    start: startAutoplay,
    stop: stopAutoplay,
    layout,
  }));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    let tid;
    const onResize = () => {
      clearTimeout(tid);
      tid = setTimeout(() => layout(), 120);
    };
    window.addEventListener("resize", onResize);
    layout();
    return () => window.removeEventListener("resize", onResize);
  }, [children]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [autoplay, index, slidesPerView]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onPointerDown = (e) => {
      draggingRef.current = true;
      startXRef.current = e.clientX;
      deltaXRef.current = 0;
      track.style.transition = "none";
      if (track.setPointerCapture) track.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      deltaXRef.current = e.clientX - startXRef.current;
      const movePct =
        (deltaXRef.current / (viewportRef.current?.clientWidth || window.innerWidth)) *
        100;
      const basePct = index * (100 / slidesPerView);
      track.style.transform = `translateX(${-(basePct) + movePct}%)`;
    };
    const onPointerUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      track.style.transition = "";
      const threshold =
        (viewportRef.current?.clientWidth || window.innerWidth) * 0.15;
      if (Math.abs(deltaXRef.current) > threshold) {
        if (deltaXRef.current > 0) prev();
        else next();
      } else {
        moveTo(index);
      }
      deltaXRef.current = 0;
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [index, slidesPerView, slides.length]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !pauseOnHover) return;
    const onEnter = () => stopAutoplay();
    const onLeave = () => restartAutoplay();
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [pauseOnHover]);

  const pages = Math.max(1, slides.length - slidesPerView + 1);

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div className="carousel" aria-roledescription="carousel">
        <div ref={viewportRef} className="carousel-viewport">
          <div ref={trackRef} className="carousel-track">
            {slides.map((child, i) => (
              <div key={i} className="carousel-slide">
                <div className="carousel-slide-content">{child}</div>
              </div>
            ))}
          </div>
        </div>

        {showArrows && (
          <>
            <button onClick={prev} aria-label="Previous" className="carousel-control left">
              ‹
            </button>
            <button onClick={next} aria-label="Next" className="carousel-control right">
              ›
            </button>
          </>
        )}

        {showDots && (
          <div className="carousel-dots" role="tablist" aria-label="Slide navigation">
            {Array.from({ length: pages }).map((_, p) => (
              <button
                key={p}
                onClick={() => moveTo(p)}
                aria-label={`Go to slide set ${p + 1}`}
                className={`carousel-dot ${
                  p === Math.min(index, Math.max(0, slides.length - slidesPerView))
                    ? "active"
                    : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Carousel;
