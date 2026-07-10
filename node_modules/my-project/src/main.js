// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle')
const navList = document.getElementById('nav-list')
if (navToggle && navList) {
	navToggle.addEventListener('click', () => {
		const isOpen = navList.classList.toggle('open')
		navToggle.setAttribute('aria-expanded', String(isOpen))
	})
}

const reveals = document.querySelectorAll('.reveal');

if (reveals.length > 0) {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if (prefersReducedMotion || !('IntersectionObserver' in window)) {
		reveals.forEach((el) => el.classList.add('visible'))
	} else {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					observer.unobserve(entry.target)
				}
			})
		}, {
			threshold: 0.2,
			rootMargin: '0px 0px -2% 0px'
		})

		reveals.forEach((el) => io.observe(el))
	}
}

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  duration: 1.2,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
