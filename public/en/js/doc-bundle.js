(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CodeMirror"), require("beautifier"), require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["CodeMirror", "beautifier", "Vue"], factory);
	else if(typeof exports === 'object')
		exports["echartsDoc"] = factory(require("CodeMirror"), require("beautifier"), require("Vue"));
	else
		root["echartsDoc"] = factory(root["CodeMirror"], root["beautifier"], root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_codemirror__, __WEBPACK_EXTERNAL_MODULE_js_beautify__, __WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DocNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DocNav.vue */ "./src/components/DocNav.vue");
/* harmony import */ var _components_DocContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DocContent.vue */ "./src/components/DocContent.vue");
/* harmony import */ var _components_Search_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Search.vue */ "./src/components/Search.vue");
/* harmony import */ var _components_SearchResult_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchResult.vue */ "./src/components/SearchResult.vue");
/* harmony import */ var _components_LiveExample_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LiveExample.vue */ "./src/components/LiveExample.vue");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home.vue */ "./src/components/Home.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['docType'],
  data: function data() {
    return {
      shared: _store__WEBPACK_IMPORTED_MODULE_6__["store"]
    };
  },
  computed: {
    pagePath: function pagePath() {
      return Object(_store__WEBPACK_IMPORTED_MODULE_6__["getPagePath"])();
    }
  },
  components: {
    DocNav: _components_DocNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DocContent: _components_DocContent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Search: _components_Search_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchResult: _components_SearchResult_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LiveExample: _components_LiveExample_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Home: _components_Home_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/AppMobile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DocNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DocNav.vue */ "./src/components/DocNav.vue");
/* harmony import */ var _components_DocContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DocContent.vue */ "./src/components/DocContent.vue");
/* harmony import */ var _components_Search_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Search.vue */ "./src/components/Search.vue");
/* harmony import */ var _components_SearchResult_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchResult.vue */ "./src/components/SearchResult.vue");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home.vue */ "./src/components/Home.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['docType'],
  data: function data() {
    return {
      navShown: false,
      shared: _store__WEBPACK_IMPORTED_MODULE_5__["store"]
    };
  },
  computed: {
    pagePath: function pagePath() {
      return Object(_store__WEBPACK_IMPORTED_MODULE_5__["getPagePath"])();
    },
    pagePathParts: function pagePathParts() {
      var parts = this.pagePath.split('.');
      var items = [];
      var link = '';

      for (var i = 0; i < parts.length; i++) {
        if (!link) {
          link += parts[i];
        } else {
          link += '.' + parts[i];
        }

        items.push({
          text: parts[i] + (i === parts.length - 1 ? '' : '.'),
          link: link
        });
      }

      return items;
    }
  },
  methods: {
    showNav: function showNav() {
      this.navShown = true;
    }
  },
  watch: {
    'shared.currentPath': function sharedCurrentPath(newVal) {
      this.navShown = false;
    }
  },
  components: {
    DocNav: _components_DocNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DocContent: _components_DocContent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Search: _components_Search_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchResult: _components_SearchResult_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Home: _components_Home_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docHelper */ "./src/docHelper.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route */ "./src/route.js");
/* harmony import */ var _DocContentItemCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DocContentItemCard.vue */ "./src/components/DocContentItemCard.vue");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LiveExample_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LiveExample.vue */ "./src/components/LiveExample.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DocContentItemCard: _DocContentItemCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LiveExample: _LiveExample_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      loading: false,
      pagePath: '',
      shared: _store__WEBPACK_IMPORTED_MODULE_1__["store"],
      maxDepth: Infinity,
      rootPageDescMap: {},
      // Outline of this page
      pageOutline: {},
      pageDescMap: {}
    };
  },
  computed: {
    pageTitle: function pageTitle() {
      return this.pagePath;
    },
    pageId: function pageId() {
      return Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["convertPathToId"])(this.pagePath);
    },
    pageDesc: function pageDesc() {
      var item = this.rootPageDescMap[this.pagePath] || this.pageDescMap[this.pagePath];
      return item && item.desc; // In mobile.
    },
    pageExamples: function pageExamples() {
      var item = this.rootPageDescMap[this.pagePath] || this.pageDescMap[this.pagePath]; // Return an empty array by default. Or may not trigger it changed.

      return item && item.exampleBaseOptions || [];
    },
    pageDisplayOutline: function pageDisplayOutline() {
      if (!this.shared.isMobile) {
        return this.pageOutline;
      } else {
        return Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getOutlineNode"])(Object(_store__WEBPACK_IMPORTED_MODULE_1__["getPagePath"])());
      }
    },
    showLiveExample: function showLiveExample() {
      return !this.shared.isMobile && Object(_store__WEBPACK_IMPORTED_MODULE_1__["isOptionDoc"])();
    },
    needScrollOffset: function needScrollOffset() {
      return this.shared.showOptionExample && !this.shared.isMobile && this.shared.computedOptionExampleLayout === 'top';
    }
  },
  created: function created() {
    var _this = this;

    // Root page.
    Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getPageTotalDescAsync"])('').then(function (rootPageDescMap) {
      _this.rootPageDescMap = Object.freeze(rootPageDescMap);
    });
    this._lazyload = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a({
      elements_selector: 'iframe',
      load_delay: 300
    });
    this.updateCurrentPath(this.shared.currentPath, true);
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);
    this.resize();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    resize: function resize() {
      var _this2 = this;

      this.shared.optionExampleLayout === 'auto' && Object(_store__WEBPACK_IMPORTED_MODULE_1__["updateOptionExampleLayout"])('auto');
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.nextTick(function () {
        _this2.updateDocContentMargin();
      });
    },
    updateLazyload: function updateLazyload() {
      var _this3 = this;

      // console.log('Update lazy load');
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.nextTick(function () {
        _this3._lazyload.update();
      });
    },
    handleCardExpandToggle: function handleCardExpandToggle() {
      this.updateLazyload();
    },
    scrollTo: function scrollTo(path, time, timeDelay) {
      var _this4 = this;

      // Scroll to.
      setTimeout(function () {
        //let container = store.isMobile ? document.body : this.$el.parentNode;
        var offset = _store__WEBPACK_IMPORTED_MODULE_1__["store"].isMobile ? 100 : 20;

        if (_this4.needScrollOffset) {
          offset += _this4.$refs.liveExample.$el.offsetHeight;
        } // previous usage: document.querySelector('#' + convertPathToId(path))
        // Some special characters like `$` are not allowed in selector when using `document.querySelector`,
        // use `document.getElementById` instead.


        scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default()(document.getElementById(Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["convertPathToId"])(path)), {
          time: time || 400,
          align: {
            top: 0,
            topOffset: offset
          }
        });
      }, timeDelay || 0);
    },
    updateCurrentPath: function updateCurrentPath(newVal, firstTime) {
      var _this5 = this;

      // Handling page count find issue.
      if (newVal) {
        if (!Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getOutlineNode"])(newVal)) {
          // Redirect to default node
          Object(_route__WEBPACK_IMPORTED_MODULE_2__["directTo"])(Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getDefaultPage"])(newVal));
          return;
        }
      } else {
        Object(_route__WEBPACK_IMPORTED_MODULE_2__["directTo"])(Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getDefaultPage"])());
        return;
      }

      var newPagePath = Object(_store__WEBPACK_IMPORTED_MODULE_1__["getPagePath"])();

      if (newPagePath === this.pagePath) {
        // Use title as hash.
        this.scrollTo(newVal);
        return;
      }

      this.loading = true;
      this.pagePath = newPagePath; // Fetch components.

      Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getPageOutlineAsync"])(newVal).then(function (pageOutline) {
        if (pageOutline.isRoot) {
          _this5.maxDepth = 0; // No children
        } else if (_this5.shared.isMobile) {
          _this5.maxDepth = 1; // Only one level
        } else {
          _this5.maxDepth = Infinity;
        }

        return Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getPageTotalDescAsync"])(newVal).then(function (pageDescMap) {
          _this5.pageOutline = Object.freeze(Object.assign({}, pageOutline));
          var newPageDescMap = {};
          var outlineRootName = newVal.split('.')[0];

          for (var key in pageDescMap) {
            // Add key prefix
            // For example: `series-bar.itemStyle` is `itemStyle` in the storage
            newPageDescMap[outlineRootName + '.' + key] = pageDescMap[key];
          }

          _this5.pageDescMap = Object.freeze(newPageDescMap);
          _this5.loading = false;

          _this5.scrollTo(newVal, 600, firstTime ? 300 : 50);

          _this5.updateLazyload();
        });
      })["catch"](function (e) {
        _this5.pageOutline = {};
        _this5.loading = false;
      });
    },
    openOptionExample: function openOptionExample() {
      this.shared.showOptionExample = true;
    },
    updateDocContentMargin: function updateDocContentMargin(isClose) {
      if (!this.$refs.liveExample && !isClose) {
        return;
      } // update margin of doc content


      this.$refs.docContentDom.style.margin = '';

      if (!isClose) {
        var marginDir = this.shared.computedOptionExampleLayout;

        if (marginDir !== 'right') {
          var marginStyleName = 'margin' + marginDir[0].toUpperCase() + marginDir.slice(1);
          var marginValue = this.$refs.liveExample.$el.clientHeight;
          this.$refs.docContentDom.style[marginStyleName] = marginValue + 'px';
        }
      }
    }
  },
  watch: {
    'shared.currentPath': function sharedCurrentPath(newVal) {
      var _this6 = this;

      this.updateCurrentPath(newVal);
      vue__WEBPACK_IMPORTED_MODULE_5___default.a.nextTick(function () {
        _this6.updateDocContentMargin();
      });
    },
    'pageExamples': function pageExamples(newVal) {
      // { code, title, name }
      // TODO: Code switch
      if (newVal && newVal.length) {
        this.shared.allOptionExamples = Object.freeze(newVal);
      } else {
        this.shared.allOptionExamples = null;
      }
    },
    'shared.computedOptionExampleLayout': function sharedComputedOptionExampleLayout() {
      var _this7 = this;

      vue__WEBPACK_IMPORTED_MODULE_5___default.a.nextTick(function () {
        _this7.updateDocContentMargin();
      });
    },
    'shared.showOptionExample': function sharedShowOptionExample(newVal) {
      var _this8 = this;

      vue__WEBPACK_IMPORTED_MODULE_5___default.a.nextTick(function () {
        _this8.updateDocContentMargin(!newVal);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContentItemCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docHelper */ "./src/docHelper.js");
/* harmony import */ var _PropertiesList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertiesList.vue */ "./src/components/PropertiesList.vue");
/* harmony import */ var _OptionControl_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionControl.vue */ "./src/components/OptionControl.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocContentItemCard',
  props: ['nodeData', 'descMap', 'maxDepth', 'depth'],
  components: {
    PropertiesList: _PropertiesList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    OptionControl: _OptionControl_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      manualExpanded: null,
      enableUIControl: false,
      shared: _store__WEBPACK_IMPORTED_MODULE_3__["store"]
    };
  },
  watch: {
    enableUIControl: function enableUIControl(newVal) {
      if (!newVal) {
        this.shared.currentExampleOption = Object.freeze(Object(_store__WEBPACK_IMPORTED_MODULE_3__["changeOption"])(this.shared.currentExampleOption, this.nodeData.path, undefined));
      } else {
        // Let container scroll to the path because layout may be changed
        // after control is open.
        if (!this.shared.showOptionExample) {
          this.$emit('scroll-to-self', this.nodeData.path, 300, 100);
        }

        this.shared.showOptionExample = true;
      }
    },
    'shared.currentExampleName': function sharedCurrentExampleName(newVal, oldVal) {
      // Reset after example changed.
      // NOTE: it may be the first time example panel is opened. So need to check the old value.
      if (newVal && oldVal) {
        this.enableUIControl = false;
      }
    }
  },
  computed: {
    itemId: function itemId() {
      return Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["convertPathToId"])(this.nodeData.path);
    },
    expanded: function expanded() {
      // Expanded at most 2 level.
      if (this.isLeaf) {
        return false;
      } else if (this.manualExpanded != null) {
        return this.manualExpanded;
      } else {
        // Default expanded logic
        var parts = this.nodeData.path.split('.');
        return this.depth < 2 && _config__WEBPACK_IMPORTED_MODULE_4__["PROPERTIES_NOT_EXPAND"].indexOf(parts.pop()) < 0 || _store__WEBPACK_IMPORTED_MODULE_3__["store"].currentPath.indexOf(this.nodeData.path) >= 0;
      }
    },
    isLeaf: function isLeaf() {
      return !(this.nodeData.children && this.nodeData.children.length);
    },
    supportsExpandable: function supportsExpandable() {
      return this.depth + 1 <= this.maxDepth && !this.isLeaf;
    },
    desc: function desc() {
      var descItem = this.descMap[this.nodeData.path];
      return descItem && descItem.desc;
    },
    uiControl: function uiControl() {
      var descItem = this.descMap[this.nodeData.path];
      return descItem && descItem.uiControl;
    },
    parentPath: function parentPath() {
      var parts = this.nodeData.path.split('.');
      var items = [];
      var link = '';

      for (var i = 0; i < parts.length - 1; i++) {
        if (!link) {
          link += parts[i];
        } else {
          link += '.' + parts[i];
        }

        items.push({
          text: parts[i],
          link: link
        });
      }

      return items;
    },
    baseName: function baseName() {
      return {
        text: this.nodeData.path.split('.').pop(),
        link: this.nodeData.path
      };
    }
  },
  methods: {
    bubbleEventToggleExapndedEvent: function bubbleEventToggleExapndedEvent() {
      this.$emit('toggle-expanded');
    },
    toggleExpanded: function toggleExpanded() {
      this.manualExpanded = !this.expanded;
      this.$emit('toggle-expanded');
    },
    toggleUIControl: function toggleUIControl() {
      this.enableUIControl = !this.enableUIControl;
    },
    bubbleScrollToSelfEvent: function bubbleScrollToSelfEvent(path, time, delay) {
      this.$emit('scroll-to-self', path, time, delay);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: createChildren, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChildren", function() { return createChildren; });
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docHelper */ "./src/docHelper.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route */ "./src/route.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function joinPath(a, b, connector) {
  return a ? a + connector + b : b;
}

function createChildren(currentNode, currentSource) {
  function createNode(source, parentNode) {
    var childNode = {
      // type: source.type,
      path: source.path
    };
    childNode.path = source.path;

    if (source.arrayItemType) {
      childNode.label = "{type: ".concat(source.arrayItemType, ", ...}");
      childNode.labelExpanded = '{';
    } // Array also may has properties.
    else if (source["default"] != null) {
        childNode.defaultValue = source["default"]; // Leave the space to show default value.

        childNode.label = source.prop + ': ';
        childNode.leaf = true;
      } else if (source.isArray) {
        childNode.label = source.prop + ': [{...}]';
        childNode.labelExpanded = source.prop + ': [{';
      } else if (source.isObject) {
        childNode.label = source.prop + ': {...}';
        childNode.labelExpanded = source.prop + ': {';
      } else {
        childNode.label = source.prop;
        childNode.leaf = true;
      } // TODO. A better way to query source. Avoid `ref` and `freeze`


    childNode.$source = Object.freeze(source);
    return childNode;
  }

  var children = [];

  if (currentSource.children) {
    currentSource.children.forEach(function (childSource) {
      children.push(createNode(childSource, currentNode));
    });
  }

  return children;
}
;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      props: {
        isLeaf: 'leaf'
      },
      title: 'setOption({',
      treeData: [],
      expandedKeys: [],
      loading: true,
      shared: _store__WEBPACK_IMPORTED_MODULE_1__["store"],
      initialSelectedNode: _store__WEBPACK_IMPORTED_MODULE_1__["store"].currentPath
    };
  },
  created: function created() {
    this.updateTreeSelectionAndExpand();
  },
  computed: {
    isOption: function isOption() {
      return Object(_store__WEBPACK_IMPORTED_MODULE_1__["isOptionDoc"])();
    }
  },
  methods: {
    updateTreeSelectionAndExpand: function updateTreeSelectionAndExpand() {
      this.expandedKeys = []; // Expand parent node of selected and ancestor nodes.

      var ancestorPath = this.shared.currentPath;
      var idx;

      while ((idx = ancestorPath.lastIndexOf('.')) >= 0 || (idx = ancestorPath.lastIndexOf('-')) >= 0) {
        ancestorPath = ancestorPath.substr(0, idx);
        this.expandedKeys.push(ancestorPath);
      }
    },
    loadTreeNode: function loadTreeNode(node, resolve) {
      var _this = this;

      // Root node
      if (node.level === 0) {
        this.loading = false;
        Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getOutlineAsync"])().then(function (source) {
          resolve(createChildren(node.data, source)); // Scroll to current node.
          // FIXME Side effect.

          setTimeout(function () {
            _this.scrollToCurrentTreeNode();
          }, 200);
        });
      } else if (node.data.children && node.data.children.length) {
        resolve(node.data.children);
      } else if (node.data.$source) {
        resolve(createChildren(node.data, node.data.$source));
      } else {
        resolve([]);
      }
    },
    onSelectNode: function onSelectNode(nodeData, node) {
      this.shared.currentPath = nodeData.path;
    },
    scrollToCurrentTreeNode: function scrollToCurrentTreeNode() {
      var node = this.$el.querySelector('.el-tree-node.is-current');

      if (node) {
        var nodeRect = node.getBoundingClientRect();
        var rootRect = this.$el.getBoundingClientRect();

        if (nodeRect.top > rootRect.bottom || nodeRect.bottom < rootRect.top) {
          // Not visible
          // node.scrollIntoView(true, {
          //     behavior: 'smooth'
          // });
          scroll_into_view__WEBPACK_IMPORTED_MODULE_4___default()(node, {
            time: 500,
            align: {
              top: 0.1
            }
          });
        }
      }
    },
    manualSelectNode: function manualSelectNode(nodePath) {
      var _this2 = this;

      this.updateTreeSelectionAndExpand(); // Highlight after all expanded nodes loaded.

      setTimeout(function () {
        // Cancel previous selection
        _this2.$refs.tree.setCurrentKey(null);

        _this2.$refs.tree.setCurrentKey(nodePath);

        setTimeout(function () {
          // Scroll to selected node after set.
          _this2.scrollToCurrentTreeNode();
        }, 200);
      }, 50);
    },
    collapseAll: function collapseAll() {
      for (var key in this.$refs.tree.store.nodesMap) {
        this.$refs.tree.store.nodesMap[key].expanded = false;
      }
    }
  },
  watch: {
    'shared.currentPath': function sharedCurrentPath(newVal) {
      Object(_route__WEBPACK_IMPORTED_MODULE_3__["directTo"])(newVal);
      this.manualSelectNode(newVal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LiveExample.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror */ "codemirror");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/theme/dracula.css */ "./node_modules/codemirror/theme/dracula.css");
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-beautify */ "js-beautify");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zrender_lib_core_arrayDiff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zrender/lib/core/arrayDiff */ "./node_modules/zrender/lib/core/arrayDiff.js");
/* harmony import */ var zrender_lib_core_arrayDiff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zrender_lib_core_arrayDiff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑


 // import 'codemirror/theme/paraiso-dark.css';

 // import 'codemirror/mode/javascript/javascript.js'






var echartsLoadPromise;

function fetchECharts() {
  return echartsLoadPromise || (echartsLoadPromise = new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = _config__WEBPACK_IMPORTED_MODULE_8__["ECHARTS_LIB"];
    script.async = true;

    script.onload = function () {
      resolve();
      echartsLoadPromise = null;
    };

    document.body.appendChild(script);
  }));
}

function diffUpdateCode(oldCode, newCode, cmInstance) {
  var oldLines = oldCode.split(/\n/);
  var newLines = newCode.split(/\n/);
  var diff = zrender_lib_core_arrayDiff__WEBPACK_IMPORTED_MODULE_6___default()(oldLines, newLines);
  var changedLines = []; // Remove lines from bottom to top so the line number won't be changed.

  for (var i = diff.length - 1; i >= 0; i--) {
    var item = diff[i];

    if (item.removed) {
      for (var k = item.count - 1; k >= 0; k--) {
        var idx = item.indices[k];
        cmInstance.replaceRange('', {
          line: idx,
          ch: 0
        }, {
          line: idx + 1,
          ch: 0
        });
      }
    }
  }

  for (var _i = 0; _i < diff.length; _i++) {
    var _item = diff[_i];

    if (_item.added) {
      for (var _k = 0; _k < _item.count; _k++) {
        var _idx = _item.indices[_k];
        cmInstance.replaceRange(newLines[_idx] + '\n', {
          line: _idx,
          ch: 0
        });
        changedLines.push(_idx);
      }
    }
  }

  changedLines.forEach(function (idx) {
    cmInstance.addLineClass(idx, 'wrap', 'option-changed');
  });

  if (diff.length) {
    setTimeout(function () {
      cmInstance.scrollIntoView({
        line: changedLines[0],
        ch: 0
      }, cmInstance.getWrapperElement().clientHeight - 50);
    }, 20);
  }

  return changedLines;
}

function updateOption(option, isRefreshForce) {
  var _this = this;

  if (this.shared.currentExampleName !== this.lastUpdateExampleName) {
    this.lastUpdateExampleName = this.shared.currentExampleName; // Refresh all if example base option is changed.

    this.refreshForce();
    return;
  }

  var viewport = this.$el.querySelector('.preview-main');

  if (!viewport) {
    return;
  } // Clear error msg.


  this.hasError = false;

  if (typeof echarts === 'undefined') {
    // TODO Put fetch charts when component is initialized.
    fetchECharts().then(function () {
      if (!_this.echartsInstance) {
        _this.chartInstance = echarts.init(viewport);
      }

      if (_this.shared.cleanMode) {
        _this.chartInstance.clear();
      }

      _this.chartInstance.setOption(option, true);
    });
  } else {
    if (!this.echartsInstance) {
      this.chartInstance = echarts.init(viewport);
    }

    try {
      if (this.shared.cleanMode) {
        this.chartInstance.clear();
      }

      this.chartInstance.setOption(option, true);
    } catch (e) {
      // 一些属性切换的时候可能会出现一些位置的错误
      console.error(e);
      this.hasError = true;
    }
  }

  if (!this.cmInstance) {
    this.cmInstance = codemirror__WEBPACK_IMPORTED_MODULE_1___default()(this.$el.querySelector('.codemirror-main'), {
      value: this.formattedOptionCodeStr,
      mode: 'javascript',
      // theme: 'paraiso-dark',
      theme: 'dracula',
      readOnly: true
    });
  } else {
    // TODO: Highlight the diff lines.
    // TODO: Only change the changed line. optimize
    var oldCode = this.cmInstance.getValue();
    var newCode = this.formattedOptionCodeStr;

    if (this.oldHighlightedLines) {
      this.oldHighlightedLines.forEach(function (idx) {
        _this.cmInstance.removeLineClass(idx, 'wrap', 'option-changed');
      });
    }

    if (!isRefreshForce) {
      this.oldHighlightedLines = diffUpdateCode(oldCode, newCode, this.cmInstance);
    } else {
      this.cmInstance.setValue(newCode);
      this.oldHighlightedLines = [];
    }
  }

  this.lastUpdateExampleName = this.shared.currentExampleName;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shared: _store__WEBPACK_IMPORTED_MODULE_0__["store"],
      hasError: false,
      lastUpdateExampleName: '',
      oldHighlightedLines: [],
      showChangeLayoutPopover: false,
      optionExampleLayouts: _store__WEBPACK_IMPORTED_MODULE_0__["optionExampleLayouts"]
    };
  },
  mounted: function mounted() {
    // TODO use css?
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);
    this.resize();

    if (this.shared.currentExampleOption) {
      this.updateOptionThrottled(this.shared.currentExampleOption);
    }

    if (this.shared.allOptionExamples) {
      this.shared.currentExampleName = this.shared.allOptionExamples[0].name;
    } else {
      this.shared.currentExampleName = '';
    }
  },
  destroyed: function destroyed() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }

    window.removeEventListener('resize', this.resize);
  },
  watch: {
    'shared.currentExampleOption': function sharedCurrentExampleOption(newVal) {
      if (newVal) {
        this.updateOptionThrottled(newVal);
      }
    },
    'shared.allOptionExamples': function sharedAllOptionExamples(newVal) {
      // Use the first example as default.
      if (newVal) {
        this.shared.currentExampleName = newVal[0].name;
      } else {
        this.shared.currentExampleName = '';
      }
    },
    'shared.currentExampleName': function sharedCurrentExampleName(newVal) {
      this.changeExample(newVal);
    }
  },
  methods: {
    updateOption: updateOption,
    updateOptionThrottled: lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default()(updateOption, 300, {
      leading: false
    }),
    resize: function resize() {
      var examplePanel = this.$el;
      var previewMain = examplePanel.querySelector('.preview-main');

      if (this.shared.computedOptionExampleLayout !== 'right') {
        examplePanel.style.height = window.innerHeight * 0.5 - 60 + 'px';
        examplePanel.style.width = 'auto';
      } else {
        examplePanel.style.width = examplePanel.parentNode.clientWidth * 0.45 + 'px';
        examplePanel.style.height = 'auto';
      }

      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    },
    refreshForce: function refreshForce() {
      // Dispose first
      if (this.shared.currentExampleOption) {
        if (this.chartInstance) {
          this.chartInstance.dispose();
          this.chartInstance = null;
        }

        this.updateOption(this.shared.currentExampleOption, true);
      }
    },
    closeExamplePanel: function closeExamplePanel() {
      this.shared.showOptionExample = false;
    },
    changeExample: function changeExample(exampleName) {
      var example = this.shared.allOptionExamples && this.shared.allOptionExamples.find(function (item) {
        return item.name === exampleName;
      });

      if (!example) {
        this.shared.currentExampleOption = null;
        return false;
      }

      var code = example.code;

      try {
        var func = new Function(code + '\n return option');
        this.shared.currentExampleOption = Object.freeze(func());
      } catch (e) {
        console.error(e);
        console.log(code);
      }
    },
    changeLayout: function changeLayout(layout) {
      var _this2 = this;

      this.showChangeLayoutPopover = false;
      Object(_store__WEBPACK_IMPORTED_MODULE_0__["updateOptionExampleLayout"])(layout);
      this.$nextTick(function () {
        _this2.resize();
      });
    }
  },
  computed: {
    optionCodeStr: function optionCodeStr() {
      var optStr = JSON.stringify(this.shared.currentExampleOption, function (key, value) {
        if (typeof value === 'function') {
          return "__functionstart__" + value.toString().replace(/\n/g, '__newline__') // avoid \n being escaped by JSON.stringify
          + "__functionend__";
        }

        return value;
      });
      return "option = ".concat(optStr);
    },
    formattedOptionCodeStr: function formattedOptionCodeStr() {
      return js_beautify__WEBPACK_IMPORTED_MODULE_4___default.a.js(this.optionCodeStr.replace(/"(\w+)"\s*:/g, '$1:').replace(/"__functionstart__/g, "").replace(/__functionend__"/g, "") // newline from function
      .replace(/__newline__/g, '\n'), {
        indent_size: 2
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OptionControl.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_ControlColor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/ControlColor.vue */ "./src/controls/ControlColor.vue");
/* harmony import */ var _controls_ControlBoolean_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/ControlBoolean.vue */ "./src/controls/ControlBoolean.vue");
/* harmony import */ var _controls_ControlNumber_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/ControlNumber.vue */ "./src/controls/ControlNumber.vue");
/* harmony import */ var _controls_ControlVector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/ControlVector.vue */ "./src/controls/ControlVector.vue");
/* harmony import */ var _controls_ControlEnum_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/ControlEnum.vue */ "./src/controls/ControlEnum.vue");
/* harmony import */ var _controls_ControlPercent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/ControlPercent.vue */ "./src/controls/ControlPercent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _controls_ControlPercentVector_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controls/ControlPercentVector.vue */ "./src/controls/ControlPercentVector.vue");
/* harmony import */ var _controls_ControlText_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls/ControlText.vue */ "./src/controls/ControlText.vue");
/* harmony import */ var _controls_ControlIcon_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../controls/ControlIcon.vue */ "./src/controls/ControlIcon.vue");
//
//
//
//
//
//
//
//
//
//
//










var uiComponentMap = {
  "boolean": _controls_ControlBoolean_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  color: _controls_ControlColor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  number: _controls_ControlNumber_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  vector: _controls_ControlVector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  "enum": _controls_ControlEnum_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  // Use number for angle temporary
  angle: _controls_ControlNumber_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  percent: _controls_ControlPercent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
  percentvector: _controls_ControlPercentVector_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
  text: _controls_ControlText_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
  icon: _controls_ControlIcon_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
};
var uiComponentDefault = {
  "boolean": function boolean() {
    return false;
  },
  color: function color() {
    return null;
  },
  number: function number() {
    return 0;
  },
  angle: function angle() {
    return 0;
  },
  percent: function percent() {
    return '50';
  },
  "enum": function _enum(controlConfig) {
    return controlConfig.options.split(',')[0].trim();
  },
  vector: function vector(conntrolConfig) {
    if (!conntrolConfig.dims) {
      throw new Error('Must specify dims in vector');
    }

    return conntrolConfig.dims.split(',').map(function (dim) {
      return 0;
    }).join(',');
  },
  percentvector: function percentvector(conntrolConfig) {
    if (!conntrolConfig.dims) {
      throw new Error('Must specify dims in vector');
    }

    return conntrolConfig.dims.split(',').map(function (dim) {
      return '50%';
    }).join(',');
  }
};

function omitTypeAndDefault(obj) {
  var newObj = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'type' && key !== 'default') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OptionControl',
  props: ['controlConfig', 'optionPath'],
  data: function data() {
    return {
      shared: _store__WEBPACK_IMPORTED_MODULE_6__["store"]
    };
  },
  computed: {
    uiComponent: function uiComponent() {
      return uiComponentMap[this.controlConfig.type];
    },
    uiAttrs: function uiAttrs() {
      return omitTypeAndDefault(this.controlConfig);
    },
    defaultValue: function defaultValue() {
      var controlConfig = this.controlConfig;
      return controlConfig["default"] != null ? controlConfig["default"] : uiComponentDefault[controlConfig.type] && uiComponentDefault[controlConfig.type](controlConfig);
    }
  },
  methods: {
    onValueChange: function onValueChange(value) {
      // If clean before setOption.
      this.shared.cleanMode = this.controlConfig.clean; // console.log(this.optionPath, value);

      if (this.shared.currentExampleOption) {
        this.shared.currentExampleOption = Object.freeze(Object(_store__WEBPACK_IMPORTED_MODULE_6__["changeOption"])(this.shared.currentExampleOption, this.optionPath, value));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['nodeData', 'descMap'],
  data: function data() {
    return {
      shared: _store__WEBPACK_IMPORTED_MODULE_0__["store"]
    };
  },
  computed: {
    displayedProperties: function displayedProperties() {
      return this.nodeData.children;
    }
  },
  methods: {
    getDesc: function getDesc(path) {
      return this.descMap[path] && this.descMap[path].desc;
    },
    getName: function getName(path) {
      return path.split('.').pop();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Search.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docHelper */ "./src/docHelper.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route */ "./src/route.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var MAX_SUGGESTIONS = 100;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      queryString: _store__WEBPACK_IMPORTED_MODULE_0__["store"].searchQuery,
      shared: _store__WEBPACK_IMPORTED_MODULE_0__["store"]
    };
  },
  computed: {},
  methods: {
    searchOptions: function searchOptions(queryString, cb) {
      if (!queryString) {
        cb([]);
        return;
      }

      Object(_docHelper__WEBPACK_IMPORTED_MODULE_1__["searchOutlineAsync"])(queryString, MAX_SUGGESTIONS).then(function (lists) {
        cb(lists);
      });
    },
    selectPath: function selectPath(item) {
      this.shared.currentPath = item.path;
    },
    fuzzySearch: function fuzzySearch() {
      this.shared.searchQuery = this.queryString;
      Object(_route__WEBPACK_IMPORTED_MODULE_2__["directTo"])('/search/' + this.shared.searchQuery);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResult.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docHelper */ "./src/docHelper.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route */ "./src/route.js");
/* harmony import */ var _SearchResultItemCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchResultItemCard.vue */ "./src/components/SearchResultItemCard.vue");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function updateSearchResultsImmediate(searchQuery) {
  var _this = this;

  console.log('Searching, ', searchQuery);
  this.searchResult = [];
  this.searchResultCount = 0;
  this.displayResultCount = 0;
  this["static"].searchResult.cache = {};
  this.searchToken = Date.now() + '';
  var searchToken = this.searchToken;
  Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["searchAllAsync"])(searchQuery, function (results) {
    // Query changed.
    if (searchToken !== _this.searchToken) {
      return;
    }

    if (!_this.noLimit && _this.displayResultCount <= _this.limitedResultCount) {
      for (var i = 0; i < results.length; i++) {
        var groupKey = results[i].text; // Group results.

        var similarResult = _this["static"].searchResult.cache[groupKey];

        if (similarResult) {
          similarResult.similarPaths.push(results[i].path);
        } else {
          var obj = Object.freeze({
            path: results[i].path,
            content: results[i].content,
            similarPaths: []
          });

          _this.searchResult.push(obj);

          _this["static"].searchResult.cache[groupKey] = obj;
        }
      }

      _this.displayResultCount += results.length;
    }

    _this.searchResultCount += results.length;
  }).then(function () {
    _this.searchToken = '';
  })["catch"](function () {
    _this.searchToken = '';
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SearchResultItemCard: _SearchResultItemCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      searchResult: [],
      searchResultCount: 0,
      displayResultCount: 0,
      noLimit: false,
      limitedResultCount: 200,
      searchToken: '',
      "static": Object.freeze({
        searchResult: {
          cache: null
        }
      }),
      shared: _store__WEBPACK_IMPORTED_MODULE_1__["store"]
    };
  },
  created: function created() {
    this.updateSearchResultsImmediate(this.shared.searchQuery);
  },
  methods: {
    updateSearchResultsImmediate: updateSearchResultsImmediate,
    updateSearchResults: lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(updateSearchResultsImmediate, 500, {
      leading: false
    })
  },
  watch: {
    'shared.searchQuery': function sharedSearchQuery(newVal) {
      this.updateSearchResults(newVal);
      Object(_route__WEBPACK_IMPORTED_MODULE_2__["directTo"])('/search/' + this.shared.searchQuery);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResultItemCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['itemData', 'searchQuery'],
  data: function data() {
    return {
      needsShowMoreDesc: true
    };
  },
  methods: {
    showMore: function showMore() {
      this.needsShowMoreDesc = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    vue__WEBPACK_IMPORTED_MODULE_0___default.a.nextTick(function () {
      var descNode = _this.$el.querySelector('.item-description');

      _this.needsShowMoreDesc = descNode.scrollHeight !== descNode.clientHeight;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlBoolean.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlBoolean.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  data: function data() {
    return {
      innerValue: this.value === 'true'
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.innerValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlColor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  data: function data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.innerValue);
    },
    onActiveChange: function onActiveChange(val) {// this.innerValue = val;
      // this.$emit('change', val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlEnum.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
// Convert to special value.
var _specialValues = {
  'true': true,
  'false': false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value', 'options'],
  computed: {
    optionsArr: function optionsArr() {
      return this.options.split(',').map(function (item) {
        return item.trim();
      });
    },
    specialValues: function specialValues() {
      return _specialValues;
    }
  },
  data: function data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', _specialValues.hasOwnProperty(this.innerValue) ? _specialValues[this.innerValue] : this.innerValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: parseXML, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseXML", function() { return parseXML; });
/* harmony import */ var _dep_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dep/flatten */ "./src/dep/flatten.js");
//
//
//
//
//
//
//
//
//
//
//
//

function parseXML(svgStr) {
  var parser = new DOMParser();
  var svg = parser.parseFromString(svgStr, 'text/xml');
  var svgNode = svg; // Document node. If using $.get, doc node may be input.

  if (svgNode.nodeType === 9) {
    svgNode = svgNode.firstChild;
  } // nodeName of <!DOCTYPE svg> is also 'svg'.


  while (svgNode.nodeName.toLowerCase() !== 'svg' || svgNode.nodeType !== 1) {
    svgNode = svgNode.nextSibling;
  }

  return svgNode;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  computed: {
    optionsArr: function optionsArr() {
      return ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'];
    }
  },
  data: function data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.innerValue);
    },
    chooseFile: function chooseFile() {
      var _this = this;

      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.jpg, .jpeg, .png, .svg';
      input.addEventListener('change', function (e) {
        var file = e.target.files[0];

        if (!file) {
          return;
        }

        if (file.name.endsWith('.svg')) {
          // read path
          // Use image
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function () {
            var svgStr = fileReader.result;
            var svg = parseXML(svgStr);

            try {
              Object(_dep_flatten__WEBPACK_IMPORTED_MODULE_0__["flatten"])(svg);
            } catch (e) {
              console.error('Unexpected error happens when handling the SVG.');
              console.error(e.toString());
            }

            var paths = svg.querySelectorAll('path');
            var defs = [];

            for (var i = 0; i < paths.length; i++) {
              defs.push(paths[i].getAttribute('d'));
            }

            _this.$emit('change', 'path://' + defs.join(' '));
          });
          fileReader.readAsText(file);
        } else {
          // Use image
          var _fileReader = new FileReader();

          _fileReader.addEventListener('load', function () {
            _this.$emit('change', 'image://' + _fileReader.result);
          });

          _fileReader.readAsDataURL(file);
        }
      });
      input.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlNumber.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value', 'min', 'max', 'step'],
  data: function data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.innerValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value', 'min', 'max', 'step'],
  data: function data() {
    var isAbsolute = this.value.indexOf('%') < 0;
    return {
      percentValue: isAbsolute ? 50 : +this.value.replace('%', ''),
      absoluteValue: isAbsolute ? +this.value : 0,
      mode: isAbsolute ? 'absolute' : 'percent'
    };
  },
  watch: {
    value: function value(val) {
      if (this.mode === 'absolute') {
        this.absoluteValue = +val;
      } else {
        this.percentValue = +val.replace('%', '');
      }
    },
    mode: function mode() {
      // Emit after mode changed.
      this.onValueChange();
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.mode === 'absolute' ? this.absoluteValue : this.percentValue + '%');
    },
    formatTooltip: function formatTooltip(val) {
      return val + '%';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercentVector.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlPercent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlPercent.vue */ "./src/controls/ControlPercent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ControlPercent: _ControlPercent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['value', 'min', 'max', "step", 'dims'],
  data: function data() {
    return {
      innerValueArr: this.value.split(',').map(function (val) {
        return val.trim();
      })
    };
  },
  computed: {
    dimsArr: function dimsArr() {
      return this.dims.split(',').map(function (dim) {
        return dim.trim();
      });
    }
  },
  watch: {
    value: function value(newVal) {
      this.innerValueArr = this.value.split(',').map(function (val) {
        return val.trim();
      });
    }
  },
  methods: {
    onValueChange: function onValueChange(index, value) {
      this.innerValueArr[index] = value;
      this.$emit('change', this.innerValueArr.slice());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlText.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlText.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  data: function data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.innerValue = val;
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      this.$emit('change', this.innerValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlVector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value', 'separate', 'min', 'max', "step", 'dims'],
  data: function data() {
    return {
      innerSeparate: this.separate === 'true',
      innerValueArr: this.value.split(',').map(function (val) {
        return +val.trim();
      })
    };
  },
  computed: {
    dimsArr: function dimsArr() {
      return this.dims.split(',').map(function (dim) {
        return dim.trim();
      });
    }
  },
  watch: {
    value: function value(newVal) {
      this.innerValueArr = this.value.split(',').map(function (val) {
        return +val.trim();
      });
    }
  },
  methods: {
    onValueChange: function onValueChange() {
      if (!this.innerSeparate) {
        for (var i = 1; i < this.innerValueArr.length; i++) {
          this.innerValueArr[i] = this.innerValueArr[0];
        }
      }

      this.$emit('change', this.innerValueArr.slice());
    }
  }
});

/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/codemirror/theme/dracula.css":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/theme/dracula.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/highlight.js/lib/highlight.js":
/*!****************************************************!*\
  !*** ./node_modules/highlight.js/lib/highlight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  // `nodeType` is checked to ensure that `exports` is not a HTML element.
  if( true && !exports.nodeType) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return globalObject.hljs;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  var SAFE_MODE = true;

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  // The object will be assigned by the build tool. It used to synchronize API
  // of external language files with minified version of the highlight.js library.
  var API_REPLACES;

  var spanEndTag = '</span>';
  var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  // keywords that should have no default relevance value
  var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      var language = getLanguage(match[1]);
      if (!language) {
        console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        console.warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  /**
   * performs a shallow merge of multiple objects into one
   *
   * @arguments list of objects with properties to merge
   * @returns a single new object
   */
  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace(/"/g, '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function dependencyOnParent(mode) {
    if (!mode) return false;

    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }

  function expand_or_clone_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }

    // EXPAND
    // if we have variants then essentially "replace" the mode with the variants
    // this happens in compileMode, where this function is called from
    if (mode.cached_variants)
      return mode.cached_variants;

    // CLONE
    // if we have dependencies on parents then we need a unique
    // instance of ourselves, so we can be reused with many
    // different parents without issue
    if (dependencyOnParent(mode))
      return [inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null })];

    if (Object.isFrozen(mode))
      return [inherit(mode)];

    // no special dependency issues, just return ourselves
    return [mode];
  }

  function restoreLanguageApi(obj) {
    if(API_REPLACES && !obj.langApiRestored) {
      obj.langApiRestored = true;
      for(var key in API_REPLACES) {
        if (obj[key]) {
          obj[API_REPLACES[key]] = obj[key];
        }
      }
      (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
    }
  }

  function compileKeywords(rawKeywords, case_insensitive) {
      var compiled_keywords = {};

      if (typeof rawKeywords === 'string') { // string
        splitAndCompile('keyword', rawKeywords);
      } else {
        objectKeys(rawKeywords).forEach(function (className) {
          splitAndCompile(className, rawKeywords[className]);
        });
      }
    return compiled_keywords;

    // ---

    function splitAndCompile(className, str) {
      if (case_insensitive) {
        str = str.toLowerCase();
      }
      str.split(' ').forEach(function(keyword) {
        var pair = keyword.split('|');
        compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }

  function scoreForKeyword(keyword, providedScore) {
    // manual scores always win over common keywords
    // so you can force a score of 1 if you really insist
    if (providedScore)
      return Number(providedScore);

    return commonKeyword(keyword) ? 0 : 1;
  }

  function commonKeyword(word) {
    return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function reCountMatchGroups(re) {
      return (new RegExp(re.toString() + '|')).exec('').length - 1;
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    // it also places each individual regular expression into it's own
    // match group, keeping track of the sequencing of those match groups
    // is currently an exercise for the caller. :-)
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        numCaptures += 1;
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        ret += "(";
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
        ret += ")";
      }
      return ret;
    }

    function buildModeRegex(mode) {

      var matchIndexes = {};
      var matcherRe;
      var regexes = [];
      var matcher = {};
      var matchAt = 1;

      function addRule(rule, regex) {
        matchIndexes[matchAt] = rule;
        regexes.push([rule, regex]);
        matchAt += reCountMatchGroups(regex) + 1;
      }

      var term;
      for (var i=0; i < mode.contains.length; i++) {
        var re;
        term = mode.contains[i];
        if (term.beginKeywords) {
          re = '\\.?(?:' + term.begin + ')\\.?';
        } else {
          re = term.begin;
        }
        addRule(term, re);
      }
      if (mode.terminator_end)
        addRule("end", mode.terminator_end);
      if (mode.illegal)
        addRule("illegal", mode.illegal);

      var terminators = regexes.map(function(el) { return el[1]; });
      matcherRe = langRe(joinRe(terminators, '|'), true);

      matcher.lastIndex = 0;
      matcher.exec = function(s) {
        var rule;

        if( regexes.length === 0) return null;

        matcherRe.lastIndex = matcher.lastIndex;
        var match = matcherRe.exec(s);
        if (!match) { return null; }

        for(var i = 0; i<match.length; i++) {
          if (match[i] != undefined && matchIndexes["" +i] != undefined ) {
            rule = matchIndexes[""+i];
            break;
          }
        }

        // illegal or end match
        if (typeof rule === "string") {
          match.type = rule;
          match.extra = [mode.illegal, mode.terminator_end];
        } else {
          match.type = "begin";
          match.rule = rule;
        }
        return match;
      };

      return matcher;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords)
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);

      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_or_clone_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      mode.terminators = buildModeRegex(mode);
    }

    // self is not valid at the top-level
    if (language.contains && language.contains.indexOf('self') != -1) {
      if (!SAFE_MODE) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
      } else {
        // silently remove the broken rule (effectively ignoring it), this has historically
        // been the behavior in the past, so this removal preserves compatibility with broken
        // grammars when running in Safe Mode
        language.contains = language.contains.filter(function(mode) { return mode != 'self'; });
      }
    }
    compileMode(language);
  }


  /**
   * Core highlighting function.
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} ignore_illegals - whether to ignore illegal matches, default is to bail
   * @param {array<mode>} continuation - array of continuation modes
   *
   * @returns an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {mode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(languageName, code, ignore_illegals, continuation) {
    var codeToHighlight = code;

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(className, insideSpan, leaveOpen, noPrefix) {
      if (!leaveOpen && insideSpan === '') return '';
      if (!className) return insideSpan;

      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += className + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }


    function doBeginMatch(match) {
      var lexeme = match[0];
      var new_mode = match.rule;

      if (new_mode && new_mode.endSameAsBegin) {
        new_mode.endRe = escapeRe( lexeme );
      }

      if (new_mode.skip) {
        mode_buffer += lexeme;
      } else {
        if (new_mode.excludeBegin) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
          mode_buffer = lexeme;
        }
      }
      startNewMode(new_mode);
      return new_mode.returnBegin ? 0 : lexeme.length;
    }

    function doEndMatch(match) {
      var lexeme = match[0];
      var matchPlusRemainder = codeToHighlight.substr(match.index);
      var end_mode = endOfMode(top, matchPlusRemainder);
      if (!end_mode) { return; }

      var origin = top;
      if (origin.skip) {
        mode_buffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          mode_buffer = lexeme;
        }
      }
      do {
        if (top.className) {
          result += spanEndTag;
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== end_mode.parent);
      if (end_mode.starts) {
        if (end_mode.endSameAsBegin) {
          end_mode.starts.endRe = end_mode.endRe;
        }
        startNewMode(end_mode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    var lastMatch = {};
    function processLexeme(text_before_match, match) {

      var lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      mode_buffer += text_before_match;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type=="begin" && match.type=="end" && lastMatch.index == match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
        return 1;
      }
      lastMatch = match;

      if (match.type==="begin") {
        return doBeginMatch(match);
      } else if (match.type==="illegal" && !ignore_illegals) {
        // illegal match, we do not continue processing
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
      } else if (match.type==="end") {
        var processed = doEndMatch(match);
        if (processed != undefined)
          return processed;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      mode_buffer += lexeme;
      return lexeme.length;
    }

    var language = getLanguage(languageName);
    if (!language) {
      console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(codeToHighlight);
        if (!match)
          break;
        count = processLexeme(codeToHighlight.substring(index, match.index), match);
        index = match.index + count;
      }
      processLexeme(codeToHighlight.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        illegal:false,
        language: languageName,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.indexOf('Illegal') !== -1) {
        return {
          illegal: true,
          relevance: 0,
          value: escape(codeToHighlight)
        };
      } else if (SAFE_MODE) {
        return {
          relevance: 0,
          value: escape(codeToHighlight),
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(code)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, code, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    if (!(options.tabReplace || options.useBR)) {
      return value;
    }

    return value.replace(fixMarkupRe, function(match, p1) {
        if (options.useBR && match === '\n') {
          return '<br>';
        } else if (options.tabReplace) {
          return p1.replace(/\t/g, options.tabReplace);
        }
        return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElement('div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElement('div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
    window.addEventListener('load', initHighlighting, false);
  }

  var PLAINTEXT_LANGUAGE = { disableAutodetect: true };

  function registerLanguage(name, language) {
    var lang;
    try { lang = language(hljs); }
    catch (error) {
      console.error("Language definition for '{}' could not be registered.".replace("{}", name));
      // hard or soft error
      if (!SAFE_MODE) { throw error; } else { console.error(error); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    languages[name] = lang;
    restoreLanguageApi(lang);
    lang.rawDefinition = language.bind(null,hljs);

    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  /*
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.
  */
  function requireLanguage(name) {
    var lang = getLanguage(name);
    if (lang) { return lang; }

    var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}',name));
    throw err;
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.requireLanguage = requireLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;
  hljs.debugMode = function() { SAFE_MODE = false; }

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  var constants = [
    hljs.BACKSLASH_ESCAPE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.PHRASAL_WORDS_MODE,
    hljs.COMMENT,
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.NUMBER_MODE,
    hljs.C_NUMBER_MODE,
    hljs.BINARY_NUMBER_MODE,
    hljs.CSS_NUMBER_MODE,
    hljs.REGEXP_MODE,
    hljs.TITLE_MODE,
    hljs.UNDERSCORE_TITLE_MODE,
    hljs.METHOD_GUARD
  ]
  constants.forEach(function(obj) { deepFreeze(obj); });

  // https://github.com/substack/deep-freeze/blob/master/index.js
  function deepFreeze (o) {
    Object.freeze(o);

    var objIsFunction = typeof o === 'function';

    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
      // TODO: remove in the future
      && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });

    return o;
  };


  return hljs;
}));


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  var XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/
  };
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)n?' },
      { begin: '\\b(0[oO][0-7]+)n?' },
      { begin: hljs.C_NUMBER_RE + 'n?' }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var HTML_TEMPLATE = {
    begin: 'html`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml',
    }
  };
  var CSS_TEMPLATE = {
    begin: 'css`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css',
    }
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              className : 'doctag',
              begin : '@[A-Za-z]+',
              contains : [
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  relevance: 0
                },
                {
                  className: 'variable',
                  begin: IDENT_RE + '(?=\\s*(-)|$)',
                  endsParent: true,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                },
              ]
            }
          ]
        }
      ),
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,\n]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true,
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { begin: XML_TAG.begin, end: XML_TAG.end }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin, end: XML_TAG.end, skip: true,
                contains: ['self']
              }
            ]
          },
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor get set', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var XML_ENTITIES = {
    className: 'symbol',
    begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
  };
  var XML_META_KEYWORDS = {
	  begin: '\\s',
	  contains:[
	    {
	      className: 'meta-keyword',
	      begin: '#?[a-z_][a-z1-9_-]+',
	      illegal: '\\n',
      }
	  ]
  };
  var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {begin: '\\(', end: '\\)'});
  var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {className: 'meta-string'});
  var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'});
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/, contains: [XML_ENTITIES]},
              {begin: /'/, end: /'/, contains: [XML_ENTITIES]},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<![a-z]', end: '>',
        relevance: 10,
        contains: [
				  XML_META_KEYWORDS,
				  QUOTE_META_STRING_MODE,
				  APOS_META_STRING_MODE,
					XML_META_PAR_KEYWORDS,
					{
					  begin: '\\[', end: '\\]',
					  contains:[
						  {
					      className: 'meta',
					      begin: '<![a-z]', end: '>',
					      contains: [
					        XML_META_KEYWORDS,
					        XML_META_PAR_KEYWORDS,
					        QUOTE_META_STRING_MODE,
					        APOS_META_STRING_MODE
						    ]
			        }
					  ]
				  }
				]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: 'meta',
        begin: /<\?xml/, end: /\?>/, relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {begin: '/\\*', end: '\\*/', skip: true},
          {begin: 'b"', end: '"', skip: true},
          {begin: 'b\'', end: '\'', skip: true},
          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null, className: null, contains: null, skip: true}),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: true})
        ]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};

/***/ }),

/***/ "./node_modules/highlight.js/styles/github-gist.css":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/styles/github-gist.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mark.js/dist/mark.js":
/*!*******************************************!*\
  !*** ./node_modules/mark.js/dist/mark.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DOMIterator = function () {
  function DOMIterator(ctx) {
    var iframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var iframesTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
    classCallCheck(this, DOMIterator);

    this.ctx = ctx;
    this.iframes = iframes;
    this.exclude = exclude;
    this.iframesTimeout = iframesTimeout;
  }

  createClass(DOMIterator, [{
    key: 'getContexts',
    value: function getContexts() {
      var ctx = void 0,
          filteredCtx = [];
      if (typeof this.ctx === 'undefined' || !this.ctx) {
        ctx = [];
      } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
        ctx = Array.prototype.slice.call(this.ctx);
      } else if (Array.isArray(this.ctx)) {
        ctx = this.ctx;
      } else if (typeof this.ctx === 'string') {
        ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
      } else {
        ctx = [this.ctx];
      }
      ctx.forEach(function (ctx) {
        var isDescendant = filteredCtx.filter(function (contexts) {
          return contexts.contains(ctx);
        }).length > 0;
        if (filteredCtx.indexOf(ctx) === -1 && !isDescendant) {
          filteredCtx.push(ctx);
        }
      });
      return filteredCtx;
    }
  }, {
    key: 'getIframeContents',
    value: function getIframeContents(ifr, successFn) {
      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var doc = void 0;
      try {
        var ifrWin = ifr.contentWindow;
        doc = ifrWin.document;
        if (!ifrWin || !doc) {
          throw new Error('iframe inaccessible');
        }
      } catch (e) {
        errorFn();
      }
      if (doc) {
        successFn(doc);
      }
    }
  }, {
    key: 'isIframeBlank',
    value: function isIframeBlank(ifr) {
      var bl = 'about:blank',
          src = ifr.getAttribute('src').trim(),
          href = ifr.contentWindow.location.href;
      return href === bl && src !== bl && src;
    }
  }, {
    key: 'observeIframeLoad',
    value: function observeIframeLoad(ifr, successFn, errorFn) {
      var _this = this;

      var called = false,
          tout = null;
      var listener = function listener() {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(tout);
        try {
          if (!_this.isIframeBlank(ifr)) {
            ifr.removeEventListener('load', listener);
            _this.getIframeContents(ifr, successFn, errorFn);
          }
        } catch (e) {
          errorFn();
        }
      };
      ifr.addEventListener('load', listener);
      tout = setTimeout(listener, this.iframesTimeout);
    }
  }, {
    key: 'onIframeReady',
    value: function onIframeReady(ifr, successFn, errorFn) {
      try {
        if (ifr.contentWindow.document.readyState === 'complete') {
          if (this.isIframeBlank(ifr)) {
            this.observeIframeLoad(ifr, successFn, errorFn);
          } else {
            this.getIframeContents(ifr, successFn, errorFn);
          }
        } else {
          this.observeIframeLoad(ifr, successFn, errorFn);
        }
      } catch (e) {
        errorFn();
      }
    }
  }, {
    key: 'waitForIframes',
    value: function waitForIframes(ctx, done) {
      var _this2 = this;

      var eachCalled = 0;
      this.forEachIframe(ctx, function () {
        return true;
      }, function (ifr) {
        eachCalled++;
        _this2.waitForIframes(ifr.querySelector('html'), function () {
          if (! --eachCalled) {
            done();
          }
        });
      }, function (handled) {
        if (!handled) {
          done();
        }
      });
    }
  }, {
    key: 'forEachIframe',
    value: function forEachIframe(ctx, filter, each) {
      var _this3 = this;

      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var ifr = ctx.querySelectorAll('iframe'),
          open = ifr.length,
          handled = 0;
      ifr = Array.prototype.slice.call(ifr);
      var checkEnd = function checkEnd() {
        if (--open <= 0) {
          end(handled);
        }
      };
      if (!open) {
        checkEnd();
      }
      ifr.forEach(function (ifr) {
        if (DOMIterator.matches(ifr, _this3.exclude)) {
          checkEnd();
        } else {
          _this3.onIframeReady(ifr, function (con) {
            if (filter(ifr)) {
              handled++;
              each(con);
            }
            checkEnd();
          }, checkEnd);
        }
      });
    }
  }, {
    key: 'createIterator',
    value: function createIterator(ctx, whatToShow, filter) {
      return document.createNodeIterator(ctx, whatToShow, filter, false);
    }
  }, {
    key: 'createInstanceOnIframe',
    value: function createInstanceOnIframe(contents) {
      return new DOMIterator(contents.querySelector('html'), this.iframes);
    }
  }, {
    key: 'compareNodeIframe',
    value: function compareNodeIframe(node, prevNode, ifr) {
      var compCurr = node.compareDocumentPosition(ifr),
          prev = Node.DOCUMENT_POSITION_PRECEDING;
      if (compCurr & prev) {
        if (prevNode !== null) {
          var compPrev = prevNode.compareDocumentPosition(ifr),
              after = Node.DOCUMENT_POSITION_FOLLOWING;
          if (compPrev & after) {
            return true;
          }
        } else {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getIteratorNode',
    value: function getIteratorNode(itr) {
      var prevNode = itr.previousNode();
      var node = void 0;
      if (prevNode === null) {
        node = itr.nextNode();
      } else {
        node = itr.nextNode() && itr.nextNode();
      }
      return {
        prevNode: prevNode,
        node: node
      };
    }
  }, {
    key: 'checkIframeFilter',
    value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
      var key = false,
          handled = false;
      ifr.forEach(function (ifrDict, i) {
        if (ifrDict.val === currIfr) {
          key = i;
          handled = ifrDict.handled;
        }
      });
      if (this.compareNodeIframe(node, prevNode, currIfr)) {
        if (key === false && !handled) {
          ifr.push({
            val: currIfr,
            handled: true
          });
        } else if (key !== false && !handled) {
          ifr[key].handled = true;
        }
        return true;
      }
      if (key === false) {
        ifr.push({
          val: currIfr,
          handled: false
        });
      }
      return false;
    }
  }, {
    key: 'handleOpenIframes',
    value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
      var _this4 = this;

      ifr.forEach(function (ifrDict) {
        if (!ifrDict.handled) {
          _this4.getIframeContents(ifrDict.val, function (con) {
            _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
          });
        }
      });
    }
  }, {
    key: 'iterateThroughNodes',
    value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
      var _this5 = this;

      var itr = this.createIterator(ctx, whatToShow, filterCb);
      var ifr = [],
          elements = [],
          node = void 0,
          prevNode = void 0,
          retrieveNodes = function retrieveNodes() {
        var _getIteratorNode = _this5.getIteratorNode(itr);

        prevNode = _getIteratorNode.prevNode;
        node = _getIteratorNode.node;

        return node;
      };
      while (retrieveNodes()) {
        if (this.iframes) {
          this.forEachIframe(ctx, function (currIfr) {
            return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
          }, function (con) {
            _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function (ifrNode) {
              return elements.push(ifrNode);
            }, filterCb);
          });
        }
        elements.push(node);
      }
      elements.forEach(function (node) {
        eachCb(node);
      });
      if (this.iframes) {
        this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
      }
      doneCb();
    }
  }, {
    key: 'forEachNode',
    value: function forEachNode(whatToShow, each, filter) {
      var _this6 = this;

      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var contexts = this.getContexts();
      var open = contexts.length;
      if (!open) {
        done();
      }
      contexts.forEach(function (ctx) {
        var ready = function ready() {
          _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function () {
            if (--open <= 0) {
              done();
            }
          });
        };
        if (_this6.iframes) {
          _this6.waitForIframes(ctx, ready);
        } else {
          ready();
        }
      });
    }
  }], [{
    key: 'matches',
    value: function matches(element, selector) {
      var selectors = typeof selector === 'string' ? [selector] : selector,
          fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
      if (fn) {
        var match = false;
        selectors.every(function (sel) {
          if (fn.call(element, sel)) {
            match = true;
            return false;
          }
          return true;
        });
        return match;
      } else {
        return false;
      }
    }
  }]);
  return DOMIterator;
}();

var Mark$1 = function () {
  function Mark(ctx) {
    classCallCheck(this, Mark);

    this.ctx = ctx;
    this.ie = false;
    var ua = window.navigator.userAgent;
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
      this.ie = true;
    }
  }

  createClass(Mark, [{
    key: 'log',
    value: function log(msg) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'debug';

      var log = this.opt.log;
      if (!this.opt.debug) {
        return;
      }
      if ((typeof log === 'undefined' ? 'undefined' : _typeof(log)) === 'object' && typeof log[level] === 'function') {
        log[level]('mark.js: ' + msg);
      }
    }
  }, {
    key: 'escapeStr',
    value: function escapeStr(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
  }, {
    key: 'createRegExp',
    value: function createRegExp(str) {
      if (this.opt.wildcards !== 'disabled') {
        str = this.setupWildcardsRegExp(str);
      }
      str = this.escapeStr(str);
      if (Object.keys(this.opt.synonyms).length) {
        str = this.createSynonymsRegExp(str);
      }
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      if (this.opt.diacritics) {
        str = this.createDiacriticsRegExp(str);
      }
      str = this.createMergedBlanksRegExp(str);
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.createJoinersRegExp(str);
      }
      if (this.opt.wildcards !== 'disabled') {
        str = this.createWildcardsRegExp(str);
      }
      str = this.createAccuracyRegExp(str);
      return str;
    }
  }, {
    key: 'createSynonymsRegExp',
    value: function createSynonymsRegExp(str) {
      var syn = this.opt.synonyms,
          sens = this.opt.caseSensitive ? '' : 'i',
          joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? '\0' : '';
      for (var index in syn) {
        if (syn.hasOwnProperty(index)) {
          var value = syn[index],
              k1 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(index) : this.escapeStr(index),
              k2 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
          if (k1 !== '' && k2 !== '') {
            str = str.replace(new RegExp('(' + this.escapeStr(k1) + '|' + this.escapeStr(k2) + ')', 'gm' + sens), joinerPlaceholder + ('(' + this.processSynomyms(k1) + '|') + (this.processSynomyms(k2) + ')') + joinerPlaceholder);
          }
        }
      }
      return str;
    }
  }, {
    key: 'processSynomyms',
    value: function processSynomyms(str) {
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      return str;
    }
  }, {
    key: 'setupWildcardsRegExp',
    value: function setupWildcardsRegExp(str) {
      str = str.replace(/(?:\\)*\?/g, function (val) {
        return val.charAt(0) === '\\' ? '?' : '\x01';
      });
      return str.replace(/(?:\\)*\*/g, function (val) {
        return val.charAt(0) === '\\' ? '*' : '\x02';
      });
    }
  }, {
    key: 'createWildcardsRegExp',
    value: function createWildcardsRegExp(str) {
      var spaces = this.opt.wildcards === 'withSpaces';
      return str.replace(/\u0001/g, spaces ? '[\\S\\s]?' : '\\S?').replace(/\u0002/g, spaces ? '[\\S\\s]*?' : '\\S*');
    }
  }, {
    key: 'setupIgnoreJoinersRegExp',
    value: function setupIgnoreJoinersRegExp(str) {
      return str.replace(/[^(|)\\]/g, function (val, indx, original) {
        var nextChar = original.charAt(indx + 1);
        if (/[(|)\\]/.test(nextChar) || nextChar === '') {
          return val;
        } else {
          return val + '\0';
        }
      });
    }
  }, {
    key: 'createJoinersRegExp',
    value: function createJoinersRegExp(str) {
      var joiner = [];
      var ignorePunctuation = this.opt.ignorePunctuation;
      if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
        joiner.push(this.escapeStr(ignorePunctuation.join('')));
      }
      if (this.opt.ignoreJoiners) {
        joiner.push('\\u00ad\\u200b\\u200c\\u200d');
      }
      return joiner.length ? str.split(/\u0000+/).join('[' + joiner.join('') + ']*') : str;
    }
  }, {
    key: 'createDiacriticsRegExp',
    value: function createDiacriticsRegExp(str) {
      var sens = this.opt.caseSensitive ? '' : 'i',
          dct = this.opt.caseSensitive ? ['aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćč', 'CÇĆČ', 'dđď', 'DĐĎ', 'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ', 'lł', 'LŁ', 'nñňń', 'NÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rř', 'RŘ', 'sšśșş', 'SŠŚȘŞ', 'tťțţ', 'TŤȚŢ', 'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ', 'zžżź', 'ZŽŻŹ'] : ['aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćčCÇĆČ', 'dđďDĐĎ', 'eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïīIÌÍỈĨỊÎÏĪ', 'lłLŁ', 'nñňńNÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rřRŘ', 'sšśșşSŠŚȘŞ', 'tťțţTŤȚŢ', 'uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿYÝỲỶỸỴŸ', 'zžżźZŽŻŹ'];
      var handled = [];
      str.split('').forEach(function (ch) {
        dct.every(function (dct) {
          if (dct.indexOf(ch) !== -1) {
            if (handled.indexOf(dct) > -1) {
              return false;
            }
            str = str.replace(new RegExp('[' + dct + ']', 'gm' + sens), '[' + dct + ']');
            handled.push(dct);
          }
          return true;
        });
      });
      return str;
    }
  }, {
    key: 'createMergedBlanksRegExp',
    value: function createMergedBlanksRegExp(str) {
      return str.replace(/[\s]+/gmi, '[\\s]+');
    }
  }, {
    key: 'createAccuracyRegExp',
    value: function createAccuracyRegExp(str) {
      var _this = this;

      var chars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¡¿';
      var acc = this.opt.accuracy,
          val = typeof acc === 'string' ? acc : acc.value,
          ls = typeof acc === 'string' ? [] : acc.limiters,
          lsJoin = '';
      ls.forEach(function (limiter) {
        lsJoin += '|' + _this.escapeStr(limiter);
      });
      switch (val) {
        case 'partially':
        default:
          return '()(' + str + ')';
        case 'complementary':
          lsJoin = '\\s' + (lsJoin ? lsJoin : this.escapeStr(chars));
          return '()([^' + lsJoin + ']*' + str + '[^' + lsJoin + ']*)';
        case 'exactly':
          return '(^|\\s' + lsJoin + ')(' + str + ')(?=$|\\s' + lsJoin + ')';
      }
    }
  }, {
    key: 'getSeparatedKeywords',
    value: function getSeparatedKeywords(sv) {
      var _this2 = this;

      var stack = [];
      sv.forEach(function (kw) {
        if (!_this2.opt.separateWordSearch) {
          if (kw.trim() && stack.indexOf(kw) === -1) {
            stack.push(kw);
          }
        } else {
          kw.split(' ').forEach(function (kwSplitted) {
            if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
              stack.push(kwSplitted);
            }
          });
        }
      });
      return {
        'keywords': stack.sort(function (a, b) {
          return b.length - a.length;
        }),
        'length': stack.length
      };
    }
  }, {
    key: 'isNumeric',
    value: function isNumeric(value) {
      return Number(parseFloat(value)) == value;
    }
  }, {
    key: 'checkRanges',
    value: function checkRanges(array) {
      var _this3 = this;

      if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== '[object Object]') {
        this.log('markRanges() will only accept an array of objects');
        this.opt.noMatch(array);
        return [];
      }
      var stack = [];
      var last = 0;
      array.sort(function (a, b) {
        return a.start - b.start;
      }).forEach(function (item) {
        var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last),
            start = _callNoMatchOnInvalid.start,
            end = _callNoMatchOnInvalid.end,
            valid = _callNoMatchOnInvalid.valid;

        if (valid) {
          item.start = start;
          item.length = end - start;
          stack.push(item);
          last = end;
        }
      });
      return stack;
    }
  }, {
    key: 'callNoMatchOnInvalidRanges',
    value: function callNoMatchOnInvalidRanges(range, last) {
      var start = void 0,
          end = void 0,
          valid = false;
      if (range && typeof range.start !== 'undefined') {
        start = parseInt(range.start, 10);
        end = start + parseInt(range.length, 10);
        if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
          valid = true;
        } else {
          this.log('Ignoring invalid or overlapping range: ' + ('' + JSON.stringify(range)));
          this.opt.noMatch(range);
        }
      } else {
        this.log('Ignoring invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'checkWhitespaceRanges',
    value: function checkWhitespaceRanges(range, originalLength, string) {
      var end = void 0,
          valid = true,
          max = string.length,
          offset = originalLength - max,
          start = parseInt(range.start, 10) - offset;
      start = start > max ? max : start;
      end = start + parseInt(range.length, 10);
      if (end > max) {
        end = max;
        this.log('End range automatically set to the max value of ' + max);
      }
      if (start < 0 || end - start < 0 || start > max || end > max) {
        valid = false;
        this.log('Invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      } else if (string.substring(start, end).replace(/\s+/g, '') === '') {
        valid = false;
        this.log('Skipping whitespace only range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'getTextNodes',
    value: function getTextNodes(cb) {
      var _this4 = this;

      var val = '',
          nodes = [];
      this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (node) {
        nodes.push({
          start: val.length,
          end: (val += node.textContent).length,
          node: node
        });
      }, function (node) {
        if (_this4.matchesExclude(node.parentNode)) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, function () {
        cb({
          value: val,
          nodes: nodes
        });
      });
    }
  }, {
    key: 'matchesExclude',
    value: function matchesExclude(el) {
      return DOMIterator.matches(el, this.opt.exclude.concat(['script', 'style', 'title', 'head', 'html']));
    }
  }, {
    key: 'wrapRangeInTextNode',
    value: function wrapRangeInTextNode(node, start, end) {
      var hEl = !this.opt.element ? 'mark' : this.opt.element,
          startNode = node.splitText(start),
          ret = startNode.splitText(end - start);
      var repl = document.createElement(hEl);
      repl.setAttribute('data-markjs', 'true');
      if (this.opt.className) {
        repl.setAttribute('class', this.opt.className);
      }
      repl.textContent = startNode.textContent;
      startNode.parentNode.replaceChild(repl, startNode);
      return ret;
    }
  }, {
    key: 'wrapRangeInMappedTextNode',
    value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
      var _this5 = this;

      dict.nodes.every(function (n, i) {
        var sibl = dict.nodes[i + 1];
        if (typeof sibl === 'undefined' || sibl.start > start) {
          if (!filterCb(n.node)) {
            return false;
          }
          var s = start - n.start,
              e = (end > n.end ? n.end : end) - n.start,
              startStr = dict.value.substr(0, n.start),
              endStr = dict.value.substr(e + n.start);
          n.node = _this5.wrapRangeInTextNode(n.node, s, e);
          dict.value = startStr + endStr;
          dict.nodes.forEach(function (k, j) {
            if (j >= i) {
              if (dict.nodes[j].start > 0 && j !== i) {
                dict.nodes[j].start -= e;
              }
              dict.nodes[j].end -= e;
            }
          });
          end -= e;
          eachCb(n.node.previousSibling, n.start);
          if (end > n.end) {
            start = n.end;
          } else {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'wrapMatches',
    value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this6 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        dict.nodes.forEach(function (node) {
          node = node.node;
          var match = void 0;
          while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== '') {
            if (!filterCb(match[matchIdx], node)) {
              continue;
            }
            var pos = match.index;
            if (matchIdx !== 0) {
              for (var i = 1; i < matchIdx; i++) {
                pos += match[i].length;
              }
            }
            node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
            eachCb(node.previousSibling);
            regex.lastIndex = 0;
          }
        });
        endCb();
      });
    }
  }, {
    key: 'wrapMatchesAcrossElements',
    value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this7 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        var match = void 0;
        while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== '') {
          var start = match.index;
          if (matchIdx !== 0) {
            for (var i = 1; i < matchIdx; i++) {
              start += match[i].length;
            }
          }
          var end = start + match[matchIdx].length;
          _this7.wrapRangeInMappedTextNode(dict, start, end, function (node) {
            return filterCb(match[matchIdx], node);
          }, function (node, lastIndex) {
            regex.lastIndex = lastIndex;
            eachCb(node);
          });
        }
        endCb();
      });
    }
  }, {
    key: 'wrapRangeFromIndex',
    value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
      var _this8 = this;

      this.getTextNodes(function (dict) {
        var originalLength = dict.value.length;
        ranges.forEach(function (range, counter) {
          var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value),
              start = _checkWhitespaceRange.start,
              end = _checkWhitespaceRange.end,
              valid = _checkWhitespaceRange.valid;

          if (valid) {
            _this8.wrapRangeInMappedTextNode(dict, start, end, function (node) {
              return filterCb(node, range, dict.value.substring(start, end), counter);
            }, function (node) {
              eachCb(node, range);
            });
          }
        });
        endCb();
      });
    }
  }, {
    key: 'unwrapMatches',
    value: function unwrapMatches(node) {
      var parent = node.parentNode;
      var docFrag = document.createDocumentFragment();
      while (node.firstChild) {
        docFrag.appendChild(node.removeChild(node.firstChild));
      }
      parent.replaceChild(docFrag, node);
      if (!this.ie) {
        parent.normalize();
      } else {
        this.normalizeTextNode(parent);
      }
    }
  }, {
    key: 'normalizeTextNode',
    value: function normalizeTextNode(node) {
      if (!node) {
        return;
      }
      if (node.nodeType === 3) {
        while (node.nextSibling && node.nextSibling.nodeType === 3) {
          node.nodeValue += node.nextSibling.nodeValue;
          node.parentNode.removeChild(node.nextSibling);
        }
      } else {
        this.normalizeTextNode(node.firstChild);
      }
      this.normalizeTextNode(node.nextSibling);
    }
  }, {
    key: 'markRegExp',
    value: function markRegExp(regexp, opt) {
      var _this9 = this;

      this.opt = opt;
      this.log('Searching with expression "' + regexp + '"');
      var totalMatches = 0,
          fn = 'wrapMatches';
      var eachCb = function eachCb(element) {
        totalMatches++;
        _this9.opt.each(element);
      };
      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      this[fn](regexp, this.opt.ignoreGroups, function (match, node) {
        return _this9.opt.filter(node, match, totalMatches);
      }, eachCb, function () {
        if (totalMatches === 0) {
          _this9.opt.noMatch(regexp);
        }
        _this9.opt.done(totalMatches);
      });
    }
  }, {
    key: 'mark',
    value: function mark(sv, opt) {
      var _this10 = this;

      this.opt = opt;
      var totalMatches = 0,
          fn = 'wrapMatches';

      var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === 'string' ? [sv] : sv),
          kwArr = _getSeparatedKeywords.keywords,
          kwArrLen = _getSeparatedKeywords.length,
          sens = this.opt.caseSensitive ? '' : 'i',
          handler = function handler(kw) {
        var regex = new RegExp(_this10.createRegExp(kw), 'gm' + sens),
            matches = 0;
        _this10.log('Searching with expression "' + regex + '"');
        _this10[fn](regex, 1, function (term, node) {
          return _this10.opt.filter(node, kw, totalMatches, matches);
        }, function (element) {
          matches++;
          totalMatches++;
          _this10.opt.each(element);
        }, function () {
          if (matches === 0) {
            _this10.opt.noMatch(kw);
          }
          if (kwArr[kwArrLen - 1] === kw) {
            _this10.opt.done(totalMatches);
          } else {
            handler(kwArr[kwArr.indexOf(kw) + 1]);
          }
        });
      };

      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      if (kwArrLen === 0) {
        this.opt.done(totalMatches);
      } else {
        handler(kwArr[0]);
      }
    }
  }, {
    key: 'markRanges',
    value: function markRanges(rawRanges, opt) {
      var _this11 = this;

      this.opt = opt;
      var totalMatches = 0,
          ranges = this.checkRanges(rawRanges);
      if (ranges && ranges.length) {
        this.log('Starting to mark with the following ranges: ' + JSON.stringify(ranges));
        this.wrapRangeFromIndex(ranges, function (node, range, match, counter) {
          return _this11.opt.filter(node, range, match, counter);
        }, function (element, range) {
          totalMatches++;
          _this11.opt.each(element, range);
        }, function () {
          _this11.opt.done(totalMatches);
        });
      } else {
        this.opt.done(totalMatches);
      }
    }
  }, {
    key: 'unmark',
    value: function unmark(opt) {
      var _this12 = this;

      this.opt = opt;
      var sel = this.opt.element ? this.opt.element : '*';
      sel += '[data-markjs]';
      if (this.opt.className) {
        sel += '.' + this.opt.className;
      }
      this.log('Removal selector "' + sel + '"');
      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (node) {
        _this12.unwrapMatches(node);
      }, function (node) {
        var matchesSel = DOMIterator.matches(node, sel),
            matchesExclude = _this12.matchesExclude(node);
        if (!matchesSel || matchesExclude) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, this.opt.done);
    }
  }, {
    key: 'opt',
    set: function set$$1(val) {
      this._opt = _extends({}, {
        'element': '',
        'className': '',
        'exclude': [],
        'iframes': false,
        'iframesTimeout': 5000,
        'separateWordSearch': true,
        'diacritics': true,
        'synonyms': {},
        'accuracy': 'partially',
        'acrossElements': false,
        'caseSensitive': false,
        'ignoreJoiners': false,
        'ignoreGroups': 0,
        'ignorePunctuation': [],
        'wildcards': 'disabled',
        'each': function each() {},
        'noMatch': function noMatch() {},
        'filter': function filter() {
          return true;
        },
        'done': function done() {},
        'debug': false,
        'log': window.console
      }, val);
    },
    get: function get$$1() {
      return this._opt;
    }
  }, {
    key: 'iterator',
    get: function get$$1() {
      return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
    }
  }]);
  return Mark;
}();

function Mark(ctx) {
  var _this = this;

  var instance = new Mark$1(ctx);
  this.mark = function (sv, opt) {
    instance.mark(sv, opt);
    return _this;
  };
  this.markRegExp = function (sv, opt) {
    instance.markRegExp(sv, opt);
    return _this;
  };
  this.markRanges = function (sv, opt) {
    instance.markRanges(sv, opt);
    return _this;
  };
  this.unmark = function (opt) {
    instance.unmark(opt);
    return _this;
  };
  return this;
}

return Mark;

})));


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/AppMobile.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContent.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocNav.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Search.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/scroll-into-view/scrollIntoView.js":
/*!*********************************************************!*\
  !*** ./node_modules/scroll-into-view/scrollIntoView.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task){
    if('requestAnimationFrame' in window){
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

function setElementScroll(element, x, y){
    if(element.self === element){
        element.scrollTo(x, y);
    }else{
        element.scrollLeft = x;
        element.scrollTop = y;
    }
}

function getTargetScrollLocation(scrollSettings, parent){
    var align = scrollSettings.align,
        target = scrollSettings.target,
        targetPosition = target.getBoundingClientRect(),
        parentPosition,
        x,
        y,
        differenceX,
        differenceY,
        targetWidth,
        targetHeight,
        leftAlign = align && align.left != null ? align.left : 0.5,
        topAlign = align && align.top != null ? align.top : 0.5,
        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
        topOffset = align && align.topOffset != null ? align.topOffset : 0,
        leftScalar = leftAlign,
        topScalar = topAlign;

    if(scrollSettings.isWindow(parent)){
        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        differenceX = x - parent.pageXOffset;
        differenceY = y - parent.pageYOffset;
    }else{
        targetWidth = targetPosition.width;
        targetHeight = targetPosition.height;
        parentPosition = parent.getBoundingClientRect();
        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
        differenceX = x - parent.scrollLeft;
        differenceY = y - parent.scrollTop;
    }

    return {
        x: x,
        y: y,
        differenceX: differenceX,
        differenceY: differenceY
    };
}

function animate(parent){
    var scrollSettings = parent._scrollSettings;

    if(!scrollSettings){
        return;
    }

    var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;

    var location = getTargetScrollLocation(scrollSettings, parent),
        time = Date.now() - scrollSettings.startTime,
        timeValue = Math.min(1 / scrollSettings.time * time, 1);

    if(scrollSettings.endIterations >= maxSynchronousAlignments){
        setElementScroll(parent, location.x, location.y);
        parent._scrollSettings = null;
        return scrollSettings.end(COMPLETE);
    }

    var easeValue = 1 - scrollSettings.ease(timeValue);

    setElementScroll(parent,
        location.x - location.differenceX * easeValue,
        location.y - location.differenceY * easeValue
    );

    if(time >= scrollSettings.time){
        scrollSettings.endIterations++;
        return animate(parent);
    }

    raf(animate.bind(null, parent));
}

function defaultIsWindow(target){
    return target.self === target
}

function transitionScrollTo(target, parent, settings, callback){
    var idle = !parent._scrollSettings,
        lastSettings = parent._scrollSettings,
        now = Date.now(),
        cancelHandler,
        passiveOptions = { passive: true };

    if(lastSettings){
        lastSettings.end(CANCELED);
    }

    function end(endType){
        parent._scrollSettings = null;

        if(parent.parentElement && parent.parentElement._scrollSettings){
            parent.parentElement._scrollSettings.end(endType);
        }

        if(settings.debug){
            console.log('Scrolling ended with type', endType, 'for', parent)
        }

        callback(endType);
        if(cancelHandler){
            parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
            parent.removeEventListener('wheel', cancelHandler, passiveOptions);
        }
    }

    var maxSynchronousAlignments = settings.maxSynchronousAlignments;

    if(maxSynchronousAlignments == null){
        maxSynchronousAlignments = 3;
    }

    parent._scrollSettings = {
        startTime: now,
        endIterations: 0,
        target: target,
        time: settings.time,
        ease: settings.ease,
        align: settings.align,
        isWindow: settings.isWindow || defaultIsWindow,
        maxSynchronousAlignments: maxSynchronousAlignments,
        end: end
    };

    if(!('cancellable' in settings) || settings.cancellable){
        cancelHandler = end.bind(null, CANCELED);
        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
        parent.addEventListener('wheel', cancelHandler, passiveOptions);
    }

    if(idle){
        animate(parent);
    }
}

function defaultIsScrollable(element){
    return (
        'pageXOffset' in element ||
        (
            element.scrollHeight !== element.clientHeight ||
            element.scrollWidth !== element.clientWidth
        ) &&
        getComputedStyle(element).overflow !== 'hidden'
    );
}

function defaultValidTarget(){
    return true;
}

function findParentElement(el){
    if (el.assignedSlot) {
        return findParentElement(el.assignedSlot);
    }

    if (el.parentElement) {
        if(el.parentElement.tagName === 'BODY'){
            return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
        }
        return el.parentElement;
    }

    if (el.getRootNode){
        var parent = el.getRootNode()
        if(parent.nodeType === 11) {
            return parent.host;
        }
    }
}

module.exports = function(target, settings, callback){
    if(!target){
        return;
    }

    if(typeof settings === 'function'){
        callback = settings;
        settings = null;
    }

    if(!settings){
        settings = {};
    }

    settings.time = isNaN(settings.time) ? 1000 : settings.time;
    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};

    var parent = findParentElement(target),
        parents = 1;

    function done(endType){
        parents--;
        if(!parents){
            callback && callback(endType);
        }
    }

    var validTarget = settings.validTarget || defaultValidTarget;
    var isScrollable = settings.isScrollable;

    if(settings.debug){
        console.log('About to scroll to', target)

        if(!parent){
            console.error('Target did not have a parent, is it mounted in the DOM?')
        }
    }

    while(parent){
        if(settings.debug){
            console.log('Scrolling parent node', parent)
        }

        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
            parents++;
            transitionScrollTo(target, parent, settings, done);
        }

        parent = findParentElement(parent);

        if(!parent){
            done(COMPLETE)
            break;
        }
    }
};


/***/ }),

/***/ "./node_modules/string-similarity-js/dist/string-similarity.js":
/*!*********************************************************************!*\
  !*** ./node_modules/string-similarity-js/dist/string-similarity.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* global exports, Map */
/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
exports.stringSimilarity = function (str1, str2, substringLength, caseSensitive) {
    if (substringLength === void 0) { substringLength = 2; }
    if (caseSensitive === void 0) { caseSensitive = false; }
    if (!caseSensitive) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }
    if (str1.length < substringLength || str2.length < substringLength)
        return 0;
    var map = new Map();
    for (var i = 0; i < str1.length - (substringLength - 1); i++) {
        var substr1 = str1.substr(i, substringLength);
        map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1);
    }
    var match = 0;
    for (var j = 0; j < str2.length - (substringLength - 1); j++) {
        var substr2 = str2.substr(j, substringLength);
        var count = map.has(substr2) ? map.get(substr2) : 0;
        if (count > 0) {
            map.set(substr2, count - 1);
            match++;
        }
    }
    return (match * 2) / (str1.length + str2.length - ((substringLength - 1) * 2));
};
exports.default = exports.stringSimilarity;
//# sourceMappingURL=string-similarity.js.map

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var s=function(t,e){return t.getAttribute("data-"+e)},i=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===s(t,"was-processed")},l=function(t,e){return i(t,"ll-timeout",e)},u=function(t){return s(t,"ll-timeout")},d=function(t,e,n,o){t&&(void 0===o?void 0===n?t(e):t(e,n):t(e,n,o))},f=function(t,e){t.loadingCount+=e,0===t._elements.length&&0===t.loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",s(t,e.data_sizes)),v(t,"srcset",s(t,e.data_srcset)),v(t,"src",s(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",s(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",s(t,e.data_src))}),v(t,"poster",s(t,e.data_poster)),v(t,"src",s(t,e.data_src)),t.load()}},h=function(t,e){var n,o,r=e._settings,a=t.tagName,i=m[a];if(i)return i(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=s(t,e.data_src),o=s(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},p=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},b=function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},y=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},I=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,a=e?o.callback_loaded:o.callback_error,s=t.target;b(s,o.class_loading),p(s,r),d(a,s,n),f(n,-1)},k=function(t,e){var n=function n(r){I(r,!0,e),w(t,n,o)},o=function o(r){I(r,!1,e),w(t,n,o)};!function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)}(t,n,o)},A=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;O(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},x=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},z=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){L(t,e),x(t)},n),l(t,o))},O=function(t,e,n){var o=e._settings;!n&&c(t)||(A.indexOf(t.tagName)>-1&&(k(t,e),p(t,o.class_loading)),h(t,e),function(t){i(t,"was-processed","true")}(t),d(o.callback_reveal,t,e),d(o.callback_set,t,e))},N=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var o=n._settings;d(o.callback_enter,t,e,n),o.load_delay?z(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var o=n._settings;d(o.callback_exit,t,e,n),o.load_delay&&x(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],M=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},S=function(t){var e=t._settings;e.container.querySelectorAll("."+e.class_error).forEach(function(t){b(t,e.class_error),function(t){i(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var o;this._settings=function(t){return _extends({},r,t)}(e),this.loadingCount=0,N(this),this.update(n),o=this,t&&window.addEventListener("online",function(t){S(o)})};return R.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=M(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),O(t,n))}),this._elements=M(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){O(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});
//# sourceMappingURL=lazyload.min.js.map


/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.18.2 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'style',
  'currency',
  'currencyDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'localeMatcher',
  'formatMatcher',
  'unit'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              error("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
          ? this.$root.$i18n
          : null;
        // component local i18n
        if (rootI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = rootI18n.formatter;
          options.i18n.fallbackLocale = rootI18n.fallbackLocale;
          options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
          options.i18n.pluralizationRules = rootI18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }

        if (rootI18n) {
          rootI18n.onComponentInstanceCreated(this._i18n);
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }
    });
  }
};

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!isString(ret)) {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string!"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet)) {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      Array.isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message && !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge({}, this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.18.2';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    {
      class: [
        "ec-doc",
        "ec-doc-" + _vm.shared.docType,
        "ec-doc-locale-" + _vm.shared.locale
      ]
    },
    [
      _c(
        "el-aside",
        { staticStyle: { height: "100%" }, attrs: { width: "300px" } },
        [
          _c("div", { staticClass: "doc-type-nav" }, [
            _c(
              "a",
              {
                class: { selected: _vm.shared.docType === "option" },
                attrs: { href: "option.html#title" }
              },
              [_vm._v(_vm._s(_vm.$t("nav.option")))]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { selected: _vm.shared.docType === "api" },
                attrs: { href: "api.html#echarts" }
              },
              [_vm._v(_vm._s(_vm.$t("nav.API")))]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { selected: _vm.shared.docType === "tutorial" },
                attrs: { href: "tutorial.html" }
              },
              [_vm._v(_vm._s(_vm.$t("nav.tutorial")))]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { selected: _vm.shared.docType === "option-gl" },
                attrs: { href: "option-gl.html" }
              },
              [_vm._v(_vm._s(_vm.$t("nav.optionGL")))]
            )
          ]),
          _vm._v(" "),
          _c("Search"),
          _vm._v(" "),
          _c("DocNav")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-main",
        [
          _vm.shared.fuzzySearch
            ? _c("SearchResult")
            : _c("DocContent", { key: _vm.pagePath })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=template&id=4f46f4fa&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/AppMobile.vue?vue&type=template&id=4f46f4fa& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: ["ec-doc-mobile", "ec-doc-" + _vm.shared.docType] },
    [
      _c("div", { staticClass: "top-bar" }, [
        _c("div", { staticClass: "doc-type-nav" }, [
          _c(
            "a",
            {
              class: { selected: _vm.shared.docType === "option" },
              attrs: { href: "option.html#title" }
            },
            [_vm._v(_vm._s(_vm.$t("nav.option")))]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              class: { selected: _vm.shared.docType === "api" },
              attrs: { href: "api.html#echarts" }
            },
            [_vm._v(_vm._s(_vm.$t("nav.API")))]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              class: { selected: _vm.shared.docType === "tutorial" },
              attrs: { href: "tutorial.html" }
            },
            [_vm._v(_vm._s(_vm.$t("nav.tutorial")))]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              class: { selected: _vm.shared.docType === "option-gl" },
              attrs: { href: "option-gl.html" }
            },
            [_vm._v(_vm._s(_vm.$t("nav.optionGL")))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "doc-mobile-toolbar" },
          [
            _c("el-button", {
              staticClass: "open-nav",
              attrs: { icon: "el-icon-menu", size: "mini" },
              on: { click: _vm.showNav }
            }),
            _vm._v(" "),
            _c("Search")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            direction: "ltr",
            size: "80%",
            visible: _vm.navShown,
            "show-close": false
          },
          on: {
            "update:visible": function($event) {
              _vm.navShown = $event
            }
          }
        },
        [_c("DocNav")],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        [
          _vm.shared.fuzzySearch
            ? _c("SearchResult")
            : _c("DocContent", { key: _vm.pagePath })
        ],
        1
      ),
      _vm._v(" "),
      _vm.pagePathParts.length > 1
        ? _c(
            "div",
            { staticClass: "doc-breadcrumb" },
            _vm._l(_vm.pagePathParts, function(item) {
              return _c(
                "a",
                { key: item.link, attrs: { href: "#" + item.link } },
                [_vm._v(_vm._s(item.text))]
              )
            }),
            0
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=template&id=beeecc5e&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContent.vue?vue&type=template&id=beeecc5e& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "doc-main"
    },
    [
      _c(
        "div",
        {
          ref: "docContentDom",
          class: [
            "doc-content",
            _vm.shared.showOptionExample ? "option-example-actived" : "",
            "option-example-" +
              _vm.shared.computedOptionExampleLayout +
              "-layout"
          ]
        },
        [
          _c("h2", { attrs: { id: _vm.pageId } }, [
            _vm._v(_vm._s(_vm.pageTitle))
          ]),
          _vm._v(" "),
          _vm.pageDesc
            ? _c("div", {
                directives: [{ name: "highlight", rawName: "v-highlight" }],
                staticClass: "page-description",
                domProps: { innerHTML: _vm._s(_vm.pageDesc) }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.pageDisplayOutline.children &&
          _vm.pageDisplayOutline.children &&
          1 <= _vm.maxDepth
            ? _c(
                "div",
                [
                  _c("h3", [_vm._v(_vm._s(_vm.$t("content.properties")))]),
                  _vm._v(" "),
                  _vm._l(_vm.pageDisplayOutline.children, function(child) {
                    return _c("DocContentItemCard", {
                      key: child.path,
                      attrs: {
                        "node-data": child,
                        "desc-map": _vm.pageDescMap,
                        "max-depth": _vm.maxDepth,
                        depth: 1
                      },
                      on: {
                        "scroll-to-self": _vm.scrollTo,
                        "toggle-expanded": _vm.handleCardExpandToggle
                      }
                    })
                  })
                ],
                2
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.showLiveExample
        ? [
            _vm.shared.showOptionExample
              ? _c("LiveExample", { ref: "liveExample" })
              : _c(
                  "div",
                  {
                    staticClass: "open-option-example",
                    on: { click: _vm.openOptionExample }
                  },
                  [
                    _c("i", { staticClass: "el-icon-data-line" }),
                    _vm._v(
                      " " + _vm._s(_vm.$t("example.titleShort")) + "\n        "
                    )
                  ]
                )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "doc-content-item-card",
        "level-" + _vm.depth,
        _vm.isLeaf ? "leaf" : "",
        _vm.shared.currentPath === _vm.nodeData.path ? "current" : ""
      ],
      attrs: { id: _vm.itemId }
    },
    [
      _vm.expanded ? _c("div", { staticClass: "hierarchy-line" }) : _vm._e(),
      _vm._v(" "),
      _c("h4", [
        _vm.depth > 1 ? _c("span", { staticClass: "guider" }) : _vm._e(),
        _vm._v(" "),
        _vm.supportsExpandable
          ? _c("i", {
              staticClass: "expand-toggle",
              class: _vm.expanded
                ? "el-icon-remove-outline"
                : "el-icon-circle-plus-outline",
              on: { click: _vm.toggleExpanded }
            })
          : _vm._e(),
        _vm._v(" "),
        !_vm.shared.isMobile
          ? _c(
              "span",
              { staticClass: "path-parent" },
              _vm._l(_vm.parentPath, function(item) {
                return _c(
                  "a",
                  { key: item.link, attrs: { href: "#" + item.link } },
                  [_vm._v(_vm._s(item.text) + ".")]
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c("span", { staticClass: "path-base" }, [
          _c("a", { attrs: { href: "#" + _vm.baseName.link } }, [
            _vm._v(_vm._s(_vm.baseName.text))
          ])
        ]),
        _vm._v(" "),
        _vm.shared.currentPath === _vm.nodeData.path
          ? _c("span", { staticClass: "current-flag" }, [
              _c("i", { staticClass: "el-icon-caret-left" })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.nodeData.default && _vm.nodeData.default !== "*"
          ? _c("span", { staticClass: "default-value" }, [
              _vm._v(" = " + _vm._s(_vm.nodeData.default))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.uiControl && _vm.shared.allOptionExamples && !_vm.shared.isMobile
          ? _c(
              "span",
              {
                class: ["control-toggle", _vm.enableUIControl ? "active" : ""],
                on: { click: _vm.toggleUIControl }
              },
              [
                _c("i", [_vm._v("")]),
                _vm._v(
                  " " + _vm._s(_vm.$t("example.tryDesc")) + "\n            "
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "prop-types" },
        _vm._l(_vm.nodeData.type, function(type) {
          return _c(
            "span",
            {
              key: type,
              class: ["prop-type", "prop-type-" + type.toLowerCase()]
            },
            [_vm._v(_vm._s(type))]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.enableUIControl
        ? _c("OptionControl", {
            attrs: {
              controlConfig: _vm.uiControl,
              optionPath: _vm.nodeData.path
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        directives: [{ name: "highlight", rawName: "v-highlight" }],
        staticClass: "item-description",
        domProps: { innerHTML: _vm._s(_vm.desc) }
      }),
      _vm._v(" "),
      _vm.supportsExpandable && _vm.expanded
        ? _c(
            "div",
            { staticClass: "children" },
            _vm._l(_vm.nodeData.children, function(child) {
              return _c("DocContentItemCard", {
                key: child.path,
                attrs: {
                  "node-data": child,
                  "desc-map": _vm.descMap,
                  depth: _vm.depth + 1,
                  "max-depth": _vm.maxDepth
                },
                on: {
                  "toggle-expanded": _vm.bubbleEventToggleExapndedEvent,
                  "scroll-to-self": _vm.bubbleScrollToSelfEvent
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      (!_vm.expanded || _vm.shared.isMobile) && !_vm.isLeaf
        ? _c("PropertiesList", {
            attrs: { nodeData: _vm.nodeData, descMap: _vm.descMap }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "doc-nav"
    },
    [
      _vm.isOption ? _c("h3", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "toolbox" }, [
        _vm.isOption
          ? _c(
              "span",
              { staticClass: "item", on: { click: _vm.collapseAll } },
              [
                _c("i", { staticClass: "el-icon-s-fold" }),
                _vm._v(_vm._s(_vm.$t("nav.collapseAll")))
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("el-tree", {
        ref: "tree",
        attrs: {
          "node-key": "path",
          "empty-text": "",
          props: _vm.props,
          lazy: "",
          "default-expanded-keys": _vm.expandedKeys,
          indent: 10,
          "expand-on-click-node": false,
          load: _vm.loadTreeNode,
          data: _vm.treeData,
          "current-node-key": _vm.initialSelectedNode
        },
        on: { "current-change": _vm.onSelectNode },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(ref) {
                var node = ref.node
                var data = ref.data
                return _vm.shared.docType !== "tutorial"
                  ? _c("div", { staticClass: "doc-nav-item" }, [
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            node.expanded
                              ? data.labelExpanded || data.label
                              : data.label
                          )
                        )
                      ]),
                      _vm._v(" "),
                      data.defaultValue != null
                        ? _c("span", { staticClass: "default-value" }, [
                            _vm._v(_vm._s(data.defaultValue))
                          ])
                        : node.isLeaf
                        ? _c("span", { staticClass: "default-value" }, [
                            _vm._v("...")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !data.isRoot && !node.expanded
                        ? _c("span", [_vm._v(",")])
                        : _vm._e()
                    ])
                  : _c("div", { staticClass: "doc-nav-item" }, [
                      _c("span", [_vm._v(_vm._s(data.label))])
                    ])
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=template&id=8dc7cce2& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=template&id=67def5de&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LiveExample.vue?vue&type=template&id=67def5de& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.shared.computedOptionExampleLayout + "-layout",
      attrs: { id: "example-panel" }
    },
    [
      _c("h2", [_vm._v(_vm._s(_vm.$t("example.title")))]),
      _vm._v(" "),
      _c("p", { staticClass: "intro" }, [
        _vm._v(
          _vm._s(
            _vm.shared.allOptionExamples
              ? _vm.$t("example.intro")
              : _vm.$t("example.noExample")
          )
        )
      ]),
      _vm._v(" "),
      _vm.shared.currentExampleOption
        ? _c(
            "div",
            { staticClass: "preview-and-code" },
            [
              _c("div", { staticClass: "preview-main" }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm.hasError
                ? _c("el-alert", {
                    attrs: {
                      title: _vm.$t("example.setOptionError"),
                      type: "error"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "toolbar" },
        [
          _vm.shared.allOptionExamples
            ? _c(
                "el-select",
                {
                  staticClass: "example-list",
                  attrs: { size: "mini", "popper-append-to-body": false },
                  model: {
                    value: _vm.shared.currentExampleName,
                    callback: function($$v) {
                      _vm.$set(_vm.shared, "currentExampleName", $$v)
                    },
                    expression: "shared.currentExampleName"
                  }
                },
                _vm._l(_vm.shared.allOptionExamples, function(item) {
                  return _c("el-option", {
                    key: item.name,
                    attrs: {
                      value: item.name,
                      label:
                        _vm.shared.locale === "en"
                          ? item["title-en"]
                          : item.title
                    }
                  })
                }),
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.shared.currentExampleOption
            ? _c("el-button", {
                attrs: {
                  type: "primary",
                  icon: "el-icon-refresh",
                  size: "mini",
                  title: _vm.$t("example.refresh")
                },
                on: { click: _vm.refreshForce }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("el-button", {
            directives: [
              {
                name: "popover",
                rawName: "v-popover:changeLayoutPopover",
                arg: "changeLayoutPopover"
              }
            ],
            staticStyle: { "margin-left": "0" },
            attrs: {
              type: "primary",
              icon: "el-icon-s-operation",
              size: "mini",
              title: _vm.$t("example.changeLayout")
            }
          }),
          _vm._v(" "),
          _c("el-button", {
            attrs: { size: "mini", circle: "", icon: "el-icon-close" },
            on: { click: _vm.closeExamplePanel }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-popover",
        {
          ref: "changeLayoutPopover",
          attrs: { placement: "bottom", trigger: "click" },
          model: {
            value: _vm.showChangeLayoutPopover,
            callback: function($$v) {
              _vm.showChangeLayoutPopover = $$v
            },
            expression: "showChangeLayoutPopover"
          }
        },
        [
          _c("div", { staticClass: "example-change-layout" }, [
            _c("div", { staticClass: "layout-title" }, [
              _c("i", { staticClass: "el-icon-s-operation" }),
              _vm._v(_vm._s(_vm.$t("example.changeLayout")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "layout-mode" },
              [
                _c(
                  "el-radio-group",
                  {
                    attrs: { size: "mini" },
                    on: { change: _vm.changeLayout },
                    model: {
                      value: _vm.shared.optionExampleLayout,
                      callback: function($$v) {
                        _vm.$set(_vm.shared, "optionExampleLayout", $$v)
                      },
                      expression: "shared.optionExampleLayout"
                    }
                  },
                  _vm._l(_vm.optionExampleLayouts, function(layout) {
                    return _c(
                      "el-radio-button",
                      { key: layout, attrs: { label: layout } },
                      [_vm._v(_vm._s(_vm.$t("example.layout." + layout)))]
                    )
                  }),
                  1
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "example-code" }, [
      _c("div", { staticClass: "codemirror-main" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=template&id=5b782728&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OptionControl.vue?vue&type=template&id=5b782728& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "option-control" },
    [
      _c(
        _vm.uiComponent,
        _vm._b(
          {
            tag: "component",
            attrs: { value: _vm.defaultValue },
            on: { change: _vm.onValueChange }
          },
          "component",
          _vm.uiAttrs,
          false
        )
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=template&id=b4c063be&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PropertiesList.vue?vue&type=template&id=b4c063be& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "properties-list-panel" }, [
    _c("h5", [_vm._v(_vm._s(_vm.$t("content.properties")))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "properties-list" },
      [
        _vm._v("\n        {\n        "),
        _vm._l(_vm.displayedProperties, function(child, index) {
          return _c(
            "span",
            { key: child.path },
            [
              !_vm.shared.isMobile
                ? _c(
                    "el-popover",
                    {
                      attrs: {
                        title: _vm.getName(child.path),
                        "close-delay": 400,
                        "open-delay": 200,
                        placement: "top",
                        trigger: "hover"
                      }
                    },
                    [
                      _c("div", {
                        directives: [
                          { name: "highlight", rawName: "v-highlight" }
                        ],
                        staticClass: "property-popup-desc",
                        domProps: { innerHTML: _vm._s(_vm.getDesc(child.path)) }
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { slot: "reference", href: "#" + child.path },
                          slot: "reference"
                        },
                        [_vm._v(_vm._s(_vm.getName(child.path)))]
                      )
                    ]
                  )
                : _c("span", [
                    _c(
                      "a",
                      {
                        attrs: { slot: "reference", href: "#" + child.path },
                        slot: "reference"
                      },
                      [_vm._v(_vm._s(_vm.getName(child.path)))]
                    )
                  ]),
              _vm._v(" "),
              index < _vm.displayedProperties.length - 1
                ? _c("span", [_vm._v(", ")])
                : _vm._e()
            ],
            1
          )
        }),
        _vm._v("\n        }\n    ")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=template&id=7cb41050&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Search.vue?vue&type=template&id=7cb41050& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "doc-search" },
    [
      _c(
        "el-autocomplete",
        {
          staticClass: "search-input",
          attrs: {
            "popper-class": "search-input-popper",
            size: "small",
            "fetch-suggestions": _vm.searchOptions,
            debounce: 200,
            placeholder: _vm.$t("search.placeholder")
          },
          on: { select: _vm.selectPath },
          nativeOn: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.fuzzySearch($event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("div", { staticClass: "doc-path-suggestion-item" }, [
                    _vm._v(_vm._s(item.path))
                  ])
                ]
              }
            }
          ]),
          model: {
            value: _vm.queryString,
            callback: function($$v) {
              _vm.queryString = $$v
            },
            expression: "queryString"
          }
        },
        [
          _vm._v(" "),
          _c("el-button", {
            attrs: { slot: "append", icon: "el-icon-search", type: "primary" },
            on: { click: _vm.fuzzySearch },
            slot: "append"
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=template&id=92fd54d6&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResult.vue?vue&type=template&id=92fd54d6& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "doc-search-result" },
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("search.resultTitle")))]),
      _vm._v(" "),
      _c("el-input", {
        attrs: { "prefix-icon": "el-icon-search" },
        model: {
          value: _vm.shared.searchQuery,
          callback: function($$v) {
            _vm.$set(_vm.shared, "searchQuery", $$v)
          },
          expression: "shared.searchQuery"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "result-summary" }, [
        _vm._v(
          "\n        " +
            _vm._s(
              _vm
                .$t("search.foundCountBrief")
                .replace("${searchResultCount}", _vm.searchResultCount)
            ) +
            ",\n        "
        ),
        !!_vm.searchToken
          ? _c("span", { staticClass: "searching" }, [
              _vm._v("\n            搜索中"),
              _c("i", { staticClass: "el-icon-loading" })
            ])
          : _c("span", [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm
                      .$t("search.displayCountBrief")
                      .replace("${displayResultCount}", _vm.displayResultCount)
                  ) +
                  "\n        "
              )
            ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.searchResult, function(result) {
        return _c("SearchResultItemCard", {
          key: result.path,
          attrs: { "item-data": result, "search-query": _vm.shared.searchQuery }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "doc-search-result-item-card": true,
        "needs-show-more": _vm.needsShowMoreDesc
      }
    },
    [
      _c(
        "h4",
        {
          directives: [
            {
              name: "mark",
              rawName: "v-mark",
              value: _vm.searchQuery,
              expression: "searchQuery"
            }
          ]
        },
        [
          _c(
            "a",
            { staticClass: "path", attrs: { href: "#" + _vm.itemData.path } },
            [_vm._v(_vm._s(_vm.itemData.path))]
          )
        ]
      ),
      _vm._v(" "),
      _vm.itemData.similarPaths.length > 0
        ? _c(
            "div",
            { staticClass: "other-result" },
            _vm._l(_vm.itemData.similarPaths, function(path) {
              return _c("div", { key: path }, [
                _c("a", { attrs: { href: "#" + path } }, [_vm._v(_vm._s(path))])
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "item-description" }, [
        _c("div", {
          directives: [
            {
              name: "mark",
              rawName: "v-mark",
              value: _vm.searchQuery,
              expression: "searchQuery"
            }
          ],
          domProps: { innerHTML: _vm._s(_vm.itemData.content) }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "show-more-button" },
        [
          _c(
            "el-button",
            {
              attrs: { icon: "el-icon-more", size: "mini" },
              on: { click: _vm.showMore }
            },
            [_vm._v(_vm._s(_vm.$t("search.showMore")))]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-boolean" },
    [
      _c("el-switch", {
        attrs: { "active-text": _vm.$t("example.booleanDesc") },
        on: { change: _vm.onValueChange },
        model: {
          value: _vm.innerValue,
          callback: function($$v) {
            _vm.innerValue = $$v
          },
          expression: "innerValue"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=template&id=60451956&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlColor.vue?vue&type=template&id=60451956& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-color" },
    [
      _c("el-color-picker", {
        attrs: { "show-alpha": true },
        on: { change: _vm.onValueChange, "active-change": _vm.onActiveChange },
        model: {
          value: _vm.innerValue,
          callback: function($$v) {
            _vm.innerValue = $$v
          },
          expression: "innerValue"
        }
      }),
      _vm._v(" "),
      _c("span", { style: { color: _vm.innerValue || "#aaa" } }, [
        _vm._v(
          "\n    " +
            _vm._s(_vm.innerValue || _vm.$t("example.defaultColor")) +
            "\n"
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-enum" },
    [
      _c(
        "el-select",
        {
          attrs: { size: "mini" },
          on: { change: _vm.onValueChange },
          model: {
            value: _vm.innerValue,
            callback: function($$v) {
              _vm.innerValue = $$v
            },
            expression: "innerValue"
          }
        },
        _vm._l(_vm.optionsArr, function(item) {
          return _c(
            "el-option",
            {
              key: item,
              class: {
                "control-enum-special": _vm.specialValues[item] != null
              },
              attrs: { value: item }
            },
            [_vm._v(_vm._s(item))]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-icon" },
    [
      _c(
        "el-select",
        {
          attrs: { size: "mini" },
          on: { change: _vm.onValueChange },
          model: {
            value: _vm.innerValue,
            callback: function($$v) {
              _vm.innerValue = $$v
            },
            expression: "innerValue"
          }
        },
        _vm._l(_vm.optionsArr, function(item) {
          return _c("el-option", { key: item, attrs: { value: item } }, [
            _vm._v(_vm._s(item))
          ])
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { size: "mini", type: "primary" },
          on: { click: _vm.chooseFile }
        },
        [_vm._v(_vm._s(_vm.$t("example.upload")))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-number" },
    [
      _c("el-input-number", {
        attrs: {
          "controls-position": "right",
          min: _vm.min == null ? -1e4 : +_vm.min,
          max: _vm.max == null ? 1e4 : +_vm.max,
          step: _vm.step == null ? 1 : +_vm.step,
          size: "mini"
        },
        on: { change: _vm.onValueChange },
        model: {
          value: _vm.innerValue,
          callback: function($$v) {
            _vm.innerValue = $$v
          },
          expression: "innerValue"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-percent" },
    [
      _c(
        "el-radio-group",
        {
          attrs: { size: "mini" },
          model: {
            value: _vm.mode,
            callback: function($$v) {
              _vm.mode = $$v
            },
            expression: "mode"
          }
        },
        [
          _c("el-radio-button", { attrs: { label: "absolute" } }, [
            _vm._v(_vm._s(_vm.$t("example.absoluteMode")))
          ]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "percent" } }, [
            _vm._v(_vm._s(_vm.$t("example.percentMode")))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.mode === "absolute"
        ? _c("el-input-number", {
            attrs: {
              "controls-position": "right",
              size: "mini",
              min: _vm.min == null ? -1e4 : +_vm.min,
              max: _vm.max == null ? 1e4 : +_vm.max,
              step: _vm.step == null ? 1 : +_vm.step
            },
            on: { change: _vm.onValueChange },
            model: {
              value: _vm.absoluteValue,
              callback: function($$v) {
                _vm.absoluteValue = $$v
              },
              expression: "absoluteValue"
            }
          })
        : _c(
            "div",
            [
              _c("el-slider", {
                attrs: {
                  min: 0,
                  max: 100,
                  step: 1,
                  "format-tooltip": _vm.formatTooltip
                },
                on: { change: _vm.onValueChange },
                model: {
                  value: _vm.percentValue,
                  callback: function($$v) {
                    _vm.percentValue = $$v
                  },
                  expression: "percentValue"
                }
              }),
              _vm._v(" "),
              _c("el-input-number", {
                attrs: {
                  "controls-position": "right",
                  size: "mini",
                  min: 0,
                  max: 100,
                  step: 1
                },
                on: { change: _vm.onValueChange },
                model: {
                  value: _vm.percentValue,
                  callback: function($$v) {
                    _vm.percentValue = $$v
                  },
                  expression: "percentValue"
                }
              })
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-percent-vector" },
    _vm._l(_vm.dimsArr, function(dim, index) {
      return _c(
        "div",
        { key: index },
        [
          _c("label", [_vm._v(_vm._s(dim))]),
          _vm._v(" "),
          _c("ControlPercent", {
            attrs: {
              value: _vm.innerValueArr[index],
              "controls-position": "right",
              min: _vm.min == null ? -1e4 : +_vm.min,
              max: _vm.max == null ? 1e4 : +_vm.max,
              step: _vm.step == null ? 1 : +_vm.step
            },
            on: {
              change: function(value) {
                return _vm.onValueChange(index, value)
              }
            }
          })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-text" },
    [
      _c("el-input", {
        attrs: {
          size: "mini",
          placeholder: _vm.$t("example.inputPlaceholder")
        },
        on: { change: _vm.onValueChange },
        model: {
          value: _vm.innerValue,
          callback: function($$v) {
            _vm.innerValue = $$v
          },
          expression: "innerValue"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control-vector" },
    [
      _c("el-switch", {
        attrs: { "active-text": _vm.$t("example.vectorSetSeparate") },
        model: {
          value: _vm.innerSeparate,
          callback: function($$v) {
            _vm.innerSeparate = $$v
          },
          expression: "innerSeparate"
        }
      }),
      _vm._v(" "),
      _vm.innerSeparate
        ? _c(
            "div",
            { staticClass: "control-vector-group" },
            _vm._l(_vm.dimsArr, function(dim, index) {
              return _c(
                "div",
                { key: index },
                [
                  _c("label", [_vm._v(_vm._s(dim))]),
                  _vm._v(" "),
                  _c("el-input-number", {
                    attrs: {
                      "controls-position": "right",
                      min: _vm.min == null ? -1e4 : +_vm.min,
                      max: _vm.max == null ? 1e4 : +_vm.max,
                      step: _vm.step == null ? 1 : +_vm.step,
                      size: "mini"
                    },
                    on: { change: _vm.onValueChange },
                    model: {
                      value: _vm.innerValueArr[index],
                      callback: function($$v) {
                        _vm.$set(_vm.innerValueArr, index, $$v)
                      },
                      expression: "innerValueArr[index]"
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        : _c("el-input-number", {
            attrs: {
              "controls-position": "right",
              size: "mini",
              min: _vm.min == null ? -1e4 : +_vm.min,
              max: _vm.max == null ? 1e4 : +_vm.max,
              step: _vm.step == null ? 1 : +_vm.step
            },
            on: { change: _vm.onValueChange },
            model: {
              value: _vm.innerValueArr[0],
              callback: function($$v) {
                _vm.$set(_vm.innerValueArr, 0, $$v)
              },
              expression: "innerValueArr[0]"
            }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/zrender/lib/core/arrayDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/zrender/lib/core/arrayDiff.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function diff(oldArr, newArr, equals) {
    if (!equals) {
        equals = function (a, b) {
            return a === b;
        };
    }
    oldArr = oldArr.slice();
    newArr = newArr.slice();
    var newLen = newArr.length;
    var oldLen = oldArr.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{ newPos: -1, components: [] }];
    var oldPos = extractCommon(bestPath[0], newArr, oldArr, 0, equals);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        var indices = [];
        for (var i = 0; i < newArr.length; i++) {
            indices.push(i);
        }
        return [{
                indices: indices,
                count: newArr.length,
                added: false,
                removed: false
            }];
    }
    function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
            var basePath;
            var addPath = bestPath[diagonalPath - 1];
            var removePath = bestPath[diagonalPath + 1];
            var oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
            if (addPath) {
                bestPath[diagonalPath - 1] = undefined;
            }
            var canAdd = addPath && addPath.newPos + 1 < newLen;
            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
            if (!canAdd && !canRemove) {
                bestPath[diagonalPath] = undefined;
                continue;
            }
            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
                basePath = clonePath(removePath);
                pushComponent(basePath.components, false, true);
            }
            else {
                basePath = addPath;
                basePath.newPos++;
                pushComponent(basePath.components, true, false);
            }
            oldPos = extractCommon(basePath, newArr, oldArr, diagonalPath, equals);
            if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
                return buildValues(basePath.components);
            }
            else {
                bestPath[diagonalPath] = basePath;
            }
        }
        editLength++;
    }
    while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
            return ret;
        }
    }
}
function extractCommon(basePath, newArr, oldArr, diagonalPath, equals) {
    var newLen = newArr.length;
    var oldLen = oldArr.length;
    var newPos = basePath.newPos;
    var oldPos = newPos - diagonalPath;
    var commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && equals(newArr[newPos + 1], oldArr[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
    }
    if (commonCount) {
        basePath.components.push({
            count: commonCount,
            added: false,
            removed: false,
            indices: []
        });
    }
    basePath.newPos = newPos;
    return oldPos;
}
function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
        components[components.length - 1] = {
            count: last.count + 1,
            added: added,
            removed: removed,
            indices: []
        };
    }
    else {
        components.push({
            count: 1,
            added: added,
            removed: removed,
            indices: []
        });
    }
}
function buildValues(components) {
    var componentPos = 0;
    var componentLen = components.length;
    var newPos = 0;
    var oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
        var component = components[componentPos];
        if (!component.removed) {
            var indices = [];
            for (var i = newPos; i < newPos + component.count; i++) {
                indices.push(i);
            }
            component.indices = indices;
            newPos += component.count;
            if (!component.added) {
                oldPos += component.count;
            }
        }
        else {
            for (var i = oldPos; i < oldPos + component.count; i++) {
                component.indices.push(i);
            }
            oldPos += component.count;
        }
    }
    return components;
}
function clonePath(path) {
    return { newPos: path.newPos, components: path.components.slice(0) };
}
function arrayDiff(oldArr, newArr, equal) {
    return diff(oldArr, newArr, equal);
}
exports["default"] = arrayDiff;


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sassjs-loader!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/AppMobile.vue":
/*!***************************!*\
  !*** ./src/AppMobile.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppMobile.vue?vue&type=template&id=4f46f4fa& */ "./src/AppMobile.vue?vue&type=template&id=4f46f4fa&");
/* harmony import */ var _AppMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppMobile.vue?vue&type=script&lang=js& */ "./src/AppMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppMobile.vue?vue&type=style&index=0&lang=scss& */ "./src/AppMobile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/AppMobile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/AppMobile.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/AppMobile.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./AppMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/AppMobile.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************!*\
  !*** ./src/AppMobile.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sassjs-loader!../node_modules/vue-loader/lib??vue-loader-options!./AppMobile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/AppMobile.vue?vue&type=template&id=4f46f4fa&":
/*!**********************************************************!*\
  !*** ./src/AppMobile.vue?vue&type=template&id=4f46f4fa& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./AppMobile.vue?vue&type=template&id=4f46f4fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/AppMobile.vue?vue&type=template&id=4f46f4fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMobile_vue_vue_type_template_id_4f46f4fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DocContent.vue":
/*!***************************************!*\
  !*** ./src/components/DocContent.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocContent.vue?vue&type=template&id=beeecc5e& */ "./src/components/DocContent.vue?vue&type=template&id=beeecc5e&");
/* harmony import */ var _DocContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocContent.vue?vue&type=script&lang=js& */ "./src/components/DocContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocContent.vue?vue&type=style&index=0&lang=scss& */ "./src/components/DocContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DocContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DocContent.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/DocContent.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./DocContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DocContent.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************!*\
  !*** ./src/components/DocContent.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./DocContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/DocContent.vue?vue&type=template&id=beeecc5e&":
/*!**********************************************************************!*\
  !*** ./src/components/DocContent.vue?vue&type=template&id=beeecc5e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DocContent.vue?vue&type=template&id=beeecc5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocContent.vue?vue&type=template&id=beeecc5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContent_vue_vue_type_template_id_beeecc5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DocContentItemCard.vue":
/*!***********************************************!*\
  !*** ./src/components/DocContentItemCard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocContentItemCard.vue?vue&type=template&id=dced9798& */ "./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798&");
/* harmony import */ var _DocContentItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocContentItemCard.vue?vue&type=script&lang=js& */ "./src/components/DocContentItemCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocContentItemCard.vue?vue&type=style&index=0&lang=scss& */ "./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocContentItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DocContentItemCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DocContentItemCard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/components/DocContentItemCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./DocContentItemCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./DocContentItemCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798&":
/*!******************************************************************************!*\
  !*** ./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DocContentItemCard.vue?vue&type=template&id=dced9798& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocContentItemCard.vue?vue&type=template&id=dced9798&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocContentItemCard_vue_vue_type_template_id_dced9798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DocNav.vue":
/*!***********************************!*\
  !*** ./src/components/DocNav.vue ***!
  \***********************************/
/*! exports provided: createChildren, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocNav.vue?vue&type=template&id=ce7b6d0a& */ "./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a&");
/* harmony import */ var _DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocNav.vue?vue&type=script&lang=js& */ "./src/components/DocNav.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChildren", function() { return _DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["createChildren"]; });

/* harmony import */ var _DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocNav.vue?vue&type=style&index=0&lang=scss& */ "./src/components/DocNav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DocNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DocNav.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/DocNav.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default, createChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./DocNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChildren", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["createChildren"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DocNav.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************!*\
  !*** ./src/components/DocNav.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./DocNav.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a&":
/*!******************************************************************!*\
  !*** ./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DocNav.vue?vue&type=template&id=ce7b6d0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DocNav.vue?vue&type=template&id=ce7b6d0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocNav_vue_vue_type_template_id_ce7b6d0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Home.vue":
/*!*********************************!*\
  !*** ./src/components/Home.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=8dc7cce2& */ "./src/components/Home.vue?vue&type=template&id=8dc7cce2&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Home.vue?vue&type=template&id=8dc7cce2&":
/*!****************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=template&id=8dc7cce2& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=8dc7cce2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/LiveExample.vue":
/*!****************************************!*\
  !*** ./src/components/LiveExample.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveExample.vue?vue&type=template&id=67def5de& */ "./src/components/LiveExample.vue?vue&type=template&id=67def5de&");
/* harmony import */ var _LiveExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveExample.vue?vue&type=script&lang=js& */ "./src/components/LiveExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LiveExample.vue?vue&type=style&index=0&lang=scss& */ "./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LiveExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/LiveExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/LiveExample.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/LiveExample.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./LiveExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./LiveExample.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/LiveExample.vue?vue&type=template&id=67def5de&":
/*!***********************************************************************!*\
  !*** ./src/components/LiveExample.vue?vue&type=template&id=67def5de& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./LiveExample.vue?vue&type=template&id=67def5de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LiveExample.vue?vue&type=template&id=67def5de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveExample_vue_vue_type_template_id_67def5de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/OptionControl.vue":
/*!******************************************!*\
  !*** ./src/components/OptionControl.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionControl.vue?vue&type=template&id=5b782728& */ "./src/components/OptionControl.vue?vue&type=template&id=5b782728&");
/* harmony import */ var _OptionControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionControl.vue?vue&type=script&lang=js& */ "./src/components/OptionControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionControl.vue?vue&type=style&index=0&lang=scss& */ "./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OptionControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/OptionControl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/OptionControl.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/OptionControl.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./OptionControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./OptionControl.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/OptionControl.vue?vue&type=template&id=5b782728&":
/*!*************************************************************************!*\
  !*** ./src/components/OptionControl.vue?vue&type=template&id=5b782728& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./OptionControl.vue?vue&type=template&id=5b782728& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/OptionControl.vue?vue&type=template&id=5b782728&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionControl_vue_vue_type_template_id_5b782728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/PropertiesList.vue":
/*!*******************************************!*\
  !*** ./src/components/PropertiesList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertiesList.vue?vue&type=template&id=b4c063be& */ "./src/components/PropertiesList.vue?vue&type=template&id=b4c063be&");
/* harmony import */ var _PropertiesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertiesList.vue?vue&type=script&lang=js& */ "./src/components/PropertiesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertiesList.vue?vue&type=style&index=0&lang=scss& */ "./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PropertiesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PropertiesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/PropertiesList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/PropertiesList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./PropertiesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./PropertiesList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/PropertiesList.vue?vue&type=template&id=b4c063be&":
/*!**************************************************************************!*\
  !*** ./src/components/PropertiesList.vue?vue&type=template&id=b4c063be& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./PropertiesList.vue?vue&type=template&id=b4c063be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PropertiesList.vue?vue&type=template&id=b4c063be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertiesList_vue_vue_type_template_id_b4c063be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Search.vue":
/*!***********************************!*\
  !*** ./src/components/Search.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=7cb41050& */ "./src/components/Search.vue?vue&type=template&id=7cb41050&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./src/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.vue?vue&type=style&index=0&lang=scss& */ "./src/components/Search.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Search.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Search.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Search.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************!*\
  !*** ./src/components/Search.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Search.vue?vue&type=template&id=7cb41050&":
/*!******************************************************************!*\
  !*** ./src/components/Search.vue?vue&type=template&id=7cb41050& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=7cb41050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Search.vue?vue&type=template&id=7cb41050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7cb41050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SearchResult.vue":
/*!*****************************************!*\
  !*** ./src/components/SearchResult.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=template&id=92fd54d6& */ "./src/components/SearchResult.vue?vue&type=template&id=92fd54d6&");
/* harmony import */ var _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=script&lang=js& */ "./src/components/SearchResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=style&index=0&lang=scss& */ "./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SearchResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SearchResult.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/SearchResult.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResult.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/SearchResult.vue?vue&type=template&id=92fd54d6&":
/*!************************************************************************!*\
  !*** ./src/components/SearchResult.vue?vue&type=template&id=92fd54d6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResult.vue?vue&type=template&id=92fd54d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResult.vue?vue&type=template&id=92fd54d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_92fd54d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SearchResultItemCard.vue":
/*!*************************************************!*\
  !*** ./src/components/SearchResultItemCard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultItemCard.vue?vue&type=template&id=9e082810& */ "./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810&");
/* harmony import */ var _SearchResultItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResultItemCard.vue?vue&type=script&lang=js& */ "./src/components/SearchResultItemCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResultItemCard.vue?vue&type=style&index=0&lang=scss& */ "./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchResultItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SearchResultItemCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SearchResultItemCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/SearchResultItemCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResultItemCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResultItemCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810&":
/*!********************************************************************************!*\
  !*** ./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SearchResultItemCard.vue?vue&type=template&id=9e082810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SearchResultItemCard.vue?vue&type=template&id=9e082810&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultItemCard_vue_vue_type_template_id_9e082810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: ECHARTS_LIB, PROPERTIES_NOT_EXPAND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECHARTS_LIB", function() { return ECHARTS_LIB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES_NOT_EXPAND", function() { return PROPERTIES_NOT_EXPAND; });
var ECHARTS_LIB = 'https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js'; // Properties that will not be expanded by default.
// To reduce the display of unnecessary info.

var PROPERTIES_NOT_EXPAND = ['data', 'markPoint', 'markLine', 'markArea', 'tooltip'];

/***/ }),

/***/ "./src/controls/ControlBoolean.vue":
/*!*****************************************!*\
  !*** ./src/controls/ControlBoolean.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlBoolean.vue?vue&type=template&id=0b22be4a& */ "./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a&");
/* harmony import */ var _ControlBoolean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlBoolean.vue?vue&type=script&lang=js& */ "./src/controls/ControlBoolean.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ControlBoolean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlBoolean.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlBoolean.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/controls/ControlBoolean.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlBoolean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlBoolean.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlBoolean.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlBoolean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a&":
/*!************************************************************************!*\
  !*** ./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlBoolean.vue?vue&type=template&id=0b22be4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlBoolean.vue?vue&type=template&id=0b22be4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlBoolean_vue_vue_type_template_id_0b22be4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlColor.vue":
/*!***************************************!*\
  !*** ./src/controls/ControlColor.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlColor.vue?vue&type=template&id=60451956& */ "./src/controls/ControlColor.vue?vue&type=template&id=60451956&");
/* harmony import */ var _ControlColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlColor.vue?vue&type=script&lang=js& */ "./src/controls/ControlColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlColor.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlColor.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/controls/ControlColor.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************!*\
  !*** ./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlColor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlColor.vue?vue&type=template&id=60451956&":
/*!**********************************************************************!*\
  !*** ./src/controls/ControlColor.vue?vue&type=template&id=60451956& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlColor.vue?vue&type=template&id=60451956& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlColor.vue?vue&type=template&id=60451956&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlColor_vue_vue_type_template_id_60451956___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlEnum.vue":
/*!**************************************!*\
  !*** ./src/controls/ControlEnum.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlEnum.vue?vue&type=template&id=21ad9244& */ "./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244&");
/* harmony import */ var _ControlEnum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlEnum.vue?vue&type=script&lang=js& */ "./src/controls/ControlEnum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlEnum.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlEnum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlEnum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlEnum.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/controls/ControlEnum.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlEnum.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlEnum.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244&":
/*!*********************************************************************!*\
  !*** ./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlEnum.vue?vue&type=template&id=21ad9244& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlEnum.vue?vue&type=template&id=21ad9244&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlEnum_vue_vue_type_template_id_21ad9244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlIcon.vue":
/*!**************************************!*\
  !*** ./src/controls/ControlIcon.vue ***!
  \**************************************/
/*! exports provided: parseXML, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlIcon.vue?vue&type=template&id=3e9a6256& */ "./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256&");
/* harmony import */ var _ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlIcon.vue?vue&type=script&lang=js& */ "./src/controls/ControlIcon.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseXML", function() { return _ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["parseXML"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlIcon.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/controls/ControlIcon.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default, parseXML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlIcon.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseXML", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["parseXML"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256&":
/*!*********************************************************************!*\
  !*** ./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlIcon.vue?vue&type=template&id=3e9a6256& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlIcon.vue?vue&type=template&id=3e9a6256&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlIcon_vue_vue_type_template_id_3e9a6256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlNumber.vue":
/*!****************************************!*\
  !*** ./src/controls/ControlNumber.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlNumber.vue?vue&type=template&id=46bf3be6& */ "./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6&");
/* harmony import */ var _ControlNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlNumber.vue?vue&type=script&lang=js& */ "./src/controls/ControlNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlNumber.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlNumber.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlNumber.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/controls/ControlNumber.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlNumber.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlNumber.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6&":
/*!***********************************************************************!*\
  !*** ./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlNumber.vue?vue&type=template&id=46bf3be6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlNumber.vue?vue&type=template&id=46bf3be6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlNumber_vue_vue_type_template_id_46bf3be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlPercent.vue":
/*!*****************************************!*\
  !*** ./src/controls/ControlPercent.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlPercent.vue?vue&type=template&id=7f0f7b10& */ "./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10&");
/* harmony import */ var _ControlPercent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlPercent.vue?vue&type=script&lang=js& */ "./src/controls/ControlPercent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlPercent.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlPercent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlPercent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlPercent.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/controls/ControlPercent.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10&":
/*!************************************************************************!*\
  !*** ./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercent.vue?vue&type=template&id=7f0f7b10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercent.vue?vue&type=template&id=7f0f7b10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercent_vue_vue_type_template_id_7f0f7b10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlPercentVector.vue":
/*!***********************************************!*\
  !*** ./src/controls/ControlPercentVector.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlPercentVector.vue?vue&type=template&id=dfef834a& */ "./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a&");
/* harmony import */ var _ControlPercentVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlPercentVector.vue?vue&type=script&lang=js& */ "./src/controls/ControlPercentVector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlPercentVector.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlPercentVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlPercentVector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlPercentVector.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/controls/ControlPercentVector.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercentVector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercentVector.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a&":
/*!******************************************************************************!*\
  !*** ./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlPercentVector.vue?vue&type=template&id=dfef834a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlPercentVector.vue?vue&type=template&id=dfef834a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlPercentVector_vue_vue_type_template_id_dfef834a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlText.vue":
/*!**************************************!*\
  !*** ./src/controls/ControlText.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlText.vue?vue&type=template&id=2ec3f10a& */ "./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a&");
/* harmony import */ var _ControlText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlText.vue?vue&type=script&lang=js& */ "./src/controls/ControlText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ControlText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlText.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/controls/ControlText.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a&":
/*!*********************************************************************!*\
  !*** ./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlText.vue?vue&type=template&id=2ec3f10a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlText.vue?vue&type=template&id=2ec3f10a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlText_vue_vue_type_template_id_2ec3f10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/controls/ControlVector.vue":
/*!****************************************!*\
  !*** ./src/controls/ControlVector.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlVector.vue?vue&type=template&id=5f38b4e0& */ "./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0&");
/* harmony import */ var _ControlVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlVector.vue?vue&type=script&lang=js& */ "./src/controls/ControlVector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlVector.vue?vue&type=style&index=0&lang=scss& */ "./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ControlVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/controls/ControlVector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/controls/ControlVector.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/controls/ControlVector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ControlVector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sassjs-loader!../../node_modules/vue-loader/lib??vue-loader-options!./ControlVector.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sassjs-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sassjs_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0&":
/*!***********************************************************************!*\
  !*** ./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ControlVector.vue?vue&type=template&id=5f38b4e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/controls/ControlVector.vue?vue&type=template&id=5f38b4e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlVector_vue_vue_type_template_id_5f38b4e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/dep/flatten.js":
/*!****************************!*\
  !*** ./src/dep/flatten.js ***!
  \****************************/
/*! exports provided: flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
The MIT License (MIT)

Copyright (c) 2014 Timo (https://github.com/timo22345)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
Usage example: http://jsfiddle.net/Nv78L/1/embedded/result/

Basic usage: flatten(document.getElementById('svg'));

What it does: Flattens elements (converts elements to paths and flattens transformations).
If the argument element (whose id is above 'svg') has children, or it's descendants has children,
these children elements are flattened also.

If you want to modify path coordinates using non-affine methods (eg. perspective distort),
you can convert all segments to cubic curves using:

flatten(document.getElementById('svg'), true);

There are also arguments 'toAbsolute' (convert coordinates to absolute) and 'dec',
number of digits after decimal separator.
*/
SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function (toElement) {
  return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
};

var p2s = /,?([achlmqrstvxz]),?/gi;

var convertToString = function convertToString(arr) {
  return arr.join(',').replace(p2s, '$1');
}; // Flattens transformations of element or it's children and sub-children
// elem: DOM element
// toCubics: converts all segments to cubics
// toAbsolute: converts all segments to Absolute
// dec: number of digits after decimal separator
// Returns: no return value


function flatten(elem, toCubics, toAbsolute, rectAsArgs, dec) {
  if (!elem) return;
  if (typeof rectAsArgs == 'undefined') rectAsArgs = false;
  if (typeof toCubics == 'undefined') toCubics = false;
  if (typeof toAbsolute == 'undefined') toAbsolute = false;
  if (typeof dec == 'undefined') dec = false;

  if (elem && elem.children && elem.children.length) {
    for (var i = 0, ilen = elem.children.length; i < ilen; i++) {
      //console.log(elem.children[i]);
      flatten(elem.children[i], toCubics, toAbsolute, rectAsArgs, dec);
    }

    elem.removeAttribute('transform');
    return;
  }

  if (!(elem instanceof SVGCircleElement || elem instanceof SVGRectElement || elem instanceof SVGEllipseElement || elem instanceof SVGLineElement || elem instanceof SVGPolygonElement || elem instanceof SVGPolylineElement || elem instanceof SVGPathElement)) return;
  var path_elem = convertToPath(elem, rectAsArgs); //console.log('path_elem', $(path_elem).wrap('<div />').parent().html() );
  //$(path_elem).unwrap();

  if (!path_elem || path_elem.getAttribute(d) == '') return 'M 0 0'; // Rounding coordinates to dec decimals

  if (dec || dec === 0) {
    if (dec > 15) dec = 15;else if (dec < 0) dec = 0;
  } else dec = false;

  function r(num) {
    if (dec !== false) return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);else return num;
  }

  var arr; //var pathDOM = path_elem.node;

  var pathDOM = path_elem;
  var d = pathDOM.getAttribute('d').trim(); // If you want to retain current path commans, set toCubics to false

  if (!toCubics) {
    // Set to false to prevent possible re-normalization.
    arr = parsePathString(d); // str to array

    var arr_orig = arr;
    arr = pathToAbsolute(arr); // mahvstcsqz -> uppercase
  } // If you want to modify path data using nonAffine methods,
  // set toCubics to true
  else {
      arr = path2curve(d); // mahvstcsqz -> MC

      var arr_orig = arr;
    }

  var svgDOM = pathDOM.ownerSVGElement; // Get the relation matrix that converts path coordinates
  // to SVGroot's coordinate space

  var matrix = pathDOM.getTransformToElement(svgDOM); // The following code can bake transformations
  // both normalized and non-normalized data
  // Coordinates have to be Absolute in the following

  var i = 0,
      j,
      m = arr.length,
      letter = '',
      letter_orig = '',
      x = 0,
      y = 0,
      point,
      newcoords = [],
      newcoords_orig = [],
      pt = svgDOM.createSVGPoint(),
      subpath_start = {},
      prevX = 0,
      prevY = 0;
  subpath_start.x = null;
  subpath_start.y = null;

  for (; i < m; i++) {
    letter = arr[i][0].toUpperCase();
    letter_orig = arr_orig[i][0];
    newcoords[i] = [];
    newcoords[i][0] = arr[i][0];

    if (letter == 'A') {
      x = arr[i][6];
      y = arr[i][7];
      pt.x = arr[i][6];
      pt.y = arr[i][7];
      newcoords[i] = arc_transform(arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], pt, matrix); // rounding arc parameters
      // x,y are rounded normally
      // other parameters at least to 5 decimals
      // because they affect more than x,y rounding

      newcoords[i][1] = newcoords[i][1]; //rx

      newcoords[i][2] = newcoords[i][2]; //ry

      newcoords[i][3] = newcoords[i][3]; //x-axis-rotation

      newcoords[i][6] = newcoords[i][6]; //x

      newcoords[i][7] = newcoords[i][7]; //y
    } else if (letter != 'Z') {
      // parse other segs than Z and A
      for (j = 1; j < arr[i].length; j = j + 2) {
        if (letter == 'V') y = arr[i][j];else if (letter == 'H') x = arr[i][j];else {
          x = arr[i][j];
          y = arr[i][j + 1];
        }
        pt.x = x;
        pt.y = y;
        point = pt.matrixTransform(matrix);

        if (letter == 'V' || letter == 'H') {
          newcoords[i][0] = 'L';
          newcoords[i][j] = point.x;
          newcoords[i][j + 1] = point.y;
        } else {
          newcoords[i][j] = point.x;
          newcoords[i][j + 1] = point.y;
        }
      }
    }

    if (letter != 'Z' && subpath_start.x === null || letter == 'M') {
      subpath_start.x = x;
      subpath_start.y = y;
    }

    if (letter == 'Z') {
      x = subpath_start.x;
      y = subpath_start.y;
    }
  } // Convert all that was relative back to relative
  // This could be combined to above, but to make code more readable
  // this is made separately.


  var prevXtmp = 0;
  var prevYtmp = 0;
  subpath_start.x = '';

  for (i = 0; i < newcoords.length; i++) {
    letter_orig = arr_orig[i][0];

    if (letter_orig == 'A' || letter_orig == 'M' || letter_orig == 'L' || letter_orig == 'C' || letter_orig == 'S' || letter_orig == 'Q' || letter_orig == 'T' || letter_orig == 'H' || letter_orig == 'V') {
      var len = newcoords[i].length;
      var lentmp = len;

      if (letter_orig == 'A') {
        newcoords[i][6] = r(newcoords[i][6]);
        newcoords[i][7] = r(newcoords[i][7]);
      } else {
        lentmp--;

        while (--lentmp) {
          newcoords[i][lentmp] = r(newcoords[i][lentmp]);
        }
      }

      prevX = newcoords[i][len - 2];
      prevY = newcoords[i][len - 1];
    } else if (letter_orig == 'a') {
      prevXtmp = newcoords[i][6];
      prevYtmp = newcoords[i][7];
      newcoords[i][0] = letter_orig;
      newcoords[i][6] = r(newcoords[i][6] - prevX);
      newcoords[i][7] = r(newcoords[i][7] - prevY);
      prevX = prevXtmp;
      prevY = prevYtmp;
    } else if (letter_orig == 'm' || letter_orig == 'l' || letter_orig == 'c' || letter_orig == 's' || letter_orig == 'q' || letter_orig == 't' || letter_orig == 'h' || letter_orig == 'v') {
      var len = newcoords[i].length;
      prevXtmp = newcoords[i][len - 2];
      prevYtmp = newcoords[i][len - 1];

      for (j = 1; j < len; j = j + 2) {
        if (letter_orig == 'h' || letter_orig == 'v') newcoords[i][0] = 'l';else newcoords[i][0] = letter_orig;
        newcoords[i][j] = r(newcoords[i][j] - prevX);
        newcoords[i][j + 1] = r(newcoords[i][j + 1] - prevY);
      }

      prevX = prevXtmp;
      prevY = prevYtmp;
    }

    if (letter_orig.toLowerCase() != 'z' && subpath_start.x == '' || letter_orig.toLowerCase() == 'm') {
      subpath_start.x = prevX;
      subpath_start.y = prevY;
    }

    if (letter_orig.toLowerCase() == 'z') {
      prevX = subpath_start.x;
      prevY = subpath_start.y;
    }
  }

  if (toAbsolute) newcoords = pathToAbsolute(newcoords);
  path_elem.setAttribute('d', convertToString(newcoords));
  path_elem.removeAttribute('transform');
} // Converts all shapes to path retaining attributes.
// oldElem - DOM element to be replaced by path. Can be one of the following:
//   ellipse, circle, path, line, polyline, polygon and rect.
// rectAsArgs - Boolean. If true, rect roundings will be as arcs. Otherwise as cubics.
// Return value: path element.
// Source: https://github.com/duopixel/Method-Draw/blob/master/editor/src/svgcanvas.js
// Modifications: Timo (https://github.com/timo22345)

function convertToPath(oldElem, rectAsArgs) {
  if (!oldElem) return; // Create new path element

  var path = document.createElementNS(oldElem.ownerSVGElement.namespaceURI, 'path'); // All attributes that path element can have

  var attrs = ['requiredFeatures', 'requiredExtensions', 'systemLanguage', 'id', 'xml:base', 'xml:lang', 'xml:space', 'onfocusin', 'onfocusout', 'onactivate', 'onclick', 'onmousedown', 'onmouseup', 'onmouseover', 'onmousemove', 'onmouseout', 'onload', 'alignment-baseline', 'baseline-shift', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cursor', 'direction', 'display', 'dominant-baseline', 'enable-background', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'image-rendering', 'kerning', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'mask', 'opacity', 'overflow', 'pointer-events', 'shape-rendering', 'stop-color', 'stop-opacity', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'unicode-bidi', 'visibility', 'word-spacing', 'writing-mode', 'class', 'style', 'externalResourcesRequired', 'transform', 'd', 'pathLength']; // Copy attributes of oldElem to path

  var attrName, attrValue;

  for (var i = 0, ilen = attrs.length; i < ilen; i++) {
    var attrName = attrs[i];
    var attrValue = oldElem.getAttribute(attrName);
    if (attrValue) path.setAttribute(attrName, attrValue);
  }

  var d = '';

  var valid = function valid(val) {
    return !(typeof val !== 'number' || val == Infinity || val < 0);
  }; // Possibly the cubed root of 6, but 1.81 works best


  var num = 1.81;
  var tag = oldElem.tagName;

  switch (tag) {
    case 'ellipse':
    case 'circle':
      var rx = +oldElem.getAttribute('rx'),
          ry = +oldElem.getAttribute('ry'),
          cx = +oldElem.getAttribute('cx'),
          cy = +oldElem.getAttribute('cy');

      if (tag == 'circle') {
        rx = ry = +oldElem.getAttribute('r');
      }

      d += convertToString([['M', cx - rx, cy], ['C', cx - rx, cy - ry / num, cx - rx / num, cy - ry, cx, cy - ry], ['C', cx + rx / num, cy - ry, cx + rx, cy - ry / num, cx + rx, cy], ['C', cx + rx, cy + ry / num, cx + rx / num, cy + ry, cx, cy + ry], ['C', cx - rx / num, cy + ry, cx - rx, cy + ry / num, cx - rx, cy], ['Z']]);
      break;

    case 'path':
      d = oldElem.getAttribute('d');
      break;

    case 'line':
      var x1 = oldElem.getAttribute('x1'),
          y1 = oldElem.getAttribute('y1');
      x2 = oldElem.getAttribute('x2');
      y2 = oldElem.getAttribute('y2');
      d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
      break;

    case 'polyline':
      d = 'M' + oldElem.getAttribute('points');
      break;

    case 'polygon':
      d = 'M' + oldElem.getAttribute('points') + 'Z';
      break;

    case 'rect':
      var rx = +oldElem.getAttribute('rx'),
          ry = +oldElem.getAttribute('ry'),
          b = oldElem.getBBox(),
          x = b.x,
          y = b.y,
          w = b.width,
          h = b.height; // Validity checks from http://www.w3.org/TR/SVG/shapes.html#RectElement:
      // If neither ‘rx’ nor ‘ry’ are properly specified, then set both rx and ry to 0. (This will result in square corners.)

      if (!valid(rx) && !valid(ry)) rx = ry = 0; // Otherwise, if a properly specified value is provided for ‘rx’, but not for ‘ry’, then set both rx and ry to the value of ‘rx’.
      else if (valid(rx) && !valid(ry)) ry = rx; // Otherwise, if a properly specified value is provided for ‘ry’, but not for ‘rx’, then set both rx and ry to the value of ‘ry’.
        else if (valid(ry) && !valid(rx)) rx = ry;else {
            // If rx is greater than half of ‘width’, then set rx to half of ‘width’.
            if (rx > w / 2) rx = w / 2; // If ry is greater than half of ‘height’, then set ry to half of ‘height’.

            if (ry > h / 2) ry = h / 2;
          }

      if (!rx && !ry) {
        d += convertToString([['M', x, y], ['L', x + w, y], ['L', x + w, y + h], ['L', x, y + h], ['L', x, y], ['Z']]);
      } else if (rectAsArgs) {
        d += convertToString([['M', x + rx, y], ['H', x + w - rx], ['A', rx, ry, 0, 0, 1, x + w, y + ry], ['V', y + h - ry], ['A', rx, ry, 0, 0, 1, x + w - rx, y + h], ['H', x + rx], ['A', rx, ry, 0, 0, 1, x, y + h - ry], ['V', y + ry], ['A', rx, ry, 0, 0, 1, x + rx, y]]);
      } else {
        var num = 2.19;
        if (!ry) ry = rx;
        d += convertToString([['M', x, y + ry], ['C', x, y + ry / num, x + rx / num, y, x + rx, y], ['L', x + w - rx, y], ['C', x + w - rx / num, y, x + w, y + ry / num, x + w, y + ry], ['L', x + w, y + h - ry], ['C', x + w, y + h - ry / num, x + w - rx / num, y + h, x + w - rx, y + h], ['L', x + rx, y + h], ['C', x + rx / num, y + h, x, y + h - ry / num, x, y + h - ry], ['L', x, y + ry], ['Z']]);
      }

      break;

    default:
      //path.parentNode.removeChild(path);
      break;
  }

  if (d) path.setAttribute('d', d); // Replace the current element with the converted one

  oldElem.parentNode.replaceChild(path, oldElem);
  return path;
}

; // This is needed to flatten transformations of elliptical arcs
// Note! This is not needed if Raphael.path2curve is used

function arc_transform(a_rh, a_rv, a_offsetrot, large_arc_flag, sweep_flag, endpoint, matrix, svgDOM) {
  function NEARZERO(B) {
    if (Math.abs(B) < 0.0000000000000001) return true;else return false;
  }

  var rh, rv, rot;
  var m = []; // matrix representation of transformed ellipse

  var s, c; // sin and cos helpers (the former offset rotation)

  var A, B, C; // ellipse implicit equation:

  var ac, A2, C2; // helpers for angle and halfaxis-extraction.

  rh = a_rh;
  rv = a_rv;
  a_offsetrot = a_offsetrot * (Math.PI / 180); // deg->rad

  rot = a_offsetrot;
  s = parseFloat(Math.sin(rot));
  c = parseFloat(Math.cos(rot)); // build ellipse representation matrix (unit circle transformation).
  // the 2x2 matrix multiplication with the upper 2x2 of a_mat is inlined.

  m[0] = matrix.a * +rh * c + matrix.c * rh * s;
  m[1] = matrix.b * +rh * c + matrix.d * rh * s;
  m[2] = matrix.a * -rv * s + matrix.c * rv * c;
  m[3] = matrix.b * -rv * s + matrix.d * rv * c; // to implict equation (centered)

  A = m[0] * m[0] + m[2] * m[2];
  C = m[1] * m[1] + m[3] * m[3];
  B = (m[0] * m[1] + m[2] * m[3]) * 2.0; // precalculate distance A to C

  ac = A - C; // convert implicit equation to angle and halfaxis:

  if (NEARZERO(B)) {
    a_offsetrot = 0;
    A2 = A;
    C2 = C;
  } else {
    if (NEARZERO(ac)) {
      A2 = A + B * 0.5;
      C2 = A - B * 0.5;
      a_offsetrot = Math.PI / 4.0;
    } else {
      // Precalculate radical:
      var K = 1 + B * B / (ac * ac); // Clamp (precision issues might need this.. not likely, but better save than sorry)

      if (K < 0) K = 0;else K = Math.sqrt(K);
      A2 = 0.5 * (A + C + K * ac);
      C2 = 0.5 * (A + C - K * ac);
      a_offsetrot = 0.5 * Math.atan2(B, ac);
    }
  } // This can get slightly below zero due to rounding issues.
  // it's save to clamp to zero in this case (this yields a zero length halfaxis)


  if (A2 < 0) A2 = 0;else A2 = Math.sqrt(A2);
  if (C2 < 0) C2 = 0;else C2 = Math.sqrt(C2); // now A2 and C2 are half-axis:

  if (ac <= 0) {
    a_rv = A2;
    a_rh = C2;
  } else {
    a_rv = C2;
    a_rh = A2;
  } // If the transformation matrix contain a mirror-component
  // winding order of the ellise needs to be changed.


  if (matrix.a * matrix.d - matrix.b * matrix.c < 0) {
    if (!sweep_flag) sweep_flag = 1;else sweep_flag = 0;
  } // Finally, transform arc endpoint. This takes care about the
  // translational part which we ignored at the whole math-showdown above.


  endpoint = endpoint.matrixTransform(matrix); // Radians back to degrees

  a_offsetrot = a_offsetrot * 180 / Math.PI;
  var r = ['A', a_rh, a_rv, a_offsetrot, large_arc_flag, sweep_flag, endpoint.x, endpoint.y];
  return r;
} // Parts of Raphaël 2.1.0 (MIT licence: http://raphaeljs.com/license.html)
// Contains eg. bugfixed path2curve() function


var R = {};
var has = 'hasOwnProperty';
var Str = String;
var array = 'array';
var isnan = {
  'NaN': 1,
  'Infinity': 1,
  '-Infinity': 1
};
var lowerCase = Str.prototype.toLowerCase;
var upperCase = Str.prototype.toUpperCase;
var objectToString = Object.prototype.toString;
var concat = 'concat';
var split = 'split';
var apply = 'apply';
var math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    toFloat = parseFloat,
    toInt = parseInt;
var p2s = /,?([achlmqrstvxz]),?/gi;
var pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig;
var pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;

R.is = function (o, type) {
  type = lowerCase.call(type);

  if (type == 'finite') {
    return !isnan[has](+o);
  }

  if (type == 'array') {
    return o instanceof Array;
  }

  return type == 'null' && o === null || type == _typeof(o) && o !== null || type == 'object' && o === Object(o) || type == 'array' && Array.isArray && Array.isArray(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
};

function clone(obj) {
  if (Object(obj) !== obj) {
    return obj;
  }

  var res = new obj.constructor();

  for (var key in obj) {
    if (obj[has](key)) {
      res[key] = clone(obj[key]);
    }
  }

  return res;
}

R._path2string = function () {
  return this.join(',').replace(p2s, '$1');
};

var pathClone = function pathClone(pathArray) {
  var res = clone(pathArray);
  res.toString = R._path2string;
  return res;
};

var paths = function paths(ps) {
  var p = paths.ps = paths.ps || {};
  if (p[ps]) p[ps].sleep = 100;else p[ps] = {
    sleep: 100
  };
  setTimeout(function () {
    for (var key in p) {
      if (p[has](key) && key != ps) {
        p[key].sleep--;
        !p[key].sleep && delete p[key];
      }
    }
  });
  return p[ps];
};

function catmullRom2bezier(crp, z) {
  var d = [];

  for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
    var p = [{
      x: +crp[i - 2],
      y: +crp[i - 1]
    }, {
      x: +crp[i],
      y: +crp[i + 1]
    }, {
      x: +crp[i + 2],
      y: +crp[i + 3]
    }, {
      x: +crp[i + 4],
      y: +crp[i + 5]
    }];

    if (z) {
      if (!i) {
        p[0] = {
          x: +crp[iLen - 2],
          y: +crp[iLen - 1]
        };
      } else {
        if (iLen - 4 == i) {
          p[3] = {
            x: +crp[0],
            y: +crp[1]
          };
        } else {
          if (iLen - 2 == i) {
            p[2] = {
              x: +crp[0],
              y: +crp[1]
            };
            p[3] = {
              x: +crp[2],
              y: +crp[3]
            };
          }
        }
      }
    } else {
      if (iLen - 4 == i) {
        p[3] = p[2];
      } else {
        if (!i) {
          p[0] = {
            x: +crp[i],
            y: +crp[i + 1]
          };
        }
      }
    }

    d.push(['C', (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
  }

  return d;
}

;

var parsePathString = function parsePathString(pathString) {
  if (!pathString) return null;
  var pth = paths(pathString);
  if (pth.arr) return pathClone(pth.arr);
  var paramCounts = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  },
      data = [];
  if (R.is(pathString, array) && R.is(pathString[0], array)) data = pathClone(pathString);

  if (!data.length) {
    Str(pathString).replace(pathCommand, function (a, b, c) {
      var params = [],
          name = b.toLowerCase();
      c.replace(pathValues, function (a, b) {
        b && params.push(+b);
      });

      if (name == 'm' && params.length > 2) {
        data.push([b][concat](params.splice(0, 2)));
        name = 'l';
        b = b == 'm' ? 'l' : 'L';
      }

      if (name == 'r') data.push([b][concat](params));else {
        while (params.length >= paramCounts[name]) {
          data.push([b][concat](params.splice(0, paramCounts[name])));
          if (!paramCounts[name]) break;
        }
      }
    });
  }

  data.toString = R._path2string;
  pth.arr = pathClone(data);
  return data;
};

function repush(array, item) {
  for (var i = 0, ii = array.length; i < ii; i++) {
    if (array[i] === item) {
      return array.push(array.splice(i, 1)[0]);
    }
  }
}

var pathToAbsolute = cacher(function (pathArray) {
  //var pth = paths(pathArray); // Timo: commented to prevent multiple caching
  // for some reason only FF proceed correctly
  // when not cached using cacher() around
  // this function.
  //if (pth.abs) return pathClone(pth.abs)
  if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) pathArray = parsePathString(pathArray);
  if (!pathArray || !pathArray.length) return [['M', 0, 0]];
  var res = [],
      x = 0,
      y = 0,
      mx = 0,
      my = 0,
      start = 0;

  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }

  var crz = pathArray.length == 3 && pathArray[0][0] == 'M' && pathArray[1][0].toUpperCase() == 'R' && pathArray[2][0].toUpperCase() == 'Z';

  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = []);
    pa = pathArray[i];

    if (pa[0] != upperCase.call(pa[0])) {
      r[0] = upperCase.call(pa[0]);

      switch (r[0]) {
        case 'A':
          r[1] = pa[1];
          r[2] = pa[2];
          r[3] = pa[3];
          r[4] = pa[4];
          r[5] = pa[5];
          r[6] = +(pa[6] + x);
          r[7] = +(pa[7] + y);
          break;

        case 'V':
          r[1] = +pa[1] + y;
          break;

        case 'H':
          r[1] = +pa[1] + x;
          break;

        case 'R':
          var dots = [x, y][concat](pa.slice(1));

          for (var j = 2, jj = dots.length; j < jj; j++) {
            dots[j] = +dots[j] + x;
            dots[++j] = +dots[j] + y;
          }

          res.pop();
          res = res[concat](catmullRom2bezier(dots, crz));
          break;

        case 'M':
          mx = +pa[1] + x;
          my = +pa[2] + y;

        default:
          for (j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + (j % 2 ? x : y);
          }

      }
    } else {
      if (pa[0] == 'R') {
        dots = [x, y][concat](pa.slice(1));
        res.pop();
        res = res[concat](catmullRom2bezier(dots, crz));
        r = ['R'][concat](pa.slice(-2));
      } else {
        for (var k = 0, kk = pa.length; k < kk; k++) {
          r[k] = pa[k];
        }
      }
    }

    switch (r[0]) {
      case 'Z':
        x = mx;
        y = my;
        break;

      case 'H':
        x = r[1];
        break;

      case 'V':
        y = r[1];
        break;

      case 'M':
        mx = r[r.length - 2];
        my = r[r.length - 1];

      default:
        x = r[r.length - 2];
        y = r[r.length - 1];
    }
  }

  res.toString = R._path2string; //pth.abs = pathClone(res);

  return res;
});

function cacher(f, scope, postprocessor) {
  function newf() {
    var arg = Array.prototype.slice.call(arguments, 0),
        args = arg.join("\u2400"),
        cache = newf.cache = newf.cache || {},
        count = newf.count = newf.count || [];

    if (cache.hasOwnProperty(args)) {
      for (var i = 0, ii = count.length; i < ii; i++) {
        if (count[i] === args) {
          count.push(count.splice(i, 1)[0]);
        }
      }

      return postprocessor ? postprocessor(cache[args]) : cache[args];
    }

    count.length >= 1E3 && delete cache[count.shift()];
    count.push(args);
    cache[args] = f.apply(scope, arg);
    return postprocessor ? postprocessor(cache[args]) : cache[args];
  }

  return newf;
}

var l2c = function l2c(x1, y1, x2, y2) {
  return [x1, y1, x2, y2, x2, y2];
},
    q2c = function q2c(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3,
      _23 = 2 / 3;

  return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
},
    a2c = cacher(function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
  var _120 = PI * 120 / 180,
      rad = PI / 180 * (+angle || 0),
      res = [],
      xy,
      rotate = cacher(function (x, y, rad) {
    var X = x * Math.cos(rad) - y * Math.sin(rad),
        Y = x * Math.sin(rad) + y * Math.cos(rad);
    return {
      x: X,
      y: Y
    };
  });

  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;
    var cos = Math.cos(PI / 180 * angle),
        sin = Math.sin(PI / 180 * angle),
        x = (x1 - x2) / 2,
        y = (y1 - y2) / 2;
    var h = x * x / (rx * rx) + y * y / (ry * ry);

    if (h > 1) {
      h = Math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }

    var rx2 = rx * rx,
        ry2 = ry * ry,
        k = (large_arc_flag == sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
        cx = k * rx * y / ry + (x1 + x2) / 2,
        cy = k * -ry * x / rx + (y1 + y2) / 2,
        f1 = Math.asin(((y1 - cy) / ry).toFixed(9)),
        f2 = Math.asin(((y2 - cy) / ry).toFixed(9));
    f1 = x1 < cx ? PI - f1 : f1;
    f2 = x2 < cx ? PI - f2 : f2;
    f1 < 0 && (f1 = PI * 2 + f1);
    f2 < 0 && (f2 = PI * 2 + f2);

    if (sweep_flag && f1 > f2) {
      f1 = f1 - PI * 2;
    }

    if (!sweep_flag && f2 > f1) {
      f2 = f2 - PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }

  var df = f2 - f1;

  if (Math.abs(df) > _120) {
    var f2old = f2,
        x2old = x2,
        y2old = y2;
    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * Math.cos(f2);
    y2 = cy + ry * Math.sin(f2);
    res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }

  df = f2 - f1;
  var c1 = Math.cos(f1),
      s1 = Math.sin(f1),
      c2 = Math.cos(f2),
      s2 = Math.sin(f2),
      t = Math.tan(df / 4),
      hx = 4 / 3 * rx * t,
      hy = 4 / 3 * ry * t,
      m1 = [x1, y1],
      m2 = [x1 + hx * s1, y1 - hy * c1],
      m3 = [x2 + hx * s2, y2 - hy * c2],
      m4 = [x2, y2];
  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];
  if (recursive) return [m2, m3, m4].concat(res);else {
    res = [m2, m3, m4].concat(res).join().split(',');
    var newres = [];

    for (var i = 0, ii = res.length; i < ii; i++) {
      newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }

    return newres;
  }
});

var path2curve = cacher(function (path, path2) {
  var pth = !path2 && paths(path);
  if (!path2 && pth.curve) return pathClone(pth.curve);

  var p = pathToAbsolute(path),
      p2 = path2 && pathToAbsolute(path2),
      attrs = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  },
      attrs2 = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  },
      processPath = function processPath(path, d, pcom) {
    var nx, ny;

    if (!path) {
      return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
    }

    !(path[0] in {
      T: 1,
      Q: 1
    }) && (d.qx = d.qy = null);

    switch (path[0]) {
      case 'M':
        d.X = path[1];
        d.Y = path[2];
        break;

      case 'A':
        path = ['C'][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
        break;

      case 'S':
        if (pcom == 'C' || pcom == 'S') {
          nx = d.x * 2 - d.bx;
          ny = d.y * 2 - d.by;
        } else {
          nx = d.x;
          ny = d.y;
        }

        path = ['C', nx, ny][concat](path.slice(1));
        break;

      case 'T':
        if (pcom == 'Q' || pcom == 'T') {
          d.qx = d.x * 2 - d.qx;
          d.qy = d.y * 2 - d.qy;
        } else {
          d.qx = d.x;
          d.qy = d.y;
        }

        path = ['C'][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
        break;

      case 'Q':
        d.qx = path[1];
        d.qy = path[2];
        path = ['C'][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
        break;

      case 'L':
        path = ['C'][concat](l2c(d.x, d.y, path[1], path[2]));
        break;

      case 'H':
        path = ['C'][concat](l2c(d.x, d.y, path[1], d.y));
        break;

      case 'V':
        path = ['C'][concat](l2c(d.x, d.y, d.x, path[1]));
        break;

      case 'Z':
        path = ['C'][concat](l2c(d.x, d.y, d.X, d.Y));
        break;
    }

    return path;
  },
      fixArc = function fixArc(pp, i) {
    if (pp[i].length > 7) {
      pp[i].shift();
      var pi = pp[i];

      while (pi.length) {
        pcoms1[i] = 'A';
        p2 && (pcoms2[i] = 'A');
        pp.splice(i++, 0, ['C'][concat](pi.splice(0, 6)));
      }

      pp.splice(i, 1);
      ii = mmax(p.length, p2 && p2.length || 0);
    }
  },
      fixM = function fixM(path1, path2, a1, a2, i) {
    if (path1 && path2 && path1[i][0] == 'M' && path2[i][0] != 'M') {
      path2.splice(i, 0, ['M', a2.x, a2.y]);
      a1.bx = 0;
      a1.by = 0;
      a1.x = path1[i][1];
      a1.y = path1[i][2];
      ii = mmax(p.length, p2 && p2.length || 0);
    }
  },
      pcoms1 = [],
      pcoms2 = [],
      pfirst = '',
      pcom = '';

  for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
    p[i] && (pfirst = p[i][0]);

    if (pfirst != 'C') {
      pcoms1[i] = pfirst;
      i && (pcom = pcoms1[i - 1]);
    }

    p[i] = processPath(p[i], attrs, pcom);
    if (pcoms1[i] != 'A' && pfirst == 'C') pcoms1[i] = 'C';
    fixArc(p, i);

    if (p2) {
      p2[i] && (pfirst = p2[i][0]);

      if (pfirst != 'C') {
        pcoms2[i] = pfirst;
        i && (pcom = pcoms2[i - 1]);
      }

      p2[i] = processPath(p2[i], attrs2, pcom);
      if (pcoms2[i] != 'A' && pfirst == 'C') pcoms2[i] = 'C';
      fixArc(p2, i);
    }

    fixM(p, p2, attrs, attrs2, i);
    fixM(p2, p, attrs2, attrs, i);
    var seg = p[i],
        seg2 = p2 && p2[i],
        seglen = seg.length,
        seg2len = p2 && seg2.length;
    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
    attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
    attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
    attrs2.x = p2 && seg2[seg2len - 2];
    attrs2.y = p2 && seg2[seg2len - 1];
  }

  if (!p2) pth.curve = pathClone(p);
  return p2 ? [p, p2] : p;
}, null, pathClone);

/***/ }),

/***/ "./src/directive/highlight.js":
/*!************************************!*\
  !*** ./src/directive/highlight.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/github-gist.css */ "./node_modules/highlight.js/styles/github-gist.css");
/* harmony import */ var highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);



highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2___default.a);
 // import 'highlight.js/styles/monokai.css';



function doHighlight(el) {
  el.querySelectorAll('pre code').forEach(function (block) {
    if (!block.classList.contains('hljs')) {
      highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.highlightBlock(block);
    }
  });
}

vue__WEBPACK_IMPORTED_MODULE_4___default.a.directive('highlight', {
  inserted: function inserted(el) {
    doHighlight(el);
  },
  update: function update(el) {
    doHighlight(el);
  }
});

/***/ }),

/***/ "./src/directive/mark.js":
/*!*******************************!*\
  !*** ./src/directive/mark.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);




function doMark(el, keywords) {
  var instance = el.__markInstance;

  function doMark() {
    el.__markInstance.mark(keywords, {
      diacritics: true,
      separateWordSearch: true
    });
  }

  if (!instance) {
    el.__markInstance = new mark_js__WEBPACK_IMPORTED_MODULE_0___default.a(el);
    doMark();
  } else {
    el.__markInstance.unmark({
      done: function done() {
        doMark();
      }
    });
  }
}

vue__WEBPACK_IMPORTED_MODULE_1___default.a.directive('mark', {
  inserted: function inserted(el, binding) {
    el.__doMarkDebounced = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(doMark, 500, {
      trailing: true,
      leading: false
    });

    el.__doMarkDebounced(el, binding.value);
  },
  update: function update(el, binding) {
    el.__doMarkDebounced(el, binding.value);
  }
});

/***/ }),

/***/ "./src/docHelper.js":
/*!**************************!*\
  !*** ./src/docHelper.js ***!
  \**************************/
/*! exports provided: convertPathToId, getOutlineAsync, preload, getPageOutlineAsync, getPageTotalDescAsync, searchAllAsync, searchOutlineAsync, getOutlineNode, getDefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPathToId", function() { return convertPathToId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutlineAsync", function() { return getOutlineAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageOutlineAsync", function() { return getPageOutlineAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageTotalDescAsync", function() { return getPageTotalDescAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAllAsync", function() { return searchAllAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchOutlineAsync", function() { return searchOutlineAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutlineNode", function() { return getOutlineNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPage", function() { return getDefaultPage; });
/* harmony import */ var string_similarity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-similarity-js */ "./node_modules/string-similarity-js/dist/string-similarity.js");
/* harmony import */ var string_similarity_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_similarity_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/shared.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Global doc schema manager.
// Not in the vue observer.
// import {fetch} from 'whatwg-fetch';
// import levenshtein from 'js-levenshtein';
// stringSimilarity has better result than levenshtein when handling typo

 // import stripHtml from 'string-strip-html';
// import Fuse from 'fuse.js';

var baseUrl;
var cdnRoot;
var rootName;
var docVersion; // Cached data.

var outlineFetcher;
var outline;
var descStorage = {};
var pageOutlines;
var outlineNodesMap = {};
var allNodesPaths = [];

function fetchDocContentJS(basename) {
  return new Promise(function (resolve, reject) {
    var varname = Object(_shared__WEBPACK_IMPORTED_MODULE_1__["getDocJSONPVarNname"])(basename);
    var url = "".concat(cdnRoot, "/").concat(basename, "?").concat(docVersion);
    var script = document.createElement('script');
    script.async = true;

    script.onload = function () {
      if (window[varname]) {
        resolve(window[varname]);
      } else {
        reject("Load failed. ".concat(varname));
      }
    };

    script.src = url;
    document.body.appendChild(script);
  });
}

function stripHtml(str) {
  // Simple and fast regexp html replacer
  // string-strip-html is toooo slow.
  return str.replace(/<[^>]*>?/gm, '');
}
/**
 * Convert path to element id.
 */


function convertPathToId(path) {
  return 'doc-content-' + path.replace(/[\. <>]/g, '-');
}
/**
 * Get doc json async
 */

function getOutlineAsync() {
  if (!outlineFetcher) {
    throw new Error('Preload json with url first');
  }

  return outlineFetcher;
}

function processOutlines(json) {
  outline = json;
  pageOutlines = {};

  function joinPath(a, b, connector) {
    return a ? a + connector + b : b;
  }

  function processNode(node, parentNode) {
    if (!node.type) {
      node.type = _typeof(node["default"]);
    }

    if (!(node.type instanceof Array)) {
      node.type = [node.type];
    } // Normalize to any


    for (var i = 0; i < node.type.length; i++) {
      if (node.type[i] === '*') {
        node.type[i] = 'any';
      }
    }

    if (node.arrayItemType) {
      node.path = joinPath(parentNode.path, node.arrayItemType, '-');
    } else {
      node.path = joinPath(parentNode.path, node.prop, '.');
    }

    if (node.children) {
      // Ignore option.series, option.dataZoom, option.visualMap
      if (node.path.indexOf('.') < 0 && !node.children[0].arrayItemType) {
        pageOutlines[node.path] = node;
      }

      for (var _i = 0; _i < node.children.length; _i++) {
        processNode(node.children[_i], node);
      }
    }

    outlineNodesMap[node.path] = node;
  }

  for (var i = 0; i < json.children.length; i++) {
    processNode(json.children[i], {});
  }

  json.isRoot = true;
  allNodesPaths = Object.keys(outlineNodesMap);
  return json;
}
/**
 * Preload doc json
 */


function preload(_baseUrl, _cdnRoot, _rootName, _docVersion) {
  baseUrl = _baseUrl;
  cdnRoot = _cdnRoot;
  rootName = _rootName;
  docVersion = _docVersion || '1';

  if (!outlineFetcher) {
    outlineFetcher = fetchDocContentJS("".concat(rootName, "-outline.js")).then(function (_json) {
      return processOutlines(_json);
    });
  }

  return outlineFetcher;
}
/**
 * Get outline of page
 */

function getPageOutlineAsync(targetPath) {
  var pagePath = targetPath.split('.')[0];
  return getOutlineAsync().then(function () {
    return pageOutlines[pagePath] // Use top outline for `option.color`, etc.
    || getOutlineAsync();
  });
}

function createIndexer(map, pagePath) {
  var list = [];

  for (var path in map) {
    list.push({
      path: pagePath ? pagePath + '.' + path : path,
      content: map[path].desc,
      text: stripHtml(map[path].desc)
    });
  }

  return {
    search: function search(query) {
      var results = []; // TODO 常用词汇联想

      var tokens = query.split(/[ +,]/).filter(function (t) {
        return !!t;
      }).map(function (token) {
        // Case insensitive
        return new RegExp(token, 'i');
      });

      if (!tokens.length) {
        return results;
      }

      for (var k = 0; k < list.length; k++) {
        var searched = true;

        for (var i = 0; i < tokens.length; i++) {
          if (!tokens[i].test(list[k].text) && !tokens[i].test(list[k].path)) {
            searched = false;
            break;
          }
        }

        if (searched) {
          results.push(list[k]);
        }
      }

      return results;
    }
  };
}

function ensurePageDescStorage(targetPath) {
  if (!pageOutlines) {
    throw new Error('Outline data is not loaded.');
  }

  var pagePath = targetPath.split('.')[0]; // Configuration like `option.color`, `option.backgroundColor` is in the `option` page.
  // Configuration like `option.series-bar` is in the `option.series-bar` page.

  var partionKey = !pageOutlines[pagePath] || !targetPath ? rootName : rootName + '.' + pagePath;

  if (!descStorage[partionKey]) {
    var fetcher = fetchDocContentJS("".concat(partionKey, ".js"));
    descStorage[partionKey] = {
      fetcher: fetcher
    };
    fetcher.then(function (map) {
      descStorage[partionKey].indexer = createIndexer(map, pagePath);
    });
  }

  return descStorage[partionKey];
}
/**
 * Get all description of page.
 */


function getPageTotalDescAsync(targetPath) {
  return ensurePageDescStorage(targetPath).fetcher;
} // TODO Cancel

/**
 * Do loading page desc files and searching progressively
 */

function searchAllAsync(queryString, onAdd) {
  return getOutlineAsync().then(function () {
    return new Promise(function (resolve) {
      var asyncCount = 0;

      function decreaseAsyncCount() {
        asyncCount--;

        if (!asyncCount) {
          resolve();
        }
      }

      function searchInPage(pagePath) {
        var obj = ensurePageDescStorage(pagePath);

        if (obj.indexer) {
          onAdd(obj.indexer.search(queryString));
        } else {
          asyncCount++;
          obj.fetcher.then(function () {
            onAdd(obj.indexer.search(queryString));
            decreaseAsyncCount();
          })["catch"](function (e) {
            decreaseAsyncCount();
          });
        }
      } // Search in root page.


      searchInPage('');

      for (var pagePath in pageOutlines) {
        searchInPage(pagePath);
      }

      if (!asyncCount) {
        resolve();
      }
    });
  });
}
var querySearchScores;
/**
 * Search outline with given query. Return list of nodes
 */

function searchOutlineAsync(queryString) {
  var numberLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return getOutlineAsync().then(function () {
    var lists = [];

    for (var i = 0; i < allNodesPaths.length; i++) {
      if (lists.length >= numberLimit) {
        return lists;
      }

      var p = allNodesPaths[i];

      if (p.indexOf(queryString) >= 0) {
        lists.push(getOutlineNode(p));
      }
    }

    if (lists.length < numberLimit) {
      if (!querySearchScores) {
        querySearchScores = new Uint8Array(allNodesPaths.length);
      }

      var matchScoreCount = 0;

      for (var _i2 = 0; _i2 < allNodesPaths.length; _i2++) {
        querySearchScores[_i2] = Object(string_similarity_js__WEBPACK_IMPORTED_MODULE_0__["stringSimilarity"])(allNodesPaths[_i2], queryString) * 255;

        if (querySearchScores[_i2] > 50) {
          matchScoreCount++;
        }
      }

      var picked = {};
      var safeCount = 0;
      var safeProtect = 200;

      while (lists.length < numberLimit && matchScoreCount > 0) {
        var maxScore = 0;
        var maxIndex = void 0;

        for (var _i3 = 0; _i3 < querySearchScores.length; _i3++) {
          if (querySearchScores[_i3] > maxScore && !picked[_i3]) {
            maxIndex = _i3;
            maxScore = querySearchScores[_i3];
          }
        }

        if (maxScore > 50) {
          // Threshold
          picked[maxIndex] = true;
          lists.push(getOutlineNode(allNodesPaths[maxIndex]));
          matchScoreCount--;
        }

        safeCount++;

        if (safeCount > safeProtect) {
          break;
        }
      }
    }

    return lists;
  });
}
function getOutlineNode(path) {
  return outlineNodesMap[path];
}
function getDefaultPage(wrongPath) {
  if (!wrongPath) {
    return Object.keys(pageOutlines)[0];
  } // Compatitable with series-line.data[i]


  if (getOutlineNode(wrongPath.replace('[i]', ''))) {
    return wrongPath.replace('[i]', '');
  } // Compatitable with series.data. Convert to series-line.data


  var wrongPathParts = wrongPath.split('.');
  var correctedPath = wrongPathParts.map(function (pathItem) {
    var itemNode = getOutlineNode(pathItem);
    var firstChild = itemNode && itemNode.children && itemNode && itemNode.children[0];

    if (firstChild && firstChild.arrayItemType) {
      return pathItem + '-' + firstChild.arrayItemType;
    }

    return pathItem;
  });

  if (getOutlineNode(correctedPath.join('.'))) {
    return correctedPath.join('.');
  } // Else find the nearest


  var mostLikeKey;
  var maxSimilarity = -Infinity;

  for (var i = 0; i < allNodesPaths.length; i++) {
    var p = allNodesPaths[i];
    var similarity = Object(string_similarity_js__WEBPACK_IMPORTED_MODULE_0__["stringSimilarity"])(wrongPath, p);

    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      mostLikeKey = p;
    }
  }

  return mostLikeKey;
}

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  en: {
    nav: {
      option: 'Option',
      API: 'API',
      tutorial: 'Tutorial',
      optionGL: 'GL',
      collapseAll: 'Collapse All'
    },
    search: {
      placeholder: 'Search document',
      resultTitle: 'Search Result',
      showMore: 'Show more',
      foundCountBrief: 'Found ${searchResultCount} items',
      displayCountBrief: '${displayResultCount} displayed'
    },
    content: {
      properties: 'Properties'
    },
    example: {
      title: 'Preview',
      titleShort: 'Preview',
      intro: 'Try different values of the option and preview!',
      noExample: 'No example available for current component.',
      tryDesc: 'Try It',
      defaultColor: 'Default Color',
      booleanDesc: 'Enable',
      vectorSetSeparate: 'SEPARATE',
      absoluteMode: 'ABSOLUTE',
      percentMode: 'PERCENT',
      inputPlaceholder: 'Input to change the text content',
      builtin: 'Builtin',
      upload: 'Upload SVG or PNG',
      setOptionError: 'Something Unexpected Happerns. Click refresh to try again!',
      refresh: 'Refresh',
      close: 'Close',
      changeLayout: 'Change Layout',
      layout: {
        auto: 'Auto',
        right: 'Right',
        top: 'Top',
        bottom: 'Bottom'
      }
    }
  },
  zh: {
    nav: {
      option: '配置项',
      API: 'API',
      tutorial: '教程',
      optionGL: 'GL配置',
      collapseAll: '收起所有'
    },
    search: {
      placeholder: '搜索文档，回车查看更多结果',
      resultTitle: '文档搜索结果',
      showMore: '显示更多',
      foundCountBrief: '找到 ${searchResultCount} 条配置项',
      displayCountBrief: '显示 ${displayResultCount} 条'
    },
    content: {
      properties: '所有属性'
    },
    example: {
      title: '配置项效果预览',
      titleShort: '预览',
      intro: '调节控件可预览配置项不同取值的效果',
      noExample: '当前组件暂无可用示例',
      tryDesc: '试一试',
      defaultColor: '默认颜色',
      booleanDesc: '开启',
      vectorSetSeparate: '分别设置',
      absoluteMode: '绝对值',
      percentMode: '百分比',
      inputPlaceholder: '输入改变文本',
      builtin: '内置',
      upload: '上传 SVG 或 PNG',
      setOptionError: '发生了一些意料之外的错误，点击刷新再试试！',
      refresh: '刷新',
      close: '关闭',
      changeLayout: '切换布局',
      layout: {
        auto: '自动',
        right: '右侧',
        top: '顶部',
        bottom: '底部'
      }
    }
  }
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _AppMobile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppMobile.vue */ "./src/AppMobile.vue");
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docHelper */ "./src/docHelper.js");
/* harmony import */ var _directive_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/highlight */ "./src/directive/highlight.js");
/* harmony import */ var _directive_mark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/mark */ "./src/directive/mark.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route */ "./src/route.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./responsive */ "./src/responsive.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i18n */ "./src/i18n.js");











/**
 *
 * @param {HTMLDivElement|string} el
 * @param {Object} option
 * @param {string} option.baseUrl
 * @param {string} [option.cdnRoot] If not provided, use `option.baseUrl`.
 * @param {string} option.docType
 * @param {string} option.locale
 * @param {string} option.version
 */

function init(el, option) {
  Object(_responsive__WEBPACK_IMPORTED_MODULE_8__["initResponsive"])();
  var cdnRoot = option.cdnRoot || option.baseUrl;
  Object(_docHelper__WEBPACK_IMPORTED_MODULE_4__["preload"])(option.baseUrl, cdnRoot, option.docType, option.version).then(function () {
    Object(_route__WEBPACK_IMPORTED_MODULE_7__["initRoute"])();
    _store__WEBPACK_IMPORTED_MODULE_9__["store"].docType = option.docType;
    _store__WEBPACK_IMPORTED_MODULE_9__["store"].locale = option.locale;

    if (typeof el === 'string') {
      el = document.querySelector(el);
    }

    if (!el) {
      throw new Error('Can\'t find el.');
    }

    var container = document.createElement('div');
    el.appendChild(container);
    var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]({
      locale: option.locale,
      fallbackLocale: 'en',
      messages: _i18n__WEBPACK_IMPORTED_MODULE_10__["default"]
    });
    new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
      i18n: i18n,
      el: container,
      render: function render(h) {
        console.log('iMobile: ', _store__WEBPACK_IMPORTED_MODULE_9__["store"].isMobile);
        return _store__WEBPACK_IMPORTED_MODULE_9__["store"].isMobile ? h(_AppMobile_vue__WEBPACK_IMPORTED_MODULE_3__["default"]) : h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    });
  });
}

/***/ }),

/***/ "./src/responsive.js":
/*!***************************!*\
  !*** ./src/responsive.js ***!
  \***************************/
/*! exports provided: initResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initResponsive", function() { return initResponsive; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");


function handleResize() {
  if (window.innerWidth < 600) {
    _store__WEBPACK_IMPORTED_MODULE_0__["store"].isMobile = true;
  } else {
    _store__WEBPACK_IMPORTED_MODULE_0__["store"].isMobile = false;
  }
}

function initResponsive() {
  window.addEventListener('resize', handleResize);
  handleResize();
}

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/*! exports provided: initRoute, directTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRoute", function() { return initRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directTo", function() { return directTo; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");


function handleHashUpdate() {
  var hash = decodeURIComponent(window.location.hash.slice(1));

  if (hash.startsWith('/search/')) {
    var searchQuery = hash.substr('/search/'.length);
    _store__WEBPACK_IMPORTED_MODULE_0__["store"].fuzzySearch = true;
    _store__WEBPACK_IMPORTED_MODULE_0__["store"].searchQuery = searchQuery;
  } else if (hash) {
    // Else consider it as path.
    _store__WEBPACK_IMPORTED_MODULE_0__["store"].currentPath = hash; // Reset search status

    _store__WEBPACK_IMPORTED_MODULE_0__["store"].fuzzySearch = false;
  }
}

function initRoute() {
  window.addEventListener('hashchange', function (e) {
    handleHashUpdate();
  });
  handleHashUpdate();
}
function directTo(hash) {
  window.location.hash = '#' + encodeURIComponent(hash);
}

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Shared function in both client and toolchain.
module.exports.getDocJSONPVarNname = function (path) {
  var prefix = '__EC_DOC_';
  path = path.replace(/\.js$/, '').replace(/\.json$/, '').replace(/[-.\/]/g, '_');
  return prefix + path;
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: optionExampleLayouts, updateOptionExampleLayout, store, getPagePath, isOptionDoc, changeOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionExampleLayouts", function() { return optionExampleLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOptionExampleLayout", function() { return updateOptionExampleLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagePath", function() { return getPagePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOptionDoc", function() { return isOptionDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOption", function() { return changeOption; });
/* harmony import */ var _docHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docHelper */ "./src/docHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var OPTION_EXAMPLE_LAYOUT = '_ec_option_example_layout';
var optionExampleLayouts = ['auto', 'top', 'bottom', 'right'];
function updateOptionExampleLayout(layout) {
  if (layout === 'auto') {
    store.computedOptionExampleLayout = window.innerWidth < 1400 ? 'bottom' : 'right';
  } else {
    store.computedOptionExampleLayout = layout;
  }

  store.optionExampleLayout = layout;
  window.localStorage && window.localStorage.setItem(OPTION_EXAMPLE_LAYOUT, layout);
}

function getInitialOptionExampleLayout() {
  var layout = {};
  var savedLayout = window.localStorage && window.localStorage.getItem(OPTION_EXAMPLE_LAYOUT);

  if (!savedLayout || savedLayout === 'auto' || optionExampleLayouts.indexOf(savedLayout) < 0) {
    layout.mode = 'auto';
    layout.computedMode = window.innerWidth < 1400 ? 'bottom' : 'right';
  } else {
    layout.mode = layout.computedMode = savedLayout;
  }

  return layout;
}

var initialOptionExampleLayout = getInitialOptionExampleLayout();
var store = {
  docType: '',
  // Current selected option
  currentPath: '',
  // Search content
  fuzzySearch: false,
  searchQuery: '',
  isMobile: false,
  locale: 'zh',
  showOptionExample: false,
  allOptionExamples: null,
  // Clear before setOption
  cleanMode: false,
  currentExampleName: '',
  currentExampleOption: '',
  // Can be `top`, `bottom`, `right`, `auto`
  optionExampleLayout: initialOptionExampleLayout.mode,
  // Can be `top`, `bottom`, `right`
  computedOptionExampleLayout: initialOptionExampleLayout.computedMode
};
function getPagePath() {
  if (store.isMobile) {
    // No hierarchy
    var parts = store.currentPath.split('.');
    var node = Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getOutlineNode"])(store.currentPath);
    var isLeaf = node && (!node.children || !node.children.length);

    if (isLeaf && parts.length > 1) {
      // Is leaf
      parts.pop();
    }

    return parts.join('.');
  } else {
    return store.currentPath.split('.')[0];
  }
}
function isOptionDoc() {
  return store.docType === 'option' || store.docType === 'option-gl';
}
var componentCanHost = ['markPoint', 'markLine', 'markArea', 'tooltip', 'axisPointer'];

function makeDefaultOption(key) {
  if (key === 'markPoint') {
    return {
      data: [{
        type: 'max'
      }]
    };
  } else if (key === 'markLine') {
    return {
      data: [{
        type: 'average'
      }]
    };
  } else if (key === 'markArea') {
    return {
      data: [[{
        type: 'min'
      }, {
        type: 'max'
      }]]
    };
  }
}

function changeOption(option, path, value) {
  function changeOptionRecursive(obj, pathParts, objKey, nodePath) {
    var itemStr = pathParts.shift();
    nodePath = (nodePath ? nodePath + '.' : '') + itemStr;

    if (objKey === 'data' && (_typeof(obj) !== 'object' || Array.isArray(obj))) {
      // Convert number to object
      obj = {
        value: obj
      };
    } // Clone a new object because the original one is freezed and cant be changed.


    obj = Object.assign({}, obj);

    if (!pathParts.length) {
      if (value === undefined) {
        delete obj[itemStr];
        return obj;
      } else {
        obj[itemStr] = value;
        return obj;
      }
    }

    var subtypeItems = itemStr.split('-');
    var key = subtypeItems[0];
    var subtype = subtypeItems[1]; // TODO: If prop not exists and it should be an array.

    if (obj[key] == null) {
      var outlineNode = Object(_docHelper__WEBPACK_IMPORTED_MODULE_0__["getOutlineNode"])(nodePath);
      obj[key] = makeDefaultOption(key) || (outlineNode && outlineNode.isArray ? [] : {});
    }

    var prop = obj[key];

    if (Array.isArray(prop)) {
      if (key === 'series') {
        // Only set all on series.
        obj[key] = prop.map(function (childObj, idx) {
          if (subtype && childObj.type !== subtype) {
            return childObj;
          }

          return changeOptionRecursive(childObj, pathParts.slice(), key, nodePath);
        });
      } else {
        // Only change the first one.
        // TODO: Should be able to choose the index.
        obj[key] = prop.slice();
        obj[key][0] = changeOptionRecursive(obj[key][0] || {}, pathParts.slice(), key, nodePath);
      }
    } else {
      if (subtype && prop.type !== subtype) {
        obj[key] = prop;
      }

      obj[key] = changeOptionRecursive(prop, pathParts.slice(), key, nodePath);
    }

    return obj;
  } // For the components can be hosted on other components, like axisPointer, markers.


  function findAndSetHostComponentRecursively(root, componentKey) {
    if (root[componentKey]) {
      return changeOptionRecursive(root, path.split('.'), '', '');
    }

    if (Array.isArray(root)) {
      var newArr = [];

      for (var i = 0; i < root.length; i++) {
        newArr.push(findAndSetHostComponentRecursively(root[i], componentKey));
      }

      return newArr;
    } else if (_typeof(root) === 'object') {
      var newObj = {};

      for (var key in root) {
        if (root.hasOwnProperty(key)) {
          newObj[key] = findAndSetHostComponentRecursively(root[key], componentKey);
        }
      }

      return newObj;
    }

    return root;
  }

  var componentKey = path.split('.')[0];

  if (componentKey === 'timeline' && option.baseOption) {
    return Object.assign({}, option, {
      baseOption: changeOptionRecursive(option.baseOption, path.split('.'), '', '')
    });
  } else if (componentCanHost.indexOf(componentKey) >= 0) {
    return findAndSetHostComponentRecursively(option, componentKey);
  }

  return changeOptionRecursive(option, path.split('.'), '', '');
}

/***/ }),

/***/ "codemirror":
/*!*****************************!*\
  !*** external "CodeMirror" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_codemirror__;

/***/ }),

/***/ "js-beautify":
/*!*****************************!*\
  !*** external "beautifier" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_js_beautify__;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ });
});
//# sourceMappingURL=doc-bundle.js.map