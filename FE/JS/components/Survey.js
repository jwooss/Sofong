import { AniStart,  AniStart9 } from "./animation.js";

const SurveyPages = document.querySelectorAll(".Survey .Section .inner");
const ProgressBarCnt = document.querySelectorAll('.progressBar li');
const ResultLoading = document.querySelector('.ResultLoading');
const Result = document.querySelector(".Result");
const FeedB = document.querySelector(".Feedback");
const body = document.querySelector('body');
const MailForm = document.querySelector('.MailForm');
const closebtn = document.querySelector('.closebtn');
const RealMailForm = MailForm.querySelector('form');
const MailDes = document.querySelector('.des');
const alertbtn = document.querySelector('.alertbtn');
const shares = document.querySelectorAll('.shares li a');
const t4 = document.querySelector('#t4-input');

let Inner1BtnsCnt = 0;
let PageCnt = 0;

PageCountFunc();

SurveyPages.forEach(elee => {
    elee.querySelectorAll('.middle .Surbtn').forEach(ele => {
        ele.addEventListener('click', (e) => {
            if (Inner1BtnsCnt == 0) {
                let cntrdiv = document.createElement('div');
                cntrdiv.classList.add('ctnr');
                e.target.append(cntrdiv);
            
                AniStart(e.target.childNodes[1]);

                ele.classList.add('ActiveSurbtn');
                Inner1BtnsCnt = 1;

                PageCnt++;
                PageCountFunc();

                setTimeout(() => {
                    e.target.childNodes[1].remove();
                }, 1200);
            } else if (Inner1BtnsCnt == 1) { }
        })
    });
})

function PageCountFunc() {
    if (PageCnt == 0) {
        PageOn();
    } else {
        PrevPageOff();
        PageOn();
    }
    Inner1BtnsCnt = 0;
}

function PageOn() {
    if(SurveyPages[PageCnt] == undefined){
        setTimeout(() => {
            ProgressBarCnt[PageCnt - 1].style.width = '100%';
            setTimeout(() => {
                ProgressBarCnt.forEach(ele => {
                    ele.style.opacity = '0';
                    ResultLoading.style.zIndex = '1000';
                    ResultLoading.style.display = 'block';
                    setTimeout(() => {
                        ele.style.display = 'none';
                        ResultLoading.style.opacity = '1'
                        window.scrollTo( 0, 0 );
                        body.style.overflow = 'hidden';
                        setTimeout(() => {
                            ResultLoading.style.opacity = '0'
                            Result.style.zIndex = '10200';
                            Result.style.display = 'block';
                            setTimeout(() => {
                                Result.style.opacity = '1';
                                ResultLoading.style.zIndex = '-1000';
                                ResultLoading.style.display = 'none';
                                window.scrollTo( 0, 0 );
                                body.style.overflowY = 'scroll';
                            }, 1000);
                        }, 1400);
                    }, 500);
                })
            }, 600);
        }, 1000);
    } else{
        SurveyPages[PageCnt].style.display = 'block';
        if (PageCnt == 0) {
            setTimeout(() => {
                SurveyPages[PageCnt].style.opacity = '1';
            }, 1000);
        } else {
            setTimeout(() => {
                SurveyPages[PageCnt].style.opacity = '1';
                ProgressBarCnt[PageCnt - 1].style.width = '100%';
            }, 1600);
        }
    }
}

function PrevPageOff() {
    setTimeout(() => {
        SurveyPages[PageCnt - 1].style.opacity = '0';
        setTimeout(() => {
            SurveyPages[PageCnt - 1].style.display = 'none';
        }, 1500);
    }, 1000);
}

function Open(Target){
    Target.style.display = 'flex';
    Target.style.zIndex = '10300';
    setTimeout(() => {
        Target.style.opacity = '1'
    }, 1)
}

function Off(Target){
    Target.style.opacity = '0'
    setTimeout(() => {
        Target.style.zIndex = '-1010';
        Target.style.display = 'none';
    }, 500);
}

function copyToClickBoard(){
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
        console.log("??????")
        Status.green();
    })
        .catch(err => {
        console.log('?????? : ', err);
        Status.red();
    })
}

class Status{
    red(){
        alertbtn.innerText = '??? ?????? ?????? ???';
        alertbtn.classList.add('red');
        setTimeout(() => {
            alertbtn.classList.remove('red');
        }, 1000);
    }
    green(){
        alertbtn.innerText = '???? ?????? ?????? ????';
        alertbtn.classList.add('green');
        setTimeout(() => {
            alertbtn.classList.remove('green');
        }, 1000);
    }
    yellow(){
        alertbtn.innerText = '?????? EXCEPT ??????';
        alertbtn.classList.add('yellow');
        setTimeout(() => {
            alertbtn.classList.remove('yellow');
        }, 1000);
    }
}


FeedB.addEventListener('click', (e) => {
    AniStart9();
    Open(MailForm);
})
closebtn.addEventListener('click', (e) => {
    Off(MailForm);
})

shares[0].addEventListener('click', (e) => {
    e.preventDefault();
    NomalLink();
})
shares[1].addEventListener('click', (e) => {
    e.preventDefault();
    shareFacebook();
})
shares[2].addEventListener('click', (e) => {
    e.preventDefault();
    shareTwitter();
})
shares[3].addEventListener('click', (e) => {
    e.preventDefault();
    shareKakao();
})
shares[4].addEventListener('click', (e) => {
    e.preventDefault();
    NaverShare();
})
shares[5].addEventListener('click', (e) => {
    e.preventDefault();
    shareBand();
})

function NomalLink(){
    if (!navigator.clipboard) {
        copyToClickBoard();
    }else{
        Status.yellow();
    }
}
function shareTwitter() {
    const sendText = "Sofong"; 
    const sendUrl = "https://byeongpyung.github.io/Sofong"; 
    const url = "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl;
    window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
}
function shareFacebook() {
    const sendUrl = "https://byeongpyung.github.io/Sofong";
    const url = "http://www.facebook.com/sharer/sharer.php?u=" + sendUrl
    window.open(url, "", "width=486, height=286");
}
function shareBand(){
    const snsTitle = 'Sofong';
    const thisUrl = 'https://byeongpyung.github.io/Sofong';
    const url = "http://www.band.us/plugin/share?body="+snsTitle+"&route="+thisUrl
    window.open(url, "shareBand", "width=400, height=500, resizable=yes");
}
function shareKakao() {
 
    Kakao.init('f37faec09ba8c596a0c96178e49aa256');
   
    Kakao.Link.createDefaultButton({
      container: '#btnKakao',
      objectType: 'feed',
      content: {
        title: "Sofong",
        description: "????????? ?????? ????????? ??????????????? ???", // ????????? ??????
        imageUrl: "https://byeongpyung.github.io/Sofong", // ????????? URL
        link: {
           mobileWebUrl: "https://byeongpyung.github.io/Sofong",
           webUrl: "https://byeongpyung.github.io/Sofong"
        }
      }
    });
  }
  
// ????????? ??????
  function NaverShare() {
    var url = 'https://byeongpyung.github.io/Sofong';
    var title = 'Sofong';
    var shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;
    window.open(shareURL, "", "width=500, height=600, resizable=yes");
  }

// ???????????? ??????

  t4.value = window.location.href;
  
  const clipboard = new ClipboardJS('.normalLinkShare');

  clipboard.on('success', function(e) {
    alert('??????????????? ??????????????????.');
  });

  clipboard.on('error', function(e) {
    console.log('?????? ?????? : ', e);
  });