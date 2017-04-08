function foo() {
    // lexical scope valid only within this function.
    var bar;
    quux = 100;
    zip();
    function zip() {
        // Inner lexical scope can access bar but foo cannot access bar.
        var quux = 200;
        console.log('zip lexical scope ' + quux);
    }
    console.log('foo lexical scope ' + quux);
}

foo();
console.log('global lexical scope ' + quux);