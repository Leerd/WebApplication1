"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchOtherValidator(otherControlName) {
    return function (control) {
        var otherControl = control.root.get(otherControlName);
        if (otherControl) {
            var subscription_1 = otherControl
                .valueChanges
                .subscribe(function () {
                control.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
    };
}
exports.matchOtherValidator = matchOtherValidator;
//# sourceMappingURL=validators.js.map