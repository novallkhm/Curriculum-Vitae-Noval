  // Scroll-spy for tabs
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const sections = tabs.map(t => document.getElementById(t.dataset.target));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => s && spy.observe(s));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .entry');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        ro.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => ro.observe(el));
