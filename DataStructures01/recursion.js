// Factorial // 

function nFactorial(n) {
    if(n>=0 && n<2){return 1};
    
    return nFactorial(n-1) * n;
}

// Fibonacci // 

function nFibonacci(n) {

    
    var memory = {};
    
    if(n === 0 || n === 1){
        return n;
    } else if(memory[n]){
        return memory[n];
    } else{
        var fiboResult = nFibonacci(n-1) + nFibonacci(n-2);
        memory[n] = fiboResult;
        return fiboResult;
    }
}

// Queue FIFO & LIFO // 

function Queue() {
    this.arr = [];
}

Queue.prototype.enqueue = function(x){
    this.arr.push(x);
}

Queue.prototype.dequeue = function(){
    return this.arr.shift();
}

Queue.prototype.size = function(){
    return this.arr.length;
}