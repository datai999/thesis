(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{212:function(e){e.exports=JSON.parse('{"description":"Description","educationMethod":"Education method","mainTask":"Main task","major":"Major","origin":{"create":"Create","filter&Search":"Filter and Search","new":"NEW","page":"Page","record":"Record","topic":"Topic","total":"Total","update":"Update"},"semester":"Semester","student":{"execute":"Student execute","max":"Max student","min":"Min student"},"teacher":{"guide":"Guide teacher","guideSelect":"Select guide teacher"},"thesisTask":"Thesis task","topic":{"code":"Topic code","create":"Create topic","name":"Topic name","update":"Update topic"}}')},213:function(e){e.exports=JSON.parse('{"description":"M\xf4 t\u1ea3","educationMethod":"Ph\u01b0\u01a1ng th\u1ee9c \u0111\xe0o t\u1ea1o","mainTask":"Nhi\u1ec7m v\u1ee5 ch\xednh","major":"Chuy\xean ng\xe0nh","origin":{"create":"T\u1ea1o","filter&Search":"L\u1ecdc v\xe0 T\xecm ki\u1ebfm","new":"T\u1ea1o m\u1edbi","page":"Trang","record":"S\u1ed1 b\u1ea3n ghi","topic":"\u0110\u1ec1 t\xe0i","total":"T\u1ed5ng trang","update":"C\u1eadp nh\u1eadt"},"semester":"H\u1ecdc k\u1ef3","student":{"execute":"Sinh vi\xean th\u1ef1c hi\u1ec7n","max":"S\u1ed1 sinh vi\xean t\u1ed1i \u0111a","min":"S\u1ed1 sinh vi\xean t\u1ed1i thi\u1ec3u"},"teacher":{"guide":"Gi\u1ea3ng vi\xean h\u01b0\u1edbng d\u1eabn","guideSelect":"Ch\u1ecdn gi\u1ea3ng vi\xean h\u01b0\u1edbng d\u1eabn"},"thesisTask":"Nhi\u1ec7m v\u1ee5 giai \u0111o\u1ea1n lu\u1eadn v\u0103n","topic":{"code":"M\xe3 \u0111\u1ec1 t\xe0i","create":"T\u1ea1o m\u1edbi \u0111\u1ec1 t\xe0i","name":"T\xean \u0111\u1ec1 t\xe0i","update":"C\u1eadp nh\u1eadt \u0111\u1ec1 t\xe0i"}}')},225:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(0),o=n.n(c),l=n(13),i=n(138),u=n(911),s=n(224),p=n(22),f=n.n(p),m=n(15),d=n.n(m),g=n(211),b=n.n(g).a.create({baseURL:"http://datai-thesis.herokuapp.com/api",headers:{"content-type":"application/json"}});b.interceptors.response.use((function(e){return e&&e.data?e.data.data:e}),(function(e){throw e}));var y=b,h={getAll:function(){return y.get("/const")},getTypes:function(){return y.get("/const/types")}},O={educationMethod:{label:"educationMethod",placeholder:"Select education method",arrValue:["Formal","CLC","Link"]},semester:{label:"semester",placeholder:"Select semester",arrValue:Array(3).fill().map((function(e,t){return(parseInt((new Date).getFullYear().toString().substr(2))+parseInt(t/3)).toString()+(t%3+1)}))},guideTeacher:{label:"teacher.guide",placeholder:"teacher.guideSelect"},topicCode:{label:"topic.code",placeholder:"topic.code"},topicName:{label:"topic.name",placeholder:"topic.name"},minStudentTake:{label:"student.min",placeholder:"Select",arrValue:Array.from({length:5},(function(e,t){return t+1}))},maxStudentTake:{label:"student.max",placeholder:"Select",arrValue:Array.from({length:5},(function(e,t){return t+1}))},students:{label:"student.execute",placeholder:"Select student"},mainTask:{label:"mainTask",multiline:!0,numberOfLines:3},thesisTask:{label:"thesisTask",multiline:!0,numberOfLines:3},description:{label:"description",multiline:!0,numberOfLines:5},name:{label:"name",placeholder:"Type name"},email:{label:"email",placeholder:"HCMUT email"},phone:{label:"phone",placeholder:"Type phone"},degree:{label:"degree",placeholder:"Select degree",arrValue:["Bachelor","Master","Doctor","Professor"]},subjectDepartment:{label:"subjectDepartment",placeholder:"Select subject department",arrValue:["Information System","Software Technology","Systems and Networks","Computer Science","Computer Engineering"]},major:{label:"major",placeholder:"Select major",arrValue:["Computer Science","Computer Engineering"]},studentCode:{label:"code",placeholder:"Type student code"}},v=n(3),E=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"home-outline"}))},j=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"book-open-outline"}))},w=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"person-done-outline"}))},P=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"settings-outline"}))},x=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"menu-outline"}))},S=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"search-outline"}))},k=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"plus-outline"}))},D=function(e){return o.a.createElement(l.Icon,a()({},e,{name:"close-outline"}))},T=n(12),C=n.n(T),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Object;return t.getAll=function(){return y.get(e)},t.getPaging=function(t){return y.get(e+"/paging",{params:t})},t.create=function(t){return y.post(e,t)},t};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},B("/topic/assign")),M=n(212),z=n(213),A=n(139),V=n(227),N={en:{translation:M},vi:{translation:z}};A.a.use(V.a).init({resources:N,lng:"vi",fallbackLng:"en",interpolation:{escapeValue:!1}});var R=A.a,H=v.a.create({container:{flexDirection:"row"},tag:{marginHorizontal:2}}),F=function(e){var t=e.tags;return o.a.createElement(l.List,{horizontal:!0,data:t,renderItem:function(e){e.index;var t=e.item;return o.a.createElement(l.Button,{style:H.tag,status:"info",size:"tiny",appearance:"outline",accessoryRight:D},t)}})};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=U(U({},B("/student")),{},{search:function(e){var t="/student/search?value="+e;return y.get(t)}});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=Y(Y({},B("/teacher")),{},{search:function(e){var t="/teacher/search?value="+e;return y.get(t)}}),K=n(11),Q=n.n(K),X=n(81),Z=n.n(X);function $(e){var t;if(null==e)return null;if(Array.isArray(e))return e.map((function(e){return $(e)}));switch(typeof e){case"string":case"number":return e;case"object":return null!=(t=null==e?void 0:e.name)?t:null==e?void 0:e.value;default:return null}}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t=e.callBack,n=Q()(e,["callBack"]),r=o.a.useState(n.value),c=f()(r,2),i=c[0],u=c[1];return o.a.createElement(l.Input,a()({},n,{label:R.t(n.label),placeholder:R.t(n.placeholder),onChangeText:function(e){t(e),u(e)},onBlur:function(){return n.onBlur?n.onBlur(i):null}}))},re=function(e){var t,n,r=e.callBack,c=Q()(e,["callBack"]),i=o.a.useState(""),u=f()(i,2),s=u[0],p=u[1],m=o.a.useState(null!=(t=c.data)?t:[]),g=f()(m,2),b=g[0],y=g[1];return o.a.createElement(l.Autocomplete,a()({},c,{label:R.t(c.label),placeholder:R.t(c.placeholder),value:s,onSelect:function(e){r(b[e])},onChangeText:function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(p(e),!c.refreshDataOnChangeText){t.next=8;break}if(null==e||""==e){t.next=8;break}return t.t0=y,t.next=6,d.a.awrap(c.refreshDataOnChangeText(e));case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),null,null,null,Promise)}}),null==(n=b)?void 0:n.map((function(e){var t=$(e);return o.a.createElement(l.SelectItem,{key:e,title:t})})))},ae=function(e){var t,n=a()({},e),r=o.a.useState(null!=(t=n.value)?t:[]),c=f()(r,2),i=c[0],u=c[1],s=te(te({},n),{},{callBack:function(e){var t=Z.a.cloneDeep(i);t.push(e),u(t),n.callBack(t)}});return o.a.createElement(l.Layout,null,o.a.createElement(re,s),o.a.createElement(l.List,{horizontal:!0,data:i,renderItem:function(e){var t=e.item;return o.a.createElement(l.Button,{status:"info",size:"tiny",appearance:"outline",accessoryRight:function(){return o.a.createElement(l.Button,{status:"info",size:"tiny",appearance:"ghost",accessoryRight:D,onPress:function(){var e=i.filter((function(e){return e!=t}));u(e),n.callBack(e)}})}},$(t))}}))},ce=function(e){return e?Array.from(e,(function(e){return o.a.createElement(l.SelectItem,{key:e,title:$(e)})})):null},oe=function(e){e.field;var t,n,r=e.callBack,c=Q()(e,["field","callBack"]),i=o.a.useState(new l.IndexPath(null==(t=c.arrValue)?void 0:t.map((function(e){return e.id})).indexOf(null==(n=c.value)?void 0:n.id))),u=f()(i,2),s=u[0],p=u[1];return o.a.createElement(l.Select,a()({},c,{label:R.t(c.label),placeholder:R.t(c.placeholder),value:$(c.arrValue[s.row]),selectedIndex:s.row>-1?s:null,onSelect:function(e){var t=c.arrId?c.arrId:c.arrValue;r(t[e-1]),p(e)}}),ce(c.arrValue))},le=function(e){e.field;var t,n=e.callBack,r=Q()(e,["field","callBack"]),c=o.a.useState(r.value?Array.from(null==(t=r.value)?void 0:t.map((function(e){return e.id})),(function(e){var t;return new l.IndexPath(null==(t=r.arrValue)?void 0:t.map((function(e){return e.id})).indexOf(e))})).filter((function(e){return e.row>-1})):[]),i=f()(c,2),u=i[0],s=i[1];return o.a.createElement(l.Select,a()({},r,{label:R.t(r.label),placeholder:R.t(r.placeholder),value:u.map((function(e){return $(r.arrValue[e.row])+", "})),multiSelect:!0,selectedIndex:u,onSelect:function(e){var t=r.arrId?r.arrId:r.arrValue;n(Array.from(e,(function(e){return t[e.row]}))),s(e)}}),ce(r.arrValue))};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se={},pe={header:"Create new student",body:function(){return fe()},submit:function(){return W.create(se)}},fe=function(){var e=function(e,t){return se[e]=t},t=function(t){return ue({value:se[t],callBack:function(n){return e(t,n)}},O[t])},n=function(t){return ue({field:t,value:se[t],callBack:function(n){return e(t,n)}},O[t])};return o.a.createElement(l.Layout,{style:me.container},o.a.createElement(l.Layout,{style:me.row},o.a.createElement(l.Layout,{style:me.left},o.a.createElement(ne,t("name")),o.a.createElement(ne,t("email")),o.a.createElement(ne,t("phone"))),o.a.createElement(l.Layout,{style:me.right},o.a.createElement(ne,t("studentCode")),o.a.createElement(oe,n("educationMethod")),o.a.createElement(oe,n("major")))))},me=v.a.create({container:{flex:1},row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10}}),de=pe;function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye={},he={header:"Create new teacher",body:function(){return Oe()},submit:function(){return q.create(ye)}},Oe=function(){var e=function(e,t){return ye[e]=t},t=function(t){return be({value:ye[t],callBack:function(n){return e(t,n)}},O[t])},n=function(t){return be({field:t,value:ye[t],callBack:function(n){return e(t,n)}},O[t])};return o.a.createElement(l.Layout,{style:ve.container},o.a.createElement(l.Layout,{style:ve.row},o.a.createElement(l.Layout,{style:ve.left},o.a.createElement(ne,t("name")),o.a.createElement(ne,t("email")),o.a.createElement(ne,t("phone"))),o.a.createElement(l.Layout,{style:ve.right},o.a.createElement(oe,n("degree")),o.a.createElement(oe,n("subjectDepartment")))))},ve=v.a.create({container:{flex:1},row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10}}),Ee=he,je=n(226),we=function(e){var t=e.animationEnd,n=e.submit;return o.a.createElement(l.Layout,{style:Pe.popupBot},o.a.createElement(l.Button,{style:Pe.popupBotBtn,onPress:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(n());case 2:if(!e.sent){e.next=4;break}t();case 4:case"end":return e.stop()}}),null,null,null,Promise)}},"Submit"),o.a.createElement(l.Button,{style:Pe.popupBotBtn,onPress:t},"Cancel"))},Pe=v.a.create({modal:{maxWidth:"100%",maxHeight:"100%"},backdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"},popupBot:{flexDirection:"row",justifyContent:"space-evenly"},popupBotBtn:{margin:5}}),xe=function(e){var t=e.visible,n=e.submit,r=e.cancel,a=e.body,c=o.a.useRef(),i=function(){return c.current.zoomOut(500).then((function(e){return r()}))};return o.a.createElement(l.Modal,{style:Pe.modal,visible:t,backdropStyle:Pe.backdrop,onBackdropPress:i},o.a.createElement(je.a,{style:{flex:1,backgroundColor:"white"},animation:"zoomIn",ref:c},a(),o.a.createElement(we,{animationEnd:i,submit:n})))},Se=n(55),ke=n(87);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce={guideTeacher:[],executeStudent:[]},Be={body:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"topic.create",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){};return Le(e,t,n)},submit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return I.create(e)}},Le=function(e,t,n){var r=o.a.useState(!1),c=f()(r,2),i=c[0],u=c[1],s=o.a.useState(!1),p=f()(s,2),m=p[0],g=p[1],b=o.a.useState(0),y=f()(b,2),h=y[0],v=y[1],E=Te(Te({},Ee),{},{visible:i,cancel:function(){return u(!1)}}),j=Te(Te({},de),{},{visible:m,cancel:function(){return g(!1)}}),w=function(e,r,a){var c="topic"==r?r+"."+e:r;Z.a.set(Ce,c,a);var o=Z.a.set(t,c,a);n(o)},P=function(e,n){var r="topic"==n?n+"."+e:n;return Z.a.get(t,r)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topic";return Te(Te({field:e,callBack:function(n){return w(e,t,n)}},O[e]),{},{value:P(e,t)})},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topic";return Te(Te({callBack:function(n){return w(e,t,n)}},O[e]),{},{value:P(e,t)})},D=function(e){var t="guideTeacher",n=t;return"teacher"!=e&&(t="students",n="executeStudent"),Te(Te({},S(t,n)),{},{refreshDataOnChangeText:function(t){return T(e,t)},accessoryRight:function(){return o.a.createElement(l.Button,{appearance:"ghost",size:"small",accessoryRight:k,onPress:function(){return"teacher"==e?u(!0):g(!0)}})}})},T=function(e,t){return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"teacher"!=e){n.next=7;break}return n.next=4,d.a.awrap(q.search(t));case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,d.a.awrap(W.search(t));case 9:n.t0=n.sent;case 10:return n.abrupt("return",n.t0);case 13:n.prev=13,n.t1=n.catch(0),console.log(n.t1);case 16:case"end":return n.stop()}}),null,null,[[0,13]],Promise)};return o.a.createElement(l.Layout,{style:{flex:1}},o.a.createElement(xe,E),o.a.createElement(xe,j),o.a.createElement(l.Layout,{style:{flexDirection:"row",marginBottom:15}},o.a.createElement(ke.a,{icon:"translate",onPress:function(){return v(h+1)}}),o.a.createElement(l.Text,{style:Ie.headerText},R.t(e))),o.a.createElement(Se.a,{style:{maxHeight:"100%"},contentContainerStyle:{paddingHorizontal:24}},o.a.createElement(ne,S("topicName")),h>0&&o.a.createElement(ne,S("topicName")),o.a.createElement(l.Layout,{style:Ie.row},o.a.createElement(l.Layout,{style:Ie.left},o.a.createElement(oe,x("educationMethod")),o.a.createElement(oe,x("semester")),o.a.createElement(le,x("major")),o.a.createElement(ae,D("teacher"))),o.a.createElement(l.Layout,{style:Ie.right},o.a.createElement(oe,x("minStudentTake")),o.a.createElement(oe,x("maxStudentTake")),o.a.createElement(ae,D("students")),o.a.createElement(ne,S("topicCode")))),o.a.createElement(ne,S("mainTask")),h>0&&o.a.createElement(ne,S("mainTask")),o.a.createElement(ne,S("thesisTask")),h>0&&o.a.createElement(ne,S("thesisTask")),o.a.createElement(ne,a()({},S("description"),{style:Ie.description}))))},Ie=v.a.create({row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10},headerText:{margin:5,marginLeft:"25%",fontWeight:"bold",textAlign:"center",fontSize:30},description:{},tagList:{flexDirection:"row"},tag:{marginHorizontal:2}}),Me=Be,ze=n(8),Ae=n(115),Ve=n(191);function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var He={topicCode:{},semester:{},major:{},educationMethod:{},topicName:{},guideTeacher:{},students:{}},Fe=[5,10,20,30,50,100],Je=function(e){return o.a.createElement(l.SelectItem,{key:e,title:e})},Ue=function(e,t){return e+", "+t.split(" ").slice(-1).join()},We=function(e){var t=$(e);return Array.isArray(t)?o.a.createElement(Ae.a.Accordion,{title:t.reduce(Ue,"").slice(2)},null==t?void 0:t.map((function(e){return o.a.createElement(Ae.a.Item,{key:e,title:e})}))):t},Ge=v.a.create({pagination:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:"5%"}}),Ye=function(e){var t=e.data,n=e.page,r=e.callBack,c=o.a.useState(new l.IndexPath(0)),i=f()(c,2),u=i[0],s=i[1],p=o.a.useState(!1),m=f()(p,2),g=m[0],b=m[1],y=o.a.useState(null),h=f()(y,2),O=h[0],v=h[1],E=Re(Re({},Me),{},{header:"topic.update",visible:g,cancel:function(){return b(!1)},body:function(){return Me.body(O,v)},submit:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(Me.submit(O));case 3:return e=t.sent,console.log(e),t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),null,null,[[0,8]],Promise)}}),j=function(e){return{onPress:function(){v(e),b(!0)}}},w=function(e,t){r({number:e,size:t})};return o.a.createElement(Ve.a,null,o.a.createElement(xe,E),o.a.createElement(Ve.a.Header,null,Object.keys(He).map((function(e){return o.a.createElement(Ve.a.Title,{key:e},o.a.createElement(l.Text,null,R.t(e)))}))),t.map((function(e){if(null!=e.topic)return o.a.createElement(Ve.a.Row,a()({key:e.id},j(e)),Object.keys(He).slice(0,-2).map((function(t){var n=e.topic[t];return o.a.createElement(Ve.a.Cell,a()({key:t},j(e)),We(n))})),o.a.createElement(Ve.a.Cell,null,We(e.guideTeacher)),o.a.createElement(Ve.a.Cell,null,We(e.executeStudent)))})),o.a.createElement(ze.a,{style:Ge.pagination},o.a.createElement(ze.a,null,o.a.createElement(l.Text,null,R.t("origin.page"),": ",n.number+1," / ",n.totalPages),o.a.createElement(l.Text,null,R.t("origin.total"),": ",n.totalElements)),o.a.createElement(Ve.a.Pagination,{page:n.number,numberOfPages:n.totalPages,onPageChange:function(e){w(e,Fe[u.row])}}),o.a.createElement(ze.a,null,o.a.createElement(l.Text,null,R.t("origin.record")),o.a.createElement(l.Select,{style:Ge.select,size:"small",value:Fe[u.row],selectedIndex:u,onSelect:function(e){s(e),w(0,Fe[e-1])}},Fe.map(Je)))))};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ke=v.a.create({container:{margin:10,flexDirection:"row",width:"50%"},btnNew:{marginHorizontal:10},input:{width:"80%"}}),Qe=function(e){var t=e.addNewTopic,n=o.a.useState(""),r=f()(n,2),a=r[0],c=r[1],i=o.a.useState(!0),u=f()(i,2),s=u[0],p=u[1],m=qe(qe({visible:s,cancel:function(){return p(!1)}},Me),{},{submit:function(){var e;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(Me.submit());case 3:return e=n.sent,t(e),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]],Promise)}});return o.a.createElement(l.Layout,{style:Ke.container},o.a.createElement(l.Button,{style:Ke.btnNew,status:"primary",size:"small",accessoryRight:k,onPress:function(){return p(!0)}},R.t("origin.new")),o.a.createElement(l.Input,{style:Ke.input,value:a,placeholder:R.t("origin.filter&Search"),accessoryRight:S,onChangeText:function(e){return c(e)}}),o.a.createElement(xe,m))};function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e={number:0,size:5},et={sort:"createdAt",descend:!0},tt=v.a.create({container:{margin:10},topBar:{flexDirection:"row",justifyContent:"space-between"}}),nt=function(){var e=o.a.useState([]),t=f()(e,2),n=t[0],r=t[1],a=o.a.useState($e),i=f()(a,2),u=i[0],s=i[1],p=o.a.useState(et),m=f()(p,2),g=m[0],b=(m[1],o.a.useState("en"==R.languages)),y=f()(b,2),h=y[0],O=y[1],v=[g.sort+" "+(g.descend?"descend":"increase")],E=function(e){var t,n;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.awrap(I.getPaging(Ze(Ze({},e),g)));case 3:t=a.sent,r(t.content),n={number:t.number,size:t.size,totalPages:t.totalPages,totalElements:t.totalElements},s(n),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),null,null,[[0,9]],Promise)};return Object(c.useEffect)((function(){E(u)}),[g]),o.a.createElement(l.Layout,{style:tt.container},o.a.createElement(l.Layout,{style:tt.topBar},o.a.createElement(Qe,{sortField:u.sort,sortType:u.descend,addNewTopic:function(e){var t=_.cloneDeep(n);t.unshift(e),r(t)}}),o.a.createElement(l.Toggle,{checked:h,onChange:function(e){R.changeLanguage(e?"en":"vi").then((function(){return O(e)}))}},h?"EN":"VI")),o.a.createElement(F,{tags:v}),o.a.createElement(Ye,{data:n,page:u,callBack:E}))},rt=v.a.create({container:{flex:1,flexDirection:"row"},menu:{height:"100%"},content:{flex:1},rightMenu:{backgroundColor:"red",width:"1%"}}),at=function(){var e=o.a.useState(new l.IndexPath(2)),t=f()(e,2),n=t[0],r=t[1],a=o.a.useState(150),i=f()(a,1)[0];Object(c.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(h.getTypes());case 3:e=t.sent,Object.keys(e).forEach((function(t){O[t].arrValue=e[t]})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)}()}),[]);return o.a.createElement(l.Layout,{style:rt.container},o.a.createElement(l.Layout,{style:{width:i,backgroundColor:"#f2f6ff"}},o.a.createElement(l.Menu,{style:rt.menu,selectedIndex:n,onSelect:function(e){return r(e)}},o.a.createElement(l.MenuItem,{title:"Extend menu",accessoryLeft:x}),o.a.createElement(l.MenuItem,{title:"Home",accessoryLeft:E}),o.a.createElement(l.MenuItem,{title:"Topic",accessoryLeft:j}),o.a.createElement(l.MenuItem,{title:"Assign",accessoryLeft:w}),o.a.createElement(l.MenuItem,{title:"Setting",accessoryLeft:P})),o.a.createElement(l.Text,{style:{textAlign:"center",margin:5}},"Version:5.19.22")),o.a.createElement(l.Layout,{style:rt.content},function(){switch(n.row){case 0:case 1:break;default:return o.a.createElement(nt,null)}}()))};t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.IconRegistry,{icons:s.EvaIconsPack}),o.a.createElement(l.ApplicationProvider,a()({},i,{theme:i.light}),o.a.createElement(u.a,null,o.a.createElement(at,null))))}},263:function(e,t,n){e.exports=n(906)}},[[263,1,2]]]);
//# sourceMappingURL=app.1db91b14.chunk.js.map