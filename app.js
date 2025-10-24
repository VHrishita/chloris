function loadAvatar() {
  const savedAvatar = localStorage.getItem('userAvatar');
  const avatarDisplay = document.getElementById('avatarDisplay');
  if (savedAvatar && avatarDisplay) {
    avatarDisplay.textContent = savedAvatar;
    avatarDisplay.style.display = 'flex';
  }
}

function createFloatingParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  `;
  
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.textContent = ['🍃', '🌿', '🌱'][Math.floor(Math.random() * 3)];
    particle.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 20}px;
      opacity: ${Math.random() * 0.5 + 0.2};
      left: ${Math.random() * 100}%;
      animation: fall ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    particleContainer.appendChild(particle);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% {
        top: -10%;
        transform: translateX(0) rotate(0deg);
      }
      100% {
        top: 110%;
        transform: translateX(${Math.random() * 100 - 50}px) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(particleContainer);
}

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadAvatar();
  createFloatingParticles();
  smoothScroll();
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});
