function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");

    var routes = [{
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'GitHubPage';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 123,
      vars: 0,
      consts: [[1, "container"], ["id", "home", 1, "page"], [1, "text", "title"], [1, "text"], ["id", "page1", 1, "page"], [1, "photo"], ["src", "/assets/images/Lantern-amico.svg", "alt", ""], [1, "text-page"], ["id", "page2", 1, "page"], ["src", "/assets/images/Feeling%20Blue-pana.svg", "alt", ""], ["id", "page3", 1, "page"], ["src", "/assets/images/Maintenance-pana.svg", "alt", ""], ["id", "page4", 1, "page"], ["src", "/assets/images/Checklist-amico.svg", "alt", ""], ["id", "page5", 1, "page"], ["src", "/assets/images/Thoughts-pana.svg", "alt", ""], ["id", "page6", 1, "page"], ["src", "/assets/images/Market%20launch-pana.svg", "alt", ""], ["id", "page7", 1, "page"], ["src", "/assets/images/Creativity-pana.svg", "alt", ""], ["href", "https://www.freepik.com/free-photos-vectors/people"], [1, "buttons"], ["href", "#home", 1, "circle-btn", "btn-home"], [1, "material-icons"], ["href", "#page1", 1, "circle-btn", "btn-one"], ["href", "#page2", 1, "circle-btn", "btn-two"], ["href", "#page3", 1, "circle-btn", "btn-three"], ["href", "#page4", 1, "circle-btn", "btn-four"], ["href", "#page5", 1, "circle-btn", "btn-five"], ["href", "#page6", 1, "circle-btn", "btn-six"], ["href", "#page7", 1, "circle-btn", "btn-seven"], [1, "circle-btn", "btn-plus"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MI HISTORIA ESTE SEMESTRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ricardo Enrique L\xF3pez Gonz\xE1lez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A01639989");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LLAMADO A LA AVENTURA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pensaba que durante mi semestre aprenderia sobre temas de la carrera a la que me insrib\xED, cre\xED que comenzar\xEDa a ver los principios o las bases de la electr\xF3nica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Me emociona mucho la idea de comenzar a aprender acerca de los temas que m\xE1s me apasionan. Quiero seguir aprendiendo y la experiencia de hacerlo en un nuevo ambiente es divertido.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Alegr\xEDa, entusiasmo, miedo, curiosidad, deseo de aprender son algunos de los sentimientos que tuve al principio. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Alugnos de los temores que tuve fueron: \"Tal ves no escogui la carrera correcta para mi.\" \"Probablemente el modelo TEC21 no me ayude con el aprendizaje.\" \"Los maestros pueden ser mas estrictos y rega\xF1ones.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BATALLAS LIBRADAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Los mayores desafios por los que pase fueron el continuar con mis estudios dentro y fuera de la universidad y el no dejar de aprender aunque no me encontrara en un salon de clases.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Este para mi fue un desafio porque no es de mi costumbre el continuar aprendiendo, de los temas que se impartieron en las clases, fuera del salon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Realice acciones que me ayudarian a realizar de una mejor manera esta meta, tales como: Anotaba los temas en los que fallaba durante clase o que me parecian interesantes para que una ves terminada la clase pudiera darme unos minutos para investigar acerca de ellos. En ratos libres en los que no estaba haciendo algo, retomaba algun tema para aprender mas de este. Preguntaba a mis compa\xF1eros el como habian resuleto ejercicios que a mi no me habian salido correctamente. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Los aprendizajes que obtuve con estos desafios fueron: Los temas que mas se me dificultaban podia aprenderlos si preguntaba a mis compa\xF1eros o investigaba de otras fuentes y esto me ayudaba a no atrasarme con los contenidos de las siguentes clases. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Me ayudo a desarrollar mi habilidad para aprender de una manera mas eficiente y por mi propia cuenta. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Realize, junto con todos mis compa\xF1eros, los calculos necesarios para obtener los resultado del reto que se nos planteo durante las materias. Comprendi el porque y como es que se realizaban dichos calculos. Y es aqui donde me di cuenta que cumpli con mis subcompetencias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ALIADOS Y APOYO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Las personas que considero que me ayudaron durante este semestre fueron mi novia, mis compa\xF1eros y mis papas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Siempre eran a los que acudia si es que yo tenia una duda, y de una manera u otra me explicaban el tema o intentaban encontrar soluciones junto conmigo para que superara la barrera.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Siempre que necesite ayuda, se que de alguna manera u otra tendre a alguien a quien pedirle ayuda y me pueda apoyar a superar dicha prueba.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "EL GRAN DESAFIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Este semestre fue una experienc\xEDa completamente nueva pero fue divertida, me gusto la idea de solo tener que bajar las escaleras de mi casa para poder llegar al salon de clases ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Al inicio, como ya mencione, me encontre con muchos obstaculos en su mayor\xEDa tecnicos pero una ves que pude solucionarlos el comprender los temas, comunicarme con mis compa\xF1eros y hacerle llegar mis dudas a los profesores fue algo de los mas sencillo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "El principal reto fue el no poder ir personalmente con el profesor, para preguntarle dudas que a lo mejor me daban pena preguntar en el char grupal. En ves de depender del profesor empece a preguntar a mis compa\xF1eros esas dudas y asi siento que hasta entedia mejor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Me ayudo el tener confianza en mi mismo y no dudar de mis conociemientos tanto como lo hacia antes. El tener pena en hacer ciertas preguntar por pensar en el que diran de los demas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comence a aprender los temas en los que tenia duda de diferentes maneras, ya sea de forma individual o preguntandole a mis compa\xF1eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "ENFRENTAMIENTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "No deje que ninguno de estos retos me superara y decidi que no me afectarian dentro de mi aprendizaje y que aun con estos haria todo lo posible para seguir adelante con el siguente semestre. Se que soy capaz de adaptarme en cualquiera de las situaciones que se me presenten y es por eso que me propuse el luchar para poder conseguirlo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "RETORNO DEL H\xC9ROE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Este semestre me transformo ya que me ayudo a buscar nuevas formas de aprender, pienso diferente acerca de como resolver las problematicas que me presentan en los retos. Siento que he aprendido mas de lo que eh aprendido.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Pienso que cuando se vuelva a presentar la oportunidad de expandir mis conocimientos ya no tendre el miedo de tomar las clases o tutorias en un modelo como el actual y ya no como el tradicional. Quitando limitaciones a mi aprendizaje.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Debo dejar la procrastinaci\xF3n a un lado para enfocarme en realizar y terminar los proyectos que me propongo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Debo continuar apoyandome en mis compa\xF1eros para resolver mis dudas de las clases y en caso de ser necesario acudir a fuentes fiables de informaci\xF3n en internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "GRACIAS POR SU ATENCI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Pagina creada por Ricardo Enrique Lopez Gonzalez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Page hosted by GitHub Pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "People vector created by stories - www.freepik.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " 4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " 6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " 7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n\n.page[_ngcontent-%COMP%]{\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #FDFFFC;\n}\n\n#home[_ngcontent-%COMP%]{\n  background-color: #011627;\n  color: #41EAD4;\n  font-weight: bold;\n  font-size: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%]{\n  font-size: 5rem;\n}\n\n.text[_ngcontent-%COMP%]{\n  width: 75%;\n  display: flex;\n  justify-content: center;\n}\n\n.photo[_ngcontent-%COMP%]{\n  width: 50%;\n  height: 100%;\n}\n\n.text-page[_ngcontent-%COMP%]{\n  width: 50%;\n  height: 100%;\n  display: flex;\n  font-size: 1rem;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#page1[_ngcontent-%COMP%]{\n\n}\n\n.circle-btn[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  background-color: #FF0022;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  color: #FFF;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 10px;\n  transition: bottom 500ms;\n  text-decoration: none;\n}\n\n.buttons[_ngcontent-%COMP%]{\n  width: 75px;\n  height: 75px;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover{\n  height: 875px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-seven[_ngcontent-%COMP%]{\n  bottom: 100px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-six[_ngcontent-%COMP%]{\n  bottom: 200px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-five[_ngcontent-%COMP%]{\n  bottom: 300px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-four[_ngcontent-%COMP%]{\n  bottom: 400px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-three[_ngcontent-%COMP%]{\n  bottom: 500px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-two[_ngcontent-%COMP%]{\n  bottom: 600px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-one[_ngcontent-%COMP%]{\n  bottom: 700px;\n}\n\n.buttons[_ngcontent-%COMP%]:hover   .btn-home[_ngcontent-%COMP%]{\n  bottom: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZXtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGRkZDO1xufVxuXG4jaG9tZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcbiAgY29sb3I6ICM0MUVBRDQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4udGV4dHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5waG90b3tcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRleHQtcGFnZXtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwYWdlMXtcblxufVxuXG4uY2lyY2xlLWJ0bntcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDUwMG1zO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXR0b25ze1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b25zOmhvdmVye1xuICBoZWlnaHQ6IDg3NXB4O1xufVxuXG4uYnV0dG9uczpob3ZlciAuYnRuLXNldmVue1xuICBib3R0b206IDEwMHB4O1xufVxuLmJ1dHRvbnM6aG92ZXIgLmJ0bi1zaXh7XG4gIGJvdHRvbTogMjAwcHg7XG59XG4uYnV0dG9uczpob3ZlciAuYnRuLWZpdmV7XG4gIGJvdHRvbTogMzAwcHg7XG59XG4uYnV0dG9uczpob3ZlciAuYnRuLWZvdXJ7XG4gIGJvdHRvbTogNDAwcHg7XG59XG4uYnV0dG9uczpob3ZlciAuYnRuLXRocmVle1xuICBib3R0b206IDUwMHB4O1xufVxuLmJ1dHRvbnM6aG92ZXIgLmJ0bi10d297XG4gIGJvdHRvbTogNjAwcHg7XG59XG4uYnV0dG9uczpob3ZlciAuYnRuLW9uZXtcbiAgYm90dG9tOiA3MDBweDtcbn1cbi5idXR0b25zOmhvdmVyIC5idG4taG9tZXtcbiAgYm90dG9tOiA4MDBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ricardo/WebstormProjects/GitHubPage/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map