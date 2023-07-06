# BackEnd Using Node.js , Express and Mongo

Node.js isan open-source, cross-platform, single-threaded JavaScript runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine and uses an event-driven, non-blocking I/O architecture, making it efficient and suitable for real-time applications.

NodeJS file extension is in JavaScript. (.js)

## V8 Engine

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.

V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.

## Command Line Arguments

Command-line arguments are the values given after the name of the program in the command-line shell of Operating Systems. Command-line arguments are handled by the main() function of a C/C++ program.

### Syntax

```
int main(int argc, char *argv[]) { /* ... */ }
            or
int main(int argc, char **argv) { /* ... */ }
```

Here,

* **argc (ARGument Count)** is an integer variable that stores the number of command-line arguments passed by the user including the name of the program. So if we pass a value to a program, the value of argc would be 2 (one for argument and one for program name)
* The value of argc should be non-negative.
* **argv (ARGument Vector)** is an array of character pointers listing all the arguments.
* If argc is greater than zero, the array elements from argv[0] to argv[argc-1] will contain pointers to strings.
* argv[0] is the name of the program , After that till argv[argc-1] every element is command -line arguments.

### Properties

1. They are passed to the main() function.
2. They are parameters/arguments supplied to the program when it is invoked.
3. They are used to control programs from outside instead of hard coding those values inside the code.
4. argv[argc] is a NULL pointer.
5. argv[0] holds the name of the program.
6. argv[1] points to the first command line argument and argv[argc-1] points to the last argument.
