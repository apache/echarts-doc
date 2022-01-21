## Code Style



### File

**[MUST]** JavaScript Source files must be encoded in UTF-8 without BOM.



### Indentation

**[MUST]** 4 space indentation. tabs and 2 space are not allowed.


**[MUST]** `case` and `default` in `switch` must be indented.

```ts
// good
switch (variable) {
    case '1':
        // do...
        break;
    case '2':
        // do...
        break;
    default:
        // do...
}

// bad
switch (variable) {
case '1':
    // do...
    break;
case '2':
    // do...
    break;
default:
    // do...
}
```



### Space


**[MUST]** Set off binary operator with spaces. But place no space between unary operator and its operand.

```ts
let a = !arr.length;
a++;
a = b + c;
```


**[MUST]** Place 1 space before the leading brace.

```ts
// good

if (condition) {
}

set('attr', {
    some: 'xxx',
    any: 'yyy'
});

function funcName() {
}


// bad

if (condition){
}

set('attr',{
    some: 'xxx',
    any: 'yyy'
});

function funcName(){
}
```


**[MUST]** Place 1 space after `if` / `else` / `for` / `while` / `function` / `switch` / `do` / `try` / `catch` / `finally`.

```ts
// good

if (condition) {
}

while (condition) {
}

(function () {
})();


// bad

if(condition) {
}

while(condition) {
}

(function() {
})();
```


**[MUST]** In the object creating statement, place 1 space after `:`, but no space before it.

```ts
// good
const obj = {
    a: 1,
    b: 2,
    c: 3
};

// bad
const obj = {
    a : 1,
    b:2,
    c :3
};
```


**[MUST]** Place no space between the function name and `(` in function declaration, expression of named function and function call.

```ts
// good

function funcName() {
}

const funcName = function funcName() {
};

funcName();


// bad

function funcName () {
}

const funcName = function funcName () {
};

funcName ();
```


**[MUST]** Place no space between `,` and `;`.

```ts
// good
callFunc(a, b);

// bad
callFunc(a , b) ;
```


**[MUST]** Place no space after `(` and `[` and before `)` and `]`.

```ts
// good

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// bad

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}


// good
const arr1 = [];
const arr2 = [1, 2, 3];
const obj1 = {};
const obj2 = {name: 'obj'};
const obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// bad
const arr1 = [ ];
const arr2 = [ 1, 2, 3 ];
const obj1 = { };
const obj2 = { name: 'obj' };
const obj3 = {name: 'obj', age: 20, sex: 1};
```


**[MUST]** Must no trailing space in each line.




### Line Break


**[MUST]** Place line break in the end of a statement.


**[MUST]** No more than 120 characters per line.


**[MUST]** Place operator at the beginning of a line if it break lines.

```ts
// good
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

const result = number1 + number2 + number3
    + number4 + number5;


// bad
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

const result = number1 + number2 + number3 +
    number4 + number5;
```


**[MUST]** Start a new line for `)`, `]`, `}` if the content inside the brackets occupies multiple lines.
Make the same indent as the line where the corresponding `(`, `[`, `{` placed.

```ts
// good
if (product) {
    product.load();
    if (user.isAuthenticated()
        && user.isInRole('admin')
        && user.hasAuthority('add-admin')
    ) {
        sendProduct(user, product);
    }
}
const arr = [
    'candy', 'sugar'
];

// bad
if (product) {
    product.load();
    if (user.isAuthenticated()
        && user.isInRole('admin')
        && user.hasAuthority('add-admin')) {
        sendProduct(user, product);
    }
}
const arr = [
        'candy', 'sugar'
    ];
```


**[MUST]** Must not break lines before `,` or `;`.

```ts
// good
const obj = {
    a: 1,
    b: 2,
    c: 3
};

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);


// bad
const obj = {
    a: 1
    , b: 2
    , c: 3
};

foo(
    aVeryVeryLongArgument
    , anotherVeryLongArgument
    , callback
);
```


**[SUGGEST]** Suggestion about line break and indent:

```ts
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
) {
    // Code
}

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);

baidu.format(
    dateFormatTemplate,
    year, month, date, hour, minute, second
);

$('#items')
    .find('.selected')
    .highlight()
    .end();

const result = thisIsAVeryVeryLongCondition
    ? resultA : resultB;

const res = condition
    ? thisIsAVeryVeryLongResult
    : resultB;
```


**[MUST]** Start a new line for `else` and `catch` if using multi-line blocks.

```ts
// good

if (condition) {
    // some statements;
}
else {
    // some statements;
}

try {
    // some statements;
}
catch (ex) {
    // some statements;
}


// bad

if (condition) {
    // some statements;
} else {
    // some statements;
}

try {
    // some statements;
} catch (ex) {
    // some statements;
}
```


### Statement


**[MUST]** The semicolon must not be ignored at the end of a statement.


**[MUST]** The `{}` must not be ignored even if there is only one line.

```ts
// good
if (condition) {
    callFunc();
}

// bad
if (condition) callFunc();
if (condition)
    callFunc();
```


**[MUST]** Place no semicolon at the end of a function definition.

```ts
// good
function funcName() {
}

// bad
function funcName() {
};

// For function expression, the semicolon must not be ignored.
const funcName = function () {
};
```


**[MUST]** No trailing comma in object and array declarations.


```ts
// good

const obj = {
    attr1: 'xxx',
    attr2: 'yyy'
};

const arr = [
    'xxx',
    'yyy'
];


// bad

const obj = {
    attr1: 'xxx',
    attr2: 'yyy',
};

const arr = [
    'xxx',
    'yyy',
];
```



### Naming Conventions

**[MUST]** Use lowerCamelCase for variables, properties and function names.

```ts
const loadingModules = {};
function loadProduct() {
}
```


**[MUST]** Use UpperCamelCase (Pascal) for class names.

```ts
function Element(options) {
}
```


**[SUGGEST]** All of the letters of a abbreviation should be both upper cases or both lower cases.

```ts
function parseSVG() {
}
const svgParser;
```






## Language features


### Compatibility

Language features can be polyfilled by some utilities, but must not by modifying the prototype of the built-in JS objects.


```ts
// good

import * as zrUtil from 'zrender/src/core/util';

zrUtil.each(array, function (val, index) {
    sum += val;
});

const result = zrUtil.map(array, function (val) {
    return parse(val);
});

const pos = zrUtil.indexOf(array, val);

const obj2 = zrUtil.extend({}, obj1);

function Element() {
    // ...
}


// bad

array.forEach(function (val, index) {
    sum += val;
});

let result = array.map(function (val) {
    return parse(val);
});

const pos = array.indexOf(val);

const obj2 = Object.assign({}, obj1);

class Element {
    // ...
}

String.prototype.trim = function () {
};
```


### Variable

**[MUST]** Prefer using `const` to declare variable. And one line can not declares more than one variable.

```ts
// good
const name = 'MyName';
const hangModules = [];
const missModules = [];
const visited = {};

// bad
name = 'MyName';
const hangModules = [],
    missModules = [],
    visited = {};
```


### Condition

**[MUST]** In equality expression, `==` can only be used on `null` or `undefined` detection. `===` should be used in the rest of cases .

```ts
// good
if (age === 30) {
    // ...
}
if (type == null) {
    // ...
}

// bad
if (age == 30) {
    // ......
}
```


**[SUGGEST]** Use `xxx == null` to determine `null` or `undefined`.


**[SUGGEST]** Try best to make the meaning of `null` and `undefined` the same, namely, do not make users or developers distinguishing whether a variable is `null` or `undefined`.


**[SUGGEST]** The function expression or function declaration should not be placed inside a loop body.

```ts
// good
function clicker() {
    // ......
}

for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    addListener(element, 'click', clicker);
}


// bad
for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    addListener(element, 'click', function () {});
}
```



### Type Conversion


**[SUGGEST]** Use `+ ''` to convert a value to string.

```ts
// good
num + '';

// bad
new String(num);
num.toString();
String(num);
```


**[SUGGEST]** Use `+` to convert a value to number.

```ts
// good
+str;

// bad
Number(str);
```


**[MUST]** The second parameter must not be ignored when using `parseInt`.

```ts
// good
parseInt(str, 10);

// bad
parseInt(str);
```


### String, Object, Array

**[MUST]** Use `'` but not `"` to define a string.


**[MUST]** Use object literal `{}` to create a plain object.

```ts
// good
const obj = {};

// bad
const obj = new Object();
```


**[MUST]** If all of the properties of an object literal do not need quotation marks, they should ignore them. If quotation marks is necessary, use `'` but not `"`.

```ts
// good
const info = {
    name: 'someone',
    age: 28
};

// bad
const info = {
    'name': 'someone',
    'age': 28
};
const info2 = {
    "age": 40
};
```


**[MUST]** The prototype of built-in objects must not be modified.

```ts
// Forbidden
String.prototype.trim = function () {
};
```


**[SUGGEST]** Try best to use `.` but not `[]` to visit properties of an object.


**[SUGGEST]** `hasOwnProperty` should be used to when using `for ... in ...`, in case that some extra properties is added on the prototype of `Object` in some runtime environment.

```ts
const newInfo = {};
for (const key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}
```


**[MUST]** Use array literal `[]` to create an array, except intending to create an array with a given length.

```ts
// good
const arr = [];
const arr2 = new Array(1e4);

// bad
const arr = new Array();
```


**[MUST]** Do not use `for in` in array traverse.



### Others

**[MUST]** Do not use `eval` and `with`. `new Function` can be used.

