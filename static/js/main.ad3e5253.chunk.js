(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(3),s=t.n(r),m=(t(9),t(1));t(10);var o=function(){var e=Object(c.useState)(!0),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(!0),o=Object(m.a)(s,2),i=o[0],d=o[1],l=Object(c.useState)(.5),p=Object(m.a)(l,2),u=p[0],h=p[1],f=Object(c.useState)(""),E=Object(m.a)(f,2),k=E[0],v=E[1],b=function(e){var a=e.target.id;v(a);var t=e.target.childNodes[1];t.volume=u,t.play(),document.getElementById(a).className="drum-pad-active",setTimeout((function(){document.getElementById(a).className="drum-pad"}),100)};return document.addEventListener("keypress",(function(e){if("q"===e.key||"w"===e.key||"e"===e.key||"a"===e.key||"s"===e.key||"d"===e.key||"z"===e.key||"x"===e.key||"c"===e.key){var a=document.getElementById(e.key.toUpperCase());a.volume=u,a.play();var t=a.parentNode.id;document.getElementById(t).className="drum-pad-active",v(t),setTimeout((function(){document.getElementById(t).className="drum-pad"}),100)}})),n.a.createElement("div",{id:"drum-machine",className:"App"},n.a.createElement("div",{id:"display"},k),n.a.createElement("div",{className:"controllers"},n.a.createElement("div",null,n.a.createElement("p",{style:{textAlign:"center",fontWeight:"600",margin:"5px"}},"Power"),n.a.createElement("div",{style:{width:"60px",height:"34px",background:t?"#2196F3":"#ccc",borderRadius:"34px",cursor:"pointer",position:"relative"},onClick:function(){r((function(e){return!e}))}},n.a.createElement("span",{style:{position:"absolute",height:"26px",width:"26px",left:"4px",bottom:"4px",background:"#fff",borderRadius:"50%",WebkitTransition:"0.4s",transition:"0.4s",transform:t?"translateX(26px)":"translateX(0)"}}))),n.a.createElement("div",{className:"volume-controller"},n.a.createElement("p",{style:{textAlign:"center",fontWeight:"600",margin:"5px"}},"volume"),n.a.createElement("input",{className:"volume-slider",type:"range",step:"0.01",min:"0",max:"1",value:u,disabled:!t,onChange:function(e){e.preventDefault();var a=e.target.value;if(a<.1&&a>0){var t=a.replace(/^.*[.||0]/,"");v("Volume: ".concat(t))}else if("0.1"===a||"0.2"===a||"0.3"===a||"0.4"===a||"0.5"===a||"0.6"===a||"0.7"===a||"0.8"===a||"0.9"===a){var c=a.replace(/^.*[.]/,"");v("Volume: ".concat(c,"0"))}else if("1"===a)v("Volume: 100");else if("0"===a)v("Volume: 00");else{var n=a.replace(/^.*[.]/,"");v("Volume: ".concat(n))}h(e.target.value),setTimeout((function(){v("")}),1e3)}})),n.a.createElement("div",null,n.a.createElement("p",{style:{textAlign:"center",fontWeight:"600",margin:"5px"}},"Bank"),n.a.createElement("button",{style:{width:"60px",height:"34px",background:t?"#2196F3":"#ccc",borderRadius:"34px",cursor:"pointer",position:"relative",outline:"none",border:"none"},disabled:!t,onClick:function(){d((function(e){return!e})),v(i?"Smooth Piano Kit":"Heater Kit")}},n.a.createElement("span",{style:{position:"absolute",height:"26px",width:"26px",left:"4px",bottom:"4px",background:"#fff",borderRadius:"50%",WebkitTransition:"0.4s",transition:"0.4s",transform:i?"translateX(26px)":"translateX(0)"}})))),n.a.createElement("div",{id:"drum-pad-wrapper"},n.a.createElement("button",{id:i?"Heater 1":"Chord 1",className:"drum-pad",onClick:b},"Q",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3":"#",className:"clip",id:"Q"})),n.a.createElement("button",{id:i?"Heater 2":"Chord 2",className:"drum-pad",onClick:b},"W",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3":"#",className:"clip",id:"W"})),n.a.createElement("button",{id:i?"Heater 3":"Chord 3",className:"drum-pad",onClick:b},"E",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3":"#",className:"clip",id:"E"})),n.a.createElement("button",{id:i?"Heater 4":"Shaker",className:"drum-pad",onClick:b},"A",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3":"#",className:"clip",id:"A"})),n.a.createElement("button",{id:i?"Clap":"Open HH",className:"drum-pad",onClick:b},"S",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3":"#",className:"clip",id:"S"})),n.a.createElement("button",{id:i?"Open HH":"Closed HH",className:"drum-pad",onClick:b},"D",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3":"#",className:"clip",id:"D"})),n.a.createElement("button",{id:i?"Kick n' Hat":"Punchy Kick",className:"drum-pad",onClick:b},"Z",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3":"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3":"#",className:"clip",id:"Z"})),n.a.createElement("button",{id:i?"Kick":"Side Stick",className:"drum-pad",onClick:b},"X",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3":"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3":"#",className:"clip",id:"X"})),n.a.createElement("button",{id:i?"Closed HH":"Snare",className:"drum-pad",onClick:b},"C",n.a.createElement("audio",{src:t?i?"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3":"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3":"#",className:"clip",id:"C"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ad3e5253.chunk.js.map