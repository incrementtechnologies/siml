webpackJsonp([2],{1081:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row holder"},[s("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[s("div",{staticClass:"signup-wrapper"},[s("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[s("img",{attrs:{src:a(471)},on:{click:function(t){return e.redirect("/")}}})]),e._v(" "),s("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[e._v("\n        Register to "),s("b",{staticClass:"text-primary"},[e._v(e._s(e.common.APP_NAME))])]),e._v(" "),s("div",{staticClass:"signup-holder"},[null!==e.errorMessage?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage))])]):e._e(),e._v(" "),null!==e.errorMessage2?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage2))])]):e._e(),e._v(" "),null!==e.errorMessage3?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage3))])]):e._e(),e._v(" "),null!==e.errorMessage4?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage4))])]):e._e(),e._v(" "),null!==e.errorMessage5?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage5))])]):e._e(),e._v(" "),null!==e.errorMessage6?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage6))])]):e._e(),e._v(" "),null!==e.errorMessage7?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-danger text-center"},[s("b",[e._v("Oops!")]),e._v(" "+e._s(e.errorMessage7))])]):e._e(),e._v(" "),null!==e.successMessage?s("div",{staticClass:"login-message-holder login-spacer text-center"},[s("span",{staticClass:"text-success text-center"},[s("b",[e._v("Wow!")]),e._v(" "+e._s(e.successMessage))])]):e._e(),e._v(" "),s("div",[s("div",{staticClass:"input-group login-spacer"},[e._m(0),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username","aria-describedby":"addon-1"},domProps:{value:e.username},on:{keyup:function(t){return e.validate("username")},input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-group login-spacer"},[e._m(1),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Email","aria-describedby":"addon-1"},domProps:{value:e.email},on:{keyup:function(t){return e.validate("email")},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-group"},[e._m(2),e._v(" "),"checkbox"===e.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{keyup:function(t){return e.validate("password")},change:function(t){var a=e.password,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.password=a.concat([null])):i>-1&&(e.password=a.slice(0,i).concat(a.slice(i+1)))}else e.password=r}}}):"radio"===e.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{keyup:function(t){return e.validate("password")},change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Password","aria-describedby":"addon-2",type:e.visibility},domProps:{value:e.password},on:{keyup:function(t){return e.validate("password")},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==e.visibility?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.showPassword("password")}}}):e._e(),e._v(" "),"text"==e.visibility?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.hidePassword("password")}}}):e._e()])]),e._v(" "),s("div",{staticClass:"input-group login-spacer"},[e._m(3),e._v(" "),"checkbox"===e.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:e.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(e.cpassword)?e._i(e.cpassword,null)>-1:e.cpassword},on:{keyup:function(t){return e.validate("cpassword")},change:function(t){var a=e.cpassword,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.cpassword=a.concat([null])):i>-1&&(e.cpassword=a.slice(0,i).concat(a.slice(i+1)))}else e.cpassword=r}}}):"radio"===e.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:e.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:e._q(e.cpassword,null)},on:{keyup:function(t){return e.validate("cpassword")},change:function(t){e.cpassword=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm Password","aria-describedby":"addon-2",type:e.visibilityC},domProps:{value:e.cpassword},on:{keyup:function(t){return e.validate("cpassword")},input:function(t){t.target.composing||(e.cpassword=t.target.value)}}}),e._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==e.visibilityC?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.showPassword("cpassword")}}}):e._e(),e._v(" "),"text"==e.visibilityC?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.hidePassword("cpassword")}}}):e._e()])]),e._v(" "),s("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(t){return e.signUp()}}},[e._v("Signup")]),e._v(" "),s("div",{staticClass:"input-group login-spacer"},[s("label",[e._v("By signing up, you agree to our "),s("b",{staticClass:"text-primary",on:{click:function(t){return e.openModal("#termsAndConditionsModal")}}},[e._v("Terms")]),e._v(" and "),s("b",{staticClass:"text-primary",on:{click:function(t){return e.openModal("#privacyModal")}}},[e._v("Privacy Policy")])])]),e._v(" "),s("div",{staticClass:"input-group login-spacer",staticStyle:{"margin-top":"50px","border-top":"solid 1px #ddd"}},[s("label",[e._v("Have an account? "),s("b",{staticClass:"text-primary",on:{click:function(t){return e.redirect("/login")}}},[e._v("Login")])])])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[a("i",{staticClass:"fa fa-user"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[a("i",{staticClass:"fa fa-envelope"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[a("i",{staticClass:"fa fa-key"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[a("i",{staticClass:"fa fa-key"})])}]}},296:function(e,t,a){a(996);var s=a(288)(a(872),a(1081),"data-v-26dec80a",null);e.exports=s.exports},439:function(e,t,a){"use strict";a(24);t.a={sidebarMenu:[{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Dashboard",icon:"fa fa-home",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Menu",icon:"fa fa-bars",path:"products",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Bookings",icon:"fa fa-bookmark",path:"bookings",flag:!1,subMenu:null},{accountType:"ADMIN",showOnAdmin:!0,accountStatus:"ALL",description:"Accounts",icon:"fa fa-users",path:"accounts",flag:!1,subMenu:null}],menuOff:[{id:1,users:"ALL",parent_id:0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null}],APP_NAME:"SIML",APP_NAME_HTML:"SIML",APP_EMAIL:"support@siml.ph",APP_SITE:"https://wearesiml.com",COMPANY:"SIML",COMPANY_URL:"http://wearesiml.ltd",COPYRIGHT:"SIML "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"}],USER_TYPE_SETTING:!1,plan:!1,broadcastingFlag:!0,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address"]},{title:"Account",type:"account",allowed:[]},{title:"Business Setting",type:"merchant",allowed:["prefix","website","address","schedule"]}],ecommerce:{inventoryType:"all",editProductMenu:[{title:"Inventory",flag:!0},{title:"Bundled Products",flag:!1},{title:"Other Details",flag:!1}],productUnits:["Litres (L)","Millilitres (ml)","Kilograms (kg)","Grams (g)"],productTitleLimit:100}}},471:function(e,t,a){e.exports=a.p+"static/img/logo.bc46810.png"},872:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(138),r=a.n(s),i=a(36),n=a(54),o=a(24),l=a(439);t.default={mounted:function(){},data:function(){return{username:"",email:"",password:"",cpassword:"",type:"USER",errorMessage:null,errorMessage2:null,errorMessage3:null,errorMessage4:null,errorMessage5:null,errorMessage6:null,errorMessage7:null,successMessage:null,user:n.a.user,tokenData:n.a.tokenData,schools:null,schoolIndex:null,config:o.default,common:l.a,visibility:"password",visibilityC:"password"}},methods:{showPassword:function(e){"password"===e?this.visibility="text":this.visibilityC="text"},hidePassword:function(e){"cpassword"===e?this.visibilityC="password":this.visibility="password"},signUp:function(){var e=this;this.validate("email"),this.validate("username"),this.validate("password"),this.validate("cpassword");var t={username:this.username,email:this.email,password:this.password,config:o.default,account_type:this.type,referral_code:null,status:"ADMIN"};null===this.errorMessage&&null===this.errorMessage2&&null===this.errorMessage3&&null===this.errorMessage4&&null===this.errorMessage5&&null===this.errorMessage6&&null===this.errorMessage7&&($("#loading").css({display:"block"}),this.APIRequest("accounts/create",t).then(function(t){if($("#loading").css({display:"none"}),null!==t.error)if(100===t.error.status){var a=t.error.message;void 0!==r()(a.username)&&void 0!==a.username?e.errorMessage=a.username[0]:void 0!==r()(a.email)&&void 0!==a.email&&(e.errorMessage=a.email[0])}else null!==t.data&&t.data>0&&e.login()}))},redirect:function(e){i.a.push(e)},strong:function(){this.successMessage="Strong password."},validate:function(e){this.successMessage=null;var t=/\s/;"username"===e?(this.errorMessage=null,t.test(this.username)?this.errorMessage="Username should not contain a space.":this.username.length<6?this.errorMessage2="Username must be atleast 6 characters.":(this.errorMessage=null,this.errorMessage2=null)):"email"===e?(this.errorMessage3=null,!1===n.a.validateEmail(this.email)?this.errorMessage3="You have entered an invalid email address.":this.errorMessage3=null):"password"===e?(this.errorMessage4=null,this.password.length<l.a.passwordLimit?this.errorMessage4="Password must be atleast "+l.a.passwordLimit+" characters.":/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)?(this.strong(),this.errorMessage4=null,this.errorMessage5=null):this.errorMessage5="Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter."):"cpassword"===e?(this.errorMessage6=null,this.successMessage=null,0!==this.password.localeCompare(this.cpassword)?this.errorMessage6="Password did not match.":this.errorMessage6=null):this.username.length>=6&&null!==this.email&&null!==this.password&&this.password.length>=6&&0===this.password.localeCompare(this.cpassword)&&null!==this.type&&!0===n.a.validateEmail(this.email)?this.errorMessage=null:(this.errorMessage7="Please fill in all required fields.",this.errorMessage7=null)},login:function(){var e=this;n.a.authenticate(this.username,this.password,function(e){i.a.push("dashboard")},function(t,a){$("#loading").css({display:"none"}),e.errorMessage=401===a?"Username and Password did not match.":402===a?t.error:"Cannot log in? Contact us through email: "+e.common.APP_EMAIL})},openModal:function(e){$(e).modal("show")}}}},939:function(e,t,a){t=e.exports=a(409)(),t.push([e.i,".holder[data-v-26dec80a],.signup-container[data-v-26dec80a]{margin-top:25px}.signup-header[data-v-26dec80a]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-26dec80a]{height:100px!important;width:auto!important}.signup-header img[data-v-26dec80a]:hover{cursor:pointer}.header-title[data-v-26dec80a]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.signup-holder[data-v-26dec80a]{width:90%;margin:0 5%;float:left}.input-holder[data-v-26dec80a]{width:90%;margin:0 5%}.form-control[data-v-26dec80a]{height:45px!important}.btn[data-v-26dec80a]{height:50px!important}.input-group[data-v-26dec80a]{margin-top:5px;margin-bottom:5px}.site-title[data-v-26dec80a]{margin-top:25px;width:100%;float:left}.site-title img[data-v-26dec80a]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-26dec80a]{float:left}.account-type[data-v-26dec80a]{width:120px!important}.options[data-v-26dec80a]{width:90%;margin:0 5%;float:left}.options button[data-v-26dec80a]{width:49%!important;float:left!important;height:60px!important}.input-group label[data-v-26dec80a]{width:100%;float:left;line-height:50px;text-align:center}.input-group-addon[data-v-26dec80a]{width:15%!important;text-align:center!important;padding:0!important;display:block!important;line-height:43px!important}.input-group label b[data-v-26dec80a]:hover{cursor:pointer}@media (max-width:991px){.custom-holder[data-v-26dec80a]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/siml/src/components/increment/basic/Signup.vue"],names:[],mappings:"AACA,4DACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,oBAAuB,CACxB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,gCACE,UAAW,AACX,YAAkB,AAClB,UAAY,CACb,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AACD,+BACE,qBAAwB,CACzB,AACD,0BACE,UAAW,AACX,YAAmB,AACnB,UAAY,CACb,AACD,iCACE,oBAAsB,AACtB,qBAAuB,AACvB,qBAAwB,CACzB,AACD,oCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,oCACE,oBAAsB,AACtB,4BAA8B,AAC9B,oBAAwB,AACxB,wBAA0B,AAC1B,0BAA6B,CAC9B,AACD,4CACE,cAAgB,CACjB,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"Signup.vue",sourcesContent:["\n.signup-container[data-v-26dec80a], .holder[data-v-26dec80a]{\r\n  margin-top: 25px;\n}\n.signup-header[data-v-26dec80a]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-26dec80a]{\r\n  height: 100px !important;\r\n  width: auto !important;\n}\n.signup-header img[data-v-26dec80a]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-26dec80a]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.signup-holder[data-v-26dec80a]{\r\n  width: 90%;\r\n  margin: 0 5% 0 5%;\r\n  float: left;\n}\n.input-holder[data-v-26dec80a]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-26dec80a]{\r\n  height: 45px !important;\n}\n.btn[data-v-26dec80a]{\r\n  height: 50px !important;\n}\n.input-group[data-v-26dec80a]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-26dec80a]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-26dec80a]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-26dec80a]{\r\n  float: left;\n}\n.account-type[data-v-26dec80a]{\r\n  width: 120px !important;\n}\n.options[data-v-26dec80a]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\r\n  float: left;\n}\n.options button[data-v-26dec80a]{\r\n  width: 49% !important;\r\n  float: left !important;\r\n  height: 60px !important;\n}\n.input-group label[data-v-26dec80a]{\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 50px;\r\n  text-align: center;\n}\n.input-group-addon[data-v-26dec80a]{\r\n  width: 15% !important;\r\n  text-align: center !important;\r\n  padding: 0px !important;\r\n  display: block !important;\r\n  line-height: 43px !important;\n}\n.input-group label b[data-v-26dec80a]:hover{\r\n  cursor: pointer;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-26dec80a]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])},996:function(e,t,a){var s=a(939);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(410)("932d286c",s,!0)}});
//# sourceMappingURL=2.43547c2a0670a43ef4c5.js.map