"use strict";

const staticMethods = require("../lib");

class Foo {
    static bar () { return 42; }
}

console.log(staticMethods(Foo));
// [ 'bar' ]
