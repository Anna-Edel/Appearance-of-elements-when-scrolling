document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        
        reveals.forEach(reveal => {
            const { top, bottom } = reveal.getBoundingClientRect();
            
            // Проверяем, виден ли элемент (внутри окна)
            if (top < windowHeight && bottom >= 0) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }

    // Вызов функции при загрузке и при прокрутке
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
