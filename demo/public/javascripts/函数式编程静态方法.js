/**
 * Created by brave on 17/4/28.
 */

//js基础语法 去w3cschool看
//面向对像   http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html

//函数式编程 静态方法
function testNum(v, callback) {
    var num = 8;
    num = num + 8;
    num = num + v;
    console.log(num);//116
    callback(1000);
    return num;
}
// test = function (v) {
//     var num = 8;
//     num = num + 8;
//     num = num + v;
//     console.log(num);
//     return num;
// };
testNum(100, function (data) {
    console.log(data);//1000
});

testNum(100, function (data) {
    console.log(data);//1000
});

//面向对象编程
function CalNum() {
    this.result = 9;
    //实例方法
    this.success = function () {
        console.log("success")
    };
    this.fail = function () {
        this.result = 19;
        console.log("fail")
    };
}

function TestNum(v, success, fail, calNumInstance) {
    this.num = 8;
    this.num = this.num + 8;
    this.num = this.num + v;
    console.log(this.num);
    this.calNum = function () {
        return this.num;
    }
    this.success = success;
    this.fail = fail;

}

//对像的相互持有
var calNum = new CalNum();
var calNum2 = new CalNum();
var testNumInstance = new TestNum(100, calNum.success, calNum.fail, calNum);
testNumInstance.success();
testNumInstance.fail();
testNumInstance.success = calNum2.success;
testNumInstance.success();
calNum2.success();


//面向过程编程（ 使用函数式编程+ 面向对象式的编程 ）


//使用回调


//面向对像的三要素：封装，继承，多态

//编程发展史
//面向过程
//函数式编程
//面向对象  封装，继承，多态