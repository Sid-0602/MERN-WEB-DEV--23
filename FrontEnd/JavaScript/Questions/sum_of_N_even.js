/* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */

        let N = parseInt(readLine());
        var sum = 0;
    
        /*
        Call your function with the input/parameters read above
        eg: let x = example(var_name, arr);
        */
    
        for (var i = 0; i <= N; i++) {
            if (i % 2 == 0) {
                sum = sum + i;
            }
        }
    
    
       /*
       Log your output here 
       eg: console.log(x);
       */
    
        console.log(sum);
    