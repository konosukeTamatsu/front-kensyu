(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=new(function(){function t(){this._buildAttributes=e(this._buildAttributes,this),this.logEvent=e(this.logEvent,this)}var n,o;return o="web_action_log",n=/^[a-zA-Z0-9:_]+$/,t.prototype.logEvent=function(t,e,n){var o,r;if(null==n&&(n={}),this._validate(t))return o=this._buildAttributes(t,e,n),"development"!==(r=WantedlyApp.env)&&"sandbox"!==r||console.debug("logEvent",o),this._sendToTd(o)},t.prototype._validate=function(t){return!!t.match(n)||(console.error("logEvent was faild.","You can set alphabet, number and colon as target. e.g. 'ProjectFilter:SearchBox' or 'project_filter:search_box'","But, you don't give so. '"+t+"'"),!1)},t.prototype._buildAttributes=function(t,e,n){return{user_id:WantedlyApp.current_user_id,company_id:WantedlyApp.current_company_id,role_cd:WantedlyApp.role_cd,event_target:t,event_action:e,event_params:n,controller:WantedlyApp.controller,action:WantedlyApp.action,id:WantedlyApp.params_id,host:location.host,path:location.pathname,query_params:WantedlyApp.query_params,country:WantedlyApp.current_country,locale:I18n.locale,source_cd:WantedlyApp.source_cd,session:WantedlyApp.session_id,tracking_code:WantedlyApp.Utils.cookies.get("tracking_code")}},t.prototype._sendToTd=function(t){if("undefined"!=typeof td&&null!==td)return td.ready(function(){var e;return e=_.extend({td:td.getTrackValues()},t),td.addRecord(o,e)})},t}()),window.logEvent=t.logEvent}).call(this);