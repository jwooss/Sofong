// 로티 관련 JS

// LottieInteractivity.create({
//     player: '#chainLoadPlayer',
//     mode: 'chain',
//     actions: [
//     {
//         state: 'click',
//         transition: 'click'
//     },
//     {
//         state: 'autoplay',
//         transition: 'onComplete',
//         path: 'https://assets7.lottiefiles.com/packages/lf20_fk1ypisi.json',
//         reset: true
//     }
//     ]
// });

// 버튼 Lottie 이벤트 함수

export function AniStart(){
    const LottieCntr = document.querySelector(".ctnr");

    let animationSkipForward = bodymovin.loadAnimation({
        container: LottieCntr,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/packages/lf20_3u3dolxn.json"
    });

    animationSkipForward.playSegments([0, 60], true);
}
export function AniStart2(){
    const LottieCntr2 = document.querySelector(".ctnr2");

    let animationSkipForward2 = bodymovin.loadAnimation({
        container: LottieCntr2,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets7.lottiefiles.com/datafiles/TtpruaCfUbd0Nk2/data.json"
    });

    LottieCntr2.style.opacity = '1';
    animationSkipForward2.playSegments([0, 60], true);
}
export function AniStart3(){
    const arrowRightBoom = document.querySelector('.Boom');

    let animationSkipForward3 = bodymovin.loadAnimation({
        container: arrowRightBoom,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
    });

    animationSkipForward3.playSegments([0, 60], true);
}
export function AniStart4(){
    const arrowLeftBoom = document.querySelector('.LeftBoom');

    let animationSkipForward4 = bodymovin.loadAnimation({
        container: arrowLeftBoom,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
    });

    animationSkipForward4.playSegments([0, 60], true);
}
export function AniStart5(){
    const tenthLottie = document.querySelector('#tenthLottie');

    let animationSkipForward5 = bodymovin.loadAnimation({
        container: tenthLottie,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets6.lottiefiles.com/packages/lf20_7m0szdkq.json"
    });

    animationSkipForward5.playSegments([0, 60], true);
}
export function AniStart6(){
    const LottieRotate = document.querySelector('.LottieRotate');

    let animationSkipForward6 = bodymovin.loadAnimation({
        container: LottieRotate,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets7.lottiefiles.com/packages/lf20_fk1ypisi.json"
    });

    animationSkipForward6.playSegments([0, 60], true);
}
export function AniStart7(){
    const LottieRotate2 = document.querySelector('.LottieRotate2');

    let animationSkipForward7 = bodymovin.loadAnimation({
        container: LottieRotate2,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets7.lottiefiles.com/packages/lf20_yDnFTL.json"
    });
    animationSkipForward7.playSegments([50, 60], true);
}

export function AniStart8(){
    const ReLottie = document.querySelector('.ReLottie');

    let animationSkipForward7 = bodymovin.loadAnimation({
        container: ReLottie,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: "https://assets8.lottiefiles.com/packages/lf20_xwwgljdp.json"
    });
    animationSkipForward7.playSegments([50, 60], true);
}

export function AniStart9(){
    const FeedbackMailbox = document.querySelector('.FeedbackMailbox');

    let animationSkipForward7 = bodymovin.loadAnimation({
        container: FeedbackMailbox,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets1.lottiefiles.com/packages/lf20_3hFUmb.json"
    });
    animationSkipForward7.playSegments([50, 60], true);
}