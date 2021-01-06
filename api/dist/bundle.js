!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("express-validator")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("@babel/runtime/helpers/toConsumableArray")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("bcryptjs")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("passport-jwt")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("redis")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/wrapNativeSuper")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("winston")},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(1),c=r.n(s),o=r(4),u=r.n(o),i=r(11),l=r.n(i),f=r(12),p=r.n(f),d=r(2),h=r.n(d),m={useNewUrlParser:!0,useUnifiedTopology:!0,useFindAndModify:!1,useCreateIndex:!0},g={connect_mongo:function(){return h.a.connect("mongodb+srv://zrik:Bongtoi1@blogs.5dzkz.mongodb.net/blogs?retryWrites=true&w=majority",m)}},v=r(5),y=r.n(v),w=r(3),b=r(6),x=r.n(b),k=r(7),_=r.n(k),X=new h.a.Schema({email:{type:String,unique:!0,trim:!0},hash:{type:String,required:!0}});X.pre("save",(function(e){var t=this;this.isModified("hash")||this.isNew?_.a.genSalt(10,(function(r,n){if(r)return e(r);_.a.hash(t.hash,n,(function(r,n){if(r)return e(r);t.hash=n,e()}))})):e()})),X.methods.compareHash=function(e,t){_.a.compare(e,this.hash,(function(e,r){if(e)return t(e);t(null,r)}))};var j=h.a.model("Account",X),O=new h.a.Schema({account:j.schema,username:{type:String,default:""},avatar_url:{type:String,default:"url://"},role:{type:Number,enum:[0,1,2],required:!0},bookmark_article:[{type:h.a.Schema.Types.ObjectId,ref:"Article"}]},{timestamps:!0}),S=h.a.model("User",O),q=r(13),C=r.n(q).a.createClient("18620","redis-18620.c244.us-east-1-2.ec2.cloud.redislabs.com",{no_ready_check:!0});C.auth("HeFHDTB9xIKo2RXcI6hlt78fhCBtAUho"),C.on("connect",(function(){console.log("redis is connected!")})),C.on("ready",(function(){console.log("Client connected to redis and ready to use...")})),C.on("error",(function(e){console.log(e.message)})),C.on("end",(function(){console.log("Client disconnected from redis")})),process.on("SIGINT",(function(){C.quit()}));var T=C,A={3e3:"Please enter a valid email",3001:"Please enter a valid password",1301:"Invalid Register Type",1302:"Invalid Login Type",1303:"User already exists",1304:"Register Error",2304:"Register success",1305:"Login Error",2305:"Login success",2100:"Data Found",1100:"Not Found",2101:"Refresh token success",1306:"Logout refresh token not found",1307:"Refresh token invalid",5e3:"Internal server error",1308:"Invalid category type",1309:"Category existed",2310:"Create category successful",1310:"Create category error",2311:"Update category successful",1311:"Update category error",1312:"Category not exist",2313:"Delete category successful",1313:"Delete category error",1314:"Invalid tag type",1315:"Tag existed",2316:"Create tag successful",1316:"Create tag error",2317:"Update tag successful",1317:"Update tag error",1318:"Tag not exist",2319:"Delete tag successful",1319:"Delete tag error",1320:"Invalid article type",1321:"Article title existed",2322:"Create article successful",1322:"Create article error",1323:"Article not exist",2324:"Update article successful",1324:"Update article error",2325:"Delete article successful",1325:"Delete article error",1326:"Invalid comment type",2327:"Create comment successful",1327:"Create comment error",1328:"Comment not exist",2329:"Update comment successful",1329:"Update comment error",2330:"Delete comment successful",1330:"Delete comment error"},I=r(14),R=r.n(I),E=r(15),D=r.n(E),U=r(16),B=r.n(U),P=r(8),L=r.n(P),N=r(17);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=L()(e);if(t){var a=L()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return B()(this,r)}}var M=function(e){D()(r,e);var t=z(r);function r(e,n,a){var s;return R()(this,r),(s=t.call(this)).statusCode=e,s.message=n,s.errorCode=a,s}return r}(r.n(N)()(Error)),F=function(e,t){var r=e.statusCode,n=e.message,a=e.errorCode;return t.status(r).json({success:!1,message:n,error_code:a})},H=0,G=1,K=2,J=200,W=201,Q=204,V=400,Y=401,Z=403,$=function(e){if(e&&e.authorization){var t=e.authorization.split(" ");if(t&&2===t.length)return x.a.verify(t[1],"XXXXXXXXXXXX")}return null},ee=function(e){if(e){var t=x.a.sign({_id:e._id,role:e.role},"XXXXXXXXXXXX",{expiresIn:"30m"});return"".concat("Bearer"," ").concat(t)}},te=function(e){if(e){var t=x.a.sign({_id:e._id,role:e.role},"XXXXXXXXXXXX",{expiresIn:"30d"});return T.SET(e._id+"",t,"EX",2592e3,(function(e){if(e)throw new Error(e)})),"".concat("Bearer"," ").concat(t)}},re=function(){var e=c()(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(" "),n=x.a.verify(r[1],"XXXXXXXXXXXX"),e.abrupt("return",new Promise((function(e,t){T.GET(n._id+"",(function(r,a){!r&&a?e(n):t(r)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ne(e){return ae.apply(this,arguments)}function ae(){return(ae=c()(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(t);case 3:return r=e.sent,e.next=6,S.findById(r._id);case 6:if(n=e.sent){e.next=9;break}throw new Error;case 9:return e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new M(V,A[1307],1307);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function se(e,t){var r={httpOnly:!0,expires:new Date(Date.now()+10944e5)};e.cookie("refreshToken",t,r)}var ce=r(19),oe={transports:[new ce.transports.Console]},ue=new ce.createLogger(oe),ie=ue;function le(e,t,r){ue.info(e.url),r()}var fe,pe,de=function(){var e=c()(a.a.mark((function e(t,r,n){var s,o,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1301],1301);case 5:return o=t.body,u=o.email,i=o.password,e.next=8,S.exists({"account.email":u});case 8:if(!e.sent){e.next=11;break}throw new M(V,A[1303],1303);case 11:return e.next=13,S.create({role:K,account:{email:u,hash:i}}).then(function(){var e=c()(a.a.mark((function e(t){var n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(t),s=te(t),se(r,s),e.abrupt("return",r.status(W).json({success:!0,message:A[2304],user:{username:t.username,avatar_url:t.avatar_url,bookmark_article:t.bookmark_article,role:t.role,_id:t._id,email:t.account.email},token:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw ie.error(e),new M(V,A[1304],1304)}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),n(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,r,n){return e.apply(this,arguments)}}(),he=function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1302],1302);case 5:return c=t.body,o=c.email,u=c.password,e.next=8,S.findOne({"account.email":o});case 8:if(i=e.sent){e.next=11;break}throw new M(Y,A[1305],1305);case 11:i.account.compareHash(u,(function(e,t){if(t&&!e){var n=ee(i),a=te(i);return se(r,a),r.status(J).json({success:!0,message:A[2305],user:{username:i.username,avatar_url:i.avatar_url,role:i.role,bookmark_article:i.bookmark_article,_id:i._id,email:i.account.email},token:n})}return r.status(Y).json({message:A[1305]})})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),n(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r,n){return e.apply(this,arguments)}}(),me=function(){var e=c()(a.a.mark((function e(t,r,n){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=t.cookies.refreshToken,e.next=4,ne(s);case 4:return c=e.sent,e.next=7,T.DEL(c._id+"");case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:r.sendStatus(Q);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r,n){return e.apply(this,arguments)}}(),ge=function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=t.cookies.refreshToken,e.next=4,ne(s);case 4:c=e.sent,o=ee(c),u=te(c),se(r,u),r.status(J).json({success:!0,message:A[2101],user:{username:c.username,avatar_url:c.avatar_url,role:c.role,bookmark_article:c.bookmark_article,_id:c._id,email:c.account.email},token:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n){return e.apply(this,arguments)}}(),ve={register:de,login:he,logout:me,getAll:function(){var e=c()(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{S.find({}).then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),refreshToken:ge},ye=r(9),we=r.n(ye),be=r(10),xe=r.n(be),ke={jwtFromRequest:(pe=null,fe&&fe.cookies&&(pe=fe.cookies.refreshToken),pe||xe.a.ExtractJwt.fromAuthHeaderAsBearerToken()),secretOrKey:"XXXXXXXXXXXX",algorithms:["HS256"]};we.a.use(new xe.a.Strategy(ke,(function(e,t){S.findOne({_id:e._id},(function(e,r){e&&t(e,!1),t(null,r||!1)}))})));var _e=we.a,Xe=function(e){return function(t,r,n){_e.authenticate("jwt",{session:!1},(function(t,a){return t||!a?r.status(Z).json({message:"forbidden"}):e.includes(a.role)?void n():r.status(Z).json({message:"forbidden"})}))(t,r,n)}},je=[Object(w.check)("email",A[3e3]).isEmail(),Object(w.check)("password",A[3001]).isLength({min:6})],Oe=u.a.Router();Oe.post("/register",y()(je),ve.register),Oe.post("/login",y()(je),ve.login),Oe.post("/refresh_token",ve.refreshToken),Oe.delete("/logout",ve.logout),Oe.get("/",Xe([H]),ve.getAll);var Se=Oe,qe=function(){var e=c()(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.exists(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Ce=(r(18),function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ|Đ/g,"d").replace(/ /g,"-").toLowerCase()}),Te=new h.a.Schema({author:{type:h.a.Schema.Types.ObjectId,ref:"User",required:!0},category:{type:h.a.Schema.Types.ObjectId,ref:"Category",required:!0},title:{type:String,required:!0},slug:{type:String,required:!0,unique:!0,lowercase:!0},avatar:{type:String},summary:{type:String,required:!0},content:{type:String,required:!0},bookmark_user:[{type:h.a.Schema.Types.ObjectId,ref:"User"}],published:{type:Boolean,required:!0,default:!0},comments:[{type:h.a.Schema.Types.ObjectId,ref:"Comment"}]},{timestamps:!0}),Ae=h.a.model("Article",Te),Ie={_getAll:function(){var e=c()(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Ae.find({}).populate("category").exec().then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_getDetail:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s={slug:t.params.slug},Ae.findOne(s).populate("author").populate("category").exec().then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_create:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1320],1320);case 5:return e.next=7,$(t.headers);case 7:return c=e.sent,o={author:c._id,title:t.body.title,slug:Ce(t.body.title),content:t.body.content,summary:t.body.summary,category:t.body.category},e.next=11,qe(Ae,{slug:o.slug});case 11:if(!e.sent){e.next=14;break}throw new M(V,A[1321],1321);case 14:Ae.create(o).then((function(e){return r.status(W).json({success:!0,message:A[2322],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1322],1322)})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),n(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_update:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1320],1320);case 5:return e.next=7,$(t.headers);case 7:c=e.sent,o={slug:t.params.slug,author:c._id},u={author_id:c._id,title:t.body.title,slug:Ce(t.body.title),summary:t.body.summary,content:t.body.content,category:t.body.category},Ae.findOneAndUpdate(o,u,{new:!0}).then((function(e){return r.status(J).json({success:!0,message:A[2324],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1324],1324)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_delete:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={slug:t.params.slug},e.next=4,qe(Ae,s);case 4:if(e.sent){e.next=7;break}throw new M(V,A[1323],1323);case 7:Ae.findByIdAndDelete(s).then((function(e){return r.status(J).json({success:!0,message:A[2325],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1325],1325)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r,n){return e.apply(this,arguments)}}()},Re=[Object(w.check)("title").notEmpty().isLength({min:10}),Object(w.check)("category").notEmpty().isMongoId(),Object(w.check)("content").notEmpty().isLength({min:10})],Ee=u.a.Router();Ee.get("/",Ie._getAll),Ee.get("/:slug",Ie._getDetail),Ee.post("/",[Xe([H,G])].concat(y()(Re)),Ie._create),Ee.put("/:slug",[Xe([H,G])].concat(y()(Re)),Ie._update),Ee.delete("/:slug",[Xe([H,G])],Ie._delete);var De=Ee,Ue=[Object(w.check)("title").notEmpty()],Be=new h.a.Schema({title:{type:String,unique:!0,required:!0},slug:{type:String,unique:!0,lowercase:!0},count_article:{type:Number,default:0},articles:[{type:h.a.Schema.Types.ObjectID,ref:"Article"}]}),Pe=h.a.model("Tag",Be),Le={_getAll:function(){var e=c()(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Pe.find({}).then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_getOne:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s={_id:t.params.id},Pe.find(s).then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_create:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((s=Object(w.validationResult)(t)).isEmpty()){e.next=4;break}throw ie.error(s),new M(V,A[1314],1314);case 4:return e.prev=4,c={title:t.body.title,slug:Ce(t.body.title)},o={slug:c.slug},e.next=9,qe(Pe,o);case 9:if(!e.sent){e.next=14;break}throw new M(V,A[1315],1315);case 14:Pe.create(c).then((function(e){return r.status(W).json({success:!0,message:A[2316],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1316],1316)}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),n(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_update:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={title:t.body.title,slug:Ce(t.body.title)},c={_id:t.params.id},e.next=5,qe(Pe,c);case 5:if(!e.sent){e.next=10;break}Pe.findOneAndUpdate(c,s,{new:!0}).then((function(e){return r.status(J).json({success:!0,message:A[2317],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1317],1317)})),e.next=11;break;case 10:throw new M(V,A[1318],1318);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_delete:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={_id:t.param.id},e.next=4,qe(Pe,s);case 4:if(!e.sent){e.next=9;break}Pe.findByIdAndDelete(s).then((function(e){return r.status(J).json({success:!0,message:A[2319],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1319],1319)})),e.next=10;break;case 9:throw new M(V,A[1318],1318);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),n(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r,n){return e.apply(this,arguments)}}()},Ne=u.a.Router();Ne.get("/",Le._getAll),Ne.get("/:id",Le._getOne),Ne.post("/",[Xe([H,G])].concat(y()(Ue)),Le._create),Ne.put("/:id",[Xe([H,G])].concat(y()(Ue)),Le._update),Ne.delete("/:id",[Xe([H,G])],Le._delete);var ze=Ne,Me=new h.a.Schema({title:{type:String,unique:!0,required:!0},slug:{type:String,unique:!0,lowercase:!0},count_article:{type:Number,default:0}},{timestamps:!0}),Fe=h.a.model("Category",Me),He={_getAll:function(){var e=c()(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Fe.find({}).then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_getOne:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s={_id:t.params.id},Fe.find(s).then((function(e){return r.status(J).json({success:!0,message:A[2100],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1100],1100)}))}catch(e){n(e)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),_create:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1308],1308);case 5:return c={title:t.body.title,slug:Ce(t.body.title)},o={slug:c.slug},e.next=9,qe(Fe,o);case 9:if(!e.sent){e.next=14;break}throw new M(V,A[1309],1309);case 14:Fe.create(c).then((function(e){return r.status(W).json({success:!0,message:A[2310],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1310],1310)}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),n(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_update:function(){var e=c()(a.a.mark((function e(t,r,n){var s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(s=Object(w.validationResult)(t)).isEmpty()){e.next=5;break}throw ie.error(s),new M(V,A[1308],1308);case 5:return c={title:t.body.title,slug:Ce(t.body.title)},o={_id:t.params.id},e.next=9,qe(Fe,o);case 9:if(!e.sent){e.next=14;break}Fe.findOneAndUpdate(o,c,{new:!0}).then((function(e){return r.status(J).json({success:!0,message:A[2311],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1311],1311)})),e.next=15;break;case 14:throw new M(V,A[1312],1312);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),n(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,r,n){return e.apply(this,arguments)}}(),_delete:function(){var e=c()(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={_id:t.param.id},e.next=4,qe(Fe,s);case 4:if(!e.sent){e.next=9;break}Fe.findByIdAndDelete(s).then((function(e){return r.status(J).json({success:!0,message:A[2313],data:e})})).catch((function(e){throw ie.error(e),new M(V,A[1313],1313)})),e.next=10;break;case 9:throw new M(V,A[1312],1312);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),n(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r,n){return e.apply(this,arguments)}}()},Ge=[Object(w.check)("title").notEmpty().isString()],Ke=u.a.Router();Ke.get("/",He._getAll),Ke.get("/:id",He._getOne),Ke.post("/",[Xe([H,G])].concat(y()(Ge)),He._create),Ke.put("/:id",[Xe([H,G])].concat(y()(Ge)),He._update),Ke.delete("/:id",[Xe([H,G])],He._delete);var Je=Ke,We=u.a.Router();We.use("/auth",Se),We.use("/article",De),We.use("/tag",ze),We.use("/category",Je);var Qe=We,Ve={origin:"dev"==="prod"?"http://127.0.0.1":"http://zrik.info",optionSuccessStatus:200,credentials:!0},Ye=function(){var e=c()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=u()()).use(u.a.json()),t.use(u.a.urlencoded({extended:!1})),t.use(p()()),t.use(l()(Ve)),t.use(_e.initialize()),t.use(le),t.use("/api/v1",Qe),e.next=10,g.connect_mongo().then((function(){console.log("connect database success!")})).catch((function(e){console.error(e)}));case 10:return t.use((function(e,t,r,n){if(500===e.statusCode)return r.status(500).send();F(e,r)})),e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ye();case 2:e.sent.listen("3000",(function(){console.log("server running with port ".concat("3000"))}));case 4:case"end":return e.stop()}}),e)})))()}]);