function foo() {
    // lexical scope valid only within this function.
    var bar;
    quux = 100;
    function zip() {
        // Inner lexical scope can access bar but foo cannot access bar.
        var quux = 200;

        // zip is closing over bar, hence keeps reference to bar as zip is being
        // returned and due to this reference the scope chain exists till zip is no longer used.
        bar = true;
        console.log(bar);
    }
    return zip;
}

var callback = foo();
callback();