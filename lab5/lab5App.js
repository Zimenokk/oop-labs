

Function.prototype.subclass = function (/* [constructor] [, prototype] */) {
    var self = this;
    var constructor = (
        typeof(arguments[0]) == 'function'
            ? Array.prototype.shift.call(arguments)
            : (this === Object
                ? function () {}
                : function () { self.apply(this, arguments); }));
    if (arguments[0])
        constructor.prototype = arguments[0];
    constructor.prototype.__proto__ = this.prototype;
    constructor.__proto__ = this.__proto__;
    return constructor;
};
var sayHello = Object.subclass(
    {
        getArea: function () {
            throw Error('Abstract');
        }
    });

var saySuperHello = sayHello.subclass(
    function (hello) {
        this.hello = hello;
    },
    {
        getArea: function () {
            return this.hello;
        }
    });

var sayManyHello = saySuperHello.subclass(
    function (a) {
        saySuperHello.call(this, hello);
    });

var metaHello = Function.subclass(
    {
        subclass: function () {
            var constructor = Function.prototype.subclass.apply(this, arguments);
            var result = function () {
                var self = (
                    this instanceof arguments.callee
                        ? this
                        : {__proto__: arguments.callee.prototype});
                constructor.apply(self, arguments);
                return self;
            };
            result.prototype = constructor.prototype;
            result.__proto__ = this.__proto__;
            return result;
        },

        optionalNew: true
    });

sayHello.__proto__ = metaHello.prototype;