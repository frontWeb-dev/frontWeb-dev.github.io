---
title: '타입스크립트에서의 함수'
categories:
  - typescript
tags:
  - typescript
  - function
---

웹 애플리케이션을 구현할 때 자주 사용되는 함수는 타입스크립트로 크게 다음 3가지 타입을 정의할 수 있다.

- 함수의 파라미터(매개변수) 타입
- 함수의 반환 타입
- 함수의 구조 타입

---

## 함수의 기본적인 타입 선언

타입스크립트의 함수 선언 방법을 이해하기 위해서 먼저 간단한 자바스크립트 함수를 살펴보자.

```typescript
function sum(a, b) {
  return a + b;
}
```

위 자바스크립트 함수에 타입을 부여하면 아래와 같다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

기존 자바스크립트 함수의 선언 방식에서 매개변수와 함수의 반환 값에 타입을 추가하였다.

---

## 함수의 인자

타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주한다. 따라서, 함수의 매개변수를 설정하면 undefined나 null이라도 인자로 넘겨야하며 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인한다.  
달리 말하면 **정의된 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다는 의미**이다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // Error, too many parameters
sum(10); // Error, too few parameters
```

위와 같은 특성은 정의된 매개변수의 갯수 만큼 인자를 넘기지 않아도 되는 자바스크립트의 특성과 반대된다.  
만약 이러한 특성을 살리고 싶다면 ?를 이용해서 아래와 같이 정의할 수 있다.

```typescript
function sum(a: number, b?: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // Error, too many parameters
sum(10); // 10
```

매개변수 초기화는 ES6 문법과 동일하다.

```typescript
function sum(a: number, b = '100'): number {
  return a + b;
}

sum(10, undefined); // 110
sum(10, 20, 30); // Error, too many parameters
sum(10); // 110
```

---

## REST 문법이 적용된 매개변수

ES6 문법에서 지원하는 Rest 문법은 타입스크립트에서 다음과 같이 사용할 수 있다.

```typescript
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }

  return a + totalOfNums;
}
```

---

## this

타입스크립트에서 자바스크립트의 this가 잘못 사용되었을 때 감지할 수 있다.  
[this에 대한 내용 참고](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)

타입스크립트에서 this가 가리키는 것을 명시하려면 아래와 같은 문법을 사용한다.

```typescript
function 함수명(this: 타입) {
  // ...
}
```

위 문법을 적용한 예시

```typescript
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count;
    };
  },
};

let getCount = vm.init();
let count = getCount();
console.log(count); // 10
```

위의 코드를 타입스크립트로 컴파일 했을 때, 만일 --noImplicitThis 옵션이 있더라도 에러가 발생하지 않는다.

---

## 콜백에서의 this

앞에서 살펴본 일반적인 상황에서의 this와는 다르게 콜백으로 함수가 전달되었을 때의 this를 구분해줘야 할 때가 있다.  
그럴땐 아래와 같이 강제할 수 있다.

```typescript
interface UIElement {
  // 아래 함수의 `this: void`코드는 함수에 `this`타입을 선언할 필요가 없다는 의미이다.
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생한다.
    this.info = e.message;
  }
}

let handler = new Handler();
uiElement.addClickListener(handler, onClick); // Error!
```

만약 UIElement 인터페이스의 스펙에 맞춰 Handler를 구현하려면 아래와 같이 변경한다.

```typescript
class Handler {
  info: string;
  onClick(this: void, e: Event) {
    // `this`의 타입이 void이기 때문에 여기서는 `this`를 사용할 수 없다.
    console.log('clicked!');
  }
}

let handler = new Handler();
uiElement.addClickListener(handler, onClick);
```

> 📌 Tip
>
> 클래스의 메서드 방식으로 선언하는 것과 변수에 화살표 함수를 연결하는 것의 차이점
>
> One arrow function is created per object of type Handler. Methods, on the other hand, are only created once and attached to Handler’s prototype. They are shared between all objects of type Handler
>
> Handler 유형의 개체당 하나의 화살표 함수가 생성된다. 반면에 메서드는 한 번만 생성되어 Handler의 프로토타입에 연결된다. Handler 유형의 모든 객체 간에 공유된다.
>
> [관련 내용 - stackoverflow](https://stackoverflow.com/questions/51464318/arrow-function-vs-class-methods-memory-footprint)

---

[출처 : 타입스크립트 핸드북 - 타입스크립트에서의 함수](https://joshua1988.github.io/ts/guide/functions.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%ED%95%A8%EC%88%98)
