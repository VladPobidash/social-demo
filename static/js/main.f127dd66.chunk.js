(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n(122),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"95051eb1-1887-4152-ae56-e1e4bdb468bb"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},o={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return v}));var a=n(6),r=n.n(a),c=n(15),s=n(43),o=n(9),i=n(10),u=n(32),l={posts:[{id:1,message:"It is my first post",likesCount:12},{id:2,message:"I like to write posts in React! It is so cool!",likesCount:11}],profile:null,status:""},d=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(f(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(m(c)),t.next=10;break;case 8:return n(Object(u.b)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}}},12:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",friends:"Navbar_friends__3-QW_"}},131:function(e,t,n){e.exports=n.p+"static/media/user.217a36f8.png"},162:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(43),r=n(9),c={messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"It is cool! I am happy to do this app."},{id:4,message:"Yo, nice!"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Sergey"},{id:3,name:"Ivan"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{i:6,message:n}])});default:return e}}},185:function(e,t,n){e.exports=n.p+"static/media/preloader.a54dc253.svg"},186:function(e,t,n){e.exports={preloader:"preloader_preloader__24PRn"}},187:function(e,t){e.exports="data:image/png;base64,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"},191:function(e,t,n){e.exports={body:"Games_body__34wsW"}},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(25),r=n(26),c=n(35),s=n(34),o=n(0),i=n.n(o),u=n(30),l=n(11),d=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(s.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),o}(i.a.Component);return Object(l.b)(d)(t)}},218:function(e,t,n){e.exports=n(373)},223:function(e,t,n){},224:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var a=n(64),r=n(0),c=n.n(r),s=n(57),o=n.n(s),i=n(113),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,s=n&&a;return c.a.createElement("div",{className:o.a.formControl+" "+(s?o.a.error:"")},c.a.createElement("div",null,r),s&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,n)))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r))," ",s)}},31:function(e,t,n){e.exports={main:"users_main__3rVSN",user:"users_user__35VOC",avatar:"users_avatar__gOvd9",info:"users_info__1ckiW",userPhoto:"users_userPhoto__2Bfxq",btn:"users_btn__3GN7P"}},37:function(e,t,n){e.exports={body:"Tetris_body__2fk4R",T:"Tetris_T__3cQRO",E:"Tetris_E__24gtI",R:"Tetris_R__3PZlq",I:"Tetris_I__3WbCM",S:"Tetris_S__3wHZi"}},373:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(65),s=n.n(c);n(223),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(25),i=n(26),u=n(35),l=n(34),d=(n(224),n(12)),f=n.n(d),m=n(13),p=n(11),g=n(48),h=n.n(g),v=function(e){return r.a.createElement("div",{className:h.a.friend},r.a.createElement("div",{className:h.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",null,e.name))},E=function(e){var t=e.friends.map((function(e){return r.a.createElement(v,{key:e.id,avatar:e.avatar,name:e.name,id:e.id})}));return r.a.createElement("div",{className:h.a.friends},r.a.createElement("div",{className:h.a.friendsItems},t))},S=(Object(p.b)((function(e){return{friends:e.sidebar.friends}}),(function(){return{}}))(E),function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.active)},r.a.createElement(m.c,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/users",activeClassName:f.a.activeLink},"Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/notes",activeClassName:f.a.activeLink},"Notes")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/games",activeClassName:f.a.activeLink},"Games")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(m.c,{to:"/settings",activeClassName:f.a.activeLink},"Settings")))}),b=n(30),w=(n(229),function(e){return r.a.createElement("div",null,"Music")}),A=(n(230),function(e){return r.a.createElement("div",null,"Settings")}),O=n(6),_=n.n(O),P=n(15),C=n(43),y=n(9),T=n(10),N=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(y.a)({},e,{},a):e}))},j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},k=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},R=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},U=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},x=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PRGRESS",isFetching:e,userId:t}},L=function(){var e=Object(P.a)(_.a.mark((function e(t,n,a,r){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(y.a)({},e,{users:N(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(y.a)({},e,{users:N(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(y.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(y.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(y.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(y.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PRGRESS":return Object(y.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},M=n(64),z=n(31),D=n.n(z),G=n(66),B=n(118),W=n(49),V=n.n(W),Y=n(184),H=n.n(Y),K=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/i),m=Object(a.useState)(1),p=Object(B.a)(m,2),g=p[0],h=p[1],v=(g-1)*i+1,E=g*i;return r.a.createElement("div",{className:V.a.paginator},g>1&&r.a.createElement("button",{className:V.a.btn,onClick:function(){h(g-1)}},"Prew"),l.filter((function(e){return e>=v&&e<=E})).map((function(e){return r.a.createElement("span",{className:H()(Object(G.a)({},V.a.selectedPage,c===e),V.a.pageNumber),key:e,onClick:function(t){s(e)}},e)})),f>g&&r.a.createElement("button",{className:V.a.btn,onClick:function(){h(g+1)}},"Next"))},Q=n(131),J=n.n(Q),Z=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return r.a.createElement("div",null,r.a.createElement("div",{className:D.a.user},r.a.createElement("div",{className:D.a.avatar},r.a.createElement(m.c,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:J.a,className:D.a.userPhoto}))),r.a.createElement("div",{className:D.a.info},r.a.createElement("div",null,r.a.createElement("strong",null,t.name)),r.a.createElement("div",null,t.status)),r.a.createElement("div",null,t.followed?r.a.createElement("button",{className:D.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{className:D.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))))},X=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,s=e.users,o=Object(M.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",{className:D.a.main},r.a.createElement(K,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,s.map((function(e){return r.a.createElement(Z,{user:e,followingInProgress:o.followingInProgress,key:e.id,unfollow:o.unfollow,follow:o.follow})}))))},q=n(81),$=n(8),ee=(n(192),function(e){return e.usersPage.users}),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(q.a,null):null,r.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),oe=Object($.d)(Object(p.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:ae(e),isFetching:re(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(P.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,T.d.follow.bind(T.d),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,T.d.unfollow.bind(T.d),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:R,toggleFollowingInProgress:x,getUsers:function(e,t){return function(){var n=Object(P.a)(_.a.mark((function n(a){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(U(!0)),a(R(e)),n.next=4,T.d.getUsers(e,t);case 4:r=n.sent,a(U(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),ie=n(86),ue=n.n(ie),le=n(187),de=n.n(le),fe=function(e){return r.a.createElement("header",{className:ue.a.header},r.a.createElement("img",{src:de.a}),r.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{className:ue.a.btn,onClick:e.logout},"Log out")):r.a.createElement(m.c,{to:"/Login"},"Login")))},me=n(32),pe="samurai-network/auth/SET_USER_DATA",ge={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},he=function(e,t,n,a){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:a}}},ve=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Ee=function(){return function(){var e=Object(P.a)(_.a.mark((function e(t){var n,a,r,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.login,s=a.email,t(he(r,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){return function(){var e=Object(P.a)(_.a.mark((function e(t){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(ve(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:case"GET_CAPTCHA_URL_SUCCESS":return Object(y.a)({},e,{},t.payload);default:return e}},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(fe,this.props)}}]),n}(r.a.Component),Ae=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId}}),{logout:function(){return function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),Oe=n(180),_e=n(29),Pe=n(82),Ce=n(57),ye=n.n(Ce),Te=Object(Oe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(_e.c)("Email","email",[Pe.b],_e.a),Object(_e.c)("Password","password",[Pe.b],_e.a,{type:"password"}),Object(_e.c)(null,"rememberMe",[],_e.a,{type:"checkbox"},"Remember me"),a&&r.a.createElement("img",{src:a}),a&&Object(_e.c)("Symbols from image","captcha",[Pe.b],_e.a),n&&r.a.createElement("div",{className:ye.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ne=Object(p.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(P.a)(_.a.mark((function r(c){var s,o;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,T.a.login(e,t,n,a);case 2:0===(s=r.sent).data.resultCode?c(Ee()):(10===s.data.resultCode&&c(Se()),o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(me.b)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),je={initialized:!1,email:null,login:null,isAuth:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(y.a)({},e,{initialized:!0});default:return e}},Ie=n(119),Re=n(162),Ue={friends:[{id:1,avatar:"https://www.blexar.com/avatar.png",name:"Dimych"},{id:2,avatar:"https://www.w3schools.com/howto/img_avatar.png",name:"Sergey"},{id:3,avatar:"https://www.w3schools.com/w3images/avatar6.png",name:"Ivan"}]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;arguments.length>1&&arguments[1];return e},Le=n(189),Fe=n(181),Me=n(190),ze=n.n(Me),De=Object($.c)({profilePage:Ie.b,dialogsPage:Re.a,sidebar:xe,usersPage:F,auth:be,form:Fe.a,app:ke}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ze.a,Be=Object($.e)(De,Ge(Object($.a)(Le.a)));window.__store__=Be;var We=Be,Ve=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Ye=n(191),He=n.n(Ye),Ke=n(37),Qe=n.n(Ke),Je=function(){function e(){Object(o.a)(this,e),this.score=0,this.lines=0,this.level=0,this.playfield=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],this.activePiece={x:0,y:0,blocks:[[0,1,0],[1,1,1],[0,0,0]]}}return Object(i.a)(e,[{key:"movePieceLeft",value:function(){this.activePiece.x-=1,this.hasCollision()&&(this.activePiece.x+=1)}},{key:"movePieceRight",value:function(){this.activePiece.x+=1,this.hasCollision()&&(this.activePiece.x-=1)}},{key:"movePieceDown",value:function(){this.activePiece.y+=1,this.hasCollision()&&(this.activePiece.y-=1,this.lockPiece())}},{key:"rotatePiece",value:function(){this.rotateBlocks(),this.hasCollision()&&this.rotateBlocks(!1)}},{key:"rotateBlocks",value:function(){for(var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.activePiece.blocks,n=t.length,a=Math.floor(n/2),r=n-1,c=0;c<a;c++)for(var s=c;s<r-c;s++){var o=t[c][s];e?(t[c][s]=t[r-s][c],t[r-s][c]=t[r-c][r-s],t[r-c][r-s]=t[s][r-c],t[s][r-c]=o):(t[c][s]=t[s][r-c],t[s][r-c]=t[r-c][r-s],t[r-c][r-s]=t[r-s][c],t[r-s][c]=o)}}},{key:"hasCollision",value:function(){for(var e=this.activePiece,t=e.y,n=e.x,a=e.blocks,r=0;r<a.length;r++)for(var c=0;c<a[r].length;c++)if(a[r][c]&&(void 0===this.playfield[t+r]||void 0===this.playfield[t+r][n+c]||this.playfield[t+r][n+c]))return!0;return!1}},{key:"lockPiece",value:function(){for(var e=this.activePiece,t=e.y,n=e.x,a=e.blocks,r=0;r<a.length;r++)for(var c=0;c<a[r].length;c++)a[r][c]&&(this.playfield[t+r][n+c]=a[r][c])}}]),e}(),Ze=function(){var e=new Je;console.log(e),window.game=e},Xe=function(){return r.a.createElement("div",{className:Qe.a.body},r.a.createElement("script",{src:Ze()}),r.a.createElement("h1",null,r.a.createElement("span",{className:Qe.a.T},"T"),r.a.createElement("span",{className:Qe.a.E},"E"),r.a.createElement("span",{className:Qe.a.T},"T"),r.a.createElement("span",{className:Qe.a.R},"R"),r.a.createElement("span",{className:Qe.a.I},"I"),r.a.createElement("span",{className:Qe.a.S},"S")))},qe=function(e){return r.a.createElement("div",{className:He.a.body},r.a.createElement(Xe,null))},$e=r.a.lazy((function(){return n.e(4).then(n.bind(null,387))})),et=r.a.lazy((function(){return n.e(3).then(n.bind(null,385))})),tt=r.a.lazy((function(){return Promise.all([n.e(6),n.e(5)]).then(n.bind(null,384))})),nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e,t){alert("Some errors ocrured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ae,null),r.a.createElement(S,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(){return r.a.createElement(b.a,{to:"/profile"})}}),r.a.createElement(b.b,{path:"/profile/:userId?",render:Ve(et)}),r.a.createElement(b.b,{path:"/dialogs",render:Ve($e)}),r.a.createElement(b.b,{path:"/users",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(b.b,{path:"/notes",render:Ve(tt)}),r.a.createElement(b.b,{path:"/games",component:qe}),r.a.createElement(b.b,{path:"/music",component:w}),r.a.createElement(b.b,{path:"/settings",component:A}),r.a.createElement(b.b,{path:"/Login",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(b.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))):r.a.createElement(q.a,null)}}]),n}(r.a.Component),at=Object($.d)(b.g,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ee());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(nt),rt=function(e){return r.a.createElement(m.b,null,r.a.createElement(p.a,{store:We},r.a.createElement(at,null)))};s.a.render(r.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,n){e.exports={friendsItems:"Friends_friendsItems__3kMf2",friend:"Friends_friend__2A_70",avatar:"Friends_avatar__23sQC"}},49:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki",btn:"Paginator_btn__C1fmc"}},57:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},81:function(e,t,n){"use strict";var a=n(185),r=n.n(a),c=n(186),s=n.n(c),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement("div",{className:s.a.preloader},i.a.createElement("img",{src:r.a}))}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},86:function(e,t,n){e.exports={header:"Header_header__1VCKf",btn:"Header_btn__25p7W",loginBlock:"Header_loginBlock__6mma5"}}},[[218,1,2]]]);
//# sourceMappingURL=main.f127dd66.chunk.js.map