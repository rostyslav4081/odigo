(function () {
    const header = document.querySelector('.header');
    window.onscroll =  () =>{
       if(window.pageYOffset >50){
           header.classList.add('header_active');
       }else {
           header.classList.remove('header_active')
       }

    };
}());
//Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    if(window.innerWidth <= 768){
        for(let i = 0; i < menuLinks.length; i+=1){
            menuLinks[i].addEventListener('click',() =>{
                menu.classList.remove('header_nav_active');
            });
        }
    }
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click',() => {
         menu.classList.remove('header_nav_active');
    })
}());
//Scrolling
(function () {
    const smoothSroll = function (targetEl,duration) {
        const headElHeigt = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top -headElHeigt;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const easy = function (t,b,c,d) {
            t /= d / 2;
            if(t < 1)return c / 2 *t *t + b;
            t--;
            return -c / 2*(t*(t - 2) - 1) + b;

        };
        const anitation = function (currentTime) {
            if(startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easy(timeElapsed,startPosition,targetPosition,duration);
            window.scrollTo(0,run);
            if(timeElapsed < duration) requestAnimationFrame(anitation);

        };
        requestAnimationFrame(anitation);

    };
    const  scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each =>{
            each.addEventListener('click',function () {
                const currentTarget = this.getAttribute('href');
                smoothSroll(currentTarget, 1000);
            });
        });
    };
    scrollTo()
}());
