/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./E360PCFGridFULLDescription/ProductGridComponent.tsx":
/*!*************************************************************!*\
  !*** ./E360PCFGridFULLDescription/ProductGridComponent.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n/* eslint-disable @typescript-eslint/no-explicit-any */\n\n/* eslint-disable @typescript-eslint/no-unused-vars */\n\nvar __spreadArray = this && this.__spreadArray || function (to, from, pack) {\n  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n    if (ar || !(i in from)) {\n      if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n      ar[i] = from[i];\n    }\n  }\n  return to.concat(ar || Array.prototype.slice.call(from));\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ProductGridComponent = void 0;\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar DetailsList_1 = __webpack_require__(/*! @fluentui/react/lib/DetailsList */ \"@fluentui/react/lib/DetailsList\");\n\nexports.ProductGridComponent = React.memo(function (_a) {\n  var dataset = _a.dataset;\n\n  var _b = React.useState([]),\n      columns = _b[0],\n      setColumns = _b[1];\n\n  var _c = React.useState([]),\n      items = _c[0],\n      setItems = _c[1];\n\n  React.useEffect(function () {\n    var columns = dataset.columns.sort(function (column1, column2) {\n      return column1.order - column2.order;\n    }).filter(function (item) {\n      return !item.isHidden;\n    }).map(function (column) {\n      if (column.name.includes(\"description\") || column.name.includes(\"Description\")) {\n        return {\n          name: column.displayName,\n          fieldName: column.name,\n          minWidth: column.visualSizeFactor + 20,\n          minHeight: column.visualSizeFactor,\n          key: column.name\n        };\n      } else {\n        return {\n          name: column.displayName,\n          fieldName: column.name,\n          maxWidth: column.visualSizeFactor + 20,\n          minHeight: column.visualSizeFactor,\n          key: column.name\n        };\n      }\n    });\n    setColumns(columns);\n    var myItems = dataset.sortedRecordIds.map(function (id) {\n      debugger;\n      var entityIn = dataset.records[id];\n      var attributes = dataset.columns.map(function (column) {\n        var _a, _b;\n\n        if (column.name.includes(\"description\") || column.name.includes(\"Description\")) {\n          return _a = {}, _a[column.name] = React.createElement(\"div\", {\n            style: {\n              whiteSpace: \"break-spaces\"\n            }\n          }, entityIn.getFormattedValue(column.name)), _a;\n        } else {\n          return _b = {}, _b[column.name] = React.createElement(\"div\", null, entityIn.getFormattedValue(column.name)), _b;\n        }\n      });\n      return Object.assign.apply(Object, __spreadArray([{\n        key: entityIn.getRecordId(),\n        raw: entityIn\n      }], attributes, false));\n    }).sort(function (a, b) {\n      return a.parentId < b.parentId ? -1 : a.parentId < b.parentId ? 1 : 0;\n    });\n    setItems(myItems);\n  }, [dataset]);\n  return React.createElement(\"div\", {\n    style: {\n      width: '100%',\n      display: 'inline'\n    }\n  }, React.createElement(DetailsList_1.DetailsList, {\n    columns: columns,\n    items: items,\n    setKey: \"set\",\n    styles: {\n      root: {\n        width: '100%',\n        display: 'inline'\n      }\n    }\n  }));\n});\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./E360PCFGridFULLDescription/ProductGridComponent.tsx?");

/***/ }),

/***/ "./E360PCFGridFULLDescription/index.ts":
/*!*********************************************!*\
  !*** ./E360PCFGridFULLDescription/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PCFGridFULLDescription = void 0;\n\nvar ProductGridComponent_1 = __webpack_require__(/*! ./ProductGridComponent */ \"./E360PCFGridFULLDescription/ProductGridComponent.tsx\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar PCFGridFULLDescription =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PCFGridFULLDescription() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n\n\n  PCFGridFULLDescription.prototype.init = function (context, notifyOutputChanged, state) {\n    this.notifyOutputChanged = notifyOutputChanged;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n\n\n  PCFGridFULLDescription.prototype.updateView = function (context) {\n    var props = {\n      dataset: context.parameters.dataset\n    };\n    return React.createElement(ProductGridComponent_1.ProductGridComponent, props);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  PCFGridFULLDescription.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PCFGridFULLDescription.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return PCFGridFULLDescription;\n}();\n\nexports.PCFGridFULLDescription = PCFGridFULLDescription;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./E360PCFGridFULLDescription/index.ts?");

/***/ }),

/***/ "@fluentui/react/lib/DetailsList":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./E360PCFGridFULLDescription/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Isanka.Thalagala.PCFGridFULLDescription', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFGridFULLDescription);
} else {
	var Isanka = Isanka || {};
	Isanka.Thalagala = Isanka.Thalagala || {};
	Isanka.Thalagala.PCFGridFULLDescription = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFGridFULLDescription;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}