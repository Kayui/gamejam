'use strict';

exports.__esModule = true;

var _resourceLoader = require('resource-loader');

var _resourceLoader2 = _interopRequireDefault(_resourceLoader);

var _blob = require('resource-loader/lib/middlewares/parsing/blob');

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _textureParser = require('./textureParser');

var _textureParser2 = _interopRequireDefault(_textureParser);

var _spritesheetParser = require('./spritesheetParser');

var _spritesheetParser2 = _interopRequireDefault(_spritesheetParser);

var _bitmapFontParser = require('./bitmapFontParser');

var _bitmapFontParser2 = _interopRequireDefault(_bitmapFontParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * The new loader, extends Resource Loader by Chad Engler : https://github.com/englercj/resource-loader
 *
 * ```js
 * let loader = PIXI.loader; // pixi exposes a premade instance for you to use.
 * //or
 * let loader = new PIXI.loaders.Loader(); // you can also create your own if you want
 *
 * loader.add('bunny', 'data/bunny.png');
 * loader.add('spaceship', 'assets/spritesheet.json');
 * loader.add('scoreFont', 'assets/score.fnt');
 *
 * loader.once('complete',onAssetsLoaded);
 *
 * loader.load();
 * ```
 *
 * @see https://github.com/englercj/resource-loader
 *
 * @class
 * @extends module:resource-loader.ResourceLoader
 * @memberof PIXI.loaders
 */
var Loader = function (_ResourceLoader) {
    _inherits(Loader, _ResourceLoader);

    /**
     * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
     * @param {number} [concurrency=10] - The number of resources to load concurrently.
     */
    function Loader(baseUrl, concurrency) {
        _classCallCheck(this, Loader);

        var _this = _possibleConstructorReturn(this, _ResourceLoader.call(this, baseUrl, concurrency));

        _eventemitter2.default.call(_this);

        for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
            _this.use(Loader._pixiMiddleware[i]());
        }

        // Compat layer, translate the new v2 signals into old v1 events.
        _this.onStart.add(function (l) {
            return _this.emit('start', l);
        });
        _this.onProgress.add(function (l, r) {
            return _this.emit('progress', l, r);
        });
        _this.onError.add(function (e, l, r) {
            return _this.emit('error', e, l, r);
        });
        _this.onLoad.add(function (l, r) {
            return _this.emit('load', l, r);
        });
        _this.onComplete.add(function (l, r) {
            return _this.emit('complete', l, r);
        });
        return _this;
    }

    /**
     * Adds a default middleware to the pixi loader.
     *
     * @static
     * @param {Function} fn - The middleware to add.
     */


    Loader.addPixiMiddleware = function addPixiMiddleware(fn) {
        Loader._pixiMiddleware.push(fn);
    };

    return Loader;
}(_resourceLoader2.default);

// Copy EE3 prototype (mixin)


exports.default = Loader;
for (var k in _eventemitter2.default.prototype) {
    Loader.prototype[k] = _eventemitter2.default.prototype[k];
}

Loader._pixiMiddleware = [
// parse any blob into more usable objects (e.g. Image)
_blob.blobMiddlewareFactory,
// parse any Image objects into textures
_textureParser2.default,
// parse any spritesheet data into multiple textures
_spritesheetParser2.default,
// parse bitmap font data into multiple textures
_bitmapFontParser2.default];

// Add custom extentions
var Resource = _resourceLoader2.default.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);
//# sourceMappingURL=loader.js.map