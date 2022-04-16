// 로티 관련 JS

// const scr1 = document.querySelector('.section1');
// const StartBTN = document.querySelector("#Start");
// const LottieBTN = document.querySelector("#btn #LottieBTN")

// // Lottie 관련 함수
// let animationSkipForward = bodymovin.loadAnimation({
//     container: LottieBTN,
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: "https://assets10.lottiefiles.com/packages/lf20_vixkj2dq.json"
// });

// // 버튼 Lottie 이벤트 함수
// StartBTN.addEventListener('click', function () {
//     LottieBTN.style.opacity = '1';
//     animationSkipForward.playSegments([0, 60], true);
//     setTimeout(() => {
//         LottieBTN.style.opacity = '0';
//         scr1.style.opacity = '0';
//         scr1.addEventListener('animationend', (e) => {
//             scr1.style.display = 'none';
//         })
//     }, 1000);
// });