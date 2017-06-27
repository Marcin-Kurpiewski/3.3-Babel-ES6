
// zadanie 1
const firstWord= "Hello",
    secondWord= "World";

console.log(`${firstWord} ${secondWord}`);

// zadanie 2

function multiply1(x , y = 1){
    if(y==0){
         console.log(`nie mnożymy przez ${y}`);
    }
    else {
         console.log(`Wynik mnożenia wynosi: ${x * y}`);
    }
}


const multiply2 = (x, y=1) => { return ` Wynik mnożenia wynosi: ${x * y}` } ;

multiply1(10,0);
multiply1(15,2);
multiply1(20);

console.log(multiply2(10,5));
console.log(multiply2(10));
console.log(multiply2(10,0));

// zadanie 3


const average = ((...args) => args.reduce((curr, next)=> curr + next)/ args.length);

console.log('Średnia ocen wynosi ' + average(2,2,2,2,2));


//zadanie 4

const grades =[1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zadanie 5


const tableData = [1, 4, 'Iwona', false, 'Nowak'];

const [, , name, ,surname] = tableData;
 console.log(`${name} ${surname}`);

