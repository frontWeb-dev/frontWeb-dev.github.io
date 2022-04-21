---
title: '인터페이스'
categories:
  - typescript
tags:
  - typescript
  - interface
---

인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다. 타입 스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있다.

- 객체의 스펙(속성과 속성의 타입)
- 함수의 파라미터
- 함수의 스펙(파라미터, 반환 타입 등)
- 배열과 객체를 접근하는 방식
- 클래스

---

## 인터페이스 맛보기

```typescript
let person = { name = 'Capt', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}

logAge(person); // 28
```

위 logAge() 함수에서 받는 인자의 형태는 age를 속성으로 갖는 객체이다. 이렇게 인자를 받을 때 단순한 타입 뿐만 아니라 객체의 속성 타입까지 정의할 수 있다.

여기에 인터페이스를 적용하면 아래와 같다.

```typescript
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}

let person = { name: 'Capt', age: 28 };
logAge(person);
```

이제 logAge()의 인자가 좀 더 명시적으로 바뀌었다. logAge()의 인자는 personAge라는 타입을 가져야 한다.

인터페이스를 인자로 받아 사용할 때 항상 인터페이스의 속성 갯수와 인자로 받는 속성 갯수를 일치시키지 않아도 된다.  
다시 말해, 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 갯수가 더 많아도 상관 없다.  
또한, 인터페이스에 선언된 속성 순서를 지키지 않아도 된다.

---

## 옵션 속성

인터페이스를 사용할 때 인터페이스에 정의되어 있는 속성을 모두 다 꼭 사용하지 않아도 된다. 이를 옵션 속성이라고 한다.

```typescript
interface 인터페이스_이름 {
  속성?: 타입;
}
```

이처럼 속성 끝에 ?를 붙인다.

```typescript
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Cass',
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Cass
}

brewBeer(myBeer);
```

코드를 보면 brewBeer() 함수에서 Beer 인터페이스를 인자의 타입으로 선언했음에도 불구하고, 인자로 넘긴 객체에는 hop 속성이 없다. 왜냐하면 hop을 옵션 속성으로 선언했기 때문이다.

---

## 옵션 속성의 장점

옵션 속성의 장점은 단순히 인터페이스를 사용할 때 속성을 선택적으로 적용할 수 있다는 것 뿐만 아니라, 인터페이스에 정의되어 있지 않은 속성에 대해서 인지시켜줄 수 있다는 점이다.

```typescript
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Cass',
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.brewery); // Error: property 'brewery' does not exist on type 'Beer'
}

brewBeer(myBeer);
```

위와 같이 인터페이스에 정의되어 있지 않은 속성에 대해서는 오류를 표시한다. 만약 아래와 같이 오탈자가 나더라도 오류를 통해 알려준다.

```typescript
interface CraftBeer {
  name: string;
  hop?: number;
}

function brewBeer(beer: CraftBeer) {
  console.log(beer.nam); // Error: Property 'nam' does not exist on type 'Beer'
}
```

---

## 읽기 전용 속성

읽기 전용 속성은 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미한다.

```typescript
interface 인터페이스_이름 {
  readonly 속성: 타입;
}
```

인터페이스로 객체를 선언하고 나서 수정하려고 하면 아래와 같이 오류가 난다.

```typescript
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer = {
  brand: 'Belgian Monk',
};

myBeer.brand = 'Korean Carpenter'; // Error
```

---

## 읽기 전용 배열

배열을 선언할 때 ReadonlyArray타입을 사용하면 읽기 전용 배열을 생성할 수 있다.

```typescript
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1); // error
arr.push(4); // error
arr[0] = 100; // error
```

위처럼 배열을 ReadonlyArray로 선언하면 배열의 내용을 변경할 수 없다. 선언하는 시점에만 값을 정의할 수 있으니 주의해서 사용해야 한다.

---

# 객체 선언과 관련된 타입 체킹

타입스크립트는 인터페이스를 이용하여 객체를 선언할 때 좀 더 엄밀한 속성 검사를 진행한다.

```typescript
interface CraftBeer {
  brand?: string;
}

function brewBeer(beer: CraftBeer) {
  // ...
}
brewBeer({ brandon: 'what' });
// Error: Object literal may only specify know properties, but 'brandon' does not exist in type 'CraftBeer'. Did you mean to write 'brand'?
```

위 코드를 보면 CraftBeer 인터페이스에는 brand라고 선언되어 있지만 brewBeer() 함수에 인자로 넘기는 myBeer객체에는 brandon이 선언되어 있어서 오탈자 점검을 요하는 오류가 난다.

만약 이런 타입 추론을 무시하고 싶다면 아래와 같이 선언한다.

```typescript
let myBeer = { brandon: 'what' };
brewBeer(myBeer as CraftBeer);
```

만약 인터페이스에 정의하지 않은 속성들을 추가로 사용하고 싶을 때는 아래와 같은 방법을 사용한다.

```typescript
interface CraftBeer {
  brand?: string;
  [propName: string]: any;
}
```

---

## 함수타입

인터페이스는 함수의 타입을 정의할 때에도 사용할 수 있다.

```typescript
interface login {
  (username: string, password: string): boolean;
}
```

함수의 인자의 타입과 반환 값의 타입을 정한다.

```typescript
let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
};
```

---

## 클래스 타입

C#이나 자바처럼 타입스크립트에서도 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있다.

```typescript
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }

  constructor() {}
}
```

---

## 인터페이스 확장

클래스와 마찬가지로 인터페이스도 인터페이스 간 확장이 가능하다. 이를 통해 한 인터페이스의 속성을 다른 인터페이스로 복사할 수 있으므로 인터페이스를 재사용 가능한 구성 요소로 분리하는 방법에 더 많은 유연성을 제공한다.

```typescript
interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
```

혹은 아래와 같이 여러 인터페이스를 상속받아 사용할 수 있다.

```typescript
interface Person {
  name: string;
}

interface Drinker {
  drink: string;
}

interface Developer extends Person, Drinker {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';
```

---

## 하이브리드 타입

자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스 역시 여러 가지 타입을 조합하여 만들 수 있다.  
예를 들어, 다음과 같이 함수 타입이면서 객체 타입을 정의할 수 있는 인터페이스가 있다.

```typescript
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = function (beer: string) {} as CraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function () {};
  return my;
}

let brewBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
```

---

[출처 : 타입스크립트 핸드북 - 인터페이스](https://joshua1988.github.io/ts/guide/interfaces.html)
