
const StartBTN = document.querySelector("#Start");
const LottieBTN = document.querySelector("#btn #LottieBTN");

let animationSkipForward = bodymovin.loadAnimation({
        container: LottieBTN,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/packages/lf20_vixkj2dq.json"
});

  StartBTN.addEventListener('click', function() {
    LottieBTN.style.opacity = '1';
    animationSkipForward.playSegments([0,60], true);
    setTimeout(() => {
        LottieBTN.style.opacity = '0';
    }, 1000);
});