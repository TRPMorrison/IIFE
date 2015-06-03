// (function() {
//     'use strict';

var Person = function(a, b, c) {

    this.name = a;
    this.age = b;
    this.color = (c !== undefined) ? c : 'Blue';
    this.drives = function(what, newCondition) {
        what.condition = newCondition;

        if (newCondtion === 'Wrecked') {

            this.condition = 'Arrested';
        }
    };
};

var Car = function(a, b, c) {
    this.make = a;
    this.color = b;
    this.condition = (c !== undefined) ? c : 'New';
};

var tim = new Person('Tim', 31);
var bill = new Person('Bill', 99);
var crv = new Car('Honda', 'Black');

// }());

//     this.isCool = true;
//     this.greeting = function() {
//         return 'Hello, how are you ' + this.name;
//     };
// };



//     var trini = new Person('Trini', 38);
//     console.log(trini);
//     console.log(trini.greeting('Cody'));


//     window.me = new Person('Tim', 31, 'Orange');

//     window.me2 = new Person('JD', 31, 'Pink');

//     window.me3 = new Person('Dwight', 31, 'Purple');

//     var trini = new Person('Trini', 38, 'Yellow');
//     console.log(trini);
//     console.log(me);

//     var me2 = new Person('Bill', 55, 'Black');

//     console.log(me2);

// }());
//     }
//     var Person = function() {
//         this.name = 'Tim';
//     };

//     var me = new Person();
//     console.log(me);

// }());





// (function () {

//   var tim = {};

//   tim.text = '';

//   tim.greeting = function (x) {
//     tim.text = x;
//   };

//   tim.goodbye = function () {
//     return 'Goodbye';
//   };

//   tim.modGreeting = function () {
//     updateGreeting();
//   };

//   function updateGreeting() {
//     tim.greeting('Hello from inside updateGreeting');
//   }

//   tim.isHappy = true;

//   tim.firstName = 'Tim';

//   tim.lastName = 'Whitacre';

//   window.tim = tim;


// }());


// (function() {

//   var trini = {};

//   trini.greeting = function() {
//     return 'Hello!';
//   };

//   trini.goodbye = function() {
//     return 'Goodbye';
//   };

//   trini.isHappy = true;

//   trini.firstName = 'Trini';

//   trini.lastName = 'Morrison';

//   window.pizza = trini;

// }());

// (function () {

//   var tim = {};

//   tim.greeting = function () {
//     return 'Hello!';
//   };

//   tim.goodbye = function () {
//     return 'Goodbye';
//   };

//   tim.isHappy = true;

//   tim.firstName = 'Tim';

//   tim.lastName = 'Whitacre';

//   window.tim = tim;


// }());

// (function () {
//   var firstName = 'Trini';

//   var text;

//   function greeting () {
//       text = 'Yo! Homie!';

//   }

//   function goodbye () {
//       text = 'Bye! Homie!';
//   }


// console.log(text);
// console.log('Howdy!!');

// }());
