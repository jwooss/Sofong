// Import
import { AniStart, AniStart2, AniStart3, AniStart4, AniStart5, AniStart6, AniStart7 } from "./animation.js";

// 페이지 관련 동적 효과

history.scrollRestoration = 'manual'; 

// Loading
const LoadingSpan = document.querySelector(".LoadingSpan");
const SpanList = ['저희 처음 프로젝트 이름은 Music Select 였던 거 아시나요..? 많이 촌스럽죠..', '레코딩 하는 중.. 이라고 할까요?', '살면서 첫 프로젝트 입니다 재밌으셨으면 좋겠습니다!', '저작권 구글링 하는 중...', '점점 멘트 고갈되는 중...', '코딩 하는 법 겁색중..'];
const LoadingSec = document.querySelector('.LoadingSec');
// 인트로 전
const Screen = document.querySelector('.screen');
const Main = document.querySelector('.Main');
// 인트로
const UnderMain = document.querySelector(".UnderMain");
const StartBTN = document.querySelector("#Start");
const Intros = document.querySelectorAll(".Sec");
// Arrow

// 왼쪽
const arrowLeft = document.querySelector('.arrowLeft');
const arrowLeftLottie = document.querySelector('.Leftarrow');
const arrowLeftBoom = document.querySelector('.LeftBoom');
// 오른쪽
const arrowRight = document.querySelector(".arrowRight");
const arrowRightLottie = document.querySelector('.arrow');
const arrowRightBoom = document.querySelector('.Boom');

const LottieRotate = document.querySelector('.LottieRotate2');
const Dot = document.querySelector('.Dot');
const body = document.querySelector('body');
let ArrowPageCount = 1;

// Survey
const Survey = document.querySelector('.Survey');

// const slider = document.querySelector('.slide');
// const Section2 = document.querySelector('.Section2');

// resize 위치 조정

window.addEventListener('resize', function() {
    if(ArrowPageCount == 1){
        scrollTo({
            left: this.window.innerWidth * 0,
            behavior: "smooth",
        });
    }else if(ArrowPageCount == 2){
        scrollTo({
            left: this.window.innerWidth * 1,
            behavior: "smooth",
        });
    }else{
        scrollTo({
            left: this.window.innerWidth + 1920 ,
            behavior: "smooth",
        });
    }   
}, true);

// Loading 관련 함수
const RandomSpan = () => {
    let RanS = Math.floor(Math.random() * SpanList.length);
    LoadingSpan.innerText = SpanList[RanS];
}
const Loading = () => {
    LoadingSec.classList.add('Ani')
}

RandomSpan();

setTimeout(() => {
    Loading()
    Screen.style.display = 'block';   
}, 1000);

setTimeout(() => {
    Screen.style.opacity = '1';
    AniStart();     
}, 1600);

StartBTN.addEventListener('click', () => {
    Main.classList.add('Ani');    
    AniStart2();

    UnderMain.style.display = 'flex';
    
    StartBTN.classList.add('TopFadeOut');
    StartBTN.style.color = 'white';

    setTimeout(() => {
        UnderMain.style.opacity = '1';
        PageAni('On', 0);
    }, 200);
})

LottieRotate.addEventListener('click', (e) => {
    AniStart6();
    AniStart7();
    setTimeout(() => {
        Dot.style.width = '10rem';
        Dot.style.height = '10rem';
        Dot.style.transform = 'scale(100)';
        PageAni('Off', 0);
        PageAni('Off', 1);
        ArrowStatus('Left', 'Close');
        setTimeout(() => {
            PageAni('Off', 2);
            PageAni('Off', 1);
            PageAni('Off', 0);
            Survey.style.display = 'block';
            setTimeout(() => {
                UnderMain.style.display = 'none';
                Survey.style.zIndex = '1200';
                Survey.style.opacity = '1';
            }, 1000);
            body.style.overflow = 'unset';
            body.style.overflowX = 'hidden';
        }, 1000);
    }, 1400);
})

// Intro 페이지 애니메이션 함수

const PageAni = (Swi, Num) => {
    if(Swi == 'On'){
        Intros[Num].classList.remove('PageAniOff');
        Intros[Num].classList.add('PageAniOn');

        setTimeout(() => {
            const im1 = Intros[Num].querySelector('.introTitle');
            im1.classList.remove('LeftFadeOut');
            im1.classList.add('LeftFadeIn');
    
            const im2 = Intros[Num].querySelectorAll('.Bottom');
            im2.forEach(ele => {
                ele.classList.remove('RightFadeOut');
                ele.classList.add('RightFadeIn');
            })
        }, 460);
        
    }else if(Swi == 'Off'){
        Intros[Num].classList.remove('PageAniOn');
        Intros[Num].classList.add('PageAniOff');

        setTimeout(() => {
            const im1 = Intros[Num].querySelector('.introTitle');
            im1.classList.remove('LeftFadeIn');
            im1.classList.add('LeftFadeOut');
    
            const im2 = Intros[Num].querySelectorAll('.Bottom');
            im2.forEach(ele => {
                ele.classList.remove('RightFadeOut');
                ele.classList.add('RightFadeIn');
            })
        }, 700);
    }else{
        console.log('잘못 넣음');
    }
}

// ArrowFunc

const ArrowStatus = (Dis, Sta) => {
    if(Dis == 'Left'){
        if(Sta == 'Open'){
            arrowLeft.style.display = 'block';
            arrowLeftLottie.style.display = 'block';
            arrowLeftBoom.style.display = 'block';

            arrowLeft.style.zIndex = '1002';
            arrowLeftLottie.style.zIndex = '1001';
            arrowLeftBoom.style.zIndex = '1000';

            setTimeout(() => {
                arrowLeft.style.opacity = '1';
                arrowLeftLottie.style.opacity = '1';
                arrowLeftBoom.style.opacity = '1';
            }, 500);
        }else if(Sta == 'Close'){
            arrowLeft.style.opacity = '0';
            arrowLeftLottie.style.opacity = '0';
            arrowLeftBoom.style.opacity = '0';

            setTimeout(() => {
                arrowLeft.style.zIndex = '-199';
                arrowLeftLottie.style.zIndex = '-199';
                arrowLeftBoom.style.zIndex = '-199';
    
                arrowLeft.style.display = 'none';
                arrowLeftLottie.style.display = 'none';
                arrowLeftBoom.style.display = 'none';
            }, 500);
        }else{
            alert('잠좀 깨자1.');
        }
    }else if(Dis == 'Right'){
        if(Sta == 'Open'){
            arrowRight.style.display = 'block';
            arrowRightLottie.style.display = 'block';
            arrowRightBoom.style.display = 'block';

            arrowRight.style.zIndex = '1002';
            arrowRightLottie.style.zIndex = '1001';
            arrowRightBoom.style.zIndex = '1000';

            setTimeout(() => {
                arrowRight.style.opacity = '1';
                arrowRightLottie.style.opacity = '1';
                arrowRightBoom.style.opacity = '1';
            }, 500);
        }else if(Sta == 'Close'){
            arrowRight.style.opacity = '0';
            arrowRightLottie.style.opacity = '0';
            arrowRightBoom.style.opacity = '0';

            setTimeout(() => {
                arrowRight.style.zIndex = '-199';
                arrowRightLottie.style.zIndex = '-199';
                arrowRightBoom.style.zIndex = '-199';
    
                arrowRight.style.display = 'none';
                arrowRightLottie.style.display = 'none';
                arrowRightBoom.style.display = 'none';
            }, 500);
        }else{
            alert('잠좀 깨자2.');
        }
    }else{
        alert('잠좀 깨자.');
    }
}

// PageAni('On', 0);
// PageAni('Off', 1);

ArrowStatus('Left', 'Close');
ArrowStatus('Right', 'Open');

arrowRight.addEventListener('click', (e) => {
    RightScroll();
})
arrowLeft.addEventListener('click', (e) => {
    LeftScroll();
})


function RightScroll(){
    if(ArrowPageCount == 1){
        AniStart5();
        setTimeout(() => {
            
            PageAni('On', 1);
            PageAni('Off', 0);
            PageAni('Off', 2);
            
            ArrowStatus('Left', 'Open');
            ArrowStatus('Right', 'Open');
        
            AniStart3();
            
            const WidthWindow = window.innerWidth;
        
            scrollTo({
                left: WidthWindow * (ArrowPageCount),
                behavior: "smooth",
            });

            setTimeout(() => {
                ArrowPageCount++;
            }, 500);
        }, 2000);
    }
    
    if(ArrowPageCount == 2){
        PageAni('On', 2);
        PageAni('Off', 1);
    
        ArrowStatus('Left', 'Open');
        ArrowStatus('Right', 'Close');

        AniStart3();
    
        const WidthWindow = window.innerWidth;

        scrollTo({
            left: WidthWindow * ArrowPageCount,
            behavior: "smooth",
        });

        setTimeout(() => {
            ArrowPageCount++;
        }, 500);
    }
}

function LeftScroll(){
    if(ArrowPageCount == 2){
        PageAni('On', 0);
        PageAni('Off', 1);
    
        ArrowStatus('Left', 'Close');
        ArrowStatus('Right', 'Open');

        AniStart4();
    
        const WidthWindow = window.innerWidth;

        scrollTo({
            left: WidthWindow * ArrowPageCount - WidthWindow * 2,
            behavior: "smooth",
        });

        ArrowPageCount--
    }    
    if(ArrowPageCount == 3){
        PageAni('On', 1);
        PageAni('Off', 2);
        
        ArrowStatus('Left', 'Open');
        ArrowStatus('Right', 'Open');
    
        AniStart4();
        
        const WidthWindow = window.innerWidth;
    
        scrollTo({
            left: WidthWindow * ArrowPageCount - WidthWindow * 2,
            behavior: "smooth",
        });

        ArrowPageCount--;
    }
}

// HorizontalScroll();

// const HorizontalScroll = () => {
//     let s_move_max = (Section2.offsetWidth * 3 - window.innerWidth) * -1;
//     let s_pos = 0;

//     cont_2.addEventListener('wheel',function(e){
//         e.preventDefault;
//         // const clientWidth = window.innerWidth;
//         // const Left = Intros[Intros.length - 1].getBoundingClientRect().left

//         s_pos -= e.deltaY;

//         if(s_pos < s_move_max){
//             s_pos = s_move_max;
//         }else if(s_pos > 0){
//             s_pos = 0;
//         }
//     });
// }

// if(e.deltaY > 0){
//     // 하향
//     scrollDown(Intros, clientWidth, Left, e, s_pos)

// }else if(e.deltaY < 0){
//     // 상향
//     scrollUp(Intros, clientWidth, Left, e, s_pos);
// }

// console.log(s_pos, s_move_max); 

// const scrollDown = (Intro, ClientWidth, Left, E, S) => {
//     for(let i = 1; i < Intro.length; i++){          
//         if(ClientWidth * (Intros.length - i) === Left){
//             scrollTo({
//                 left: ClientWidth * i - E.deltaY + S,
//                 behavior: "smooth",
//             });
//         }
//     }
// }

// const scrollUp = (Intro, ClientWidth, Left, E, S) => {

//     for(let i = 0; i < Intro.length; i++){            
//         if(ClientWidth * (Intros.length - i) === Left){
//             scrollTo({
//                 left: ClientWidth * (Intro.length - 2 - i) + E.deltaY,
//                 behavior: "smooth",
//             });
//         }
//     }
// }