(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{166:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),c=n.n(o),l=n(4),i=n(109),u=n(771),s=n(165),m=n(22),f=n.n(m),p=n(7),d=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"home-outline"}))},y=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"book-open-outline"}))},h=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"person-done-outline"}))},g=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"settings-outline"}))},E=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"menu-outline"}))},b=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"search-outline"}))},w=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"plus-outline"}))},O=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"arrow-back-outline"}))},S=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"arrow-forward-outline"}))},j=function(e){return c.a.createElement(l.Icon,a()({},e,{name:"close-outline"}))},v=n(5),x=n.n(v),P=n(6),k=n.n(P),T=n(9),I=n.n(T),C=n(10),D=n.n(C),L=n(8),B=n.n(L),M=n(37);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B()(e);if(t){var a=B()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return D()(this,n)}}!function(e){I()(n,e);var t=A(n);function n(){return x()(this,n),t.apply(this,arguments)}k()(n,[{key:"render",value:function(){return c.a.createElement(M.a,null,"HomeScreen")}}])}(o.Component);var R=n(12),z=n.n(R),N=n(47),V=function(e){var t=e.animationEnd,n=e.submit;return c.a.createElement(l.Layout,{style:H.popupBot},c.a.createElement(l.Button,{style:H.popupBotBtn,onPress:function(){t(),n()}},"Submit"),c.a.createElement(l.Button,{style:H.popupBotBtn,onPress:t},"Cancel"))},H=p.a.create({modal:{width:"50%"},backdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"},card:{flex:1,justifyContent:"space-between"},headerText:{margin:5,fontWeight:"bold",textAlign:"center",fontSize:30},popupBot:{flexDirection:"row",justifyContent:"space-evenly"},popupBotBtn:{margin:5}}),F=function(e){var t=e.visible,n=e.header,r=e.submit,a=e.cancel,o=e.body,i=null,u=function(){return i.zoomOut(500).then((function(e){return a()}))};return c.a.createElement(l.Modal,{style:H.modal,visible:t,backdropStyle:H.backdrop,onBackdropPress:u},c.a.createElement(N.a,{style:{flex:1},animation:"zoomIn",ref:function(e){return i=e}},c.a.createElement(l.Card,{style:H.card,header:function(){return c.a.createElement(l.Text,{style:H.headerText},n)},footer:function(){return c.a.createElement(V,{animationEnd:u,submit:r})}},o())))},W={educationMethod:{label:"Education method",placeholder:"Select education method",arrValue:["Formal","CLC","Link"]},semester:{label:"Semester",placeholder:"Select semester",arrValue:Array(3).fill().map((function(e,t){return(parseInt((new Date).getFullYear().toString().substr(2))+parseInt(t/3)).toString()+(t%3+1)}))},guideTeacher:{label:"Guide teacher",placeholder:"Select guide teacher"},majors:{label:"Majors",placeholder:"Select majors",arrValue:["Computer Science","Computer Engineering"]},topicCode:{label:"Topic code",placeholder:"Topic code"},topicName:{label:"Topic name",placeholder:"Topic name"},minStudentTake:{label:"Min Student",placeholder:"Select",arrValue:Array.from({length:5},(function(e,t){return t+1}))},maxStudentTake:{label:"Max Student",placeholder:"Select",arrValue:Array.from({length:5},(function(e,t){return t+1}))},students:{label:"Student",placeholder:"Select student"},mainTask:{label:"Main task",multiline:!0,numberOfLines:3},thesisTask:{label:"Thesis task",multiline:!0,numberOfLines:3},description:{label:"Description",multiline:!0,numberOfLines:5},name:{label:"Name",placeholder:"Type name"},email:{label:"Email",placeholder:"HCMUT email"},phone:{label:"Phone",placeholder:"Type phone"},degree:{label:"Degree",placeholder:"Select degree",arrValue:["Bachelor","Master","Doctor","Professor"]},subjectDepartment:{label:"Subject Department",placeholder:"Select subject department",arrValue:["Information System","Software Technology","Systems and Networks","Computer Science","Computer Engineering"]},major:{label:"Major",placeholder:"Select major",arrValue:["Computer Science","Computer Engineering"]},studentCode:{label:"Code",placeholder:"Type student code"}},_=n(14),G=n.n(_),J=function(e){e.value;var t=e.callBack,n=G()(e,["value","callBack"]),r=c.a.useState(!1),o=f()(r,2),i=o[0],u=o[1];return c.a.createElement(l.Input,a()({},n,{onChangeText:function(e){t(e),u(!i)}}))},U=function(e){return Array.from(e,(function(e){return c.a.createElement(l.SelectItem,{key:e,title:e})}))},Y=function(e){e.field;var t=e.callBack,n=G()(e,["field","callBack"]),r=c.a.useState(new l.IndexPath(n.arrValue.indexOf(n.value))),o=f()(r,2),i=o[0],u=o[1];return c.a.createElement(l.Select,a()({},n,{value:n.arrValue[i.row],selectedIndex:i.row>-1?i:null,onSelect:function(e){t(n.arrValue[e-1]),u(e)}}),U(n.arrValue))},q=function(e){e.field;var t=e.callBack,n=G()(e,["field","callBack"]),r=Array.from(n.value,(function(e){return new l.IndexPath(n.arrValue.indexOf(e))})).filter((function(e){return e.row>-1}));return c.a.createElement(l.Select,a()({},n,{value:n.value.join(", "),multiSelect:!0,selectedIndex:r,onSelect:function(e){return t(name,Array.from(e,(function(e){return n.arrValue[e.row]})))}}),U(n.arrValue))};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=p.a.create({container:{flex:1},row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10}}),Z=function(e){var t=function(t,n){return e[t]=n},n=function(n){return Q({value:e[n],callBack:function(e){return t(n,e)}},W[n])},r=function(n){return Q({field:n,value:e[n],callBack:function(e){return t(n,e)}},W[n])};return c.a.createElement(l.Layout,{style:X.container},c.a.createElement(l.Layout,{style:X.row},c.a.createElement(l.Layout,{style:X.left},c.a.createElement(J,n("name")),c.a.createElement(J,n("email")),c.a.createElement(J,n("phone"))),c.a.createElement(l.Layout,{style:X.right},c.a.createElement(Y,r("degree")),c.a.createElement(Y,r("subjectDepartment")))))},$={name:"",email:"",phone:"",degree_id:"",subject_department_id:""},ee={header:"Create new teacher",submit:function(){return console.log($)},body:function(){return Z($)}};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=p.a.create({container:{flex:1},row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10}}),ae=function(e){var t=function(t,n){return e[t]=n},n=function(n){return ne({value:e[n],callBack:function(e){return t(n,e)}},W[n])},r=function(n){return ne({field:n,value:e[n],callBack:function(e){return t(n,e)}},W[n])};return c.a.createElement(l.Layout,{style:re.container},c.a.createElement(l.Layout,{style:re.row},c.a.createElement(l.Layout,{style:re.left},c.a.createElement(J,n("name")),c.a.createElement(J,n("email")),c.a.createElement(J,n("phone"))),c.a.createElement(l.Layout,{style:re.right},c.a.createElement(J,n("studentCode")),c.a.createElement(Y,r("educationMethod")),c.a.createElement(Y,r("major")))))},oe={name:"",email:"",phone:"",educationMethodId:"",majorId:"",studentCode:""},ce={header:"Create new student",submit:function(){return console.log(oe)},body:function(){return ae(oe)}};function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=p.a.create({container:{flex:1},row:{flex:1,flexDirection:"row",justifyContent:"space-around"},left:{flex:1,marginRight:10},right:{flex:1,marginLeft:10},description:{}}),se=function(e){var t=c.a.useState(!1),n=f()(t,2),r=n[0],o=n[1],i=c.a.useState(!0),u=f()(i,2),s=u[0],m=u[1],p=ie({visible:r,cancel:function(){return o(!1)}},ee),d=ie({visible:s,cancel:function(){return m(!1)}},ce),y=function(t,n){return e[t]=n},h=function(t){return ie({field:t,value:e[t],callBack:function(e){return y(t,e)}},W[t])},g=function(t){return ie({value:e[t],callBack:function(e){return y(t,e)}},W[t])},E={appearance:"ghost",size:"small",accessoryRight:w};return c.a.createElement(l.Layout,{style:ue.container},c.a.createElement(F,p),c.a.createElement(F,d),c.a.createElement(l.Layout,{style:ue.row},c.a.createElement(l.Layout,{style:ue.left},c.a.createElement(Y,h("educationMethod")),c.a.createElement(Y,h("semester")),c.a.createElement(J,a()({},g("guideTeacher"),{accessoryRight:function(){return c.a.createElement(l.Button,a()({},E,{onPress:function(){return o(!0)}}))}})),c.a.createElement(q,h("majors"))),c.a.createElement(l.Layout,{style:ue.right},c.a.createElement(J,g("topicCode")),c.a.createElement(J,g("topicName")),c.a.createElement(l.Layout,{style:{flexDirection:"row"}},c.a.createElement(Y,a()({},h("minStudentTake"),{style:ue.left})),c.a.createElement(Y,a()({},h("maxStudentTake"),{style:ue.right}))),c.a.createElement(J,a()({},g("students"),{accessoryRight:function(){return c.a.createElement(l.Button,a()({},E,{onPress:function(){return o(!0)}}))}})))),c.a.createElement(l.Layout,{style:ue.row},c.a.createElement(J,a()({},g("mainTask"),{style:ue.left})),c.a.createElement(J,a()({},g("thesisTask"),{style:ue.right}))),c.a.createElement(J,a()({},g("description"),{style:ue.description})))},me={topicCode:"",topicName:"",guideTeacher:"",semester:"",majors:[],educationMethod:"",maxStudentTake:"",minStudentTake:"",description:"",mainTask:"",thesisTask:"",node:"",students:[]},fe={header:"Create topic",submit:function(){return console.log(me)},body:function(){return se(me)}};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var de=p.a.create({container:{margin:10,flexDirection:"row",width:"50%"},btnNew:{marginHorizontal:10},input:{width:"80%"}}),ye=function(e){e.callBack;var t=c.a.useState(""),n=f()(t,2),r=n[0],a=n[1],o=c.a.useState(!0),i=f()(o,2),u=i[0],s=i[1],m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({visible:u,cancel:function(){return s(!1)}},fe);return c.a.createElement(l.Layout,{style:de.container},c.a.createElement(l.Button,{style:de.btnNew,status:"primary",size:"small",accessoryRight:w,onPress:function(){return s(!0)}},"NEW"),c.a.createElement(l.Input,{style:de.input,value:r,placeholder:"Filter and Search",accessoryRight:b,onChangeText:function(e){return a(e)}}),c.a.createElement(F,m))},he=p.a.create({container:{flexDirection:"row"},tag:{marginHorizontal:2}}),ge=function(e){var t=e.tags;return c.a.createElement(l.List,{horizontal:!0,data:t,renderItem:function(e){e.index;var t=e.item;return c.a.createElement(l.Button,{style:he.tag,status:"info",size:"tiny",appearance:"outline",accessoryRight:j},t)}})},Ee=n(164),be=n.n(Ee),we=p.a.create({topicRow:{flexDirection:"row",justifyContent:"space-between"},column:{margin:3},columnHeader:{fontSize:30},index:{width:30,textAlign:"center"},code:{width:80,textAlign:"center"},semester:{width:100,textAlign:"center"},majors:{width:180},educationMethod:{width:110,textAlign:"center"},topicName:{width:300},guideTeacher:{width:200},students:{width:200}}),Oe={topicCode:{title:"Code",hide:!1,style:[we.column,we.code]},semester:{title:"Semester",hide:!1,style:[we.column,we.semester]},majors:{title:"Majors",hide:!1,style:[we.column,we.majors]},educationMethod:{title:"Edu Method",hide:!1,style:[we.column,we.educationMethod]},topicName:{title:"Topic Name",hide:!1,style:[we.column,we.topicName]},guideTeacher:{title:"Guide Teacher",hide:!1,style:[we.column,we.guideTeacher]},students:{title:"Students",hide:!1,style:[we.column,we.students]}};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.props,n=c.a.useState(!1),r=f()(n,2),a=r[0],o=r[1],i=c.a.useState(be.a.cloneDeep(t.setting)),u=f()(i,2),s=u[0],m=(u[1],function(){return o(!a)});return c.a.createElement(l.Card,{header:function(){return c.a.createElement(l.Text,{style:ke.settingPopupHeadText},"Topic Column View Settings")},footer:function(){return c.a.createElement(xe,{props:je(je({},t),{},{newSetting:s,refreshSettingPopup:m})})}},c.a.createElement(l.List,{horizontal:!0,data:Object.keys(s),renderItem:function(e){var t=e.item;return c.a.createElement(l.CheckBox,{checked:!s[t].hide,onChange:function(e){s[t].hide=!e,m()}},s[t].title)}}))},xe=function(e){var t=e.props;return c.a.createElement(l.Layout,{style:ke.settingPopupBot},c.a.createElement(Pe,{props:{text:"Default",onPress:function(){t.setSetting(Oe),t.settingAnimationEnd()}}}),c.a.createElement(Pe,{props:{text:"Select all",onPress:function(){Object.values(t.newSetting).forEach((function(e){return e.hide=!1})),t.refreshSettingPopup()}}}),c.a.createElement(Pe,{props:{text:"Select none",onPress:function(){Object.values(t.newSetting).forEach((function(e){return e.hide=!0})),t.refreshSettingPopup()}}}),c.a.createElement(Pe,{props:{text:"Apply",onPress:function(){t.setSetting(t.newSetting),t.settingAnimationEnd()}}}),c.a.createElement(Pe,{props:{text:"Cancel",onPress:t.settingAnimationEnd}}))},Pe=function(e){var t=e.props;return c.a.createElement(l.Button,{style:ke.settingPopupBotBtn,size:"small",appearance:"ghost",onPress:t.onPress},t.text)},ke=p.a.create({backdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"},settingPopupHeadText:{margin:5,fontWeight:"bold"},settingPopupBot:{flexDirection:"row",justifyContent:"space-evenly"},settingPopupBotBtn:{margin:5}}),Te=function(e){var t=e.props,n=c.a.useState(!1),r=f()(n,2),a=r[0],o=r[1],i=null,u=function(){return i.zoomOut(500).then((function(e){return o(!1)}))};return c.a.createElement(l.Layout,{style:we.topicRow},c.a.createElement(l.Button,{style:we.index,status:"info",size:"tiny",appearance:"ghost",accessoryRight:g,onPress:function(){return o(!0)}}),c.a.createElement(l.List,{horizontal:!0,data:Object.values(t.setting),renderItem:function(e){var t=e.item;return t.hide?null:c.a.createElement(l.MenuItem,{style:t.style.concat(we.columnHeader),title:t.title})}}),c.a.createElement(l.Modal,{visible:a,backdropStyle:ke.backdrop,onBackdropPress:u},c.a.createElement(N.a,{animation:"zoomIn",ref:function(e){return i=e}},c.a.createElement(ve,{props:je(je({},t),{},{settingAnimationEnd:u})}))))},Ie=function(e){var t=e.index,n=e.topic,r=e.setting;return c.a.createElement(l.Layout,{style:we.topicRow},c.a.createElement(l.MenuItem,{style:we.index,title:t+1}),c.a.createElement(l.List,{horizontal:!0,data:Object.keys(r),renderItem:function(e){var t=e.item;return r[t].hide?null:"string"==typeof n[t]?c.a.createElement(l.MenuItem,{style:r[t].style,title:n[t]}):c.a.createElement(l.List,{style:r[t].style,data:n[t],renderItem:function(e){e.index;var t=e.item;return c.a.createElement(l.MenuItem,{title:t})}})}}))},Ce=function(e){var t=e.props;return c.a.createElement(l.List,{data:t.data,ItemSeparatorComponent:l.Divider,renderItem:function(e){var n=e.index,r=e.item;return c.a.createElement(Ie,{index:n,topic:r,setting:t.setting})}})},De=function(e){var t=e.data,n=c.a.useState(Oe),r=f()(n,2),a=r[0],o=r[1];return c.a.createElement(l.Layout,null,c.a.createElement(Te,{props:{setting:a,setSetting:o}}),c.a.createElement(l.Divider,null),c.a.createElement(Ce,{props:{setting:a,data:t}}))},Le=n(11),Be=[25,50,100],Me=p.a.create({container:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:"5%"},page:{flexDirection:"row",textAlign:"center",justifyContent:"center",alignItems:"center"},record:{flexDirection:"row",alignItems:"center"},select:{marginLeft:5,width:100}}),Ae=function(e){var t=e.total,n=e.currentPage,r=e.totalPage,a=c.a.useState(new l.IndexPath(0)),o=f()(a,2),i=o[0],u=o[1],s=Be[i.row];return c.a.createElement(Le.a,{style:Me.container},c.a.createElement(l.Text,null,"Total: ",t),c.a.createElement(Le.a,{style:Me.page},c.a.createElement(l.Button,{status:"primary",appearance:"ghost",accessoryLeft:O}),c.a.createElement(l.Text,null,"Page:",n,"/",r),c.a.createElement(l.Button,{status:"primary",appearance:"ghost",accessoryRight:S})),c.a.createElement(Le.a,{style:Me.record},c.a.createElement(l.Text,null,"Record"),c.a.createElement(l.Select,{style:Me.select,size:"small",value:s,selectedIndex:i,onSelect:function(e){return u(e)}},Be.map((function(e){return c.a.createElement(l.SelectItem,{key:e,title:e})})))))},Re={topic:new Array(3).fill({topicCode:"123",topicName:"Name of topic",guideTeacher:"Nguyen Thi Ai",semester:"202",majors:["Computer Science","Computer Engineering"],educationMethod:"Formal",maxStudentTake:3,minStudentTake:1,description:"description",mainTask:"To do something",thesisTask:"Todo something when thesis",node:"note",students:["Nguyen Duc Anh Tai","Tai Nguyen Duc Anh"]})},ze=function(){return Re.topic},Ne=p.a.create({container:{margin:10}}),Ve=function(){var e=c.a.useState("TopicCode"),t=f()(e,2),n=t[0],r=(t[1],c.a.useState("Asc")),a=f()(r,2),o=a[0],i=(a[1],c.a.useState(ze)),u=f()(i,2),s=u[0],m=u[1],p=[n+"-"+o];return c.a.createElement(l.Layout,{style:Ne.container},c.a.createElement(ye,{sortField:n,sortType:o,callBack:function(){return m(ze())}}),c.a.createElement(ge,{tags:p}),c.a.createElement(De,{data:s}),c.a.createElement(Ae,{total:s.length,currentPage:1,totalPage:2}))},He=p.a.create({container:{flex:1,flexDirection:"row"},menu:{height:"100%"},content:{flex:1},rightMenu:{backgroundColor:"red",width:"1%"}}),Fe=function(){var e=c.a.useState(new l.IndexPath(2)),t=f()(e,2),n=t[0],r=t[1],a=c.a.useState(150),o=f()(a,2),i=o[0];o[1],new Date;return c.a.createElement(l.Layout,{style:He.container},c.a.createElement(l.Layout,{style:{width:i,backgroundColor:"#f2f6ff"}},c.a.createElement(l.Menu,{style:He.menu,selectedIndex:n,onSelect:function(e){return r(e)}},c.a.createElement(l.MenuItem,{title:"Extend menu",accessoryLeft:E}),c.a.createElement(l.MenuItem,{title:"Home",accessoryLeft:d}),c.a.createElement(l.MenuItem,{title:"Topic",accessoryLeft:y}),c.a.createElement(l.MenuItem,{title:"Assign",accessoryLeft:h}),c.a.createElement(l.MenuItem,{title:"Setting",accessoryLeft:g})),c.a.createElement(l.Text,{style:{textAlign:"center",margin:5}},"Version:1.26.00")),c.a.createElement(l.Layout,{style:He.content},function(){switch(n.row){case 0:break;default:case 2:return c.a.createElement(Ve,null)}}()))};t.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.IconRegistry,{icons:s.EvaIconsPack}),c.a.createElement(l.ApplicationProvider,a()({},i,{theme:i.light}),c.a.createElement(u.a,null,c.a.createElement(Fe,null))))}},167:function(e,t,n){e.exports=n(768)}},[[167,1,2]]]);
//# sourceMappingURL=app.b0cbc3f7.chunk.js.map