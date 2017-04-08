function foo() {
    // lexical scope valid only within this function.
    var bar;
    function zip() {
        // Inner lexical scope can access bar but foo cannot access bar.
        var quux;
    }
}