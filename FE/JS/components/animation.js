// 로티 관련 JS

const LottieCntr = document.querySelector(".ctnr");
const LottieCntr2 = document.querySelector(".ctnr2");
const arrowRightBoom = document.querySelector('.Boom');

// Lottie 관련 함수

let animationSkipForward = bodymovin.loadAnimation({
    container: LottieCntr,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets10.lottiefiles.com/packages/lf20_3u3dolxn.json"
});

let animationSkipForward2 = bodymovin.loadAnimation({
    container: LottieCntr2,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets7.lottiefiles.com/datafiles/TtpruaCfUbd0Nk2/data.json"
});

let animationSkipForward3 = bodymovin.loadAnimation({
    container: arrowRightBoom,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
});

LottieInteractivity.create({
    player: '#chainLoadPlayer',
    mode: 'chain',
    actions: [
    {
        state: 'click',
        transition: 'click'
    },
    {
        state: 'autoplay',
        transition: 'onComplete',
        path: 'https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json',
        reset: true
    }
    ]
});



// 버튼 Lottie 이벤트 함수

export function AniStart(){
    animationSkipForward.playSegments([0, 60], true);
}
export function AniStart2(){
    LottieCntr2.style.opacity = '1';
    animationSkipForward2.playSegments([0, 60], true);
}
export function AniStart3(){
    animationSkipForward3.playSegments([0, 60], true);
}