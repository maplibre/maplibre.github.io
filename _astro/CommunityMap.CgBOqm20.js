import{o as r,g as s,t as c}from"./web.S6z9w9k9.js";import{m as a}from"./maplibre-gl.DVsC02UL.js";/* empty css                             */var u=c("<div id=community-map>");function h(t){let e=t.length;for(;e!=0;){let o=Math.floor(Math.random()*e);e--,[t[e],t[o]]=[t[o],t[e]]}return t}const g=t=>(r(()=>{const e=new a.Map({container:"community-map",style:"https://demotiles.maplibre.org/style.json",center:[0,0],zoom:1,hash:!0,attributionControl:!1}).addControl(new a.AttributionControl({compact:!0,customAttribution:'MapLibre contributors. | <a href="https://github.com/maplibre/maplibre.github.io">Edit on GitHub.</a>'}));e.addControl(new a.NavigationControl);const o=t.members.map(n=>n.latlon[1]),l=t.members.map(n=>n.latlon[0]);e.fitBounds([[Math.min(...o),Math.min(...l)],[Math.max(...o),Math.max(...l)]],{padding:50}),h(JSON.parse(JSON.stringify(t.members))).map(n=>{const i=document.createElement("img");i.className="marker",i.src=`community/${n.github}.png`;const m=document.createElement("a");m.href=`https://github.com/${n.href}`,m.title=n.github,m.append(i),new a.Marker({element:m}).setLngLat([n.latlon[1],n.latlon[0]]).addTo(e)})}),s(u));export{g as CommunityMap};