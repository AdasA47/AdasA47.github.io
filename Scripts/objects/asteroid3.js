var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Asteroid3 = /** @class */ (function (_super) {
        __extends(Asteroid3, _super);
        //Constructor
        function Asteroid3() {
            var _this = _super.call(this, "asteroid3") || this;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Asteroid3.prototype.Start = function () {
            this._horizontalSpeed = 4 + (Math.random() * 2);
            this.Reset();
        };
        Asteroid3.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this.y -= this._verticalSpeed;
            this.CheckBounds();
        };
        Asteroid3.prototype.Reset = function () {
            this._horizontalSpeed = (Math.random() * 2) + 4;
            this._verticalSpeed = (Math.random() * 4) - 2;
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
            this.x = 640 + this.halfWidth;
        };
        Asteroid3.prototype.CheckBounds = function () {
            if (this.x < -this.halfWidth) {
                this.Reset();
            }
        };
        return Asteroid3;
    }(objects.GameObject));
    objects.Asteroid3 = Asteroid3;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid3.js.map