let a = [1, null];

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};


interface Foo {
  bar: number
}

let foo: Foo = {};

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};
