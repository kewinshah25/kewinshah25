(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! C:\Users\Darshan\Documents\ACAD\Learnings\website\src\main.ts */ "zUnb"
        );

        /***/
      },

    /***/ "2MiI":
      /*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
      /*! exports provided: HeaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HeaderComponent",
          function () {
            return HeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ "tyNb");
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! rxjs/operators */ "kU1M");
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/common */ "ofXK");

        const _c0 = function (a0) {
          return { "is-active": a0 };
        };
        class HeaderComponent {
          constructor(router) {
            this.router = router;
            this.active = false;
            this.currentPage = "";
          }
          ngOnInit() {
            this.router.events
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
                  (e) =>
                    e instanceof
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                      "NavigationEnd"
                    ]
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  (e) => e
                )
              )
              .subscribe((e) => {
                this.currentPage = e.urlAfterRedirects.split("/")[1];
              });
          }
          toggleClasses() {
            this.active = !this.active;
          }
          openModal() {}
        }
        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };
        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 29,
          vars: 9,
          consts: [
            [1, "nav", "has-shadow", "is-hidden-tablet"],
            [1, "container"],
            [1, "nav-right", "nav-menu"],
            ["routerLink", "/", 1, "nav-item", "is-tab", "is-hidden-tablet"],
            [
              "routerLink",
              "projects",
              1,
              "nav-item",
              "is-tab",
              "is-hidden-tablet",
            ],
            [
              "routerLink",
              "contact",
              1,
              "nav-item",
              "is-tab",
              "is-hidden-tablet",
            ],
            [1, "nav-item", "is-tab", "is-active"],
            [1, "icon"],
            [1, "fa", "fa-user"],
            [1, "nav-item", "is-tab"],
            [1, "fa", "fa-sign-out"],
            [
              1,
              "navbar",
              "column",
              "is-2",
              "is-narrow-mobile",
              "is-fullheight",
              "is-hidden-mobile",
            ],
            [1, "menu-list", "mt-50-percent"],
            [1, "m-2"],
            ["routerLink", "", 3, "ngClass"],
            ["routerLink", "projects", 3, "ngClass"],
            ["routerLink", "contact", 3, "ngClass"],
            [1, "mt-2", "button", "is-primary"],
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "nav",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "a",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "a",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                " Projects "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "a",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                " Contact "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "a",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "span",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                11,
                "i",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "a",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "span",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "i",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "aside",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "ul",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "li",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "a",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                " Home "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "li",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "a",
                15
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                22,
                " Projects "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "li",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "a",
                16
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                25,
                " Contact "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "li",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "button",
                17
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                28,
                " View Resume "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  3,
                  _c0,
                  ctx.currentPage == "" || ctx.currentPage == "home"
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  5,
                  _c0,
                  ctx.currentPage == "projects"
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  7,
                  _c0,
                  ctx.currentPage == "contact"
                )
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"],
          ],
          styles: [
            ".navbar[_ngcontent-%COMP%] {\n  height: 100%;\n  float: left;\n  position: fixed;\n  background-color: #fafafa;\n}\n\n@media screen and (max-width: 768px) {\n  #menu-toggle[_ngcontent-%COMP%]:checked    + .nav-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.mt-50-percent[_ngcontent-%COMP%] {\n  margin-top: 30vh;\n}\n\n.is-active[_ngcontent-%COMP%] {\n  color: black !important;\n  background-color: #ececec !important;\n  transition: 0.1s ease-out;\n}\n\na[_ngcontent-%COMP%]:hover {\n  transition: 0.4s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNtZW51LXRvZ2dsZTpjaGVja2VkICsgLm5hdi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm10LTUwLXBlcmNlbnQge1xyXG4gIG1hcmdpbi10b3A6IDMwdmg7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuIl19 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HeaderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-header",
                    templateUrl: "./header.component.html",
                    styleUrls: ["./header.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "6bE9":
      /*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
      /*! exports provided: ProjectsComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProjectsComponent",
          function () {
            return ProjectsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class ProjectsComponent {
          constructor() {}
          ngOnInit() {}
        }
        ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
          return new (t || ProjectsComponent)();
        };
        ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ProjectsComponent,
          selectors: [["app-projects"]],
          decls: 2,
          vars: 0,
          template: function ProjectsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "projects works!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ProjectsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-projects",
                    templateUrl: "./projects.component.html",
                    styleUrls: ["./projects.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "9c4+":
      /*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function () {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./header/header.component */ "2MiI");
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/router */ "tyNb");
        /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./footer/footer.component */ "LmEr");

        class AppComponent {
          constructor() {
            this.title = "website";
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 7,
          vars: 0,
          consts: [
            [
              "rel",
              "stylesheet",
              "href",
              "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
            ],
            [1, "columns"],
            [1, "column", "is-2"],
            [1, "column", "ml-4", "mt-4"],
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "link",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "app-header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "router-outlet"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "app-footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__[
              "HeaderComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__[
              "FooterComponent"
            ],
          ],
          styles: [
            '@charset "UTF-8";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: "\u2022\u2022\u2022";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.outer-container[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: auto;\n  border-radius: 2px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUVGO0FBQ0E7Ozs7OztFQU1FLGFBQUE7QUFFRjtBQUNBO0VBQ0UsU0FBQTtBQUVGO0FBQ0E7RUFDRSxPQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFDQTtFQUNFLFVBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0FBRUY7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUY7QUFDQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjtBQUNBOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMElBQUE7QUFFRjtBQUNBO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjtBQUVBLHNCQUFBO0FBQ0E7RUFFRTs7SUFFRSxXQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUFGOztFQUdBO0lBQ0UsaUJBQUE7RUFBRjs7RUFHQTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjODg4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLmNhcmQtc21hbGwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzY5Njc2Nztcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgd2lkdGg6IDE5MjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXG4udGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuLm91dGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ AytR:
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "environment",
          function () {
            return environment;
          }
        );
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
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

    /***/ Bczr:
      /*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function () {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/platform-browser */ "jhN1");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./app-routing.module */ "dFAl");
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./app.component */ "9c4+");
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./header/header.component */ "2MiI");
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/platform-browser/animations */ "R1ws"
          );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/material/icon */ "NFeN");
        /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./projects/projects.component */ "6bE9");
        /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./footer/footer.component */ "LmEr");
        /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ./contact/contact.component */ "G2Gn");
        /* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./blogs/blogs.component */ "Mzop");
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! ./home/home.component */ "BuFo");

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                "AppRoutingModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[
                "BrowserAnimationsModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__[
                "MatIconModule"
              ],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                  _header_header_component__WEBPACK_IMPORTED_MODULE_4__[
                    "HeaderComponent"
                  ],
                  _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__[
                    "ProjectsComponent"
                  ],
                  _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__[
                    "FooterComponent"
                  ],
                  _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__[
                    "ContactComponent"
                  ],
                  _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_10__[
                    "BlogsComponent"
                  ],
                  _home_home_component__WEBPACK_IMPORTED_MODULE_11__[
                    "HomeComponent"
                  ],
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    "BrowserModule"
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                    "AppRoutingModule"
                  ],
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[
                    "BrowserAnimationsModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__[
                    "MatIconModule"
                  ],
                ],
              }
            );
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                      _header_header_component__WEBPACK_IMPORTED_MODULE_4__[
                        "HeaderComponent"
                      ],
                      _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__[
                        "ProjectsComponent"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__[
                        "FooterComponent"
                      ],
                      _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__[
                        "ContactComponent"
                      ],
                      _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_10__[
                        "BlogsComponent"
                      ],
                      _home_home_component__WEBPACK_IMPORTED_MODULE_11__[
                        "HomeComponent"
                      ],
                    ],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                        "AppRoutingModule"
                      ],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__[
                        "BrowserAnimationsModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__[
                        "MatIconModule"
                      ],
                    ],
                    providers: [],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ BuFo:
      /*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
      /*! exports provided: HomeComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomeComponent",
          function () {
            return HomeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class HomeComponent {
          constructor() {}
          ngOnInit() {}
        }
        HomeComponent.ɵfac = function HomeComponent_Factory(t) {
          return new (t || HomeComponent)();
        };
        HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomeComponent,
          selectors: [["app-home"]],
          decls: 10,
          vars: 0,
          consts: [
            ["id", "about"],
            [1, "box", "container", "mt-4"],
            [1, "title", "has-text-centered"],
            [1, "row", "info"],
            [1, "col-sm-8"],
            [1, "font-fauna", "subtitle"],
            [
              "src",
              "/assets/img/profile-pic.png",
              1,
              "img-responsive",
              "is-horizontal-center",
            ],
          ],
          template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "hello world!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "p",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                7,
                " I am Kewin Shah, a part-time software engineer and a full time dreamer. I am passionate about computers, have a knack at problem solving and skilled at solving your problems efficiently. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                8,
                "img",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "section"
              );
            }
          },
          styles: [
            '.font-fauna[_ngcontent-%COMP%] {\n  font-family: "Fauna One", serif;\n}\n\n.is-horizontal-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWZhdW5hIHtcclxuICBmb250LWZhbWlseTogJ0ZhdW5hIE9uZScsIHNlcmlmO1xyXG59XHJcblxyXG4uaXMtaG9yaXpvbnRhbC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMzB2aDtcclxufVxyXG4iXX0= */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-home",
                    templateUrl: "./home.component.html",
                    styleUrls: ["./home.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ G2Gn:
      /*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
      /*! exports provided: ContactComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ContactComponent",
          function () {
            return ContactComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class ContactComponent {
          constructor() {}
          ngOnInit() {}
        }
        ContactComponent.ɵfac = function ContactComponent_Factory(t) {
          return new (t || ContactComponent)();
        };
        ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ContactComponent,
          selectors: [["app-contact"]],
          decls: 2,
          vars: 0,
          template: function ContactComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "contact works!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ContactComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-contact",
                    templateUrl: "./contact.component.html",
                    styleUrls: ["./contact.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ LmEr:
      /*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
      /*! exports provided: FooterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FooterComponent",
          function () {
            return FooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class FooterComponent {
          constructor() {}
          ngOnInit() {}
        }
        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };
        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: FooterComponent,
          selectors: [["app-footer"]],
          decls: 4,
          vars: 0,
          consts: [
            [1, "footer"],
            [
              1,
              "is-size-6",
              "container",
              "content",
              "has-text-centered",
              "mt-6",
            ],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "footer",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Made with \uD83D\uDC99 by Kewin Shah "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            ".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-footer",
                    templateUrl: "./footer.component.html",
                    styleUrls: ["./footer.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ Mzop:
      /*!*****************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.ts ***!
  \*****************************************************/
      /*! exports provided: BlogsComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BlogsComponent",
          function () {
            return BlogsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");

        class BlogsComponent {
          constructor() {}
          ngOnInit() {}
        }
        BlogsComponent.ɵfac = function BlogsComponent_Factory(t) {
          return new (t || BlogsComponent)();
        };
        BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: BlogsComponent,
          selectors: [["app-blogs"]],
          decls: 2,
          vars: 0,
          template: function BlogsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "blogs works!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MifQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            BlogsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-blogs",
                    templateUrl: "./blogs.component.html",
                    styleUrls: ["./blogs.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ dFAl:
      /*!**************************************************!*\
  !*** ./src/app/components/app-routing.module.ts ***!
  \**************************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ "tyNb");
        /* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./blogs/blogs.component */ "Mzop");
        /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./contact/contact.component */ "G2Gn");
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./home/home.component */ "BuFo");
        /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./projects/projects.component */ "6bE9");

        const routes = [
          {
            path: "",
            component:
              _home_home_component__WEBPACK_IMPORTED_MODULE_4__[
                "HomeComponent"
              ],
          },
          {
            path: "projects",
            component:
              _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__[
                "ProjectsComponent"
              ],
          },
          {
            path: "contact",
            component:
              _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__[
                "ContactComponent"
              ],
          },
          {
            path: "blogs",
            component:
              _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__[
                "BlogsComponent"
              ],
          },
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({ type: AppRoutingModule });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forRoot(routes),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forRoot(routes),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ zUnb:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./environments/environment */ "AytR");
        /* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./app/components/app.module */ "Bczr");
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/platform-browser */ "jhN1");

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          .catch((err) => console.error(err));

        /***/
      },

    /***/ zn8P:
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "zn8P";

        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main.js.map
