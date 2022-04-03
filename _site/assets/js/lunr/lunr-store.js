var store = [{
        "title": "First posting",
        "excerpt":"깃허브 블로그 만들기 50% 성공 깃허브 블로그를 만드는데 반은 성공, 반은 실패했다. github.io 주소로 만들려고 했는데, 아무리 해도 css 적용이 안된다. 로컬 서버에서는 정상적으로 보였는데, 서버만 실행하면 다 깨져서 나왔다. 벌써 이걸로 3일은 구글링하면서 씨름한 것 같은데 아무리 해도 안되서 결국 repo 이름 지정하는 것으로 마무리 했다. 안되는 걸 계속...","categories": [],
        "tags": ["github-blog","jekyll"],
        "url": "/blog/first/",
        "teaser": null
      },{
        "title": "타입스크립트 기본 타입",
        "excerpt":"타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있다. 타입스크립트의 기본 타입에는 크게 12가지가 있다. String Number Boolean Object Array Tuple Enum Any Void Null Undefined Never String 자바스크립트 변수의 타입이 문자열인 경우 아래와 같이 선언해서 사용한다. let str: string = 'hi'; Number 타입이 숫자이면 아래와 같이 선언한다. let...","categories": ["typescript"],
        "tags": ["typescript","type"],
        "url": "/blog/typescript/basic-type/",
        "teaser": null
      },{
        "title": "타입스크립트에서의 함수",
        "excerpt":"웹 애플리케이션을 구현할 때 자주 사용되는 함수는 타입스크립트로 크게 다음 3가지 타입을 정의할 수 있다. 함수의 파라미터(매개변수) 타입 함수의 반환 타입 함수의 구조 타입 함수의 기본적인 타입 선언 타입스크립트의 함수 선언 방법을 이해하기 위해서 먼저 간단한 자바스크립트 함수를 살펴보자. function sum(a, b) { return a + b; } 위 자바스크립트...","categories": ["typescript"],
        "tags": ["typescript","function"],
        "url": "/blog/typescript/functions/",
        "teaser": null
      },{
        "title": "브라우저 렌더링 원리",
        "excerpt":"렌더링이란? HTML, CSS, JavaScript 등 개발자가 작성한 문서를 브러우저에 출력하는 과정 브라우저 렌더링 과정 불러오기(Loading) HTTP 모듈 또는 파일 시스템으로 전달 받은 리소스 스트림을 읽는 과정, 로더가 이 역할을 맡고 있다. 로더는 단순히 읽기만 하는 것이 아니라, 이미 데이터를 읽었는지 확인하고, 팝업창을 열지 말지, 파일을 다운로드 받을지를 결정한다. 다운받은 HTML,...","categories": ["web"],
        "tags": ["web","rendering"],
        "url": "/blog/web/rendering/",
        "teaser": null
      },{
        "title": "호이스팅(Hoisting)",
        "excerpt":"호이스팅(Hoisting)의 개념 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것 호이스팅이란 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다. 자바스크립트 파서가 함수 실행 전 해당 함수를 한 번 훑는다. 함수 안에 존재하는 변수 / 함수선언에 대한 정보를 기억하고 있다가...","categories": ["javascript"],
        "tags": ["javascript","hoisting"],
        "url": "/blog/javascript/hoisting/",
        "teaser": null
      },{
        "title": "클로저(Closure)",
        "excerpt":"클로저란? 📌 MDN 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 기억한다. 흔히 함수 내에서 함수를 정의하고 사용하면 클로저라고 한다. 하지만 대개는 정의한 함수를 리턴하고 사용은 바깥에서 하게 된다. function getClosure() { var text = 'variable 1'; return function () { return text; }; }...","categories": ["javascript"],
        "tags": ["javascript","closure"],
        "url": "/blog/javascript/closure/",
        "teaser": null
      },{
        "title": "인터페이스",
        "excerpt":"인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다. 타입 스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있다. 객체의 스펙(속성과 속성의 타입) 함수의 파라미터 함수의 스펙(파라미터, 반환 타입 등) 배열과 객체를 접근하는 방식 클래스 인터페이스 맛보기 let person = { name = 'Capt', age: 28 }; function logAge(obj:...","categories": ["typescript"],
        "tags": ["typescript","interface"],
        "url": "/blog/typescript/interface/",
        "teaser": null
      },{
        "title": "Margins",
        "excerpt":"margin 속성은 정의된 테두리 외부의 요소 주위에 공간을 만드는 데 사용된다. CSS를 사용하면 여백을 완전히 제어할 수 있다. 요소의 각 측면 (위, 오른쪼그 아래, 왼쪽)에 대한 여백을 설정하는 속성이 있다. Margin - Individual Sides CSS에는 요소의 각 측면에 대한 여백을 지정하는 속성이 있다. margin-top margin-right margin-bottom margin-left 모든 여백 속성은...","categories": ["css"],
        "tags": ["css","margin"],
        "url": "/blog/css/margin/",
        "teaser": null
      },{
        "title": "Margins",
        "excerpt":"css padding 속성은 정의된 테두리 내부의 요소 콘텐츠 주위에 공간을 생성하는 데 사용한다. css를 사용하면 padding을 완전히 제어할 수 있다. 요소의 각 측면(위, 오른쪽, 아래, 왼쪽)에 대한 padding을 설정하는 속성이 있다. Padding Individual Sides css에는 요소의 각 측면에 대한 padding을 지정하기 위한 속성이 있다. padding-top padding-right padding-bottom padding-left 모든 padding...","categories": ["css"],
        "tags": ["css","padding"],
        "url": "/blog/css/padding/",
        "teaser": null
      },{
        "title": "GET과 POST",
        "excerpt":"GET GET은 클라이언트에서 서버로 어떠한 리소스로부터 정보를 요청하기 위해 사용되는 메서드이다. 예를 들면 게시판의 게시물을 조회할 때 쓸 수 있다. GET을 통한 요청은 URL 주소 끝에 파라미터로 포함되어 전송되며, 이 부분을 쿼리 스트링이라고 부른다. GET은 URL 끝에 “?”를 붙이고 변수명1=값1&amp;변수명2=값2.. 형식으로 이어 붙이는 방식이다. www.example.com/show?name1=value1&amp;name2=value2 서버에서는 name1과 name2라는 파라미터 명으로...","categories": ["web"],
        "tags": ["web","get","post"],
        "url": "/blog/web/get-and-post/",
        "teaser": null
      },{
        "title": "이넘(Enums)",
        "excerpt":"이넘은 특정 값들의 집합을 의미하는 자료형이다. 예를 들면 아래와 같은 목록이 이넘이 될 수 있다. 나이키 아디다스 뉴발란스 이넘은 다른 프로그래밍 언어를 다뤄본 사람들에게는 친숙한 타입이다. 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원한다. 숫자형 이넘 타입스크립트에서 숫자형 이넘은 아래와 같이 선언한다. enum Direction { up = 1, Down, Left, Right, }...","categories": ["typescript"],
        "tags": ["typescript","enum"],
        "url": "/blog/typescript/enum/",
        "teaser": null
      },{
        "title": "Position",
        "excerpt":"position 속성은 요소에 사용되는 위치 지정 방법의 유형을 지정한다. static relative fixed absolute sticky 그 다음 요소는 위쪽, 아래쪽, 왼쪽 및 오른쪽 속성을 사용하여 배치된다. 그러나 이러한 속성은 position 속성을 먼저 설정 하지 않으면 작동하지 않으며, 위치값에 따라 다르게 작동한다. Position: static HTML 요소는 기본적으로 정적으로 배치된다. 정적 위치 요소는...","categories": ["css"],
        "tags": ["css","position"],
        "url": "/blog/css/position/",
        "teaser": null
      },{
        "title": "this 용법",
        "excerpt":"자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를 암묵적으로 전달 받는다. function square(number) { console.log(arguments); console.log(this); return number * number; } square(2); 함수 호출 방식과 this 바인딩 자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가...","categories": ["javascript"],
        "tags": ["javascript","this"],
        "url": "/blog/javascript/this/",
        "teaser": null
      }]
