
import { AniStart, AniStart8, AniStart9 } from "./animation.js";

const SurveyPages = document.querySelectorAll(".Survey .Section .inner");
const ProgressBarCnt = document.querySelectorAll('.progressBar li');
const ResultLoading = document.querySelector('.ResultLoading');
const Mailbox = document.querySelector('.FeedbackMailbox');
const FeedLottie = document.querySelector(".FeedbackMailbox lottie-player");

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

                AniStart();

                ele.classList.add('ActiveSurbtn');
                Inner1BtnsCnt = 1;
                PageCnt++;

                PageCountFunc();

                setTimeout(() => {
                    e.target.childNodes[1].remove();
                }, 1600);

                console.log(PageCnt);
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
                        AniStart8();
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

setTimeout(() => {
    AniStart8();
}, 1000);

// Mailbox.addEventListener('click', (e) => {
//     AniStart9();
// })

// Django 전 까지 임시 기능

