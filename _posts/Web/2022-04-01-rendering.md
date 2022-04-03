---
title: '브라우저 렌더링 원리'
categories:
  - web
tags:
  - web
  - rendering
---

## 렌더링이란?

HTML, CSS, JavaScript 등 개발자가 작성한 문서를 브러우저에 출력하는 과정

---

## 브라우저 렌더링 과정

1. 불러오기(Loading)

   HTTP 모듈 또는 파일 시스템으로 전달 받은 리소스 스트림을 읽는 과정, 로더가 이 역할을 맡고 있다.  
   로더는 단순히 읽기만 하는 것이 아니라, 이미 데이터를 읽었는지 확인하고, 팝업창을 열지 말지, 파일을 다운로드 받을지를 결정한다.

2. 다운받은 HTML, CSS를 Object Model로 만든다

   HTML 파일은 HTML 파서에 의해 파싱을 거쳐 DOM트리로 변환된다.
   ![DOM트리](https://blog.kakaocdn.net/dn/Kx2lI/btrp654QRR5/FbvsaqCpJKGxhTFipOIcB1/img.png 'DOM트리')

   CSS 파일은 CSS 파서에 의해 파싱되어 CSSOM 트리로 변환된다.
   ![CSSOM트리](https://blog.kakaocdn.net/dn/nggWG/btrqps4lqLQ/tnIzis3RE986DbmJ11PQUk/img.png 'CSSOM트리')

3. DOM과 CSSOM을 이용하여 Render Tree를 생성한다.

   ![Render Tree](https://blog.kakaocdn.net/dn/ujKPZ/btrqdUu7JgP/bwwb7TRqOFQ3yyiCZpolL0/img.png 'Render 트리')

   > 📌 Render Tree에는 실제 화면에 표현되는 노드들로만 구성된다.
   >
   > display : none 속성은 어떤 공간도 차지하지 않기 때문에 Render Tree에서 제외된다.
   > visibility : invisible 속성은 공간은 차지하고 요소가 보이지 않게만 하기 때문에 Render Tree에 포함된다.

4. Layout

   Render Tree를 토대로 그려질 각 노드들의 정확한 위치와 크기를 계산한다.
   브라우저 화면의 어떤 위치에 어떤 크기로 출력될 지 계산하는 단계라고 할 수 있다.

   > 📌 Viewport
   >
   > 그래픽이 표시되는 브라우저의 영역, 크기
   > 뷰포트는 모바일의 경우 디스플레이의 크기, PC의 경우 브라우저 창의 크기에 따라 달라진다.

5. Paint

   Layout 계산이 완료되면 Render Tree의 각 노드를 화면 상의 실제 픽셀로 변환한다.

- Script 태그 처리

  HTML 파서가 Script 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다.

  제어 권한을 넘겨받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 혹은 script의 src attribute에 정의된 js 파일을 로드하고 파싱, 기계어로 컴파일하여 실행한다.

  자바스크립트 실행이 완료되면 다시 HTML 파서로 권한을 넘겨서 중지했던 시점부터 다시 DOM 생성을 재개한다

---

## 렌더링 과정 요약

> 주소창에 URL을 입력한다.  
> 해당 URL 서버로 찾아간다.  
> DNS가 연결해 줄 곳을 찾는다.  
> 서버에서 HTML 파일을 클라이언트로 보낸다.  
> HTML 파일 파싱 및 DOM Tree 생성  
> link 태그를 만나 css 파싱 및 CSSOM 트리 생성  
> DOM, CSSOM을 합친 Render Tree 생성  
> JavaScript를 만나면, HTML 파서가 JS 코드를 실행하기 위해 파싱을 중단한다.  
> JS 엔진 실행 및 JS 코드 파싱

---

[출처: 브라우저의 렌더링 과정](https://velog.io/@st2702/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95)
