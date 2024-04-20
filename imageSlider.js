export function initializeImageSlider() {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns[0].classList.add('selected');

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgBtns.forEach((btn) => btn.classList.remove('selected'));
            imgItem.classList.add('selected');
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);
}
