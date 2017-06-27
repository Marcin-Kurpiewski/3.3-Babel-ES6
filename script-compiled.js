'use strict';

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

function multi(x , y){
    y = y || 1;

    return x * y;
}
