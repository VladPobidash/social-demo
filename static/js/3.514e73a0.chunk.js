(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{376:function(e,t,a){e.exports={mainProfileInfo:"ProfileInfo_mainProfileInfo__OPEME",contact:"ProfileInfo_contact__1N3gp",avatar:"ProfileInfo_avatar__3xuFq",mainDescription:"ProfileInfo_mainDescription__1zuzO",status:"ProfileInfo_status__2G3BZ",newPhoto:"ProfileInfo_newPhoto__30p-a",moreInfo:"ProfileInfo_moreInfo__8rEdC",btn:"ProfileInfo_btn__2WuXu"}},380:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c",btn:"MyPosts_btn__2fOso"}},381:function(e,t,a){e.exports={item:"Post_item__ihtu9",text:"Post_text__3_Vii",likes:"Post_likes__2o7Hq"}},382:function(e,t,a){e.exports={profile:"Profile_profile__3dzvr"}},385:function(e,t,a){"use strict";a.r(t);var n=a(25),o=a(26),l=a(35),r=a(34),s=a(0),i=a.n(s),c=a(118),u=a(376),m=a.n(u),f=a(81),p=function(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(c.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"---")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(u)},autoFocus:!0,value:u})))},d=a(131),E=a.n(d),b=a(29),v=a(180),h=a(57),P=a.n(h),_=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t,className:m.a.moreInfo},n&&i.a.createElement("div",{className:P.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"FullName")," ",Object(b.c)("Full name","fullName",[],b.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),Object(b.c)("","lookingForAJob",[],b.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: "),Object(b.c)("My professional skills","lookingForAJobDescription",[],b.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me: "),Object(b.c)("About me","aboutMe",[],b.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts ")," ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:m.a.contact},i.a.createElement("b",null,e,": ")," ",Object(b.c)(e,"contacts."+e,[],b.a))}))),i.a.createElement("div",null,i.a.createElement("button",{className:m.a.btn},"Save")))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:m.a.moreInfo},i.a.createElement("div",null,i.a.createElement("b",null,"FullName")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: ")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: ")," ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me: ")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts ")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),a&&i.a.createElement("div",null,i.a.createElement("button",{className:m.a.btn,onClick:n},"Edit")))},O=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:m.a.contact},i.a.createElement("b",null,t,": "),a)},k=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),d=Object(c.a)(u,2),b=d[0],v=d[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.mainProfileInfo},i.a.createElement("div",{className:m.a.avatar},i.a.createElement("img",{src:t.photos.large||E.a})),i.a.createElement("div",{className:m.a.mainDescription},i.a.createElement("div",{className:m.a.status},i.a.createElement(p,{status:a,updateStatus:n})),i.a.createElement("div",{className:m.a.newPhoto},o&&i.a.createElement("div",null,i.a.createElement("span",null,"Upload a new photo"),i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}))))),i.a.createElement("div",{className:m.a.profileData},b?i.a.createElement(_,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){v(!1)}))}}):i.a.createElement(g,{profile:t,isOwner:o,goToEditMode:function(){v(!0)}})))},j=a(119),N=a(43),S=a(380),y=a.n(S),I=a(381),w=a.n(I),M=function(e){return i.a.createElement("div",{className:w.a.item},i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}),i.a.createElement("div",{className:w.a.text},e.message),i.a.createElement("div",null,i.a.createElement("span",{className:w.a.likes},"like"),e.likesCount))},x=a(113),A=a(32),C=a(82),F=Object(C.a)(10),D=Object(v.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(x.a,{component:b.b,name:"newPostText",validate:[C.b,F],placeholder:"Post message"})),i.a.createElement("div",null,i.a.createElement("button",{className:y.a.btn},"Add Post")))})),T=i.a.memo((function(e){var t=Object(N.a)(e.posts).reverse().map((function(e){return i.a.createElement(M,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:y.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement("div",null,i.a.createElement(D,{onSubmit:function(t,a){a(Object(A.a)("postMessage")),e.addPost(t.newPostText)}})),i.a.createElement("div",{className:y.a.posts},t))})),U=a(11),J=Object(U.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(T),z=a(382),B=a.n(z),V=function(e){return i.a.createElement("div",{className:B.a.profile},i.a.createElement(k,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(J,null))},q=a(30),G=a(8),L=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(G.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,profileUpdateStatus:e.profilePage.profileUpdateStatus,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),q.g)(L)}}]);
//# sourceMappingURL=3.514e73a0.chunk.js.map