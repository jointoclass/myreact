/* 리액트의 반드시 숙지해야할 규칙 7가지
1. let, const
2. 화살표 함수 () => {}
3. 구조 분해 할당 (Destructuring)
4. 스프레드 연산자 (...)
5. map, filter, find
6. async/await
7. import, export
*/

// export 키워드를 붙여야 외부 파일의 컴포넌트가 import 할 수 있음
export function MyComp() {
  const colors = ["black", "white", "blue"];
  const [first, second] = colors; // 배열의 구조분해할당 []
  const user = {
    name: "Steve",
    age: 25,
  };
  const { name, age } = user; //객체의 구조분해할당 {}
  console.log(first + " " + second);
  console.log(name + " " + age);

  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [...array1, ...array2];
  console.log(array3);
  // 스프레드 연산자의 유용한 사용법
  // 매열에 새로운 데이터를 추가하는데 항상 제일 앞에 추가
  const array4 = [10, ...array3];
  console.log(array4);
  const array5 = [...array4, 100]; // 제일 뒤에 추가하고 싶을때
  console.log(array5);
  // 참조복사가 아닌 값복사를 할 수 있음
  const array6 = array1; // 참조복사
  const array7 = [...array1]; //값복사
  console.log(array6); // [1,2,3]
  array1[0] = 10;
  console.log(array6); // [10,2.3]
  console.log(array7); // [1,2,3]

  const numbers = [1, 2, 3];
  const mapResult = numbers.map((num) => num * 2);
  console.log(mapResult); // 2,4,6
  const filterResult = numbers.filter((number) => number % 2 === 0);
  console.log(filterResult); // 2
  const users = [
    { id: 1, name: "Kim" },
    { id: 2, name: "Lee" },
  ];
  const findResult = users.find((user) => user.id === 2);
  console.log(findResult);

  function method1(x) {
    console.log("method1함수의 출력 : " + x);
  }

  const isLoggedIn = false;

  const itemList = [
    { id: 1, name: "사과", description: "맛있는 빨간 사과" },
    { id: 1, name: "바나나", description: "맛있는 노란 바나나" },
    { id: 1, name: "포도", description: "신선한 포도" },
  ];

  return (
    <>
      <p>나의 컴포넌트</p>
      <MyCompOnly />
      <div onClick={() => method1("1000")}>여기를 클릭하시오!</div>
      {isLoggedIn ? <p>당신은 로그인상태입니다.</p> : <p>로그인해주세요.</p>}
      {isLoggedIn && <p>true면 보여주세요</p>}
      <h2>과일목록</h2>
      {itemList.map((item, i) => (
        <p key={item.id}>
          {item.name} : {item.description}
        </p>
      ))}
    </>
  );
}

// export키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyCompOnly() {
  return (
    <>
      <p>내부 컴포넌트</p>
    </>
  );
}
