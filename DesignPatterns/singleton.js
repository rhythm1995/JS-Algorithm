//单例模式：保证一个类仅有一个实力，并提供一个访问它的全局访问点


//初步实现：用一个变量标志当前是否已经为某个类创建过对象，如果是，则下次获取该类的实例时，直接返回之前的对象
var Singleton = function (name) {
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = function () {
    alert(this.name);
};

Singleton.getInstance = function (name) {
    if(!this.instance){
        this.instance = new Singleton();
    }
    return this.instance;
};

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');

alert(a === b);


//透明的单例模式
var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html) {
        if(instance){
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };

    CreateDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();
var a = new CreateDiv('sven1');
