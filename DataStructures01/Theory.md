## Recursion ## 

What is 'Recursion'?

##### Def by Wikipedia : Recursion (adjective: recursive) occurs when a thing is defined in terms of itself or of its type. Recursion is used in a variety of disciplines ranging from linguistics to logic. The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no infinite loop or infinite chain of references can occur. 


#### Easy def:  In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. 

<img src="https://storage.googleapis.com/algodailyrandomassets/curriculum/recursion/cover.jpg" width="500"/>



Suppose we want to sum all numbers until the number that was passed by parameter.

``` javascript
> function sum(num) {
    var tot = 0;
    for(var i=1; i<=num; i++) {
      tot += i;
    }
    return tot;
  }
```

