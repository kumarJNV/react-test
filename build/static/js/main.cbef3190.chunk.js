(this["webpackJsonpsmarsoteam-react"]=this["webpackJsonpsmarsoteam-react"]||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){e.exports=t.p+"static/media/tedd.36c70af6.png"},24:function(e,a,t){e.exports=t.p+"static/media/mega.d1b3b758.png"},25:function(e,a,t){e.exports=t.p+"static/media/little.615ba1ae.png"},34:function(e,a,t){e.exports=t.p+"static/media/dog.fba44d7a.png"},45:function(e,a,t){e.exports=t.p+"static/media/smarso_logo.a7504baf.png"},48:function(e,a,t){e.exports=t.p+"static/media/teddy.50124c84.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/slider1.8275ca74.jfif"},50:function(e,a,t){e.exports=t.p+"static/media/slider2.b34b04f0.jfif"},51:function(e,a,t){e.exports=t.p+"static/media/slider3.5f7a2f17.jfif"},56:function(e,a,t){e.exports=t.p+"static/media/desc.1c91d2a7.jpeg"},57:function(e,a,t){e.exports=t(94)},62:function(e,a,t){},72:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(28),r=t.n(c),i=(t(62),t(5)),s=t(6),m=t(8),o=t(7),d=(t(18),t(45)),u=t.n(d),E=t(31),p=t(32),v=t(22),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"scrollHome",value:function(e){if(!e.target.classList.contains("active"))for(var a=document.getElementById("header-nav").getElementsByClassName("nav-link"),t=0;t<a.length;t++)a[t].classList.remove("active"),e.target.classList.add("active");window.scrollTo({top:0,behavior:"smooth"})}},{key:"scrollAbout",value:function(e){if(!e.target.classList.contains("active"))for(var a=document.getElementById("header-nav").getElementsByClassName("nav-link"),t=0;t<a.length;t++)a[t].classList.remove("active"),e.target.classList.add("active");document.querySelector(".about-section").scrollIntoView({block:"center",behavior:"smooth"})}},{key:"scrollSkills",value:function(e){if(!e.target.classList.contains("active"))for(var a=document.getElementById("header-nav").getElementsByClassName("nav-link"),t=0;t<a.length;t++)a[t].classList.remove("active"),e.target.classList.add("active");document.querySelector(".skill-section").scrollIntoView({block:"center",behavior:"smooth"})}},{key:"scrollPortfolio",value:function(e){if(!e.target.classList.contains("active"))for(var a=document.getElementById("header-nav").getElementsByClassName("nav-link"),t=0;t<a.length;t++)a[t].classList.remove("active"),e.target.classList.add("active");document.querySelector(".portfolio-section").scrollIntoView({block:"center",behavior:"smooth"})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid header-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0"},n.a.createElement("header",{className:"header"},n.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"",variant:"light"},n.a.createElement(E.a,{className:"right-gap"}),n.a.createElement(p.a.Brand,{href:"/"},n.a.createElement("img",{src:u.a,alt:"logo",className:"logo-img"})),n.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(E.a,{className:"mr-auto"}),n.a.createElement(E.a,{id:"header-nav"},n.a.createElement(v.b,{to:"/"},"Home"),n.a.createElement(v.b,{to:"/about"},"About"),n.a.createElement(v.b,{to:"/skills"},"Skills"),n.a.createElement(v.b,{to:"/portfolio"},"Portfolio")),n.a.createElement(E.a,{className:"right-gap"}))))))))}}]),t}(n.a.Component),g=(t(71),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"desk-footer"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row",style:{display:"inlineBlock"}},n.a.createElement("div",{className:" col-md-12 rights-reserved"},n.a.createElement("p",null,"\xa9 2020 smarsoteam.netlify.app. All Rights Reserved.")))))}}]),t}(n.a.Component)),h=(t(72),t(48)),b=t.n(h),N=t(17),y=t(54),k=t(53),w=t(52),j=t(49),O=t.n(j),x=t(50),C=t.n(x),T=t(51),S=t.n(T),I=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{className:"carousel-area"},n.a.createElement(k.a,null,n.a.createElement(y.a,null,n.a.createElement(N.a,null,n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:O.a,alt:"First slide"}),n.a.createElement(N.a.Caption,null,n.a.createElement("h3",null,"First slide label"),n.a.createElement("p",{className:"caption-text"},"Nulla vitae elit libero, a pharetra augue mollis interdum."))),n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:C.a,alt:"Third slide"}),n.a.createElement(N.a.Caption,null,n.a.createElement("h3",null,"Second slide label"),n.a.createElement("p",{className:"caption-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:S.a,alt:"Third slide"}),n.a.createElement(N.a.Caption,null,n.a.createElement("h3",null,"Third slide label"),n.a.createElement("p",{className:"caption-text"},"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))))))}}]),t}(n.a.Component),F=(t(73),t(55)),L=t.n(F),B=(t(86),t(87),t(24)),A=t.n(B),M=t(25),P=t.n(M),W=t(20),q=t.n(W),D={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},H=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"item-carousel"},n.a.createElement("div",{className:"carousel-name"},n.a.createElement("h3",null," Some Product")),n.a.createElement(L.a,{swipeable:!1,draggable:!1,showDots:!0,responsive:D,ssr:!0,infinite:!0,autoPlay:"mobile"!==this.props.deviceType,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:1e3,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],deviceType:this.props.deviceType,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px"},n.a.createElement("div",{className:"item-contain"},n.a.createElement("img",{src:q.a,alt:"1",className:"img-item"}),n.a.createElement("div",{className:"pro-name"},n.a.createElement("span",null,"Teddy"))),n.a.createElement("div",{className:"item-contain"},n.a.createElement("img",{src:A.a,alt:"2",className:"img-item"}),n.a.createElement("div",{className:"pro-name"},n.a.createElement("span",null,"Mega"))),n.a.createElement("div",{className:"item-contain"},n.a.createElement("img",{src:q.a,alt:"3",className:"img-item"}),n.a.createElement("div",{className:"pro-name"},n.a.createElement("span",null,"Teddy"))),n.a.createElement("div",{className:"item-contain"},n.a.createElement("img",{src:P.a,alt:"4",className:"img-item"}),n.a.createElement("div",{className:"pro-name"},n.a.createElement("span",null,"Little")))),n.a.createElement("hr",null))}}]),t}(l.Component),R=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"carousel-section"},n.a.createElement(I,null)),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("hr",null),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"img-section",style:{backgroundImage:"url(".concat(b.a,")")}},n.a.createElement("div",{className:"home-content"},n.a.createElement("div",{className:"col-md-6 about-site"},n.a.createElement("h3",{style:{color:"#000000",fontSize:"1.5rem",fontWeight:"bold"}},"Watch Our Story"),n.a.createElement("p",{style:{color:"#191970",fontWeight:"600"}},"There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer\u2019s mood."),n.a.createElement("h3",{style:{color:"#B22222"}},"Home Page"))))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"itemslider-section"},n.a.createElement(H,null)))}}]),t}(n.a.Component),V=(t(88),t(89),t(56)),_=t.n(V),J=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 offset-md-2"},n.a.createElement("div",{className:"side-content"},n.a.createElement("div",{className:"side-info"},n.a.createElement("h3",null,"Available for FREE!")),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"desc"},n.a.createElement("p",{className:"desc-text"},"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy"),n.a.createElement("a",{href:"/","aria-current":"page",className:"button w-button w--current"},"GET\xa0IT\xa0NOW!")))),n.a.createElement("div",{className:"col-md-4 offset-md-1"},n.a.createElement("div",{className:"desc-img side-block small-padding-side"},n.a.createElement("img",{src:_.a,alt:" ",className:"side-image"})))))}}]),t}(n.a.Component),Y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about-area"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("div",{className:"about-heading"},n.a.createElement("h3",null,"About"))),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("div",{className:"title"},"All You Need is Fun!"),n.a.createElement("div",{className:"intro-sec"},n.a.createElement("div",{className:"intro"},n.a.createElement("h4",null,"Introducing ToyStore"),n.a.createElement("p",{className:"text-grey"},"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action."),n.a.createElement("a",{href:"/",alt:"more_about_us"},"More About Us")))),n.a.createElement("hr",null))),n.a.createElement("div",{className:"content"},n.a.createElement(J,null),n.a.createElement("hr",null)))))}}]),t}(n.a.Component),z=(t(90),t(34)),U=t.n(z),G=(t(91),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"delivery-sec no-padding-top"},n.a.createElement("div",{className:"wrapper-sec side-paddings"},n.a.createElement("div",{className:"delivery"},n.a.createElement("div",{className:"delivery-info w-richtext"},n.a.createElement("h2",null,"Delivery Info"),n.a.createElement("p",null,"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer\u2019s mood when they see your ad."),n.a.createElement("h2",null,"What\u2019s a Rich Text element?"),n.a.createElement("p",null,"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."),n.a.createElement("h2",null,"Static and dynamic content editing"),n.a.createElement("p",null,"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. "),n.a.createElement("ul",null,n.a.createElement("li",null,"Beautifully Designed"),n.a.createElement("li",null,"100% Responsive"),n.a.createElement("li",null,"CMS Content"),n.a.createElement("li",null,"Smooth Animations")),n.a.createElement("p",null,"For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"),n.a.createElement("h2",null,"How to customize formatting for each rich text"),n.a.createElement("p",null,'Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a className is added to the rich text element using the "When inside of" nested selector system.')),n.a.createElement("div",{className:"question"},n.a.createElement("h5",{className:"question-heading"},"Can't Find the Answer to\xa0Your Question?"),n.a.createElement("a",{href:"/",className:"button small w-button"},"Contact Us")))))),n.a.createElement("hr",null))}}]),t}(n.a.Component)),Q=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,null),n.a.createElement("div",{className:"about-area"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row skill-background"},n.a.createElement("div",{className:"col-md-12 p-0"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("div",{className:"about-heading"},n.a.createElement("h3",null,"Skills"))),n.a.createElement("div",{className:"col-md-10 offset-md-1 skill-wrapper"},n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:q.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Teddy"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:A.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Mega Plus Toy"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:U.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Cute Dog"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:P.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Little  Friend"),n.a.createElement("div",null,"More Info"))))))),n.a.createElement("hr",null)))}}]),t}(n.a.Component),$=(t(92),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about-area"},n.a.createElement("div",{className:"section no-padding-vertical"},n.a.createElement("div",{className:"wrapper-port side-paddings"},n.a.createElement("div",{"data-w-id":"e89551e9-b5ae-51a6-c418-02c90497790c",className:"subscribe"},n.a.createElement("div",{className:"subscribe-info"},n.a.createElement("div",{className:"subscribe-icon"},n.a.createElement("img",{src:"https://assets.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg",alt:""})),n.a.createElement("h4",null,"Subscribe to our newsletter",n.a.createElement("br",null),"& get ",n.a.createElement("span",{className:"text-green"},"10% discount!"))),n.a.createElement("div",{className:"subscribe-form-wrapper w-form"},n.a.createElement("form",{id:"wf-form-Subscribe-Form",name:"wf-form-Subscribe-Form","data-name":"Subscribe Form",className:"subscribe-form"},n.a.createElement("input",{type:"email",className:"input subscribe-input w-input",maxLength:"256",name:"email-2","data-name":"Email 2",placeholder:"Enter your email address",id:"email-2",required:""}),n.a.createElement("input",{type:"submit",value:"Subscribe","data-wait":"Please wait...",className:"button w-button"})),n.a.createElement("div",{className:"form-success w-form-done"},n.a.createElement("div",null,"Thank you! Your submission has been received!")),n.a.createElement("div",{className:"form-error w-form-fail"},n.a.createElement("div",null,"Oops! Something went wrong while submitting the form.")))))),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("div",{className:"about-heading"},n.a.createElement("h3",null,"Portfolio"))),n.a.createElement("div",{className:"port-folio"},n.a.createElement("div",{className:"col-md-10 offset-md-1 skill-wrapper portfolio-bg"},n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:q.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Teddy"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:A.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Mega Plus Toy"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:U.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Cute Dog"),n.a.createElement("div",null,"More Info"))),n.a.createElement("div",{className:"skill-card-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"skill-card-image-wrapper"},n.a.createElement("img",{src:P.a,alt:"img",className:"skills-img"})),n.a.createElement("h5",null,"Little  Friend"),n.a.createElement("div",null,"More Info")))))))),n.a.createElement("hr",null)))}}]),t}(n.a.Component)),K=t(9),X=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,null,n.a.createElement("div",{className:"header-container"},n.a.createElement(f,null)),n.a.createElement(K.c,null,n.a.createElement(K.a,{exact:!0,path:"/",component:R}),n.a.createElement(K.a,{exact:!0,path:"/about",component:Y}),n.a.createElement(K.a,{exact:!0,path:"/skills",component:Q}),n.a.createElement(K.a,{exact:!0,path:"/portfolio",component:$})),n.a.createElement("div",{className:"footer-container"},n.a.createElement(g,null))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.cbef3190.chunk.js.map