webpackJsonp([14],{1033:function(t,e,a){var n=a(976);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(410)("dcdec83c",n,!0)},1121:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row holder"},[n("div",{staticClass:"col-lg-4 col-md-6 mx-auto custom-holder"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:a(471)},on:{click:function(e){return t.redirect("/")}}})]),t._v(" "),n("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[t._v("\n      Request to Reset\n    ")]),t._v(" "),n("div",{staticClass:"input-holder"},[""!=t.errorMessage?n("div",{staticClass:"login-message-holder login-spacer"},[null===t.successMessage&&null!==t.errorMessage?n("span",{staticClass:"text-danger text-center"},[n("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage))]):n("span",{staticClass:"text-primary text-center"},[t._v(t._s(t.successMessage))])]):t._e(),t._v(" "),!0===t.hide?n("div",{staticClass:"login-spacer",staticStyle:{"margin-bottom":"25px !important","text-align":"justify"}},[t._v("\n        We send recovery email to your email address at "),n("b",[t._v(t._s(t.email))]),t._v(".\n        Please give us a moment, it may take few minutes. Please check your email address to continue.\n      ")]):t._e(),t._v(" "),!1===t.hide?n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Type your Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}):t._e(),t._v(" "),n("br"),t._v(" "),!1===t.hide?n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(e){return t.request()}}},[t._v("Send Request")]):t._e(),t._v(" "),n("div",{staticClass:"input-group login-spacer",staticStyle:{"margin-top":"50px","border-top":"solid 1px #ddd"}},[n("label",[n("b",{staticClass:"text-primary",on:{click:function(e){return t.redirect("/login")}}},[t._v("Back to login")])])]),t._v(" "),n("br"),t._v(" "),n("br")])])])},staticRenderFns:[]}},412:function(t,e,a){a(1033);var n=a(288)(a(870),a(1121),"data-v-c85d4644",null);t.exports=n.exports},439:function(t,e,a){"use strict";a(24);e.a={sidebarMenu:[{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Dashboard",icon:"fa fa-home",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Menu",icon:"fa fa-bars",path:"products",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Bookings",icon:"fa fa-bookmark",path:"bookings",flag:!1,subMenu:null},{accountType:"ADMIN",showOnAdmin:!0,accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"accounts",flag:!1,subMenu:null}],menuOff:[{id:1,users:"ALL",parent_id:0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null}],APP_NAME:"SIML",APP_NAME_HTML:"SIML",APP_EMAIL:"support@siml.ph",APP_SITE:"https://wearesiml.com",COMPANY:"SIML",COMPANY_URL:"http://wearesiml.ltd",COPYRIGHT:"SIML "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"}],USER_TYPE_SETTING:!1,plan:!1,broadcastingFlag:!0,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address"]},{title:"Account",type:"account",allowed:[]},{title:"Business Setting",type:"merchant",allowed:["prefix","website","address","schedule"]}],ecommerce:{inventoryType:"all",editProductMenu:[{title:"Inventory",flag:!0},{title:"Bundled Products",flag:!1},{title:"Other Details",flag:!1}],productUnits:["Litres (L)","Millilitres (ml)","Kilograms (kg)","Grams (g)"],productTitleLimit:100}}},471:function(t,e,a){t.exports=a.p+"static/img/logo.bc46810.png"},870:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(36),i=a(54),r=a(24),s=a(439);e.default={name:"",mounted:function(){},data:function(){return{email:null,flag:!1,errorMessage:null,successMessage:null,hide:!1,config:r.default,common:s.a}},methods:{request:function(){var t=this;this.validate();var e={email:this.email};!0===this.flag&&($("#loading").css({display:"block"}),this.APIRequest("accounts/request_reset",e).then(function(e){$("#loading").css({display:"none"}),t.hide=!0,t.errorMessage=null}))},validate:function(){null===this.email||""===this.email?(this.flag=!1,this.errorMessage="Please enter your Email Address"):!1===i.a.validateEmail(this.email)?this.errorMessage="You have entered an invalid email address.":this.flag=!0},redirect:function(t){n.a.push(t)}}}},976:function(t,e,a){e=t.exports=a(409)(),e.push([t.i,".holder[data-v-c85d4644]{margin-top:25px}.custom-holder[data-v-c85d4644]{margin-top:0}.signup-header[data-v-c85d4644]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-c85d4644]{width:auto!important;height:70px}.signup-header img[data-v-c85d4644]:hover{cursor:pointer}.header-title[data-v-c85d4644]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.input-holder[data-v-c85d4644]{width:90%;margin:0 5%}.btn[data-v-c85d4644]{height:50px!important}.form-control[data-v-c85d4644]{height:45px!important}.site-title[data-v-c85d4644]{margin-top:25px;width:100%;float:left}.site-title img[data-v-c85d4644]{width:50px;float:left;margin-right:10px;margin-left:5%}.site-title .app-name[data-v-c85d4644]{float:left}.input-group label[data-v-c85d4644]{width:100%;float:left;line-height:50px;text-align:center}.input-group label b[data-v-c85d4644]:hover{cursor:pointer}@media (max-width:991px){.custom-holder[data-v-c85d4644]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/siml/src/components/increment/basic/RequestResetPassword.vue"],names:[],mappings:"AACA,yBACE,eAAiB,CAClB,AACD,gCACE,YAAgB,CACjB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,qBAAuB,AACvB,WAAa,CACd,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,sBACE,qBAAwB,CACzB,AACD,+BACE,qBAAwB,CACzB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,uCACE,UAAY,CACb,AACD,oCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,4CACE,cAAgB,CACjB,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"RequestResetPassword.vue",sourcesContent:["\n.holder[data-v-c85d4644]{\r\n  margin-top: 25px;\n}\n.custom-holder[data-v-c85d4644]{\r\n  margin-top: 0px;\n}\n.signup-header[data-v-c85d4644]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-c85d4644]{\r\n  width: auto !important;\r\n  height: 70px;\n}\n.signup-header img[data-v-c85d4644]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-c85d4644]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.input-holder[data-v-c85d4644]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.btn[data-v-c85d4644]{\r\n  height: 50px !important;\n}\n.form-control[data-v-c85d4644]{\r\n  height: 45px !important;\n}\n.site-title[data-v-c85d4644]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-c85d4644]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\r\n  margin-left: 5%;\n}\n.site-title .app-name[data-v-c85d4644]{\r\n  float: left;\n}\n.input-group label[data-v-c85d4644]{\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 50px;\r\n  text-align: center;\n}\n.input-group label b[data-v-c85d4644]:hover{\r\n  cursor: pointer;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-c85d4644]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=14.3cbc442b8571fa2bccf1.js.map