const data = [
  {
    q: "Asynchronous",
    a:
      "It is when you initiate something, forget about it, and when the result is ready you get it back without having to wait for it. The typical example is an AJAX call, which might take even seconds and in the meantime you complete other stuff, and when the response is ready, the callback function gets called. Promises and async/await are the modern way to handle async.",
  },
  {
    q: "Callback",
    a:
      "A reference to executable code, or a piece of executable code, that is passed as an argument to other code. It is a function that’s invoked when something happens. A click event associated to an element has a callback function that’s invoked when the user clicks the element. A fetch request has a callback that’s called when the resource is downloaded.",
  },
  {
    q: "Declarative",
    a:
      "It is an approach when you tell the machine what you need to do, and you let it figure out the details. React is considered declarative, as you reason about abstractions rather than editing the DOM directly.",
  },
  {
    q: "Fallback",
    a:
      "It is used to provide a good experience when a user hasn’t access to a particular functionality. For example a user that browses with JavaScript disabled should have a plain HTML version of the page. Or for a browser that has not implemented an API, you should avoid completely breaking the experience of the user.",
  },
  {
    q: "Block Scoping",
    a:
      "Any variable defined in a block is visible and accessible from inside the whole block, but not outside of it.",
  },
  {
    q: "Function Scoping",
    a:
      "Any variable defined in a function is visible and accessible from inside the whole function.",
  },
  {
    q: "Immutability",
    a:
      "A variable is immutable when its value cannot change after it’s created. A mutable variable can be changed. The same applies to objects and arrays.",
  },
  {
    q: "Lexical Scoping",
    a:
      "It is a particular kind of scoping which means that the value of a variable is defined by its position when it’s written. Not when it’s called, which is something that happens with the alternative, dynamic scoping.",
  },
  {
    q: "Polyfill",
    a:
      "It is a way to provide new functionality available in modern JavaScript or a modern browser API to older browsers. It is a particular kind of shim.",
  },
  {
    q: "Pure function",
    a:
      "A function that has no side effects (does not modify external resources), and its output is only determined by the arguments. You could call this function as many times as you want, and given the same set of arguments, the output will always be the same.",
  },
  {
    q: "Scope",
    a:
      "It is, referred to a variable, in what portion of a program that variable is visible. let and const have block scoping, which determines a differnet scope from values defined using var, which have function scoping.",
  },
  {
    q: "Shim",
    a:
      "It is a little wrapper around a functionality, or API. It’s generally used to abstract something, pre-fill parameters or add a polyfill for browsers that do not support some functionality. You can consider it like a compatibility layer.",
  },
  {
    q: "Side effect",
    a:
      "It is when a function interacts with some other function or object outside it. Interaction with the network or the file system, or with the UI, are all side effects.",
  },
  {
    q: "State",
    a:
      "It usually comes into play when talking about Components. A component can be stateful if it manages its own data, or stateless if it doesn’t.",
  },
  {
    q: "Strict mode",
    a:
      "It causes the JavaScript runtime to catch more errors, but it helps you improve the JavaScript code by denying undeclared variables and other things that might cause overlooked issues like duplicated object properties and other subtle things.",
  },
  {
    q: "Tree Shaking",
    a:
      "It means removing “dead code” from the bundle you ship to your users. If you add some code that you never use in your import statements, that’s not going to be sent to the users of your app, to reduce file size and loading time.",
  },
  {
    q: "IIFE",
    a:
      "It is a JavaScript function that runs as soon as it is defined. The primary reason is to obtain data privacy. Because JavaScript’s var scopes variables to their containing function, any variables declared within cannot be accessed by the outside world.",
  },
  {
    q: "Closures",
    a:
      "It is the combination of a function and the lexical environment within which that function was declared. It is an inner function that has access to the outer (enclosing) function’s variables — scope chain. It has three scope chains: access to its own scope (variables defined between its curly brackets), access to the outer function’s variables, and access to the global variables.",
  },
  {
    q: "Module",
    a:
      "It is a small unit of independent, reusable code. They are the foundation of many JavaScript design patterns and are critically necessary when building any non-trivial JavaScript-based application.",
  },
  {
    q: "Hoisting",
    a:
      "It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. It means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.",
  },
  {
    q: "Currying",
    a:
      "It is a technique of evaluating the function with multiple arguments, into a sequence of function with a single argument. In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth until all arguments have been fulfilled.",
  },
  {
    q: "Memoization",
    a:
      "It is a programming technique that attempts to increase a function’s performance by caching its previously computed results.",
  },
  {
    q: "Polymorphism",
    a:
      "It is one of the tenets of Object-Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. It takes advantage of inheritance in order to make this happen.",
  },
  {
    q: "Promises",
    a:
      "An object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. It represents the result of the asynchronous function. They can be used to avoid chaining callbacks. ",
  },
  {
    q: "Run-Time Error",
    a:
      "It is an error that is produced when incorrect terms are used in the Javascript code. An incorrect command or out of sequence format will throw this type of error.",
  },
  {
    q: "Syntax Error",
    a:
      "It is produced when a script's format or shape is incorrect, a misspelling is found, or text is not recognized. Syntax errors are also thrown when you have opened a command, but then do not close it.",
  },
  {
    q: "Higher-Order Function",
    a:
      "It is a function that accepts another function as an argument, or returns a function as a result.",
  },
  {
    q: "JIT (Just-In-Time) Compilation",
    a:
      "It is the process of translating code written in a programming language to machine code at runtime (during a program or application's execution).",
  },
  {
    q: "AOT (Ahead-Of-Time) Compilation",
    a:
      "It is the process of translating code written in a programming language to machine code before execution (as opposed to at runtime). Doing so reduces runtime overhead and compiles all files together rather than separately.",
  },
];

export { data };
