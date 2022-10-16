"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[614],{2614:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Property)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1249);\n/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3290);\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1058);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nvar _types = /*#__PURE__*/new WeakMap();\n\nvar _propertyPoints = /*#__PURE__*/new WeakMap();\n\nvar _propertyAllocate = /*#__PURE__*/new WeakMap();\n\nvar _propertyAllocateLimit = /*#__PURE__*/new WeakMap();\n\nvar Property = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Property, _ui$view$DefaultTheme);\n\n  var _super = _createSuper(Property);\n\n  function Property() {\n    var _this;\n\n    _classCallCheck(this, Property);\n\n    _this = _super.call(this);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _types, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyPoints, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocate, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propertyAllocateLimit, {\n      writable: true,\n      value: void 0\n    });\n\n    var types = _classPrivateFieldSet(_assertThisInitialized(_this), _types, core.PropertyTypes);\n\n    _this.btnCharmIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, 1]);\n\n    _this.btnCharmReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.CHR, -1]);\n\n    _this.btnIntelligenceIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, 1]);\n\n    _this.btnIntelligenceReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.INT, -1]);\n\n    _this.btnStrengthIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, 1]);\n\n    _this.btnStrengthReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.STR, -1]);\n\n    _this.btnMoneyIncrease.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, 1]);\n\n    _this.btnMoneyReduce.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onPropertyAllocate, [types.MNY, -1]);\n\n    _this.inputCharm.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.CHR]);\n\n    _this.inputIntelligence.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.INT]);\n\n    _this.inputStrength.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.STR]);\n\n    _this.inputMoney.on(Laya.Event.INPUT, _assertThisInitialized(_this), _this.onPropertyAllocateInput, [types.MNY]);\n\n    var selectAll = function selectAll(_ref) {\n      var item = _ref.currentTarget;\n      item.text = \'\';\n    };\n\n    _this.inputCharm.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputIntelligence.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputStrength.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.inputMoney.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), selectAll);\n\n    _this.btnRandomAllocate.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.random);\n\n    _this.btnNext.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.next);\n\n    _this.listSelectedTalents.renderHandler = Laya.Handler.create(_assertThisInitialized(_this), _this.renderTalent, null, false);\n    return _this;\n  }\n\n  _createClass(Property, [{\n    key: "init",\n    value: function init(_ref2) {\n      var _classPrivateFieldSet2;\n\n      var talents = _ref2.talents;\n      this.listSelectedTalents.array = talents;\n      var replace = core.remake(talents.map(function (talent) {\n        return talent.id;\n      }));\n\n      if (replace.length > 0) {\n        $$event(\'message\', [replace.map(function (v) {\n          return [\'F_TalentReplace\', v];\n        })]);\n      }\n\n      _classPrivateFieldSet(this, _propertyPoints, core.getPropertyPoints());\n\n      _classPrivateFieldSet(this, _propertyAllocateLimit, core.propertyAllocateLimit);\n\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints);\n\n      _classPrivateFieldSet(this, _propertyAllocate, (_classPrivateFieldSet2 = {}, _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).CHR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).INT, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).STR, 0), _defineProperty(_classPrivateFieldSet2, _classPrivateFieldGet(this, _types).MNY, 0), _classPrivateFieldSet2));\n\n      this.updateAllocate();\n    }\n  }, {\n    key: "next",\n    value: function next() {\n      var left = _classPrivateFieldGet(this, _propertyPoints) - this.total;\n\n      if (left > 0) {\n        return $$event(\'message\', [\'F_PropertyPointLeft\', left]);\n      }\n\n      $ui.switchView(UI.pages.TRAJECTORY, {\n        propertyAllocate: _classPrivateFieldGet(this, _propertyAllocate),\n        talents: this.listSelectedTalents.array,\n        enableExtend: true\n      });\n    }\n  }, {\n    key: "total",\n    get: function get() {\n      return _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] + _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n    }\n  }, {\n    key: "updateAllocate",\n    value: function updateAllocate() {\n      var charm = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR];\n\n      var intelligence = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT];\n\n      var strength = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR];\n\n      var money = _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY];\n\n      this.inputCharm.text = \'\' + charm;\n      this.inputIntelligence.text = \'\' + intelligence;\n      this.inputStrength.text = \'\' + strength;\n      this.inputMoney.text = \'\' + money;\n      this.labLeftPropertyPoint.text = _classPrivateFieldGet(this, _propertyPoints) - this.total;\n      this.btnCharmIncrease.disabled = this.btnCharmIncrease.gray = false;\n      this.btnCharmReduce.disabled = this.btnCharmReduce.gray = false;\n      this.btnIntelligenceIncrease.disabled = this.btnIntelligenceIncrease.gray = false;\n      this.btnIntelligenceReduce.disabled = this.btnIntelligenceReduce.gray = false;\n      this.btnStrengthIncrease.disabled = this.btnStrengthIncrease.gray = false;\n      this.btnStrengthReduce.disabled = this.btnStrengthReduce.gray = false;\n      this.btnMoneyIncrease.disabled = this.btnMoneyIncrease.gray = false;\n      this.btnMoneyReduce.disabled = this.btnMoneyReduce.gray = false;\n    }\n  }, {\n    key: "check",\n    value: function check(left, right, value) {\n      if (value < left) return false;\n      if (value > right) return false;\n      return true;\n    }\n  }, {\n    key: "random",\n    value: function random() {\n      var t = _classPrivateFieldGet(this, _propertyPoints);\n\n      var arr = new Array(4).fill(_classPrivateFieldGet(this, _propertyAllocateLimit)[1]);\n\n      while (t > 0) {\n        var sub = Math.round(Math.random() * (Math.min(t, _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) - 1)) + 1;\n\n        while (true) {\n          var select = Math.floor(Math.random() * 4) % 4;\n          if (arr[select] - sub < 0) continue;\n          arr[select] -= sub;\n          t -= sub;\n          break;\n        }\n      }\n\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).CHR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[0];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).INT] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[1];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).STR] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[2];\n      _classPrivateFieldGet(this, _propertyAllocate)[_classPrivateFieldGet(this, _types).MNY] = _classPrivateFieldGet(this, _propertyAllocateLimit)[1] - arr[3];\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocate",\n    value: function onPropertyAllocate(type, value) {\n      if (!this.check(_classPrivateFieldGet(this, _propertyAllocateLimit)[0], _classPrivateFieldGet(this, _propertyAllocateLimit)[1], _classPrivateFieldGet(this, _propertyAllocate)[type] + value)) {\n        return;\n      }\n\n      if (!this.check(0, _classPrivateFieldGet(this, _propertyPoints), this.total + value)) {\n        return;\n      }\n\n      _classPrivateFieldGet(this, _propertyAllocate)[type] += value;\n      this.updateAllocate();\n    }\n  }, {\n    key: "onPropertyAllocateInput",\n    value: function onPropertyAllocateInput(type, inputItem) {\n      var value = parseInt(inputItem.text) || 0;\n      var total = this.total;\n\n      if (total + value < 0) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0] * 4 - total;\n      } else if (total + value > _classPrivateFieldGet(this, _propertyPoints)) {\n        value = _classPrivateFieldGet(this, _propertyPoints) - total;\n      }\n\n      if (value < _classPrivateFieldGet(this, _propertyAllocateLimit)[0]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[0];\n      } else if (value > _classPrivateFieldGet(this, _propertyAllocateLimit)[1]) {\n        value = _classPrivateFieldGet(this, _propertyAllocateLimit)[1];\n      }\n\n      var alter = value - _classPrivateFieldGet(this, _propertyAllocate)[type];\n\n      if (alter) {\n        this.onPropertyAllocate(type, alter);\n      } else {\n        this.updateAllocate();\n      }\n    }\n  }, {\n    key: "renderTalent",\n    value: function renderTalent(box) {\n      var dataSource = box.dataSource;\n      box.label = $_.format($lang.F_TalentSelection, dataSource);\n      var style = $ui.common.card[dataSource.grade].normal;\n      $_.deepMapSet(box, style);\n    }\n  }]);\n\n  return Property;\n}(ui.view.DefaultTheme.PropertyUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYxNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTtBQWhDQTtBQWlDQTs7OztBQU9BO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7O0FBQ0E7QUFLQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7OztBQXRMQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvZGVmYXVsdC9wcm9wZXJ0eS5qcz9jNGI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5IGV4dGVuZHMgdWkudmlldy5EZWZhdWx0VGhlbWUuUHJvcGVydHlVSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgdHlwZXMgPVxuICAgICAgICB0aGlzLiN0eXBlcyA9IGNvcmUuUHJvcGVydHlUeXBlcztcblxuICAgICAgICB0aGlzLmJ0bkNoYXJtSW5jcmVhc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUsIFt0eXBlcy5DSFIsIDFdKTtcbiAgICAgICAgdGhpcy5idG5DaGFybVJlZHVjZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLkNIUiwgLTFdKTtcblxuICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZUluY3JlYXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuSU5ULCAxXSk7XG4gICAgICAgIHRoaXMuYnRuSW50ZWxsaWdlbmNlUmVkdWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuSU5ULCAtMV0pO1xuXG4gICAgICAgIHRoaXMuYnRuU3RyZW5ndGhJbmNyZWFzZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLlNUUiwgMV0pO1xuICAgICAgICB0aGlzLmJ0blN0cmVuZ3RoUmVkdWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuU1RSLCAtMV0pO1xuXG4gICAgICAgIHRoaXMuYnRuTW9uZXlJbmNyZWFzZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZSwgW3R5cGVzLk1OWSwgMV0pO1xuICAgICAgICB0aGlzLmJ0bk1vbmV5UmVkdWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25Qcm9wZXJ0eUFsbG9jYXRlLCBbdHlwZXMuTU5ZLCAtMV0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXRDaGFybS5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCB0aGlzLm9uUHJvcGVydHlBbGxvY2F0ZUlucHV0LCBbdHlwZXMuQ0hSXSk7XG4gICAgICAgIHRoaXMuaW5wdXRJbnRlbGxpZ2VuY2Uub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGVJbnB1dCwgW3R5cGVzLklOVF0pO1xuICAgICAgICB0aGlzLmlucHV0U3RyZW5ndGgub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGVJbnB1dCwgW3R5cGVzLlNUUl0pO1xuICAgICAgICB0aGlzLmlucHV0TW9uZXkub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgdGhpcy5vblByb3BlcnR5QWxsb2NhdGVJbnB1dCwgW3R5cGVzLk1OWV0pO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbCA9ICh7Y3VycmVudFRhcmdldDogaXRlbX0pID0+IHsgaXRlbS50ZXh0PScnOyB9O1xuICAgICAgICB0aGlzLmlucHV0Q2hhcm0ub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCBzZWxlY3RBbGwpO1xuICAgICAgICB0aGlzLmlucHV0SW50ZWxsaWdlbmNlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgc2VsZWN0QWxsKTtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVuZ3RoLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgc2VsZWN0QWxsKTtcbiAgICAgICAgdGhpcy5pbnB1dE1vbmV5Lm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgc2VsZWN0QWxsKTtcblxuICAgICAgICB0aGlzLmJ0blJhbmRvbUFsbG9jYXRlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMucmFuZG9tKTtcbiAgICAgICAgdGhpcy5idG5OZXh0Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMubmV4dCk7XG5cbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLnJlbmRlckhhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMucmVuZGVyVGFsZW50LCBudWxsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgI3R5cGVzO1xuICAgICNwcm9wZXJ0eVBvaW50cztcbiAgICAjcHJvcGVydHlBbGxvY2F0ZTtcbiAgICAjcHJvcGVydHlBbGxvY2F0ZUxpbWl0O1xuXG4gICAgaW5pdCh7dGFsZW50c30pIHtcbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLmFycmF5ID0gdGFsZW50cztcbiAgICAgICAgY29uc3QgcmVwbGFjZSA9IGNvcmUucmVtYWtlKHRhbGVudHMubWFwKHRhbGVudCA9PiB0YWxlbnQuaWQpKTtcbiAgICAgICAgaWYocmVwbGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkJGV2ZW50KCdtZXNzYWdlJywgW3JlcGxhY2UubWFwKHYgPT4gWydGX1RhbGVudFJlcGxhY2UnLCB2XSldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNwcm9wZXJ0eVBvaW50cyA9IGNvcmUuZ2V0UHJvcGVydHlQb2ludHMoKTtcbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0ID0gY29yZS5wcm9wZXJ0eUFsbG9jYXRlTGltaXQ7XG4gICAgICAgIHRoaXMubGFiTGVmdFByb3BlcnR5UG9pbnQudGV4dCA9IHRoaXMuI3Byb3BlcnR5UG9pbnRzO1xuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlID0ge1xuICAgICAgICAgICAgW3RoaXMuI3R5cGVzLkNIUl06IDAsXG4gICAgICAgICAgICBbdGhpcy4jdHlwZXMuSU5UXTogMCxcbiAgICAgICAgICAgIFt0aGlzLiN0eXBlcy5TVFJdOiAwLFxuICAgICAgICAgICAgW3RoaXMuI3R5cGVzLk1OWV06IDAsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLiNwcm9wZXJ0eVBvaW50cyAtIHRoaXMudG90YWw7XG4gICAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICQkZXZlbnQoJ21lc3NhZ2UnLCBbJ0ZfUHJvcGVydHlQb2ludExlZnQnLCBsZWZ0XSk7XG4gICAgICAgIH1cbiAgICAgICAgJHVpLnN3aXRjaFZpZXcoXG4gICAgICAgICAgICBVSS5wYWdlcy5UUkFKRUNUT1JZLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5QWxsb2NhdGU6IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGUsXG4gICAgICAgICAgICAgICAgdGFsZW50czogdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLmFycmF5LFxuICAgICAgICAgICAgICAgIGVuYWJsZUV4dGVuZDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLkNIUl1cbiAgICAgICAgICAgICsgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuSU5UXVxuICAgICAgICAgICAgKyAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5TVFJdXG4gICAgICAgICAgICArICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLk1OWV07XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsb2NhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoYXJtID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5DSFJdO1xuICAgICAgICBjb25zdCBpbnRlbGxpZ2VuY2UgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLklOVF07XG4gICAgICAgIGNvbnN0IHN0cmVuZ3RoID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5TVFJdO1xuICAgICAgICBjb25zdCBtb25leSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuTU5ZXTtcblxuICAgICAgICB0aGlzLmlucHV0Q2hhcm0udGV4dCA9ICcnK2NoYXJtO1xuICAgICAgICB0aGlzLmlucHV0SW50ZWxsaWdlbmNlLnRleHQgPSAnJytpbnRlbGxpZ2VuY2U7XG4gICAgICAgIHRoaXMuaW5wdXRTdHJlbmd0aC50ZXh0ID0gJycrc3RyZW5ndGg7XG4gICAgICAgIHRoaXMuaW5wdXRNb25leS50ZXh0ID0gJycrbW9uZXk7XG5cbiAgICAgICAgdGhpcy5sYWJMZWZ0UHJvcGVydHlQb2ludC50ZXh0ID0gdGhpcy4jcHJvcGVydHlQb2ludHMgLSB0aGlzLnRvdGFsO1xuXG4gICAgICAgIHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuQ2hhcm1JbmNyZWFzZS5ncmF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuQ2hhcm1SZWR1Y2UuZGlzYWJsZWQgPSB0aGlzLmJ0bkNoYXJtUmVkdWNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5JbnRlbGxpZ2VuY2VJbmNyZWFzZS5kaXNhYmxlZCA9IHRoaXMuYnRuSW50ZWxsaWdlbmNlSW5jcmVhc2UuZ3JheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkludGVsbGlnZW5jZVJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuSW50ZWxsaWdlbmNlUmVkdWNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aEluY3JlYXNlLmRpc2FibGVkID0gdGhpcy5idG5TdHJlbmd0aEluY3JlYXNlLmdyYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5TdHJlbmd0aFJlZHVjZS5kaXNhYmxlZCA9IHRoaXMuYnRuU3RyZW5ndGhSZWR1Y2UuZ3JheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bk1vbmV5SW5jcmVhc2UuZGlzYWJsZWQgPSB0aGlzLmJ0bk1vbmV5SW5jcmVhc2UuZ3JheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bk1vbmV5UmVkdWNlLmRpc2FibGVkID0gdGhpcy5idG5Nb25leVJlZHVjZS5ncmF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2sobGVmdCwgcmlnaHQsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IGxlZnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlID4gcmlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmFuZG9tKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXMuI3Byb3BlcnR5UG9pbnRzO1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoNCkuZmlsbCh0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0pO1xuXG4gICAgICAgIHdoaWxlICh0ID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3ViID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE1hdGgubWluKHQsIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSkgLSAxKSkgKyAxO1xuICAgICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgICAgICAgICBpZihhcnJbc2VsZWN0XSAtIHN1YiA8MCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgYXJyW3NlbGVjdF0gLT0gc3ViO1xuICAgICAgICAgICAgICAgIHQgLT0gc3ViO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuQ0hSXSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSAtIGFyclswXTtcbiAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZVt0aGlzLiN0eXBlcy5JTlRdID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdIC0gYXJyWzFdO1xuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3RoaXMuI3R5cGVzLlNUUl0gPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMV0gLSBhcnJbMl07XG4gICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdGhpcy4jdHlwZXMuTU5ZXSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXSAtIGFyclszXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUFsbG9jYXRlKCk7XG4gICAgfVxuXG4gICAgb25Qcm9wZXJ0eUFsbG9jYXRlKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMF0sXG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdLFxuICAgICAgICAgICAgICAgIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdHlwZV0gKyB2YWx1ZVxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMuI3Byb3BlcnR5UG9pbnRzLFxuICAgICAgICAgICAgdGhpcy50b3RhbCArIHZhbHVlXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlW3R5cGVdICs9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUFsbG9jYXRlKCk7XG4gICAgfVxuXG4gICAgb25Qcm9wZXJ0eUFsbG9jYXRlSW5wdXQodHlwZSwgaW5wdXRJdGVtKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGlucHV0SXRlbS50ZXh0KSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMudG90YWw7XG4gICAgICAgIGlmICh0b3RhbCArIHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMF0gKiA0IC0gdG90YWw7XG4gICAgICAgIH0gZWxzZSBpZiAodG90YWwgKyB2YWx1ZSA+IHRoaXMuI3Byb3BlcnR5UG9pbnRzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuI3Byb3BlcnR5UG9pbnRzIC0gdG90YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPCB0aGlzLiNwcm9wZXJ0eUFsbG9jYXRlTGltaXRbMF0pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gdGhpcy4jcHJvcGVydHlBbGxvY2F0ZUxpbWl0WzFdKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVMaW1pdFsxXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgYWx0ZXIgPSB2YWx1ZSAtIHRoaXMuI3Byb3BlcnR5QWxsb2NhdGVbdHlwZV07XG4gICAgICAgIGlmIChhbHRlcikge1xuICAgICAgICAgICAgdGhpcy5vblByb3BlcnR5QWxsb2NhdGUodHlwZSwgYWx0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxvY2F0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVGFsZW50KGJveCkge1xuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gYm94LmRhdGFTb3VyY2U7XG5cbiAgICAgICAgYm94LmxhYmVsID0gJF8uZm9ybWF0KCRsYW5nLkZfVGFsZW50U2VsZWN0aW9uLCBkYXRhU291cmNlKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSAkdWkuY29tbW9uLmNhcmRbZGF0YVNvdXJjZS5ncmFkZV0ubm9ybWFsO1xuXG4gICAgICAgICRfLmRlZXBNYXBTZXQoYm94LCBzdHlsZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2614\n')}}]);