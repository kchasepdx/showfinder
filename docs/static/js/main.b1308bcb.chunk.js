(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(16),i=a.n(n),o=(a(22),a(23),a(5)),r=a(0);var c=function(){return Object(r.jsx)("div",{className:"Nav",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/about",children:" About "})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/TriviaQuiz",children:"Trivia"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/quiz",children:"Take the Quiz"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/skip",children:"Skip the Quiz"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/showfinder",children:"Home"})})]})})},l=a(3),h=a(2);var d=function(){var e=Object(s.useState)(null),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!0),o=Object(h.a)(i,2),c=o[0],l=o[1],d=Object(s.useState)([]),u=Object(h.a)(d,2),j=u[0],b=u[1],m=Object(s.useState)(!1),O=Object(h.a)(m,2),p=O[0],g=O[1],x=Object(s.useState)(Math.floor(499*Math.random()+1)),f=Object(h.a)(x,2),v=f[0],w=f[1],N=Object(s.useState)(""),y=Object(h.a)(N,2),S=y[0],k=y[1];return Object(s.useEffect)((function(){console.log("the effect happened")}),[v]),a?Object(r.jsxs)("div",{children:[" Error: ",a.message," "]}):c?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"App-header",children:" Instant Gratification "})," ",p?Object(r.jsx)("p",{children:"You should Watch..."}):Object(r.jsx)("p",{children:" All it takes is 1 click"}),p&&Object(r.jsxs)("h1",{className:"Show-suggestion",children:[j," "]}),p&&Object(r.jsx)("p",{children:S}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("button",{className:"Quiz-start",type:"button",onClick:function(){g(!0),w(Math.floor(899*Math.random()+1)),fetch("https://api.themoviedb.org/3/tv/"+v+"?=3&api_key=99fe2e0690d478ac860c2bcaf5e04631").then((function(e){return e.json()})).then((function(e){l(!0),b(e.name),k(e.overview)}),(function(e){l(!0),n(e)}))},children:[" ","Click Me."," "]})," "]})," "]}):Object(r.jsx)("div",{children:" Loading... "})};var u=function(e){return Object(r.jsx)("img",{className:"Images",src:e.source,alt:e.alt})},j=a.p+"static/media/tv.5717df8b.png";var b=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"App-header",children:" SHOW FINDER "}),Object(r.jsx)("p",{children:" Let's find your next show."}),Object(r.jsx)(u,{source:j,alt:"television"})]})};var m=function(){return Object(r.jsxs)("div",{className:"Quiz",children:[Object(r.jsx)("h1",{className:"App-header",children:" Let's Get Started..."}),Object(r.jsx)(o.b,{to:"/Question1",children:Object(r.jsx)("button",{className:"Quiz-start",children:"Start"})})," "]})};var O=function(e){return Object(r.jsx)("div",{onClick:e.onClick,Name:e.Name,className:e.className,children:e.Text})};var p=function(e){return Object(r.jsx)("button",{onClick:e.onClick,Type:e.type,className:e.className,children:e.text})};var g=function(){var e=Object(s.useState)(1),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(null),o=Object(h.a)(i,2),c=(o[0],o[1]),l=Object(s.useState)(!0),d=Object(h.a)(l,2),u=(d[0],d[1]),j=Object(s.useState)(""),b=Object(h.a)(j,2),m=b[0],g=b[1],x="99fe2e0690d478ac860c2bcaf5e04631",f=Object(s.useState)("https://api.themoviedb.org/3/discover/tv?api_key="+x+"&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"),v=Object(h.a)(f,2),w=v[0],N=(v[1],Object(s.useState)("")),y=Object(h.a)(N,2),S=y[0],k=y[1],T=Object(s.useState)(""),A=Object(h.a)(T,2),B=A[0],C=A[1],z=Object(s.useState)(""),W=Object(h.a)(z,2),q=W[0],L=W[1],_=Object(s.useState)(""),H=Object(h.a)(_,2),Q=H[0],Y=H[1],M=Object(s.useState)(""),D=Object(h.a)(M,2),F=D[0],P=D[1],G=Object(s.useState)(!1),V=Object(h.a)(G,2),I=V[0],J=V[1];function U(e){var t=e.target.getAttribute("Name");console.log(a),"Laugh"===t?(console.log("laugh"),g(1),k("&with_genres=35")):"Cry"===t?(g(2),k("&with_genres=18")):"Binge"===t?(g(3),k("&without_genres=18,35,99,10763,10868")):"Learn"===t?(g(4),k("&with_genres=99,10763,10768")):"Vintage"===t?(C("&first_air_date.lte=2010"),g(1)):"Current"===t?(C("&first_air_date.gte=2011"),g(2)):"Underrated"===t?(L("&vote_average.lte=5"),g(1),J(!0)):"Popular"===t&&(L("&vote_average.gte=5"),g(2),J(!0))}return Object(r.jsxs)("div",{className:"quiz",children:[a<=3?Object(r.jsxs)("h1",{className:"App-header",children:[" Question ",a]}):Object(r.jsx)("h1",{className:"App-header",children:"All done!"}),Object(r.jsxs)("p",{className:"Question-text",children:[" ",1===a&&"Are you in the mood to..."," ",2===a&&"Want to watch something more vintage or more current?"," ",3===a&&"Do you like your shows to be popular or underrated?",4===a&&"The show you should watch is..."]}),1===a&&Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(O,{onClick:U,Name:"Laugh",className:"AnswerBox1 ".concat(1===m?"Highlight":""),Text:"Laugh"}),Object(r.jsx)(O,{onClick:U,Name:"Cry",className:"AnswerBox2 ".concat(2===m?"Highlight":""),Text:"Cry"}),Object(r.jsx)(O,{onClick:U,Name:"Binge",className:"AnswerBox3 ".concat(3===m?"Highlight":""),Text:"Binge"}),Object(r.jsx)(O,{onClick:U,Name:"Learn",className:"AnswerBox4 ".concat(4===m?"Highlight":""),Text:"Learn"})]}),2===a&&Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(O,{onClick:U,Name:"Vintage",className:"AnswerBox1 ".concat(1===m?"Highlight":""),Text:"Vintage, please"}),Object(r.jsx)(O,{onClick:U,Name:"Current",className:"AnswerBox2 ".concat(2===m?"Highlight":""),Text:"More current"})]}),3===a&&Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(O,{onClick:U,Name:"Underrated",className:"AnswerBox1 ".concat(1===m?"Highlight":""),Text:"Underrated"}),Object(r.jsx)(O,{onClick:U,Name:"Popular",className:"AnswerBox2 ".concat(2===m?"Highlight":""),Text:"Popular"})]}),4===a&&Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"Show-suggestion",children:Q}),Object(r.jsx)("p",{children:F})]}),3===a?Object(r.jsx)(p,{className:"Quiz-start",type:"button",onClick:function(){n(4),J(!0);var e=w+S+B+q;console.log(e),console.log(x),fetch(e).then((function(e){return e.json()})).then((function(e){u(!0);var t=e.results,a=Math.floor(Math.random()*(t.length-1)+1);console.log(a),Y(e.results[a].name),P(e.results[a].overview),console.log(Q),console.log(F),console.log(I)}),(function(e){u(!0),c(e)}))},text:"Get Show!"}):Object(r.jsx)(p,{className:"Quiz-start",type:I?"submit":"button",onClick:function(){n(a+1),g("")},text:I?"Thanks for taking the quiz!":">>"})]})};var x=function(){return Object(r.jsx)("div",{className:"About-Text",children:Object(r.jsx)("p",{children:"The concept of television was the work of many individuals in the late 19th and early 20th centuries, with its roots initially starting from back even in the 18th century. The first practical transmissions of moving images over a radio system used mechanical rotating perforated disks to scan a scene into a time-varying signal that could be reconstructed at a receiver back into an approximation of the original image. Development of television was interrupted by the Second World War. After the end of the war, all-electronic methods of scanning and displaying images became standard. Several different standards for addition of color to transmitted images were developed with different regions using technically incompatible signal standards. Television broadcasting expanded rapidly after World War II, becoming an important mass medium for advertising, propaganda, and entertainment.[1] Television broadcasts can be distributed over the air by VHF and UHF radio signals from terrestrial transmitting stations, by microwave signals from Earth orbiting satellites, or by wired transmission to individual consumers by cable TV. Many countries have moved away from the original analog radio transmission methods and now use digital television standards, providing additional operating features and conserving radio spectrum bandwidth for more profitable uses. Television programming can also be distributed over the Internet. Television broadcasting may be funded by advertising revenue, by private or governmental organizations prepared to underwrite the cost, or in some countries, by television license fees paid by owners of receivers. Some services, especially carried by cable or satellite, are paid by subscriptions. Television broadcasting is supported by continuing technical developments such as long-haul microwave networks, which allow distribution of programming over a wide geographic area. Video recording methods allow programming to be edited and replayed for later use. Three-dimensional television has been used commercially but has not received wide consumer acceptance owing to the limitations of display methods."})})},f=[{question:"When did the children\u2019s show Sesame Street first started airing on PBS?",answerOptions:["2000","1969","1970","1974"]},{question:"Which famous TV series featured a reference or picture of Superman in every episode?",answerOptions:["Lois & Clark","Smallville","Seinfeld","Big Bang Theory"]},{question:"Jack Bauer killed how many people in 192 hours?",answerOptions:["5","178","98","268"]},{question:"Who wore fake teeth when filming Full House?",answerOptions:["Michelle","Uncle Joey","DJ","Danny"]},{question:"Who was the youngest person to ever host Saturday Night Live?",answerOptions:["Drew Barrymore","Selena Gomez","Leo Dicaprio","JTT"]},{question:"Which Star Trek: Next Generation actor hosted Reading Rainbow?",answerOptions:["Patrick Stewart","Brent Spiner","LeVar Burton","Rooney Chase"]},{question:"What is the dog\u2019s name in The Jetsons cartoon?",answerOptions:["Spot","Pluto","Astro","Leroy"]},{question:"What colors is the Brady Bunch kitchen?",answerOptions:["Blue & Yellow","Green & White","Yellow & Blue","Orange & Green"]},{question:"What was the first American drama series to react to the September 11, 2001 terrorist attacks on the United States?",answerOptions:["Law & Order","The West Wing","Alias","24"]},{question:"On 'Bob's Burgers', what is the name of the purple store between Jimmy Pesto's Pizzeria and the bank?",answerOptions:["Flowerama","Yo Yo Yo, We Got YoYos","Yours Truly Stationary","Bang Bang Drums"]}];var v=function(){var e=Object(s.useState)(1),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),o=Object(h.a)(i,2),c=o[0],l=o[1],d=Object(s.useState)(!1),u=Object(h.a)(d,2),j=u[0],b=u[1],m=Object(s.useState)(""),g=Object(h.a)(m,2),x=g[0],v=g[1],w=Object(s.useState)(""),N=Object(h.a)(w,2),y=(N[0],N[1]),S=Object(s.useState)(0),k=Object(h.a)(S,2),T=k[0],A=k[1];function B(e){var t=e.target.getAttribute("Name");f.map((function(e){t===e.answerOptions[0]?(l(1),v(t)):t===e.answerOptions[1]?(l(2),v(t)):t===e.answerOptions[2]?(l(3),v(t)):t===e.answerOptions[3]&&(l(4),v(t))}))}return Object(r.jsxs)("div",{className:"quiz",children:[!0===j?Object(r.jsxs)("h1",{className:"Score-header",children:[" You scored ",T," out of 10."]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:"App-header",children:[" Question ",a]}),Object(r.jsxs)("p",{className:"Question-text",children:[" ",f[a-1].question," "]})]}),!0===j?null:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(O,{onClick:B,Name:f[a-1].answerOptions[0],className:"AnswerBox1 ".concat(1===c?"Highlight":""),Text:f[a-1].answerOptions[0]}),Object(r.jsx)(O,{onClick:B,Name:f[a-1].answerOptions[1],className:"AnswerBox2 ".concat(2===c?"Highlight":""),Text:f[a-1].answerOptions[1]}),Object(r.jsx)(O,{onClick:B,Name:f[a-1].answerOptions[2],className:"AnswerBox3 ".concat(3===c?"Highlight":""),Text:f[a-1].answerOptions[2]}),Object(r.jsx)(O,{onClick:B,Name:f[a-1].answerOptions[3],className:"AnswerBox4 ".concat(4===c?"Highlight":""),Text:f[a-1].answerOptions[3]})]}),10===a?Object(r.jsx)(p,{className:"Quiz-start",type:"button",onClick:function(){b(!0)},text:"Show me my score!"}):Object(r.jsx)(p,{className:"Quiz-start",type:"button",onClick:j?null:function(){n(a+1),l(0),"1970"===x||"Seinfeld"===x||"268"===x||"Michelle"===x||"Drew Barrymore"===x||"LeVar Burton"===x||"Astro"===x||"Orange & Green"===x||"The West Wing"===x||"Yours Truly Stationary"===x?(A(T+1),console.log(T),console.log("right")):(y("wrong"),console.log("wrong"),console.log(T))},text:j?"Thanks for taking the quiz!":">>"})]})},w=function(){return Object(r.jsxs)(l.c,{children:[" ",Object(r.jsx)(l.a,{path:"/showfinder",component:b}),Object(r.jsx)(l.a,{exact:!0,path:"/skip",component:d}),Object(r.jsx)(l.a,{exact:!0,path:"/quiz",component:m}),Object(r.jsx)(l.a,{exact:!0,path:"/Question1",component:g}),Object(r.jsx)(l.a,{exact:!0,path:"/about",component:x}),Object(r.jsx)(l.a,{exact:!0,path:"/TriviaQuiz",component:v})]})};var N=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(c,{}),Object(r.jsx)(w,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),i(e),o(e)}))};i.a.render(Object(r.jsxs)(o.a,{children:[Object(r.jsx)(N,{})," "]}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.b1308bcb.chunk.js.map