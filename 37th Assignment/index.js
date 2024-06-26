"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`I am making ${size} size T-shirt with message "${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I am programmer");
