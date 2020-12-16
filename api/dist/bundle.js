/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app */ \"./src/app.js\");\n// import modules\n\n\n// init server\nvar PORT = {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.API_PORT || 3000;\n\nvar server = _src_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nserver.listen(PORT, function () {\n  console.log(\"server running with port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_database_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/database.config */ \"./src/config/database.config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _config_cors_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/cors.config */ \"./src/config/cors.config.js\");\n/* harmony import */ var _config_passport_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/passport.config */ \"./src/config/passport.config.js\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_error_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/error.util */ \"./src/utils/error.util.js\");\n// import modules\n\n\n\n\n\n\n\n\n\n// init server\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar API_ENV = {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.API_ENV || 'prod';\n\n// add and config middleware\napp.use(morgan__WEBPACK_IMPORTED_MODULE_6___default()(API_ENV));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: false }));\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(_config_cors_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\napp.use(_config_passport_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].initialize());\napp.use({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.BASE_PATH, _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n// connect to database\n_config_database_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].\nconnect_mongo().\nthen(function () {\n  console.log('connect database success!');\n})[\"catch\"](\nfunction (err) {\n  console.error(err);\n});\n\napp.use(function (err, req, res, next) {\n  Object(_utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"handleError\"])(err, res);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/cors.config.js":
/*!***********************************!*\
  !*** ./src/config/cors.config.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar corsOptions = {\n  origin: 'http://localhost',\n  optionSuccessStatus: 200 };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (corsOptions);\n\n//# sourceURL=webpack:///./src/config/cors.config.js?");

/***/ }),

/***/ "./src/config/database.config.js":
/*!***************************************!*\
  !*** ./src/config/database.config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar DB_URI = {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.DB_URI;\nvar options = {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true };\n\n\nvar connect_mongo = function connect_mongo() {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(DB_URI, options);\n};\n\nvar database = {\n  connect_mongo: connect_mongo };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (database);\n\n//# sourceURL=webpack:///./src/config/database.config.js?");

/***/ }),

/***/ "./src/config/passport.config.js":
/*!***************************************!*\
  !*** ./src/config/passport.config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_users_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\n\n\n\nvar jwtOptions = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1___default.a.ExtractJwt.fromAuthHeaderWithScheme('jwt'),\n  secretOrKey: {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.JWT_SECRET_OR_KEY };\n\n\n// configure passport to use the local strategy\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(\nnew passport_jwt__WEBPACK_IMPORTED_MODULE_1___default.a.Strategy(jwtOptions, function (jwt_payload, done) {\n  _modules_users_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({ _id: jwt_payload.id }, function (err, user) {\n    if (err) {\n      done(err, false);\n    }\n    if (user) {\n      done(null, user);\n    } else {\n      done(null, false);\n    }\n  });\n}));\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/config/passport.config.js?");

/***/ }),

/***/ "./src/middlewares/auth.middleware.js":
/*!********************************************!*\
  !*** ./src/middlewares/auth.middleware.js ***!
  \********************************************/
/*! exports provided: authJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authJwt\", function() { return authJwt; });\n/* harmony import */ var _config_passport_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/passport.config */ \"./src/config/passport.config.js\");\n\n\nvar authJwt = function authJwt(roles) {\n  return function (req, res, next) {\n    _config_passport_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authenticate('jwt', { session: false }, function (err, user) {\n      if (err || !user)\n      return res.status(403).json({ message: 'forbidden' });else\n      {\n        if (!roles.length || roles.includes(user.role)) {\n          next();\n        } else {\n          return res.status(403).json({ message: 'forbidden' });\n        }\n      }\n    })(req, res, next);\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/middlewares/auth.middleware.js?");

/***/ }),

/***/ "./src/modules/categories/category.route.js":
/*!**************************************************!*\
  !*** ./src/modules/categories/category.route.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ \"./src/modules/categories/category.service.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/auth.middleware */ \"./src/middlewares/auth.middleware.js\");\n/* harmony import */ var _category_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.validate */ \"./src/modules/categories/category.validate.js\");\n/* harmony import */ var _category_validate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_category_validate__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\nrouter.get('/', _category_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getAll);\nrouter.get('/:id', _category_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getOne);\nrouter.post(\n'/', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_category_validate__WEBPACK_IMPORTED_MODULE_4__[\"categoryValidate\"])),\n_category_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._create);\n\nrouter.put(\n'/:id', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_category_validate__WEBPACK_IMPORTED_MODULE_4__[\"categoryValidate\"])),\n_category_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._update);\n\nrouter[\"delete\"](\n'/:id',\n[Object(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])],\n_category_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._delete);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/modules/categories/category.route.js?");

/***/ }),

/***/ "./src/modules/categories/category.service.js":
/*!****************************************************!*\
  !*** ./src/modules/categories/category.service.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CategoryService = { _getAll: _getAll, _getOne: _getOne, _create: _create, _update: _update, _delete: _delete };\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryService);\n\n//# sourceURL=webpack:///./src/modules/categories/category.service.js?");

/***/ }),

/***/ "./src/modules/categories/category.validate.js":
/*!*****************************************************!*\
  !*** ./src/modules/categories/category.validate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/modules/categories/category.validate.js?");

/***/ }),

/***/ "./src/modules/posts/post.model.js":
/*!*****************************************!*\
  !*** ./src/modules/posts/post.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar post = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  author_id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'UserProfile',\n    required: true },\n\n  parent_id: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'Post' },\n\n  title: {\n    type: String,\n    required: true },\n\n  slug: {\n    type: String,\n    required: true },\n\n  summary: {\n    type: String },\n\n  published: {\n    type: Boolean,\n    required: true,\n    \"default\": true },\n\n  create_at: {\n    type: Date,\n    \"default\": Date() },\n\n  update_at: {\n    type: Date },\n\n  published_at: {\n    type: Date,\n    \"default\": Date() },\n\n  content: {\n    type: String,\n    required: true },\n\n  comments: [\n  {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'Comment' }],\n\n\n  tags: [\n  {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'Tag' }],\n\n\n  categories: [\n  {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'Category' }],\n\n\n  post_meta: [\n  {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'PostMeta' }] });\n\n\n\n\npost.pre('save', function (next) {\n  var post = this;\n\n  if (this.isModified('update_at') || this.isNew) {\n    post.update_at = Date.now;\n  }\n  next();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Post', post));\n\n//# sourceURL=webpack:///./src/modules/posts/post.model.js?");

/***/ }),

/***/ "./src/modules/posts/post.route.js":
/*!*****************************************!*\
  !*** ./src/modules/posts/post.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ \"./src/modules/posts/post.service.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/auth.middleware */ \"./src/middlewares/auth.middleware.js\");\n/* harmony import */ var _post_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.validate */ \"./src/modules/posts/post.validate.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\nrouter.get('/', _post_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getAll);\nrouter.get('/:id', _post_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getOne);\nrouter.post(\n'/', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_post_validate__WEBPACK_IMPORTED_MODULE_4__[\"postValidate\"])),\n_post_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._create);\n\nrouter.put(\n'/:id', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_post_validate__WEBPACK_IMPORTED_MODULE_4__[\"postValidate\"])),\n_post_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._update);\n\nrouter[\"delete\"](\n'/:id',\n[Object(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])],\n_post_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._delete);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/modules/posts/post.route.js?");

/***/ }),

/***/ "./src/modules/posts/post.service.js":
/*!*******************************************!*\
  !*** ./src/modules/posts/post.service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_auth_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth.util */ \"./src/utils/auth.util.js\");\n/* harmony import */ var _utils_request_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/request.util */ \"./src/utils/request.util.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _utils_error_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/error.util */ \"./src/utils/error.util.js\");\n/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/common.util */ \"./src/utils/common.util.js\");\n/* harmony import */ var _post_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post.model */ \"./src/modules/posts/post.model.js\");\n\n\n\n\n\n\n\n\nvar _getAll = /*#__PURE__*/function () {var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, next) {return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            try {\n              _post_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"].find({}).\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Data Found',\n                  data: data });\n\n              })[\"catch\"](\n              function (err) {\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_FAILURE,\n                'Not Found',\n                1105);\n\n              });\n            } catch (error) {\n              next(error);\n            }case 1:case \"end\":return _context.stop();}}}, _callee);}));return function _getAll(_x, _x2, _x3) {return _ref.apply(this, arguments);};}();\n\n\nvar _getOne = /*#__PURE__*/function () {var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res, next) {var filter;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n            try {\n              filter = { _id: req.params['id'] };\n              _post_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"].findOne(filter).\n              populate('UserProfile').\n              populate('Comment').\n              populate('Tag').\n              populate('Category').\n              populate('PostMeta').\n              exec().\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Data Found',\n                  data: data });\n\n              })[\"catch\"](\n              function (err) {\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_FAILURE,\n                'Not Found',\n                1105);\n\n              });\n            } catch (error) {\n              next(error);\n            }case 1:case \"end\":return _context2.stop();}}}, _callee2);}));return function _getOne(_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();\n\n\nvar _create = /*#__PURE__*/function () {var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(req, res, next) {var errors, _author, new_post;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_3__[\"validationResult\"])(req);if (\n            errors.isEmpty()) {_context3.next = 3;break;}return _context3.abrupt(\"return\",\n            res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].CREATE_FAILURE).json({\n              success: false,\n              errors: errors.array() }));case 3:_context3.prev = 3;_context3.next = 6;return (\n\n\n\n\n              Object(_utils_auth_util__WEBPACK_IMPORTED_MODULE_4__[\"retrieveToken\"])(req.headers));case 6:_author = _context3.sent;\n            new_post = {\n              author_id: _author.id,\n              parent_id: req.body.parent_id,\n              title: req.body.title,\n              slug: Object(_utils_common_util__WEBPACK_IMPORTED_MODULE_8__[\"convert_slug\"])(req.body.title),\n              summary: req.body.summary,\n              content: req.body.content,\n              tags: req.body.tags ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(req.body.tags) : null,\n              categories: req.body.categories ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(req.body.categories) : null };_context3.next = 10;return (\n\n              _post_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"].create(new_post).\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Created Successfull',\n                  data: data });\n\n              })[\"catch\"](\n              function (err) {\n                console.log(err);\n\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].GET_FAILURE,\n                'Invalid Social Type',\n                1303);\n\n              }));case 10:_context3.next = 16;break;case 12:_context3.prev = 12;_context3.t0 = _context3[\"catch\"](3);\n\n            console.log('error');\n            next(_context3.t0);case 16:case \"end\":return _context3.stop();}}}, _callee3, null, [[3, 12]]);}));return function _create(_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}();\n\n\n\nvar _update = /*#__PURE__*/function () {var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(req, res, next) {var errors, _author, filter, found, data_update;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n            errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_3__[\"validationResult\"])(req);if (\n            errors.isEmpty()) {_context4.next = 3;break;}return _context4.abrupt(\"return\",\n            res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].UPDATE_FAILURE).json({\n              success: false,\n              errors: errors.array() }));case 3:_context4.prev = 3;_context4.next = 6;return (\n\n\n\n\n\n              Object(_utils_auth_util__WEBPACK_IMPORTED_MODULE_4__[\"retrieveToken\"])(req.headers));case 6:_author = _context4.sent;\n            filter = {\n              _id: req.body['_id'],\n              author_id: _author.id };\n\n            // Check post_id existed\n            _context4.next = 10;return Object(_utils_request_util__WEBPACK_IMPORTED_MODULE_5__[\"check_existed\"])(filter);case 10:found = _context4.sent;\n            console.log('run 2');if (!\n            found) {_context4.next = 17;break;}\n            data_update = {\n              author_id: _author.id,\n              parent_id: req.body.parent_id,\n              title: req.body.title,\n              slug: req.body.slug,\n              summary: req.body.summary,\n              content: req.body.content,\n              tags: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(req.body.tags),\n              categories: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(req.body.categories) };\n\n            _post_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"].findOneAndUpdate(filter, data_update).\n            then(function (data) {\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].UPDATE_SUCCESS).json({\n                success: true,\n                message: 'Updated Successfull',\n                data: data });\n\n            })[\"catch\"](\n            function (err) {\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].UPDATE_FAILURE,\n              'Invalid Social Type',\n              1303);\n\n            });_context4.next = 18;break;case 17:throw (\n\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].UPDATE_FAILURE,\n              'Post _id not existed.',\n              1303));case 18:_context4.next = 23;break;case 20:_context4.prev = 20;_context4.t0 = _context4[\"catch\"](3);\n\n\n\n            next(_context4.t0);case 23:case \"end\":return _context4.stop();}}}, _callee4, null, [[3, 20]]);}));return function _update(_x10, _x11, _x12) {return _ref4.apply(this, arguments);};}();\n\n\n\nvar _delete = /*#__PURE__*/function () {var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(req, res, next) {var filter, found;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;\n\n            filter = { _id: req.params['id'] };_context5.next = 4;return (\n              Object(_utils_request_util__WEBPACK_IMPORTED_MODULE_5__[\"check_existed\"])(filter));case 4:found = _context5.sent;if (!\n            found) {_context5.next = 9;break;}\n            _post_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"].findByIdAndDelete(filter).\n            then(function (data) {\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].DELETE_SUCCESS).json({\n                success: true,\n                message: 'Deleted Successfull',\n                data: data });\n\n            })[\"catch\"](\n            function (err) {\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].DELETE_FAILURE,\n              'Invalid Social Type',\n              1303);\n\n            });_context5.next = 10;break;case 9:throw (\n\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_7__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"apiStatus\"].DELETE_FAILURE,\n              'Post _id not existed',\n              1303));case 10:_context5.next = 15;break;case 12:_context5.prev = 12;_context5.t0 = _context5[\"catch\"](0);\n\n\n\n            next(_context5.t0);case 15:case \"end\":return _context5.stop();}}}, _callee5, null, [[0, 12]]);}));return function _delete(_x13, _x14, _x15) {return _ref5.apply(this, arguments);};}();\n\n\n\nvar PostService = {\n  _getAll: _getAll,\n  _getOne: _getOne,\n  _create: _create,\n  _update: _update,\n  _delete: _delete };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostService);\n\n//# sourceURL=webpack:///./src/modules/posts/post.service.js?");

/***/ }),

/***/ "./src/modules/posts/post.validate.js":
/*!********************************************!*\
  !*** ./src/modules/posts/post.validate.js ***!
  \********************************************/
/*! exports provided: postValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postValidate\", function() { return postValidate; });\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar postValidate = [\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('title').notEmpty().isLength({ min: 10 }),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('categories').notEmpty().isArray(),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('summary').notEmpty().isLength({ min: 10 }),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('content').notEmpty().isLength({ min: 10 })];\n\n\n\n\n//# sourceURL=webpack:///./src/modules/posts/post.validate.js?");

/***/ }),

/***/ "./src/modules/tags/tag.model.js":
/*!***************************************!*\
  !*** ./src/modules/tags/tag.model.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar tag = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  tag_name: {\n    type: String,\n    unique: true },\n\n  slug: {\n    type: String,\n    unique: true },\n\n  content: {\n    type: String },\n\n  posts: [\n  {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectID,\n    ref: 'Post' }],\n\n\n  categories: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectID,\n    ref: 'Categories' } });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Tag', tag));\n\n//# sourceURL=webpack:///./src/modules/tags/tag.model.js?");

/***/ }),

/***/ "./src/modules/tags/tag.route.js":
/*!***************************************!*\
  !*** ./src/modules/tags/tag.route.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag.service */ \"./src/modules/tags/tag.service.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/auth.middleware */ \"./src/middlewares/auth.middleware.js\");\n/* harmony import */ var _tag_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag.validate */ \"./src/modules/tags/tag.validate.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\n\nrouter.\nget('/', _tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getAll).\nget('/:id', _tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._getOne).\npost(\n'/', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_tag_validate__WEBPACK_IMPORTED_MODULE_4__[\"tagValidate\"])),\n_tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._create).\n\nput(\n'/:id', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_tag_validate__WEBPACK_IMPORTED_MODULE_4__[\"tagValidate\"])),\n_tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._update).\n\npatch(\n'/:id', [\nObject(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_tag_validate__WEBPACK_IMPORTED_MODULE_4__[\"tagValidate\"])),\n_tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._update)[\"delete\"](\n\n\n'/:id',\n[Object(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER, _utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].WRITER])],\n_tag_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._delete);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/modules/tags/tag.route.js?");

/***/ }),

/***/ "./src/modules/tags/tag.service.js":
/*!*****************************************!*\
  !*** ./src/modules/tags/tag.service.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _utils_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/request.util */ \"./src/utils/request.util.js\");\n/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common.util */ \"./src/utils/common.util.js\");\n/* harmony import */ var _utils_error_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/error.util */ \"./src/utils/error.util.js\");\n/* harmony import */ var _tag_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag.model */ \"./src/modules/tags/tag.model.js\");\n\n\n\n\n\n\n\nvar _getAll = /*#__PURE__*/function () {var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            try {\n              _tag_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find({}).\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Data Found',\n                  data: data });\n\n              })[\"catch\"](\n              function (err) {\n                console.log('run here 1');\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].GET_FAILURE,\n                'Not Found',\n                1105);\n\n              });\n            } catch (error) {\n              console.log('run here');\n              next(error);\n            }case 1:case \"end\":return _context.stop();}}}, _callee);}));return function _getAll(_x, _x2, _x3) {return _ref.apply(this, arguments);};}();\n\n\nvar _getOne = /*#__PURE__*/function () {var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res, next) {var filter;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n            try {\n              filter = { _id: req.params['id'] };\n              _tag_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find(filter).\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Data Found',\n                  data: data });\n\n              })[\"catch\"](\n              function (err) {\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].GET_FAILURE,\n                'Not Found',\n                1105);\n\n              });\n            } catch (error) {\n              next(error);\n            }case 1:case \"end\":return _context2.stop();}}}, _callee2);}));return function _getOne(_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();\n\n\nvar _create = /*#__PURE__*/function () {var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res, next) {var errors, _new_tag, filter_existed, found, tag;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_2__[\"validationResult\"])(req);if (\n            errors.isEmpty()) {_context3.next = 3;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].CREATE_FAILURE,\n              'Invalid Social Type',\n              1303));case 3:_context3.prev = 3;\n\n\n\n            _new_tag = {\n              tag_name: req.body.tag_name,\n              slug: Object(_utils_common_util__WEBPACK_IMPORTED_MODULE_5__[\"convert_slug\"])(req.body.tag_name),\n              content: req.body.content,\n              categories: req.body.categories };\n\n            filter_existed = {\n              slug: _new_tag.slug,\n              categories: _new_tag.categories };_context3.next = 8;return (\n\n              Object(_utils_request_util__WEBPACK_IMPORTED_MODULE_4__[\"check_existed\"])(filter_existed));case 8:found = _context3.sent;if (!\n            found) {_context3.next = 13;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].CREATE_FAILURE, \"Tag \".concat(\n              _new_tag.tag_name, \" has exist in category \").concat(_new_tag.categories),\n              1303));case 13:\n\n\n            tag = new _tag_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_new_tag);\n            tag.save().\n            then(function (data) {\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].CREATE_SUCCESS).json({\n                success: true,\n                message: 'Created successfully',\n                data: data });\n\n            })[\"catch\"](\n            function (err) {\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].CREATE_FAILURE,\n              'Invalid Social Type',\n              1105);\n\n            });case 15:_context3.next = 20;break;case 17:_context3.prev = 17;_context3.t0 = _context3[\"catch\"](3);\n\n\n            next(_context3.t0);case 20:case \"end\":return _context3.stop();}}}, _callee3, null, [[3, 17]]);}));return function _create(_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}();\n\n\n\nvar _update = /*#__PURE__*/function () {var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res, next) {var update, filter, found;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;\n\n            update = {\n              tag_name: req.body.tag_name,\n              slug: Object(_utils_common_util__WEBPACK_IMPORTED_MODULE_5__[\"convert_slug\"])(req.body.tag_name),\n              content: req.body.content,\n              categories: req.body.categories };\n\n            filter = { _id: req.params['id'] };_context4.next = 5;return (\n              Object(_utils_request_util__WEBPACK_IMPORTED_MODULE_4__[\"check_existed\"])(filter));case 5:found = _context4.sent;if (!\n            found) {_context4.next = 10;break;}\n            _tag_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOneAndUpdate(filter, update).\n            then(function (data) {\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].UPDATE_SUCCESS).json({\n                success: true,\n                message: 'Updated successfully',\n                data: data });\n\n            })[\"catch\"](\n            function (err) {\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].UPDATE_FAILURE,\n              'Invalid Social Type',\n              1105);\n\n            });_context4.next = 11;break;case 10:throw (\n\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].UPDATE_FAILURE, \"Tag \".concat(\n              new_tag.tag_name, \" not exist in category \").concat(new_tag.categories),\n              1303));case 11:_context4.next = 16;break;case 13:_context4.prev = 13;_context4.t0 = _context4[\"catch\"](0);\n\n\n\n            next(_context4.t0);case 16:case \"end\":return _context4.stop();}}}, _callee4, null, [[0, 13]]);}));return function _update(_x10, _x11, _x12) {return _ref4.apply(this, arguments);};}();\n\n\n\nvar _delete = /*#__PURE__*/function () {var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(req, res, next) {var filter, found;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;\n\n            filter = { _id: req.param['id'] };_context5.next = 4;return (\n              Object(_utils_request_util__WEBPACK_IMPORTED_MODULE_4__[\"check_existed\"])(filter));case 4:found = _context5.sent;if (!\n            found) {_context5.next = 9;break;}\n            _tag_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findByIdAndDelete(filter).\n            then(function (data) {\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].DELETE_SUCCESS).json({\n                success: true,\n                message: 'Deleted successfully',\n                data: data });\n\n            })[\"catch\"](\n            function (err) {\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].DELETE_FAILURE,\n              'Invalid Social Type',\n              1105);\n\n            });_context5.next = 10;break;case 9:throw (\n\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_6__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"apiStatus\"].DELETE_FAILURE,\n              'Tag not existed',\n              1303));case 10:_context5.next = 15;break;case 12:_context5.prev = 12;_context5.t0 = _context5[\"catch\"](0);\n\n\n\n            next(_context5.t0);case 15:case \"end\":return _context5.stop();}}}, _callee5, null, [[0, 12]]);}));return function _delete(_x13, _x14, _x15) {return _ref5.apply(this, arguments);};}();\n\n\n\nvar TagService = { _getAll: _getAll, _getOne: _getOne, _create: _create, _update: _update, _delete: _delete };\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagService);\n\n//# sourceURL=webpack:///./src/modules/tags/tag.service.js?");

/***/ }),

/***/ "./src/modules/tags/tag.validate.js":
/*!******************************************!*\
  !*** ./src/modules/tags/tag.validate.js ***!
  \******************************************/
/*! exports provided: tagValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagValidate\", function() { return tagValidate; });\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar tagValidate = [\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('tag_name').notEmpty(),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('content').notEmpty()];\n\n\n\n\n//# sourceURL=webpack:///./src/modules/tags/tag.validate.js?");

/***/ }),

/***/ "./src/modules/users/account.model.js":
/*!********************************************!*\
  !*** ./src/modules/users/account.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common.util */ \"./src/utils/common.util.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar userAccount = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    type: String,\n    unique: true,\n    trim: true },\n\n  password: {\n    type: String,\n    required: true },\n\n  email_confirm_token: {\n    type: String,\n    \"default\": Object(_utils_common_util__WEBPACK_IMPORTED_MODULE_1__[\"random_number\"])(\n    parseInt({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.EMAIL_CONFIRM_TOKEN_LENGTH)) },\n\n\n  password_expire: {\n    type: Date,\n    \"default\": Object(_utils_common_util__WEBPACK_IMPORTED_MODULE_1__[\"increment_days\"])(parseInt({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.PASSWORD_DURATION)) } });\n\n\n\nuserAccount.pre('save', function (next) {\n  var account = this;\n\n  if (this.isModified('password') || this.isNew) {\n    bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.genSalt(10, function (error, salt) {\n      if (error) {\n        return next(error);\n      }\n      bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.hash(account.password, salt, function (error, hash) {\n        if (error) {\n          return next(error);\n        }\n        account.password = hash;\n      });\n    });\n  }\n  next();\n});\n\nuserAccount.methods.comparePassword = function (pw, cd) {\n  bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compare(pw, this.password, function (error, isMatch) {\n    if (error) return cd(error);\n    cd(null, isMatch);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('UserAccount', userAccount));\n\n//# sourceURL=webpack:///./src/modules/users/account.model.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar userProfile = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  first_name: {\n    type: String },\n\n  last_name: {\n    type: String },\n\n  full_name: {\n    type: String },\n\n  avatar_url: {\n    type: String,\n    \"default\": 'url://' },\n\n  role: {\n    type: Number,\n    \"enum\": [0, 1, 2],\n    required: true },\n\n  account: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'UserAccount' },\n\n  account_facebook: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'AccountFacebook' },\n\n  account_google: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'AccountGoogle' },\n\n  account_twitter: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'AccountTwitter' } });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('UserProfile', userProfile));\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.route.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ \"./src/modules/users/user.service.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middlewares/auth.middleware */ \"./src/middlewares/auth.middleware.js\");\n/* harmony import */ var _user_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.validation */ \"./src/modules/users/user.validation.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\n\n// routes for register or login user\nrouter.post(\n{\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.AUTH_REGISTER_PATH, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(\n_user_validation__WEBPACK_IMPORTED_MODULE_4__[\"signupValidate\"]),\n_user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register);\n\nrouter.post(\n{\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.AUTH_LOGIN_PATH, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(\n_user_validation__WEBPACK_IMPORTED_MODULE_4__[\"signinValidate\"]),\n_user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login);\n\n\n// routes for user\nrouter.get('/', Object(_middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_3__[\"authJwt\"])([_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"roleConstant\"].MANAGER]), _user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAll);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/modules/users/user.route.js?");

/***/ }),

/***/ "./src/modules/users/user.service.js":
/*!*******************************************!*\
  !*** ./src/modules/users/user.service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_auth_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/auth.util */ \"./src/utils/auth.util.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _utils_error_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/error.util */ \"./src/utils/error.util.js\");\n/* harmony import */ var _account_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.model */ \"./src/modules/users/account.model.js\");\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\n\n\n\n\n\n\nvar register = /*#__PURE__*/function () {var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {var errors, _req$body, email, password, account, newAccount;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_2__[\"validationResult\"])(req);if (\n            errors.isEmpty()) {_context.next = 3;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].CREATE_FAILURE,\n              'Invalid Register Type',\n              13021));case 3:_req$body =\n\n\n            req.body, email = _req$body.email, password = _req$body.password;_context.prev = 4;_context.next = 7;return (\n\n              _account_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({ email: email }));case 7:account = _context.sent;if (!\n            account) {_context.next = 10;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].CREATE_FAILURE,\n              'User already exists',\n              1309));case 10:\n\n\n            newAccount = new _account_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n              email: email,\n              password: password });\n\n            newAccount.save({}, function (error, account) {\n              if (error)\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].CREATE_FAILURE,\n              'Account create failed',\n              1310);\n\n              var newUser = new _user_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n                role: _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"roleConstant\"].USER,\n                account: account._id });\n\n              newUser.save({}, function (error) {\n                if (error)\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].CREATE_FAILURE,\n                'Account create failed',\n                1310);\n\n              });\n              return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].CREATE_SUCCESS).json({\n                success: true,\n                message: 'Account create success',\n                data: account });\n\n            });_context.next = 17;break;case 14:_context.prev = 14;_context.t0 = _context[\"catch\"](4);\n\n\n            next(_context.t0);case 17:case \"end\":return _context.stop();}}}, _callee, null, [[4, 14]]);}));return function register(_x, _x2, _x3) {return _ref.apply(this, arguments);};}();\n\n\n\nvar login = /*#__PURE__*/function () {var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res, next) {var errors, _req$body2, email, password, user;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n            errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_2__[\"validationResult\"])(req);if (\n            errors.isEmpty()) {_context2.next = 3;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n              _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_FAILURE,\n              'Invalid Login Type',\n              1302));case 3:_req$body2 =\n\n\n\n            req.body, email = _req$body2.email, password = _req$body2.password;_context2.prev = 4;_context2.next = 7;return (\n\n              _user_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne().populate({\n                path: 'account',\n                match: { email: email } }));case 7:user = _context2.sent;if (!(\n\n            !user || user && !user.account)) {_context2.next = 10;break;}throw (\n              new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](_utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_FAILURE, 'Login Error', 1304));case 10:\n\n            user.account.comparePassword(password, function (err, isMatch) {\n              if (isMatch && !err) {\n                var token = Object(_utils_auth_util__WEBPACK_IMPORTED_MODULE_3__[\"createToken\"])(user);\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  token: token,\n                  message: 'Login success' });\n\n              }\n              throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](_utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_FAILURE, 'Login Error', 1304);\n            });_context2.next = 16;break;case 13:_context2.prev = 13;_context2.t0 = _context2[\"catch\"](4);\n\n\n            next(_context2.t0);case 16:case \"end\":return _context2.stop();}}}, _callee2, null, [[4, 13]]);}));return function login(_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}();\n\n\n\nvar getAll = /*#__PURE__*/function () {var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res, next) {return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            try {\n              _user_model__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find({}).\n              then(function (data) {\n                return res.status(_utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_SUCCESS).json({\n                  success: true,\n                  message: 'Data found',\n                  data: data });\n\n              })[\"catch\"](\n              function (error) {\n                throw new _utils_error_util__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"](\n                _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"apiStatus\"].GET_FAILURE,\n                'Not found',\n                1105);\n\n              });\n\n            } catch (error) {\n              next(error);\n            }case 1:case \"end\":return _context3.stop();}}}, _callee3);}));return function getAll(_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}();\n\n\nvar UserService = {\n  register: register,\n  login: login,\n  getAll: getAll };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserService);\n\n//# sourceURL=webpack:///./src/modules/users/user.service.js?");

/***/ }),

/***/ "./src/modules/users/user.validation.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.validation.js ***!
  \**********************************************/
/*! exports provided: signinValidate, signupValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signinValidate\", function() { return signinValidate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signupValidate\", function() { return signupValidate; });\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar signupValidate = [\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('email', 'Please enter a valid email').isEmail(),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('password', 'Please enter a valid password').isLength({ min: 6 })];\n\n\nvar signinValidate = [\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('email', 'Please enter a valid email').isEmail(),\nObject(express_validator__WEBPACK_IMPORTED_MODULE_0__[\"check\"])('password', 'Please enter a valid password').isLength({ min: 6 })];\n\n\n\n\n//# sourceURL=webpack:///./src/modules/users/user.validation.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_users_user_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/users/user.route */ \"./src/modules/users/user.route.js\");\n/* harmony import */ var _modules_posts_post_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/posts/post.route */ \"./src/modules/posts/post.route.js\");\n/* harmony import */ var _modules_tags_tag_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/tags/tag.route */ \"./src/modules/tags/tag.route.js\");\n/* harmony import */ var _modules_categories_category_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/categories/category.route */ \"./src/modules/categories/category.route.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.USER_PATH, _modules_users_user_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.POST_PATH, _modules_posts_post_route__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.TAG_PATH, _modules_tags_tag_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.CATEGORY_PATH, _modules_categories_category_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/utils/auth.util.js":
/*!********************************!*\
  !*** ./src/utils/auth.util.js ***!
  \********************************/
/*! exports provided: retrieveToken, createToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveToken\", function() { return retrieveToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createToken\", function() { return createToken; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar retrieveToken = function retrieveToken(headers) {\n  if (headers && headers.authorization) {\n    var tokens = headers.authorization.split(' ');\n    if (tokens && tokens.length === 2) {\n      return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(tokens[1], {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.JWT_SECRET_OR_KEY);\n    }\n  }\n  return null;\n};\n\nvar createToken = function createToken(user) {\n  if (user) {\n    var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(\n    { id: user._id, role: user.role },\n    {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.JWT_SECRET_OR_KEY,\n    {\n      expiresIn: {\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.JWT_TOKEN_EXPIRATION });\n\n\n    return \"\".concat({\"API_PORT\":\"3000\",\"CLIENT_PORT\":\"80\",\"API_ENV\":\"dev\",\"DB_URI\":\"mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority\",\"DB_PORT\":\"27017\",\"JWT_SCHEME\":\"jwt\",\"JWT_TOKEN_PREFIX\":\"JWT\",\"JWT_SECRET_OR_KEY\":\"XXXXXXXXXXXX\",\"JWT_TOKEN_EXPIRATION\":\"18000000\",\"JWT_TOKEN_HASH_ALGO\":\"XXXX\",\"BASE_PATH\":\"/api/v1\",\"USER_PATH\":\"/user\",\"POST_PATH\":\"/post\",\"TAG_PATH\":\"/tag\",\"CATEGORY_PATH\":\"/category\",\"AUTH_REGISTER_PATH\":\"/register\",\"AUTH_LOGIN_PATH\":\"/login\",\"PASSWORD_DURATION\":\"90\",\"EMAIL_CONFIRM_TOKEN_LENGTH\":\"6\"}.JWT_TOKEN_PREFIX, \" \").concat(token);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/utils/auth.util.js?");

/***/ }),

/***/ "./src/utils/common.util.js":
/*!**********************************!*\
  !*** ./src/utils/common.util.js ***!
  \**********************************/
/*! exports provided: random_number, increment_days, gen_uuid, convert_slug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random_number\", function() { return random_number; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment_days\", function() { return increment_days; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gen_uuid\", function() { return gen_uuid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convert_slug\", function() { return convert_slug; });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// method random number\nvar random_number = function random_number(length) {\n  return Math.random().\n  toString().\n  slice(2, length + 2);\n};\n\nvar increment_days = function increment_days(days) {\n  var currentDate = new Date();\n  return currentDate.setDate(currentDate.getDate() + days);\n};\n\nvar gen_uuid = function gen_uuid() {return Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])();};\n\nvar convert_slug = function convert_slug(str) {return (\n    str.\n    normalize('NFD').\n    replace(/[\\u0300-\\u036f]/g, '').\n    replace(/đ|Đ/g, 'd').\n    replace(/ /g, '-').\n    toLowerCase());};\n\n\n\n//# sourceURL=webpack:///./src/utils/common.util.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: modelConstant, roleConstant, apiStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modelConstant\", function() { return modelConstant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roleConstant\", function() { return roleConstant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiStatus\", function() { return apiStatus; });\nvar modelConstant = {\n  EMAIL_TOKEN_LENGTH: {\n    MIN: 100000,\n    MAX: 999999 } };\n\n\n\nvar roleConstant = {\n  MANAGER: 0,\n  WRITER: 1,\n  USER: 2 };\n\n\nvar apiStatus = {\n  CREATE_SUCCESS: 201,\n  CREATE_FAILURE: 404,\n\n  GET_SUCCESS: 200,\n  GET_FAILURE: 404,\n\n  UPDATE_SUCCESS: 200,\n  UPDATE_FAILURE: 404,\n\n  DELETE_SUCCESS: 200,\n  DELETE_FAILURE: 404 };\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/error.util.js":
/*!*********************************!*\
  !*** ./src/utils/error.util.js ***!
  \*********************************/
/*! exports provided: ErrorHandler, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorHandler\", function() { return ErrorHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleError\", function() { return handleError; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ \"@babel/runtime/helpers/wrapNativeSuper\");\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);\nfunction _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);};}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}var ErrorHandler = /*#__PURE__*/function (_Error) {_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(ErrorHandler, _Error);var _super = _createSuper(ErrorHandler);\n  function ErrorHandler(statusCode, message, errorCode) {var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorHandler);\n    _this = _super.call(this);\n    _this.statusCode = statusCode;\n    _this.message = message;\n    _this.errorCode = errorCode;return _this;\n  }return ErrorHandler;}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));\n\n\nvar handleError = function handleError(err, res) {var _err$statusCode =\n  err.statusCode,statusCode = _err$statusCode === void 0 ? 500 : _err$statusCode,message = err.message,errorCode = err.errorCode;\n  return res.status(statusCode).json({\n    success: false,\n    message: message,\n    error_code: errorCode });\n\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/error.util.js?");

/***/ }),

/***/ "./src/utils/request.util.js":
/*!***********************************!*\
  !*** ./src/utils/request.util.js ***!
  \***********************************/
/*! exports provided: check_existed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"check_existed\", function() { return check_existed; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\nvar check_existed = /*#__PURE__*/function () {var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Schema, filter) {return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n              Schema.count(filter, function (count) {return count > 0;}));case 2:return _context.abrupt(\"return\", _context.sent);case 3:case \"end\":return _context.stop();}}}, _callee);}));return function check_existed(_x, _x2) {return _ref.apply(this, arguments);};}();\n\n\n\n//# sourceURL=webpack:///./src/utils/request.util.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/wrapNativeSuper\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/wrapNativeSuper%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });