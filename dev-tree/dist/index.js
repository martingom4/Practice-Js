"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hola mundo con typescript');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidos funcionando en el puerto', port);
});
//# sourceMappingURL=index.js.map