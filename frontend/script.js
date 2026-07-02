document.getElementById('year').textContent = new Date().getFullYear();

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Scroll reveal */
const revealTargets = document.querySelectorAll('.pillar-card, .story-step, .stat-card, .volunteer-copy, .volunteer-form');
revealTargets.forEach(el => el.classList.add('reveal'));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  revealTargets.forEach(el => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));
}

/* Animated stat counters */
const statNums = document.querySelectorAll('.stat-num');
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10) || 0;
    if (reduceMotion) {
      el.textContent = target.toLocaleString();
    } else {
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    statIO.unobserve(el);
  });
}, { threshold: 0.15 });
statNums.forEach(el => statIO.observe(el));

/* Volunteer form submission */
const form = document.getElementById('volunteerForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.classList.remove('is-error');
  statusEl.textContent = '';

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();

  const dict = (window.__ariseDict && window.__ariseDict.form) || {};

  if (!fullName || !email) {
    statusEl.textContent = dict.statusMissing || 'Please fill in your name and email.';
    statusEl.classList.add('is-error');
    return;
  }

  const interests = Array.from(form.querySelectorAll('input[name="interest"]:checked')).map(i => i.value);

  const payload = {
    fullName,
    email,
    phone: form.phone.value.trim(),
    area: form.area.value.trim(),
    interests,
    availability: form.availability.value,
    message: form.message.value.trim(),
    submittedAt: new Date().toISOString()
  };

  submitBtn.disabled = true;
  submitBtn.textContent = dict.submitting || 'Submitting…';

  try {
    const res = await fetch('/api/volunteers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error('Request failed');

    statusEl.textContent = dict.statusSuccess || "Thanks! We'll be in touch soon.";
    form.reset();
  } catch (err) {
    statusEl.textContent = dict.statusError || "Couldn't reach the server. Is the backend running? See README for setup.";
    statusEl.classList.add('is-error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = dict.submit || 'Submit application';
  }
});

/* Header background on scroll (subtle) */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(15,23,41,0.92)';
  } else {
    header.style.background = 'rgba(15,23,41,0.72)';
  }
}, { passive: true });
