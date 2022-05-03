---
title: "Web Worker"
categories:
  - javascript
tags:
  - javascript
---

자바스크립트는 인터프리터 언어이며 단일 스레드이다.
자바스크립트에서 동적으로 UI 변경 작업이 있을시에는 UI스레드라는 공간에서 큐 방식으로 처리 순서를 담아 놓는다.

## Web Worker란?

HTML 페이지에서 스크립트를 실행할 때 그 페이지는 스크립트가 완료할 때 까지 응답하지 않게 된다. 이를 해결하기 위해서 Web Worker를 사용하는데, Web worker는 페이지의 퍼포먼스에 영향을 주지 않고 다른 스크립트와는 독립적으로 백그라운드에서 실행되는 javascript이다.

기존의 웹은 다중 스레드가 불가능했기 때문에 작업이 끝나기 전까지 UI가 멈춰버리는 경우가 발생했지만, Web worker 덕분에 웹은 멀티 스레드 구동이 가능해졌다.
즉, Web worker는 스레드라는 개념으로 볼 수 있다.

Web worker는 다음과 같이 로딩과 실행이 오래 걸리는 자바스크립트 파일에서 사용하기 적절하다.

- 매우 큰 문자열의 암호화/복호화
- 복잡한 수학계산(이미지/비디오 처리 포함)
- 매우 큰 배열의 정렬

---

## Web Worker 사용하기

```javascript
if (window.Worker) {
  // 웹 워커 사용 가능
} else {
  // 웹 워커 사용 불가능
}
```

Web worker를 사용하기 전에 위의 코드를 통해 해당 브라우저가 웹 워커를 지원하는지 체크할 수 있다.

Web worker는 Worker 클래스를 사용하여 js 파일을 넘겨주게 된다. 그러면 Web worker는 넘겨준 js 파일 내의 코드대로 작동하게 된다.

```javascript
var w;

function startWorker() {
  if (window.Worker) {
    w = new Worker("example_worker.js");
    w.onmessage = function (event) {
      alert(event.data);
    };
  } else {
    alert("Web worker를 지원하지 않는 브라우저 입니다.");
  }
}
```

```javascript
// example_worker.js

function timedCount() {
  postMessage("test");
  setTimeout("timedCount()", 1000);
}

timedCount();
```

post Message에 전달 될 수 있는 인자 타입 값은 String, Inteager, Boolean, null, undefined, Object, Array로 거의 다 된다고 봐도 무방하다.

example_workers.js에서는 1초마다 'test'라는 메세지를 브라우저로 보내주게 된다. 그러면 웹페이지에서는 해당 메세지를 받아 작업을 처리한다.

만약 위의 예제가 웹 워커 없이 순수 단일 스레드로 웹페이지에서 작업을 시켰다면 브라우저는 1초 단위로 멈추게 된다.  
하지만, Web worker를 통해 웹 브라우저에는 전혀 영향이 없이 작업 가능하게 된 것이다.

```javascript
// 웹 워커 종료 코드
function stopWorker() {
  w.terminate();
  w = undefined;
}
```

Web worker.terminate()를 통해 작업중이던 웹 워커를 중지시킨 뒤 undefined로 메모리에서 해제해준다.

---

## 출처

- [Web Worker - 웹에서 멀티 쓰레드 구현하기](https://boxfoxs.tistory.com/294)
