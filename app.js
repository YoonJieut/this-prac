function showThis() {
  console.log(this);
}

const obj = {
  name: "My Object",
  display: showThis
};

// 일반 함수로서 호출: this는 전역 객체나 undefined(엄격 모드에서)를 가리킨다.
// showThis(); 

// 메서드로서 호출: this는 해당 메서드를 포함하고 있는 객체를 가리킨다.
obj.display();

// bind 메서드를 사용하여 this 값을 명시적으로 바인딩
const boundFunction = showThis.bind(obj);
boundFunction(); // this는 obj를 가리킨다.

