## 代码规范



### 源文件

**[强制]** JavaScript源文件必须以无BOM的UTF-8编码。



### 缩进

**[强制]** 必须采用4个空格缩进，不允许以Tab制表符或2个空格代替。


**[强制]** `switch` 中的 `case` 和 `default` 必须保持缩进。

```ts
// 正例
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

// 反例
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



### 空格


**[强制]** 二元运算符两个操作数之间必须使用空格，但一元运算符与其操作数间不能有空格。

```ts
let a = !arr.length;
a++;
a = b + c;
```


**[强制]** 在 `{` 前必须有1个空格。

```ts
// 正例

if (condition) {
}

set('attr', {
    some: 'xxx',
    any: 'yyy'
});

function funcName() {
}


// 反例

if (condition){
}

set('attr',{
    some: 'xxx',
    any: 'yyy'
});

function funcName(){
}
```


**[强制]** `if` / `else` / `for` / `while` / `function` / `switch` / `do` / `try` / `catch` / `finally` 等关键字与括号之间都必须加一个空格。

```ts
// 正例

if (condition) {
}

while (condition) {
}

(function () {
})();


// 反例

if(condition) {
}

while(condition) {
}

(function() {
})();
```


**[强制]** 在创建对象的语句中，`:` 后必须加一个空格，`:` 前不能有空格。

```ts
// 正例
const obj = {
    a: 1,
    b: 2,
    c: 3
};

// 反例
const obj = {
    a : 1,
    b:2,
    c :3
};
```


**[强制]** 在函数声明、命名函数表达式和函数调用时，函数名称和 `(` 间不能有空格。

```ts
// 正例

function funcName() {
}

const funcName = function funcName() {
};

funcName();


// 反例

function funcName () {
}

const funcName = function funcName () {
};

funcName ();
```


**[强制]** `,` 和 `;` 前不能有空格。

```ts
// 正例
callFunc(a, b);

// 反例
callFunc(a , b) ;
```


**[强制]** `(` 和 `[` 之后、 `)` 和 `]` 之前不能有空格。

```ts
// 正例

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// 反例

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}


// 正例
const arr1 = [];
const arr2 = [1, 2, 3];
const obj1 = {};
const obj2 = {name: 'obj'};
const obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// 反例
const arr1 = [ ];
const arr2 = [ 1, 2, 3 ];
const obj1 = { };
const obj2 = { name: 'obj' };
const obj3 = {name: 'obj', age: 20, sex: 1};
```


**[强制]** 每行代码后不能有尾随空格。




### 换行


**[强制]** 必须在语句的结尾换行。


**[强制]** 单行字符数不能超过120个，超出则需要换行。


**[强制]** 如果需要换行，运算符必须放在新行的开头。

```ts
// 正例
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

const result = number1 + number2 + number3
    + number4 + number5;


// 反例
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

const result = number1 + number2 + number3 +
    number4 + number5;
```


**[强制]** 如果括号中的内容有多行，必须为 `)`、 `]`、 `}` 另开一个新行，并使新行与 `(`、 `[`、 `{` 所在行的缩进相对应。

```ts
// 正例
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

// 反例
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


**[强制]** `,` 或 `;` 前不能有换行。

```ts
// 正例
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


// 反例
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


**[推荐]** 建议换行和缩进遵循如下风格：

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


**[强制]** 如果使用多行代码块，`else` 和 `catch` 必须另开一个新行。

```ts
// 正例

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


// 反例

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


### 语句


**[强制]** 语句必须以 `;` 结尾。


**[强制]** 如果只有一行，`{}` 不能被省略。

```ts
// 正例
if (condition) {
    callFunc();
}

// 反例
if (condition) callFunc();
if (condition)
    callFunc();
```


**[强制]** 函数定义的末尾不能有分号 `;`。

```ts
// 正例
function funcName() {
}

// 反例
function funcName() {
};

// 对于函数表达式，不能忽略分号
const funcName = function () {
};
```


**[强制]** 对象和数组的声明中不能有尾随逗号。


```ts
// 正例

const obj = {
    attr1: 'xxx',
    attr2: 'yyy'
};

const arr = [
    'xxx',
    'yyy'
];


// 反例

const obj = {
    attr1: 'xxx',
    attr2: 'yyy',
};

const arr = [
    'xxx',
    'yyy',
];
```



### 命名规约

**[强制]** 变量名、属性名及函数名的命名必须遵循 lowerCamelCase（小骆驼拼写法）。

```ts
const loadingModules = {};
function loadProduct() {
}
```


**[强制]** class类的命名必须遵循 UpperCamelCase (Pascal)，即大骆驼拼写法（帕斯卡拼写法）。

```ts
function Element(options) {
}
```


**[推荐]** 缩略词的所有字符应当一并大写或一并小写。

```ts
function parseSVG() {
}
const svgParser;
```






## 语法特性


### 兼容性

语法特性可以通过一些工具方法进行弥补，但不能通过修改内置JavaScript对象的原型来实现。


```ts
// 正例

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


// 反例

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


### 变量

**[强制]** 优先使用`const`声明变量，且一行不能同时声明多个变量。

```ts
// 正例
const name = 'MyName';
const hangModules = [];
const missModules = [];
const visited = {};

// 反例
name = 'MyName';
const hangModules = [],
    missModules = [],
    visited = {};
```


### 条件判断

**[强制]** 对于相等运算符，`==` 只能用于检查是否为 `null` 或者 `undefined`，其余情况必须使用 `===`。

```ts
// 正例
if (age === 30) {
    // ...
}
if (type == null) {
    // ...
}

// 反例
if (age == 30) {
    // ......
}
```


**[推荐]** 建议使用 `xxx == null` 来判断 `null` 或 `undefined`。


**[推荐]** 尽量让 `null` 和 `undefined` 的含义相同。也就是说，不要让用户或开发者去区分变量是 `null` 还是 `undefined`。


**[推荐]** 函数表达式或者函数声明不应该放在循环体中。

```ts
// 正例
function clicker() {
    // ......
}

for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    addListener(element, 'click', clicker);
}


// 反例
for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    addListener(element, 'click', function () {});
}
```



### 类型转换


**[推荐]** 建议使用 `+ ''` 将值转为字符串。

```ts
// 正例
num + '';

// 反例
new String(num);
num.toString();
String(num);
```


**[推荐]** 建议使用 `+` 将值转为数值。

```ts
// 正例
+str;

// 反例
Number(str);
```


**[强制]** 在使用 `parseInt` 时，必须传入第二个参数。

```ts
// 正例
parseInt(str, 10);

// 反例
parseInt(str);
```


### 字符串，对象，数组

**[强制]** 必须使用 `'` 而不是 `"` 定义字符串。


**[强制]** 必须使用对象字面量 `{}` 来创建简单对象。

```ts
// 正例
const obj = {};

// 反例
const obj = new Object();
```


**[强制]** 如果一个对象字面量的所有属性都不需要引号，引号必须省略。如果需要加引号，须使用 `'` 而不是 `"`。

```ts
// 正例
const info = {
    name: 'someone',
    age: 28
};

// 反例
const info = {
    'name': 'someone',
    'age': 28
};
const info2 = {
    "age": 40
};
```


**[强制]** 禁止修改内置对象的原型。

```ts
// 禁止
String.prototype.trim = function () {
};
```


**[推荐]** 尽可能使用 `.` 而不是 `[]` 访问对象的属性。


**[推荐]** 使用 `for ... in ...` 时，应当注意使用 `hasOwnProperty` 以防 `Object` 的原型在某些运行时环境中被添加一些额外属性的情况。

```ts
const newInfo = {};
for (const key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}
```


**[强制]** 除非需要创建指定长度的数组，否则必须使用数组字面量 `[]` 创建数组。

```ts
// 正例
const arr = [];
const arr2 = new Array(1e4);

// 反例
const arr = new Array();
```


**[强制]** 不要使用 `for in` 语句对数组进行遍历。



### 其他

**[强制]** 不要使用 `eval` 和 `with`。允许使用`new Function`。

