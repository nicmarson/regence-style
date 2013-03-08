jQuery.webshims.register("form-extend",function(e,t,n,r,i,s){"use strict";var o=n.Modernizr,u=o.inputtypes;if(!o.formvalidation||t.bugs.bustedValidity)return;var a=t.inputTypes,f={};t.addInputType=function(e,t){a[e]=t};t.addValidityRule=function(e,t){f[e]=t};t.addValidityRule("typeMismatch",function(e,t,n,r){if(t==="")return!1;var i=r.typeMismatch;"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase());a[n.type]&&a[n.type].mismatch&&(i=a[n.type].mismatch(t,e));return i});var l=s.overrideMessages,c=!u.number||!u.time||!u.range||l,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=l?["value","checked"]:["value"],d=[],v=function(t,n){if(!t)return;var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();if(!l&&!a[i])return;l&&!n&&i=="radio"&&t.name?e(r.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity")},m={};["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s=n=="input"?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i);t.bugs.validationMessage&&t.data(s,"customvalidationMessage",i);if(c){t.data(s,"hasCustomError",!!i);v(s)}}}});m[n]=r.prop._supvalue});if(c||l){p.push("min");p.push("max");p.push("step");d.push("input")}if(l){p.push("required");p.push("pattern");d.push("select");d.push("textarea")}if(c){var g;d.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(g)return;var i=n=="input"?e(this).getNativeElement()[0]:this,s=r.prop._supget.call(i);if(!s)return s;var o={};h.forEach(function(e){o[e]=s[e]});if(!e.prop(i,"willValidate"))return o;g=!0;var u=e(i),c={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=u.val(),d=!!t.data(i,"hasCustomError"),v;g=!1;o.customError=d;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var y=!0;e.each(o,function(e,t){if(t){y=!1;return!1}});y&&(o.valid=!0)}e.each(f,function(e,r){o[e]=r(u,p,c,o);if(o[e]&&(o.valid||!v)&&(l||a[c.type]&&a[c.type].mismatch)){m[n].call(i,t.createValidationMessage(i,e));o.valid=!1;v=!0}});if(o.valid){m[n].call(i,"");t.data(i,"hasCustomError",!1)}else l&&!v&&!d&&e.each(o,function(e,r){if(e!=="valid"&&r){m[n].call(i,t.createValidationMessage(i,e));return!1}});return o},writeable:!1}})});p.forEach(function(e){t.onNodeNamesPropertyModify(d,e,function(e){v(this)})});if(r.addEventListener){var y,b=function(t){if(!("form"in t.target))return;var n=t.target.form;clearTimeout(y);v(t.target);n&&l&&e("input",n).each(function(){this.type=="password"&&v(this)})};r.addEventListener("change",b,!0);if(l){r.addEventListener("blur",b,!0);r.addEventListener("keydown",function(e){if(e.keyCode!=13)return;b(e)},!0)}r.addEventListener("input",function(e){clearTimeout(y);y=setTimeout(function(){v(e.target)},290)},!0)}var w=d.join(",");t.addReady(function(t,n){e(w,t).add(n.filter(w)).each(function(){e.prop(this,"validity")})});l&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(t.data(this,"hasCustomError"))return;var n=this,r=e.prop(n,"validity")||{valid:!0},i;if(r.valid)return;i=(n.nodeName||"").toLowerCase();e.each(r,function(e,r){if(e!=="valid"&&r){m[i].call(n,t.createValidationMessage(n,e));return!1}})})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})});(function(e){"use strict";var t=window.Modernizr,n=e.webshims,r=n.bugs,i=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(i[0].querySelector)try{r.findRequired=!i[0].querySelector("select:required")}catch(e){r.findRequired=!1}},o=e("input",i).eq(0),u=function(e){n.loader.loadList(["dom-extend"]);n.ready("dom-extend",e)};r.findRequired=!1;r.validationMessage=!1;n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){clearTimeout(e.data(t.target,t.type+"DefaultPrevented"));e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30));return r.apply(this,arguments)};t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)};t._isPolyfilled=!0}};if(!t.formvalidation||r.bustedValidity){s();return}n.capturingEvents(["input"]);n.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix){i.appendTo("head");s();r.validationMessage=!o.prop("validationMessage");n.reTest(["form-extend","form-message"]);i.remove();e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(r){var i=n.defineNodeNameProperty(r,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t);n.fromCheckValidity=!0;var r=i.prop._supvalue.apply(this,arguments);n.fromSubmit||e(this).unbind("invalid.checkvalidity",t);n.fromCheckValidity=!1;return r}}})})})})}e.browser.webkit&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1);e(window).on("invalid",function(e){if(e.originalEvent&&n&&n==e.target.form){e.wrongWebkitInvalid=!0;e.stopImmediatePropagation()}})}()})(jQuery);jQuery.webshims.register("form-core",function(e,t,n,r,i,s){"use strict";var o={radio:1},u={checkbox:1,radio:1},a=e([]),f=t.bugs,l=function(t){t=e(t);var n,i,s=a;if(o[t[0].type]){i=t.prop("form");n=t[0].name;n?i?s=e(i[n]):s=e(r.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):s=t;s=s.filter('[type="radio"]')}return s},c=t.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";r&&i[r]&&(i=i[r]);if(typeof i=="object"){n=n||e.prop(t,"validity")||{valid:1};n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e]){i=i[e];return!1}})}typeof i=="object"&&(i=i.defaultMessage);return i||""},h={number:1,range:1,date:1},p=function(t){var n=!1;e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1});return n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!p(t):!!e.prop(t,"willValidate")&&!!v(t)},"invalid-element":function(t){return e.nodeName(t,"form")?p(t):!!e.prop(t,"willValidate")&&!v(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1};var d=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(f.bustedValidity||f.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,s=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;r=e.call(r,1,r.length);r.unshift(n.replace(i,s));return t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",r.documentElement))e.find.matchesSelector=function(e,t){t=t.replace(i,s);return n.call(this,e,t)}}();var m=e.prop,g={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var s=m.apply(this,arguments);if(t&&"form"in t&&g[n]&&r!==i&&e(t).hasClass(w)&&v(t)){e(t).getShadowElement().removeClass(E);n=="checked"&&r&&l(t).not(t).removeClass(E).removeAttr("aria-invalid")}return s};var y=function(t,n){var r;e.each(t,function(t,i){if(i){r=t=="customError"?e.prop(n,"validationMessage"):t;return!1}});return r},b=function(e){var t;try{t=r.activeElement.name===e}catch(n){}return t},w="user-error",E="user-error form-ui-invalid",S="user-success",x="user-success form-ui-valid",T=function(t){var n,r;if(!t.target)return;n=e(t.target).getNativeElement()[0];if(n.type=="submit"||!e.prop(n,"willValidate"))return;r=e.data(n,"webshimsswitchvalidityclass");var i=function(){if(t.type=="focusout"&&n.type=="radio"&&b(n.name))return;var r=e.prop(n,"validity"),i=e(n).getShadowElement(),s,o,a,f,c;e(n).trigger("refreshCustomValidityRules");if(r.valid){if(!i.hasClass(S)){s=x;o=E;f="changedvaliditystate";a="changedvalid";u[n.type]&&n.checked&&l(n).not(n).removeClass(o).addClass(s).removeAttr("aria-invalid");e.removeData(n,"webshimsinvalidcause")}}else{c=y(r,n);if(e.data(n,"webshimsinvalidcause")!=c){e.data(n,"webshimsinvalidcause",c);f="changedvaliditystate"}if(!i.hasClass(w)){s=E;o=x;u[n.type]&&!n.checked&&l(n).not(n).removeClass(o).addClass(s);a="changedinvalid"}}if(s){i.addClass(s).removeClass(o);setTimeout(function(){e(n).trigger(a)},0)}f&&setTimeout(function(){e(n).trigger(f)},0);e.removeData(t.target,"webshimsswitchvalidityclass")};r&&clearTimeout(r);t.type=="refreshvalidityui"?i():e.data(n,"webshimsswitchvalidityclass",setTimeout(i,9))};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",T);d.changedvaliditystate=!0;d.refreshCustomValidityRules=!0;d.changedvalid=!0;d.changedinvalid=!0;d.refreshvalidityui=!0;t.triggerInlineForm=function(t,n){e(t).trigger(n)};t.modules["form-core"].getGroupElements=l;var N=function(){t.scrollRoot=e.browser.webkit||r.compatMode=="BackCompat"?e(r.body):e(r.documentElement)};N();t.ready("DOM",N);t.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()});r.top-=i.top;r.left-=i.left;return r};t.validityAlert=function(){var i=!e.browser.msie||parseInt(e.browser.version,10)>7?"span":"label",s,o=!1,u=!1,a=!1,f,l={hideDelay:5e3,showFor:function(t,r,i,s){l._create();t=e(t);var u=e(t).getShadowElement(),c=l.getOffsetFromBody(u);l.clear();if(s)this.hide();else{this.getMessage(t,r);this.position(u,c);this.show();this.hideDelay&&(o=setTimeout(f,this.hideDelay));e(n).on("resize.validityalert",function(){clearTimeout(a);a=setTimeout(function(){l.position(u)},9)})}i||this.setFocus(u,c)},getOffsetFromBody:function(e){return t.getRelOffset(s,e)},setFocus:function(n,o){var u=e(n).getShadowFocusElement(),a=t.scrollRoot.scrollTop(),l=(o||u.offset()).top-30,c;t.getID&&i=="label"&&s.attr("for",t.getID(u));if(a>l){t.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,(a-l)*1.5),80)});c=!0}try{u[0].focus()}catch(h){}if(c){t.scrollRoot.scrollTop(a);setTimeout(function(){t.scrollRoot.scrollTop(a)},0)}setTimeout(function(){e(r).on("focusout.validityalert",f)},10)},getMessage:function(t,n){n||(n=c(t[0])||t.prop("validationMessage"));n?e("span.va-box",s).text(n):this.hide()},position:function(t,n){n=n?e.extend({},n):l.getOffsetFromBody(t);n.top+=t.outerHeight();s.css(n)},show:function(){s.css("display")==="none"&&s.css({opacity:0}).show();s.addClass("va-visible").fadeTo(400,1)},hide:function(){s.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(u);clearTimeout(o);e(r).unbind(".validityalert");e(n).unbind(".validityalert");s.stop().removeAttr("for")},_create:function(){if(s)return;s=l.errorBubble=e("<"+i+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+i+">").css({position:"absolute",display:"none"});t.ready("DOM",function(){s.appendTo("body");e.fn.bgIframe&&e.browser.msie&&parseInt(e.browser.version,10)<7&&s.bgIframe()})}};f=e.proxy(l,"hide");return l}();(function(){var t,n=[],i,s;e(r).on("invalid",function(s){if(s.wrongWebkitInvalid)return;var o=e(s.target),u=o.getShadowElement();if(!u.hasClass(w)){u.addClass(E).removeClass(x);setTimeout(function(){e(s.target).trigger("changedinvalid").trigger("changedvaliditystate")},0)}if(!t){t=e.Event("firstinvalid");t.isInvalidUIPrevented=s.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(r).triggerHandler(a,{element:s.target,form:s.target.form,isInvalidUIPrevented:s.isDefaultPrevented});o.trigger(t)}t&&t.isDefaultPrevented()&&s.preventDefault();n.push(s.target);s.extraData="fix";clearTimeout(i);i=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1;n=[];e(s.target).trigger(r,r)},9);o=null;u=null})})();e.fn.getErrorMessage=function(){var t="",n=this[0];n&&(t=c(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage"));return t};s.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){if(!t.isInvalidUIPrevented()){t.preventDefault();e.webshims.validityAlert.showFor(t.target,e(t.target).prop("customValidationMessage"))}})})});jQuery.webshims.register("form-message",function(e,t,n,r,i,s){"use strict";var o=t.validityMessages,u=s.overrideMessages||s.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{});["select","radio"].forEach(function(e){o.en.valueMissing[e]="Please select an option."});["date","time","datetime-local"].forEach(function(e){o.en.rangeUnderflow[e]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(e){o.en.rangeOverflow[e]="Value must be at or before {%max}."});o["en-US"]=o["en-US"]||o.en;o[""]=o[""]||o["en-US"];o.de=e.extend(!0,{typeMismatch:{email:"{%value} ist keine zulässige E-Mail-Adresse",url:"{%value} ist keine zulässige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das Kästchen"}},o.de||{});["select","radio"].forEach(function(e){o.de.valueMissing[e]="Bitte wählen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(e){o.de.rangeUnderflow[e]="{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."});["date","time","datetime-local"].forEach(function(e){o.de.rangeOverflow[e]="{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var a=o[""];t.createValidationMessage=function(n,r){var i=a[r];i&&typeof i!="string"&&(i=i[e.prop(n,"type")]||i[(n.nodeName||"").toLowerCase()]||i.defaultMessage);i&&["value","min","max","title","maxlength","label"].forEach(function(s){if(i.indexOf("{%"+s)===-1)return;var o=(s=="label"?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.attr(n,s))||"";r=="patternMismatch"&&s=="title"&&!o&&t.error("no title for patternMismatch provided. Always add a title attribute.");i=i.replace("{%"+s+"}",o);"value"==s&&(i=i.replace("{%valueLen}",o.length))});return i||""};(t.bugs.validationMessage||!Modernizr.formvalidation||t.bugs.bustedValidity)&&u.push("validationMessage");t.activeLang({langObj:o,module:"form-core",callback:function(e){a=e}});u.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var s=e.prop(n,"validity")||{valid:1};if(s.valid)return r;r=t.getContentValidationMessage(n,s);if(r)return r;if(s.customError&&n.nodeName){r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage");if(r)return r}e.each(s,function(e,i){if(e=="valid"||!i)return;r=t.createValidationMessage(n,e);if(r)return!1});return r||""},writeable:!1}})})})});jQuery.webshims.register("form-datalist",function(e,t,n,r,i){"use strict";var s=r;t.propTypes.element=function(n){t.createPropDefault(n,"attr");if(n.prop)return;n.prop={get:function(){var t=n.attr.get.call(this);if(t){t=r.getElementById(t);t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)}return t||null},writeable:!1}};(function(){var s=e.webshims.cfg.forms,o=Modernizr.input.list;if(o&&!s.customDatalist)return;var u=function(){o||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var n=this,r=e("select",n),i;if(r[0])i=r[0].options;else{i=e("option",n).get();i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")}return i}}});var n={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,r=e.data(n,"datalistWidget");if(r){r._autocomplete=t;t=="off"&&r.hideList()}else"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};if(!o)n.list={attr:{get:function(){var e=t.contentAttr(this,"list");return e==null?i:e},set:function(n){var r=this;t.contentAttr(r,"list",n);t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};else{(e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,r=e("select",n);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}});n.list={attr:{get:function(){var n=t.contentAttr(this,"list");n!=null?this.removeAttribute("list"):n=e.data(this,"datalistListAttr");return n==null?i:n},set:function(n){var r=this;e.data(r,"datalistListAttr",n);t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}t.defineNodeNameProperties("input",n);if(e.event.customEvent){e.event.customEvent.updateDatalist=!0;e.event.customEvent.updateInput=!0;e.event.customEvent.datalistselect=!0}t.addReady(function(e,t){t.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})},a=0,f={submit:1,button:1,reset:1,hidden:1,range:1,date:1},l=e.browser.msie&&parseInt(e.browser.version,10)<7,c={},h=function(e){if(!e)return[];if(c[e])return c[e];var t;try{t=JSON.parse(localStorage.getItem("storedDatalistOptions"+e))}catch(n){}c[e]=t||[];return t||[]},p=function(e,t){if(!e)return;t=t||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(t))}catch(n){}},d=function(t){return t.textContent||t.innerText||e.text([t])||""},v={_create:function(t){if(f[e.prop(t.input,"type")])return;var r=t.datalist,i=e.data(t.input,"datalistWidget");if(r&&i&&i.datalist!==r){i.datalist=r;i.id=t.id;i.shadowList.prop("className","datalist-polyfill "+(i.datalist.className||"")+" "+i.datalist.id+"-shadowdom");s.positionDatalist?i.shadowList.insertAfter(t.input):i.shadowList.appendTo("body");e(i.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(i,"_resetListCached"));i._resetListCached();return}if(!r){i&&i.destroy();return}if(i&&i.datalist===r)return;a++;var o=this;this.hideList=e.proxy(o,"hideList");this.timedHide=function(){clearTimeout(o.hideTimer);o.hideTimer=setTimeout(o.hideList,9)};this.datalist=r;this.id=t.id;this.hasViewableData=!0;this._autocomplete=e.attr(t.input,"autocomplete");e.data(t.input,"datalistWidget",this);this.shadowList=e('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+"-shadowdom"+'" />');s.positionDatalist||e(t.input).hasClass("position-datalist")?this.shadowList.insertAfter(t.input):this.shadowList.appendTo("body");this.index=-1;this.input=t.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(n){var r=e("li:not(.hidden-item)",o.shadowList),i=n.type=="mousedown"||n.type=="click";o.markItem(r.index(n.currentTarget),i,r);if(n.type=="click"){o.hideList();s.customDatalist&&e(t.input).trigger("datalistselect")}return n.type!="mousedown"}).on("focusout",this.timedHide);t.input.setAttribute("autocomplete","off");e(t.input).attr({"aria-haspopup":"true"}).on({"input.datalistWidget":function(){if(!o.triggeredByDatalist){o.changedValue=!1;o.showHideOptions()}},"keydown.datalistWidget":function(n){var r=n.keyCode,i,u;if(r==40&&!o.showList()){o.markItem(o.index+1,!0);return!1}if(!o.isListVisible)return;if(r==38){o.markItem(o.index-1,!0);return!1}if(!n.shiftKey&&(r==33||r==36)){o.markItem(0,!0);return!1}if(!n.shiftKey&&(r==34||r==35)){u=e("li:not(.hidden-item)",o.shadowList);o.markItem(u.length-1,!0,u);return!1}if(r==13||r==27){if(r==13){i=e("li.active-item:not(.hidden-item)",o.shadowList);o.changeValue(e("li.active-item:not(.hidden-item)",o.shadowList))}o.hideList();s.customDatalist&&i&&i[0]&&e(t.input).trigger("datalistselect");return!1}},"focus.datalistWidget":function(){e(this).hasClass("list-focus")&&o.showList()},"mousedown.datalistWidget":function(){e(this).is(":focus")&&o.showList()},"blur.datalistWidget":this.timedHide});e(this.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(this,"_resetListCached"));this._resetListCached();t.input.form&&(t.input.name||t.input.id)&&e(t.input.form).on("submit.datalistWidget"+t.input.id,function(){if(!e(t.input).hasClass("no-datalist-cache")&&o._autocomplete!="off"){var n=e.prop(t.input,"value"),r=(t.input.name||t.input.id)+e.prop(t.input,"type");o.storedOptions||(o.storedOptions=h(r));if(n&&o.storedOptions.indexOf(n)==-1){o.storedOptions.push(n);p(r,o.storedOptions)}}});e(n).on("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){o.destroy()})},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();e(r).off(".datalist"+this.id);e(n).off(".datalist"+this.id);this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");t===i?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t)},_resetListCached:function(e){var i=this,s;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(n.QUnit||(s=e&&r.activeElement==i.input)?i.updateListOptions(s):t.ready("WINDOWLOAD",function(){i.updateTimer=setTimeout(function(){i.updateListOptions();i=null;a=1},200+100*a)}))},maskHTML:function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},updateListOptions:function(t){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:e.css(this.input,"fontSize"),fontFamily:e.css(this.input,"fontFamily")});this.searchStart=s.customDatalist&&e(this.input).hasClass("search-start");var n=[],r=[],i=[],o,u,a,f,c,p;for(a=e.prop(this.datalist,"options"),f=0,c=a.length;f<c;f++){o=a[f];if(o.disabled)return;u={value:e(o).val()||"",text:e.trim(e.attr(o,"label")||d(o)),className:o.className||"",style:e.attr(o,"style")||""};u.text?u.text!=u.value&&(u.className+=" different-label-value"):u.text=u.value;r[f]=u.value;i[f]=u}this.storedOptions||(this.storedOptions=e(this.input).hasClass("no-datalist-cache")||this._autocomplete=="off"?[]:h((this.input.name||this.input.id)+e.prop(this.input,"type")));this.storedOptions.forEach(function(e,t){r.indexOf(e)==-1&&i.push({value:e,text:e,className:"stored-suggest",style:""})});for(f=0,c=i.length;f<c;f++){p=i[f];n[f]='<li class="'+p.className+'" style="'+p.style+'" tabindex="-1" role="listitem"><span class="option-label">'+this.maskHTML(p.text)+'</span> <span class="option-value">'+this.maskHTML(p.value)+"</span></li>"}this.arrayOptions=i;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+n.join("\n")+"</ul></div></div>");e.fn.bgIframe&&l&&this.shadowList.bgIframe();(t||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(t){var n=e.prop(this.input,"value").toLowerCase();if(n===this.lastUpdatedValue||this.lastUnfoundValue&&n.indexOf(this.lastUnfoundValue)===0)return;this.lastUpdatedValue=n;var r=!1,i=this.searchStart,s=e("li",this.shadowList);if(n)this.arrayOptions.forEach(function(t,o){var u;"lowerText"in t||(t.text!=t.value?t.lowerText=t.value.toLowerCase()+t.text.toLowerCase():t.lowerText=t.text.toLowerCase());u=t.lowerText.indexOf(n);u=i?!u:u!==-1;if(u){e(s[o]).removeClass("hidden-item");r=!0}else e(s[o]).addClass("hidden-item")});else if(s.length){s.removeClass("hidden-item");r=!0}this.hasViewableData=r;!t&&r&&this.showList();if(!r){this.lastUnfoundValue=n;this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var n=s.positionDatalist?e(this.input).position():t.getRelOffset(this.shadowList,this.input);n.top+=e(this.input).outerHeight();n.width=e(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(n);return n},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var t=this;t.setPos();t.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");e(n).unbind(".datalist"+t.id);e(r).off(".datalist"+t.id).on("mousedown.datalist"+t.id+" focusin.datalist"+t.id,function(n){if(n.target===t.input||t.shadowList[0]===n.target||e.contains(t.shadowList[0],n.target)){clearTimeout(t.hideTimer);setTimeout(function(){clearTimeout(t.hideTimer)},9)}else t.timedHide()}).on("updateshadowdom.datalist"+t.id,function(){t.setPos()});return!0},hideList:function(){if(!this.isListVisible)return!1;var i=this,s=function(t){i.changedValue&&e(i.input).trigger("change");i.changedValue=!1};i.shadowList.removeClass("datalist-visible list-item-active");i.index=-1;i.isListVisible=!1;if(i.changedValue){i.triggeredByDatalist=!0;t.triggerInlineForm&&t.triggerInlineForm(i.input,"input");e(i.input).is(":focus")?e(i.input).one("blur",s):s();i.triggeredByDatalist=!1}e(r).unbind(".datalist"+i.id);e(n).off(".datalist"+i.id).one("resize.datalist"+i.id,function(){i.shadowList.css({top:0,left:0})});return!0},scrollIntoView:function(t){var n=e("ul",this.shadowList),r=e("div.datalist-box",this.shadowList),i=t.position(),s;i.top-=(parseInt(n.css("paddingTop"),10)||0)+(parseInt(n.css("marginTop"),10)||0)+(parseInt(n.css("borderTopWidth"),10)||0);if(i.top<0){r.scrollTop(r.scrollTop()+i.top-2);return}i.top+=t.outerHeight();s=r.height();i.top>s&&r.scrollTop(r.scrollTop()+(i.top-s)+2)},changeValue:function(t){if(!t[0])return;var n=e("span.option-value",t).text(),r=e.prop(this.input,"value");if(n!=r){e(this.input).prop("value",n).triggerHandler("updateInput");this.changedValue=!0}},markItem:function(t,n,r){var i,s;r=r||e("li:not(.hidden-item)",this.shadowList);if(!r.length)return;t<0?t=r.length-1:t>=r.length&&(t=0);r.removeClass("active-item");this.shadowList.addClass("list-item-active");i=r.filter(":eq("+t+")").addClass("active-item");if(n){this.changeValue(i);this.scrollIntoView(i)}this.index=t}};u()})()});