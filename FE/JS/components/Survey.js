import { AniStart,  AniStart9 } from "./animation.js";

const SurveyPages = document.querySelectorAll(".Survey .Section .inner");
const ProgressBarCnt = document.querySelectorAll('.progressBar li');
const ResultLoading = document.querySelector('.ResultLoading');
const Result = document.querySelector(".Result");
const Mailbox = document.querySelector('.FeedbackMailbox');
const FeedB = document.querySelector(".Feedback");
const body = document.querySelector('body');

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
                }, 1600);
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
                            Result.style.zIndex = '1000';
                            Result.style.display = 'block';
                            setTimeout(() => {
                                Result.style.opacity = '1';
                                ResultLoading.style.zIndex = '-1000';
                                ResultLoading.style.display = 'none';
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

function OpenMainForm(){

}

FeedB.addEventListener('click', (e) => {
    AniStart9();
    OpenMainForm();
})

