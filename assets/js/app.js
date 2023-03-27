!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.r(t),n.d(t,"clearModalForm",(function(){return c}));var o=n(1),i=n(2),r=document.getElementById("form-book-modal"),s=document.getElementById("modal-name"),d=document.getElementById("modal-email-book"),a=document.getElementById("modal-phone");function l(e){var t,n=!0,o=e.value.trim(),i=e.getAttribute("data-reg");return new RegExp(i).test(o)?((t=e).classList.add("success__input"),t.classList.remove("error__input")):(!function(e){e.classList.add("error__input"),e.classList.remove("success__input")}(e),n=!1),n}function c(){r.reset()}r.addEventListener("input",(function(e){var t=e.target;t.hasAttribute("data-reg")&&l(t)})),r.addEventListener("submit",(function(e){e.preventDefault();var t=l(s),n=l(d),r=l(a);t&&n&&r&&(Object(o.addIshiddenModal)(),Object(i.openModalSentForm)(),e.currentTarget.reset())}))},function(e,t,n){"use strict";n.r(t),n.d(t,"addIshiddenModal",(function(){return a})),n.d(t,"openModalForm",(function(){return l}));var o=n(0),i=document.getElementById("open-form-modal"),r=document.getElementById("close-modal-btn"),s=document.querySelectorAll("[data-book]"),d=document.querySelector("body");function a(){i.classList.add("is-hidden"),d.classList.remove("scroll-hidden")}function l(){i.classList.remove("is-hidden"),d.classList.add("scroll-hidden")}s.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),l()}))})),r.addEventListener("click",(function(e){e.preventDefault(),a()})),document.addEventListener("keydown",(function(e){i.classList.contains("is-hidden")||"Escape"===e.key&&(Object(o.clearModalForm)(),a())})),i.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&(Object(o.clearModalForm)(),a())})),r.addEventListener("click",(function(){Object(o.clearModalForm)(),a()}))},function(e,t,n){"use strict";n.r(t),n.d(t,"openModalSentForm",(function(){return d}));var o=document.getElementById("sent-modal"),i=document.getElementById("close-sent-btn"),r=document.querySelector("body");function s(){o.classList.add("is-hidden"),r.classList.remove("scroll-hidden")}function d(){o.classList.remove("is-hidden"),r.classList.add("scroll-hidden")}i.addEventListener("click",(function(e){e.preventDefault(),s()})),document.addEventListener("keydown",(function(e){o.classList.contains("is-hidden")||"Escape"===e.key&&s()})),o.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&s()})),i.addEventListener("click",s)},function(e,t,n){n(4),n(5),n(6),n(0),n(7),n(8),n(1),n(9),n(10),n(11),n(12),n(2),n(13),n(14),e.exports=n(15)},function(e,t){var n=document.querySelectorAll("[data-counter]"),o=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(n.forEach((function(e){var t,n=0,o=parseInt(e.innerText),i=Math.ceil(o/60);t=setInterval((function(){(n+=i)>=o&&(clearInterval(t),n=o),e.innerText=n}),50)})),t.unobserve(e.target))}))})),i=document.querySelector("#about-info");o.observe(i)},function(e,t){var n=document.querySelector(".nav__burger"),o=document.querySelector(".mobile-menu"),i=(document.querySelector(".header"),document.querySelector(".mobile-menu-overlay"));n.addEventListener("click",(function(){o.classList.toggle("mobile-menu--opened"),n.classList.toggle("nav__burger-opened"),i.classList.toggle("mobile-menu-overlay--is-hidden"),"hidden"!==document.body.style.overflow?(console.log("true"),document.body.style.overflow="hidden"):document.body.style.overflow=""})),i.addEventListener("click",(function(e){e.target.classList.contains("mobile-menu-overlay")&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"),document.body.style.overflow="")})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"),document.body.style.overflow="")})),o.addEventListener("click",(function(e){e.target.closest(".nav__mobile-link")&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"),document.body.style.overflow=""),e.target.closest(".nav__mobile-btn")&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"),document.body.style.overflow="")}))},function(e,t){var n=document.getElementById("form"),o=document.getElementById("name"),i=document.getElementById("email-book"),r=document.getElementById("phone"),s=document.getElementById("form-content"),d=document.getElementById("form-success"),a=document.getElementById("return-form");function l(e){var t=e.target;t.hasAttribute("data-reg")&&c(t)}function c(e){var t,n=!0,o=e.value.trim(),i=e.getAttribute("data-reg");return new RegExp(i).test(o)?((t=e).classList.add("success__input"),t.classList.remove("error__input")):(!function(e){e.classList.add("error__input"),e.classList.remove("success__input")}(e),n=!1),n}n.addEventListener("input",l),n.addEventListener("submit",(function(e){e.preventDefault();var t=c(o),n=c(i),a=c(r);t&&n&&a&&(s.classList.add("is-hidden"),d.classList.remove("is-hidden"),e.currentTarget.reset())})),r.addEventListener("blur",l),a.addEventListener("click",(function(){s.classList.remove("is-hidden"),d.classList.add("is-hidden")}))},function(e,t){var n,o;n=function(e){var t=!0===e?"webp":"no-webp";document.documentElement.classList.add(t)},(o=new Image).onload=o.onerror=function(){n(2==o.height)},o.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,s=void 0,s=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===n(s)?s:String(s)),i)}var r,s}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"setCursorPosition",value:function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse=!0,n.moveEnd("character",e),n.moveStart("character",e),n.select()}}},{key:"createMask",value:function(e){var t=0,n="+44 ____ ______".replace(/\D/g,""),o=this.value.replace(/\D/g,"");n.length>=o.length&&(o=n),this.value="+44 ____ ______".replace(/./g,(function(e){return/[_\d]/.test(e)&&t<o.length?o.charAt(t++):t>=o.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):this.setCursorPosition(this.value.length,this)}}])&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();!function(){for(var e=document.getElementsByTagName("form"),t=0;t<e.length;t++)for(var n=e[t].querySelectorAll('[name="phone"]'),o=0;o<n.length;o++){var r=n[o],s=new i;r.addEventListener("input",s.createMask.bind(r)),r.addEventListener("blur",s.createMask.bind(r)),r.addEventListener("focus",s.createMask.bind(r))}}()},function(e,t){!function(e){var t=document.querySelectorAll(e);function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e.forEach((function(e){e.addEventListener(t,(function(){"add"===o?e.classList.add(n):e.classList.remove(n)}))}))}n(t,"mousedown","slider__btn-click","add"),n(t,"mouseup","slider__btn-click"),n(t,"touchstart","slider__btn-click","add"),n(t,"touchend","slider__btn-click"),n(t,"mouseover","slider__btn-hover","add"),n(t,"mouseout","slider__btn-hover"),n(t,"focus","slider__btn-hover","add"),n(t,"blur","slider__btn-hover")}(".slider__btn")},function(e,t){$(".our-reviews__slider").slick({slidesToShow:3,slidesToScroll:1,speed:300,cssEase:"ease-in-out",variableWidth:!0,dots:!0,nextArrow:".our-reviews__next",prevArrow:".our-reviews__prev",infinite:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1279,settings:{slidesToShow:2,slidesToScroll:1}}]})},function(e,t){$(".our-team__slider").slick({slidesToShow:3,slidesToScroll:1,speed:300,cssEase:"ease-in-out",variableWidth:!0,dots:!0,nextArrow:".our-team__next",prevArrow:".our-team__prev",infinite:!1,slide:".our-team__img-wrapper",responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1279,settings:{slidesToShow:2,slidesToScroll:1}}]})},function(e,t){$(document).ready((function(){function e(){$(window).width()<768?$(".our-service__slider:not(.slick-initialized)").slick({slidesToShow:1,slidesToScroll:1,speed:300,cssEase:"ease-in-out",variableWidth:!0,dots:!0,nextArrow:!1,prevArrow:!1,infinite:!0,autoplay:!0,pauseOnHover:!0,slide:".our-service__img-wrapper"}):$(".our-service__slider.slick-initialized").slick("unslick")}e(),$(window).on("resize",(function(){clearTimeout(window.resizedFinished),window.resizedFinished=setTimeout((function(){e()}),250)}))}))},function(e,t,n){"use strict";n.r(t),n.d(t,"openModalSocial",(function(){return a}));var o=document.getElementById("social-modal"),i=document.getElementById("close-social-btn"),r=document.querySelectorAll(".footer-social__button, [data-social]"),s=document.querySelector("body");function d(){o.classList.add("is-hidden"),s.classList.remove("scroll-hidden")}function a(){o.classList.remove("is-hidden"),s.classList.add("scroll-hidden")}r.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),a()}))})),i.addEventListener("click",(function(e){e.preventDefault(),d()})),document.addEventListener("keydown",(function(e){o.classList.contains("is-hidden")||"Escape"===e.key&&d()})),o.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&d()})),i.addEventListener("click",d)},function(e,t){var n=function(e){var t=e.prevButton,n=e.nextButton,o=e.slides,i=e.slickSlider,r=function(e){t.attr("disabled",!0).addClass("slider__btn-disabled"),i.on("afterChange",(function(i,r,s){0===s?t.attr("disabled",!0).addClass("slider__btn-disabled"):t.attr("disabled",!1).removeClass("slider__btn-disabled"),s===o.length-e?n.attr("disabled",!0).addClass("slider__btn-disabled"):n.attr("disabled",!1).removeClass("slider__btn-disabled")}))};function s(){window.innerWidth<=767&&r(lastSlide=1),window.innerWidth>=768&&r(lastSlide=2),window.innerWidth>=1280&&r(lastSlide=3)}s(),window.addEventListener("resize",s)};n({slickSlider:$(".our-team__slider"),prevButton:$(".our-team__prev"),nextButton:$(".our-team__next"),slides:$(".our-team__img-wrapper")}),n({slickSlider:$(".our-reviews__slider"),prevButton:$(".our-reviews__prev"),nextButton:$(".our-reviews__next"),slides:$(".our-reviews__slide")})},function(e,t){var n=document.getElementById("email-input"),o=document.getElementById("email-form"),i=document.getElementById("error-message"),r=document.getElementById("success-modal"),s=document.getElementById("close-btn"),d=document.querySelector("body");function a(){r.classList.add("is-hidden"),d.classList.remove("scroll-hidden")}o.addEventListener("submit",(function(e){e.preventDefault();var t=n.value.trim();t?/[<>]/g.test(t)?(i.textContent="Email contains forbidden characters",n.focus()):/^(?![.-])[A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9])?@[A-Za-z0-9]+(\.[A-Za-z]{2,}){1}(?<![.-])$/.test(t)?(r.classList.remove("is-hidden"),d.classList.add("scroll-hidden"),n.value=""):(i.textContent="Please enter a valid email address",n.focus()):(i.textContent="Email is required",n.focus())})),n.addEventListener("input",(function(e){e.preventDefault(),i.textContent=""})),s.addEventListener("click",(function(e){e.preventDefault(),a()})),document.addEventListener("keydown",(function(e){r.classList.contains("is-hidden")||"Escape"===e.key&&a()})),r.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&a()})),s.addEventListener("click",a)}]);