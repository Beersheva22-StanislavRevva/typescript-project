"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = (function () {
    function Container(shapes) {
        this._shapes = shapes.slice();
    }
    Object.defineProperty(Container.prototype, "shapes", {
        get: function () {
            return this._shapes.slice();
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.perimeter = function () {
        return this._shapes.reduce(function (res, cur) { return res + cur.perimeter(); }, 0);
    };
    Container.prototype.sqare = function () {
        return this._shapes.reduce(function (res, cur) { return res + cur.sqare(); }, 0);
    };
    Container.prototype.addShape = function (shape) {
        this._shapes.push(shape);
    };
    return Container;
}());
exports.default = Container;
//# sourceMappingURL=Container.js.map