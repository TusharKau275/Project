import './style.css'

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
			threshold: 0.15,
			rootMargin: '0px 0px -8% 0px'
		})

		reveals.forEach((el) => io.observe(el))
	}
}
