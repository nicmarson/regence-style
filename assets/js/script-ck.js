$(function(){$('[data-toggle="dropdown"]').append(' <b class="caret"></b>');$('[data-toggle="collapse"]').append(' <b class="caret"></b>');$("nav#nav div.container").prepend('<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a>');$("div.image-responsive").each(function(){var e=$("div.image-responsive"),t=e.css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig,"");$(this).hasClass("focus-center")&&e.anystretch(t);$(this).hasClass("focus-left")&&e.anystretch(t,{positionX:"left"});$(this).hasClass("focus-right")&&e.anystretch(t,{positionX:"right"})});$("img.image-responsive").each(function(){var e=$("img.image-responsive"),t=e.hide().attr("src");$(this).hasClass("focus-center")&&e.parent().anystretch(t);$(this).hasClass("focus-left")&&e.parent().anystretch(t,{positionX:"left"});$(this).hasClass("focus-right")&&e.parent().anystretch(t,{positionX:"right"})});var e=$(window);$("section [href^=#]").click(function(e){e.preventDefault()});setTimeout(function(){$(".bs-docs-sidenav").affix({offset:{top:function(){return e.width()<=980?290:210},bottom:270}})},100);window.prettyPrint&&prettyPrint();$(".add-on :checkbox").on("click",function(){var e=$(this),t=e.attr("checked")?"addClass":"removeClass";$(this).parents(".add-on")[t]("active")});$("#gridSystem").length&&$("#gridSystem").tooltip({selector:'.show-grid > [class*="span"]',title:function(){return $(this).width()+"px"}});$(".tooltip-demo").tooltip({selector:"a[data-toggle=tooltip]"});$(".tooltip-test").tooltip();$(".popover-test").popover();$("a[data-toggle=popover]").popover().click(function(e){e.preventDefault()});$("#fat-btn").click(function(){var e=$(this);e.button("loading");setTimeout(function(){e.button("reset")},3e3)});$("#myCarousel").carousel();var t=$("#components.download input"),n=$("#plugins.download input"),r=$("#variables.download input");$("#components.download .toggle-all").on("click",function(e){e.preventDefault();t.attr("checked",!t.is(":checked"))});$("#plugins.download .toggle-all").on("click",function(e){e.preventDefault();n.attr("checked",!n.is(":checked"))});$("#variables.download .toggle-all").on("click",function(e){e.preventDefault();r.val("")});$(".download-btn .btn").on("click",function(){var e=$("#components.download input:checked").map(function(){return this.value}).toArray(),t=$("#plugins.download input:checked").map(function(){return this.value}).toArray(),n={},r=["glyphicons-halflings.png","glyphicons-halflings-white.png"];$("#variables.download input").each(function(){$(this).val()&&(n[$(this).prev().text()]=$(this).val())});$.ajax({type:"POST",url:/\?dev/.test(window.location)?"http://localhost:3000":"http://bootstrap.herokuapp.com",dataType:"jsonpi",params:{js:t,css:e,vars:n,img:r}})})});$.ajaxTransport("jsonpi",function(e,t,n){var r=e.url;return{send:function(t,n){var i="jQuery_iframe_"+jQuery.now(),s,o;s=$("<iframe>").attr("name",i).appendTo("head");o=$("<form>").attr("method",e.type).attr("action",r).attr("target",i);$.each(e.params,function(e,t){$("<input>").attr("type","hidden").attr("name",e).attr("value",typeof t=="string"?t:JSON.stringify(t)).appendTo(o)});o.appendTo("body").submit()}}});