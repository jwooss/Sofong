<p align="center">
    <img src="https://user-images.githubusercontent.com/79036088/162887245-c3606314-3792-4d41-9080-a0bc08c57ea2.png">
<p/>

<br><br>

# 🎶 소퐁(Sofong) 🎶

***"맨날 똑같은 노래만 들어서 지겨우시다고요? 그럼 소퐁(Sofong)을 한번 이용해보세요 !!"***

***설문조사를 통해 사용자의 기분을 알아낸 후, 사용자의 기분에 맞춰 노래를 추천해줍니다.***

<br>

# 🙋‍♂️ 참가 팀원, 역할 🙋‍♂️
| 팀원 | 역할 | 역할 |
|:------:|:------:|:------:|
| [ᴋɪᴍʜʏᴇᴏɴᴍɪɴ](https://github.com/qetqet910) | 팀장 | 풀스택, 디자인 |
| [ʜᴏɴɢɪɴsᴜɴɢ](https://github.com/BackdevHong) | 팀원 | 프론트 |
| [ᴋɪᴍᴛᴀᴇᴋᴊᴜɴ](https://github.com/KIMTAEKJUN) | 팀원 | 백엔드, DB |
| [ʟᴇᴇᴊᴇᴏɴɢᴍɪɴ](https://github.com/rnlsrnlsdl) | 팀원 | 기획, 디자인 |

<br><br>

# 📚 기술 스택 📚
> ### Front-end - Html, Sass, JavaScript
> ### Back-end - Django, MongoDB
> ### Infra - AWS, NGINX
> ### Library - Lottie.js

<br><br>

# ✏️ Code Convention ✏️
***Git Branch -***
```markdown
📝main
 ┣🛠kimhyeonmin
 ┣🛠honginsung
 ┣🛠kimtaekjun
```

***Git commit rules -***
```markdown
[Add] 기능추가 / FE, BE 구분해서 쓰기
[Delete] 삭제 / FE, BE 구분해서 쓰기 / 삭제한 파일 명 정확하게 쓰기
[Update] 기능 수정 / FE, BE 구분해서 쓰기
[Fix] 버그 수정 / FE, BE 구분해서 쓰기
[Docs] 문서 정리
[Chore] 잡일
```

***Foldering -***
```markdown
📁Sofong
 ┣📁FE
 ┃ ┣📁IMG
 ┃ ┃ ┣📁favicon
 ┃ ┃ ┃ ┗⭐️favicon.ico
 ┃ ┃ ┣🖼arrow.png
 ┃ ┃ ┣🖼Intro1.png
 ┃ ┃ ┣🖼Intro2.png
 ┃ ┃ ┗🖼preview.png
 ┃ ┣📁JS
 ┃ ┃ ┣📁compeonents
 ┃ ┃ ┃ ┣📝animation.js
 ┃ ┃ ┃ ┗📝page.js
 ┃ ┃ ┣📁JSON
 ┃ ┃ ┃ ┣📝Intro1.json
 ┃ ┃ ┃ ┣📝Intro2.json
 ┃ ┃ ┃ ┣📝Intro3.json
 ┃ ┃ ┃ ┗📝Loading.json
 ┃ ┣📁SASS
 ┃ ┃ ┣📁abstracts
 ┃ ┃ ┃ ┣📝_Load.scss
 ┃ ┃ ┃ ┣📝_mixins.scss
 ┃ ┃ ┃ ┗📝_Variable.scss
 ┃ ┃ ┣📁base
 ┃ ┃ ┃ ┣📝_media.scss
 ┃ ┃ ┃ ┗📝_reset.scss
 ┃ ┃ ┣📁components
 ┃ ┃ ┃ ┣📝_Button.scss
 ┃ ┃ ┃ ┣📝_IntroTitle.scss
 ┃ ┃ ┃ ┣📝_Title.scss
 ┃ ┃ ┃ ┗📝components.scss
 ┃ ┃ ┣📁page
 ┃ ┃ ┃ ┣📝_Anime.scss
 ┃ ┃ ┃ ┣📝_Loading.scss
 ┃ ┃ ┃ ┣📝_pages.scss
 ┃ ┃ ┃ ┗📝_Section.scss
 ┃ ┃ ┣📝style.css
 ┃ ┃ ┣📝style.css.map
 ┃ ┃ ┗📝style.scss
 ┃ ┣📝.gitignore
 ┃ ┣📝index.html
 ┃ ┣📝package.lock.json
 ┃ ┣📝package.json
 ┃ ┗📝webpack.config.js
 ┣📁Sofong_apps
 ┃ ┣📁__pycache__
 ┃ ┃ ┣📝__init__.cpython-39.pyc
 ┃ ┃ ┣📝admin.cpython-39.pyc
 ┃ ┃ ┣📝apps.cpython-39.pyc
 ┃ ┃ ┗📝models.cpython-39.pyc
 ┃ ┣📁migrations
 ┃ ┃ ┣📁__pycache__
 ┃ ┃ ┃ ┣📝__init__.cpython-39.pyc
 ┃ ┃ ┃ ┗📝0001_initial.cpython-39.pyc
 ┃ ┃ ┣📝__init.py__
 ┃ ┃ ┗📝0001_inital.py
 ┃ ┣📝__init__.py
 ┃ ┣📝admin.py
 ┃ ┣📝apps.py
 ┃ ┣📝models.py
 ┃ ┣📝tests.py
 ┃ ┗📝views.py
 ┣📁Sofong_project
 ┃ ┣📁__pycache__
 ┃ ┃ ┣📝__init__.cpython-39.pyc
 ┃ ┃ ┣📝settings.cpython-39.pyc
 ┃ ┃ ┗📝urls.cpython-39.pyc
 ┃ ┣📝__init__.py
 ┃ ┣📝asgi.py
 ┃ ┣📝settings.py
 ┃ ┣📝urls.py
 ┃ ┗📝wsgi.py
 ┣📝db.sqlite3
 ┣📝manage.py
 ┗📝READMD.md

```
<br><br>

# ⭐ To do-List ⭐
> + #### 04-12 ~ 04-17 - 
> ```markdown
> 1. 초기 파일 구조 작성❌
> 2. 초기 ERD 작성❌
> ```
> + #### 04-18 ~ 04-24 - 
> ```markdown
> 1. 퍼블리싱 프로토타입 작성 76%
> 2. 디자인 시안 만들기 90%
> 3. 초기 파일 구조 작성✅
> 4. 초기 ERD 작성❌
> ```
> + #### 04-25 ~ 05-01 - 
> ```markdown
> 1. 퍼블리싱 프로토타입 작성 88% (디버깅, 공유, 반응형) 남음
> 2. 디자인 시안 만들기 100%✅ 
> 3. Django 적용
> 4. 초기 ERD 작성
> 5. 질문 기획 10%
> ```


<br>

| 김현민 | 김택준 | 홍인성 | 이정민 |
| :------------------: | :------------------: | :------------------: | :------------------: |
|  퍼블리싱 프로토타입 작성  |  Django 공부해오기  |  React 공부해오기  |  디자인 시안 만들기 | 
|  76% 완성 | 진행중 | 진행중 | 90% 완성 |
