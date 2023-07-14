/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

	// Modals
export function openModals() {
        const body = document.querySelector('body');
		var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
        
    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.private-modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('overflow-hidden');
        });
    });

    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
        var parentModal = this.closest('.private-modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('overflow-hidden');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.private-modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            body.classList.remove('overflow-hidden');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.private-modal.active').classList.remove('active');
        this.classList.remove('active');
        body.classList.remove('overflow-hidden');
    });
}
    // Mobile Menu
export function mobileMenu() {

    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-item-link');
    const mobileMenuBtn = document.querySelector('.mobile-menu__button');
    const headerBtn = document.querySelector('#toBecomeUser');
    const body = document.querySelector('body');
    
    const toggleMenu = () => {
        const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('overflow-hidden');
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    function hideCloseBtn() {
        openMenuBtn.style.display = 'flex';
        closeMenuBtn.style.display = 'none';
    }
    function showCloseBtn() {
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'flex'; 
    }
    function hideBothBtn() {
        openMenuBtn.style.display = '';
        closeMenuBtn.style.display = '';
    }
    menuLinks.forEach(function(item){
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('is-open');
            body.classList.remove('overflow-hidden');
            hideBothBtn();
        });
    });

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
        hideBothBtn();
    });

    headerBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
        hideBothBtn();
    });

    openMenuBtn.addEventListener('click', () => showCloseBtn());
    closeMenuBtn.addEventListener('click', () => hideCloseBtn());

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        body.classList.remove('overflow-hidden');
        openMenuBtn.setAttribute('aria-expanded', false);
        hideBothBtn();
    });    
}

export function smoothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        
            const blockID = anchor.getAttribute('href').substr(1)
        
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

export function scrollToTop() {
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("toTopArrow").style.display = "block";
        } else {
            document.getElementById("toTopArrow").style.display = "none";
        }
    } 
}