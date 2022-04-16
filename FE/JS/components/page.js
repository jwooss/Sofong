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

RandomSpan();

setTimeout(() => {
    Loading()
    Screen.style.display = 'block';        
}, 1000);

setTimeout(() => {
    Screen.style.opacity = '1'; 
}, 1600);

StartBTN.addEventListener('click', () => {
    Main.classList.add('Ani');    
    UnderMain.style.display = 'block';
    UnderMain.style.transform = 'translateY(-100vh)';
    setTimeout(() => {
        UnderMain.style.opacity = '1';
    }, 500);
})