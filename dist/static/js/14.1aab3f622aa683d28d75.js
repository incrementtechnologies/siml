webpackJsonp([14],{1014:function(t,a,e){var s=e(954);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(409)("0b46cae4",s,!0)},1108:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row holder"},[s("div",{staticClass:"col-lg-4 col-md-6 mx-auto custom-holder"},[s("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[s("img",{attrs:{src:e(465)},on:{click:function(a){return t.redirect("/")}}})]),t._v(" "),s("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[t._v("\n      Reset Password\n    ")]),t._v(" "),s("div",{staticClass:"input-holder"},[""!=t.errorMessage&&!1===t.updateFlag?s("div",{staticClass:"login-message-holder login-spacer"},[null!==t.errorMessage?s("span",{staticClass:"text-danger text-center"},[s("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage))]):t._e()]):t._e(),t._v(" "),!0===t.updateFlag?s("div",{staticClass:"login-message-holder login-spacer"},[s("span",{staticClass:"text-center"},[t._v("Your password was successully updated! To login click the button below.")])]):t._e(),t._v(" "),!1===t.updateFlag?s("div",{staticClass:"input-group form-spacer"},[t._m(0),t._v(" "),"checkbox"===t.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"New Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(a){var e=t.password,s=a.target,r=!!s.checked;if(Array.isArray(e)){var i=t._i(e,null);s.checked?i<0&&(t.password=e.concat([null])):i>-1&&(t.password=e.slice(0,i).concat(e.slice(i+1)))}else t.password=r}}}):"radio"===t.visibility?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"New Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(a){t.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"New Password","aria-describedby":"addon-2",type:t.visibility},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==t.visibility?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.showPassword("password")}}}):t._e(),t._v(" "),"text"==t.visibility?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.hidePassword("password")}}}):t._e()])]):t._e(),t._v(" "),!1===t.updateFlag?s("div",{staticClass:"input-group form-spacer"},[t._m(1),t._v(" "),"checkbox"===t.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm New Password","aria-describedby":"addon-2",type:"checkbox"},domProps:{checked:Array.isArray(t.cPassword)?t._i(t.cPassword,null)>-1:t.cPassword},on:{change:function(a){var e=t.cPassword,s=a.target,r=!!s.checked;if(Array.isArray(e)){var i=t._i(e,null);s.checked?i<0&&(t.cPassword=e.concat([null])):i>-1&&(t.cPassword=e.slice(0,i).concat(e.slice(i+1)))}else t.cPassword=r}}}):"radio"===t.visibilityC?s("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm New Password","aria-describedby":"addon-2",type:"radio"},domProps:{checked:t._q(t.cPassword,null)},on:{change:function(a){t.cPassword=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"form-control form-control-login",staticStyle:{"border-right-style":"none"},attrs:{placeholder:"Confirm New Password","aria-describedby":"addon-2",type:t.visibilityC},domProps:{value:t.cPassword},on:{input:function(a){a.target.composing||(t.cPassword=a.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-addon",staticStyle:{background:"white"}},["password"==t.visibilityC?s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.showPassword("cpassword")}}}):t._e(),t._v(" "),"text"==t.visibilityC?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.hidePassword("cpassword")}}}):t._e()])]):t._e(),t._v(" "),s("br"),t._v(" "),!1===t.updateFlag?s("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(a){return t.reset()}}},[t._v("Continue")]):t._e(),t._v(" "),s("div",{staticClass:"input-group login-spacer",staticStyle:{"margin-top":"50px","border-top":"solid 1px #ddd"}},[s("label",[s("b",{staticClass:"text-primary",on:{click:function(a){return t.redirect("/login")}}},[t._v("Back to login")])])]),t._v(" "),s("br"),t._v(" "),s("br")])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon recover-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon recover-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])}]}},412:function(t,a,e){e(1014);var s=e(288)(e(874),e(1108),"data-v-35297bf7",null);t.exports=s.exports},440:function(t,a,e){"use strict";e(24);a.a={sidebarMenu:[{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Dashboard",icon:"fa fa-home",path:"dashboard",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Menu",icon:"fa fa-bars",path:"products",flag:!1,subMenu:null},{accountType:"ALL",showOnAdmin:!0,accountStatus:"ALL",description:"Bookings",icon:"fa fa-bookmark",path:"bookings",flag:!1,subMenu:null},{accountType:"ADMIN",showOnAdmin:!0,accountStatus:"ADMIN",description:"Accounts",icon:"fa fa-users",path:"accounts",flag:!1,subMenu:null}],menuOff:[{id:1,users:"ALL",parent_id:0,description:"Dashboard",icon:"fa fa-tachometer",path:"dashboard",flag:!1,subMenu:null}],APP_NAME:"SynQT",APP_NAME_HTML:"SynQT",APP_EMAIL:"support@siml.ph",APP_SITE:"https://wearesiml.com",COMPANY:"SynQT",COMPANY_URL:"http://wearesiml.ltd",COPYRIGHT:"SynQT "+(new Date).getFullYear(),USER_TYPE:[{title:"USER"}],profileMenu:[{title:"My Profile",icon:"fa fa-cog",route:"/profile"}],USER_TYPE_SETTING:!1,plan:!1,broadcastingFlag:!0,header:["status","notification"],settingsMenu:[{title:"Profile",type:"profile",allowed:["cellular_number","address"]},{title:"Account",type:"account",allowed:[]},{title:"Business Setting",type:"merchant-with-schedule",allowed:["prefix","website","address","schedule","information"]}],ecommerce:{inventoryType:"all",editProductMenu:[{title:"Inventory",flag:!0},{title:"Bundled Products",flag:!1},{title:"Other Details",flag:!1}],productUnits:["Litres (L)","Millilitres (ml)","Kilograms (kg)","Grams (g)"],productTitleLimit:100}}},465:function(t,a,e){t.exports=e.p+"static/img/logo.6b1e66e.png"},874:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(36),r=(e(54),e(24)),i=e(440);a.default={name:"",mounted:function(){this.code=this.$route.params.code,this.username=this.$route.params.username},data:function(){return{email:null,flag:!1,errorMessage:null,password:null,cPassword:null,code:this.$route.params.code,username:this.$route.params.username,updateFlag:!1,config:r.default,common:i.a,visibility:"password",visibilityC:"password"}},methods:{showPassword:function(t){"password"===t?this.visibility="text":this.visibilityC="text"},hidePassword:function(t){"cpassword"===t?this.visibilityC="password":this.visibility="password"},reset:function(){var t=this;if(this.validate(),!0===this.flag){var a={username:this.username,code:this.code,password:this.password};$("#loading").css({display:"block"}),this.APIRequest("accounts/update",a).then(function(a){$("#loading").css({display:"none"}),!0===a.data?t.updateFlag=!0:t.updateFlag=!1})}},validate:function(){null===this.password||""===this.password||null===this.cPassword||""===this.cPassword?(this.flag=!1,this.errorMessage="Please fill in all required fields."):this.password!==this.cPassword?(this.flag=!1,this.errorMessage="Please confirm your new password."):this.password.length<8?(this.flag=!1,this.errorMessage="Password length must be greater than 8 digit characters."):/^[a-zA-Z0-9]+$/.test(this.password)?(this.flag=!1,this.errorMessage="Password must be alphanumeric characters. It should contain 1 number, 1 special character and letters."):(this.flag=!0,this.errorMessage=null)},redirect:function(t){s.a.push(t)}}}},954:function(t,a,e){a=t.exports=e(408)(),a.push([t.i,".holder[data-v-35297bf7]{margin-top:25px}.custom-holder[data-v-35297bf7]{margin-top:100px}.signup-header[data-v-35297bf7]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-35297bf7]{height:100px!important;width:auto!important}.signup-header img[data-v-35297bf7]:hover{cursor:pointer}.header-title[data-v-35297bf7]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.input-holder[data-v-35297bf7]{width:90%;margin:0 5%}.form-control[data-v-35297bf7]{height:45px!important}.btn[data-v-35297bf7]{height:50px!important}.site-title[data-v-35297bf7]{margin-top:25px;width:100%;float:left}.site-title img[data-v-35297bf7]{width:50px;float:left;margin-right:10px;margin-left:5%}.site-title .app-name[data-v-35297bf7]{float:left}.recover-addon[data-v-35297bf7]{width:170px}.form-spacer[data-v-35297bf7]{margin-top:10px}.input-group label[data-v-35297bf7]{width:100%;float:left;line-height:50px;text-align:center}.input-group label b[data-v-35297bf7]:hover{cursor:pointer}.input-group-addon[data-v-35297bf7]{width:15%!important;text-align:center!important;padding:0!important;display:block!important;line-height:43px!important}@media (max-width:991px){.custom-holder[data-v-35297bf7]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/siml/src/components/increment/basic/ResetPassword.vue"],names:[],mappings:"AACA,yBACE,eAAiB,CAClB,AACD,gCACE,gBAAkB,CACnB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,oBAAuB,CACxB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,uCACE,UAAY,CACb,AACD,gCACE,WAAa,CACd,AACD,8BACE,eAAiB,CAClB,AACD,oCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,4CACE,cAAgB,CACjB,AACD,oCACE,oBAAsB,AACtB,4BAA8B,AAC9B,oBAAwB,AACxB,wBAA0B,AAC1B,0BAA6B,CAC9B,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"ResetPassword.vue",sourcesContent:["\n.holder[data-v-35297bf7]{\r\n  margin-top: 25px;\n}\n.custom-holder[data-v-35297bf7]{\r\n  margin-top: 100px;\n}\n.signup-header[data-v-35297bf7]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-35297bf7]{\r\n  height: 100px !important;\r\n  width: auto !important;\n}\n.signup-header img[data-v-35297bf7]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-35297bf7]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.input-holder[data-v-35297bf7]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-35297bf7]{\r\n  height: 45px !important;\n}\n.btn[data-v-35297bf7]{\r\n  height: 50px !important;\n}\n.site-title[data-v-35297bf7]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-35297bf7]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\r\n  margin-left: 5%;\n}\n.site-title .app-name[data-v-35297bf7]{\r\n  float: left;\n}\n.recover-addon[data-v-35297bf7]{\r\n  width: 170px;\n}\n.form-spacer[data-v-35297bf7]{\r\n  margin-top: 10px;\n}\n.input-group label[data-v-35297bf7]{\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 50px;\r\n  text-align: center;\n}\n.input-group label b[data-v-35297bf7]:hover{\r\n  cursor: pointer;\n}\n.input-group-addon[data-v-35297bf7]{\r\n  width: 15% !important;\r\n  text-align: center !important;\r\n  padding: 0px !important;\r\n  display: block !important;\r\n  line-height: 43px !important;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-35297bf7]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=14.1aab3f622aa683d28d75.js.map