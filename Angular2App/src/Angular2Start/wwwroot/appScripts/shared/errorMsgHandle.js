"use strict";
var ErrorMsgHandle = (function () {
    function ErrorMsgHandle() {
    }
    ErrorMsgHandle.prototype.getErrorMsg = function (error) {
        console.log(error); //to see all the errors just for dev
        if (error.status == 409) {
            for (var _i = 0, _a = error.json(); _i < _a.length; _i++) {
                var item = _a[_i];
                toastr.error(item.ErrorMessage);
            }
        }
        if (error.status == 500) {
            for (var _b = 0, _c = error.json(); _b < _c.length; _b++) {
                var item = _c[_b];
                toastr.error(item.ErrorMessage);
            }
        }
        if (error.status == 400) {
            toastr.error(error.json().message);
        }
        if (error.status == 401) {
            toastr.error(error.json().message);
        }
        //TODO add more status
    };
    return ErrorMsgHandle;
}());
exports.ErrorMsgHandle = ErrorMsgHandle;
