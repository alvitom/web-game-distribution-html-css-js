const jumboSlide = document.querySelector('.jumbo');
const listSlide = document.querySelectorAll('.list-slide');

listSlide.forEach(function(list) {
    list.addEventListener('click', function(e) {
       alert('OK');
       e.preventDefault();
    });
});

