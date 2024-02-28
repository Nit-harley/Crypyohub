window.addEventListener('scroll', function () {
let backToTop = document.getElementById('back-to-top');
if (window.scrollY > 100) {
backToTop.classList.remove('hidden');
} else {
backToTop.classList.add('hidden');
}
});
