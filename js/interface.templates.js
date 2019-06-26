this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.create"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option data-theme-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-create-instance value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.instance"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\"collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n          <h4 class=\"panel-title\">\n              "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\n              <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          </h4>\n        </div>\n        <div id=\"collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n          <div class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.variables : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </div>\n        </div>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "            <div class=\"form-group\">\n              <div class=\"col-sm-4 control-label\">\n                <label>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</label>\n              </div>\n              <div class=\"col-sm-8\">\n"
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"color",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "              </div>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  <div class=\"input-group\" colorpicker-component>\n                    <div class=\"input-group-addon\"><i style=\"background-color:"
    + alias4(((helper = (helper = helpers.setValue || (depth0 != null ? depth0.setValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"setValue","hash":{},"data":data}) : helper)))
    + "\"></i></div>\n                    <input class=\"form-control\" type=\"text\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.setValue || (depth0 != null ? depth0.setValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"setValue","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.helper : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <p class=\"text-helper\">"
    + container.escapeExpression(((helper = (helper = helpers.helper || (depth0 != null ? depth0.helper : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"helper","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"font",{"name":"if_eq","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <label for=\"drop-down-"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" class=\"select-proxy-display\">\n                      <select id=\"drop-down-"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" class=\"hidden-select form-control\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[2] != null ? depths[2].customFonts : depths[2]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depths[2] != null ? depths[2].webFonts : depths[2]),{"name":"each","hash":{},"fn":container.program(12, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                        <optgroup label=\"---\"></optgroup>\n                        <option value=\"\" "
    + ((stack1 = (helpers.customFontValue || (depth0 && depth0.customFontValue) || alias2).call(alias1,(depths[2] != null ? depths[2].fonts : depths[2]),blockParams[2][0],{"name":"customFontValue","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">Custom...</option>\n                      </select>\n                      <span class=\"icon fa fa-chevron-down\"></span>\n                      <span class=\"select-value-proxy\">-- Select a font</span>\n                    </label>\n                    <input class=\"form-control hidden\" type=\"text\" placeholder=\"Helvetica, sans-serif\" value=\""
    + alias4(((helper = (helper = helpers.setValue || (depth0 != null ? depth0.setValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"setValue","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-custom-font=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[2] != null ? depths[2].customFonts : depths[2]),{"name":"each","hash":{},"fn":container.program(9, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                          <optgroup label=\"---\"></optgroup>\n";
},"9":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <option value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\" "
    + ((stack1 = (helpers.isValueSelected || (depth0 && depth0.isValueSelected) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],blockParams[4][0],{"name":"isValueSelected","hash":{},"fn":container.program(10, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</option>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "selected=\"selected\"";
},"12":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                          <option value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\" "
    + ((stack1 = (helpers.isValueSelected || (depth0 && depth0.isValueSelected) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],blockParams[3][0],{"name":"isValueSelected","hash":{},"fn":container.program(10, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</option>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <input class=\"form-control\" type=\"text\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.setValue || (depth0 != null ? depth0.setValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"setValue","hash":{},"data":data}) : helper)))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hint : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                      <p class=\"text-helper\">"
    + container.escapeExpression(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"hint","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<section data-instance-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-widget-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.widgetId : stack1), depth0))
    + "\" data-package-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.theme : depth0)) != null ? stack1["package"] : stack1), depth0))
    + "\">\n  <p>You can tweak the look of your app by changing the settings in the groups below.</p>\n  <form class=\"form-horizontal\">\n    <div class=\"panel-group\" id=\"accordion\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.theme : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.configuration : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </div>\n  </form>\n</section>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});