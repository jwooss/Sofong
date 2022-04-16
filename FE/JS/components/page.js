// Import
import { AniStart, AniStart2 } from "./animation.js";

// 페이지 관련 동적 효과

// Loading
const LoadingSpan = document.querySelector(".LoadingSpan");
const SpanList = ['저희 처음 프로젝트 이름은 Music Select 였던 거 아시나요..? 많이 촌스럽죠..', '레코딩 하는 중.. 이라고 할까요?', '살면서 첫 프로젝트 입니다 재밌으셨으면 좋겠습니다!', '저작권 구글링 하는 중...', '점점 멘트 고갈되는 중...', '코딩 하는 법 겁색중..'];
const LoadingSec = document.querySelector('.LoadingSec');
const Screen = document.querySelector('.screen');
const Main = document.querySelector('.Main');
const UnderMain = document.querySelector(".UnderMain");
const StartBTN = document.querySelector("#Start");
const Intros = document.querySelectorAll(".Sec");

// Loading 관련 함수
const RandomSpan = () => {
    let RanS = Math.floor(Math.random() * SpanList.length);
    LoadingSpan.innerText = SpanList[RanS];
}
const Loading = () => {
    LoadingSec.classList.add('Ani')
}
const WidthPage = () => {
    const cont_2 = document.querySelector('.UnderMain');
    const slider = document.querySelector('.slide');
    const Section2 = document.querySelector('.Section2');
    let s_move_max = (Section2.offsetWidth * 3 - window.innerWidth) * -1;
    let s_pos = 0;

    cont_2.addEventListener('wheel',function(e){
        e.preventDefault;

        s_pos -= e.deltaY;

        if(s_pos < s_move_max){
            s_pos = s_move_max;
        }else if(s_pos > 0){
            s_pos = 0;
        }


        slider.style.transform = `translateX(${s_pos}px)`;
    });
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
    UnderMain.style.transform = 'translateY(-100vh)';
    WidthPage();
    setTimeout(() => {
        UnderMain.style.opacity = '1';
    }, 500);
})
