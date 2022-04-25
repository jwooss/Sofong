// 로티 관련 JS

const LottieCntr2 = document.querySelector(".ctnr2");
const arrowRightBoom = document.querySelector('.Boom');
const arrowLeftBoom = document.querySelector('.LeftBoom');
const tenthLottie = document.querySelector('#tenthLottie');
const LottieRotate = document.querySelector('.LottieRotate');
const LottieRotate2 = document.querySelector('.LottieRotate2');
const FeedbackMailbox = document.querySelector('.FeedbackMailbox');

// Lottie 관련 함수

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

let animationSkipForward4 = bodymovin.loadAnimation({
    container: arrowLeftBoom,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
});

let animationSkipForward5 = bodymovin.loadAnimation({
    container: tenthLottie,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets6.lottiefiles.com/packages/lf20_7m0szdkq.json"
});

let animationSkipForward6 = bodymovin.loadAnimation({
    container: LottieRotate,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets7.lottiefiles.com/packages/lf20_fk1ypisi.json"
});

let animationSkipForward7 = bodymovin.loadAnimation({
    container: LottieRotate2,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets7.lottiefiles.com/packages/lf20_yDnFTL.json"
});

let animationSkipForward8 = bodymovin.loadAnimation({
    container: FeedbackMailbox,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_3hFUmb.json"
});
// 버튼 Lottie 이벤트 함수

export function AniStart(e){

    let animationSkipForward = bodymovin.loadAnimation({
        container: e,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/packages/lf20_3u3dolxn.json"
    });
    animationSkipForward.playSegments([0, 60], true);
}
export function AniStart2(){
    LottieCntr2.style.opacity = '1';
    animationSkipForward2.playSegments([0, 60], true);
}
export function AniStart3(){
    animationSkipForward3.playSegments([0, 60], true);
}
export function AniStart4(){
    animationSkipForward4.playSegments([0, 60], true);
}
export function AniStart5(){
    animationSkipForward5.playSegments([0, 60], true);
}
export function AniStart6(){
    animationSkipForward6.playSegments([0, 60], true);
}
export function AniStart7(){
    animationSkipForward7.playSegments([50, 60], true);
}
export function AniStart9(){
    animationSkipForward8.playSegments([0, 60], true);
}