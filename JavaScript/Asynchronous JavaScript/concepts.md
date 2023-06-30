# Asynchronous Javascript Concepts:

## Promises

### Theory

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

* A Promise is in one of these states:

  pending: initial state, neither fulfilled nor rejected.

  fulfilled: meaning that the operation was completed successfully.

  rejected: meaning that the operation failed.

### Examples with JS Codes

![1688068338819](image/concepts/1688068338819.png)

* Wait() function using promises and setTimeOut() :   [Leetcode Question]

  ![1688068419744](image/concepts/1688068419744.png)
* ".then" and ".catch" function:

  "then" Keyword is called when ever the promise is full filled.

  "Catch"  Keyword is called when ever the promise is rejected and we also get the error reason.
  Together they act as a if-else condition for status of promise.

  ![1688068891665](image/concepts/1688068891665.png)

  ![1688069441852](image/concepts/1688069441852.png)

![1688069460093](image/concepts/1688069460093.png)

## Callbacks

### Theory

A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

JS is synchronous and single-threaded language. We use setTimeout() to perform Asynchrnous operations. In setTimeOut(), the callback function is function() we passed is a callback.

eg:

 ![1688106286299](image/concepts/1688106286299.png)

### Call Back Hell

This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.

eg: 

![1688106391118](image/concepts/1688106391118.png)

How to escape Call Back Hell?


* JavaScript provides an easy way of escaping from callback hell. This is done by event queue and promises.
* **A promise is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result.**
* Promises use .then() method to call async callbacks. We can chain as many callbacks as we want and the order is also strictly maintained.
* Promises use .fetch() method to fetch an object from the network. It also uses .catch() method to catch any exception when any block fails.
* So these promises are put in the event queue so that they don’t block subsequent JS code. Also once the results are returned, the event queue finishes its operations.
* There are also other helpful keywords and methods like async, wait, set timeout() to simplify and make better use of callbacks.
