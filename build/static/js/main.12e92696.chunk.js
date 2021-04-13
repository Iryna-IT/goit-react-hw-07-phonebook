(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label_contact:"ContactForm_label_contact__2HU0c",input_contact:"ContactForm_input_contact__1wa3Y",form_contact:"ContactForm_form_contact__Qwzt8",btn_add:"ContactForm_btn_add__2o-Nz"}},19:function(t,e,n){t.exports={form_search:"Filter_form_search__2Wi6v",label_search:"Filter_label_search__D8RdX",input_search:"Filter_input_search__1bgKr"}},20:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1otrg",contact_item:"ContactList_contact_item__3WONi",btn_delete:"ContactList_btn_delete__68iwW"}},36:function(t,e,n){t.exports={app:"App_app__2aluA"}},69:function(t,e,n){"use strict";n.r(e);var a,c,r=n(0),o=n.n(r),s=n(15),i=n.n(s),u=n(6),l=n(17),b=n(2),d=n(35),p=n.n(d),j=n(13),f=n(3),h=n(4),m=Object(b.b)("items/fetchContactsRequest"),O=Object(b.b)("items/fetchContactsSuccess"),_=Object(b.b)("items/fetchContactsError"),C=Object(b.b)("items/addContactRequest"),v=Object(b.b)("items/addContactSuccess"),x=Object(b.b)("items/addContactError"),g=Object(b.b)("items/deleteContactRequest"),y=Object(b.b)("items/deleteContactSuccess"),k=Object(b.b)("items/deleteContactError"),w={items:Object(b.c)([],(a={},Object(h.a)(a,O,(function(t,e){return e.payload})),Object(h.a)(a,v,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(h.a)(a,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),loading:Object(b.c)(!1,(c={},Object(h.a)(c,m,(function(){return!0})),Object(h.a)(c,O,(function(){return!1})),Object(h.a)(c,_,(function(){return!1})),Object(h.a)(c,C,(function(){return!0})),Object(h.a)(c,v,(function(){return!1})),Object(h.a)(c,x,(function(){return!1})),Object(h.a)(c,g,(function(){return!0})),Object(h.a)(c,y,(function(){return!1})),Object(h.a)(c,k,(function(){return!1})),c)),error:Object(b.c)(null,{})},N={filterContacts:Object(b.b)("filter/filterContacts",(function(t){return{payload:t}}))},S=Object(b.c)("",Object(h.a)({},N.filterContacts,(function(t,e){return e.payload}))),F=Object(f.c)({items:w.items,filter:S,loading:w.loading,error:w.error}),L=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[p.a]),D=Object(b.a)({reducer:{contacts:F},middleware:L,devTools:!1}),E=n(7),A=n(8),X=n(10),T=n(9),U=n(11),q=n.n(U),P=n(18),R=n(14),z=n.n(R);z.a.defaults.baseURL="http://localhost:4040/";var W=function(){return function(){var t=Object(P.a)(q.a.mark((function t(e){var n,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,z.a.get("/contacts");case 4:n=t.sent,a=n.data,e(O(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(_(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},J=function(t){return function(){var e=Object(P.a)(q.a.mark((function e(n){var a,c,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t.name,number:t.number},n(C()),e.prev=2,e.next=5,z.a.post("/contacts",a);case 5:c=e.sent,r=c.data,n(v(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n(x(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},M=function(t){return function(){var e=Object(P.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,z.a.delete("/contacts/".concat(t));case 4:n(y(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(k(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},B=n(16),H=function(t){return t.contacts.items},I={getLoading:function(t){return t.loading},getExistContacts:H,getContactsListToShow:Object(B.a)([H,function(t){return t.contacts.filter}],(function(t,e){return""===e?t:t.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())}))}))},K=function(t,e){return console.log(t),!t.find((function(t){return t.name.toUpperCase()===e.toUpperCase()}))},Q=n(12),Y=n.n(Q),$=n(1),G=function(t){Object(X.a)(n,t);var e=Object(T.a)(n);function n(){var t;Object(E.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,o=r.onAdd,s=r.existContacts;if(!K(s,t.state.name))return alert("".concat(t.state.name," is already in contacts!"));o({name:a,number:c}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(A.a)(n,[{key:"render",value:function(){return Object($.jsxs)("form",{className:Y.a.form_contact,onSubmit:this.handleSubmit,children:[Object($.jsxs)("div",{children:[Object($.jsx)("label",{htmlFor:"name",className:Y.a.label_contact,children:"Name"}),Object($.jsx)("input",{type:"text",className:Y.a.input_contact,name:"name",value:this.state.name,placeholder:"Enter name",onChange:this.handleChange,required:!0})]}),Object($.jsxs)("div",{children:[Object($.jsx)("label",{htmlFor:"phone",className:Y.a.label_contact,children:"Phone"}),Object($.jsx)("input",{type:"tel",className:Y.a.input_contact,name:"number",value:this.state.number,placeholder:"Enter phone XXX-XX-XX",pattern:"^(\\d{3})-\\d{2}-\\d{2}$",onChange:this.handleChange,required:!0})]}),Object($.jsx)("button",{type:"submit",className:Y.a.btn_add,onSubmit:this.handleSubmit,children:"Add contact"})]})}}]),n}(r.Component);G.defaultProps={existContacts:[]};var V=Object(u.b)((function(t){return{existContacts:I.getExistContacts(t)}}),(function(t){return{onAdd:function(e){return t(J(e))}}}))(G),Z=function(t){return function(e){e(N.filterContacts(t))}},tt=n(19),et=n.n(tt),nt=function(t){Object(X.a)(n,t);var e=Object(T.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){var t=this.props.onSearch;return Object($.jsxs)("form",{className:et.a.form_search,children:[Object($.jsx)("label",{htmlFor:"filter",className:et.a.label_search,children:"Find contacts by name"}),Object($.jsx)("input",{type:"text",name:"filter",className:et.a.input_search,placeholder:"Enter the name",onChange:t})]})}}]),n}(r.Component),at=Object(u.b)(null,(function(t){return{onSearch:function(e){return t(Z(e.currentTarget.value))}}}))(nt),ct=n(20),rt=n.n(ct),ot=function(t){Object(X.a)(n,t);var e=Object(T.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props.existContacts,e=this.props.onDelete;return 0===t.length?Object($.jsx)("div",{children:"There are no contacts"}):Object($.jsx)("ul",{className:rt.a.contact_list,children:t.map((function(t){return Object($.jsx)(st,{id:t.id,name:t.name,number:t.number,onDelete:e},t.id)}))})}}]),n}(r.Component);ot.defaultProps={existContacts:[]};var st=function(t){Object(X.a)(n,t);var e=Object(T.a)(n);function n(){var t;Object(E.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){(0,t.props.onDelete)(e.target.parentNode.id)},t}return Object(A.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,a=t.number;return Object($.jsxs)("li",{className:rt.a.contact_item,id:e,children:[" ",n," : ",a,Object($.jsx)("button",{type:"button",className:rt.a.btn_delete,onClick:this.handleDelete,children:"Delete"})]})}}]),n}(r.Component);st.defaultProps={id:"",name:"",number:""};var it=Object(u.b)((function(t){return{existContacts:I.getContactsListToShow(t)}}),(function(t){return{fetchContacts:function(){return t(W())},onDelete:function(e){return t(M(e))}}}))(ot),ut=n(36),lt=n.n(ut),bt=function(t){Object(X.a)(n,t);var e=Object(T.a)(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object($.jsxs)("div",{className:lt.a.app,children:[Object($.jsx)("h1",{children:"Phonebook"}),Object($.jsx)(V,{}),Object($.jsx)("h2",{children:"Contacts"}),Object($.jsx)(at,{}),this.props.isLoadingContacts&&Object($.jsx)("h1",{children:"Loading..."}),Object($.jsx)(it,{})]})}}]),n}(r.Component),dt=Object(u.b)((function(t){return{isLoadingContacts:I.getLoading(t)}}),null)(bt);n(68);i.a.render(Object($.jsx)(o.a.StrictMode,{children:Object($.jsx)(u.a,{store:D,children:Object($.jsx)(dt,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.12e92696.chunk.js.map