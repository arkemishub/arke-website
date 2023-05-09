import{r as lr}from"./index.45a47ed6.js";function dr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=tr(e))&&(t&&(t+=" "),t+=o);return t}function tr(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=tr(r[t]))&&(o&&(o+=" "),o+=e);return o}var V="-";function cr(r){var e=pr(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,a=t===void 0?{}:t;function s(i){var l=i.split(V);return l[0]===""&&l.length!==1&&l.shift(),or(l,e)||ur(i)}function n(i,l){var c=o[i]||[];return l&&a[i]?[].concat(c,a[i]):c}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function or(r,e){if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),a=t?or(r.slice(1),t):void 0;if(a)return a;if(e.validators.length!==0){var s=r.join(V);return e.validators.find(function(n){var i=n.validator;return i(s)})?.classGroupId}}var Q=/^\[(.+)\]$/;function ur(r){if(Q.test(r)){var e=Q.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function pr(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},a=br(Object.entries(r.classGroups),o);return a.forEach(function(s){var n=s[0],i=s[1];U(i,t,n,e)}),t}function U(r,e,o,t){r.forEach(function(a){if(typeof a=="string"){var s=a===""?e:D(e,a);s.classGroupId=o;return}if(typeof a=="function"){if(fr(a)){U(a(t),e,o,t);return}e.validators.push({validator:a,classGroupId:o});return}Object.entries(a).forEach(function(n){var i=n[0],l=n[1];U(l,D(e,i),o,t)})})}function D(r,e){var o=r;return e.split(V).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function fr(r){return r.isThemeGetter}function br(r,e){return e?r.map(function(o){var t=o[0],a=o[1],s=a.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var l=i[0],c=i[1];return[e+l,c]})):n});return[t,s]}):r}function gr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function a(s,n){o.set(s,n),e++,e>r&&(e=0,t=o,o=new Map)}return{get:function(n){var i=o.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return a(n,i),i},set:function(n,i){o.has(n)?o.set(n,i):a(n,i)}}}var nr="!";function mr(r){var e=r.separator||":",o=e.length===1,t=e[0],a=e.length;return function(n){for(var i=[],l=0,c=0,f,u=0;u<n.length;u++){var b=n[u];if(l===0){if(b===t&&(o||n.slice(u,u+a)===e)){i.push(n.slice(c,u)),c=u+a;continue}if(b==="/"){f=u;continue}}b==="["?l++:b==="]"&&l--}var m=i.length===0?n:n.substring(c),h=m.startsWith(nr),g=h?m.substring(1):m,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:y}}}function vr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var a=t[0]==="[";a?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t)}),e.push.apply(e,o.sort()),e}function hr(r){return{cache:gr(r.cacheSize),splitModifiers:mr(r),...cr(r)}}var yr=/\s+/;function xr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,a=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(yr).map(function(n){var i=o(n),l=i.modifiers,c=i.hasImportantModifier,f=i.baseClassName,u=i.maybePostfixModifierPosition,b=t(u?f.substring(0,u):f),m=!!u;if(!b){if(!u)return{isTailwindClass:!1,originalClassName:n};if(b=t(f),!b)return{isTailwindClass:!1,originalClassName:n};m=!1}var h=vr(l).join(":"),g=c?h+nr:h;return{isTailwindClass:!0,modifierId:g,classGroupId:b,originalClassName:n,hasPostfixModifier:m}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var i=n.modifierId,l=n.classGroupId,c=n.hasPostfixModifier,f=i+l;return s.has(f)?!1:(s.add(f),a(l,c).forEach(function(u){return s.add(i+u)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function wr(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,a,s,n=i;function i(c){var f=e[0],u=e.slice(1),b=u.reduce(function(m,h){return h(m)},f());return t=hr(b),a=t.cache.get,s=t.cache.set,n=l,l(c)}function l(c){var f=a(c);if(f)return f;var u=xr(c,t);return s(c,u),u}return function(){return n(dr.apply(null,arguments))}}function d(r){var e=function(t){return t[r]||[]};return e.isThemeGetter=!0,e}var ir=/^\[(?:([a-z-]+):)?(.+)\]$/i,Cr=/^\d+\/\d+$/,kr=new Set(["px","full","screen"]),Mr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Sr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,zr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function x(r){return S(r)||kr.has(r)||Cr.test(r)||M(r)}function M(r){return z(r,"length",Er)}function Gr(r){return z(r,"size",ar)}function Ir(r){return z(r,"position",ar)}function Ar(r){return z(r,"url",Tr)}function j(r){return z(r,"number",S)}function S(r){return!Number.isNaN(Number(r))}function Pr(r){return r.endsWith("%")&&S(r.slice(0,-1))}function A(r){return rr(r)||z(r,"number",rr)}function p(r){return ir.test(r)}function P(){return!0}function k(r){return Mr.test(r)}function Rr(r){return z(r,"",jr)}function z(r,e,o){var t=ir.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Er(r){return Sr.test(r)}function ar(){return!1}function Tr(r){return r.startsWith("url(")}function rr(r){return Number.isInteger(Number(r))}function jr(r){return zr.test(r)}function Nr(){var r=d("colors"),e=d("spacing"),o=d("blur"),t=d("brightness"),a=d("borderColor"),s=d("borderRadius"),n=d("borderSpacing"),i=d("borderWidth"),l=d("contrast"),c=d("grayscale"),f=d("hueRotate"),u=d("invert"),b=d("gap"),m=d("gradientColorStops"),h=d("gradientColorStopPositions"),g=d("inset"),y=d("margin"),C=d("opacity"),w=d("padding"),$=d("saturate"),_=d("scale"),B=d("sepia"),F=d("skew"),q=d("space"),J=d("translate"),O=function(){return["auto","contain","none"]},L=function(){return["auto","hidden","clip","visible","scroll"]},Z=function(){return["auto",e]},X=function(){return["",x]},R=function(){return["auto",S,p]},Y=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},E=function(){return["solid","dashed","dotted","double","none"]},H=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},W=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",p]},K=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[S,j]},T=function(){return[S,p]};return{cacheSize:500,theme:{colors:[P],spacing:[x],blur:["none","",k,M],brightness:I(),borderColor:[r],borderRadius:["none","","full",k,M],borderSpacing:[e],borderWidth:X(),contrast:I(),grayscale:G(),hueRotate:T(),invert:G(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[Pr,M],inset:Z(),margin:Z(),opacity:I(),padding:[e],saturate:I(),scale:I(),sepia:G(),skew:T(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Y(),[p])}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",A]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",A]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:[A]},p]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[A]},p]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal"].concat(W())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(W(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(W(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",x]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[k]},k,M]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",x]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",k,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",M]}],"line-clamp":[{"line-clamp":["none",S,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(E(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",x]}],"underline-offset":[{"underline-offset":["auto",x]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Y(),[Ir])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Gr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ar]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[].concat(E(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:E()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(E())}],"outline-offset":[{"outline-offset":[x]}],"outline-w":[{outline:[x]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[x]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",k,Rr]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",k,p]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[$]}],sepia:[{sepia:[B]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[$]}],"backdrop-sepia":[{"backdrop-sepia":[B]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[A,p]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[x,j]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Fr=wr(Nr),er={},_r={get exports(){return er},set exports(r){er=r}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=lr,Lr=Symbol.for("react.element"),Wr=Symbol.for("react.fragment"),Ur=Object.prototype.hasOwnProperty,Vr=Or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$r={key:!0,ref:!0,__self:!0,__source:!0};function sr(r,e,o){var t,a={},s=null,n=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(n=e.ref);for(t in e)Ur.call(e,t)&&!$r.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:Lr,type:r,key:s,ref:n,props:a,_owner:Vr.current}}N.Fragment=Wr;N.jsx=sr;N.jsxs=sr;(function(r){r.exports=N})(_r);export{er as j,Fr as t};
