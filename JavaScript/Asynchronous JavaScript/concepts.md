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
