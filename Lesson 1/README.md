## 1. Function

- Nếu như có ba function trùng tên thì khi gọi tên function đó, function mới nhất được tạo sẽ được thực thi và bỏ qua hai function trước đó.
- Khi một biến được định nghĩa trong một function thì nó sẽ chỉ được sử dụng trong hàm đó mà thôi.
- **Declaration function**: `function declarationFunction () {}`
- **Expression function**: `var expressionFunction = function () {}`
- Trong hoisting thì declaration function sẽ được thực thi trước khi được định nghĩa, ngược lại expression function sẽ k được thực thi khi nó chưa được định nghĩa

## 2. String

- indexOf là phương thức dùng để tìm vị trí của string. Nếu như không tìm thấy nó sẽ trả về -1
- Khi dùng hàm replace thì nó sẽ thay thế kí tự chuỗi đầu tiên
- Khi dùng hàm charAt mà index không có nó sẽ trả về chuỗi rỗng, nhưng nếu dùng string[index] thì nó sẽ trả về giá trị undefined.
- `includes(element, indexStart)`: kiểm tra xem trong chuỗi có phần tử đó hay không

## 3. Array

- Cách tạo mảng: `var languages = ['Javascript', PHP, Dart]`
- Mảng có thể chứa nhiều kiểu dữ liệu
- Vì typeOf của một array luôn luôn là một object nên khi chúng ta muốn kiểm tra một biến có phải là array hay không, chúng ta dùng phương thức:
  `Array.isArray(languages)`
- Kiểm tra độ dài của mảng bằng: `languages.length`
- Lấy phần tử theo index: `languages[0] = 'Javascript'`

**_Array method_**

- `toString()`: sẽ chuyển đổi các phần tử của một mảng thành một chuỗi và thêm vào dấu , giữa các phần tử
- `join()`: công dụng tương tự như toString nhưng có thể thay đổi dấu ngăn cách giữa các phần tử
- `pop()`: sẽ xoá đi phần tử ở cuối mảng và trả lại độ dài mới của mảng.
- `push()`: thêm phần tử vào cuối mảng và trả lại độ dài mới của mảng.
- `shift()`: sẽ xoá đi phần tử ở đầu mảng và trả lại độ dài mới của mảng.
- `unshift()`: thêm phần tử vào đầu mảng và trả lại độ dài mới của mảng.
- `splice(index, numberCount, newElement)`: để xoá đi vị trí bất kì bắt đầu từ index và số lượng phần tử muốn xoá. Ta cũng có thể thêm phần tử mới bằng cách cho numberCount = 0 và ghi phần tử mới vào newElement
- `concat()`: dùng để nối hai array lại với nhau.
- `slice(indexStart, indexEnd)`: dùng để cắt mảng từ indexStart tới indexEnd nhưng không lấy indexEnd. Nếu như muốn copy mảng ta chỉ cần đặt indexStart = 0 và không thêm giá trị cho indexEnd.
- `includes(element, indexStart)`: kiểm tra xem trong mảng có phần tử đó hay không

**_Array iteration method_**

- `forEach(function(value, index, arrayItself))`: dùng để lặp qua các phần tử của mảng và thực hiện callback function.
- `every(function(value, index, arrayItself))`: dùng để kiểm tra tất cả các phần tử phải thoả mãn điều kiện gì đó. Kết quả trả về là true/false.
- `some(function(value, index, arrayItself))`: dùng để kiểm tra tất cả các phần tử, nếu như có một phần tử thoả mãn điều kiện thì nó sẽ trả về kết quả true và nó không cần quan tâm nhưng thằng khác có sai hay không.
- `find(function(value, index, arrayItself))`: dùng để tìm ra phần tử đầu tiên thoả mãn điều kiện, và bỏ qua những phần tử còn lại.
- `filter(function(value, index, arrayItself))`: dùng để tạo ra mảng mới chứa những phần tử thoả mãn điều kiện mà không thay đổi mảng gốc.
- `map(function(value, index, arrayItself))`: trả về một array mới chứa những phần tử của array cũ sau khi thực hiện một đoạn code.
- `reduce(function(accumulatorValue, currentValue, currentIndex, arrayItself){}, initialValue)`:
  dùng để tính toán xử lý các phần tử trong một array và trả về một giá trị duy nhất và không thay đổi array cũ. initialValue là giá trị lưu trữ ban đầu,trước khi chạy lần đầu tiên giá trị của initialValue sẽ được gán vào accumulatorValue, sau hàng loạt vòng lặp và tính toán nó sẽ cho ra một giá trị cuối cùng và được lưu vào accumulatorValue.

## 4. Object

**_Tạo Object_**

`var nickNameKey = 'nickName'`

- _Cách tạo object_:

```Javascript
  var myInfo = {
  name: 'Hoang Tai Thang',
  age: 10,
  address: 'Da Nang',
  [nickNameKey] = 'Thanggg',
  getName: function () {
  return this.name
  },
  }
```

- _Cách thêm properties_:
  C1: `myInfo.email = 'taithangdn99@gmail.com'`
  C2: `myInfo['email'] = 'taithangdn99@gmail.com'`
- _Cách lấy giá trị của một properties_:
  C1: `myInfo.name = 'Hoang Tai Thang'`
  C2: `myInfo['name'] = 'Hoang Tai Thang'`
- Khi object không có properties nó sẽ trả về undefined
- _Cách xoá một properties trong object_:
  `delete myInfo.name`

**_Tạo object constructor_**

- _Cách tạo object constructor:_

```Javascript
  function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  }

  var author = new User('Tai Thang', 'Hoang', 'Avatar');
  var user = new User('Gia Bao', 'Hoang', 'Avatar');
```

**_Object prototype_**

- Khi tạo ra một object constructor ta không thể thêm property bằng cách như sau: `User.className = 'F8'`. Thay vào đó ta có thể thêm bằng cách: `User.prototype.className = 'F8'`.
- Ta có thể hiểu prototype nghĩa là nguyên mẫu.
- Những hàm tạo nên từ prototype nó sẽ không nằm trong property của object constructor mà nó sẽ nằm trong proto

**_Date Object_**

- _Tạo Date Object:_
  `var date = new Date();`

**_Math Object_**

- `Math.PI()`: lấy ra số PI
- `Math.round()`: làm tròn thành số nguyên
- `Math.abs()`: trả về giá trị tuyệt đối. Example: `Math.abs(-4) = 4`
- `Math.ceil()`: làm tròn trên số thập phân. Example: `Math.ceil(4.1) = 5`
- `Math.floor()`: làm tròn dưới số thận phân. Example: `Math.floor(4.9) = 4`
- `Math.random()`: trả về số thập phân ngẫu nhiên nhỏ hơn 1.

**Cách tạo ra số random từ 0-10: `Math.floor(Math.random() / 10)`**

- `Math.min()`: lấy số nhỏ nhất
- `Math.max()`: lấy số lớn nhất

## 5. Lệnh if/else và switch/case

**_if/else_**

if(condition){code}
else if(condition){code}
else {code}

**_Switch/case_**

```Javascript
var date = 3;

switch (date) {
case 1:
return 'date 1';
break;

case 2:
return 'date 2';
break;

case 3:
return 'date 3';
break;

case 4:
return 'date 4';
break;
}
```

- Nếu như không dùng từ khoá break thì đoạn mã sẽ tiếp tục chạy cho tới khi nó gặp break thì nó sẽ dừng. Chúng ta thường bỏ break ở mỗi trường hợp khi chúng ta có những trường hợp có chung diều kiện.

**Chúng ta sử dụng if/else khi chúng ta chưa biết trước rõ điều kiện, ta dùng switch/case khi ta biết được hết các trường hợp xảy ra.**

**_Ternary operator_**

- Cú pháp viết tắt của if/else
  Example:

  ```Javascript
  var course = {
  name: 'Javascript',
  coin: 250,
  }
  ```

  C1:

  ```Javascript
  if(course.coin > 0) {
  console.log(`${course.coin} Coins`)
  } else {
  console.log('Miễn phí')
  }
  ```

  C2:

  ```Javascript
  var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
  ```

## 6. Vòng lặp

**_For_**

```Javascript
for (var i = 1; i <= 1000; i++ ) {
return i;
}
```

**_For/in loop_**

- Dùng để lấy các property của object
  Example:

  ```Javascript
  var myInfo = {
  name: 'Tai Thang',
  age: 23,
  address: 'Da Nang'
  }

  for(var key in myInfo) {
  console.log(key)
  console.log(myInfo[key])
  }
  ```

  Ta sẽ được hai kết quả:
  1: name, age, address dưới dạng chuỗi
  2: các giá trị của key

- Nếu như for/in được dùng trong mảng thì nó sẽ trả về index của từng phần tử, thông qua đó chúng ta có thể lấy giá trị của mỗi index.
- Nếu như for/in được dùng trong chuỗi thì nó sẽ trả về index của từng kí tự trong chuỗi đó, thông qua đó chúng ta có thể lấy giá trị của mỗi kí tự thông qua index.

**_For/of loop_**

- Dùng để lấy giá trị của một mảng, hoặc lấy kí tự của một chuỗi (không thể lấy giá trị trong một object).

- Để có thể lấy giá trị từ một object ta có thể dùng các cách như sau:

  ```Javascript
  var myInfo = {
  name: 'Tai Thang',
  age: 23,
  }

   for (var value of Object.keys(myInfo)) {
   console.log(myInfo[value])
   }

   for (var value of Object.value(myInfo)) {
   console.log(value)
   }

  ```

**_Do/while và While_**

- Khi dùng do/while thì nó sẽ thực thi lần đầu tiên trước và không quan tâm tới điều kiện while sau đó nó sẽ thực thi vòng lặp tiếp dựa trên điều kiện while

**_Continue và break_**

- **Break**: dùng để thoát khỏi vòng lặp

  ```Javascript
  for(var i = 0; i < 10; i++) {
  console.log(i)
  if (i >= 5) {
  break;
  }
  }
  ```

- **Continue**: dùng để bỏ qua và tiếp tục chạy vòng lặp
  ```Javascript
  for(var i = 0; i < 10; i++) {
  if(i%2 !== 0) {
  continue;
  }
  console.log(i)
  }
  ```

**_Nested loop - Vòng lặp lồng nhau_**

```Javascript
var myArray = [
[1,2], [3,4], [5,6]
]

for (var i = 0; i < myArray.length; i++ ) {
for (var j = 0; j < myArray[i].length; j++) {
console.log(myArray[i][j])
}
}
```

Kết quả in ra sẽ là 1, 2, 3, 4, 5, 6

**_Đệ quy_**

- Giải bài toán xoá phần tử trùng lặp mà không dùng method của Javascript
  `var array = ['a', 'b', 'c', 'a', 'b', 'c']`
  `console.log([...(new Set(array))])`

- Để dùng đệ quy cần phải nắm được:

1.  **Xác định điểm dừng**
2.  **Logic handle => Tạo ra điểm dừng**

_Example count down Đệ quy:_

```Javascript
function countDown(num) {
if(num > 0) {
console.log(num);
return countDown(num - 1)
}
return num;
}

countDown(3)
```

_Example vòng lặp đệ quy:_

```Javascript
function loop(start, end, cb) {
if(start < end) {
cb(start);
return loop(start + 1, end, cb)
}
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index) {
console.log(array[index])
})
```

_Example tính giai thừa bằng đệ quy:_

```Javascript
function giaiThua(number) {
if(number > 0) {
return number \* giaiThua(number - 1)
}
return 1;
}

console.log(giaiThua(6))
```

## 7. Callback function

- _Định nghĩa_: là một hàm được truyền qua đối số, sẽ được thực thi khi được gọi từ một hàm lấy nó làm đối số,

- Tạo hàm forEach():

```Javascript
Array.prototype.forEach2 = function(callback){
   for(var index in this) {
      if(this.hasOwnProperty(index)) {
        callback(this[index], index, this)
      }
   }
}

var courses = [
   'Javascript',
   'PHP',
   'Ruby'
];

courses.forEach2(function(course, index, array) {
   console.log(course, index, array)
})
```

```Javascript
var courses = [
   {
      name: 'Javascript',
      coin: 680,
      isFinish: true,
   },
   {
      name: 'PHP',
      coin: 860,
      isFinish: false,
   },
   {
      name: 'Ruby',
      coin: 980,
      isFinish: false,
   }
]

```

- Tạo hàm filter():

```Javascript
Array.prototype.filter2 = function(callback) {
   var output = [];
   for (var index in this) {
      if (this.hasOwnProperty(index)) {
        var result = callback(this[index], index, this)
        if (result) {
         output.push(this[index]);
        }
      }
   }
   return output;
}

var filterCourses = courses.filter2(function(course, index, array) {
   return course.coin > 700;
})
```

- Tạo hàm some():

```Javascript
Array.prototype.some2 = function(callback) {
   var output = false;
   for (var index in this) {
      if (this.hasOwnProperty(index)) {
         if (callback(this[index], index, this)) {
            return output = true;
            break;
         };
      }
   }
   return output;
}

var result = courses.some2(function(course, index, array) {
   return course.isFinish;
})
```

- Tạo hàm every():

```Javascript
Array.prototype.every2 = function(callback) {
   var output = true;
   for (var index in this) {
      if (this.hasOwnProperty(index)) {
         var result = callback(this[index], index, this);
         if (!result) {
            output = false;
            break;
         }
      }
   }
   return output;
}

var result = courses.every2(function(course, index, array) {
   return course.coin > 680;
})
```

## 8. DOM

- _Định nghĩa_: DOM là Mô hình đối tượng tài liệu.
- Có ba thành phần: Element(thẻ tag), Attribute(class,id,...), Text(Nội dung)
- Node: element, attribute, text
- Để lấy được thành phần element của DOM ta lấy chúng thông qua id, class, CSS Selector, HTML collection
- Để tương tác được với nodeAttribute ta phải lấy được nodeElement trước.

**_Document Object_**

- document.write(string): in ra dòng chữ trên DOM
- document.getelementById(string): lấy element thông qua id
- document.getelementsByClassName(string): lấy tất cả element thông qua className
- document.getelementsByTagName(string): lấy tất cả element thông qua tagName
- document.querySelector(string): lấy element thông qua CSS selector
- document.querySelectorAll(string): lấy tất cả element thông qua CSS selector
- document.title = 'Heading': thêm attribute vào element hoặc lấy ra attribute của element nếu như attribute đó phải hợp lệ với element đó
- document.setAttribute(nameOfAttribute, valueOfAttribute): dùng để thêm attribute vào element bất kỳ.
- document.getAttribute(nameOfAttribute): lấy ra attribute của element
- document.innerText: dùng để lấy ra textNode hoặc gán text mới vào textNode nhưng nó sẽ trả về những gì chúng ta nhìn thấy trên trình duyệt
- document.textContent: dùng để lấy ra textNode hoặc gán text mới vào textNode và nó trả về cả nội dung nguyên bản của text ở trong html
