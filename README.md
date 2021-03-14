# Typechain

> This is just for studying typescript repo 😇

> Make blockchain with typescript 🧐

> with [Nomadcoders Typescript Course](https://nomadcoders.co/typescript-for-beginners/lobby)

# Goals

- Learn about big picture of `typescript` 🔥

- Learn about simple `blockchain` mechanism 🚀

# What is Typescript?

![typescript](screenshots/typescript.png)

타입스크립트는 자바스크립트의 `superset(확장판)` 이다. 좀 더 구체적이고 간단하게 말하면 자바스크립트에 타입을 부여한 언어이다.자바스크립트는 동적언어로서 런타임시기에 타입에 대한 검사를 한다. 그로 인해 타입 오류는 프로그램을 실행해보지 않고는 잡기가 힘들다. 또한 타입에 맞지않음에도 자바스크립트는 에러는 발생시키지않으면서 작동을 한다. (undefined, null 등으로 인한 에러) 이러한 에러를 타입을 부여함으로서 미연에 방지할 수 있게 된다. 이로 인해 코드의 품질과 개발의 생산성이 높아진다.

## Type

> syntax : 변수 다음에 : 을 찍고 그 뒤에 해당 타입을 적는다.

### String

```typescript
const name: string = 'jjanmo';
```

### Number

```typescript
let age: number = 25;
```

### Boolean

```typescript
let isMale: boolean = true;
```

### Array

```typescript
//1) 일반적인 방법
let hobbies: string[] = ['yoga', 'reading', 'game'];

//2)제네릭 배열 타입
let favNumbers: Array<number> = [7, 17, 77];
```

> 제네릭 배열 타입은 `Array<elemType>` 와 같은 형태로 적는 방식이다.

### Tuple

튜플은 요소의 타입과 개수가 고정된 배열로서 표현하는 타입을 말한다. 말로 들으면 약간 이해하기 어려울수도 있겠지만 코드로 보면 간단하다.

```typescript
let arr: [string, number, string] = ['hello', 7, 'world'];

arr[1].substring(1); // 'ello'

arr[4] = 'happy coding'; // error
```

> 코드에서 보면 arr은 항상 문자열, 숫자, 문자열 타입의 개수가 3개인 배열로 고정되어 있다. 그래서 arr[1]은 문자열이기 때문에 접근해서 문자열 메소드를 사용할 수 있지만, arr[4]는 애초에 배열의 개수와 타입이 정해졌기 때문에 접근조차 할 수 없다.

### Enum

이넘은 C나 자바에서 사용되는 타입으로 특정 값들의 집합을 의미한다.

```typescript
enum Languages {
  Typescript,
  Javascript,
  Python,
}

let lang1: Languages = Languages.Javascript;
console.log(lang1); //1

let lang2: Languages = Languages[2];
console.log(lang2); //Python
```

> 이넘은 0부터 시작해서 멤버에 번호(인덱스)를 매긴다. `Typescript, Javascript, Python,`는 `0,1,2` 순으로 값을 갖게 된다. 이 값은 수동으로 바꿀 수 있다. 또한 값(인덱스)을 통해서 접근할 수도 있다.

### Any

알지 못하는 타입을 표현해야하는 경우 사용한다. 이렇게 적으면 해당 변수는 타입 검사를 하지 않고 넘어간다.

```typescript
let uncertainty: any = 10;

uncertainty = 'I dont know';

uncertainty = true;
```

> 위의 코드처럼 타입이 정해져 있지 않기때문에 동적으로 다른 타입을 할당 할 수 있다.

```typescript
const arr: any[] = ['10', 7, 'impossible', false];
```

> 전체의 타입을 정확히 알지 못하는 경우 any를 사용한다.(ex. 여러 타입이 섞여 있는 배열)

### Undefined & Null

각자의 이름으로 타입을 갖는다. 자바스크립트에서 알고 있는 undefined와 null 타입과 같다. 타입스크립트에서 이 자체로 특별하게 사용하는 경우는 거의 없다고한다.

### Void

어떤 타입도 존재할 수 없음을 나타낸다. 일반적으로 함수에서 `void` 라고 쓰면 반환하는 것이 아무것도 없음을 뜻한다.

```typescript
const blockchain: Block[] = []; //Block은 클래스(객체)

//1) function declaration
function addBlock(block: Block): void {
  blockchain.push(block);
}

//2) arrow function
const logHash = (block: Block): void => console.log(block.hash);
```

### Never

절대 발생할 수 없는 타입을 말한다. 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 사용된다.

> 이 부분은 아직 경험이 부족해서 그런지 어떤 경우에 사용해야하는지 감이 오지 않는다... 😱

```typescript
function infiniteLoop(): never {
  while (true) {}
}
```

### Object

객체 타입은 원시타입(number, string, boolean, null, undefined, symbol, bigint)이 아닌 나머지를 나타낸다.

```typescript
const getHashForBlock = (block: Block): string =>
  Block.calculateHash(block.index, block.previousHash, block.timestamp, block.data);
```

> Block 이라는 객체 타입을 사용한다.

## Interface

## Class

<br />

## Blockchain Mechanism

> 이 프로젝트에서 타입스크립트를 통해서 만들어진 블록체인은 아래 이미지보다 좀 더 단순화하여 구현한 것이다.

> `Block` 이라는 클래스를 통해서 객체(인스턴스)를 지속적으로 생성하여 연결하여 블록체인이 만들어지는 과정을 나타내었다. 블록체인이 흘러가는 큰 흐름만 알면 구현할 수 있는 정도의 수준이다.

![mechanism1](screenshots/blockchain1.png)
