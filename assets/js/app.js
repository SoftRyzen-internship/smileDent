!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),e.exports=n(7)},function(e,t){var n=document.querySelectorAll("[data-counter]");n.forEach((function(e){var t,n=0,o=parseInt(e.innerText),i=Math.ceil(o/60);t=setInterval((function(){(n+=i)>=o&&(clearInterval(t),n=o),e.innerText=n}),50)}))},function(e,t){var n=document.querySelector(".nav__burger"),o=document.querySelector(".mobile-menu"),i=(document.querySelector(".header"),document.querySelector(".mobile-menu-overlay"));n.addEventListener("click",(function(){o.classList.toggle("mobile-menu--opened"),n.classList.toggle("nav__burger-opened"),i.classList.toggle("mobile-menu-overlay--is-hidden"),"hidden"!==document.body.style.overflow?document.body.style.overflow="hidden":document.body.style.overflow=""})),i.addEventListener("click",(function(e){e.target.classList.contains("mobile-menu-overlay")&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"))})),o.addEventListener("click",(function(e){e.target.closest(".nav__mobile-link")&&(i.classList.add("mobile-menu-overlay--is-hidden"),o.classList.remove("mobile-menu--opened"),n.classList.remove("nav__burger-opened"))}))},function(e,t){var n,o;n=function(e){var t=!0===e?"webp":"no-webp";document.documentElement.classList.add(t)},(o=new Image).onload=o.onerror=function(){n(2==o.height)},o.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"},function(e,t){$(".our-team__slider").slick({slidesToShow:3,slidesToScroll:1,speed:300,cssEase:"ease-in-out",variableWidth:!0,dots:!0,nextArrow:".our-team__next",prevArrow:".our-team__prev",infinite:!1,slide:".our-team__img-wrapper",responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1279,settings:{slidesToShow:2,slidesToScroll:1}}]})},function(e,t){$(document).ready((function(){function e(){$(window).width()<768?$(".our-service__slider:not(.slick-initialized)").slick({slidesToShow:1,slidesToScroll:1,speed:300,cssEase:"ease-in-out",variableWidth:!0,dots:!0,nextArrow:!1,prevArrow:!1,infinite:!0,autoplay:!0,pauseOnHover:!0,slide:".our-service__img-wrapper"}):$(".our-service__slider.slick-initialized").slick("unslick")}e(),$(window).on("resize",(function(){clearTimeout(window.resizedFinished),window.resizedFinished=setTimeout((function(){e()}),250)}))}))},function(e,t){var n=document.getElementById("social-modal"),o=document.getElementById("close-social-btn"),i=document.querySelectorAll(".footer-social__button, [data-social]"),s=document.querySelector("body");function r(){n.classList.add("is-hidden"),s.classList.remove("scroll-hidden")}i.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("is-hidden"),s.classList.add("scroll-hidden")}))})),o.addEventListener("click",(function(e){e.preventDefault(),r()})),document.addEventListener("keydown",(function(e){n.classList.contains("is-hidden")||"Escape"===e.key&&r()})),n.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&r()})),o.addEventListener("click",r)},function(e,t){var n=document.getElementById("email-input"),o=document.getElementById("email-form"),i=document.getElementById("error-message"),s=document.getElementById("success-modal"),r=document.getElementById("close-btn"),d=document.querySelector("body");function c(){s.classList.add("is-hidden"),d.classList.remove("scroll-hidden")}o.addEventListener("submit",(function(e){e.preventDefault();var t=n.value.trim();t?/[<>]/g.test(t)?(i.textContent="Email contains forbidden characters",n.focus()):/^[^!#$%&'*+/=?^_{|}~]+@[^\s@]+\.[a-zA-Z]{2,4}$/.test(t)?(s.classList.remove("is-hidden"),d.classList.add("scroll-hidden"),n.value=""):(i.textContent="Please enter a valid email address",n.focus()):(i.textContent="Email is required",n.focus())})),n.addEventListener("input",(function(e){e.preventDefault(),i.textContent=""})),r.addEventListener("click",(function(e){e.preventDefault(),c()})),document.addEventListener("keydown",(function(e){s.classList.contains("is-hidden")||"Escape"===e.key&&c()})),s.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&c()})),r.addEventListener("click",c)}]);