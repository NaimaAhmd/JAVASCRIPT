{
    function fizzBuzz(n) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 7 === 0) {
                console.log("fizzBuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 6 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    
    // Test the function with n = 60
    fizzBuzz(60);
    
}

