---
title: '타입스크립트 기본 타입'
categories:
  - typescript
tags:
  - typescript
  - type
---

타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있다.  
타입스크립트의 기본 타입에는 크게 12가지가 있다.

- String
- Number
- Boolean
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

---

# String

자바스크립트 변수의 타입이 문자열인 경우 아래와 같이 선언해서 사용한다.

```typescript
let str: string = 'hi';
```

---

# Number

타입이 숫자이면 아래와 같이 선언한다.

```typescript
let num: number = '10';
```

---

# Boolean

타입이 진위 값인 경우에는 아래와 같이 선언한다

```typescript
let isLoggedIn: boolean = false;
```

---

# Array

타입이 배열인 경우 간단하게 아래와 같이 선언한다.

```typescript
let arr: number[] = [1, 2, 3];
```

또는 아래와 같이 제네릭을 사용할 수 있다.

```typescript
let arr: Array<number> = [1, 2, 3];
```

---

# Tuple

튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.

```typescript
let arr: [string, number] = ['Hi', 10];
```

만약 정의하지 않은 타입, 인덱스로 접근할 경우 오류가 난다.

```typescript
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type `[string, number]`
```

---

# Enum

이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미한다.

```typescript
enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt;
```

이넘은 인덱스 번호로도 접근할 수 있다.

```typescript
enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers[0];
```

이넘의 인덱스를 사용자 편의로 변경하여 사용할 수도 있다.

```typescript
enum Avengers {
  Capt = 2,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor
```

---

# Any

기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입이다.  
단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있다.

```typescript
let str: any = 'h1';
let num: any = 10;
let arr: any = ['a', 2, true];
```

---

# Void

변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입이다.

```typescript
let unuseful: void = undefined;

function notuse(): void {
  console.log('sth');
}
```

---

[출처 : 타입스크립트 핸드북 - 타입스크립트 기본 타입](https://joshua1988.github.io/ts/guide/basic-types.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85)
