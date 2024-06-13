"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, model, ...extraoption) {
    const carinfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraoption)
    };
    return carinfo;
}
let answer = storeCarInfo("Honda", "Civic", { color: "Black" }, { features: ["navigation", "Power window"] });
console.log(answer);
