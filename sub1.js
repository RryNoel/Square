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

// 메인클릭이벤트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const bimS = document.querySelector('.bim2_S1')
const bimB1 = document.querySelector('.bim2_B1');
        bimB1.addEventListener('click', function () {
            bimS.classList.add('bim2_S1')
            bimB1.classList.add('bim2_BF')
            bimB2.classList.remove('bim2_BF')
            bimB3.classList.remove('bim2_BF')
            bimB4.classList.remove('bim2_BF')
            bimB5.classList.remove('bim2_BF')
            bimS.classList.remove('bim2_S2','bim2_S3','bim2_S4','bim2_S5')
        })

const bimB2 = document.querySelector('.bim2_B2');
        bimB2.addEventListener('click', function () {
            bimS.classList.add('bim2_S2')
            bimB2.classList.add('bim2_BF')
            bimB1.classList.remove('bim2_BF')
            bimB3.classList.remove('bim2_BF')
            bimB4.classList.remove('bim2_BF')
            bimB5.classList.remove('bim2_BF')
            bimS.classList.remove('bim2_S1','bim2_S3','bim2_S4','bim2_S5')
        })

const bimB3 = document.querySelector('.bim2_B3');
        bimB3.addEventListener('click', function () {
            bimS.classList.add('bim2_S3')
            bimB3.classList.add('bim2_BF')
            bimB2.classList.remove('bim2_BF')
            bimB1.classList.remove('bim2_BF')
            bimB4.classList.remove('bim2_BF')
            bimB5.classList.remove('bim2_BF')
            bimS.classList.remove('bim2_S2','bim2_S1','bim2_S4','bim2_S5')
        })

const bimB4 = document.querySelector('.bim2_B4');
        bimB4.addEventListener('click', function () {
            bimS.classList.add('bim2_S4')
            bimB4.classList.add('bim2_BF')
            bimB2.classList.remove('bim2_BF')
            bimB3.classList.remove('bim2_BF')
            bimB1.classList.remove('bim2_BF')
            bimB5.classList.remove('bim2_BF')
            bimS.classList.remove('bim2_S2','bim2_S3','bim2_S1','bim2_S5')
        })

const bimB5 = document.querySelector('.bim2_B5');
        bimB5.addEventListener('click', function () {
            bimS.classList.add('bim2_S5')
            bimB5.classList.add('bim2_BF')
            bimB2.classList.remove('bim2_BF')
            bimB3.classList.remove('bim2_BF')
            bimB4.classList.remove('bim2_BF')
            bimB1.classList.remove('bim2_BF')
            bimS.classList.remove('bim2_S2','bim2_S3','bim2_S4','bim2_S1')
        })

setInterval(function() {
        
            setTimeout(function() {
                bimS.classList.add('bim2_S1')
                bimB1.classList.add('bim2_BF')
                bimB2.classList.remove('bim2_BF')
                bimB3.classList.remove('bim2_BF')
                bimB4.classList.remove('bim2_BF')
                bimB5.classList.remove('bim2_BF')
                bimS.classList.remove('bim2_S2','bim2_S3','bim2_S4','bim2_S5')
            }, 0)

            setTimeout(function() {
                bimS.classList.add('bim2_S2')
                bimB2.classList.add('bim2_BF')
                bimB1.classList.remove('bim2_BF')
                bimB3.classList.remove('bim2_BF')
                bimB4.classList.remove('bim2_BF')
                bimB5.classList.remove('bim2_BF')
                bimS.classList.remove('bim2_S1','bim2_S3','bim2_S4','bim2_S5')
            }, 4000)

            setTimeout(function() {
                bimS.classList.add('bim2_S3')
                bimB3.classList.add('bim2_BF')
                bimB2.classList.remove('bim2_BF')
                bimB1.classList.remove('bim2_BF')
                bimB4.classList.remove('bim2_BF')
                bimB5.classList.remove('bim2_BF')
                bimS.classList.remove('bim2_S2','bim2_S1','bim2_S4','bim2_S5')
            }, 8000)

            setTimeout(function() {
                bimS.classList.add('bim2_S4')
                bimB4.classList.add('bim2_BF')
                bimB2.classList.remove('bim2_BF')
                bimB3.classList.remove('bim2_BF')
                bimB1.classList.remove('bim2_BF')
                bimB5.classList.remove('bim2_BF')
                bimS.classList.remove('bim2_S2','bim2_S3','bim2_S1','bim2_S5')
            }, 12000)

            setTimeout(function() {
                bimS.classList.add('bim2_S5')
                bimB5.classList.add('bim2_BF')
                bimB2.classList.remove('bim2_BF')
                bimB3.classList.remove('bim2_BF')
                bimB4.classList.remove('bim2_BF')
                bimB1.classList.remove('bim2_BF')
                bimS.classList.remove('bim2_S2','bim2_S3','bim2_S4','bim2_S1')
            }, 16000)

}, 20000 );
