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

- `document.write(string)`: in ra dòng chữ trên DOM
- `document.getelementById(string)`: lấy element thông qua id
- `document.getelementsByClassName(string)`: lấy tất cả element thông qua className
- `document.getelementsByTagName(string)`: lấy tất cả element thông qua tagName
- `document.querySelector(string)`: lấy element thông qua CSS selector
- `document.querySelectorAll(string)`: lấy tất cả element thông qua CSS selector
- `document.title = 'Heading'`: thêm attribute vào element hoặc lấy ra attribute của element nếu như attribute đó phải hợp lệ với element đó
- `document.setAttribute(nameOfAttribute, valueOfAttribute)`: dùng để thêm attribute vào element bất kỳ.
- `document.getAttribute(nameOfAttribute)`: lấy ra attribute của element
- `document.innerText`: dùng để lấy ra textNode hoặc gán text mới vào textNode nhưng nó sẽ trả về những gì chúng ta nhìn thấy trên trình duyệt
- `document.textContent`: dùng để lấy ra textNode hoặc gán text mới vào textNode và nó trả về cả nội dung nguyên bản của text ở trong html
- `document.innerHTML`: thêm elementNode, attributeNode, textNode vào trong element khác ở trong DOM
- `document.outerHTML`: nó có chức năng giống innerHTML nhưng nó sẽ lấy luôn cả thằng element được gọi tới
- `document.style`: dùng để thay đổi CSS cho một element.
- Ta có thể add nhiều style bằng cách:
  ```Javascript
      var change = document.querySelector('.box')
      Object.assign(change.style, {
         width: '100px',
         height: '200px',
         backgroundColor: 'green',
      })
  ```
- `document.classList`: nó sẽ trả về một list các class của một element
  - `document.classList.add(string)`: thêm class name vào một element, ta có thể thêm nhiều class vào một element bằng cách thêm dấu ,
  - `document.classList.contains(string)`: kiểm tra xem element đó có class đó hay không. Nó sẽ trả về giá trị true/false
  - `document.classList.remove(string)`: xoá class trong element
  - `document.classList.toggle(string)`: bật tắt class trong element

**_DOM Event_**

- Khi ta sử dụng event mouseclick, ta có thể dùng e.which để lấy ra được mã keyboard mà ta nhấn.
- `e.preventDefault()`: ngăn chặn trình duyệt mặc định.
- `e.stopPropagation()`: ngăn chặn sự kiện nổi bọt. Sự kiện nỗi bọt là khi chúng ta có nhiều event trong một thẻ div, khi ta nhấn vào một cái button thì thẻ cha của nó cũng sẽ có event click và trả về cho chúng ta hai giá trị của event click, để ngăn chặn điều đó ta thêm vào method stopPropagation() để chặn sự nổi bọt của event.
- Ta có thể thêm event vào một element bằng method `addEventListener()` hoặc gỡ bỏ event bằng method `removeEventListener()`;
- Ta dùng DOM event khi chúng ta giải quyết những event đơn giản, còn eventListener dùng để giải quyết những function phức tạp và khi chúng ta cần gỡ bỏ event ta nên dùng add eventlistener.
- Ta có thể tạo event bằng các cách như sau:

  - _Event Attribute_:

  ```Javascript
     <h1 id='text' onclick = 'changeText()'>Hello</h1>
     function changeText() {
      document.getElementById('text').innerText = 'Xin Chao!'
     }
  ```

  - _Javascript Event_:

  ```Javascript
      <h1 id='text'>Hello</h1>
      document.getElementById('text').onclick = function() {changeText()}

     function changeText() {
      document.getElementById('text').innerText = 'Xin Chao!'
     }

  ```

  - _Method addEventListener()_:

    ```Javascript
    <h1 id='text'>Hello</h1>
    document.getElementById('text').addEventListener('click',changeText)

    function changeText() {
    document.getElementById('text').innerText = 'Xin Chao!'
    }
    ```

## 9. JSON

- _Định nghĩa_: là một định dạng dữ liệu (chuỗi), nó có thể thể hiện dạng dữ liệu cho chúng ta như Number, Boolean, Null, Array, Object.
- Trong JSON khi ta định dạng array, object thì các phần tử trong array và key và value của object phải bỏ trong dấu nháy kép.
- `Parse()`: chuyển đổi từ JSON qua Javascript types
- `Stringify()`: chuyển đổi từ Javascript types qua JSON

**_Promise_**

- Sync: là thao tác đồng bộ, chạy một luồng từ trên xuống dưới.
- Async: là thao tác bất đồng bộ, chạy đa luồng và những method yêu cầu thời gian thì sẽ hiển thị sau. Những method bất đồng bộ: setTimeout(), setInterval(), fetch(), XMLHttpRequest(), các dạng method reading file, những method request animation frame.
- Promise(): dùng để giải quyết bất đồng bộ, callback hell
- Code:

```Javascript
  var promise = new Promise(
      function(resolve, reject) {
         //Thành công: resolve()
         //Thất bại: reject()
         resolve([
            {
               id: 1,
               name: 'Javascript'
            }
         ]);
      }
  );

  promise
      .then(function(courses) {
         console.log(courses)
      })
      .catch(function() {
         console.log('Failure')
      })
      .finally(function() {
         console.log('Done')
      })
```

**_Fetch_**

- API(URL): Application Programming Interface, là cổng giao tiếp giữa các phần mềm.
  _Example_:

```Javascript
var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li><h2>${post.title}</h2><p>${post.body}</p></li>`;
    });
    var html = htmls.join("");
    document.getElementById("posts-block").innerHTML = html;
  });
```

- JSON server: fake API server
- CRUD:
  - Create: Tạo mới -> POST
  - Read: Lấy dữ liệu -> GET
  - Update: Chỉnh sửa -> PUT/PATCH
  - Delete: Xoá -> DELETE

## 10. ES6

**_Var/Let, Const_**

- Đều có thể sử dụng để khai báo biến.
- Phạm vi scope block của var là ở mọi nơi, trong khi let và const thì phạm vi của nó chỉ ở trong scope của nó.
- Hoisting: sẽ đưa biến của bạn lên trên đầu, chỉ có var mới được hỗ trợ hoisting, còn let và const thì không.
- let và var ta có thể gán giá trị lại, nhưng const thì không. Ta có thể gán lại thuộc tính của const nhưng không thể gán lại giá trị của nó

**_Template Literals_**

- Dùng để nối nhiều chuỗi string mà không cần dấu + , ta dùng dấu `` để bắt đầu một chuỗi template literals và dùng ${} để gán giá trị vào trong chuỗi.
- Example:
  ```Javascript
     let subject = 'Toán'
     let str = `Ngày mai có môn ${subject}`
  ```

**_Arrow Function_**

```Javascript
const logger = (log) => {
  console.log(log);
};

logger("Hi");

//Nếu như trong trường hợp không dùng return đối với object thì ta dùng dấu ngoặc đơn:
const sum = (a, b) => ({a: a, b: b})
console.log(sum(2, 2))
```

- Dùng để giúp chúng ta viết code ngắn gọn hơn.
- Không có gắn với this.
- Không thể dùng làm constructor function được

**_Classes_**

- Là cách viết khác của constructor function
- Example:

```Javascript
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getThisName() {
    return this.name;
  }
}

const phpCoures = new Course("PHP", 1000);
const javaCoures = new Course("Java", 1000);
```

**_Default Parameter Value_**

- Là giá trị mặc định được gán khi tạo hàm
  Example:

```Javascript
function logger(log = "Giá trị mặc định") {
  console.log(log);
}

logger();
```

**_Enhanced Object Literal_**

- Định nghĩa key: value cho object
- Định nghĩa method cho object
- Định nghĩa key cho object dưới dạng biến
  Example:

```Javascript
var name = "Javascript";
var price = 1000;
var course = {
  name, //name : name
  price, //price: price
  getName() {
    return name;
  },
};

console.log(course);

```

**_Destructuring, Rest(...)_**

- Destructuring là cách viết ngắn gọn để lấy ra các phần tử của một mảng và một object.
- Rest có nghĩa là lấy những phần tử còn lại trong array và object.
- Để thay đổi tên key trong object ta dùng dấu : phía sau tên key cần đổi và gán cho nó tên biến mới.
  Example:

```Javascript
//Array destructuring
var array = ["Java", "PHP", "Javascript"];
var [a, b, c] = array;
console.log(a, b, c);

var [a, , c] = array;
console.log(a, c);

var [a, ...rest] = array;
console.log(a, rest);

//Object Destructuring
var course = {
  name: "Javascript",
  price: 1000,
  img: "image",
  children: {
    name: "Reactjs",
  },
};

var { name, price, img } = course;
console.log(name, price, img);

var { name, ...rest } = course;
console.log(name, rest);

var {
  name: parentName,
  children: { name: childrenName },
} = course;
console.log(parentName, childrenName);

```

**_Spread(...)_**

- Dùng để hợp nhất hai array hoặc hai object với nhau.
  Example:

```Javascript
//Spread array
var array1 = ["Love", "Hate", "Trust"];
var array2 = ["Pain", "Suffer"];
var array3 = [...array1, ...array2];
console.log(array3);

//Spread object
var course1 = {
  name: "PHP",
  price: 1000,
  api: "other",
};

var course2 = {
  ...course1,
  api: "difference",
};

console.log(course2); //api sẽ có giá trị là difference
```

**_Tagged template literals_**

- Sử dụng một function và sử dụng function đó qua Tagged template literals
  Example:

```Javascript
function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [first]
    )
    .join("");
}

var brand = "F8";
var course = "Javascript";
const html = highlight`Học lập trình ${course} tại ${brand}!`;
//Khi ta console.log html ban đầu khi chưa xử lý logic trong highlight function thì ta được thu được kết quả html bao gồm 1 array chứa mảng các chuỗi strings: ['Học lập trình ', ' tại '] và hai giá trị là course và brand
console.log(html);
```

**_Modules_**

- Khi chúng ta tách một thành phần ra xử lý riêng thì đó được gọi là một module
- Chúng ta dùng export, import để đưa thành phần đó vào các thành phần khác để xử lý
- Mỗi file chỉ có một export default mà thôi
- Ta có thể dùng destructuring để export nhiều thành phần trong 1 file

**_Optional chaining_**

- ?. :dùng để coi thử key của object nó có giá trị hay không, nếu không có nó sẽ trả về undefined. Có thể dùng cho key của object hoặc array hoặc function.

## 11. IIFE, Scope, Closure

**_IIFE_**

- Định nghĩa: là viết tắt của "Immediately Invoked Function Expression", trong tiếng Việt có thể hiểu là "Biểu thức hàm tức thì được gọi ngay lập tức". Đây là một cú pháp trong JavaScript cho phép bạn định nghĩa và gọi một hàm ngay lập tức sau khi nó được định nghĩa.
- Trước khi dùng IIFE thì chúng ta phải thêm dấu ';' trước hàm IIFE
- Syntax:
  ` (function() {
// Mã của bạn ở đây
}) ()`
- Example:

```JavaScript
  (function() {
    console.log('Now Now')
  }) ()
```

**_Scope_**

- Định nghĩa:
  Scope trong JavaScript đề cập đến phạm vi của các biến được khai báo và có thể truy cập được trong mã. Scope xác định nơi mà các biến và hàm có thể được truy cập trong mã JavaScript và trong đó chúng có thể tồn tại.
- Có ba loại scope:
  - Global Scope: Biến được khai báo ở ngoài các hàm hoặc block code, chúng có thể được truy cập từ bất kỳ nơi nào trong mã JavaScript.
  - Local Scope: Biến được khai báo trong một hàm hoặc block code chỉ có thể truy cập được trong phạm vi của hàm hoặc block đó. Các biến được khai báo bên trong một hàm sử dụng var, let, hoặc const chỉ có thể truy cập được trong hàm đó.
  - Block scope: let và const cho phép tạo ra các biến có phạm vi chỉ trong một block code nhất định, chẳng hạn như if, for, while. Các biến được khai báo bằng var không có phạm vi block scope.

**_Closure_**

- Định nghĩa: Closure trong JavaScript là khả năng của một hàm để truy cập và "ghi nhớ" các biến từ phạm vi bên ngoài của nó, ngay cả sau khi hàm đã kết thúc thực thi. Điều này cho phép hàm closure vẫn có thể sử dụng các biến bên ngoài của nó ngay cả khi chúng đã ra khỏi phạm vi của nó.

## 12. Hoisting, Strict Mode, Data Types

**_Hoisting_**

- Định nghĩa: Hoisting là một tính chất của JavaScript mà cho phép các biến được khai báo và các hàm được định nghĩa được "nâng lên" (hoisted) lên đầu phạm vi của chúng trước khi mã JavaScript được thực thi. Điều này có nghĩa là bạn có thể sử dụng các biến hoặc hàm trước khi chúng được khai báo trong mã.
- Khai báo biến sẽ được đưa lên đầu nhưng giá trị thì không. Các hàm được định nghĩa thông qua function declaration cũng được nâng lên và có thể gọi trước khi chúngd được khai báo

**_Strict Mode_**

- Định nghĩa: Strict Mode là một tính năng của JavaScript, khi được kích hoạt, nó giúp kiểm soát chặt chẽ hơn các lỗi phổ biến và chế ngự một số hành vi không an toàn trong ngôn ngữ.
- Để kích hoạt strict mode chúng ta viết nó vào đầu nội dung của file có đuôi là js. Để kích hoạt strict mode ở trong một hàm chúng ta phải viết vào đầu dòng trong hàm đó.
- Strict mode giúp chúng ta tránh được nhiều lỗi lập trình thông thường. Cung cấp môi trường làm việc tốt hơn để viết mã sạch hơn và ít lỗi hơn. Nâng cao bảo mật và kiểm soát hành vi của chương trình Javascript.
