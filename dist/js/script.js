const problemsSlider = new Swiper('.for-whom__slider', {

    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
        el: '.for-whom__pagination',
        clickable: true
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
        },
        769: {
            spaceBetween: 30,
        },
        1250: {
            spaceBetween: 50,
        }
    }
});

// burger
const burger = document.querySelector('.header__burger');
const menuElem = document.querySelector('.menu');
const menuClose = document.querySelectorAll('[data-menuClose]');

burger.addEventListener('click', () => {
    menuElem.classList.add('menu--active')
    document.body.style.overflow = 'hidden';
});

menuClose.forEach(item => {
    item.addEventListener('click', () => {
        menuElem.classList.remove('menu--active')
        document.body.style.overflow = '';
    })
});

menuElem.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')) {
        menuElem.classList.remove('menu--active')
        document.body.style.overflow = '';
    }
});

//faq

function faq(title, itemActive) {

    const titles = document.querySelectorAll(title);

    titles.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.classList.toggle(itemActive);

        });
    });

}

faq('.faq__item__title', 'faq__item--active');

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scarollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scarollWidth;
}

let scrollWidth = calcScroll();

function modal(modal, modalActiveClass, triggers, modalClose) {
    const triggers_ = document.querySelectorAll(triggers),
        modal_ = document.querySelector(modal),
        modalClose_ = document.querySelector(modalClose);

    if (triggers_.length > 0) {
        triggers_.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal_.classList.add(modalActiveClass);
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
            });
        });

        modalClose_.addEventListener('click', () => {
            modal_.classList.remove(modalActiveClass);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });

        modal_.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__container')) {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });
    }
}

modal('.modal-main', 'modal--active', '[data-modal]', '.modal-main__close');