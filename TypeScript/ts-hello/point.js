"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X' + this._x + 'Y' + this._y);
    };
    Point.prototype.getY = function () {
        return this._y;
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('error');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.setY = function (value) {
        this._y = value;
    };
    return Point;
}());
exports.Point = Point;
