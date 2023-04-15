(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{433:function(e,r,t){"use strict";var n=t(34),o=(t(163),t(4),t(108),t(127)),c=t.n(o),f=null;r.a={getUsers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=12;break}return e.prev=1,e.next=4,c.a.get("".concat("https://randomuser.me/api/","?results=56"));case 4:r=e.sent,f=r.data.results,e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Error fetching users:",e.t0.response||e.t0),new Error("Error fetching users from Random User API");case 12:return e.abrupt("return",f);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getUserById:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f){t.next=3;break}return t.next=3,r.getUsers();case 3:if(n=f.find((function(r){return r.login.uuid===e}))){t.next=7;break}return console.error("User not found by ID:",e),t.abrupt("return",null);case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()}}},468:function(e,r,t){"use strict";t.r(r);t(36);var n=t(34),o=(t(108),t(433)),c={data:function(){return{user:null}},computed:{formattedDateOfBirth:function(){if(this.user){return new Date(this.user.dob.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}return""}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$route.params.id,console.log(t),r.next=4,o.a.getUserById(t);case 4:e.user=r.sent;case 5:case"end":return r.stop()}}),r)})))()}},f=t(89),component=Object(f.a)(c,(function(){var e=this,r=e._self._c;return r("div",[r("h1",[e._v("Profile")]),e._v(" "),e.user?r("div",[r("img",{attrs:{src:e.user.picture.large,alt:"Profile picture"}}),e._v(" "),r("h2",[e._v(e._s(e.user.name.first)+" "+e._s(e.user.name.last))]),e._v(" "),r("p",[e._v(e._s(e.user.location.street.number)+" "+e._s(e.user.location.street.name))]),e._v(" "),r("p",[e._v(e._s(e.user.location.city)+", "+e._s(e.user.location.state)+" "+e._s(e.user.location.postcode))]),e._v(" "),r("p",[e._v("Email: "+e._s(e.user.email))]),e._v(" "),r("p",[e._v("Phone: "+e._s(e.user.phone))]),e._v(" "),r("p",[e._v("Date of Birth: "+e._s(e.formattedDateOfBirth))])]):r("div",[r("p",[e._v("Loading...")])])])}),[],!1,null,null,null);r.default=component.exports}}]);