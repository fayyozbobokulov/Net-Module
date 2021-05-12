"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputs = void 0;
function getInputs(path, iterations, runs) {
    return __awaiter(this, void 0, void 0, function* () {
        function getPath(path) {
            path = process.argv[2];
        }
        function getIterations(iterations) {
            iterations = +process.argv[3];
        }
        function getRuns(runs) {
            runs = +process.argv[4];
        }
    });
}
exports.getInputs = getInputs;
//# sourceMappingURL=core.js.map