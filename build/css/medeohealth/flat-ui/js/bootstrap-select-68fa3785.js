!function(e){var t=function(i,n,s){s&&(s.stopPropagation(),s.preventDefault()),this.$element=e(i),this.$newElement=null,this.button=null,this.options=e.extend({},e.fn.selectpicker.defaults,this.$element.data(),"object"==typeof n&&n),null==this.options.title&&(this.options.title=this.$element.attr("title")),this.val=t.prototype.val,this.render=t.prototype.render,this.init()};t.prototype={constructor:t,init:function(){function t(){var t=h-e(window).scrollTop(),i=e(window).innerHeight(),n=f+parseInt(o.css("margin-top"))+parseInt(o.css("margin-bottom"))+2,s=i-t-c-n;p=s,l.hasClass("dropup")&&(p=t-n),o.css({"max-height":p+"px","overflow-y":"auto","min-height":3*r+"px"})}var i=this;this.$element.hide(),this.multiple=this.$element.prop("multiple");var n=void 0!==this.$element.attr("class")?this.$element.attr("class").split(/\s+/):"",s=this.$element.attr("id");this.$element.after(this.createView()),this.$newElement=this.$element.next(".select");var l=this.$newElement,o=this.$newElement.find(".dropdown-menu"),d=this.$newElement.find(".dropdown-arrow"),r=(o.find("li > a"),l.addClass("open").find(".dropdown-menu li > a").outerHeight());l.removeClass("open");var a=o.find("li .divider").outerHeight(!0),h=this.$newElement.offset().top,p=0,c=this.$newElement.outerHeight();this.button=this.$newElement.find("> button"),void 0!==s&&(this.button.attr("id",s),e('label[for="'+s+'"]').click(function(){l.find("button#"+s).focus()}));for(var u=0;u<n.length;u++)"selectpicker"!=n[u]&&this.$newElement.addClass(n[u]);this.multiple&&this.$newElement.addClass("select-multiple"),this.button.addClass(this.options.style),o.addClass(this.options.menuStyle),d.addClass(function(){return i.options.menuStyle?i.options.menuStyle.replace("dropdown-","dropdown-arrow-"):void 0}),this.checkDisabled(),this.checkTabIndex(),this.clickListener();var f=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"))+parseInt(o.css("border-top-width"))+parseInt(o.css("border-bottom-width"));if("auto"==this.options.size)t(),e(window).resize(t),e(window).scroll(t),window.MutationObserver?new MutationObserver(t).observe(this.$element.get(0),{childList:!0}):this.$element.bind("DOMNodeInserted",t);else if(this.options.size&&"auto"!=this.options.size&&o.find("li").length>this.options.size){var m=o.find("li > *").filter(":not(.divider)").slice(0,this.options.size).last().parent().index(),v=o.find("li").slice(0,m+1).find(".divider").length;p=r*this.options.size+v*a+f,o.css({"max-height":p+"px","overflow-y":"scroll"})}window.MutationObserver?new MutationObserver(e.proxy(this.reloadLi,this)).observe(this.$element.get(0),{childList:!0}):this.$element.bind("DOMNodeInserted",e.proxy(this.reloadLi,this)),this.render()},createDropdown:function(){var t="<div class='btn-group select'><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><span class='dropdown-arrow'></span><ul class='dropdown-menu' role='menu'></ul></div>";return e(t)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul").append(t),e},reloadLi:function(){this.destroyLi(),$li=this.createLi(),this.$newElement.find("ul").append($li),this.render()},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var t=this,i=[],n=[],s="";if(this.$element.find("option").each(function(){i.push(e(this).text())}),this.$element.find("option").each(function(){var i=void 0!==e(this).attr("class")?e(this).attr("class"):"",s=e(this).text(),l=void 0!==e(this).data("subtext")?'<small class="muted">'+e(this).data("subtext")+"</small>":"";if(s+=l,e(this).parent().is("optgroup")&&1!=e(this).data("divider"))if(0==e(this).index()){var o=e(this).parent().attr("label"),d=void 0!==e(this).parent().data("subtext")?'<small class="muted">'+e(this).parent().data("subtext")+"</small>":"";o+=d,n.push(0!=e(this)[0].index?'<div class="divider"></div><dt>'+o+"</dt>"+t.createA(s,"opt "+i):"<dt>"+o+"</dt>"+t.createA(s,"opt "+i))}else n.push(t.createA(s,"opt "+i));else n.push(1==e(this).data("divider")?'<div class="divider"></div>':1==e(this).data("hidden")?"":t.createA(s,i))}),i.length>0)for(var l=0;l<i.length;l++){{this.$element.find("option").eq(l)}s+="<li rel="+l+">"+n[l]+"</li>"}return 0!=this.$element.find("option:selected").length||t.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),e(s)},createA:function(e,t){return'<a tabindex="-1" href="#" class="'+t+'"><span class="pull-left">'+e+"</span></a>"},render:function(){var t=this;if("auto"==this.options.width){var i=this.$newElement.find(".dropdown-menu").css("width");this.$newElement.css("width",i)}else this.options.width&&"auto"!=this.options.width&&this.$newElement.css("width",this.options.width);this.$element.find("option").each(function(i){t.setDisabled(i,e(this).is(":disabled")||e(this).parent().is(":disabled")),t.setSelected(i,e(this).is(":selected"))});var n=this.$element.find("option:selected").map(function(){return void 0!=e(this).attr("title")?e(this).attr("title"):e(this).text()}).toArray(),s=n.join(", ");if(t.multiple&&t.options.selectedTextFormat.indexOf("count")>-1){var l=t.options.selectedTextFormat.split(">");(l.length>1&&n.length>l[1]||1==l.length&&n.length>=2)&&(s=n.length+" of "+this.$element.find("option").length+" selected")}s||(s=void 0!=t.options.title?t.options.title:t.options.noneSelectedText),this.$element.next(".select").find(".filter-option").html(s)},setSelected:function(e,t){t?this.$newElement.find("li").eq(e).addClass("selected"):this.$newElement.find("li").eq(e).removeClass("selected")},setDisabled:function(e,t){t?this.$newElement.find("li").eq(e).addClass("disabled"):this.$newElement.find("li").eq(e).removeClass("disabled")},checkDisabled:function(){this.$element.is(":disabled")&&(this.button.addClass("disabled"),this.button.click(function(e){e.preventDefault()}))},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var e=this.$element.attr("tabindex");this.button.attr("tabindex",e)}},clickListener:function(){var t=this;e("body").on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()}),this.$newElement.on("click","li a",function(i){var n=e(this).parent().index(),s=e(this).parent(),l=s.parents(".select");if(t.multiple&&i.stopPropagation(),i.preventDefault(),l.prev("select").not(":disabled")&&!e(this).parent().hasClass("disabled")){if(t.multiple){var o=l.prev("select").find("option").eq(n).prop("selected");o?l.prev("select").find("option").eq(n).removeAttr("selected"):l.prev("select").find("option").eq(n).prop("selected",!0).attr("selected","selected")}else l.prev("select").find("option").removeAttr("selected"),l.prev("select").find("option").eq(n).prop("selected",!0).attr("selected","selected");l.find(".filter-option").html(s.text()),l.find("button").focus(),l.prev("select").trigger("change")}}),this.$newElement.on("click","li.disabled a, li dt, li .divider",function(t){t.preventDefault(),t.stopPropagation(),$select=e(this).parent().parents(".select"),$select.find("button").focus()}),this.$element.on("change",function(){t.render()})},val:function(e){return void 0!=e?(this.$element.val(e),this.$element.trigger("change"),this.$element):this.$element.val()}},e.fn.selectpicker=function(i,n){var s,l=arguments,o=this.each(function(){var o=e(this),d=o.data("selectpicker"),r="object"==typeof i&&i;if(d)for(var a in i)d[a]=i[a];else o.data("selectpicker",d=new t(this,r,n));"string"==typeof i&&(property=i,d[property]instanceof Function?([].shift.apply(l),s=d[property].apply(d,l)):s=d[property])});return void 0!=s?s:o},e.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",width:null,menuStyle:null,toggleSize:null}}(window.jQuery);