(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clock.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)));
},"useData":true});
templates['custom-timer.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "                    <div class=\"form-group form-inline form-time\" data-index=\""
    + alias3(((helper = (helper = helpers.idx || (depth0 != null ? depth0.idx : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"idx","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"input-group col-md-3\">\n                            <div class=\"input-group-addon\">hour</div>\n                            <input type=\"number\" name=\"hour\" value=\""
    + alias3(((helper = (helper = helpers.hour || (depth0 != null ? depth0.hour : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hour","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" required data-parsley-errors-messages-disabled />\n                        </div>\n                        <div class=\"input-group col-md-3\">\n                            <div class=\"input-group-addon\">minute</div>\n                            <input type=\"number\" name=\"min\" value=\""
    + alias3(((helper = (helper = helpers.min || (depth0 != null ? depth0.min : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"min","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" required data-parsley-errors-messages-disabled />\n                        </div>\n                        <div class=\"input-group col-md-3\">\n                            <select class=\"form-control\" name=\"mer\" value=\""
    + alias3(((helper = (helper = helpers.meridien || (depth0 != null ? depth0.meridien : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"meridien","hash":{},"data":data}) : helper)))
    + "\" required data-parsley-errors-messages-disabled >\n                                <option value=\"AM\">AM</option>\n                                <option value=\"PM\">PM</option>\n                            </select>\n                        </div>\n                    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"clearfix\">\n    <form class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" name=\"name\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" required data-parsley-errors-messages-disabled />\n        </div>\n        <div class=\"form-group\">\n            <label>Location</label>\n            <input type=\"text\" name=\"location\" value=\""
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-md-4\">\n                <label>Slot</label>\n                <input type=\"text\" name=\"slot\" value=\""
    + alias3(((helper = (helper = helpers.slot || (depth0 != null ? depth0.slot : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"slot","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n            </div>\n\n            <div class=\"form-group col-md-8\">\n                <div class=\"row\">\n                    <label>Position</label>\n                    <div class=\"form-group form-inline\">\n                        <div class=\"input-group col-md-4\">\n                            <div class=\"input-group-addon\">x</div>\n                            <input type=\"number\" name=\"xpos\" value=\""
    + alias3(((helper = (helper = helpers.xPos || (depth0 != null ? depth0.xPos : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"xPos","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n                        </div>\n                        <div class=\"input-group col-md-4\">\n                            <div class=\"input-group-addon\">y</div>\n                            <input type=\"number\" name=\"ypos\" value=\""
    + alias3(((helper = (helper = helpers.yPos || (depth0 != null ? depth0.yPos : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"yPos","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"times-label\">\n                Time\n            </label>\n            <div class=\"times-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.times : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Duration</label>\n            <div class=\"form-group form-inline\">\n                <div class=\"input-group col-md-3\">\n                    <div class=\"input-group-addon\">hours</div>\n                    <input type=\"number\" name=\"duration-hours\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.duration : depth0)) != null ? stack1.hours : stack1), depth0))
    + "\" class=\"form-control\" required data-parsley-errors-messages-disabled />\n                </div>\n                <div class=\"input-group col-md-3\">\n                    <div class=\"input-group-addon\">minutes</div>\n                    <input type=\"number\" name=\"duration-min\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.duration : depth0)) != null ? stack1.minutes : stack1), depth0))
    + "\" class=\"form-control\" required data-parsley-errors-messages-disabled  />\n                </div>\n            </div>\n        </div>\n        <div class=\"form-actions align-right\">\n            <a class=\"btn btn-primary btn-save\">Save</a>\n            <a class=\"btn btn-default btn-close\" data-dismiss=\"modal\">Cancel</a>\n        </div>\n    </form>\n</div>";
},"useData":true});
templates['empty.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['error.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>Something went wrong</h3>\n<p>"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n<p>Try refreshing the page. If the problem persists, please report it as an issue at the code repo on Github with <b>detailed instructions</b> on how to reproduce. Thank you!</p>";
},"useData":true});
templates['modal.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <h4 class=\"modal-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"modal-body\"></div>\n    </div>\n</div>";
},"useData":true});
templates['custom-timer/time-slot.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group form-inline form-time\">\n    <div class=\"input-group col-md-3\">\n        <div class=\"input-group-addon\">hour</div>\n        <input type=\"number\" name=\"hour\" value=\"\" class=\"form-control\" />\n    </div>\n    <div class=\"input-group col-md-3\">\n        <div class=\"input-group-addon\">minute</div>\n        <input type=\"number\" name=\"min\" value=\"\" class=\"form-control\" />\n    </div>\n    <div class=\"input-group col-md-3\">\n        <select name=\"meridien\" class=\"form-control\" value=\"\">\n            <option>AM</option>\n            <option>PM</option>\n        </select>\n    </div>\n    <a class=\"rem-time btn btn-sm btn-danger\"><i class=\"fa fa-minus\"></i></a>\n</div>";
},"useData":true});
templates['home/home.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <div class=\"jumbotron-region\"></div>\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"nodes-filter\">\n                    <div class=\"filter-label\">Filter by:</div>\n                    <div class=\"btn-group filter-menu\">\n                        <div class=\"btn btn-primary active all\" data-target=\"all\">All</div>\n                        <div class=\"btn btn-primary botany\" data-target=\"botany\"><span class=\"icon botany\"></span> Botany</div>\n                        <div class=\"btn btn-primary mining\" data-target=\"mining\"><span class=\"icon mining\"></span>  Mining</div>\n                        <div class=\"btn btn-primary custom\" data-target=\"custom\"><span class=\"icon custom\"></span> Custom</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 align-right\">\n                <div class=\"btn-group\">\n                    <a class=\"btn btn-default new-timer-btn btn-lg\"><i class=\"fa fa-plus\"></i> New Timer</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"search-menu col-md-6\">\n                <div class=\"filter-list-form\">\n                    <div class=\"form-group\">\n                        <label>Filter List:</label>\n                        <input type=\"text\" class=\"form-control node-search-input\" />\n                        <small>Search by: Name or Location</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <h3>Active Nodes:</h3>\n        <div class=\"active-nodes-region\">\n            <div class=\"nodes-list active-nodes\"></div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <h3>Up Next Hour:</h3>\n        <div class=\"next-hour-nodes-region\"></div>\n    </div>\n    <div class=\"col-md-12\">\n        <h3>In 2 Hours:</h3>\n        <div class=\"two-hour-nodes-region\"></div>\n    </div>\n    <div class=\"col-md-12\">\n        <h3>After That:</h3>\n        <div class=\"other-nodes-region\"></div>\n    </div>\n</div>\n<div class=\"new-timer-modal-region\" id=\"new-timer-modal\"></div>";
},"useData":true});
templates['home/jumbotron.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"collapse-toggle\">\n    <a class=\"toggle-link btn btn-default\">\n        <i class=\"fa\"></i>\n    </a>\n</div>\n<div class=\"jumbo-content\">\n    <div class=\"clock-region\"></div>\n    <p>Eorzean Time</p>    \n</div>\n";
},"useData":true});
templates['home/node.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " [slot "
    + container.escapeExpression(((helper = (helper = helpers.slot || (depth0 != null ? depth0.slot : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"slot","hash":{},"data":data}) : helper)))
    + "]";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <span class=\"time-remaining\">[\n            <i class=\"fa fa-globe\"></i>\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.earth_time_remaining : depth0)) != null ? stack1.minutes : stack1), depth0))
    + "m "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.earth_time_remaining : depth0)) != null ? stack1.seconds : stack1), depth0))
    + "s\n        ]</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "        <div class=\"location\">"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.pos || (depth0 != null ? depth0.pos : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pos","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"node-heading\">\n    <span class=\"icon "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"></span>\n    <span class=\"time\">"
    + alias3(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.slot : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"node-body\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['main-nav/main-nav.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"navbar-brand\">Eorzea Timers</a>\n<div class=\"clock-region pull-right\"></div>\n<div class=\"menu-region pull-right\"></div>\n";
},"useData":true});
templates['main-nav/menu.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "            <li class=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                <a href=\"#"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.watchCount : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </a>\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <span class=\"badge\">"
    + container.escapeExpression(((helper = (helper = helpers.watchCount || (depth0 != null ? depth0.watchCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"watchCount","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <ul class=\"nav navbar-nav\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menuItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n";
},"useData":true});
templates['watch-list/base.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <div class=\"col-md-12\">\n        <h3>Watch List <a class=\"watch-settings-link btn btn-default btn-sm\"><i class=\"fa fa-cog\"></i> preferences</a></h3>\n    </div>\n    <div class=\"watched-nodes-region col-md-12\"></div>    \n</div>\n<div class=\"modal-region\" id=\"watch-list-modal\"></div>\n";
},"useData":true});
})();