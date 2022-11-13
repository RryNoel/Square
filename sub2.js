// 검색모달~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const openBt2 = document.getElementById('open3');
const modal3 = document.querySelector('.hmn2_modal2');
const overlay3 = modal3.querySelector('.hmn2_overlay2');
const closeBtn3 = modal3.querySelector('.button3');

const openModal3 = () => {
    modal3.classList.remove('hmn2_hidden2');
}
const closeModal3 = () => {
    modal3.classList.add('hmn2_hidden2');
}
overlay3.addEventListener('click', closeModal3);
closeBtn3.addEventListener('click', closeModal3);
openBt2.addEventListener('click', openModal3);


// 메뉴모달~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const openBt = document.getElementById('open2');
const modal2 = document.querySelector('.hmn2_modal');
const overlay2 = modal2.querySelector('.hmn2_overlay');
const closeBtn2 = modal2.querySelector('.button2');

const openModal2 = () => {
    modal2.classList.remove('hmn2_hidden');
}
const closeModal2 = () => {
    modal2.classList.add('hmn2_hidden');
}
overlay2.addEventListener('click', closeModal2);
closeBtn2.addEventListener('click', closeModal2);
openBt.addEventListener('click', openModal2);