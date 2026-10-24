(() => {
  const config = window.SITE_CONFIG || {};
  const toast = document.getElementById('link-toast');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3400);
  };

  const linkMap = {
    game: { key: 'gameUrl', label: 'Roblox game link' },
    discord: { key: 'discordUrl', label: 'Discord invite link' },
    group: { key: 'groupUrl', label: 'Roblox group link' }
  };

  document.querySelectorAll('[data-link]').forEach((anchor) => {
    const type = anchor.dataset.link;
    const linkInfo = linkMap[type];
    if (!linkInfo) return;
    const destination = (config[linkInfo.key] || '').trim();
    if (destination && /^https:\/\//i.test(destination) && !destination.includes('YOUR_')) {
      anchor.href = destination;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.href = '#';
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        showToast(`Add your official ${linkInfo.label} in config.js before publishing.`);
      });
    }
  });

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
