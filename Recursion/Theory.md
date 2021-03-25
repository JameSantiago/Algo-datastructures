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

There is a way to do it with recursion. 


Here is: 

``` javascript
> function sum(num) {
  if(num < 1{return 0}
  if(num === 1){return 1}

  return sum(num-1) + num;
  }
```

Recursive functions and algorithms

A common computer programming tactic is to divide a problem into sub-problems of the same type as the original, solve those sub-problems, and combine the results. This is often referred to as the divide-and-conquer method; when combined with a lookup table that stores the results of previously solved sub-problems (to avoid solving them repeatedly and incurring extra computation time), it can be referred to as dynamic programming or memoization.

A recursive function definition has one or more base cases, meaning input(s) for which the function produces a result trivially (without recurring), and one or more recursive cases, meaning input(s) for which the program recurs (calls itself). For example, the factorial function can be defined recursively by the equations 0! = 1 and, for all n > 0, n! = n(n − 1)!. Neither equation by itself constitutes a complete definition; the first is the base case, and the second is the recursive case. Because the base case breaks the chain of recursion, it is sometimes also called the "terminating case".

The job of the recursive cases can be seen as breaking down complex inputs into simpler ones. In a properly designed recursive function, with each recursive call, the input problem must be simplified in such a way that eventually the base case must be reached. (Functions that are not intended to terminate under normal circumstances—for example, some system and server processes—are an exception to this.) Neglecting to write a base case, or testing for it incorrectly, can cause an infinite loop.

For some functions (such as one that computes the series for e = 1/0! + 1/1! + 1/2! + 1/3! + ...) there is not an obvious base case implied by the input data; for these one may add a parameter (such as the number of terms to be added, in our series example) to provide a 'stopping criterion' that establishes the base case. Such an example is more naturally treated by corecursion, where successive terms in the output are the partial sums; this can be converted to a recursion by using the indexing parameter to say "compute the nth term (nth partial sum)".

