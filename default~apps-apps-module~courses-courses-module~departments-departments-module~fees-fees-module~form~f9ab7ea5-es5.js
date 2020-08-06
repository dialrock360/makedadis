(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~apps-apps-module~courses-courses-module~departments-departments-module~fees-fees-module~form~f9ab7ea5"], {
    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
      \******************************************************************/

    /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
        return BaseCdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
        return BaseRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
        return CDK_ROW_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
        return CDK_TABLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
        return CDK_TABLE_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
        return CdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
        return CdkCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
        return CdkCellOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
        return CdkColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
        return CdkFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
        return CdkFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
        return CdkFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
        return CdkFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
        return CdkHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
        return CdkHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
        return CdkHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
        return CdkHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function () {
        return CdkNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
        return CdkRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
        return CdkRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
        return CdkTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
        return CdkTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
        return CdkTextColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
        return DataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
        return FooterRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
        return HeaderRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function () {
        return NoDataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
        return STICKY_DIRECTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
        return StickyStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
        return TEXT_COLUMN_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
        return mixinHasStickyInput;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function CdkTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function CdkTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to provide a directive with a function that checks if the sticky input has been
       * changed since the last time the function was called. Essentially adds a dirty-check to the
       * sticky value.
       * @docs-private
       */


      function mixinHasStickyInput(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */

            _this._hasStickyChanged = false;
            return _this;
          }
          /** Whether sticky positioning should be applied. */


          _createClass(_class, [{
            key: "hasStickyChanged",

            /** Whether the sticky value has changed since this was last called. */
            value: function hasStickyChanged() {
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }, {
            key: "sticky",
            get: function get() {
              return this._sticky;
            },
            set: function set(v) {
              var prevValue = this._sticky;
              this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a table to some of the sub-components without causing a circular dependency.
       * @docs-private
       */


      var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
      /** Injection token that can be used to specify the text column options. */

      var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for a CDK table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */

      var CdkCellDef = function CdkCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkCellDef);

        this.template = template;
      };

      CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
        return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCellDef,
        selectors: [["", "cdkCellDef", ""]]
      });

      CdkCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * Header cell definition for a CDK table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var CdkHeaderCellDef = function CdkHeaderCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkHeaderCellDef);

        this.template = template;
      };

      CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
        return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]]
      });

      CdkHeaderCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkHeaderCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * Footer cell definition for a CDK table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var CdkFooterCellDef = function CdkFooterCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkFooterCellDef);

        this.template = template;
      };

      CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
        return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]]
      });

      CdkFooterCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkFooterCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkColumnDef.

      /** @docs-private */


      var CdkColumnDefBase = function CdkColumnDefBase() {
        _classCallCheck(this, CdkColumnDefBase);
      };

      var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
      /**
       * Column definition for the CDK table.
       * Defines a set of cells available for a table column.
       */


      var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
        _inherits(CdkColumnDef, _CdkColumnDefBase2);

        var _super2 = _createSuper(CdkColumnDef);

        function CdkColumnDef(_table) {
          var _this2;

          _classCallCheck(this, CdkColumnDef);

          _this2 = _super2.call(this);
          _this2._table = _table;
          _this2._stickyEnd = false;
          return _this2;
        }
        /** Unique name for this column. */


        _createClass(CdkColumnDef, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (name) {
              this._name = name;
              this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
            }
          }
          /**
           * Whether this column should be sticky positioned on the end of the row. Should make sure
           * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
           * has been changed.
           */

        }, {
          key: "stickyEnd",
          get: function get() {
            return this._stickyEnd;
          },
          set: function set(v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
          }
        }]);

        return CdkColumnDef;
      }(_CdkColumnDefBase);

      CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
        return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
          }
        },
        inputs: {
          sticky: "sticky",
          name: ["cdkColumnDef", "name"],
          stickyEnd: "stickyEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: CdkColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkColumnDef.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      CdkColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkColumnDef']
        }],
        stickyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['stickyEnd']
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkCellDef]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkHeaderCellDef]
        }],
        footerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkFooterCellDef]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: CdkColumnDef
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
          }],
          stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
          }],
          footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
          }]
        });
      })();
      /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


      var BaseCdkCell = function BaseCdkCell(columnDef, elementRef) {
        _classCallCheck(this, BaseCdkCell);

        var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
        elementRef.nativeElement.classList.add(columnClassName);
      };
      /** Header cell template container that adds the right classes and role. */


      var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
        _inherits(CdkHeaderCell, _BaseCdkCell);

        var _super3 = _createSuper(CdkHeaderCell);

        function CdkHeaderCell(columnDef, elementRef) {
          _classCallCheck(this, CdkHeaderCell);

          return _super3.call(this, columnDef, elementRef);
        }

        return CdkHeaderCell;
      }(BaseCdkCell);

      CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
        return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkHeaderCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-header-cell, th[cdk-header-cell]',
            host: {
              'class': 'cdk-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
        _inherits(CdkFooterCell, _BaseCdkCell2);

        var _super4 = _createSuper(CdkFooterCell);

        function CdkFooterCell(columnDef, elementRef) {
          _classCallCheck(this, CdkFooterCell);

          return _super4.call(this, columnDef, elementRef);
        }

        return CdkFooterCell;
      }(BaseCdkCell);

      CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
        return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkFooterCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-footer-cell, td[cdk-footer-cell]',
            host: {
              'class': 'cdk-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
        _inherits(CdkCell, _BaseCdkCell3);

        var _super5 = _createSuper(CdkCell);

        function CdkCell(columnDef, elementRef) {
          _classCallCheck(this, CdkCell);

          return _super5.call(this, columnDef, elementRef);
        }

        return CdkCell;
      }(BaseCdkCell);

      CdkCell.ɵfac = function CdkCell_Factory(t) {
        return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-cell, td[cdk-cell]',
            host: {
              'class': 'cdk-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The row template that can be used by the mat-table. Should not be used outside of the
       * material library.
       */


      var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
      /**
       * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
       * for changes and notifying the table.
       */

      var BaseRowDef = /*#__PURE__*/function () {
        function BaseRowDef(
        /** @docs-private */
        template, _differs) {
          _classCallCheck(this, BaseRowDef);

          this.template = template;
          this._differs = _differs;
        }

        _createClass(BaseRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
              var columns = changes['columns'] && changes['columns'].currentValue || [];
              this._columnsDiffer = this._differs.find(columns).create();

              this._columnsDiffer.diff(columns);
            }
          }
          /**
           * Returns the difference between the current columns and the columns from the last diff, or null
           * if there is no difference.
           */

        }, {
          key: "getColumnsDiff",
          value: function getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
          }
          /** Gets this row def's relevant cell template from the provided column def. */

        }, {
          key: "extractCellTemplate",
          value: function extractCellTemplate(column) {
            if (this instanceof CdkHeaderRowDef) {
              return column.headerCell.template;
            }

            if (this instanceof CdkFooterRowDef) {
              return column.footerCell.template;
            } else {
              return column.cell.template;
            }
          }
        }]);

        return BaseRowDef;
      }();

      BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
        return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
      };

      BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: BaseRowDef,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      BaseRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkHeaderRowDef.

      /** @docs-private */


      var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
        _inherits(CdkHeaderRowDefBase, _BaseRowDef);

        var _super6 = _createSuper(CdkHeaderRowDefBase);

        function CdkHeaderRowDefBase() {
          _classCallCheck(this, CdkHeaderRowDefBase);

          return _super6.apply(this, arguments);
        }

        return CdkHeaderRowDefBase;
      }(BaseRowDef);

      var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
      /**
       * Header row definition for the CDK table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
        _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

        var _super7 = _createSuper(CdkHeaderRowDef);

        function CdkHeaderRowDef(template, _differs, _table) {
          var _this3;

          _classCallCheck(this, CdkHeaderRowDef);

          _this3 = _super7.call(this, template, _differs);
          _this3._table = _table;
          return _this3;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(CdkHeaderRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return CdkHeaderRowDef;
      }(_CdkHeaderRowDefBase);

      CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
        return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: ["cdkHeaderRowDef", "columns"],
          sticky: ["cdkHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      CdkHeaderRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkHeaderRowDef]',
            inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkFooterRowDef.

      /** @docs-private */


      var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
        _inherits(CdkFooterRowDefBase, _BaseRowDef2);

        var _super8 = _createSuper(CdkFooterRowDefBase);

        function CdkFooterRowDefBase() {
          _classCallCheck(this, CdkFooterRowDefBase);

          return _super8.apply(this, arguments);
        }

        return CdkFooterRowDefBase;
      }(BaseRowDef);

      var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
      /**
       * Footer row definition for the CDK table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
        _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

        var _super9 = _createSuper(CdkFooterRowDef);

        function CdkFooterRowDef(template, _differs, _table) {
          var _this4;

          _classCallCheck(this, CdkFooterRowDef);

          _this4 = _super9.call(this, template, _differs);
          _this4._table = _table;
          return _this4;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(CdkFooterRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return CdkFooterRowDef;
      }(_CdkFooterRowDefBase);

      CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
        return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: ["cdkFooterRowDef", "columns"],
          sticky: ["cdkFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      CdkFooterRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkFooterRowDef]',
            inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * Data row definition for the CDK table.
       * Captures the header row's template and other row properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
        _inherits(CdkRowDef, _BaseRowDef3);

        var _super10 = _createSuper(CdkRowDef);

        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        function CdkRowDef(template, _differs, _table) {
          var _this5;

          _classCallCheck(this, CdkRowDef);

          _this5 = _super10.call(this, template, _differs);
          _this5._table = _table;
          return _this5;
        }

        return CdkRowDef;
      }(BaseRowDef);

      CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
        return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: ["cdkRowDefColumns", "columns"],
          when: ["cdkRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkRowDef]',
            inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * Outlet for rendering cells inside of a row or header row.
       * @docs-private
       */


      var CdkCellOutlet = /*#__PURE__*/function () {
        function CdkCellOutlet(_viewContainer) {
          _classCallCheck(this, CdkCellOutlet);

          this._viewContainer = _viewContainer;
          CdkCellOutlet.mostRecentCellOutlet = this;
        }

        _createClass(CdkCellOutlet, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
              CdkCellOutlet.mostRecentCellOutlet = null;
            }
          }
        }]);

        return CdkCellOutlet;
      }();

      CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
        return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
      };

      CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]]
      });
      /**
       * Static property containing the latest constructed instance of this class.
       * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
       * createEmbeddedView. After one of these components are created, this property will provide
       * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
       * construct the cells with the provided context.
       */

      CdkCellOutlet.mostRecentCellOutlet = null;

      CdkCellOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkCellOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }];
        }, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var CdkHeaderRow = function CdkHeaderRow() {
        _classCallCheck(this, CdkHeaderRow);
      };

      CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
        return new (t || CdkHeaderRow)();
      };

      CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-header-row, tr[cdk-header-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var CdkFooterRow = function CdkFooterRow() {
        _classCallCheck(this, CdkFooterRow);
      };

      CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
        return new (t || CdkFooterRow)();
      };

      CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-footer-row, tr[cdk-footer-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var CdkRow = function CdkRow() {
        _classCallCheck(this, CdkRow);
      };

      CdkRow.ɵfac = function CdkRow_Factory(t) {
        return new (t || CdkRow)();
      };

      CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-row, tr[cdk-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var CdkNoDataRow = function CdkNoDataRow(templateRef) {
        _classCallCheck(this, CdkNoDataRow);

        this.templateRef = templateRef;
      };

      CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
        return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
      });

      CdkNoDataRow.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[cdkNoDataRow]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * List of all possible directions that can be used for sticky positioning.
       * @docs-private
       */


      var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      /**
       * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
       * @docs-private
       */

      var StickyStyler = /*#__PURE__*/function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         */
        function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
          var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          _classCallCheck(this, StickyStyler);

          this._isNativeHtmlTable = _isNativeHtmlTable;
          this._stickCellCss = _stickCellCss;
          this.direction = direction;
          this._isBrowser = _isBrowser;
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */


        _createClass(StickyStyler, [{
          key: "clearStickyPositioning",
          value: function clearStickyPositioning(rows, stickyDirections) {
            var _iterator = _createForOfIteratorHelper(rows),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var row = _step.value;

                // If the row isn't an element (e.g. if it's an `ng-container`),
                // it won't have inline styles or `children` so we skip it.
                if (row.nodeType !== row.ELEMENT_NODE) {
                  continue;
                }

                this._removeStickyStyle(row, stickyDirections);

                for (var i = 0; i < row.children.length; i++) {
                  var cell = row.children[i];

                  this._removeStickyStyle(cell, stickyDirections);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           */

        }, {
          key: "updateStickyColumns",
          value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
            var hasStickyColumns = stickyStartStates.some(function (state) {
              return state;
            }) || stickyEndStates.some(function (state) {
              return state;
            });

            if (!rows.length || !hasStickyColumns || !this._isBrowser) {
              return;
            }

            var firstRow = rows[0];
            var numCells = firstRow.children.length;

            var cellWidths = this._getCellWidths(firstRow);

            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

            var isRtl = this.direction === 'rtl';

            var _iterator2 = _createForOfIteratorHelper(rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;

                for (var i = 0; i < numCells; i++) {
                  var cell = row.children[i];

                  if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                  }

                  if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */

        }, {
          key: "stickRows",
          value: function stickRows(rowsToStick, stickyStates, position) {
            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.


            var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
            var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
            var stickyHeight = 0;

            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
              if (!states[rowIndex]) {
                continue;
              }

              var row = rows[rowIndex];

              if (this._isNativeHtmlTable) {
                for (var j = 0; j < row.children.length; j++) {
                  var cell = row.children[j];

                  this._addStickyStyle(cell, position, stickyHeight);
                }
              } else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
              }

              if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
              }

              stickyHeight += row.getBoundingClientRect().height;
            }
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */

        }, {
          key: "updateStickyFooterContainer",
          value: function updateStickyFooterContainer(tableElement, stickyStates) {
            if (!this._isNativeHtmlTable) {
              return;
            }

            var tfoot = tableElement.querySelector('tfoot');

            if (stickyStates.some(function (state) {
              return !state;
            })) {
              this._removeStickyStyle(tfoot, ['bottom']);
            } else {
              this._addStickyStyle(tfoot, 'bottom', 0);
            }
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */

        }, {
          key: "_removeStickyStyle",
          value: function _removeStickyStyle(element, stickyDirections) {
            var _iterator3 = _createForOfIteratorHelper(stickyDirections),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var dir = _step3.value;
                element.style[dir] = '';
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
            // the sticky CSS class.

            var hasDirection = STICKY_DIRECTIONS.some(function (dir) {
              return !!element.style[dir];
            });

            if (!hasDirection) {
              element.style.position = '';
              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */

        }, {
          key: "_addStickyStyle",
          value: function _addStickyStyle(element, dir, dirValue) {
            element.classList.add(this._stickCellCss);
            element.style[dir] = "".concat(dirValue, "px");
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            element.style.zIndex = this._getCalculatedZIndex(element);
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */

        }, {
          key: "_getCalculatedZIndex",
          value: function _getCalculatedZIndex(element) {
            var zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1
            };
            var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

            var _iterator4 = _createForOfIteratorHelper(STICKY_DIRECTIONS),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var dir = _step4.value;

                if (element.style[dir]) {
                  zIndex += zIndexIncrements[dir];
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return zIndex ? "".concat(zIndex) : '';
          }
          /** Gets the widths for each cell in the provided row. */

        }, {
          key: "_getCellWidths",
          value: function _getCellWidths(row) {
            var cellWidths = [];
            var firstRowCells = row.children;

            for (var i = 0; i < firstRowCells.length; i++) {
              var cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }

            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyStartColumnPositions",
          value: function _getStickyStartColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyEndColumnPositions",
          value: function _getStickyEndColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
        }]);

        return StickyStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to find an unexisting column.
       * @param id Id whose lookup failed.
       * @docs-private
       */


      function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"".concat(id, "\"."));
      }
      /**
       * Returns an error to be thrown when two column definitions have the same name.
       * @docs-private
       */


      function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
      }
      /**
       * Returns an error to be thrown when there are multiple rows that are missing a when function.
       * @docs-private
       */


      function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching row defs for a particular set of data.
       * @docs-private
       */


      function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
      }
      /**
       * Returns an error to be thrown when there is no row definitions present in the content.
       * @docs-private
       */


      function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
      }
      /**
       * Returns an error to be thrown when the data source does not match the compatible types.
       * @docs-private
       */


      function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
      }
      /**
       * Returns an error to be thrown when the text column cannot find a parent table to inject.
       * @docs-private
       */


      function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
      }
      /**
       * Returns an error to be thrown when a table text column doesn't have a name.
       * @docs-private
       */


      function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Provides a handle for the table to grab the view container's ng-container to insert data rows.
       * @docs-private
       */


      var DataRowOutlet = function DataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, DataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
        return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: DataRowOutlet,
        selectors: [["", "rowOutlet", ""]]
      });

      DataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[rowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the header.
       * @docs-private
       */


      var HeaderRowOutlet = function HeaderRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, HeaderRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
        return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]]
      });

      HeaderRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[headerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the footer.
       * @docs-private
       */


      var FooterRowOutlet = function FooterRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, FooterRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
        return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]]
      });

      FooterRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[footerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view
       * container's ng-container to insert the no data row.
       * @docs-private
       */


      var NoDataRowOutlet = function NoDataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, NoDataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
        return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]]
      });

      NoDataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NoDataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[noDataRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * The table template that can be used by the mat-table. Should not be used outside of the
       * material library.
       * @docs-private
       */


      var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
      // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
      "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
      /**
       * Class used to conveniently type the embedded view ref for rows with a context.
       * @docs-private
       */

      var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(RowViewRef, _angular_core__WEBPAC);

        var _super11 = _createSuper(RowViewRef);

        function RowViewRef() {
          _classCallCheck(this, RowViewRef);

          return _super11.apply(this, arguments);
        }

        return RowViewRef;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"]);
      /**
       * A data table that can render a header row, data rows, and a footer row.
       * Uses the dataSource input to determine the data to be rendered. The data can be provided either
       * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
       * connect function that will return an Observable stream that emits the data array to render.
       */


      var CdkTable = /*#__PURE__*/function () {
        function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
          _classCallCheck(this, CdkTable);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dir = _dir;
          this._platform = _platform;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Map of all the user's defined columns (header, data, and footer cell template) identified by
           * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
           * any custom column definitions added to `_customColumnDefs`.
           */

          this._columnDefsByName = new Map();
          /**
           * Column definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * column definitions as *its* content child.
           */

          this._customColumnDefs = new Set();
          /**
           * Data row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in data rows as *its* content child.
           */

          this._customRowDefs = new Set();
          /**
           * Header row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in header rows as *its* content child.
           */

          this._customHeaderRowDefs = new Set();
          /**
           * Footer row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
           * built-in footer row as *its* content child.
           */

          this._customFooterRowDefs = new Set();
          /**
           * Whether the header row definition has been changed. Triggers an update to the header row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._headerRowDefChanged = true;
          /**
           * Whether the footer row definition has been changed. Triggers an update to the footer row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._footerRowDefChanged = true;
          /**
           * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
           * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
           * the cached `RenderRow` objects when possible, the row identity is preserved when the data
           * and row template matches, which allows the `IterableDiffer` to check rows by reference
           * and understand which rows are added/moved/removed.
           *
           * Implemented as a map of maps where the first key is the `data: T` object and the second is the
           * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
           * contains an array of created pairs. The array is necessary to handle cases where the data
           * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
           * stored.
           */

          this._cachedRenderRowsMap = new Map();
          /**
           * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
           * table subclasses.
           */

          this.stickyCssClass = 'cdk-table-sticky';
          /** Whether the no data row is currently showing anything. */

          this._isShowingNoDataRow = false;
          this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
          //   and instead calculate the view on init and scroll.

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           *
           * @docs-private
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
            start: 0,
            end: Number.MAX_VALUE
          });

          if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
          }

          this._document = _document;
          this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */


        _createClass(CdkTable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this._setupStickyStyler();

            if (this._isNativeHtmlTable) {
              this._applyNativeTableSections();
            } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.


            this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
              return _this6.trackBy ? _this6.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();

            this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
              throw getTableMissingRowDefsError();
            } // Render updates if the list of columns have been changed for the header, row, or footer defs.


            this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


            if (this._headerRowDefChanged) {
              this._forceRenderHeaderRows();

              this._headerRowDefChanged = false;
            } // If the footer row definition has been changed, trigger a render to the footer row.


            if (this._footerRowDefChanged) {
              this._forceRenderFooterRows();

              this._footerRowDefChanged = false;
            } // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.


            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
              this._observeRenderChanges();
            }

            this._checkStickyStates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rowOutlet.viewContainer.clear();

            this._noDataRowOutlet.viewContainer.clear();

            this._headerRowOutlet.viewContainer.clear();

            this._footerRowOutlet.viewContainer.clear();

            this._cachedRenderRowsMap.clear();

            this._onDestroy.next();

            this._onDestroy.complete();

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              this.dataSource.disconnect(this);
            }
          }
          /**
           * Renders rows based on the table's latest set of data, which was either provided directly as an
           * input or retrieved through an Observable stream (directly or from a DataSource).
           * Checks for differences in the data since the last diff to perform only the necessary
           * changes (add/remove/move rows).
           *
           * If the table's data source is a DataSource or Observable, this will be invoked automatically
           * each time the provided Observable stream emits a new data array. Otherwise if your data is
           * an array, this function will need to be called to render any changes.
           */

        }, {
          key: "renderRows",
          value: function renderRows() {
            var _this7 = this;

            this._renderRows = this._getAllRenderRows();

            var changes = this._dataDiffer.diff(this._renderRows);

            if (!changes) {
              return;
            }

            var viewContainer = this._rowOutlet.viewContainer;
            changes.forEachOperation(function (record, prevIndex, currentIndex) {
              if (record.previousIndex == null) {
                _this7._insertRow(record.item, currentIndex);
              } else if (currentIndex == null) {
                viewContainer.remove(prevIndex);
              } else {
                var view = viewContainer.get(prevIndex);
                viewContainer.move(view, currentIndex);
              }
            }); // Update the meta context of a row's context data (index, count, first, last, ...)

            this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.


            changes.forEachIdentityChange(function (record) {
              var rowView = viewContainer.get(record.currentIndex);
              rowView.context.$implicit = record.item.data;
            });

            this._updateNoDataRow();

            this.updateStickyColumnStyles();
          }
          /** Adds a column definition that was not included as part of the content children. */

        }, {
          key: "addColumnDef",
          value: function addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
          }
          /** Removes a column definition that was not included as part of the content children. */

        }, {
          key: "removeColumnDef",
          value: function removeColumnDef(columnDef) {
            this._customColumnDefs["delete"](columnDef);
          }
          /** Adds a row definition that was not included as part of the content children. */

        }, {
          key: "addRowDef",
          value: function addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
          }
          /** Removes a row definition that was not included as part of the content children. */

        }, {
          key: "removeRowDef",
          value: function removeRowDef(rowDef) {
            this._customRowDefs["delete"](rowDef);
          }
          /** Adds a header row definition that was not included as part of the content children. */

        }, {
          key: "addHeaderRowDef",
          value: function addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Removes a header row definition that was not included as part of the content children. */

        }, {
          key: "removeHeaderRowDef",
          value: function removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs["delete"](headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Adds a footer row definition that was not included as part of the content children. */

        }, {
          key: "addFooterRowDef",
          value: function addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Removes a footer row definition that was not included as part of the content children. */

        }, {
          key: "removeFooterRowDef",
          value: function removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs["delete"](footerRowDef);

            this._footerRowDefChanged = true;
          }
          /**
           * Updates the header sticky styles. First resets all applied styles with respect to the cells
           * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
           * automatically called when the header row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyHeaderRowStyles",
          value: function updateStickyHeaderRowStyles() {
            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var thead = tableElement.querySelector('thead');

            if (thead) {
              thead.style.display = headerRows.length ? '' : 'none';
            }

            var stickyStates = this._headerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

            this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


            this._headerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the footer sticky styles. First resets all applied styles with respect to the cells
           * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
           * automatically called when the footer row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyFooterRowStyles",
          value: function updateStickyFooterRowStyles() {
            var footerRows = this._getRenderedRows(this._footerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var tfoot = tableElement.querySelector('tfoot');

            if (tfoot) {
              tfoot.style.display = footerRows.length ? '' : 'none';
            }

            var stickyStates = this._footerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


            this._footerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the column sticky styles. First resets all applied styles with respect to the cells
           * sticking to the left and right. Then sticky styles are added for the left and right according
           * to the column definitions for each cell in each row. This is automatically called when
           * the data source provides a new set of data or when a column definition changes its sticky
           * input. May be called manually for cases where the cell content changes outside of these events.
           */

        }, {
          key: "updateStickyColumnStyles",
          value: function updateStickyColumnStyles() {
            var _this8 = this;

            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var dataRows = this._getRenderedRows(this._rowOutlet);

            var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)


            this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


            headerRows.forEach(function (headerRow, i) {
              _this8._addStickyColumnStyles([headerRow], _this8._headerRowDefs[i]);
            }); // Update the sticky styles for each data row depending on its def's sticky state

            this._rowDefs.forEach(function (rowDef) {
              // Collect all the rows rendered with this row definition.
              var rows = [];

              for (var i = 0; i < dataRows.length; i++) {
                if (_this8._renderRows[i].rowDef === rowDef) {
                  rows.push(dataRows[i]);
                }
              }

              _this8._addStickyColumnStyles(rows, rowDef);
            }); // Update the sticky styles for each footer row depending on the def's sticky state


            footerRows.forEach(function (footerRow, i) {
              _this8._addStickyColumnStyles([footerRow], _this8._footerRowDefs[i]);
            }); // Reset the dirty state of the sticky input change since it has been used.

            Array.from(this._columnDefsByName.values()).forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Get the list of RenderRow objects to render according to the current list of data and defined
           * row definitions. If the previous list already contained a particular pair, it should be reused
           * so that the differ equates their references.
           */

        }, {
          key: "_getAllRenderRows",
          value: function _getAllRenderRows() {
            var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.

            var prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

            for (var i = 0; i < this._data.length; i++) {
              var data = this._data[i];

              var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

              if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
              }

              for (var j = 0; j < renderRowsForData.length; j++) {
                var renderRow = renderRowsForData[j];

                var cache = this._cachedRenderRowsMap.get(renderRow.data);

                if (cache.has(renderRow.rowDef)) {
                  cache.get(renderRow.rowDef).push(renderRow);
                } else {
                  cache.set(renderRow.rowDef, [renderRow]);
                }

                renderRows.push(renderRow);
              }
            }

            return renderRows;
          }
          /**
           * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
           * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
           * `(T, CdkRowDef)` pair.
           */

        }, {
          key: "_getRenderRowsForData",
          value: function _getRenderRowsForData(data, dataIndex, cache) {
            var rowDefs = this._getRowDefs(data, dataIndex);

            return rowDefs.map(function (rowDef) {
              var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

              if (cachedRenderRows.length) {
                var dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
              } else {
                return {
                  data: data,
                  rowDef: rowDef,
                  dataIndex: dataIndex
                };
              }
            });
          }
          /** Update the map containing the content's column definitions. */

        }, {
          key: "_cacheColumnDefs",
          value: function _cacheColumnDefs() {
            var _this9 = this;

            this._columnDefsByName.clear();

            var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(function (columnDef) {
              if (_this9._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
              }

              _this9._columnDefsByName.set(columnDef.name, columnDef);
            });
          }
          /** Update the list of all available row definitions that can be used. */

        }, {
          key: "_cacheRowDefs",
          value: function _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

            var defaultRowDefs = this._rowDefs.filter(function (def) {
              return !def.when;
            });

            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
              throw getTableMultipleDefaultRowDefsError();
            }

            this._defaultRowDef = defaultRowDefs[0];
          }
          /**
           * Check if the header, data, or footer rows have changed what columns they want to display or
           * whether the sticky states have changed for the header or footer. If there is a diff, then
           * re-render that section.
           */

        }, {
          key: "_renderUpdatedColumns",
          value: function _renderUpdatedColumns() {
            var columnsDiffReducer = function columnsDiffReducer(acc, def) {
              return acc || !!def.getColumnsDiff();
            }; // Force re-render data rows if the list of column definitions have changed.


            if (this._rowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderDataRows();
            } // Force re-render header/footer rows if the list of column definitions have changed..


            if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderHeaderRows();
            }

            if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderFooterRows();
            }
          }
          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the row outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            this._data = [];

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              this.dataSource.disconnect(this);
            } // Stop listening for data from the previous data source.


            if (this._renderChangeSubscription) {
              this._renderChangeSubscription.unsubscribe();

              this._renderChangeSubscription = null;
            }

            if (!dataSource) {
              if (this._dataDiffer) {
                this._dataDiffer.diff([]);
              }

              this._rowOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this10 = this;

            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
              return;
            }

            var dataStream;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              dataStream = this.dataSource.connect(this);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
              dataStream = this.dataSource;
            } else if (Array.isArray(this.dataSource)) {
              dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
            }

            if (dataStream === undefined) {
              throw getTableUnknownDataSourceError();
            }

            this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
              _this10._data = data || [];

              _this10.renderRows();
            });
          }
          /**
           * Clears any existing content in the header row outlet and creates a new embedded view
           * in the outlet using the header row definition.
           */

        }, {
          key: "_forceRenderHeaderRows",
          value: function _forceRenderHeaderRows() {
            var _this11 = this;

            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
              this._headerRowOutlet.viewContainer.clear();
            }

            this._headerRowDefs.forEach(function (def, i) {
              return _this11._renderRow(_this11._headerRowOutlet, def, i);
            });

            this.updateStickyHeaderRowStyles();
            this.updateStickyColumnStyles();
          }
          /**
           * Clears any existing content in the footer row outlet and creates a new embedded view
           * in the outlet using the footer row definition.
           */

        }, {
          key: "_forceRenderFooterRows",
          value: function _forceRenderFooterRows() {
            var _this12 = this;

            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
              this._footerRowOutlet.viewContainer.clear();
            }

            this._footerRowDefs.forEach(function (def, i) {
              return _this12._renderRow(_this12._footerRowOutlet, def, i);
            });

            this.updateStickyFooterRowStyles();
            this.updateStickyColumnStyles();
          }
          /** Adds the sticky column styles for the rows according to the columns' stick states. */

        }, {
          key: "_addStickyColumnStyles",
          value: function _addStickyColumnStyles(rows, rowDef) {
            var _this13 = this;

            var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
              var columnDef = _this13._columnDefsByName.get(columnName);

              if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
              }

              return columnDef;
            });
            var stickyStartStates = columnDefs.map(function (columnDef) {
              return columnDef.sticky;
            });
            var stickyEndStates = columnDefs.map(function (columnDef) {
              return columnDef.stickyEnd;
            });

            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
          }
          /** Gets the list of rows that have been rendered in the row outlet. */

        }, {
          key: "_getRenderedRows",
          value: function _getRenderedRows(rowOutlet) {
            var renderedRows = [];

            for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
              var viewRef = rowOutlet.viewContainer.get(i);
              renderedRows.push(viewRef.rootNodes[0]);
            }

            return renderedRows;
          }
          /**
           * Get the matching row definitions that should be used for this row data. If there is only
           * one row definition, it is returned. Otherwise, find the row definitions that has a when
           * predicate that returns true with the data. If none return true, return the default row
           * definition.
           */

        }, {
          key: "_getRowDefs",
          value: function _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
              return [this._rowDefs[0]];
            }

            var rowDefs = [];

            if (this.multiTemplateDataRows) {
              rowDefs = this._rowDefs.filter(function (def) {
                return !def.when || def.when(dataIndex, data);
              });
            } else {
              var rowDef = this._rowDefs.find(function (def) {
                return def.when && def.when(dataIndex, data);
              }) || this._defaultRowDef;

              if (rowDef) {
                rowDefs.push(rowDef);
              }
            }

            if (!rowDefs.length) {
              throw getTableMissingMatchingRowDefError(data);
            }

            return rowDefs;
          }
          /**
           * Create the embedded view for the data row template and place it in the correct index location
           * within the data row view container.
           */

        }, {
          key: "_insertRow",
          value: function _insertRow(renderRow, renderIndex) {
            var rowDef = renderRow.rowDef;
            var context = {
              $implicit: renderRow.data
            };

            this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
          }
          /**
           * Creates a new row template in the outlet and fills it with the set of cell templates.
           * Optionally takes a context to provide to the row and cells, as well as an optional index
           * of where to place the new row template in the outlet.
           */

        }, {
          key: "_renderRow",
          value: function _renderRow(outlet, rowDef, index) {
            var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

            var _iterator5 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var cellTemplate = _step5.value;

                if (CdkCellOutlet.mostRecentCellOutlet) {
                  CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */

        }, {
          key: "_updateRowIndexContext",
          value: function _updateRowIndexContext() {
            var viewContainer = this._rowOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;

              if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
              } else {
                context.index = this._renderRows[renderIndex].dataIndex;
              }
            }
          }
          /** Gets the column definitions for the provided row def. */

        }, {
          key: "_getCellTemplates",
          value: function _getCellTemplates(rowDef) {
            var _this14 = this;

            if (!rowDef || !rowDef.columns) {
              return [];
            }

            return Array.from(rowDef.columns, function (columnId) {
              var column = _this14._columnDefsByName.get(columnId);

              if (!column) {
                throw getTableUnknownColumnError(columnId);
              }

              return rowDef.extractCellTemplate(column);
            });
          }
          /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

        }, {
          key: "_applyNativeTableSections",
          value: function _applyNativeTableSections() {
            var documentFragment = this._document.createDocumentFragment();

            var sections = [{
              tag: 'thead',
              outlets: [this._headerRowOutlet]
            }, {
              tag: 'tbody',
              outlets: [this._rowOutlet, this._noDataRowOutlet]
            }, {
              tag: 'tfoot',
              outlets: [this._footerRowOutlet]
            }];

            for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
              var section = _sections[_i2];

              var element = this._document.createElement(section.tag);

              element.setAttribute('role', 'rowgroup');

              var _iterator6 = _createForOfIteratorHelper(section.outlets),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var outlet = _step6.value;
                  element.appendChild(outlet.elementRef.nativeElement);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              documentFragment.appendChild(element);
            } // Use a DocumentFragment so we don't hit the DOM on each iteration.


            this._elementRef.nativeElement.appendChild(documentFragment);
          }
          /**
           * Forces a re-render of the data rows. Should be called in cases where there has been an input
           * change that affects the evaluation of which rows should be rendered, e.g. toggling
           * `multiTemplateDataRows` or adding/removing row definitions.
           */

        }, {
          key: "_forceRenderDataRows",
          value: function _forceRenderDataRows() {
            this._dataDiffer.diff([]);

            this._rowOutlet.viewContainer.clear();

            this.renderRows();
            this.updateStickyColumnStyles();
          }
          /**
           * Checks if there has been a change in sticky states since last check and applies the correct
           * sticky styles. Since checking resets the "dirty" state, this should only be performed once
           * during a change detection and after the inputs are settled (after content check).
           */

        }, {
          key: "_checkStickyStates",
          value: function _checkStickyStates() {
            var stickyCheckReducer = function stickyCheckReducer(acc, d) {
              return acc || d.hasStickyChanged();
            }; // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.


            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyHeaderRowStyles();
            }

            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyFooterRowStyles();
            }

            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Creates the sticky styler that will be used for sticky rows and columns. Listens
           * for directionality changes and provides the latest direction to the styler. Re-applies column
           * stickiness when directionality changes.
           */

        }, {
          key: "_setupStickyStyler",
          value: function _setupStickyStyler() {
            var _this15 = this;

            var direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (value) {
              _this15._stickyStyler.direction = value;

              _this15.updateStickyColumnStyles();
            });
          }
          /** Filters definitions that belong to this table from a QueryList. */

        }, {
          key: "_getOwnDefs",
          value: function _getOwnDefs(items) {
            var _this16 = this;

            return items.filter(function (item) {
              return !item._table || item._table === _this16;
            });
          }
          /** Creates or removes the no data row, depending on whether any data is being shown. */

        }, {
          key: "_updateNoDataRow",
          value: function _updateNoDataRow() {
            if (this._noDataRow) {
              var shouldShow = this._rowOutlet.viewContainer.length === 0;

              if (shouldShow !== this._isShowingNoDataRow) {
                var container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
              }
            }
          }
        }, {
          key: "trackBy",
          get: function get() {
            return this._trackByFn;
          },
          set: function set(fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && console && console.warn) {
              console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
            }

            this._trackByFn = fn;
          }
          /**
           * The table's source of data, which can be provided in three ways (in order of complexity):
           *   - Simple data array (each object represents one table row)
           *   - Stream that emits a data array each time the array changes
           *   - `DataSource` object that implements the connect/disconnect interface.
           *
           * If a data array is provided, the table must be notified when the array's objects are
           * added, removed, or moved. This can be done by calling the `renderRows()` function which will
           * render the diff since the last table render. If the data array reference is changed, the table
           * will automatically trigger an update to the rows.
           *
           * When providing an Observable stream, the table will trigger an update automatically when the
           * stream emits a new array of data.
           *
           * Finally, when providing a `DataSource` object, the table will use the Observable stream
           * provided by the connect function and trigger updates when that stream emits new data array
           * values. During the table's ngOnDestroy or when the data source is removed from the table, the
           * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
           * subscriptions registered during the connect process).
           */

        }, {
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
          /**
           * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
           * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
           * dataobject will render the first row that evaluates its when predicate to true, in the order
           * defined in the table, or otherwise the default row which does not have a when predicate.
           */

        }, {
          key: "multiTemplateDataRows",
          get: function get() {
            return this._multiTemplateDataRows;
          },
          set: function set(v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.

            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
              this._forceRenderDataRows();
            }
          }
        }]);

        return CdkTable;
      }();

      CdkTable.ɵfac = function CdkTable_Factory(t) {
        return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      };

      CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
          }
        },
        viewQuery: function CdkTable_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
          }
        },
        hostAttrs: [1, "cdk-table"],
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: "multiTemplateDataRows"
        },
        exportAs: ["cdkTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: CDK_TABLE,
          useExisting: CdkTable
        }])],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
        encapsulation: 2
      });

      CdkTable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['role']
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      CdkTable.propDecorators = {
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        multiTemplateDataRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _rowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [DataRowOutlet, {
            "static": true
          }]
        }],
        _headerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [HeaderRowOutlet, {
            "static": true
          }]
        }],
        _footerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [FooterRowOutlet, {
            "static": true
          }]
        }],
        _noDataRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [NoDataRowOutlet, {
            "static": true
          }]
        }],
        _contentColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkColumnDef, {
            descendants: true
          }]
        }],
        _contentRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkRowDef, {
            descendants: true
          }]
        }],
        _contentHeaderRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkHeaderRowDef, {
            descendants: true
          }]
        }],
        _contentFooterRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkFooterRowDef, {
            descendants: true
          }]
        }],
        _noDataRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkNoDataRow]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-table, table[cdk-table]',
            exportAs: 'cdkTable',
            template: CDK_TABLE_TEMPLATE,
            host: {
              'class': 'cdk-table'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
            // The view for `MatTable` consists entirely of templates declared in other views. As they are
            // declared elsewhere, they are checked when their declaration points are checked.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            providers: [{
              provide: CDK_TABLE,
              useExisting: CdkTable
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
              args: ['role']
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }];
        }, {
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, {
              "static": true
            }]
          }],
          _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, {
              "static": true
            }]
          }],
          _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, {
              "static": true
            }]
          }],
          _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NoDataRowOutlet, {
              "static": true
            }]
          }],
          _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, {
              descendants: true
            }]
          }],
          _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, {
              descendants: true
            }]
          }],
          _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
              descendants: true
            }]
          }],
          _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
              descendants: true
            }]
          }],
          _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkNoDataRow]
          }]
        });
      })();
      /** Utility function that gets a merged list of the entries in an array and values of a Set. */


      function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var CdkTextColumn = /*#__PURE__*/function () {
        function CdkTextColumn(_table, _options) {
          _classCallCheck(this, CdkTextColumn);

          this._table = _table;
          this._options = _options;
          /** Alignment of the cell values. */

          this.justify = 'start';
          this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */


        _createClass(CdkTextColumn, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._syncColumnDefName();

            if (this.headerText === undefined) {
              this.headerText = this._createDefaultHeaderText();
            }

            if (!this.dataAccessor) {
              this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
                return data[name];
              };
            }

            if (this._table) {
              // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
              // since the columnDef will not pick up its content by the time the table finishes checking
              // its content and initializing the rows.
              this.columnDef.cell = this.cell;
              this.columnDef.headerCell = this.headerCell;

              this._table.addColumnDef(this.columnDef);
            } else {
              throw getTableTextColumnMissingParentTableError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._table) {
              this._table.removeColumnDef(this.columnDef);
            }
          }
          /**
           * Creates a default header text. Use the options' header text transformation function if one
           * has been provided. Otherwise simply capitalize the column name.
           */

        }, {
          key: "_createDefaultHeaderText",
          value: function _createDefaultHeaderText() {
            var name = this.name;

            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
              throw getTableTextColumnMissingNameError();
            }

            if (this._options && this._options.defaultHeaderTextTransform) {
              return this._options.defaultHeaderTextTransform(name);
            }

            return name[0].toUpperCase() + name.slice(1);
          }
          /** Synchronizes the column definition name with the text column name. */

        }, {
          key: "_syncColumnDefName",
          value: function _syncColumnDefName() {
            if (this.columnDef) {
              this.columnDef.name = this.name;
            }
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name; // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.

            this._syncColumnDefName();
          }
        }]);

        return CdkTextColumn;
      }();

      CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
        return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
      };

      CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          }
        },
        inputs: {
          justify: "justify",
          name: "name",
          headerText: "headerText",
          dataAccessor: "dataAccessor"
        },
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
        encapsulation: 2
      });

      CdkTextColumn.ctorParameters = function () {
        return [{
          type: CdkTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [TEXT_COLUMN_OPTIONS]
          }]
        }];
      };

      CdkTextColumn.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataAccessor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        justify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        columnDef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkColumnDef, {
            "static": true
          }]
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkCellDef, {
            "static": true
          }]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkHeaderCellDef, {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-text-column',
            template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
          }]
        }], function () {
          return [{
            type: CdkTable,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [TEXT_COLUMN_OPTIONS]
            }]
          }];
        }, {
          justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, {
              "static": true
            }]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, {
              "static": true
            }]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];

      var CdkTableModule = function CdkTableModule() {
        _classCallCheck(this, CdkTableModule);
      };

      CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: CdkTableModule
      });
      CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function CdkTableModule_Factory(t) {
          return new (t || CdkTableModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, {
          declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet],
          exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
      \***************************************************************************/

    /*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function () {
        return MAT_PAGINATOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
        return MAT_PAGINATOR_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
        return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
        return MatPaginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
        return MatPaginatorIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
        return MatPaginatorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
        return PageEvent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
       * include it in a custom provider
       */


      function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageSizeOption_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
        }
      }

      function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7._changePageSize($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
        }
      }

      function MatPaginator_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.pageSize);
        }
      }

      function MatPaginator_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
        }
      }

      function MatPaginator_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.firstPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
        }
      }

      function MatPaginator_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.lastPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
        }
      }

      var MatPaginatorIntl = function MatPaginatorIntl() {
        _classCallCheck(this, MatPaginatorIntl);

        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** A label for the page size selector. */

        this.itemsPerPageLabel = 'Items per page:';
        /** A label for the button that increments the current page. */

        this.nextPageLabel = 'Next page';
        /** A label for the button that decrements the current page. */

        this.previousPageLabel = 'Previous page';
        /** A label for the button that moves to the first page. */

        this.firstPageLabel = 'First page';
        /** A label for the button that moves to the last page. */

        this.lastPageLabel = 'Last page';
        /** A label for the range of items within the current page and the length of the whole list. */

        this.getRangeLabel = function (page, pageSize, length) {
          if (length == 0 || pageSize == 0) {
            return "0 of ".concat(length);
          }

          length = Math.max(length, 0);
          var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

          var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
          return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
        };
      };

      MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
        return new (t || MatPaginatorIntl)();
      };

      MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MatPaginatorIntl_Factory() {
          return new MatPaginatorIntl();
        },
        token: MatPaginatorIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatPaginatorIntl();
      }
      /** @docs-private */


      var MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: MatPaginatorIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
        useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The default page size if there is no page size and there are no provided page size options. */

      var DEFAULT_PAGE_SIZE = 50;
      /**
       * Change event object that is emitted when the user selects a
       * different page size or navigates to another page.
       */

      var PageEvent = function PageEvent() {
        _classCallCheck(this, PageEvent);
      };
      /** Injection token that can be used to provide the default options for the paginator module. */


      var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

      /** @docs-private */

      var MatPaginatorBase = function MatPaginatorBase() {
        _classCallCheck(this, MatPaginatorBase);
      };

      var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));
      /**
       * Component to provide navigation between paged information. Displays the size of the current
       * page, user-selectable options to change that size, what items are being shown, and
       * navigational button to go to the previous or next page.
       */


      var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
        _inherits(MatPaginator, _MatPaginatorBase2);

        var _super12 = _createSuper(MatPaginator);

        function MatPaginator(_intl, _changeDetectorRef, defaults) {
          var _this17;

          _classCallCheck(this, MatPaginator);

          _this17 = _super12.call(this);
          _this17._intl = _intl;
          _this17._changeDetectorRef = _changeDetectorRef;
          _this17._pageIndex = 0;
          _this17._length = 0;
          _this17._pageSizeOptions = [];
          _this17._hidePageSize = false;
          _this17._showFirstLastButtons = false;
          /** Event emitted when the paginator changes the page size or page index. */

          _this17.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this17._intlChanges = _intl.changes.subscribe(function () {
            return _this17._changeDetectorRef.markForCheck();
          });

          if (defaults) {
            var pageSize = defaults.pageSize,
                pageSizeOptions = defaults.pageSizeOptions,
                hidePageSize = defaults.hidePageSize,
                showFirstLastButtons = defaults.showFirstLastButtons;

            if (pageSize != null) {
              _this17._pageSize = pageSize;
            }

            if (pageSizeOptions != null) {
              _this17._pageSizeOptions = pageSizeOptions;
            }

            if (hidePageSize != null) {
              _this17._hidePageSize = hidePageSize;
            }

            if (showFirstLastButtons != null) {
              _this17._showFirstLastButtons = showFirstLastButtons;
            }
          }

          return _this17;
        }
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */


        _createClass(MatPaginator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initialized = true;

            this._updateDisplayedPageSizeOptions();

            this._markInitialized();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();
          }
          /** Advances to the next page if it exists. */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex++;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move back to the previous page if it exists. */

        }, {
          key: "previousPage",
          value: function previousPage() {
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex--;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the first page if not already there. */

        }, {
          key: "firstPage",
          value: function firstPage() {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = 0;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the last page if not already there. */

        }, {
          key: "lastPage",
          value: function lastPage() {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;

            this._emitPageEvent(previousPageIndex);
          }
          /** Whether there is a previous page. */

        }, {
          key: "hasPreviousPage",
          value: function hasPreviousPage() {
            return this.pageIndex >= 1 && this.pageSize != 0;
          }
          /** Whether there is a next page. */

        }, {
          key: "hasNextPage",
          value: function hasNextPage() {
            var maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
          }
          /** Calculate the number of pages */

        }, {
          key: "getNumberOfPages",
          value: function getNumberOfPages() {
            if (!this.pageSize) {
              return 0;
            }

            return Math.ceil(this.length / this.pageSize);
          }
          /**
           * Changes the page size so that the first item displayed on the page will still be
           * displayed using the new page size.
           *
           * For example, if the page size is 10 and on the second page (items indexed 10-19) then
           * switching so that the page size is 5 will set the third page as the current page so
           * that the 10th item will still be displayed.
           */

        }, {
          key: "_changePageSize",
          value: function _changePageSize(pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.
            var startIndex = this.pageIndex * this.pageSize;
            var previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;

            this._emitPageEvent(previousPageIndex);
          }
          /** Checks whether the buttons for going forwards should be disabled. */

        }, {
          key: "_nextButtonsDisabled",
          value: function _nextButtonsDisabled() {
            return this.disabled || !this.hasNextPage();
          }
          /** Checks whether the buttons for going backwards should be disabled. */

        }, {
          key: "_previousButtonsDisabled",
          value: function _previousButtonsDisabled() {
            return this.disabled || !this.hasPreviousPage();
          }
          /**
           * Updates the list of page size options to display to the user. Includes making sure that
           * the page size is an option and that the list is sorted.
           */

        }, {
          key: "_updateDisplayedPageSizeOptions",
          value: function _updateDisplayedPageSizeOptions() {
            if (!this._initialized) {
              return;
            } // If no page size is provided, use the first page size option or the default page size.


            if (!this.pageSize) {
              this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
            }

            this._displayedPageSizeOptions = this.pageSizeOptions.slice();

            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
              this._displayedPageSizeOptions.push(this.pageSize);
            } // Sort the numbers using a number-specific sort function.


            this._displayedPageSizeOptions.sort(function (a, b) {
              return a - b;
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Emits an event notifying that a change of the paginator's properties has been triggered. */

        }, {
          key: "_emitPageEvent",
          value: function _emitPageEvent(previousPageIndex) {
            this.page.emit({
              previousPageIndex: previousPageIndex,
              pageIndex: this.pageIndex,
              pageSize: this.pageSize,
              length: this.length
            });
          }
        }, {
          key: "pageIndex",
          get: function get() {
            return this._pageIndex;
          },
          set: function set(value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._changeDetectorRef.markForCheck();
          }
          /** The length of the total number of items that are being paginated. Defaulted to 0. */

        }, {
          key: "length",
          get: function get() {
            return this._length;
          },
          set: function set(value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Number of items to display on a page. By default set to 50. */

        }, {
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          },
          set: function set(value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._updateDisplayedPageSizeOptions();
          }
          /** The set of provided page size options to display to the user. */

        }, {
          key: "pageSizeOptions",
          get: function get() {
            return this._pageSizeOptions;
          },
          set: function set(value) {
            this._pageSizeOptions = (value || []).map(function (p) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p);
            });

            this._updateDisplayedPageSizeOptions();
          }
          /** Whether to hide the page size selection UI from the user. */

        }, {
          key: "hidePageSize",
          get: function get() {
            return this._hidePageSize;
          },
          set: function set(value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether to show the first/last buttons UI to the user. */

        }, {
          key: "showFirstLastButtons",
          get: function get() {
            return this._showFirstLastButtons;
          },
          set: function set(value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatPaginator;
      }(_MatPaginatorBase);

      MatPaginator.ɵfac = function MatPaginator_Factory(t) {
        return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
      };

      MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: [1, "mat-paginator"],
        inputs: {
          disabled: "disabled",
          pageIndex: "pageIndex",
          length: "length",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: "hidePageSize",
          showFirstLastButtons: "showFirstLastButtons",
          color: "color"
        },
        outputs: {
          page: "page"
        },
        exportAs: ["matPaginator"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 14,
        consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
              return ctx.previousPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatPaginator.ctorParameters = function () {
        return [{
          type: MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatPaginator.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidePageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFirstLastButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-paginator',
            exportAs: 'matPaginator',
            template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled'],
            host: {
              'class': 'mat-paginator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
          }]
        }], function () {
          return [{
            type: MatPaginatorIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hidePageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showFirstLastButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatPaginatorModule = function MatPaginatorModule() {
        _classCallCheck(this, MatPaginatorModule);
      };

      MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatPaginatorModule
      });
      MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatPaginatorModule_Factory(t) {
          return new (t || MatPaginatorModule)();
        },
        providers: [MAT_PAGINATOR_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
          declarations: function declarations() {
            return [MatPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
          },
          exports: function exports() {
            return [MatPaginator];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]],
            exports: [MatPaginator],
            declarations: [MatPaginator],
            providers: [MAT_PAGINATOR_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=paginator.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
      \************************************************************************/

    /*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function () {
        return MAT_SELECT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
        return MAT_SELECT_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function () {
        return MAT_SELECT_TRIGGER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
        return MatSelect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
        return MatSelectChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
        return MatSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
        return MatSelectTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
        return SELECT_ITEM_HEIGHT_EM;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
        return SELECT_MULTIPLE_PANEL_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
        return SELECT_PANEL_INDENT_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
        return SELECT_PANEL_MAX_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
        return SELECT_PANEL_PADDING_X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
        return SELECT_PANEL_VIEWPORT_PADDING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
        return matSelectAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The following are all the animations for the mat-select component, with each
       * const containing the metadata for one animation.
       *
       * The values below match the implementation of the AngularJS Material mat-select animation.
       * @docs-private
       */


      var _c0 = ["trigger"];
      var _c1 = ["panel"];

      function MatSelect_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
        }
      }

      function MatSelect_span_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
        }
      }

      function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
        }
      }

      function MatSelect_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        }
      }

      function MatSelect_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8._panelDoneAnimatingStream.next($event.toState);
          })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel");
        }
      }

      var _c2 = [[["mat-select-trigger"]], "*"];
      var _c3 = ["mat-select-trigger", "*"];
      var matSelectAnimations = {
        /**
         * This animation ensures the select's overlay panel animation (transformPanel) is called when
         * closing the select.
         * This is needed due to https://github.com/angular/angular/issues/23302
         */
        transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], {
          optional: true
        }))]),

        /**
         * This animation transforms the select's overlay panel on and off the page.
         *
         * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
         * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
         * side to ensure the option text correctly overlaps the trigger text.
         *
         * When the panel is removed from the DOM, it simply fades out linearly.
         */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          transform: 'scaleY(0.8)',
          minWidth: '100%',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          minWidth: 'calc(100% + 32px)',
          transform: 'scaleY(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          minWidth: 'calc(100% + 64px)',
          transform: 'scaleY(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown when attempting to change a select's `multiple` option
       * after initialization.
       * @docs-private
       */

      function getMatSelectDynamicMultipleError() {
        return Error('Cannot change `multiple` mode of select after initialization.');
      }
      /**
       * Returns an exception to be thrown when attempting to assign a non-array value to a select
       * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
       * resetting the value.
       * @docs-private
       */


      function getMatSelectNonArrayValueError() {
        return Error('Value must be an array in multiple-selection mode.');
      }
      /**
       * Returns an exception to be thrown when assigning a non-function value to the comparator
       * used to determine if a value corresponds to an option. Note that whether the function
       * actually takes two values and returns a boolean is not checked.
       */


      function getMatSelectNonFunctionValueError() {
        return Error('`compareWith` must be a function.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId = 0;
      /**
       * The following style constants are necessary to save here in order
       * to properly calculate the alignment of the selected option over
       * the trigger element.
       */

      /** The max height of the select's overlay panel */

      var SELECT_PANEL_MAX_HEIGHT = 256;
      /** The panel's padding on the x-axis */

      var SELECT_PANEL_PADDING_X = 16;
      /** The panel's x axis padding if it is indented (e.g. there is an option group). */

      var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
      /** The height of the select items in `em` units. */

      var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

      /**
       * Distance between the panel edge and the option text in
       * multi-selection mode.
       *
       * Calculated as:
       * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
       * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
       * The checkbox width is 16px.
       */

      var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
      /**
       * The select panel will only "fit" inside the viewport if it is positioned at
       * this value or more away from the viewport boundary.
       */

      var SELECT_PANEL_VIEWPORT_PADDING = 8;
      /** Injection token that determines the scroll handling while a select is open. */

      var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
      /** @docs-private */

      function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** Injection token that can be used to provide the default options the select module. */


      var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
      /** @docs-private */

      var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_SELECT_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /** Change event object that is emitted when the select value has changed. */

      var MatSelectChange = function MatSelectChange(
      /** Reference to the select that emitted the change event. */
      source,
      /** Current value of the select that emitted the event. */
      value) {
        _classCallCheck(this, MatSelectChange);

        this.source = source;
        this.value = value;
      }; // Boilerplate for applying mixins to MatSelect.

      /** @docs-private */


      var MatSelectBase = function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        _classCallCheck(this, MatSelectBase);

        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
      /**
       * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
       * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSelectTrigger');
      /**
       * Allows the user to customize the trigger that is displayed when the select has a value.
       */

      var MatSelectTrigger = function MatSelectTrigger() {
        _classCallCheck(this, MatSelectTrigger);
      };

      MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
        return new (t || MatSelectTrigger)();
      };

      MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSelectTrigger,
        selectors: [["mat-select-trigger"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SELECT_TRIGGER,
          useExisting: MatSelectTrigger
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-select-trigger',
            providers: [{
              provide: MAT_SELECT_TRIGGER,
              useExisting: MatSelectTrigger
            }]
          }]
        }], null, null);
      })();

      var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
        _inherits(MatSelect, _MatSelectMixinBase2);

        var _super13 = _createSuper(MatSelect);

        function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
          var _this18;

          _classCallCheck(this, MatSelect);

          _this18 = _super13.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this18._viewportRuler = _viewportRuler;
          _this18._changeDetectorRef = _changeDetectorRef;
          _this18._ngZone = _ngZone;
          _this18._dir = _dir;
          _this18._parentFormField = _parentFormField;
          _this18.ngControl = ngControl;
          _this18._liveAnnouncer = _liveAnnouncer;
          /** Whether or not the overlay panel is open. */

          _this18._panelOpen = false;
          /** Whether filling out the select is required in the form. */

          _this18._required = false;
          /** The scroll position of the overlay panel, calculated to center the selected option. */

          _this18._scrollTop = 0;
          /** Whether the component is in multiple selection mode. */

          _this18._multiple = false;
          /** Comparison function to specify which option is displayed. Defaults to object equality. */

          _this18._compareWith = function (o1, o2) {
            return o1 === o2;
          };
          /** Unique id for this input. */


          _this18._uid = "mat-select-".concat(nextUniqueId++);
          /** Emits whenever the component is destroyed. */

          _this18._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /** The cached font-size of the trigger element. */

          _this18._triggerFontSize = 0;
          /** `View -> model callback called when value changes` */

          _this18._onChange = function () {};
          /** `View -> model callback called when select has been touched` */


          _this18._onTouched = function () {};
          /** The IDs of child options to be passed to the aria-owns attribute. */


          _this18._optionIds = '';
          /** The value of the select panel's transform-origin property. */

          _this18._transformOrigin = 'top';
          /** Emits when the panel element is finished transforming in. */

          _this18._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /**
           * The y-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text.
           * when the panel opens. Will change based on the y-position of the selected option.
           */

          _this18._offsetY = 0;
          /**
           * This position config ensures that the top "start" corner of the overlay
           * is aligned with with the top "start" of the origin by default (overlapping
           * the trigger completely). If the panel cannot fit below the trigger, it
           * will fall back to a position above the trigger.
           */

          _this18._positions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'bottom'
          }];
          /** Whether the component is disabling centering of the active option over the trigger. */

          _this18._disableOptionCentering = false;
          _this18._focused = false;
          /** A name for this control that can be used by `mat-form-field`. */

          _this18.controlType = 'mat-select';
          /** Aria label of the select. If not specified, the placeholder will be used as label. */

          _this18.ariaLabel = '';
          /** Combined stream of all of the child options' change events. */

          _this18.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(function () {
            var options = _this18.options;

            if (options) {
              return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(function (option) {
                  return option.onSelectionChange;
                })));
              }));
            }

            return _this18._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
              return _this18.optionSelectionChanges;
            }));
          });
          /** Event emitted when the select panel has been toggled. */

          _this18.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event emitted when the select has been opened. */

          _this18._openedStream = _this18.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the select has been closed. */

          _this18._closedStream = _this18.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {}));
          /** Event emitted when the selected value has been changed by the user. */

          _this18.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the select changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this18.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

          if (_this18.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this18.ngControl.valueAccessor = _assertThisInitialized(_this18);
          }

          _this18._scrollStrategyFactory = scrollStrategyFactory;
          _this18._scrollStrategy = _this18._scrollStrategyFactory();
          _this18.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

          _this18.id = _this18.id;

          if (defaults) {
            if (defaults.disableOptionCentering != null) {
              _this18.disableOptionCentering = defaults.disableOptionCentering;
            }

            if (defaults.typeaheadDebounceInterval != null) {
              _this18.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
            }
          }

          return _this18;
        }
        /** Whether the select is focused. */


        _createClass(MatSelect, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
            this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
            // fire the animation end event twice for the same animation. See:
            // https://github.com/angular/angular/issues/24084

            this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this19.panelOpen) {
                _this19._scrollTop = 0;

                _this19.openedChange.emit(true);
              } else {
                _this19.openedChange.emit(false);

                _this19.overlayDir.offsetX = 0;

                _this19._changeDetectorRef.markForCheck();
              }
            });

            this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this19._panelOpen) {
                _this19._triggerRect = _this19.trigger.nativeElement.getBoundingClientRect();

                _this19._changeDetectorRef.markForCheck();
              }
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this20 = this;

            this._initKeyManager();

            this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function (event) {
              event.added.forEach(function (option) {
                return option.select();
              });
              event.removed.forEach(function (option) {
                return option.deselect();
              });
            });

            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              _this20._resetOptions();

              _this20._initializeSelection();
            });
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              this.updateErrorState();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
            // the parent form field know to run change detection when the disabled state changes.
            if (changes['disabled']) {
              this.stateChanges.next();
            }

            if (changes['typeaheadDebounceInterval'] && this._keyManager) {
              this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy.next();

            this._destroy.complete();

            this.stateChanges.complete();
          }
          /** Toggles the overlay panel open or closed. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.panelOpen ? this.close() : this.open();
          }
          /** Opens the overlay panel. */

        }, {
          key: "open",
          value: function open() {
            var _this21 = this;

            if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
              return;
            }

            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.

            this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
            this._panelOpen = true;

            this._keyManager.withHorizontalOrientation(null);

            this._calculateOverlayPosition();

            this._highlightCorrectOption();

            this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
              if (_this21._triggerFontSize && _this21.overlayDir.overlayRef && _this21.overlayDir.overlayRef.overlayElement) {
                _this21.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this21._triggerFontSize, "px");
              }
            });
          }
          /** Closes the overlay panel and focuses the host element. */

        }, {
          key: "close",
          value: function close() {
            if (this._panelOpen) {
              this._panelOpen = false;

              this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

              this._changeDetectorRef.markForCheck();

              this._onTouched();
            }
          }
          /**
           * Sets the select's value. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param value New value to be written to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.options) {
              this._setSelectionByValue(value);
            }
          }
          /**
           * Saves a callback function to be invoked when the select's value
           * changes from user input. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the value changes.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /**
           * Saves a callback function to be invoked when the select is blurred
           * by the user. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the component has been touched.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * Disables the select. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param isDisabled Sets whether the component is disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /** Whether or not the overlay panel is open. */

        }, {
          key: "_isRtl",

          /** Whether the element is in RTL mode. */
          value: function _isRtl() {
            return this._dir ? this._dir.value === 'rtl' : false;
          }
          /** Handles all keydown events on the select. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this.disabled) {
              this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
            }
          }
          /** Handles keyboard events while the select is closed. */

        }, {
          key: "_handleClosedKeydown",
          value: function _handleClosedKeydown(event) {
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
            var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
            var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

            if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
              event.preventDefault(); // prevents the page from scrolling down when pressing space

              this.open();
            } else if (!this.multiple) {
              var previouslySelectedOption = this.selected;

              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              } else {
                manager.onKeydown(event);
              }

              var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

              if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
              }
            }
          }
          /** Handles keyboard events when the selected is open. */

        }, {
          key: "_handleOpenKeydown",
          value: function _handleOpenKeydown(event) {
            var manager = this._keyManager;
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            var isTyping = manager.isTyping();

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
              event.preventDefault();
              keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
            } else if (isArrowKey && event.altKey) {
              // Close the select on ALT + arrow key to match the native <select>
              event.preventDefault();
              this.close(); // Don't do anything in this case if the user is typing,
              // because the typing sequence can include the space key.
            } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              event.preventDefault();

              manager.activeItem._selectViaInteraction();
            } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
              event.preventDefault();
              var hasDeselectedOptions = this.options.some(function (opt) {
                return !opt.disabled && !opt.selected;
              });
              this.options.forEach(function (option) {
                if (!option.disabled) {
                  hasDeselectedOptions ? option.select() : option.deselect();
                }
              });
            } else {
              var previouslyFocusedIndex = manager.activeItemIndex;
              manager.onKeydown(event);

              if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
              }
            }
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            if (!this.disabled) {
              this._focused = true;
              this.stateChanges.next();
            }
          }
          /**
           * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
           * "blur" to the panel when it opens, causing a false positive.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this._focused = false;

            if (!this.disabled && !this.panelOpen) {
              this._onTouched();

              this._changeDetectorRef.markForCheck();

              this.stateChanges.next();
            }
          }
          /**
           * Callback that is invoked when the overlay panel has been attached.
           */

        }, {
          key: "_onAttached",
          value: function _onAttached() {
            var _this22 = this;

            this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
              _this22._changeDetectorRef.detectChanges();

              _this22._calculateOverlayOffsetX();

              _this22.panel.nativeElement.scrollTop = _this22._scrollTop;
            });
          }
          /** Returns the theme to be used on the panel. */

        }, {
          key: "_getPanelTheme",
          value: function _getPanelTheme() {
            return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
          }
          /** Whether the select has a value. */

        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this23 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              _this23._setSelectionByValue(_this23.ngControl ? _this23.ngControl.value : _this23._value);

              _this23.stateChanges.next();
            });
          }
          /**
           * Sets the selected option based on a value. If no option can be
           * found with the designated value, the select trigger is cleared.
           */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this24 = this;

            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
              }

              this._selectionModel.clear();

              value.forEach(function (currentValue) {
                return _this24._selectValue(currentValue);
              });

              this._sortValues();
            } else {
              this._selectionModel.clear();

              var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what option the user interacted with last.


              if (correspondingOption) {
                this._keyManager.updateActiveItem(correspondingOption);
              } else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.updateActiveItem(-1);
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Finds and selects and option based on its value.
           * @returns Option that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this25 = this;

            var correspondingOption = this.options.find(function (option) {
              try {
                // Treat null as a special reset value.
                return option.value != null && _this25._compareWith(option.value, value);
              } catch (error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
                  // Notify developers of errors in their comparator.
                  console.warn(error);
                }

                return false;
              }
            });

            if (correspondingOption) {
              this._selectionModel.select(correspondingOption);
            }

            return correspondingOption;
          }
          /** Sets up a key manager to listen to keyboard events on the overlay panel. */

        }, {
          key: "_initKeyManager",
          value: function _initKeyManager() {
            var _this26 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this26.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!_this26.multiple && _this26._keyManager.activeItem) {
                  _this26._keyManager.activeItem._selectViaInteraction();
                } // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.


                _this26.focus();

                _this26.close();
              }
            });

            this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(function () {
              if (_this26._panelOpen && _this26.panel) {
                _this26._scrollActiveOptionIntoView();
              } else if (!_this26._panelOpen && !_this26.multiple && _this26._keyManager.activeItem) {
                _this26._keyManager.activeItem._selectViaInteraction();
              }
            });
          }
          /** Drops current option subscriptions and IDs and resets from scratch. */

        }, {
          key: "_resetOptions",
          value: function _resetOptions() {
            var _this27 = this;

            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
            this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
              _this27._onSelect(event.source, event.isUserInput);

              if (event.isUserInput && !_this27.multiple && _this27._panelOpen) {
                _this27.close();

                _this27.focus();
              }
            }); // Listen to changes in the internal state of the options and react accordingly.
            // Handles cases like the labels of the selected options changing.

            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(function (option) {
              return option._stateChanges;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
              _this27._changeDetectorRef.markForCheck();

              _this27.stateChanges.next();
            });

            this._setOptionIds();
          }
          /** Invoked when an option is clicked. */

        }, {
          key: "_onSelect",
          value: function _onSelect(option, isUserInput) {
            var wasSelected = this._selectionModel.isSelected(option);

            if (option.value == null && !this._multiple) {
              option.deselect();

              this._selectionModel.clear();

              this._propagateChanges(option.value);
            } else {
              if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
              }

              if (isUserInput) {
                this._keyManager.setActiveItem(option);
              }

              if (this.multiple) {
                this._sortValues();

                if (isUserInput) {
                  // In case the user selected the option with their mouse, we
                  // want to restore focus back to the trigger, in order to
                  // prevent the select keyboard controls from clashing with
                  // the ones from `mat-option`.
                  this.focus();
                }
              }
            }

            if (wasSelected !== this._selectionModel.isSelected(option)) {
              this._propagateChanges();
            }

            this.stateChanges.next();
          }
          /** Sorts the selected values in the selected based on their order in the panel. */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this28 = this;

            if (this.multiple) {
              var options = this.options.toArray();

              this._selectionModel.sort(function (a, b) {
                return _this28.sortComparator ? _this28.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
              });

              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (this.multiple) {
              valueToEmit = this.selected.map(function (option) {
                return option.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

            this._changeDetectorRef.markForCheck();
          }
          /** Records option IDs to pass to the aria-owns property. */

        }, {
          key: "_setOptionIds",
          value: function _setOptionIds() {
            this._optionIds = this.options.map(function (option) {
              return option.id;
            }).join(' ');
          }
          /**
           * Highlights the selected item. If no option is selected, it will highlight
           * the first item instead.
           */

        }, {
          key: "_highlightCorrectOption",
          value: function _highlightCorrectOption() {
            if (this._keyManager) {
              if (this.empty) {
                this._keyManager.setFirstItemActive();
              } else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
              }
            }
          }
          /** Scrolls the active option into view. */

        }, {
          key: "_scrollActiveOptionIntoView",
          value: function _scrollActiveOptionIntoView() {
            var activeOptionIndex = this._keyManager.activeItemIndex || 0;
            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
            this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
          }
          /** Focuses the select element. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Gets the index of the provided option in the option list. */

        }, {
          key: "_getOptionIndex",
          value: function _getOptionIndex(option) {
            return this.options.reduce(function (result, current, index) {
              if (result !== undefined) {
                return result;
              }

              return option === current ? index : undefined;
            }, undefined);
          }
          /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

        }, {
          key: "_calculateOverlayPosition",
          value: function _calculateOverlayPosition() {
            var itemHeight = this._getItemHeight();

            var items = this._getItemCount();

            var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

            var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

            var selectedOptionOffset = this.empty ? 0 : this._getOptionIndex(this._selectionModel.selected[0]);
            selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.

            var scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

            this._checkOverlayWithinViewport(maxScroll);
          }
          /**
           * Calculates the scroll position of the select's overlay panel.
           *
           * Attempts to center the selected option in the panel. If the option is
           * too high or too low in the panel to be scrolled to the center, it clamps the
           * scroll position to the min or max scroll positions respectively.
           */

        }, {
          key: "_calculateOverlayScroll",
          value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionOffsetFromScrollTop = itemHeight * selectedIndex;
            var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
            // scroll container, then subtracts the scroll buffer to scroll the option down to
            // the center of the overlay panel. Half the option height must be re-added to the
            // scrollTop so the option is centered based on its middle, not its top edge.

            var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
            return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
          }
          /** Returns the aria-label of the select component. */

        }, {
          key: "_getAriaLabel",
          value: function _getAriaLabel() {
            // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
            // `aria-labelledby` value by setting the ariaLabel to the placeholder.
            return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
          }
          /** Returns the aria-labelledby of the select component. */

        }, {
          key: "_getAriaLabelledby",
          value: function _getAriaLabelledby() {
            if (this.ariaLabelledby) {
              return this.ariaLabelledby;
            } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
            // computed label. `this.ariaLabel` is only the user-specified label.


            if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
              return null;
            }

            return this._parentFormField._labelId || null;
          }
          /** Determines the `aria-activedescendant` to be set on the host. */

        }, {
          key: "_getAriaActiveDescendant",
          value: function _getAriaActiveDescendant() {
            if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
              return this._keyManager.activeItem.id;
            }

            return null;
          }
          /**
           * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text when
           * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
           * can't be calculated until the panel has been attached, because we need to know the
           * content width in order to constrain the panel within the viewport.
           */

        }, {
          key: "_calculateOverlayOffsetX",
          value: function _calculateOverlayOffsetX() {
            var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

            var viewportSize = this._viewportRuler.getViewportSize();

            var isRtl = this._isRtl();

            var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
            var offsetX; // Adjust the offset, depending on the option padding.

            if (this.multiple) {
              offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
            } else {
              var selected = this._selectionModel.selected[0] || this.options.first;
              offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
            } // Invert the offset in LTR.


            if (!isRtl) {
              offsetX *= -1;
            } // Determine how much the select overflows on each side.


            var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
            var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

            if (leftOverflow > 0) {
              offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } else if (rightOverflow > 0) {
              offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
            } // Set the offset directly in order to avoid having to go through change detection and
            // potentially triggering "changed after it was checked" errors. Round the value to avoid
            // blurry content in some browsers.


            this.overlayDir.offsetX = Math.round(offsetX);
            this.overlayDir.overlayRef.updatePosition();
          }
          /**
           * Calculates the y-offset of the select's overlay panel in relation to the
           * top start corner of the trigger. It has to be adjusted in order for the
           * selected option to be aligned over the trigger when the panel opens.
           */

        }, {
          key: "_calculateOverlayOffsetY",
          value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
            var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

            if (this._disableOptionCentering) {
              return 0;
            }

            if (this._scrollTop === 0) {
              optionOffsetFromPanelTop = selectedIndex * itemHeight;
            } else if (this._scrollTop === maxScroll) {
              var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
              var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
              // portion of it is shown in the viewport and account for it in our offset.

              var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
              // there is always extra padding at the top or bottom of the panel. When
              // scrolled to the very bottom, this padding is at the top of the panel and
              // must be added to the offset.

              optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
            } else {
              // If the option was scrolled to the middle of the panel using a scroll buffer,
              // its offset will be the scroll buffer minus the half height that was added to
              // center it.
              optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
            } // The final offset is the option's offset from the top, adjusted for the height difference,
            // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
            // The value is rounded to prevent some browsers from blurring the content.


            return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
          }
          /**
           * Checks that the attempted overlay position will fit within the viewport.
           * If it will not fit, tries to adjust the scroll position and the associated
           * y-offset so the panel can open fully on-screen. If it still won't fit,
           * sets the offset back to 0 to allow the fallback position to take over.
           */

        }, {
          key: "_checkOverlayWithinViewport",
          value: function _checkOverlayWithinViewport(maxScroll) {
            var itemHeight = this._getItemHeight();

            var viewportSize = this._viewportRuler.getViewportSize();

            var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
            var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
            var panelHeightTop = Math.abs(this._offsetY);
            var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
            var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

            if (panelHeightBottom > bottomSpaceAvailable) {
              this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
            } else if (panelHeightTop > topSpaceAvailable) {
              this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
            } else {
              this._transformOrigin = this._getOriginBasedOnOption();
            }
          }
          /** Adjusts the overlay panel up to fit in the viewport. */

        }, {
          key: "_adjustPanelUp",
          value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel up into the viewport.

            this._scrollTop -= distanceBelowViewport;
            this._offsetY -= distanceBelowViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
            // by scrolling, so set the offset to 0 to allow the fallback position to take
            // effect.

            if (this._scrollTop <= 0) {
              this._scrollTop = 0;
              this._offsetY = 0;
              this._transformOrigin = "50% bottom 0px";
            }
          }
          /** Adjusts the overlay panel down to fit in the viewport. */

        }, {
          key: "_adjustPanelDown",
          value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
            // Browsers ignore fractional scroll offsets, so we need to round.
            var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
            // adjusts the offset by that amount to move the panel down into the viewport.

            this._scrollTop += distanceAboveViewport;
            this._offsetY += distanceAboveViewport;
            this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
            // panel by scrolling, so set the offset to 0 to allow the fallback position
            // to take effect.

            if (this._scrollTop >= maxScroll) {
              this._scrollTop = maxScroll;
              this._offsetY = 0;
              this._transformOrigin = "50% top 0px";
              return;
            }
          }
          /** Sets the transform origin point based on the selected option. */

        }, {
          key: "_getOriginBasedOnOption",
          value: function _getOriginBasedOnOption() {
            var itemHeight = this._getItemHeight();

            var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
            var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
            return "50% ".concat(originY, "px 0px");
          }
          /** Calculates the amount of items in the select. This includes options and group labels. */

        }, {
          key: "_getItemCount",
          value: function _getItemCount() {
            return this.options.length + this.optionGroups.length;
          }
          /** Calculates the height of the select's options. */

        }, {
          key: "_getItemHeight",
          value: function _getItemHeight() {
            return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
            this.open();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "focused",
          get: function get() {
            return this._focused || this._panelOpen;
          }
          /** Placeholder to be shown if no value has been selected. */

        }, {
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether the component is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /** Whether the user should be allowed to select multiple options. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            if (this._selectionModel) {
              throw getMatSelectDynamicMultipleError();
            }

            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /** Whether to center the active option over the trigger. */

        }, {
          key: "disableOptionCentering",
          get: function get() {
            return this._disableOptionCentering;
          },
          set: function set(value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          }
          /**
           * Function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            if (typeof fn !== 'function') {
              throw getMatSelectNonFunctionValueError();
            }

            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /** Value of the select control. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (newValue !== this._value) {
              this.writeValue(newValue);
              this._value = newValue;
            }
          }
          /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

        }, {
          key: "typeaheadDebounceInterval",
          get: function get() {
            return this._typeaheadDebounceInterval;
          },
          set: function set(value) {
            this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
          }
          /** Unique id of the element. */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
            this.stateChanges.next();
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._panelOpen;
          }
          /** The currently selected option. */

        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The value displayed in the trigger. */

        }, {
          key: "triggerValue",
          get: function get() {
            if (this.empty) {
              return '';
            }

            if (this._multiple) {
              var selectedOptions = this._selectionModel.selected.map(function (option) {
                return option.viewValue;
              });

              if (this._isRtl()) {
                selectedOptions.reverse();
              } // TODO(crisbeto): delimiter should be configurable for proper localization.


              return selectedOptions.join(', ');
            }

            return this._selectionModel.selected[0].viewValue;
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._selectionModel || this._selectionModel.isEmpty();
          }
        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this._panelOpen || !this.empty;
          }
        }]);

        return MatSelect;
      }(_MatSelectMixinBase);

      MatSelect.ɵfac = function MatSelect_Factory(t) {
        return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
      };

      MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatSelect,
        selectors: [["mat-select"]],
        contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
          }
        },
        viewQuery: function MatSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
          }
        },
        hostAttrs: ["role", "listbox", 1, "mat-select"],
        hostVars: 19,
        hostBindings: function MatSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatSelect_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSelect_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-label", ctx._getAriaLabel())("aria-labelledby", ctx._getAriaLabelledby())("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-owns", ctx.panelOpen ? ctx._optionIds : null)("aria-multiselectable", ctx.multiple)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          ariaLabel: ["aria-label", "ariaLabel"],
          id: "id",
          disableOptionCentering: "disableOptionCentering",
          typeaheadDebounceInterval: "typeaheadDebounceInterval",
          placeholder: "placeholder",
          required: "required",
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          panelClass: "panelClass",
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          errorStateMatcher: "errorStateMatcher",
          sortComparator: "sortComparator"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          _closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange"
        },
        exportAs: ["matSelect"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatSelect
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 9,
        vars: 9,
        consts: [["cdk-overlay-origin", "", "aria-hidden", "true", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], [3, "ngClass", "keydown"], ["panel", ""]],
        template: function MatSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 11, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
              return ctx.close();
            })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
              return ctx._onAttached();
            })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
              return ctx.close();
            });
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
          }
        },
        directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
        encapsulation: 2,
        data: {
          animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
        },
        changeDetection: 0
      });

      MatSelect.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_CONFIG]
          }]
        }];
      };

      MatSelect.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
            descendants: true
          }]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MAT_SELECT_TRIGGER]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disableOptionCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        typeaheadDebounceInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-select',
            exportAs: 'matSelect',
            template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     aria-hidden=\"true\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      [attr.id]=\"id + '-panel'\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
              'role': 'listbox',
              '[attr.id]': 'id',
              '[attr.tabindex]': 'tabIndex',
              '[attr.aria-label]': '_getAriaLabel()',
              '[attr.aria-labelledby]': '_getAriaLabelledby()',
              '[attr.aria-required]': 'required.toString()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
              '[class.mat-select-disabled]': 'disabled',
              '[class.mat-select-invalid]': 'errorState',
              '[class.mat-select-required]': 'required',
              '[class.mat-select-empty]': 'empty',
              'class': 'mat-select',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()'
            },
            animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
              useExisting: MatSelect
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatSelect
            }],
            styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_SELECT_CONFIG]
            }]
          }];
        }, {
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
          }],
          _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger']
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }],
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
              descendants: true
            }]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MAT_SELECT_TRIGGER]
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSelectModule = function MatSelectModule() {
        _classCallCheck(this, MatSelectModule);
      };

      MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatSelectModule
      });
      MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatSelectModule_Factory(t) {
          return new (t || MatSelectModule)();
        },
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, {
          declarations: function declarations() {
            return [MatSelect, MatSelectTrigger];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatSelect, MatSelectTrigger],
            providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=select.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
      \***********************************************************************/

    /*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCell", function () {
        return MatCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
        return MatCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
        return MatColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
        return MatFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
        return MatFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
        return MatFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
        return MatFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
        return MatHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
        return MatHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
        return MatHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
        return MatHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function () {
        return MatNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRow", function () {
        return MatRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
        return MatRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTable", function () {
        return MatTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
        return MatTableDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
        return MatTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
        return MatTextColumn;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/table */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function MatTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function MatTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      var MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(MatTable, _angular_cdk_table__W);

        var _super14 = _createSuper(MatTable);

        function MatTable() {
          var _this29;

          _classCallCheck(this, MatTable);

          _this29 = _super14.apply(this, arguments);
          /** Overrides the sticky CSS class set by the `CdkTable`. */

          _this29.stickyCssClass = 'mat-table-sticky';
          return _this29;
        }

        return MatTable;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

      MatTable.ɵfac = function MatTable_Factory(t) {
        return ɵMatTable_BaseFactory(t || MatTable);
      };

      MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-table"],
        exportAs: ["matTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
          useExisting: MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
          useExisting: MatTable
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]],
        styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"],
        encapsulation: 2
      });

      var ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-table, table[mat-table]',
            exportAs: 'matTable',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
            host: {
              'class': 'mat-table'
            },
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
              useExisting: MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
              useExisting: MatTable
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for the mat-table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(MatCellDef, _angular_cdk_table__W2);

        var _super15 = _createSuper(MatCellDef);

        function MatCellDef() {
          _classCallCheck(this, MatCellDef);

          return _super15.apply(this, arguments);
        }

        return MatCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

      MatCellDef.ɵfac = function MatCellDef_Factory(t) {
        return ɵMatCellDef_BaseFactory(t || MatCellDef);
      };

      MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCellDef,
        selectors: [["", "matCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
          useExisting: MatCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
              useExisting: MatCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Header cell definition for the mat-table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
        _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

        var _super16 = _createSuper(MatHeaderCellDef);

        function MatHeaderCellDef() {
          _classCallCheck(this, MatHeaderCellDef);

          return _super16.apply(this, arguments);
        }

        return MatHeaderCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

      MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
        return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
      };

      MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
          useExisting: MatHeaderCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matHeaderCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
              useExisting: MatHeaderCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Footer cell definition for the mat-table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
        _inherits(MatFooterCellDef, _angular_cdk_table__W4);

        var _super17 = _createSuper(MatFooterCellDef);

        function MatFooterCellDef() {
          _classCallCheck(this, MatFooterCellDef);

          return _super17.apply(this, arguments);
        }

        return MatFooterCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

      MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
        return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
      };

      MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
          useExisting: MatFooterCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matFooterCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
              useExisting: MatFooterCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Column definition for the mat-table.
       * Defines a set of cells available for a table column.
       */


      var MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
        _inherits(MatColumnDef, _angular_cdk_table__W5);

        var _super18 = _createSuper(MatColumnDef);

        function MatColumnDef() {
          _classCallCheck(this, MatColumnDef);

          return _super18.apply(this, arguments);
        }

        return MatColumnDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

      MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
        return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
      };

      MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
          sticky: "sticky",
          name: ["matColumnDef", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
          useExisting: MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: MatColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      MatColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matColumnDef']
        }]
      };

      var ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
              useExisting: MatColumnDef
            }, {
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: MatColumnDef
            }]
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
          }]
        });
      })();
      /** Header cell template container that adds the right classes and role. */


      var MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
        _inherits(MatHeaderCell, _angular_cdk_table__W6);

        var _super19 = _createSuper(MatHeaderCell);

        function MatHeaderCell(columnDef, elementRef) {
          var _this30;

          _classCallCheck(this, MatHeaderCell);

          _this30 = _super19.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this30;
        }

        return MatHeaderCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

      MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
        return new (t || MatHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatHeaderCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-header-cell, th[mat-header-cell]',
            host: {
              'class': 'mat-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
        _inherits(MatFooterCell, _angular_cdk_table__W7);

        var _super20 = _createSuper(MatFooterCell);

        function MatFooterCell(columnDef, elementRef) {
          var _this31;

          _classCallCheck(this, MatFooterCell);

          _this31 = _super20.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this31;
        }

        return MatFooterCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

      MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
        return new (t || MatFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatFooterCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-footer-cell, td[mat-footer-cell]',
            host: {
              'class': 'mat-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
        _inherits(MatCell, _angular_cdk_table__W8);

        var _super21 = _createSuper(MatCell);

        function MatCell(columnDef, elementRef) {
          var _this32;

          _classCallCheck(this, MatCell);

          _this32 = _super21.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this32;
        }

        return MatCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

      MatCell.ɵfac = function MatCell_Factory(t) {
        return new (t || MatCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-cell, td[mat-cell]',
            host: {
              'class': 'mat-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header row definition for the mat-table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
        _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

        var _super22 = _createSuper(MatHeaderRowDef);

        function MatHeaderRowDef() {
          _classCallCheck(this, MatHeaderRowDef);

          return _super22.apply(this, arguments);
        }

        return MatHeaderRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

      MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
        return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
      };

      MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
          columns: ["matHeaderRowDef", "columns"],
          sticky: ["matHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
          useExisting: MatHeaderRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matHeaderRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
              useExisting: MatHeaderRowDef
            }],
            inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Footer row definition for the mat-table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
        _inherits(MatFooterRowDef, _angular_cdk_table__W10);

        var _super23 = _createSuper(MatFooterRowDef);

        function MatFooterRowDef() {
          _classCallCheck(this, MatFooterRowDef);

          return _super23.apply(this, arguments);
        }

        return MatFooterRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

      MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
        return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
      };

      MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
          columns: ["matFooterRowDef", "columns"],
          sticky: ["matFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
          useExisting: MatFooterRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matFooterRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
              useExisting: MatFooterRowDef
            }],
            inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Data row definition for the mat-table.
       * Captures the data row's template and other properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
        _inherits(MatRowDef, _angular_cdk_table__W11);

        var _super24 = _createSuper(MatRowDef);

        function MatRowDef() {
          _classCallCheck(this, MatRowDef);

          return _super24.apply(this, arguments);
        }

        return MatRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

      MatRowDef.ɵfac = function MatRowDef_Factory(t) {
        return ɵMatRowDef_BaseFactory(t || MatRowDef);
      };

      MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: ["matRowDefColumns", "columns"],
          when: ["matRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
          useExisting: MatRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
              useExisting: MatRowDef
            }],
            inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
          }]
        }], null, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
        _inherits(MatHeaderRow, _angular_cdk_table__W12);

        var _super25 = _createSuper(MatHeaderRow);

        function MatHeaderRow() {
          _classCallCheck(this, MatHeaderRow);

          return _super25.apply(this, arguments);
        }

        return MatHeaderRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

      MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
        return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
      };

      MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-header-row"],
        exportAs: ["matHeaderRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
          useExisting: MatHeaderRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-header-row, tr[mat-header-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matHeaderRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
              useExisting: MatHeaderRow
            }]
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
        _inherits(MatFooterRow, _angular_cdk_table__W13);

        var _super26 = _createSuper(MatFooterRow);

        function MatFooterRow() {
          _classCallCheck(this, MatFooterRow);

          return _super26.apply(this, arguments);
        }

        return MatFooterRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

      MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
        return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
      };

      MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-footer-row"],
        exportAs: ["matFooterRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
          useExisting: MatFooterRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-footer-row, tr[mat-footer-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matFooterRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
              useExisting: MatFooterRow
            }]
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
        _inherits(MatRow, _angular_cdk_table__W14);

        var _super27 = _createSuper(MatRow);

        function MatRow() {
          _classCallCheck(this, MatRow);

          return _super27.apply(this, arguments);
        }

        return MatRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

      MatRow.ɵfac = function MatRow_Factory(t) {
        return ɵMatRow_BaseFactory(t || MatRow);
      };

      MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-row"],
        exportAs: ["matRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
          useExisting: MatRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-row, tr[mat-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
              useExisting: MatRow
            }]
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var MatNoDataRow = /*#__PURE__*/function (_angular_cdk_table__W15) {
        _inherits(MatNoDataRow, _angular_cdk_table__W15);

        var _super28 = _createSuper(MatNoDataRow);

        function MatNoDataRow() {
          _classCallCheck(this, MatNoDataRow);

          return _super28.apply(this, arguments);
        }

        return MatNoDataRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"]);

      MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) {
        return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow);
      };

      MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"],
          useExisting: MatNoDataRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[matNoDataRow]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"],
              useExisting: MatNoDataRow
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W16) {
        _inherits(MatTextColumn, _angular_cdk_table__W16);

        var _super29 = _createSuper(MatTextColumn);

        function MatTextColumn() {
          _classCallCheck(this, MatTextColumn);

          return _super29.apply(this, arguments);
        }

        return MatTextColumn;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"]);

      MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
        return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
      };

      MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTextColumn,
        selectors: [["mat-text-column"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
        encapsulation: 2
      });

      var ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-text-column',
            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [// Table
      MatTable, // Template defs
      MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
      MatHeaderCell, MatCell, MatFooterCell, // Row directives
      MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

      var MatTableModule = function MatTableModule() {
        _classCallCheck(this, MatTableModule);
      };

      MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTableModule
      });
      MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatTableModule_Factory(t) {
          return new (t || MatTableModule)();
        },
        imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, {
          declarations: function declarations() {
            return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          },
          imports: function imports() {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], EXPORTED_DECLARATIONS],
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
       * flaky browser support and the value not being defined in Closure's typings.
       */


      var MAX_SAFE_INTEGER = 9007199254740991;
      /**
       * Data source that accepts a client-side data array and includes native support of filtering,
       * sorting (using MatSort), and pagination (using MatPaginator).
       *
       * Allows for sort customization by overriding sortingDataAccessor, which defines how data
       * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
       * which defines how row data is converted to a string for filter matching.
       *
       * **Note:** This class is meant to be a simple data source to help you get started. As such
       * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
       * interactions. If your app needs to support more advanced use cases, consider implementing your
       * own `DataSource`.
       */

      var MatTableDataSource = /*#__PURE__*/function (_angular_cdk_table__W17) {
        _inherits(MatTableDataSource, _angular_cdk_table__W17);

        var _super30 = _createSuper(MatTableDataSource);

        function MatTableDataSource() {
          var _this33;

          var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, MatTableDataSource);

          _this33 = _super30.call(this);
          /** Stream emitting render data to the table (depends on ordered data changes). */

          _this33._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          /** Stream that emits when a new filter string is set on the data source. */

          _this33._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          /** Used to react to internal changes of the paginator that are made by the data source itself. */

          _this33._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Subscription to the changes that should trigger an update to the table's rendered rows, such
           * as filtering, sorting, pagination, or base data changes.
           */

          _this33._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Data accessor function that is used for accessing data properties for sorting through
           * the default sortData function.
           * This default function assumes that the sort header IDs (which defaults to the column name)
           * matches the data's properties (e.g. column Xyz represents data['Xyz']).
           * May be set to a custom function for different behavior.
           * @param data Data object that is being accessed.
           * @param sortHeaderId The name of the column that represents the data.
           */

          _this33.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];

            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
              var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
              // leave them as strings. For more info: https://goo.gl/y5vbSg

              return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }

            return value;
          };
          /**
           * Gets a sorted copy of the data array based on the state of the MatSort. Called
           * after changes are made to the filtered data or when sort changes are emitted from MatSort.
           * By default, the function retrieves the active sort and its direction and compares data
           * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
           * of data ordering.
           * @param data The array of data that should be sorted.
           * @param sort The connected MatSort that holds the current sort state.
           */


          _this33.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;

            if (!active || direction == '') {
              return data;
            }

            return data.sort(function (a, b) {
              var valueA = _this33.sortingDataAccessor(a, active);

              var valueB = _this33.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
              // one value exists while the other doesn't. In this case, existing value should come last.
              // This avoids inconsistent results when comparing values to undefined/null.
              // If neither value exists, return 0 (equal).


              var comparatorResult = 0;

              if (valueA != null && valueB != null) {
                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                if (valueA > valueB) {
                  comparatorResult = 1;
                } else if (valueA < valueB) {
                  comparatorResult = -1;
                }
              } else if (valueA != null) {
                comparatorResult = 1;
              } else if (valueB != null) {
                comparatorResult = -1;
              }

              return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
          };
          /**
           * Checks if a data object matches the data source's filter string. By default, each data object
           * is converted to a string of its properties and returns true if the filter has
           * at least one occurrence in that string. By default, the filter string has its whitespace
           * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
           * filter matching.
           * @param data Data object used to check against the filter.
           * @param filter Filter string that has been set on the data source.
           * @returns Whether the filter matches against the data
           */


          _this33.filterPredicate = function (data, filter) {
            // Transform the data into a lowercase string of all property values.
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
              // Use an obscure Unicode character to delimit the words in the concatenated string.
              // This avoids matches where the values of two columns combined will match the user's query
              // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
              // that has a very low chance of being typed in by somebody in a text field. This one in
              // particular is "White up-pointing triangle with dot" from
              // https://en.wikipedia.org/wiki/List_of_Unicode_characters
              return currentTerm + data[key] + '◬';
            }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
          };

          _this33._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);

          _this33._updateChangeSubscription();

          return _this33;
        }
        /** Array of data that should be rendered by the table, where each object represents one row. */


        _createClass(MatTableDataSource, [{
          key: "_updateChangeSubscription",

          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */
          value: function _updateChangeSubscription() {
            var _this34 = this;

            // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.
            var sortChange = this._sort ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var pageChange = this._paginator ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

            var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  data = _ref2[0];

              return _this34._filterData(data);
            })); // Watch for filtered data or sort changes to provide an ordered set of data.

            var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1),
                  data = _ref4[0];

              return _this34._orderData(data);
            })); // Watch for ordered data or page changes to provide a paged set of data.

            var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                  data = _ref6[0];

              return _this34._pageData(data);
            })); // Watched for paged data changes and send the result to the table to render.

            this._renderChangesSubscription.unsubscribe();

            this._renderChangesSubscription = paginatedData.subscribe(function (data) {
              return _this34._renderData.next(data);
            });
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */

        }, {
          key: "_filterData",
          value: function _filterData(data) {
            var _this35 = this;

            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData = !this.filter ? data : data.filter(function (obj) {
              return _this35.filterPredicate(obj, _this35.filter);
            });

            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }

            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */

        }, {
          key: "_orderData",
          value: function _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }

            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided MatPaginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */

        }, {
          key: "_pageData",
          value: function _pageData(data) {
            if (!this.paginator) {
              return data;
            }

            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */

        }, {
          key: "_updatePaginator",
          value: function _updatePaginator(filteredDataLength) {
            var _this36 = this;

            Promise.resolve().then(function () {
              var paginator = _this36.paginator;

              if (!paginator) {
                return;
              }

              paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

              if (paginator.pageIndex > 0) {
                var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.

                  _this36._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */

        }, {
          key: "connect",
          value: function connect() {
            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it is destroyed. No-op.
           * @docs-private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {}
        }, {
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(data) {
            this._data.next(data);
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */

        }, {
          key: "filter",
          get: function get() {
            return this._filter.value;
          },
          set: function set(filter) {
            this._filter.next(filter);
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */

        }, {
          key: "sort",
          get: function get() {
            return this._sort;
          },
          set: function set(sort) {
            this._sort = sort;

            this._updateChangeSubscription();
          }
          /**
           * Instance of the MatPaginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the MatPaginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */

        }, {
          key: "paginator",
          get: function get() {
            return this._paginator;
          },
          set: function set(paginator) {
            this._paginator = paginator;

            this._updateChangeSubscription();
          }
        }]);

        return MatTableDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
        return MAT_TOOLTIP_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
        return MatTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
        return MatTooltipModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
        return SCROLL_THROTTLE_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
        return TOOLTIP_PANEL_CLASS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
        return TooltipComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
        return getMatTooltipInvalidPositionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
        return matTooltipAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatTooltip.
       * @docs-private
       */


      var matTooltipAnimations = {
        /** Animation that transitions a tooltip in and out. */
        tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(0)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0.5,
          transform: 'scale(0.99)',
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))])
      };
      /** Time in ms to throttle repositioning after scroll events. */

      var SCROLL_THROTTLE_MS = 20;
      /** CSS class that will be attached to the overlay panel. */

      var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
      /** Options used to bind passive event listeners. */

      var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * Time between the user putting the pointer on a tooltip
       * trigger and the long press event being fired.
       */

      var LONGPRESS_DELAY = 500;
      /**
       * Creates an error to be thrown if the user supplied an invalid tooltip position.
       * @docs-private
       */

      function getMatTooltipInvalidPositionError(position) {
        return Error("Tooltip position \"".concat(position, "\" is invalid."));
      }
      /** Injection token that determines the scroll handling while a tooltip is visible. */


      var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
      /** @docs-private */

      function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        };
      }
      /** @docs-private */


      var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_TOOLTIP_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
      };
      /** Injection token to be used to override the default options for `matTooltip`. */

      var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
        providedIn: 'root',
        factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
        return {
          showDelay: 0,
          hideDelay: 0,
          touchendHideDelay: 1500
        };
      }
      /**
       * Directive that attaches a material design tooltip to the host element. Animates the showing and
       * hiding of a tooltip provided position (defaults to below the element).
       *
       * https://material.io/design/components/tooltips.html
       */


      var MatTooltip = /*#__PURE__*/function () {
        function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions) {
          var _this37 = this;

          _classCallCheck(this, MatTooltip);

          this._overlay = _overlay;
          this._elementRef = _elementRef;
          this._scrollDispatcher = _scrollDispatcher;
          this._viewContainerRef = _viewContainerRef;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._ariaDescriber = _ariaDescriber;
          this._focusMonitor = _focusMonitor;
          this._dir = _dir;
          this._defaultOptions = _defaultOptions;
          this._position = 'below';
          this._disabled = false;
          this._viewInitialized = false;
          /** The default delay in ms before showing the tooltip after show is called */

          this.showDelay = this._defaultOptions.showDelay;
          /** The default delay in ms before hiding the tooltip after hide is called */

          this.hideDelay = this._defaultOptions.hideDelay;
          /**
           * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
           * uses a long press gesture to show and hide, however it can conflict with the native browser
           * gestures. To work around the conflict, Angular Material disables native gestures on the
           * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
           * elements). The different values for this option configure the touch event handling as follows:
           * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
           *   browser gestures on particular elements. In particular, it allows text selection on inputs
           *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
           * - `on` - Enables touch gestures for all elements and disables native
           *   browser gestures with no exceptions.
           * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
           *   showing on touch devices.
           */

          this.touchGestures = 'auto';
          this._message = '';
          /** Manually-bound passive event listeners. */

          this._passiveListeners = new Map();
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /**
           * Handles the keydown events on the host element.
           * Needs to be an arrow function so that we can use it in addEventListener.
           */

          this._handleKeydown = function (event) {
            if (_this37._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
              event.preventDefault();
              event.stopPropagation();

              _this37._ngZone.run(function () {
                return _this37.hide(0);
              });
            }
          };

          this._scrollStrategy = scrollStrategy;

          if (_defaultOptions) {
            if (_defaultOptions.position) {
              this.position = _defaultOptions.position;
            }

            if (_defaultOptions.touchGestures) {
              this.touchGestures = _defaultOptions.touchGestures;
            }
          }

          _ngZone.runOutsideAngular(function () {
            _elementRef.nativeElement.addEventListener('keydown', _this37._handleKeydown);
          });
        }
        /** Allows the user to define the position of the tooltip relative to the parent element */


        _createClass(MatTooltip, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this38 = this;

            // This needs to happen after view init so the initial values for all inputs have been set.
            this._viewInitialized = true;

            this._setupPointerEvents();

            this._focusMonitor.monitor(this._elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
              // Note that the focus monitor runs outside the Angular zone.
              if (!origin) {
                _this38._ngZone.run(function () {
                  return _this38.hide(0);
                });
              } else if (origin === 'keyboard') {
                _this38._ngZone.run(function () {
                  return _this38.show();
                });
              }
            });
          }
          /**
           * Dispose the tooltip when destroyed.
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var nativeElement = this._elementRef.nativeElement;
            clearTimeout(this._touchstartTimeout);

            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._tooltipInstance = null;
            } // Clean up the event listeners set in the constructor


            nativeElement.removeEventListener('keydown', this._handleKeydown);

            this._passiveListeners.forEach(function (listener, event) {
              nativeElement.removeEventListener(event, listener, passiveListenerOptions);
            });

            this._passiveListeners.clear();

            this._destroyed.next();

            this._destroyed.complete();

            this._ariaDescriber.removeDescription(nativeElement, this.message);

            this._focusMonitor.stopMonitoring(nativeElement);
          }
          /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

        }, {
          key: "show",
          value: function show() {
            var _this39 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

            if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
              return;
            }

            var overlayRef = this._createOverlay();

            this._detach();

            this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
            this._tooltipInstance = overlayRef.attach(this._portal).instance;

            this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this39._detach();
            });

            this._setTooltipClass(this._tooltipClass);

            this._updateTooltipMessage();

            this._tooltipInstance.show(delay);
          }
          /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

        }, {
          key: "hide",
          value: function hide() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

            if (this._tooltipInstance) {
              this._tooltipInstance.hide(delay);
            }
          }
          /** Shows/hides the tooltip */

        }, {
          key: "toggle",
          value: function toggle() {
            this._isTooltipVisible() ? this.hide() : this.show();
          }
          /** Returns true if the tooltip is currently visible to the user */

        }, {
          key: "_isTooltipVisible",
          value: function _isTooltipVisible() {
            return !!this._tooltipInstance && this._tooltipInstance.isVisible();
          }
          /** Create the overlay config and position strategy */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this40 = this;

            if (this._overlayRef) {
              return this._overlayRef;
            }

            var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


            var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

            strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function (change) {
              if (_this40._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && _this40._tooltipInstance.isVisible()) {
                  // After position changes occur and the overlay is clipped by
                  // a parent scrollable then close the tooltip.
                  _this40._ngZone.run(function () {
                    return _this40.hide(0);
                  });
                }
              }
            });
            this._overlayRef = this._overlay.create({
              direction: this._dir,
              positionStrategy: strategy,
              panelClass: TOOLTIP_PANEL_CLASS,
              scrollStrategy: this._scrollStrategy()
            });

            this._updatePosition();

            this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this40._detach();
            });

            return this._overlayRef;
          }
          /** Detaches the currently-attached tooltip. */

        }, {
          key: "_detach",
          value: function _detach() {
            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();
            }

            this._tooltipInstance = null;
          }
          /** Updates the position of the current tooltip. */

        }, {
          key: "_updatePosition",
          value: function _updatePosition() {
            var position = this._overlayRef.getConfig().positionStrategy;

            var origin = this._getOrigin();

            var overlay = this._getOverlayPosition();

            position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
          }
          /**
           * Returns the origin position and a fallback position based on the user's position preference.
           * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
           */

        }, {
          key: "_getOrigin",
          value: function _getOrigin() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var originPosition;

            if (position == 'above' || position == 'below') {
              originPosition = {
                originX: 'center',
                originY: position == 'above' ? 'top' : 'bottom'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              originPosition = {
                originX: 'start',
                originY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              originPosition = {
                originX: 'end',
                originY: 'center'
              };
            } else {
              throw getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
                x = _this$_invertPosition.x,
                y = _this$_invertPosition.y;

            return {
              main: originPosition,
              fallback: {
                originX: x,
                originY: y
              }
            };
          }
          /** Returns the overlay position and a fallback position based on the user's preference */

        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var overlayPosition;

            if (position == 'above') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'bottom'
              };
            } else if (position == 'below') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'top'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              overlayPosition = {
                overlayX: 'end',
                overlayY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              overlayPosition = {
                overlayX: 'start',
                overlayY: 'center'
              };
            } else {
              throw getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
                x = _this$_invertPosition2.x,
                y = _this$_invertPosition2.y;

            return {
              main: overlayPosition,
              fallback: {
                overlayX: x,
                overlayY: y
              }
            };
          }
          /** Updates the tooltip message and repositions the overlay according to the new message length */

        }, {
          key: "_updateTooltipMessage",
          value: function _updateTooltipMessage() {
            var _this41 = this;

            // Must wait for the message to be painted to the tooltip so that the overlay can properly
            // calculate the correct positioning based on the size of the text.
            if (this._tooltipInstance) {
              this._tooltipInstance.message = this.message;

              this._tooltipInstance._markForCheck();

              this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (_this41._tooltipInstance) {
                  _this41._overlayRef.updatePosition();
                }
              });
            }
          }
          /** Updates the tooltip class */

        }, {
          key: "_setTooltipClass",
          value: function _setTooltipClass(tooltipClass) {
            if (this._tooltipInstance) {
              this._tooltipInstance.tooltipClass = tooltipClass;

              this._tooltipInstance._markForCheck();
            }
          }
          /** Inverts an overlay position. */

        }, {
          key: "_invertPosition",
          value: function _invertPosition(x, y) {
            if (this.position === 'above' || this.position === 'below') {
              if (y === 'top') {
                y = 'bottom';
              } else if (y === 'bottom') {
                y = 'top';
              }
            } else {
              if (x === 'end') {
                x = 'start';
              } else if (x === 'start') {
                x = 'end';
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Binds the pointer events to the tooltip trigger. */

        }, {
          key: "_setupPointerEvents",
          value: function _setupPointerEvents() {
            var _this42 = this;

            // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
            if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.size) {
              return;
            } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
            // first tap from firing its click event or can cause the tooltip to open for clicks.


            if (!this._platform.IOS && !this._platform.ANDROID) {
              this._passiveListeners.set('mouseenter', function () {
                return _this42.show();
              }).set('mouseleave', function () {
                return _this42.hide();
              });
            } else if (this.touchGestures !== 'off') {
              this._disableNativeGesturesIfNecessary();

              var touchendListener = function touchendListener() {
                clearTimeout(_this42._touchstartTimeout);

                _this42.hide(_this42._defaultOptions.touchendHideDelay);
              };

              this._passiveListeners.set('touchend', touchendListener).set('touchcancel', touchendListener).set('touchstart', function () {
                // Note that it's important that we don't `preventDefault` here,
                // because it can prevent click events from firing on the element.
                clearTimeout(_this42._touchstartTimeout);
                _this42._touchstartTimeout = setTimeout(function () {
                  return _this42.show();
                }, LONGPRESS_DELAY);
              });
            }

            this._passiveListeners.forEach(function (listener, event) {
              _this42._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
            });
          }
          /** Disables the native browser gestures, based on how the tooltip has been configured. */

        }, {
          key: "_disableNativeGesturesIfNecessary",
          value: function _disableNativeGesturesIfNecessary() {
            var element = this._elementRef.nativeElement;
            var style = element.style;
            var gestures = this.touchGestures;

            if (gestures !== 'off') {
              // If gestures are set to `auto`, we don't disable text selection on inputs and
              // textareas, because it prevents the user from typing into them on iOS Safari.
              if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
                style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
              } // If we have `auto` gestures and the element uses native HTML dragging,
              // we don't set `-webkit-user-drag` because it prevents the native behavior.


              if (gestures === 'on' || !element.draggable) {
                style.webkitUserDrag = 'none';
              }

              style.touchAction = 'none';
              style.webkitTapHighlightColor = 'transparent';
            }
          }
        }, {
          key: "position",
          get: function get() {
            return this._position;
          },
          set: function set(value) {
            if (value !== this._position) {
              this._position = value;

              if (this._overlayRef) {
                this._updatePosition();

                if (this._tooltipInstance) {
                  this._tooltipInstance.show(0);
                }

                this._overlayRef.updatePosition();
              }
            }
          }
          /** Disables the display of the tooltip. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

            if (this._disabled) {
              this.hide(0);
            } else {
              this._setupPointerEvents();
            }
          }
          /** The message to be displayed in the tooltip */

        }, {
          key: "message",
          get: function get() {
            return this._message;
          },
          set: function set(value) {
            var _this43 = this;

            if (this._message) {
              this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
            } // If the message is not a string (e.g. number), convert it to a string and trim it.


            this._message = value != null ? "".concat(value).trim() : '';

            if (!this._message && this._isTooltipVisible()) {
              this.hide(0);
            } else {
              this._setupPointerEvents();

              this._updateTooltipMessage();

              this._ngZone.runOutsideAngular(function () {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then(function () {
                  _this43._ariaDescriber.describe(_this43._elementRef.nativeElement, _this43.message);
                });
              });
            }
          }
          /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

        }, {
          key: "tooltipClass",
          get: function get() {
            return this._tooltipClass;
          },
          set: function set(value) {
            this._tooltipClass = value;

            if (this._tooltipInstance) {
              this._setTooltipClass(this._tooltipClass);
            }
          }
        }]);

        return MatTooltip;
      }();

      MatTooltip.ɵfac = function MatTooltip_Factory(t) {
        return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8));
      };

      MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-tooltip-trigger"],
        inputs: {
          showDelay: ["matTooltipShowDelay", "showDelay"],
          hideDelay: ["matTooltipHideDelay", "hideDelay"],
          touchGestures: ["matTooltipTouchGestures", "touchGestures"],
          position: ["matTooltipPosition", "position"],
          disabled: ["matTooltipDisabled", "disabled"],
          message: ["matTooltip", "message"],
          tooltipClass: ["matTooltipClass", "tooltipClass"]
        },
        exportAs: ["matTooltip"]
      });

      MatTooltip.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatTooltip.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipDisabled']
        }],
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipShowDelay']
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipHideDelay']
        }],
        touchGestures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipTouchGestures']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltip']
        }],
        tooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipClass']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matTooltip]',
            exportAs: 'matTooltip',
            host: {
              'class': 'mat-tooltip-trigger'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipShowDelay']
          }],
          hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipHideDelay']
          }],
          touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipTouchGestures']
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipPosition']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipDisabled']
          }],
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltip']
          }],
          tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipClass']
          }]
        });
      })();
      /**
       * Internal component that wraps the tooltip's content.
       * @docs-private
       */


      var TooltipComponent = /*#__PURE__*/function () {
        function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
          _classCallCheck(this, TooltipComponent);

          this._changeDetectorRef = _changeDetectorRef;
          this._breakpointObserver = _breakpointObserver;
          /** Property watched by the animation framework to show or hide the tooltip */

          this._visibility = 'initial';
          /** Whether interactions on the page should close the tooltip */

          this._closeOnInteraction = false;
          /** Subject for notifying that the tooltip has been hidden from the view */

          this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /** Stream that emits whether the user has a handset-sized display.  */

          this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Handset);
        }
        /**
         * Shows the tooltip with an animation originating from the provided origin
         * @param delay Amount of milliseconds to the delay showing the tooltip.
         */


        _createClass(TooltipComponent, [{
          key: "show",
          value: function show(delay) {
            var _this44 = this;

            // Cancel the delayed hide if it is scheduled
            if (this._hideTimeoutId) {
              clearTimeout(this._hideTimeoutId);
              this._hideTimeoutId = null;
            } // Body interactions should cancel the tooltip if there is a delay in showing.


            this._closeOnInteraction = true;
            this._showTimeoutId = setTimeout(function () {
              _this44._visibility = 'visible';
              _this44._showTimeoutId = null; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this44._markForCheck();
            }, delay);
          }
          /**
           * Begins the animation to hide the tooltip after the provided delay in ms.
           * @param delay Amount of milliseconds to delay showing the tooltip.
           */

        }, {
          key: "hide",
          value: function hide(delay) {
            var _this45 = this;

            // Cancel the delayed show if it is scheduled
            if (this._showTimeoutId) {
              clearTimeout(this._showTimeoutId);
              this._showTimeoutId = null;
            }

            this._hideTimeoutId = setTimeout(function () {
              _this45._visibility = 'hidden';
              _this45._hideTimeoutId = null; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this45._markForCheck();
            }, delay);
          }
          /** Returns an observable that notifies when the tooltip has been hidden from view. */

        }, {
          key: "afterHidden",
          value: function afterHidden() {
            return this._onHide.asObservable();
          }
          /** Whether the tooltip is being displayed. */

        }, {
          key: "isVisible",
          value: function isVisible() {
            return this._visibility === 'visible';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onHide.complete();
          }
        }, {
          key: "_animationStart",
          value: function _animationStart() {
            this._closeOnInteraction = false;
          }
        }, {
          key: "_animationDone",
          value: function _animationDone(event) {
            var toState = event.toState;

            if (toState === 'hidden' && !this.isVisible()) {
              this._onHide.next();
            }

            if (toState === 'visible' || toState === 'hidden') {
              this._closeOnInteraction = true;
            }
          }
          /**
           * Interactions on the HTML body should close the tooltip immediately as defined in the
           * material design spec.
           * https://material.io/design/components/tooltips.html#behavior
           */

        }, {
          key: "_handleBodyInteraction",
          value: function _handleBodyInteraction() {
            if (this._closeOnInteraction) {
              this.hide(0);
            }
          }
          /**
           * Marks that the tooltip needs to be checked in the next change detection run.
           * Mainly used for rendering the initial text before positioning a tooltip, which
           * can be problematic in components with OnPush change detection.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            this._changeDetectorRef.markForCheck();
          }
        }]);

        return TooltipComponent;
      }();

      TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]));
      };

      TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        hostAttrs: ["aria-hidden", "true"],
        hostVars: 2,
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
              return ctx._handleBodyInteraction();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
          }
        },
        decls: 3,
        vars: 7,
        consts: [[1, "mat-tooltip", 3, "ngClass"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
              return ctx._animationStart();
            })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
              return ctx._animationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", currVal_0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
        encapsulation: 2,
        data: {
          animation: [matTooltipAnimations.tooltipState]
        },
        changeDetection: 0
      });

      TooltipComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-tooltip-component',
            template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            animations: [matTooltipAnimations.tooltipState],
            host: {
              // Forces the element to have a layout in IE and Edge. This fixes issues where the element
              // won't be rendered if the animations are disabled or there is no web animations polyfill.
              '[style.zoom]': '_visibility === "visible" ? 1 : null',
              '(body:click)': 'this._handleBodyInteraction()',
              'aria-hidden': 'true'
            },
            styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatTooltipModule = function MatTooltipModule() {
        _classCallCheck(this, MatTooltipModule);
      };

      MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatTooltipModule
      });
      MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatTooltipModule_Factory(t) {
          return new (t || MatTooltipModule)();
        },
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, {
          declarations: function declarations() {
            return [MatTooltip, TooltipComponent];
          },
          imports: function imports() {
            return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
            exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
            declarations: [MatTooltip, TooltipComponent],
            entryComponents: [TooltipComponent],
            providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tooltip.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~apps-apps-module~courses-courses-module~departments-departments-module~fees-fees-module~form~f9ab7ea5-es5.js.map