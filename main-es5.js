(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>about works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w3-container w3-card w3-white w3-margin-bottom\" style=\"height: 100%; overflow-x: auto;\">\n    <h2 class=\"w3-text-grey w3-padding-16\"> Animation</h2>\n    <!-- row one facial animation-->\n    <div class=\"row\" style=\"margin-top: 25px;\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div style=\"cursor:pointer\" (click)=\"openModel('Karl_Casey_facialAnimation.mp4', 'Facial Animation')\">\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + 'facial_animation.PNG')\">\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div>\n                        <p>Facial Animation</p>\n                        <p style=\"white-space: pre-line;\">Facial Animation: This is both the blocking and final pass animation for my Facial Rigging/Animation class this past quarter, sound on recommended. I got permission from one of the directors on one of the capstone films I am working on to use one of the models for this assignment. I like the blocking pass more than the final pass. I didn't put in as much time as I should have on the final pass but I will take this as a learning opportunity on time management with spline animation. This is one example of why I am a 3D Character Rigger, not a 3D Character Animator. Rigging and Animation done in Maya by Casey Karl. Model by Laura Da Costa.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n     <!--    <div class=\"col-6\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div style=\"cursor:pointer\"\n                        (click)=\"openModel('Karl_Casey_Godfather_Death_Turnaround.mp4', 'God Father of Death')\">\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + '4K_still_GodfatherDeath.png')\">\n                    </div>\n                </div>\n                <div class=\"col-6\">\n\n                    <div>\n                        <p>God Father of Death</p>\n                        <p style=\"white-space: pre-line;\">Class project based on the Brothers Grimm tale Godfather\n                            Death. His scythe was also concepted but didn't have the class time to do so. There is a\n                            body under the cloak he is wearing so that I could properly model the cloak around the body.\n                            The cloak is based on the master's degree robes. Concepted in Photoshop. Modeled in Maya.\n                            Textured in Substance Painter. Rendered using Arnold 5</p>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>\n\n<!-- Ticket Modal -->\n<div id=\"ticketModal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content w3-animate-top w3-card-4\">\n        <header class=\"w3-container w3-grey w3-center \">\n            <span onclick=\"document.getElementById('ticketModal').style.display='none'\"\n                class=\"w3-button w3-grey w3-mid w3-display-topright\" style=\"height: 24px;\">×</span>\n            <p>{{modelName}}</p>\n        </header>\n        <div class=\"w3-container\">\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'Karl_Casey_facialAnimation.mp4'\">\n                <vg-player style='height: 550px;'>\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\n                        <source [src]=\"(imgPath + 'Karl_Casey_facialAnimation.mp4')\" type=\"video/mp4\">\n                    </video>\n                </vg-player>\n            </div>\n   \n        </div>\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<app-layout></app-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"w3-container w3-card w3-white w3-margin-bottom\" style=\"height: 100%; overflow-x: auto;\">\r\n  <h2 class=\"w3-text-grey w3-padding-16\">Contact CPKRigging</h2>\r\n  <div class=\"w3-container\" style=\"height: calc(100% - 78px);  padding-bottom: 10px;\">\r\n\r\n    <form id=\"my-form\" action=\"https://formspree.io/mnqpojzk\" method=\"POST\">\r\n      <div class=\"row\">\r\n        <div class=\"col-25\">\r\n          <label for=\"name\">Name</label>\r\n        </div>\r\n        <div class=\"col-75\">\r\n          <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name..\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-25\">\r\n          <label for=\"email\">Email</label>\r\n        </div>\r\n        <div class=\"col-75\">\r\n          <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your email..\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-25\">\r\n          <label for=\"email\">Subject</label>\r\n        </div>\r\n        <div class=\"col-75\">\r\n          <input type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject..\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-25\">\r\n          <label for=\"subject\">Message</label>\r\n        </div>\r\n        <div class=\"col-75\">\r\n          <textarea id=\"message\" name=\"message\" placeholder=\"Your message..\" style=\"height:200px\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <input type=\"submit\" value=\"Submit\">\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n        <div class=\"w3-container w3-card w3-white w3-margin-bottom\" style=\"height: 100%;\">\r\n          <h2 class=\"w3-text-grey w3-padding-16\">Demo Reel</h2>\r\n          <div class=\"w3-container\" style=\"height: calc(100% - 70px);\">\r\n                <vg-player style='height:95%'> \r\n                        <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                            <source [src]=\"(imgPath + 'Demo_reel_cut2.mp4')\" type=\"video/mp4\">\r\n                        </video>\r\n                    </vg-player> \r\n          </div>\r\n        </div>\r\n      \r\n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"w3-container w3-card w3-white\" style=\" width: 100%;height: 100%;\">\n        <div class=\"row\">\n            <div class=\"col-md-3\" style=\"text-align: center; cursor:pointer\" (click)=\"navTo('rigs')\">\n                <p class=\"w3-text-grey\">Rigs</p>\n                <img style=\"height: 49%; width:49%; margin-top:-10px\" [src]=\"(imgPath + 'MaryBell_skeleton.PNG')\">\n            </div>\n            <div class=\"col-md-3\" style=\"text-align: center; cursor:pointer\" (click)=\"navTo('models')\">\n                <p class=\"w3-text-grey\">Models</p>\n                <img style=\"height: 49%; width:49%; margin-top: -10px;\" [src]=\"(imgPath + '4k_still_rabbit.png')\">\n            </div>\n            <!-- <div class=\"col-md-3\" style=\"text-align: center; cursor:pointer\" (click)=\"navTo('about')\"> -->\n                <!-- <div class=\"col-md-3\" style=\"text-align: center; cursor:pointer\" >\n                <p class=\"w3-text-grey\">About me</p>\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + '4K_still_GodfatherDeath.png')\">\n            </div> -->\n             <div class=\"col-md-3\" style=\"text-align: center; cursor:pointer; \" (click)=\"navTo('contact')\"> \n                <p class=\"w3-text-grey\">Contact</p>\n                <img style=\"height: 50%; width:50%; margin-top: -10px;\" [src]=\"(imgPath + '4K_image_still_final_char.png')\">\n            </div>\n\n        </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w3-content full-height\">\r\n    <div class=\"row\" style=\"height: 100%;\">\r\n        <div class=\"col-md-2 \" style=\" height: 100%;\">\r\n            <app-left-nav></app-left-nav>\r\n        </div>\r\n        <div class=\"col-md-10 \" style=\" height: 100%;\">\r\n            <div class=\"w3-row-padding\" style=\"width: 100%; height: 100%;\">\r\n                \r\n                    <router-outlet></router-outlet>\r\n               \r\n            </div>\r\n            <!-- <div class=\"w3-row-padding\" style=\"width: 100%; height: 15%;\">\r\n                \r\n                    <app-footer></app-footer>\r\n                \r\n            </div> -->\r\n        </div>\r\n\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-nav/left-nav.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/left-nav/left-nav.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n   <div class=\"w3-row-padding\" style=\" height: 100%;\">\r\n    \r\n    <!-- Left Column -->\r\n    <div class=\"w3-third \" style=\"width: 120%; height: 100%;\">\r\n    \r\n      <div class=\"w3-white w3-text-grey w3-card-4\" style=\" height: 100%;\">\r\n            <div class=\"w3-container\">\r\n\r\n            <a   (click)=\"navTo('demo')\" class=\"w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey\" title=\"close menu\">\r\n                <i class=\"fa fa-remove\"></i>\r\n              </a>\r\n                   <img  src=\"../../assets/images/CMPA11007_F18_P2_Personal_Casey_Karl.png\" style=\"width:50%; margin-top:15px\" class=\"w3-round\"><br><br>\r\n        \r\n        \r\n              <h4><b>Casey Karl</b></h4>\r\n              <p class=\"w3-text-grey\">Porfolio</p>\r\n\r\n            <a  (click)=\"navTo('demo')\" class=\"w3-bar-item w3-button w3-padding \"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>Demo</a> \r\n\r\n            <a  (click)=\"navTo('rigs')\" class=\"w3-bar-item w3-button w3-padding \"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>Rigs</a> \r\n\r\n            <a  (click)=\"navTo('models')\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>Models</a> \r\n            \r\n            <a  (click)=\"navTo('animation')\" class=\"w3-bar-item w3-button w3-padding \"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>Animation</a> \r\n            \r\n            <!-- <a  (click)=\"navTo('about')\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-user fa-fw w3-margin-right\"></i>About</a>  -->\r\n             <a  (click)=\"navTo('contact')\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-envelope fa-fw w3-margin-right\"></i>Contact</a>\r\n          \r\n    \r\n          <br>\r\n        </div>\r\n      </div><br>\r\n\r\n    <!-- End Left Column -->\r\n    </div>\r\n\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/models/models.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/models/models.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w3-container w3-card w3-white w3-margin-bottom\" style=\"height: 100%; overflow-x: auto;\">\r\n    <h2 class=\"w3-text-grey w3-padding-16\"> Models</h2>\r\n    <!-- row one-->\r\n    <div class=\"row\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('Satyr_Rabbit_shaded03.mp4', 'Rabbit')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + '4k_still_rabbit.png')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Rabbit</p>\r\n                        <p style=\"white-space: pre-line;\">Class project based on an old story. I originally based it off\r\n                            of one of the main characters from the stories but through concepting, they turned into a\r\n                            satyr rabbit. I had fun modeling and texturing it. Concepted in Photoshop. Modeled in Maya.\r\n                            Textured in Substance Painter. Rendered using Arnold 5.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('Karl_Casey_Godfather_Death_Turnaround.mp4', 'God Father of Death')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + '4K_still_GodfatherDeath.png')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n\r\n                    <div>\r\n                        <p>God Father of Death</p>\r\n                        <p style=\"white-space: pre-line;\">Class project based on the Brothers Grimm tale Godfather\r\n                            Death. His scythe was also concepted but didn't have the class time to do so. There is a\r\n                            body under the cloak he is wearing so that I could properly model the cloak around the body.\r\n                            The cloak is based on the master's degree robes. Concepted in Photoshop. Modeled in Maya.\r\n                            Textured in Substance Painter. Rendered using Arnold 5</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--row tow -->\r\n    <div class=\"row\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('Satyr.mpv4', 'Satyr')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + '4k_still_satyr.png')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Satyr</p>\r\n                        <p style=\"white-space: pre-line;\">Class project based on an Aesop's Fable of what blows to make\r\n                            warm blows to make cold. There are two color palettes for this model. The bottom half is on\r\n                            the cooler end while the top and the horns are the warmer sides. I made the transition color\r\n                            his skin tone so that the two would flow better together. Used the same process as with the\r\n                            Satyr Rabbit model for the legs. I had fun adding in the detailing to the bottom half with\r\n                            the fur. Concepted in Photoshop. Modeled in Maya. Textured in Substance Painter. Rendered\r\n                            using Arnold 5. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('finalChar.mpv4', 'Antiphates')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + '4K_image_still_final_char.png')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Antiphates </p>\r\n                        <p style=\"white-space: pre-line;\">I combined two of my course finals for this model. This is\r\n                            Antiphates from Homer's The Odyssey. One of my finals was to make your own original myth and\r\n                            the other was to make a model from a story either made up or already existing. I obtained\r\n                            permission from both of my professors to combine these finals. My tale is when Odysseus land\r\n                            on the land of the giants and sends the scouts out to see who lives on the island. Centered\r\n                            on those scouts. Antiphates is lit by the fire in the room where the tale comes to an end.\r\n                            Concepted in Photoshop. Modeled in Maya. Textured in Substance Painter. Rendered using\r\n                            Arnold 5.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--row three -->\r\n    <div class=\"row\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('karlCaseyStempunk.0001.mp4', 'Steampunk Rocking chair')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + 'Steampunk_rockingChair_4kRender.jpg')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Steampunk Rocking chair</p>\r\n                        <p style=\"white-space: pre-line;\"> Class project. The class had recently completed a short\r\n                            modeling challenge where we had to make a chair. I decided for the project to imagine an\r\n                            older inventer that didn't want to drag around the entire chair around the porch. The folds\r\n                            in the sitting area are where they meet respectively. The power source is steam where the\r\n                            water and heating coil is under the chair. Concept to completion, ~2 weeks. Concepted in\r\n                            Photoshop. Modeled in Maya. Textured in Substance Painter. Rendered using Arnold 5.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('karlCaseyTopiary.0001_1.mp4', 'Topiary Temple')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + 'Topiary_temple_4kRender.jpg')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Topiary Temple </p>\r\n                        <p style=\"white-space: pre-line;\">Class project. Where given the theme and was torn between a\r\n                            Peacock centered or a Rose centered temple. My professor stated what was the issue with\r\n                            combining the two and that is what I did. I did go back to fix the issues I was having\r\n                            before the initial deadline but due to the size of the objects in the scene, they can't\r\n                            easily be read. Concept to completion, ~2 weeks. Concepted in Photoshop. Modeled in Maya.\r\n                            Textured in Substance Painter. Rendered using Arnold 5. What cannot be seen due to the size\r\n                            of the project, grass using XGen interactable grooming splines and leaves on the topiaries\r\n                            and hedges using MASH</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n     <!--row four -->\r\n     <div class=\"row\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('karlCaseyInterior.0001.mpv4', 'Grimm Brothers Fairy Tale Interior')\">\r\n                        <img style=\"height: 90%; width:90%;\"\r\n                            [src]=\"(imgPath + 'Karl_Casey_Grimms_Interior_4K_render.jpg')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Grimm Brothers Fairy Tale Interior</p>\r\n                        <p style=\"white-space: pre-line;\"> First of the two, class finals. I decided to do the same tale that I modeled Godfather Death after, Godfather Death. I wanted to depict where Godfather Death takes his godson at the end of the tale, his cave with the candles of every living person. Also quickly modeled his scyth to break up the verticals with the diagonal. This one took up most of my time given for both projects. Altogether has around 7 thousand candles. Concept to completion, ~4 weeks. Concepted in Photoshop. Modeled in Maya. Textured in Substance Painter. Rendered using Arnold 5. Candles were individually modeled then using MASH for the replication. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('karlCaseyExterior.0001.mp4', 'Aesops Fables Exterior')\">\r\n                        <img style=\"height: 90%; width:90%;\" [src]=\"(imgPath + 'Karl_Casey_Exterior_4kRender.jpg')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <div>\r\n                        <p>Aesops Fables Exterior </p>\r\n                        <p style=\"white-space: pre-line;\">Second of the two, class finals. I wanted to do the same story as I did for the earlier Satyr model but found one that better fit the project. The Ant and The Dove. Boiled down the tale is about kindness. A dove sees and gives an ant in the river a blade of grass to get out. The ant notices a man about to shoot the dove so the ant bites the man's ankle to startle the dove off. The feather you see is the doves and the house is the man's. Concept to completion, ~5 weeks. Concepted in Photoshop. Modeled in Maya. Textured in Substance Painter. Rendered using Arnold 5. Grass using XGen interactable grooming splines.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- Ticket Modal -->\r\n<div id=\"ticketModal\" class=\"w3-modal\">\r\n    <div class=\"w3-modal-content w3-animate-top w3-card-4\">\r\n        <header class=\"w3-container w3-grey w3-center \">\r\n            <span onclick=\"document.getElementById('ticketModal').style.display='none'\"\r\n                class=\"w3-button w3-grey w3-mid w3-display-topright\" style=\"height: 24px;\">×</span>\r\n            <p>{{modelName}}</p>\r\n        </header>\r\n        <div class=\"w3-container\">\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'Karl_Casey_Godfather_Death_Turnaround.mp4'\">\r\n                <vg-player style='height: 450px;'>\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'Karl_Casey_Godfather_Death_Turnaround.mp4')\" type=\"video/mp4\">\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr_Rabbit_shaded03.mp4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'Satyr_Rabbit_shaded03.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr.mpv4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'Satyr.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'finalChar.mpv4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'finalChar.0001.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n       \r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'karlCaseyStempunk.0001.mp4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'karlCaseyStempunk.0001.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'karlCaseyInterior.0001.mpv4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'karlCaseyInterior.0001.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'karlCaseyTopiary.0001_1.mp4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'karlCaseyTopiary.0001_1.mp4')\" type=\"video/mp4\">\r\n                          \r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'karlCaseyExterior.0001.mp4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'karlCaseyExterior.0001.mp4')\" type=\"video/mp4\">\r\n                          \r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rigs/rigs.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rigs/rigs.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w3-container w3-card w3-white w3-margin-bottom\" style=\"height: 100%; overflow-x: auto;\">\r\n    <h2 class=\"w3-text-grey w3-padding-16\"> Riggs</h2>\r\n\r\n    <!-- row mary bell-->\r\n    <div class=\"row\" style=\"margin-top: 25px;\">\r\n        <div class=\"col-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <!-- <div style=\"cursor:pointer\" (click)=\"openModel('MaryBell_geo.PNG')\"> -->\r\n                    <div>\r\n                        <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'MaryBell_geo.PNG')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <!-- <div style=\"cursor:pointer\" (click)=\"openModel('MaryBell_skeleton.PNG')\"> -->\r\n                    <div >\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'MaryBell_skeleton.PNG')\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('MaryBell_controls.PNG')\"> -->\r\n                <div >\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'MaryBell_controls.PNG')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div>\r\n                    <p>Mary Bell </p>\r\n                    <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est\r\n                        reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure,\r\n                        iste.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--row groovy gary -->\r\n<div class=\"row\" style=\"margin-top: 25px;\">\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)= \"openModel('casey-karl-gary-texture.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-gary-texture.png')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div>\r\n                    <!-- <div style=\"cursor:pointer\" (click)= \"openModel('casey-karl-groovy-gary-snip.png')\"> -->\r\n                    <div>\r\n                        <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-groovy-gary-snip.png')\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <!-- <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('finalChar.mpv4')\">\r\n                        <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + '4K_image_still_final_char.png')\">\r\n                    </div>\r\n                </div> -->\r\n            <div class=\"col-12\">\r\n                <div>\r\n                    <p>Groovy Gary </p>\r\n                    <p>This is Groovy Gary. During my Game and App class's game jam my groups modeler decided to have\r\n                        this guy as the main character. That game is getting polished up currently and this is the\r\n                        higher quality rig that I did for him. This is only my second completed rig that I have done.\r\n                        This is the un-textured version of the character on Brandon Colley's page as well. The creator\r\n                        of the model is Jacob Levine.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- row centaur -->\r\n<div class=\"row\" style=\"margin-top: 25px;\">\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-centaur-snip.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-centaur-snip.png')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-centaur-snip.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-centaur-snip.png')\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <!-- <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-centaur-snip.png')\">\r\n                        <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-centaur-snip.png')\">\r\n                    </div>\r\n                </div> -->\r\n            <div class=\"col-12\">\r\n                <div>\r\n                    <p> </p>\r\n                    <p>This is my centaur rig. I wanted to try something that would combine two different styles of\r\n                        rigging\r\n                        and happen to be a cross bread. I used a joint system to drive the spine.\r\n                        Got this done during an open house, while I was explaing what I was doing. This is the link for\r\n                        the modeler of the centaur https://www.artstation.com/artist/wolfbrother76 </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- row 48 hour -->\r\n<div class=\"row\" style=\"margin-top: 25px;\">\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-sword-snip.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-sword-snip.png')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer; margin-bottom:12px\" (click)=\"openModel('casey-karl-stapler.png')\"> -->\r\n                <div style=\" margin-bottom:12px\">\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-stapler-snip.png')\">\r\n                </div>\r\n                <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-employer-snip.png')\">\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-employer-snip.png')\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <!-- <div class=\"col-6\">\r\n                    <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-sword-snip.png')\">\r\n                        <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-sword-snip.png')\">\r\n                    </div>\r\n                </div>  -->\r\n            <div class=\"col-12\">\r\n                <div>\r\n                    <p> </p>\r\n                    <p>These are some models that I was in charge of rigging during my class's 48 hour game jam.\r\n                        My teacher was only there to be the IT guy, so we couldn't ask him for help.\r\n                        The stapler was one of the best models and one of the reasons people were able to look at what\r\n                        we\r\n                        were doing because of how funny the stapler was moving and the particle that was attached to it\r\n                        too.\r\n                        The models of the little characters is Jacob Levine and the modeler for the inanimate objects\r\n                        are Aidan Scheck. </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- row robot and  goblin -->\r\n<div class=\"row\" style=\"margin-top: 25px;\">\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-goblin-snip.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-goblin-snip.png')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p> </p>\r\n                <p>This is the first full rig that I did. This one was built for a VR game that one of my friends were\r\n                    making. This game isn't finished yet. The modeler is Ryan Cuscaden.</p>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <!-- <div style=\"cursor:pointer\" (click)=\"openModel('casey-karl-robot-snip.png')\"> -->\r\n                <div>\r\n                    <img style=\"height: 75%; width:75%;\" [src]=\"(imgPath + 'casey-karl-robot-snip.png')\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div>\r\n                    <p> </p>\r\n                    <p>This is a robot that I was doing. I had a Maya modeler model me a robot for me to play around\r\n                        with. This is a done rig to how far that I currently know. This guy is so huge. What the photo\r\n                        doesn't show is that he does have a mouth but due to the lighting it doesn't come up. Modeler is\r\n                        Ryan Buckley. </p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- Ticket Modal -->\r\n<div id=\"ticketModal\" class=\"w3-modal\">\r\n    <div class=\"w3-modal-content w3-animate-top w3-card-4\">\r\n        <header class=\"w3-container w3-grey w3-center \">\r\n            <span onclick=\"document.getElementById('ticketModal').style.display='none'\"\r\n                class=\"w3-button w3-grey w3-mid w3-display-topright\" style=\"height: 24px;\">×</span>\r\n            <p>rigg spinning</p>\r\n        </header>\r\n        <div class=\"w3-container\">\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'MaryBell_geo.PNG'\">\r\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + 'MaryBell_geo.PNG')\">\r\n                <!-- <vg-player style='height: 450px;'>\r\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                                        <source [src]=\"(imgPath + 'Karl_Casey_Godfather_Death_Turnaround.mp4')\" type=\"video/mp4\">                                          \r\n                                        </video>\r\n                                </vg-player>  -->\r\n            </div>\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'MaryBell_controls.PNG'\">\r\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + 'MaryBell_controls.PNG')\">\r\n                <!-- <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr_Rabbit_shaded03.mp4'\">\r\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                                        <source [src]=\"(imgPath + 'Satyr_Rabbit_shaded03.mp4')\" type=\"video/mp4\">\r\n                                           \r\n                                    </video>\r\n                                </vg-player>  -->\r\n            </div>\r\n\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'MaryBell_skeleton.PNG'\">\r\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + 'MaryBell_skeleton.PNG')\">\r\n\r\n                <!-- <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr.mpv4'\">\r\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                                        <source [src]=\"(imgPath + 'Satyr.mp4')\" type=\"video/mp4\">\r\n                                           \r\n                                    </video>\r\n                                </vg-player>  -->\r\n            </div>\r\n\r\n            <div class=\"w3-container\">\r\n                <vg-player style='height: 450px;' *ngIf=\"modalImg === 'finalChar.mpv4'\">\r\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                        <source [src]=\"(imgPath + 'finalChar.0001.mp4')\" type=\"video/mp4\">\r\n\r\n                    </video>\r\n                </vg-player>\r\n            </div>\r\n\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === 'casey-karl-centaur-snip.png'\">\r\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + 'casey-karl-centaur-snip.png')\">\r\n                <!-- <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr_Rabbit_shaded03.mp4'\">\r\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                                        <source [src]=\"(imgPath + 'Satyr_Rabbit_shaded03.mp4')\" type=\"video/mp4\">\r\n                                           \r\n                                    </video>\r\n                                </vg-player>  -->\r\n            </div>\r\n\r\n            <div class=\"w3-container\" *ngIf=\"modalImg === ' casey-karl-centaur-snip-pt2.png'\">\r\n                <img style=\"height: 50%; width:50%;\" [src]=\"(imgPath + ' casey-karl-centaur-snip-pt2.png')\">\r\n                <!-- <vg-player style='height: 450px;' *ngIf=\"modalImg === 'Satyr_Rabbit_shaded03.mp4'\">\r\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                                        <source [src]=\"(imgPath + 'Satyr_Rabbit_shaded03.mp4')\" type=\"video/mp4\">\r\n                                           \r\n                                    </video>\r\n                                </vg-player>  -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/about/about.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/animation/animation.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/animation/animation.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/animation/animation.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/animation/animation.component.ts ***!
          \**************************************************/
        /*! exports provided: AnimationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function () { return AnimationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            var AnimationComponent = /** @class */ (function () {
                function AnimationComponent(envSettings) {
                    this.envSettings = envSettings;
                    this.imgPath = '';
                    this.modalImg = '';
                    this.playVideo = true;
                    this.modelName = '';
                }
                AnimationComponent.prototype.ngOnInit = function () {
                    // determine image path
                    this.imgPath = this.envSettings.getServiceBase();
                };
                AnimationComponent.prototype.openModel = function (image, name) {
                    this.modalImg = image;
                    this.modelName = name;
                    setTimeout(function () {
                        document.getElementById('ticketModal').style.display = 'block';
                    }, 500);
                };
                return AnimationComponent;
            }());
            AnimationComponent.ctorParameters = function () { return [
                { type: _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsService"] }
            ]; };
            AnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-animation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animation.component.scss */ "./src/app/animation/animation.component.scss")).default]
                })
            ], AnimationComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
            /* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
            /* harmony import */ var _rigs_rigs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rigs/rigs.component */ "./src/app/rigs/rigs.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/animation/animation.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: 'demo',
                    pathMatch: 'full'
                },
                {
                    path: 'agPort',
                    redirectTo: 'demo',
                    pathMatch: 'full'
                },
                {
                    path: 'demo',
                    component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]
                },
                {
                    path: 'models',
                    component: _models_models_component__WEBPACK_IMPORTED_MODULE_4__["ModelsComponent"]
                },
                {
                    path: 'rigs',
                    component: _rigs_rigs_component__WEBPACK_IMPORTED_MODULE_5__["RigsComponent"]
                },
                {
                    path: 'about',
                    component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
                },
                {
                    path: 'contact',
                    component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
                },
                {
                    path: 'animation',
                    component: _animation_animation_component__WEBPACK_IMPORTED_MODULE_8__["AnimationComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'agPortfolio';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
            /* harmony import */ var _left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-nav/left-nav.component */ "./src/app/left-nav/left-nav.component.ts");
            /* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
            /* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
            /* harmony import */ var _rigs_rigs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rigs/rigs.component */ "./src/app/rigs/rigs.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
            /* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! videogular2/compiled/controls */ "./node_modules/videogular2/compiled/controls.js");
            /* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! videogular2/compiled/overlay-play */ "./node_modules/videogular2/compiled/overlay-play.js");
            /* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! videogular2/compiled/buffering */ "./node_modules/videogular2/compiled/buffering.js");
            /* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _service_window_ref_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/window-ref.service */ "./src/app/service/window-ref.service.ts");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/animation/animation.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                        _left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_6__["LeftNavComponent"],
                        _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                        _models_models_component__WEBPACK_IMPORTED_MODULE_8__["ModelsComponent"],
                        _rigs_rigs_component__WEBPACK_IMPORTED_MODULE_9__["RigsComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                        _animation_animation_component__WEBPACK_IMPORTED_MODULE_19__["AnimationComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__["VgCoreModule"],
                        videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__["VgControlsModule"],
                        videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__["VgOverlayPlayModule"],
                        videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__["VgBufferingModule"]
                    ],
                    providers: [
                        _service_window_ref_service__WEBPACK_IMPORTED_MODULE_16__["WindowRefService"],
                        _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_17__["EnvironmentSettingsService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/contact/contact.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n}\n\ninput[type=submit] {\n  background-color: #317b32;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\ninput[type=submit]:hover {\n  background-color: #317b32;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcQ2FzZXlzIHNpdGVcXGFnUG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0EsbUNBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxN2IzMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE3YjMyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29sLTI1IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLmNvbC03NSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE3YjMyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxN2IzMjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbC0yNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5jb2wtNzUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                    this.submitted = false;
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/demo/demo.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/demo/demo.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/demo/demo.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/demo/demo.component.ts ***!
          \****************************************/
        /*! exports provided: DemoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function () { return DemoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            var DemoComponent = /** @class */ (function () {
                function DemoComponent(router, envSettings) {
                    this.router = router;
                    this.envSettings = envSettings;
                    this.imgPath = '';
                }
                DemoComponent.prototype.ngOnInit = function () {
                    // determine image path
                    this.imgPath = this.envSettings.getServiceBase();
                };
                DemoComponent.prototype.navTo = function (route) {
                    this.router.navigate([route]);
                };
                return DemoComponent;
            }());
            DemoComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentSettingsService"] }
            ]; };
            DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-demo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")).default]
                })
            ], DemoComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/footer/footer.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent(router, envSettings) {
                    this.router = router;
                    this.envSettings = envSettings;
                    this.imgPath = '';
                }
                FooterComponent.prototype.ngOnInit = function () {
                    // determine image path
                    this.imgPath = this.envSettings.getServiceBase();
                };
                FooterComponent.prototype.navTo = function (route) {
                    this.router.navigate([route]);
                };
                return FooterComponent;
            }());
            FooterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentSettingsService"] }
            ]; };
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/layout.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/layout/layout.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/layout/layout.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/layout/layout.component.ts ***!
          \********************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                LayoutComponent.prototype.ngOnInit = function () {
                };
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/left-nav/left-nav.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/left-nav/left-nav.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZnQtbmF2L2xlZnQtbmF2LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/left-nav/left-nav.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/left-nav/left-nav.component.ts ***!
          \************************************************/
        /*! exports provided: LeftNavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function () { return LeftNavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LeftNavComponent = /** @class */ (function () {
                function LeftNavComponent(router) {
                    this.router = router;
                }
                LeftNavComponent.prototype.ngOnInit = function () {
                    // select the demo page as default
                    this.navTo('demo');
                };
                LeftNavComponent.prototype.navTo = function (route) {
                    this.router.navigate([route]);
                };
                return LeftNavComponent;
            }());
            LeftNavComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LeftNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-left-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/left-nav/left-nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-nav.component.scss */ "./src/app/left-nav/left-nav.component.scss")).default]
                })
            ], LeftNavComponent);
            /***/ 
        }),
        /***/ "./src/app/models/models.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/models/models.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVscy9tb2RlbHMuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/models/models.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/models/models.component.ts ***!
          \********************************************/
        /*! exports provided: ModelsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function () { return ModelsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            var ModelsComponent = /** @class */ (function () {
                function ModelsComponent(envSettings) {
                    this.envSettings = envSettings;
                    this.imgPath = '';
                    this.modalImg = '';
                    this.playVideo = true;
                    this.modelName = '';
                }
                ModelsComponent.prototype.ngOnInit = function () {
                    // determine image path
                    this.imgPath = this.envSettings.getServiceBase();
                };
                ModelsComponent.prototype.openModel = function (image, name) {
                    this.modalImg = image;
                    this.modelName = name;
                    setTimeout(function () {
                        document.getElementById('ticketModal').style.display = 'block';
                    }, 500);
                };
                return ModelsComponent;
            }());
            ModelsComponent.ctorParameters = function () { return [
                { type: _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsService"] }
            ]; };
            ModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-models',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./models.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/models/models.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./models.component.scss */ "./src/app/models/models.component.scss")).default]
                })
            ], ModelsComponent);
            /***/ 
        }),
        /***/ "./src/app/rigs/rigs.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/rigs/rigs.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ3Mvcmlncy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/rigs/rigs.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/rigs/rigs.component.ts ***!
          \****************************************/
        /*! exports provided: RigsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RigsComponent", function () { return RigsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/enviroment-settings.service */ "./src/app/service/enviroment-settings.service.ts");
            var RigsComponent = /** @class */ (function () {
                function RigsComponent(envSettings) {
                    this.envSettings = envSettings;
                    this.imgPath = '';
                    this.modalImg = '';
                    this.playVideo = true;
                }
                RigsComponent.prototype.ngOnInit = function () {
                    // determine image path
                    this.imgPath = this.envSettings.getServiceBase();
                };
                RigsComponent.prototype.openModel = function (image) {
                    this.modalImg = image;
                    setTimeout(function () {
                        document.getElementById('ticketModal').style.display = 'block';
                    }, 500);
                };
                return RigsComponent;
            }());
            RigsComponent.ctorParameters = function () { return [
                { type: _service_enviroment_settings_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsService"] }
            ]; };
            RigsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-rigs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rigs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rigs/rigs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rigs.component.scss */ "./src/app/rigs/rigs.component.scss")).default]
                })
            ], RigsComponent);
            /***/ 
        }),
        /***/ "./src/app/service/enviroment-settings.service.ts": 
        /*!********************************************************!*\
          !*** ./src/app/service/enviroment-settings.service.ts ***!
          \********************************************************/
        /*! exports provided: EnvironmentSettingsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentSettingsService", function () { return EnvironmentSettingsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/service/window-ref.service.ts");
            var EnvironmentSettingsService = /** @class */ (function () {
                function EnvironmentSettingsService(windowRefservice) {
                    this.windowRefservice = windowRefservice;
                    this.gitHubPath = '../../agPort/assets/images/';
                    this.localPath = '../../assets/images/';
                    this.cpkriggingPath = '../../assets/images/';
                    this.basePath = '';
                }
                EnvironmentSettingsService.prototype.getServiceBase = function () {
                    var host = this.windowRefservice.nativeWindow.location.host;
                    if (host.includes('localhost')) {
                        this.basePath = this.localPath;
                    }
                    if (host.includes('github')) {
                        this.basePath = this.gitHubPath;
                    }
                    if (host.includes('cpkrigging')) {
                        this.basePath = this.cpkriggingPath;
                    }
                    return this.basePath;
                };
                return EnvironmentSettingsService;
            }());
            EnvironmentSettingsService.ctorParameters = function () { return [
                { type: _window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"] }
            ]; };
            EnvironmentSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], EnvironmentSettingsService);
            /***/ 
        }),
        /***/ "./src/app/service/window-ref.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/service/window-ref.service.ts ***!
          \***********************************************/
        /*! exports provided: WindowRefService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function () { return WindowRefService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            function getWindow() {
                return window;
            }
            var WindowRefService = /** @class */ (function () {
                function WindowRefService() {
                }
                Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
                    get: function () {
                        return getWindow();
                    },
                    enumerable: true,
                    configurable: true
                });
                return WindowRefService;
            }());
            WindowRefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], WindowRefService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Caseys site\agPortfolio\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map