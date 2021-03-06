"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    };
    FormatTimePipe = __decorate([
        core_1.Pipe({
            name: 'formatTime'
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());
exports.FormatTimePipe = FormatTimePipe;
//# sourceMappingURL=pips.js.map