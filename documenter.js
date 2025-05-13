(function(){

  let main = new URL( document.currentScript.src )
  let parameters = main.parameters = (() => {
    var params = main.search.substring(1).split("&");
    var obj = {};
    for (var i = 0; i < params.length; i++) {
      var tmp = params[i].split("=");
      obj[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
    }
    return obj;
  })();
  

  window.md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
  window.$  = window.$ || ((e,s=document)=>s.querySelector(e))
  window.$$ = window.$$ || ((e,s=document)=>Array.from(s.querySelectorAll(e)))

  Location.prototype.__defineGetter__("parameters",function(){
    return Object.fromEntries(decodeURIComponent(this.search).substring(1).split("&").map(e => e.split("=")))  
  })

  /* mobile-style="margin-top:20px;" desktop-style="padding:4em;" hover-style="color:red;"   */
  ;(function(){
    document.addEventListener("DOMContentLoaded",function(){
      let TABLET = 600;
      let DESKTOP = 1080; // 900

      let $$ = (e)=>Array.from(document.querySelectorAll(e))
      let mobileIndex = 0;
      documenter.when('[mobile-style]',function(el){
        el.setAttribute('mobile-style-index',mobileIndex++);
        let css = `
        @media screen and (max-width: ${TABLET}px) {
          [mobile-style-index="${el.getAttribute('mobile-style-index')}"] {
            ${el.getAttribute('mobile-style')}
          }
        }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      })


      let mobiletabletindex = 0;
      documenter.when('[mobile-tablet-style]',function(el){
        el.setAttribute('mobile-tablet-style-index', mobiletabletindex++);
        let css = `
        @media only screen and (max-width:${DESKTOP}px){
          [mobile-tablet-style-index="${el.getAttribute('mobile-tablet-style-index')}"] {
            ${el.getAttribute('mobile-tablet-style')}
          }
        }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      });

      
      let tabletIndex = 0;
      documenter.when('[tablet-style]',function(el){
        el.setAttribute('tablet-style-index', tabletIndex++);
        let css = `
        @media only screen and (min-width:${TABLET+1}px) and (max-width:${DESKTOP}px){
          [tablet-style-index="${el.getAttribute('tablet-style-index')}"] {
            ${el.getAttribute('tablet-style')}
          }
        }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      });

      let tabletdesktopIndex = 0;
      documenter.when('[tablet-desktop-style]',function(el){
        el.setAttribute('tablet-desktop-style-index', tabletdesktopIndex++);
        let css = `
        @media only screen and (min-width:${TABLET+1}px){
          [tablet-desktop-style-index="${el.getAttribute('tablet-desktop-style-index')}"] {
            ${el.getAttribute('tablet-desktop-style')}
          }
        }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      });

      let desktopIndex = 0;
      documenter.when('[desktop-style]',function(el){
        el.setAttribute('desktop-style-index', desktopIndex++);
        let css = `
        @media screen and (min-width: ${DESKTOP+1}px) {
          [desktop-style-index="${el.getAttribute('desktop-style-index')}"] {
            ${el.getAttribute('desktop-style')}
          }
        }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      });


      
      
      let hoverIndex = 0;
      documenter.when('[hover-style]',function(el){
        el.setAttribute('hover-style-index',hoverIndex++);
        let css = `
          [hover-style-index="${el.getAttribute('hover-style-index')}"]:hover {
            ${el.getAttribute('hover-style')}
          }
        `;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.append(style);
      })

    })
  })();

  let libraries_base_css = `
  <style name="base.css">
    /*====================== BASE CSS ======================*/

    .flex-x,[flex-x]{
      display:flex;
      flex-direction:row;
    }
    .flex-cx,[flex-cx]{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: center;
    }
    .flex-sx,[flex-sx]{
      display:flex;
      flex-direction:row;
      justify-content: space-between;
    }
    .flex-ex,[flex-ex]{
      display:flex;
      flex-direction:row;
    }
    .flex-ex>*, [flex-ex]>*{
      flex-basis: 100%;
    }
    .flex-y,[flex-y]{
      display:flex;
      flex-direction:column;
    }
    .flex-cy,[flex-cy]{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content: center;
    }
    
    
    .grid-2,[grid-2]{
      display:grid;
      grid-template-columns:repeat(2,1fr);
    }
    .grid-3,[grid-3]{
      display:grid;
      grid-template-columns:repeat(3,1fr);
    }
    .grid-4,[grid-4]{
      display:grid;
      grid-template-columns:repeat(4,1fr);
    }
    .grid-5,[grid-5]{
      display:grid;
      grid-template-columns:repeat(5,1fr);
    }
    .grid-6,[grid-6]{
      display:grid;
      grid-template-columns:repeat(6,1fr);
    }

    .grid-2 > *,[grid-2] > *,
    .grid-3 > *,[grid-3] > *,
    .grid-4 > *,[grid-4] > *,
    .grid-5 > *,[grid-5] > *,
    .grid-6 > *,[grid-6] > *{
      overflow:hidden;
      word-wrap: break-word;
    }

    body [grid-form]{
      display:grid;
      grid-template-columns: 200px 1fr;
    }
    @media (max-width:600px)  { 
      body [grid-form]{
        display: flex;
        flex-direction: column;
      }
    }
    
    [grid-form] br{
      display:none;
    }

    [grid-form] input:not([type=checkbox]):not([type=radio]),[grid-form] textarea,[grid-form] select,[grid-form] dropdown,[grid-form] .input{
      width:100%;
      margin:2px 0;
    }
    [grid-form] [button],[grid-form] button, [grid-form] .button{
      margin:2px 0;
    }

    @media (max-width:600px)  { 
      .block-on-mobile,[block-on-mobile]{
        display:block;
      }
      .flex-x-on-mobile,[flex-x-on-mobile]{
        display:flex;
        flex-direction:row;
      }
      .flex-cx-on-mobile,[flex-cx-on-mobile]{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content: center;
      }
      .flex-y-on-mobile,[flex-y-on-mobile]{
        display:flex;
        flex-direction:column;
      }
      .flex-cy-on-mobile,[flex-cy-on-mobile]{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
      } 
      .hide-on-mobile,[hide-on-mobile]{
        display:none;
      }
    }
    @media (min-width:600px)  { 
      .hide-on-desktop,[hide-on-desktop]{
        display:none;
      }
    }


    .hide,[hide]{display:none;}

    .space ,[space],.flex-1,[flex-1],space{flex:1;}
    .gap,[gap]{gap:0.5em}
    .gap-1,[gap-1]{gap:1em}
    .padding, [padding]{padding:0.5em}
    .padding-x,[padding-x]{padding-left:0.5em;padding-right:0.5em;}
    .padding-1, [padding-1]{padding:1em;}
    .padding-1-x,[padding-1-x]{padding-left:1em;padding-right:1em;}

    .padding-top,[padding-top]{padding-top:0.5em}
    .padding-bottom,[padding-bottom]{padding-bottom:0.5em}
    .padding-top-1,[padding-top-1]{padding-top:1em}
    .padding-bottom-1,[padding-bottom-1]{padding-bottom:1em}
    
    .hover,[hover]{position:relative;cursor:pointer;overflow:hidden;}
    .light,[light]{position:relative;overflow:hidden;}
    .inverse, [inverse] {background: var(--front);color: var(--back);}

    .hover:hover:after,[hover]:hover:after,.light:before,[light]:before{
      content:"";
      position:absolute;
      left:0;right:0;top:0;bottom:0;
      box-shadow:inset 0 0 0 1000px;
      opacity:0.2;
    }

    .underline:hover,[underline]:hover{
      text-decoration:underline;
      cursor:pointer;
    }

    .center,[center]{
      align-items:center;
    }
    /*-------------------------------------------------------------------------------------------*/
  </style>`;

  let libraries = `
  <head>
  <!-- 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai.min.css" integrity="sha512-RLF8eOxhuwsRINc7r56dpl9a3VStqrXD+udWahutJrYdyh++2Ghnf+s4jFsOyryKZt/GNjPwbXVPH3MJpKrn2g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/an-old-hope.min.css" integrity="sha512-t47CjkEB5hx4FojnE73dBLwgrgvLBpgsHvB40ycK3cYPkLwEp7qNHyRpRDA3/zVVAAOUPJwbMVJq3uJrBqpHVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/stackoverflow-light.min.css" integrity="sha512-RDtnAhiPytLVV3AwzHkGVMVI4szjtSjxxyhDaH3gqdHPIw5qwQld1MVGuMu1EYoof+CaEccrO3zUVb13hQFU/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css" integrity="sha512-0aPQyyeZrWj9sCA46UlmWgKOP0mUipLQ6OZXu8l4IcAmD2u31EPEy9VcIMvl7SoAaKe8bLXZhYoMaE/in+gcgA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css" integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <style>

    body{
      font-family: 'Ubuntu', sans-serif;
      font-family: 'Segoe UI', Tahoma, sans-serif;
      margin:auto;
      padding-top:var(--header-height,50px);
      line-height:1.5;
      font-size:16px;
      --front:#222;
      --back:#F8F8F8;
      --primary:#17E;
      --primary-text:#FFF;
      --light: #8882;
      --light: color-mix(in srgb, var(--back) 85%, var(--front));
      --menu-width: 260px;
      --header-height:50px;
      color:var(--front);
      background:var(--back);
    }
    body.theme-dark{
      --front:#FFF;
      --back:#181818;
      color-scheme: dark;
    }
    body.theme-light{
      --front:#222;
      --back:#F8F8F8;
    }
    content{
      display:block;
      position:fixed;
      top:var(--header-height,50px);
      left:0;
      right:0;
      bottom:0;
      box-shadow: inset 0 0 0 10000px #0001; /* NEW */
    }
    header{
      cursor:default;
      user-select:none;
      font-weight:bold;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: var(--header-height,50px);
      display: flex;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      gap: 10px;
      box-shadow:0 0 10px #0008;
      background:var(--back);
      z-index:10;
    }
    header .space{
      flex:1;
    }
    /* header a,[button],.button,button{ */
    header a{
      text-decoration:none;
    }
    header > a{
      color:var(--front);
      margin-top: 0px;
      padding: 0 0.6em;
      height: 100%;
      display: flex;
      align-items: center;
    }
    [button],.button,button{
      border-radius: 20px;
      padding: 6px 16px;
      text-decoration: none;
      background: var(--primary);
      color: white;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      font-family: inherit;
      box-sizing: border-box;
      line-height: 1.5;
      height:unset;
    }
    [button],.button{
      margin-right: 6px;
    }
    header [title]{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: center;
      gap:.5rem;
    }
    /*
    header input{
      border-radius: 100px;
      padding: 10px 20px;
      outline: none;
      border-radius: 100px;
      padding: 6px 16px;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      font-family: inherit;
      box-sizing: border-box;
      line-height: 1.5;
      background: #88888840;
      color:inherit;
      opacity:.8;
    }
    */
    menu{
      box-sizing:border-box;
      overflow: hidden;
      margin: 0;
      position:absolute;
      top: 0px;
      left:0px;
      width:var(--menu-width);
      bottom:0;
      padding:10px 0;
      overflow:auto;
      transition:left .4s, width .4s;
    }
    menu a{
      display:block;
      padding:10px;
      text-decoration:none;
      color:var(--front);
      border-radius:6px;
      /* NEW */
      border-radius: 0px 90px 90px 0px; 
      white-space: pre;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    menu a:hover{
      background:#8882;
    }
    menu a.active{
      background:var(--primary);
      color:var(--primary-text);
      opacity: 1;
    }
    menu .menu-H2 {
      padding-left: 24px;
      font-size:.95em;
      opacity: .95;
    }

    main{
      box-sizing:border-box;
      position: absolute;
      top: 0px;
      left: var(--menu-width);
      width: calc(100% - var(--menu-width));
      bottom: 0;
      overflow: auto;
      padding:0px 20px;
      transition:left .4s, width .4s;
    }

    

    code,.code{
      font-family: 'Ubuntu Mono', monospace;
      background: #EEE;
      color:#444;
      padding: 4px;
      border-radius:4px;
      margin:4px;
      box-sizing: border-box;
      font-size: 0.875em;
      white-space: pre;
      /* display:inline-block; */
    }
    pre code{
      display: block;
      overflow-x:auto;
      margin:0;
    }
    
    table code{
      margin:0;
      padding:4px;
    }
    table{
      border-collapse: collapse;
      width:100%;
      color:inherit;
    }
    table th,table td{
      border: 2px solid var(--light);
      padding: 0.5em;
    }


    button,.button,[button]{
      background:var(--primary);
      color:var(--primary-text);
      cursor:pointer;
      text-decoration: none;
      white-space: nowrap;
    }
    button:hover,.button:hover{
      box-shadow:inset 0 0 6px #0002;
    }
    button,.button,[button],input:not([type=checkbox]):not([type=radio]),textarea,select,dropdown,.input{
      display:inline-block;
      padding:6px 12px;
      margin:0 2px;
      margin:0;
      border:none;
      font-size:16px;
      line-height:1.5;
      border-width: 0px;
      font-family: inherit;
      box-sizing: border-box;
      border-radius:2px;
      height: 2.25em;
    }


    input:not([type=checkbox]):not([type=radio]),textarea,select,dropdown,.input{
      outline: none;
      text-decoration: none;
      background: #8882;
      box-shadow:inset 0px 0px 0px 2px #8882;
      opacity: .8;
    }
    textarea{
      resize:vertical;
    }
    select option {
      background: var(--back);
      color:var(--front);
      border-radius:0;
    }

    input:not([type=checkbox]):not([type=radio]):focus, textarea:focus, select:focus, dropdown:focus, .input:focus{
      opacity: 1;
      box-shadow:inset 0 0 0 2px var(--primary);
      outline: none;
    }




    
    .preview,[preview]{
      padding: 0px;
      padding-top: 2.4em;
      position: relative;
      margin: 4px 0;
      box-shadow: 0 0 24px #0004;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .preview::before,[preview]::before{
      content: attr(preview);
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIwIiByeT0iNi4yNTAwNCIgcng9IjYuMjUwMDQiIGlkPSJzdmdfMiIgY3k9IjE0IiBjeD0iMjciIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZkZDgwMCIvPgogIDxlbGxpcHNlIHN0cm9rZS13aWR0aD0iMCIgcnk9IjYuMjUwMDQiIHJ4PSI2LjI1MDA0IiBpZD0ic3ZnXzEiIGN5PSIxNCIgY3g9IjEyIiBzdHJva2U9IiNmZmYiIGZpbGw9IiNlZDU5NGEiLz4KICA8ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjAiIHJ5PSI2LjI1MDA0IiByeD0iNi4yNTAwNCIgaWQ9InN2Z18zIiBjeT0iMTQiIGN4PSI0MyIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjNWFjMDVhIi8+Cjwvc3ZnPg==");
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.4em;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: contain;
      background-color: var(--back);
      display: flex;
      align-items: center;
      color: var(--front);
      text-indent: 82px;
      font-weight: bold;
    }

    body{
      opacity:0;
    }
    a{
      /*
      color: var(--primary);
      font-weight: bold;
      text-decoration: none;
      */
    }
    h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0.5em 0;
    }
    
    
    /*=============   [tooltip]   ================*/
    [tooltip-right], [tooltip-bottom], [tooltip-top], [tooltip-left],
    [tooltip-right-start], [tooltip-right-end], [tooltip-bottom-start], [tooltip-bottom-end],
    [tooltip-top-start], [tooltip-top-end], [tooltip-left-start], [tooltip-left-end] {
      position: relative;
    }

    [tooltip-right]:hover:after, 
    [tooltip-bottom]:hover:after, 
    [tooltip-top]:hover:after, 
    [tooltip-left]:hover:after,
    [tooltip-right-start]:hover:after,
    [tooltip-right-end]:hover:after,
    [tooltip-bottom-start]:hover:after,
    [tooltip-bottom-end]:hover:after,
    [tooltip-top-start]:hover:after,
    [tooltip-top-end]:hover:after,
    [tooltip-left-start]:hover:after,
    [tooltip-left-end]:hover:after {
      content: '';
      position: absolute;
      background-color: #333;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      white-space: nowrap;
      z-index: 1;
      opacity: 0;
      font-size:14px;
    }

    [tooltip-right]:hover:before,
    [tooltip-bottom]:hover:before,
    [tooltip-top]:hover:before,
    [tooltip-left]:hover:before,
    [tooltip-right-start]:hover:before,
    [tooltip-bottom-start]:hover:before,
    [tooltip-top-start]:hover:before,
    [tooltip-left-start]:hover:before,
    [tooltip-right-end]:hover:before,
    [tooltip-bottom-end]:hover:before,
    [tooltip-top-end]:hover:before,
    [tooltip-left-end]:hover:before {
      content: '';
      position: absolute;
      border: 6px solid transparent;
      opacity: 0;
    }

    [tooltip-right]:hover:after {
      content: attr(tooltip-right);
      left: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
      animation: tooltip-right 0.3s ease forwards;
    }

    [tooltip-right-start]:hover:after {
      content: attr(tooltip-right-start);
      left: calc(100% + 10px);
      top: calc(100% - 10px);
      animation: tooltip-right 0.3s ease forwards;
    }

    [tooltip-right-end]:hover:after {
      content: attr(tooltip-right-end);
      left: calc(100% + 10px);
      top: +10px;
      animation: tooltip-right 0.3s ease forwards;
    }

    [tooltip-right]:hover:before,[tooltip-right-start]:hover:before,[tooltip-right-end]:hover:before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: #333;
      animation: tooltip-right 0.3s ease forwards;
    }

    [tooltip-bottom]:hover:after {
      content: attr(tooltip-bottom);
      left: 50%;
      top: calc(100% + 10px);
      transform: translateX(-50%);
      animation: tooltip-bottom 0.3s ease forwards;
      z-index: 2;
    }

    [tooltip-bottom-start]:hover:after {
      content: attr(tooltip-bottom-start);
      left: calc(50% - 10px);
      top: calc(100% + 12px);
      z-index: 2;
      animation: tooltip-fade 0.3s ease forwards;
      opacity: 1;
    }
    [tooltip-bottom-start]:hover:before{
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      border-bottom-color: #333;
      animation: tooltip-fade 0.3s ease forwards;
      z-index: 2;
    }

    [tooltip-bottom]:hover:before,[tooltip-bottom-end]:hover:before {
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      border-bottom-color: #333;
      animation: tooltip-bottom 0.3s ease forwards;
      z-index: 2;
    }

    [tooltip-top]:hover:after {
      content: attr(tooltip-top);
      left: 50%;
      bottom: calc(100% + 10px);
      transform: translateX(-50%);
      animation: tooltip-top 0.3s ease forwards;
      z-index: 2;
    }

    [tooltip-top]:hover:before {
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-top-color: #333;
      animation: tooltip-top 0.3s ease forwards;
      z-index: 2;
    }

    body [tooltip-top-start]:hover:after {
      content: attr(tooltip-top-start)!important;
      left: calc(50% - 10px);
      bottom: calc(100% + 10px);
      z-index: 2;
      opacity: 1;
    }
    body [tooltip-top-start]:hover:before{
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-top-color: #333;
      z-index: 2;
      opacity: 1;
    }

    body [tooltip-top-end]:hover:after {
      content: attr(tooltip-top-end)!important;
      left: calc(50% + 10px);
      transform: translate(-100%);
      bottom: calc(100% + 10px);
      z-index: 2;
      opacity: 1;
    }
    body [tooltip-top-end]:hover:before{
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-top-color: #333;
      z-index: 2;
      opacity: 1;
    }
    



    [tooltip-left]:hover:after {
      content: attr(tooltip-left);
      right: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
      animation: tooltip-left 0.3s ease forwards;
      z-index: 2;
    }

    [tooltip-left]:hover:before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #333;
      animation: tooltip-left 0.3s ease forwards;
      z-index: 2;
    }

    @keyframes tooltip-right {
      from { transform: translateX(-10px) translateY(-50%); opacity: 0; }
      to { transform: translateX(0) translateY(-50%); opacity: 1; }
    }

    @keyframes tooltip-bottom {
      from { transform: translateY(-10px) translateX(-50%); opacity: 0; }
      to { transform: translateY(0) translateX(-50%); opacity: 1; }
    }

    @keyframes tooltip-top {
      from { transform: translateY(10px) translateX(-50%); opacity: 0; }
      to { transform: translateY(0) translateX(-50%); opacity: 1; }
    }

    @keyframes tooltip-left {
      from { transform: translateX(10px) translateY(-50%); opacity: 0; }
      to { transform: translateX(0) translateY(-50%); opacity: 1; }
    }

    @keyframes tooltip-fade{
      from{opacity:0;}
      to{opacity:1;}
    }


    /*=============   NEW LI   ================*/
    
    li[prefix="-"], li[prefix="+"], li[prefix="*"]{
      list-style:none;
      position:relative;
    }

    li[prefix="-"]:before, li[prefix="+"]:before, li[prefix="*"]:before{
      content: "";
      font-size:1em;
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 1px solid;
      line-height: 0;
      vertical-align: top;
      transform: translate(0, 0.25em);
      margin-right:0.5em;
    }
    li[prefix="+"]:before{
      color: var(--primary);
    }
    li[prefix="+"]:after{
      content: "";
      color: var(--primary);
      border-right: 1px solid;
      border-bottom: 1px solid;
      display: inline-block;
      width: 0.3em;
      height: 0.8em;
      position: absolute;
      left: 0.4em;
      top: 0.25em;
      transform: rotate(45deg);
    }

    li[prefix="*"]:before{
      border-radius: 100%;
      padding: 0;
      width : 0.25em;
      height: 0.25em;
      margin: 0.38em;
      margin-right:0.86em;
      background: var(--front);
    }

    /*========= menu-opener =========*/
    
    @media (max-width: 600px) {
      body{
        --menu-width: calc(100% - 0px);
      }
      main{
        width:100%!important;
        padding:0px 10px;
      }
    }

    @media (min-width: 600px) {
      body.hide-opener menu-opener{
        display:none;
      }
    }

    /*================ ICON-BUTTON ============*/
    [icon-button]{
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background:transparent;
      color:inherit;
      padding:0;
      overflow:hidden;
      gap:0!important;
      position:relative;
      border-radius:100%;
    }
    [icon-button]:hover{
      box-shadow:none;
    }

    [icon-button]:after{
      content: "";
      position:absolute;
      left:0;right:0;
      bottom:0;top:0;
      box-shadow:inset 0 0 0 1000px;
      border-radius:inherit;
      opacity: 0;
      transform:scale(0.5);
      transition:all .1s;
    }
    [icon-button]:hover:after{
      opacity: 0.15;
      transform:scale(1);
    }
    

    
    body.hide-menu menu,body.menu-hide menu{
      left: -100%;
    }
    body.hide-menu main,body.menu-hide main{
      width: 100%;
      left:0px;
    }

    body.hide-header header{
      top: calc( var(--header-height,50px) * -1 ); 
      opacity: 0;
    }
    body.hide-header content{
      top:0;
    }

    body.bottom-header header{
      top:unset;
      bottom:0;
    }
    body.bottom-header content{
      top:0;
      bottom:var(--header-height,50px);
    }


    input[switch]{
      display:inline-flex;
      align-items:center;
      position:relative;
      vertical-align:middle;
      cursor:pointer;
      font-size:1em;
      padding:0!important;
      background: transparent;
      border-radius: 1em;
      appearance: none;
      -webkit-appearance: none;
    }
    input[switch]:before{
      content : "";
      display : block;
      width   : 3em;
      height  : 1.5em;
      background:#0002;
      border-radius:1em;
      transition:all .3s;
    }
    input[switch]:checked:before{
      background:#17F;
    }
    input[switch]:after{
      content:attr(switch);
      display:inline-flex;
      align-items:center;
      justify-content:center;
      background:#FFF;
      position:absolute;
      font-size:0.75em;
      left:0.2em;top:0.2em;
      width:1.6em;
      height:1.6em;
      border-radius:100%;
      transition:all .3s;  
    }
    input[switch]:checked:after{
      left:2.2em;
    }



    input[type=checkbox]:not([switch]){
      position: relative;
      font-size: 1em;
      margin: 0;
      vertical-align: sub;
      opacity:.2;
      cursor:pointer;
      appearance: none;
      -webkit-appearance: none;
    }
    input[type=checkbox]:not([switch]):checked{
      opacity:1;
    }
    input[type=checkbox]:not([switch]):before{
      content: "";
      font-size: 1em;
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 0.0625em solid;
      line-height: 0;
    }
    input[type=checkbox]:not([switch]):checked:before{
      color: var(--primary,#4AF);
    }
    input[type=checkbox]:not([switch]):checked:after{
      content: "";
      color: var(--primary,#4AF);
      border-right: 0.125em solid;
      border-bottom: 0.125em solid;
      display: inline-block;
      width: 0.3em;
      height: 0.7em;
      position: absolute;
      left: 0.35em;
      top: 0.05em;
      transform: rotate(45deg);
    }



    [panel]{
      position:relative;
      display:inline-block;
    }
    panel{
      display:none;
      position: absolute;
      background: var(--back);
      padding: 1em;
      box-shadow: 0 0 10px #0008;
      z-index:1;
    }
    [panel=bottom-right] panel{
      right: 0;
      top: 100%;
    }
    [panel=bottom-left] panel{
      left: 0;
      top: 100%;
    }
    [panel=top-right] panel{
      right: 0;
      bottom: 100%;
    }
    [panel=top-left] panel{
      left: 0;
      bottom: 100%;
    }
    [panel] button:focus + panel{
      display:inline-block;
    }
    panel:hover{
      display:inline-block;
    }


    /*** DROPDOWN ***/

    dropdown{
      position:relative;
      display:inline-flex;
      cursor:default;
    }
    dropdown:after{
      content: "";
      width: 0.85em;
      height: 0.85em;
      display: inline-block;
      border-right: 2px solid;
      border-bottom: 2px solid;
      transform: translate(0.3em, -0.2em) rotate(45deg);
      margin: 0.248em;
      float: right;
    }
    .dropdown-list{
      position:absolute;
      display:none;
      left:0;
      right:0;
      top:calc(100% - 2px);
      z-index:2;
      max-height:80vh;
      overflow-y:auto;
      box-shadow:0 0 10px #8882;
      border:2px solid var(--primary);
    }
    dropdown:focus{
      border-bottom-right-radius:0;
      border-bottom-left-radius:0;
      z-index:3;
    }
    dropdown:focus .dropdown-list{
      display:flex;
      flex-direction:column;
      background: var(--back);
    }
    .dropdown-list>*,.dropdown-value{
      display:flex;
      flex-direction:row;
      align-items:center;
      padding:.4em;
      height: 2.2em;
    }
    .dropdown-list>div:hover{
      background:var(--primary);
      color:var(--primary-text);
    }
    dropdown input[type=checkbox]{
      margin-right:.2em!important;
    }
    .dropdown-list>div:hover input[type=checkbox]:before,.dropdown-list>div:hover input[type=checkbox]:after{
      color:var(--primary-text)!important;
      border-color:var(--primary-text)!important;
    }
    dropdown img{
      height:100%;
      margin-right:.2em;
    }
    .dropdown-value{
      flex:1;
      padding: 0;
      height: 1.5em;
      display: flex;
      overflow: hidden;
    }
    .dropdown-value .dropdown-value-item{
      display:flex;
      align-items:center;
      height:100%;
      margin-right:.5em;
    }

  </style>
  </head>
  `;

//======================================================================================//
//                                                                              
//                                    ADMIN CSS
//
//======================================================================================//

  documenter_admin_css = `

.box{
  background: var(--back);
  display: inline-block;
  padding: 20px;
  border-radius: 2px;
  box-shadow:0 0 10px #0002;
  width:100%;
  box-sizing:border-box;
}


/* body.documenter-admin{ */

body{
  
  *{box-sizing:border-box;}

  /*
  form label{
    width:200px;
    display:inline-block;
    opacity:.9;
    vertical-align: top;
    padding-top: 8px;
  }

  form input:not([type=checkbox]):not([type=radio]),form textarea,form select,form dropdown,form .input{
    display:inline-flex;
    /*margin-bottom:10px;*/
    min-width: 400px;
    max-width: 100%;
    width: calc(100% - 210px);
  }
  */

  form{
    overflow:auto;
  }
  table.box{
    display:table;
    background: var(--back);
    box-shadow:0 0 10px #0002;
    padding: 0;
    overflow: hidden;
    border: none;
    border-radius:2px;
  }
  /*
  form button,table button{
    font-size:.8em;
  }
  */

  table.documenter-editable,[table].documenter-editable{
    td,[td]{
      padding:0;
      position:relative;
    }
    td div,[td] div{
      padding: 0.5em;
      height: 2.4em;
      line-height: 1.5em;
      overflow: hidden;
      width: 100%;
    }
    td[type=text] :focus,[td][type=text] :focus{
      outline:2px solid var(--primary);
      outline-offset: 0px;
    }
    td[type=select],[td][type=select]{
      min-width: 120px;
    }
    td[type=select] select,[td][type=select] select{
      background:inherit;
      color:inherit;
      border-radius: 0px;
      box-sizing: border-box;
      height: max-content;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      margin: 0;
      box-shadow:0px 0px 0px 2px #8882;
    }
    td[type=select] select:focus,[td][type=select] select:focus{
      box-shadow:0px 0px 0px 2px var(--primary);
    }
    
    [actions]{
      width:1;
    }
    [actions] div{
      display: flex;
      flex-direction: row;
      gap: 2px;
      padding: 0 2px;
      align-items: center;
      justify-content: center;
    }
    [actions] div button{
      display:flex;
      align-items: center;
      white-space: pre;
      height: calc(100% - 4px);
    }
  }
  /*
  table.box tbody th{ border-top:none; }
  table.box th:first-child,table.box td:first-child{ border-left:none; }
  table.box th:last-child,table.box td:last-child{ border-right:none; }
  table.box tr:last-child td{ border-bottom:none; }
  */
}



.theme-round{
  input:not([type=checkbox]):not([type=radio]), textarea, select, dropdown, .input,button,[button],.button,dropdown{
    border-radius: 20px;
  }
}

  `;






  Element.prototype.empty = function(){
    while(this.firstChild){
      this.removeChild(this.firstChild)
    }
  }
    
    
  Object.defineProperty(Element.prototype,"index",{
    get:function(){
      let el = this;
      var i = -1;
      do {
        i++;
      } while (el = el.previousElementSibling);
      return i;
    }
  })


  Object.defineProperty(Element.prototype,"parent",{
    get:function(){
      return this.parentElement
    }
  })

  Object.defineProperty(Element.prototype, "next", {
    get: function () {
      return this.nextElementSibling || null;
    }
  });

  Object.defineProperty(Element.prototype, "prev", {
    get: function () {
      return this.previousElementSibling || null;
    }
  });
  
  

  /**
   * Search requirsively charcater, if found: return
   * * [0] : start + founded + end
   * * [1] : founded
   * * [2] : start index
   * * [3] : end index
   * @param start start character ( { [
   * @param end end character ) } ]
   * @param position start position search
   */
  String.prototype.matchRequirsive = function (start, end, position=0) {
    var search = this;
    var total = 0,
      startLen = start.length,
      endLen = end.length;
    var startPoint = -1;
    for (let i = position; i < search.length - endLen + 1; i++) {
      const element = search.substr(i, startLen);
     
      if (search.substr(i, startLen) == start ) {
        //console.log("S:",i)
        total++;
        if(start==end && total==2){
          return [
            search.substr(startPoint, i + endLen - startPoint),
            search.substr(startPoint + startLen, i - startPoint - startLen),
            startPoint + startLen,
            i + endLen
          ];
        }
        if (startPoint == -1) startPoint = i;
        i += startLen - 1;
        
      }else if (search.substr(i, endLen) == end) {
        //console.log("E:",i)
        total--;
        if (total == 0 && startPoint != -1) {
          return [
            search.substr(startPoint, i + endLen - startPoint),
            search.substr(startPoint + startLen, i - startPoint - startLen),
            startPoint + startLen,
            i + endLen
          ];
        }
        i += endLen - 1;
      }
    }
    return null;
  }


  function MarkdownConverter(markdownText) {
    
    //return marked.parse(markdownText)
    const rules = [
      { pattern: /(\*\*)(.*?)\1/g, replacement: '<strong>$2</strong>' },
      { pattern: /(\_\_)(.*?)\1/g, replacement: '<em>$2</em>' },
      // { pattern: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' },

      //{ pattern: /```(.*?)\n(.*?)```/gm, replacement: '<code language=$1>$2</code>' },
      //{ pattern: /```(.*?)```/g, replacement: '<code>$1</code>' },
      //{ pattern: /``(.*?)``/g, replacement: '<pre><code>$1</code></pre>' },
      //{ pattern: /`(.*?)`/g, replacement: '<code>$1</code>' },
      { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' },

      { pattern: /^# (.*?)$/gm, replacement: '<h1>$1</h1>' },
      { pattern: /^## (.*?)$/gm, replacement: '<h2>$1</h2>' },
      { pattern: /^### (.*?)$/gm, replacement: '<h3>$1</h3>' },
      { pattern: /^#### (.*?)$/gm, replacement: '<h4>$1</h4>' },
      { pattern: /^##### (.*?)$/gm, replacement: '<h5>$1</h5>' },
      { pattern: /^###### (.*?)$/gm, replacement: '<h6>$1</h6>' },
      { pattern: /^\s*\- (.*)/gm, replacement: '<li prefix="-">$1</li>' },
      { pattern: /^\s*\+ (.*)/gm, replacement: '<li prefix="+">$1</li>' },
      { pattern: /^\s*\* (.*)/gm, replacement: '<li prefix="*">$1</li>' },
      
      { pattern: /^(http[^\s]+)/gm, replacement: '<a href="$1">$1</a>' },

      { pattern: /^\n/gm, replacement: '<br>' },
      { pattern: /<br>(<br>)+/gm, replacement: '<br>' },

      { pattern: /<br><h/gm, replacement: '<h' },
      { pattern: /<\/pre>\s*<br>/gm, replacement: '</pre>' },
      { pattern: /<\/h(\d)>\s*<br>/gm, replacement: '</h$1>' },
      { pattern: /<\/li>\s*<br>/gm, replacement: '</li>' },
      { pattern: /<br><h/gm, replacement: '<h' },
      
    ];

    let htmlText = markdownText;
    while(mat = htmlText.matchRequirsive("```","```")){
      //console.log(mat)
      let language = mat[1].split("\n")[0].trim()

      let className="language-"+language
      //console.log(className)
      if(language=="js"){
        className="language-javascript"
      }
      let code = mat[1].split("\n").slice(1).join("\n")
      code = code.split("<").join("&lt;")
      htmlText = htmlText.replace(mat[0], '<pre><code class="'+className+'">'+code+'</code></pre>' )
    }
    // ``
    while(mat = htmlText.matchRequirsive("``","``")){
      let code = mat[1]
      code = code.split("<").join("&lt;")
      htmlText = htmlText.replace(mat[0], '<span><code>'+code+'</code></span>' )
    }

    rules.forEach(rule => {
      htmlText = htmlText.replace(rule.pattern, rule.replacement);
    });

    // `
    while(mat = htmlText.matchRequirsive("`","`")){
      let code = mat[1]
      code = code.split("<").join("&lt;")
      htmlText = htmlText.replace(mat[0], '<code>'+code+'</code>' )
    }

    rules.forEach(rule => {
      htmlText = htmlText.replace(rule.pattern, rule.replacement);
    });


    return htmlText;
  
  }

  if(parameters["only-base-css"]!=null){
    var html = (new DOMParser()).parseFromString(libraries_base_css, "text/html");
    document.head.append(...html.head.children);
    return;
  }

  if(parameters["disable-style"]==null){
    // Append Libraries

    var html = (new DOMParser()).parseFromString(libraries_base_css, "text/html");
    document.head.append(...html.head.children);

    var html = (new DOMParser()).parseFromString(libraries, "text/html");
    document.head.append(...html.head.children);
    
  }


  document.addEventListener("DOMContentLoaded", Render)


  function Render(){
    let header = document.body.querySelector("header")

    if(parameters["disable-html"]!=null) return document.body.style.opacity="1"

    if(!header) return document.body.style.opacity="1"

    if(header){
      document.body.className += header.getAttribute("body-class")
      header.remove()


      // menu-opener
      let contains = header.getAttribute("body-class") && header.getAttribute("body-class").indexOf("hide-menu") > -1 
      if( !document.body.querySelector("header menu-opener") && !contains ){
        let menuOpener = document.createElement("menu-opener");
        menuOpener.setAttribute("icon-button","")
        menuOpener.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`
        header.prepend(menuOpener)
        menuOpener.onclick = ()=>{
          document.body.classList.toggle("menu-hide")
        }
      }

    }

    // Auto hide menu when starting
    if(window.innerWidth<600){document.body.classList.add("menu-hide")}

    let menu    = document.createElement("menu")
    let main    = document.createElement("main")
    let content = document.createElement("content")


  
    main.innerHTML = MarkdownConverter(document.body.innerHTML)
    main.id="main"
    document.body.empty()
    
    let h1_index = -1
    Array.from(main.querySelectorAll("h1,h2")).map(e=>{
      let a = document.createElement("a")
      const innerText = Array.from(e.childNodes).filter(node => node.nodeType === Node.TEXT_NODE).map(node => node.textContent.trim()).join(' ').trim().split(/\s+/).join(" ");
      e.id = innerText.split(/\s+/).join("-")
      a.href = "#" + e.id  
      a.innerText = innerText
      a.className = "menu-"+e.tagName
      /*
      let onclick = 'Array.from(document.querySelectorAll("menu a")).map(e=>e.classList.remove("active"));this.classList.add("active");if(window.innerWidth<600){document.body.classList.add("hide-menu")};'
      if(e.tagName=="H1") h1_index++
      onclick += 'if(document.body.classList.contains("tab-system")){ Array.from(document.querySelectorAll("[documenter-tab]")).map(e=>e.style.display="none");document.querySelectorAll("[documenter-tab]")['+h1_index+'].style.display = null;}'  
      if(document.body.classList.contains("tab-system") ){
      }
      a.setAttribute("onclick",onclick)
      */
      if(decodeURIComponent(location.hash).substring(1)==e.id){a.classList.add("active")} 
      menu.appendChild(a)
    })

    documenter.on("click","a[href]",function(){
        
      if(!this.getAttribute("href").startsWith("#")) return;

      // Select On Left Menu
      Array.from(document.querySelectorAll("menu a")).map(e=>e.classList.remove("active"));
      let leftMenuButton = documenter.select("menu a[href]").filter(e=>e.getAttribute("href")==this.getAttribute("href") )[0]
      if(leftMenuButton==null) return;
      leftMenuButton.classList.add("active")
      if(window.innerWidth<600){
        document.body.classList.add("menu-hide")
      };

      // Select If Tab System
      if(document.body.classList.contains("tab-system")){ 
        Array.from(document.querySelectorAll("[documenter-tab]")).map(e=>e.style.display="none");
        let href = this.getAttribute("href").substr(1)
        let target = documenter.select(documenter.select("[id]").list().filter(e=>e.id==href)).parent("[documenter-tab]")
        target.style.display = null
      }else{
        Array.from(document.querySelectorAll("[documenter-tab]")).map(e=>e.style.display=null);
      }

    })

    
    // Regroup H1 downside items
    let groups = Array.from(main.childNodes).map((e,i)=>e.tagName=="H1"?i:-1).filter(e=>e!=-1)
    groups = groups.map((e,i,a)=>{
      return  Array.from(main.childNodes).slice(e,a[i+1])
    })
    groups = groups.map((e,i)=>{
      let div = document.createElement("div")
      div.id="documenter-tab-"+e[0].id
      div.setAttribute("documenter-tab","")
      e.map(el=>div.appendChild(el))
      return div
    })
    groups.map(e=>main.appendChild(e))

    content.appendChild(menu)
    content.appendChild(main)
    document.body.appendChild(content)
    if(header) document.body.prepend(header)

    // Remove first <br> in main
    while(main.firstElementChild && main.firstElementChild.tagName.toUpperCase()=="BR"){ main.firstElementChild.remove() }
    // Title
    if( document.body.querySelector("header [title]") ) {
      let titleText = document.body.querySelector("header [title]").innerHTML.trim()
      let title = document.createElement("title")
      title.innerHTML = titleText
      const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
      if( titleText.match(regexExp) ){ // First char is emoji
        var icon   = titleText.match(regexExp)[0]
        title.innerHTML = titleText.replace(icon,"")
        var canvas = document.createElement('canvas');
        canvas.width = 64;canvas.height = 64;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText(icon, 0, 48);
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL("image/x-icon");
        document.getElementsByTagName('head')[0].appendChild(link);
      }else{
        title.innerHTML = document.body.querySelector("header [title]").innerText
        let image =  document.body.querySelector("header [title] img")
        if( image ){
          var link = document.createElement('link');
          link.type = 'image/x-icon';
          link.rel = 'shortcut icon';
          link.href = image.src;
          document.getElementsByTagName('head')[0].appendChild(link);
        }
      }
      document.head.prepend(title)
    }



    // Tab System
    if(document.body.classList.contains("tab-system")){
      var target = null
      target = Array.from(document.body.querySelectorAll("[id]")).find(e=>e.id==decodeURIComponent(location.hash).substr(1))
      if(target) target=target.parentElement
      if(target){
        Array.from(document.querySelectorAll("[documenter-tab]")).map(e=>e.style.display="none");
        target.style.display = null
      }else{
        target = menu.firstElementChild
        if(target) target.click()
      }
    }
  
    // Scroll #hash
    var target = Array.from(document.body.querySelectorAll("[id]")).find(e=>e.id==decodeURIComponent(location.hash).substr(1))
    if(target) target.scrollIntoView();
  
    // documenter-admin
    let style = document.createElement("style")
    style.innerHTML = documenter.lss(documenter_admin_css)
    document.head.appendChild( style )
    // Show
    document.body.style.opacity="1"
  }

  fetch("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js").then(e=>e.text()).then(e=>{
    eval(e);
    window.hljs = hljs
    hljs.highlightAll();
    const codeElements = document.querySelectorAll('span code');
    codeElements.forEach((element) => {
      hljs.highlightElement(element)
      //hljs.highlightAll({ element });
    });
  })
  

  //// ============================ documenter ============================ ////
  //// ============================ documenter ============================ ////
  //// ============================ documenter ============================ ////
  //// ============================ documenter ============================ ////
  window.documenter = {}


  // [documenter-icon-x]
  // https://fonts.google.com/icons
  let icons = {
    'arrow-left' : '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>',
    'more'       : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>',
    'fullscreen' : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>',
    'contrast'   : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>',
    'power'      : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440v-400h80v400h-80Zm40 320q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-80 33-151t93-123l56 56q-48 40-75 97t-27 121q0 116 82 198t198 82q117 0 198.5-82T760-480q0-64-26.5-121T658-698l56-56q60 52 93 123t33 151q0 74-28.5 139.5t-77 114.5q-48.5 49-114 77.5T480-120Z"/></svg>',
    'email'      : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>',
  }
  icons["left-arrow"] = icons["arrow-left"]
  for(let icon in icons){
    let selector = "[documenter-icon-"+icon+"]";
    Array.from(document.querySelectorAll(selector)).map(e=>{
      e.innerHTML = icons[icon].split("<svg").join('<svg fill="currentColor" style="width:1.5em;height:1.5em" ');
    })
  }
  documenter.icons = icons;
  

  documenter.emitter = function (obj) {
    let triggers = [];
    obj.any = function (process, order=0) {
      triggers.push({
        event:"",
        process,
        order,
        type: 'any'
      });
    }
    obj.on = function (event, process, order=0) {
      triggers.push({
        event,
        process,
        order,
        type: 'on'
      });
    }
    obj.one = function (event, process, order=0) {
      triggers.push({
        event, 
        process,
        order,
        type: 'once'
      });
    }
    obj.emit = function (event, ...args) {
      for (let i=0; i<triggers.length ; i++) {
        const trigger = triggers[i]
        if (trigger.event == event && trigger.type!="any") {
          trigger.process.apply(obj, args);
          if (trigger.type == 'once') {
            triggers.splice(triggers.indexOf(trigger), 1);
            i--;
          }
        }
        if(trigger.type=="any"){
          trigger.process.apply(obj, [event,...args] );
        }
      }
    }
  }




  let succesTimeout = null

  progressElement = null
  function createProgressElement(){
    if(succesTimeout) clearTimeout(succesTimeout)
    if(progressElement){
      progressElement.className = ""
    }
    if(progressElement){
      if(document.body) document.body.prepend(progressElement)
      return
    }
    progressElement = document.createElement("div")
    progressElement.setAttribute("documenter-progress-element","documenter-progress-element")
    progressElement.style.position="fixed";
    progressElement.style.top  = "0px"
    progressElement.style.height  = "2px"
    progressElement.style.transition  = "0.1s linear"
    progressElement.style.zIndex  = "100"

    //if(document.querySelector("header")) document.querySelector("header").appendChild(progressElement)
    if(document.body) document.body.prepend(progressElement)

    let css=`
      @keyframes documenter-breathe {
        0% {left:0%;right:100%;}
        50% {left:0%;right:0%;}
        100% {left:190%;right:0%;}
      }
      .documenter-breathing {
        animation: documenter-breathe 2s linear infinite;
      }
    `;
    let style = document.createElement("style")
    style.innerHTML = css
    document.head.appendChild(style)
  }

  documenter.loading = function(percent=null){
    if(percent && percent>=100) return documenter.success()
    createProgressElement()
    if(progressElement.style.width=="100%"){
      progressElement.remove()
      progressElement=null
      createProgressElement()
    }
    progressElement.style.height  = "3px"  
    progressElement.style.left    = "0px"
    progressElement.style.right   = null
    if(percent==null){
      progressElement.style.width=null
      progressElement.className = "documenter-breathing"
    }else{
      progressElement.style.width= percent + "%"
      progressElement.className = ""
    }
    progressElement.style.background = "var(--primary, #17E)"
    progressElement.style.opacity = "1"
  }

  documenter.success = function(){
    createProgressElement()
    progressElement.style.height  = "3px"
    progressElement.style.left    = "0px"
    progressElement.style.right   = "0px"
    progressElement.style.width   = "100%"
    progressElement.style.opacity = "1"
    progressElement.style.background = "#4C4"
    progressElement.className = ""
    succesTimeout = setTimeout(e=>{ progressElement.style.opacity = "0"; },1000);
  }



  documenter.load = function(url,config={}){
    config.method = config.method || "GET";
    config.body   = config.body || config.data || ''


    if(url.indexOf("?")>-1){
      url += "&v=" + parseInt(Math.random() * 16**12).toString(16)
    }else{
      url += "?v=" + parseInt(Math.random() * 16**12).toString(16)
    }
    documenter.loading(0)
    return new Promise((res,rej)=>{
      var xhr = new XMLHttpRequest();
      xhr.open( config.method , url, true);
      xhr.responseType = 'arraybuffer';

      let body = null
      if(config.body instanceof FormData){// form data
        body = config.body
      }else if(typeof(config.body) == 'string'){ // string
        body = config.body
      }else if(typeof(config.body) == 'object'){ // json
        //xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        //body = JSON.stringify(config.body)
        var form_data = new FormData();
        for ( var key in config.body ) {
          form_data.append(key, config.body[key]);
        }
        body = form_data

      }

      xhr.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          var percentComplete = (event.loaded / event.total) * 100;
          documenter.loading(percentComplete.toFixed(2))
        }
      });
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          documenter.success()
          response = xhr
          let _response = {
            text : function(){
              return Promise.resolve(new TextDecoder("utf-8").decode(xhr.response))
            },
            blob : function(){
              return Promise.resolve(new Blob(
                [xhr.response],
                //{'type' : type},
              ));
            },
            json : function(){
              return Promise.resolve( JSON.parse( new TextDecoder("utf-8").decode(xhr.response) ))
            },
          }
          documenter.post.emit("load",url,_response);
          res(_response)
        } else {
          console.error('Error downloading the file. Status code: ' + xhr.status);
          rej(xhr.status)
        }
      });
      xhr.send(body);
    })
  }

  documenter.post = function(url,data){
    return documenter.load(url,{method:'POST',data:data})
  };
  documenter.emitter(documenter.post)

  documenter.jsonp = function(url) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      var f="jsonp"+(+new Date()), b=document.body;
      window[f] = d=>{ delete window[f]; b.removeChild(s); resolve(d); };
      s.src=`${url}${url.includes('?')?'&':'?'}callback=${f}&v=` + parseInt(Math.random() * 16**12).toString(16)
      b.appendChild(s);
    })
  }

  documenter.submit = function (form) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData(form);

      xhr.open("POST", form.action);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.send(formData);
    });
  };
  

  documenter.download = function(data, filename = "download.txt"){
    var element = document.createElement('a');
    if(typeof(data)=="string"){
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    }else{
      element.setAttribute('href', URL.createObjectURL(data) );
    }
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  
  documenter.info = function(text){
    let div = documenter.info.element 
    if(!div) div = documenter.info.element = document.createElement("div")
    
    div.setAttribute("documenter-info","")
    div.id = "documenter-info-id-"+documenter.info.id
    div.style.position = "fixed";
    div.style.left  = "20px"
    div.style.maxWidth = "calc(100% - 40px)"
    div.style.bottom = "20px"
    div.style.fontFamily = "monospace"
    div.style.whiteSpace = "pre"
    
    div.style.zIndex = "9999"
    
    div.style.background = "#000"
    div.style.color     = "white"
    div.style.borderRadius = "10px"
    div.style.padding ="1em"
    div.style.opacity = "1"
    div.style.transform = "translateX(0)"
    div.style.transition = "transform .5s, opacity .5s, bottom 0.5s";
    div.innerHTML = text
    
    if(documenter.info.timeout) clearTimeout(documenter.info.timeout)
    documenter.info.timeout = setTimeout(e=>{
      setTimeout(e=>div.remove(),1000)
      div.style.transform = "translate(-100%)";
      div.style.opacity = "0";
    },6000) 
    document.body.appendChild(div)
    return div;
  }

  documenter.message = function(text,remove=6000){
    if(documenter.message.id == null) documenter.message.id = 0
    documenter.message.id++ 

    let div = document.createElement("div")
    div.setAttribute("documenter-message","")
    div.id = "documenter-message-id-"+documenter.message.id
    div.style.position = "fixed";
    div.style.right  = "20px"
    div.style.maxWidth = "calc(100% - 40px)"
    div.style.bottom = "20px"
    div.style.background = "var(--back,#000)"
    div.style.color     = "var(--front,#FFF)"
    div.style.borderRadius = "10px"
    div.style.padding ="1em"
    div.style.opacity = "0"
    div.style.zIndex = "9999"
    div.style.transform = "translateX(100%)"
    div.style.transition = "transform .5s, opacity .5s, bottom 0.5s";
    div.innerHTML = text
    
    let minTop = Math.min(window.innerHeight-30,...Array.from(document.querySelectorAll("[documenter-message]")).map(e=>e.getBoundingClientRect().y) ) 
    div.style.bottom = (window.innerHeight-minTop + 20) + "px"
    

    document.body.appendChild(div)
    requestAnimationFrame(e=>{
      let el = document.querySelector("#"+div.id)
      if(el){
        el.style.opacity = "1"
        el.style.transform = "translateX(0%)"
      }
    })

    div.close = function(){
      let el = document.querySelector("#"+div.id)
      if(el){
        setTimeout(e=>el.remove(),1000)
        el.style.transform = "translate(100%)";
        el.style.opacity = "0";
      }
      Array.from(document.querySelectorAll("[documenter-message]")).map(e=>{
        if(e!=el) e.style.bottom = (parseFloat(e.style.bottom) - el.getBoundingClientRect().height - 20) + "px"
      })
    }

    setTimeout(e=>{ div.close() },remove) 
    return div;
  }

  window.addEventListener("error",function(event, source, lineno, colno, error){
    if(document.body.classList.contains("disable-error")) return
    let text = "<strong>Error:</strong> " + event.message + "<br>" +
      "<strong>Source:</strong> " + event.filename + "<br>" +
      "<strong>Line:</strong> " + event.lineno + "<br>" +
      "<strong>Column:</strong> " + event.colno + "<br>";
    let div = documenter.message("<pre style='padding:0;margin:0;font-size:.8em'>"+text+"</pre>","red")
    div.style.background="red"
  })


  
  documenter.readText = function(){
    return new Promise((res,rej)=>{
      let input =document.createElement("input")
      input.type = "file"
      input.oninput = function(event){
        var reader = new FileReader();
        reader.onload = function() {
          var text = reader.result;
          res(text)
        };
        reader.readAsText(input.files[0]);
      }
      input.click()
    })
  }
  
  documenter.readImage = function(){
    return new Promise((res, rej) => {
      let input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*"; // This will ensure only image files can be selected
      input.oninput = function(event){
        var reader = new FileReader();
        reader.onload = function() {
          var imageDataUrl = reader.result;
          res(imageDataUrl);
        };
        reader.onerror = function(error) {
          rej(error);
        };
        reader.readAsDataURL(input.files[0]);
      };
      input.click();
    });
  }

  documenter.table = function(data){
    function c(tag,attr={},html="",parent=null){
      let el = document.createElement(tag)
      for(let a in attr){
        el.setAttribute(a,attr[a])
      }
      el.innerHTML = html
      if(parent!=null) parent.appendChild(el)
      return el
    }
    function Table(obj){
      let table=c("table",{style:"width:100%;"})
        tr=c("tr",{},"",table)
          for(let o in obj[0]){
            c("th",{},o,tr)
          }
        for(let row of obj){
          tr=c("tr",{},"",table)
            for(let col in row){
              td=c("td",{},row[col],tr)
            }
        }
      return table
    }
    function Properties(obj){
      let table=c("table",{style:"width:100%;"})
        for(let key in obj){
          tr=c("tr",{},"",table)
            td=c("th",{},key,tr)
            td=c("td",{},obj[key],tr)
          
        }
      return table
    }
    if(data instanceof Array){
      return Table(data)
    }else{
      return Properties(data)
    }
  }


  documenter.modal = function(text=""){
    const render = function(html){
      var mime = html.indexOf("xmlns=") == -1 ? "text/html" : "image/svg+xml";   
      var parsed= render.parser.parseFromString(html, mime);
      return mime=="text/html" ? parsed.body.firstChild : parsed.firstChild;
    }
    render.parser = new DOMParser();
    let parent = render("<div style='position:fixed;left:0;top:0;width:100%;height:100%;background:#8888;z-index:20;backdrop-filter:blur(2px);' documenter-modal><div documenter-modal-content style='margin: 2em auto;position: relative;background: var(--back,#FFF);border-radius: 1em;max-width: calc(100% - 4em);max-height: calc(100% - 4em);top: calc(50% - 2em);transform: translate(0, -50%);width: calc(100% - 5em);box-shadow:0px 0px 10px #888C;display:flex;'><div documenter-modal-content-text style='padding:1em;overflow-y:auto;flex:1;'</div></div></div>")
    parent.firstElementChild.firstElementChild.innerHTML = text
    document.body.appendChild(parent)
    let close = render("<div hover light documenter-modal-close style='position: absolute;right: 0;top: 0;background: var(--back);border-radius: 100px;padding: 8px;transform: translate(50%, -50%);line-height: 0;'></div>")
    close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
    parent.firstElementChild.appendChild(close)
    console.log(parent)
    close.onclick = ()=>parent.remove();
    return parent
  }

  documenter.render = function(html){
    var mime = html.indexOf("xmlns=") == -1 ? "text/html" : "image/svg+xml";   
    var parsed= documenter.render.parser.parseFromString(html, mime);
    return mime=="text/html" ? parsed.body.firstChild : parsed.firstChild;
  }
  documenter.render.parser = new DOMParser();

  documenter.on = function(events,selector,fn){
    if(events=="ready") events = "DOMContentLoaded"
    if(fn==null && selector instanceof Function){
      fn = selector
      selector = false
    }
    events.split(",").map(e=>e.trim()).map(event=>{
      document.addEventListener(event,function(e){
        if(selector==false){
          return fn.bind(document)(e)
        }
        let els = e.composedPath();
        for( el of els ){
          if( el instanceof Document ) continue;
          if( el instanceof Window ) continue;
          if( el.matches && el.matches(selector) ){
            fn.bind(el)(e)
          }
        }
      })
    })
  }


  documenter.when = function(selector, process, order=0, type="on"){
    if(documenter.when.observer==null){
      documenter.when.triggers = []
      
      documenter.when.check = function(nodes) {
        for (const node of nodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            for (const trigger of documenter.when.triggers) {
              let selector = trigger.selector;
              if (node.matches(selector)) trigger.process.apply(node, [node]);
              if (node.querySelectorAll(selector).length > 0) {
                for (const el of node.querySelectorAll(selector)) {
                  trigger.process.apply(el, [el]);
                  if(trigger.type==='once'){
                    documenter.when.triggers.splice(documenter.when.triggers.indexOf(trigger), 1);
                  }
                }
              }
            }
          }
        }
      }


      documenter.when.observer = new MutationObserver((mutations) => {
        mutations = mutations.sort((a, b) => {
          return b.type.localeCompare(a.type)
        })
        for (const m of mutations) {
          if (m.type == "childList") {
            let nodes = m.addedNodes;
            documenter.when.check(nodes);
          }
        }
      });
      documenter.when.observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
      if(document.readyState=="interactive"){
        documenter.when.check([document.documentElement]);
      }else{
        document.addEventListener("DOMContentLoaded",function(){ documenter.when.check([document.documentElement]); })
      }

    }
    documenter.when.triggers.push({
      selector,
      process,
      order,
      type
    });
  }

  documenter.see = function(selector, process, order=0){
    return documenter.when(selector, process, order, "once")
  }

  documenter.markdown = function(code){
    return MarkdownConverter(code)
  }

  documenter.on("click,pointerdown","[documenter-submit]",function(e){
    if(this._innerHTML==null) this._innerHTML = this.innerHTML;
    let form = this.parentElement
    while(form.parentElement!=null){
      if(form instanceof HTMLFormElement) break;
      form = form.parentElement
    }
    if(form instanceof HTMLFormElement == false){
      e.preventDefault();
      return false;
    }

    documenter.submit(form).then(e=>{
      this.innerHTML = this._innerHTML + " âœ“"
      setTimeout(e=>{
        this.innerHTML = this._innerHTML
      },2500)
    })
    e.preventDefault();
    return false;
  })


    
  documenter.csv = {}
  documenter.csv.parse = function(text){
    text += "\n";
    let len = text.length;
    let rows = [];
    let list = [];
    let data = "";
    let inQuotes = false;
    for(let i=0; i<len ;i++ ){
      let char = text[i];
      if( inQuotes==false && char == "," ){
        list.push(data)
        data = ""
        continue
      }
      if( inQuotes==false && char=='"' ){
        inQuotes=true
        continue
      }
      if( inQuotes==true && char=='"' && text[i+1] == '"' ){
        data += '"'
        i += 1
        continue
      }
      if( inQuotes==true && char=='"' && text[i+1] != '"' ){
        inQuotes=false
        continue
      }
      if( inQuotes==false && char=="\n"){
        list.push(data)
        rows.push(list)
        list = []
        data = ""
        continue
      }
      data += char 
    }
    if(rows[rows.length-1].length==0) rows.pop()
    return rows
  }



  documenter.parent = function(el,tag){
    el = el.parentElement
    while(!el.matches(tag)){
      el = el.parentElement
      if(el.parentElement==null) break
    }
    return el
  }


  documenter.select = function(selector){
    let items = [];
    if( typeof(selector) == "string" ){
      items = Array.from(document.querySelectorAll(selector))
    }else{
      if(selector instanceof Array){
        items = [...selector]
      }else{
        items = [selector]
      }
    }
    items.parent = function(selector){
      if(items.length==0) return;
      el = items[0].parentElement
      if(selector==null) return el.parentElement
      while(!el.matches(selector)){
        el = el.parentElement
        if(el.parentElement==null) break
      }
      return el  
    }
    items.find = function(selector){
      let _items = []
      for(let item of items){
        _items.push( ... Array.from(item.querySelectorAll(selector)) )
      }
      return _items
    }

    items.list = function(){
      return Array.from(items)
    }

    items.attr = function(data,value=undefined){
      if(value===null){
        for(let item of items){
          item.removeAttribute(data)
        }
        return;
      }
      if( value===undefined ){
        if(items.length==0) return;
        return items[0].getAttribute(data)
      }

      for(let item of items){
        item.setAttribute(data,value)
      }
      return items;
    }

    return items;
  }



  documenter.debounce = function (func, time = 300) {
    let timeoutId;

    return function (...args) {
      // Clear the previous timeout if the function is called again within the delay
      clearTimeout(timeoutId);

      // Set a new timeout
      timeoutId = setTimeout(() => {
        func.apply(this, args); // Call the original function with the correct context and arguments
      }, time);
    };
  };

  documenter.Text__AllowedElements = function(parent, tagNames=["br","b","i","u","strike","sub","sup"]){
    tagNames = tagNames.map(e=>e.toLowerCase());
    var children = parent.childNodes;
    for(var i=0; i<children.length; i++){
      var child = children[i];
      if(child.nodeType == 1){
        documenter.Text__AllowedElements(child, tagNames);
        if(tagNames.indexOf(child.tagName.toLowerCase()) == -1){
          var textNode = document.createTextNode(child.innerText);
          parent.insertBefore(textNode, child);
          parent.removeChild(child);
        }
      }
    }
  }
    
  documenter.Text__AllowedProperties = function(parent, attributes=["text-align","font-weight","text-decoration"]){
    var children = parent.childNodes;
    for(var i=0; i<children.length; i++){
      var child = children[i];
      if(child.nodeType == 1){
        documenter.Text__AllowedProperties(child, attributes);
        Array.from(child.style).map(e=>{
          let have = false;
          for(let attribute of attributes){
            if(e.startsWith(attribute)){
              have = true;
              break;
            }
          }
          /*if(attributes.indexOf(e)==-1){
            child.style.setProperty(e,null)
          }*/
          if(have==false){
            child.style.setProperty(e,null)
          }
        })
      }
    }
  }


  documenter.Text__AllowedAttributes = function (parent, attributes=["style","src"]){
    attributes = attributes.map(e=>e.toLowerCase());
    var children = parent.childNodes;
    for(var i=0; i<children.length; i++){
      var child = children[i];
      if(child.nodeType == 1){
        documenter.Text__AllowedAttributes(child, attributes);
        for(var j=0; j<child.attributes.length; j++){
          var attribute = child.attributes[j];
          if(attributes.indexOf(attribute.name.toLowerCase()) == -1){
            child.removeAttribute(attribute.name);
          }
        }
      }
    }
  }

  documenter.Text__NotAllowedStyleProperties=function(parent, attributes=["fontSize","fontFamily","padding","margin","background","backgroundColor","color","textIndent","textAlign"]){
    var children = parent.childNodes;
    for(var i=0; i<children.length; i++){
      var child = children[i];
      if(child.nodeType == 1){
        documenter.Text__NotAllowedStyleProperties(child, attributes);
        attributes.map(e=>{
          child.style[e] = null
        })
      }
    }
  }


  documenter.TextInput = function(element,config={}){
    if(element.isTextInput) return
    element.setAttribute("contenteditable","true")
    if(config.language){ element.setAttribute("lang",config.language) }
    element.setAttribute("spellcheck","false")
    element.addEventListener("input",function(){
      documenter.Text__AllowedElements(element,[])
      documenter.Text__AllowedAttributes(element,[])
      documenter.Text__AllowedProperties(element,[])
    })
    Object.defineProperty(element,"value",{
      get:e=>element.innerText
    })
    element.isTextInput = true
  }

  documenter.NumberInput = function(element, config = {}) {
    if (element.isNumberInput) return;

    element.setAttribute("contenteditable", "true");
    if (config.language) {
      element.setAttribute("lang", config.language);
    }
    element.setAttribute("spellcheck", "false");

    element.addEventListener("input", function () {
      // Remove disallowed tags, attributes, and styles
      documenter.Text__AllowedElements(element, []);
      documenter.Text__AllowedAttributes(element, []);
      documenter.Text__AllowedProperties(element, []);

      // Filter only numbers (and optional characters like '.' or '-')
      let text = element.innerText;
      let filtered = text.replace(/[^0-9.\-]/g, '');

      // Only allow a single decimal point and minus at start
      let parts = filtered.match(/^-?(\d+)?(\.\d*)?/);
      if (parts) {
        element.innerText = parts[0];
      } else {
        element.innerText = '';
      }

      // Move cursor to the end
      let range = document.createRange();
      let sel = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    });

    Object.defineProperty(element, "value", {
      get: () => {
        let v = parseFloat(element.innerText);
        return isNaN(v) ? null : v;
      },
      set: (val) => {
        element.innerText = (typeof val === "number" || typeof val === "string") ? val : "";
      }
    });

    element.isNumberInput = true;
  };
    
  documenter.TextArea = function(element,config={allowedAttributes:null,allowedProperties:null,allowedElements:null}){
    if(element.isTextArea) return
    element.setAttribute("contenteditable","true")
    if(config.language){ element.setAttribute("lang",config.language) }
    element.setAttribute("spellcheck","false")
    element.addEventListener("input",function(){
      if( config.allowedElements!=null ) documenter.Text__AllowedElements(element,config.allowedElements)
      if( config.allowedAttributes!=null ) documenter.Text__AllowedAttributes(element,config.allowedAttributes)
      if( config.allowedProperties!=null ) documenter.Text__AllowedProperties(element,config.allowedProperties)
    })
    element.isTextArea = true
  }



  /**
   * Config: 
   *  head
   *  toolbar           : 
   *  allowedProperties : []
   *  allowedAttributes : [] 
   */
  documenter.TextEditor = function(textarea,config={}){
    

    config.head = config.head ? config.head : documenter.TextEditor.head
    config.toolbar = config.toolbar ? config.toolbar : documenter.TextEditor.toolbar
    config.allowedProperties = config.allowedProperties ? config.allowedProperties : documenter.TextEditor.allowedProperties
    config.allowedAttributes = config.allowedAttributes ? config.allowedAttributes : documenter.TextEditor.allowedAttributes
    config.language = config.language ? config.language : documenter.TextEditor.language

    let textEditor = {textarea:textarea,config:config}
    let toolbarHTML = {
      "formatBlock"         : '<select command="formatBlock" tabindex="-1"><option value="h1">Header 1</option><option value="h2">Header 2</option><option value="h3">Header 3</option><option value="p">Paragraph</option><option value="pre">Quotation</option><option value="div">Division</option></select>',
      "bold"                : '<div command="bold"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z"/></svg></div>',
      "italic"              : '<div command="italic"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z"/></svg></div>',
      "underline"           : '<div command="underline"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z"/></svg></div>',
      "strikeThrough"       : '<div command="strikeThrough"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M80-400v-80h800v80H80Zm340-160v-120H200v-120h560v120H540v120H420Zm0 400v-160h120v160H420Z"/></svg></div>',
      "justifyLeft"         : '<div command="justifyLeft"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"/></svg></div>',
      "justifyCenter"       : '<div command="justifyCenter"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z"/></svg></div>',
      "justifyRight"        : '<div command="justifyRight"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z"/></svg></div>',
      "justifyFull"         : '<div command="justifyFull"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-120v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/></svg></div>',
      "insertUnorderedList" : '<div command="insertUnorderedList"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg></div>',
      "insertOrderedList"   : '<div command="insertOrderedList"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/></svg></div>',
      "space"               : '<space style="flex:1"></space>',
    }

    let html  =`
    <style>
      body{ margin:0;display:flex;flex-direction:column;}
      *{ box-sizing:border-box; }
      /*[command],select{*/
      toolbar > *{
        padding:6px;
        border-radius:2px;
        cursor:pointer;
        font-family:system-ui;
        display:inline-flex;
        align-items:center;
        background: #88888808;
        color: #888;
        border:none;
        height:36px;
        font-size:1em;
        outline:none;
      }
      /*[command]:hover,select:hover{*/
      toolbar [command]:hover,toolbar select:hover,toolbar button:hover{
        background:#8883;
      }
      toolbar space{
        visibility:hidden;
      }
      iframe{
        outline:none;
        height:calc(100% - 42px);
        overflow:auto;
        border:2px solid #8882;
        width:100%;
      }
      iframe:focus,iframe.focus{
        border:2px solid #17E;
      }
    </style>
    <toolbar style="display: flex;align-items: center;margin-bottom:2px;gap:2px;padding:2px 0;">
      `+config.toolbar.map(e=>toolbarHTML[e]).join("")+`
    </toolbar>
    <iframe id=document></iframe>`;

    

    textEditor.iframe = document.createElement("iframe");
    textEditor.iframe.style.border = "none";
    textEditor.iframe.style.resize = "vertical";
    textEditor.iframe.setAttribute("documenter-texteditor","documenter-texteditor")
    
    Object.defineProperty(textEditor, "window", { get: function() { return textEditor.iframe.contentWindow; } }); 
    Object.defineProperty(textEditor, "document", { get: function() { return textEditor.iframe.contentDocument; } });
    Object.defineProperty(textEditor, "toolbar", { get: function() { return this.document.querySelector("toolbar") } });
    Object.defineProperty(textEditor, "innerWindow", { get: function() { return this.document.querySelector("#document").contentWindow; } }); 
    Object.defineProperty(textEditor, "innerDocument", { get: function() { return this.document.querySelector("#document").contentDocument; } });
    Object.defineProperty(textEditor, "body", { get: function() { return this.innerDocument.querySelector("body") } });
    Object.defineProperty(textEditor, "value", { get: function() { return this.body.innerHTML }, set: function(val){this.body.innerHTML=val } });

    let lastSelect = [];
    function saveSelection() {
      selection = textEditor.innerWindow.getSelection();
      lastSelect = [selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset];
    }
    function restoreSelection() {
      selection = textEditor.innerWindow.getSelection();
      selection.setBaseAndExtent(lastSelect[0], lastSelect[1], lastSelect[2], lastSelect[3]);
    }

    textEditor.iframe.onload = function(){

      function command(event){
        saveSelection();
        let els = event.composedPath()
        for( el of els ){
          if( el instanceof textEditor.iframe.contentWindow.Document ) continue;
          if( el instanceof textEditor.iframe.contentWindow.Window ) continue;
          if( el.matches("select[command]") ){ return false; }
          if( el.matches("[command]") ){
            let command = el.getAttribute("command");
            let value = el.getAttribute("value");
            if( command==null ) return;
            if( command.trim()=="" ) return;
            textEditor.innerDocument.execCommand(command, false, value);
            event.preventDefault();
            return false;
          }
        }
      }

      function refresh(event){
        if(!textEditor.innerDocument) return;
        let els = event.composedPath()
        for( el of els ){
          if( el instanceof textEditor.iframe.contentWindow.Document ) continue;
          if( el instanceof textEditor.iframe.contentWindow.Window ) continue;
        }
        if(config.allowedAttributes) documenter.Text__AllowedAttributes( textEditor.body, config.allowedAttributes )
        if(config.allowedProperties) documenter.Text__AllowedProperties( textEditor.body, config.allowedProperties )
      }


      setInterval(()=>{
        if(!textEditor.document) return;
        if(!textEditor.innerDocument) return;
        for(let el of textEditor.document.querySelectorAll("[command]")){
          el.style.display = null;
          if(el.getAttribute("command")=="formatBlock"){
            el.value = textEditor.innerDocument.queryCommandValue( "formatBlock" ) || "p"
          }
          if(textEditor.innerDocument.queryCommandState(el.getAttribute("command"))){
            el.style.backgroundColor = "#17E";
            el.style.color = "#FFF";
          }else{
            el.style.backgroundColor = null;
            el.style.color = null;
          }
        }
        //TODO : FIX
        //textarea.value = textarea.innerHTML = textEditor.body.innerHTML
      },100)

      


      // on click tooltip
      textEditor.document.addEventListener("pointerdown", function(event){ command(event) });

      // Outer & Header
      textEditor.document.body.innerHTML = html
      textEditor.document.body.querySelector("select[command=formatBlock]").oninput = function(){
        restoreSelection()
        textEditor.innerDocument.execCommand("formatBlock", false, this.value);
        textEditor.body.focus()
      }

      

      // Inner Content
      textEditor.innerDocument.body.setAttribute("contenteditable","true")
      textEditor.innerDocument.head.innerHTML = config.head
      textEditor.innerDocument.body.innerHTML = textarea.value

      textEditor.innerDocument.addEventListener("keydown", function(event){ refresh(event) });
      textEditor.innerDocument.addEventListener("keyup", function(event){ refresh(event) });
      textEditor.innerDocument.addEventListener("pointerdown", function(event){ refresh(event) });
      textEditor.innerDocument.addEventListener("pointerup", function(event){ refresh(event) });
      textEditor.body.addEventListener("focus",function(){textEditor.document.querySelector("iframe").classList.add("focus")})
      textEditor.body.addEventListener("blur",function(){textEditor.document.querySelector("iframe").classList.remove("focus")})

      // Language
      if(config.language){ textEditor.body.setAttribute("lang",config.language);textEditor.innerDocument.documentElement.setAttribute("lang",config.language) }
      textEditor.body.setAttribute("spellcheck", "false")

      // Value
      textEditor.innerDocument.body.oninput = ()=>{
        textarea.value = textarea.innerHTML = textEditor.body.innerHTML
      }
    }

    textarea.parentElement.insertBefore(textEditor.iframe,textarea)
    textarea.style.display = "none"
    textEditor.iframe.style.width="100%"
    textEditor.iframe.style.height=textarea.style.height
    textEditor.iframe.textEditor = textEditor
    return textEditor
  }

  documenter.TextEditor.head              = "<style>body{}</style>"
  documenter.TextEditor.toolbar           = ["formatBlock","bold","italic","underline","strikeThrough","justifyLeft","justifyCenter","justifyRight","justifyFull","insertUnorderedList","insertOrderedList","space"]
  documenter.TextEditor.allowedProperties = ["font-weight","font-style"]
  documenter.TextEditor.allowedAttributes = ["style","src","alt"]
  documenter.TextEditor.language          = "en"
  


  documenter.Iframe = function(content){
    let iframe = document.createElement("iframe");
    //iframe.src="about:blank";
    iframe.onload = function(){
      iframe.contentDocument.body.innerHTML = content
    }
    return iframe;
  }

  documenter.markdown = function(code){
    return MarkdownConverter(code)
  }

  documenter.lss = function (code/*, variables = {}*/) {
    const selectors = {
      "@mobile": "@media only screen and (max-width: 600px)",
      "@tablet": "@media only screen and (min-width: 600px) and (max-width:1080px)",
      "@desktop": "@media only screen and (min-width:1081px)",
      "@mobile-text": "@media screen and (max-height: 400px)"
    };
    code = code.split(/\/\*.*\*\//).join("");
    /*
    for (const key in variables) {
      if (variables.hasOwnProperty(key)) {
        const value = variables[key];
        code = code.split(key).join(value);
      }
    }
    */
  
    let i = 100;
    while ((mat = code.matchRequirsive("\/*", "*\/"))) {
      code = code.substring(0,mat[2]-2) + code.substring(mat[3])
      i--; if(i==0) break;
    }
    
    function Divide(code) {
      let data = { selector: "", children: [], code: "" };
      var mat = null;
      /**
       * **;** character index
       */
      while ((mat = code.matchRequirsive("{", "}"))) {
        // Tag bul
        // Ara Kodu varsa dataya ekle
        // tagÄ± deÄŸiÅŸtir tekrar requirsive olarak git
        // buradan devam et.
        var tag = "";
        var dotIndex = code.lastIndexOf(";", mat[2]);
        if (dotIndex != -1 && dotIndex < mat[2]) {
          tag = code.substr(dotIndex + 1, mat[2] - dotIndex - 2);
        }
        else {
          tag = code.substr(0, mat[2] - 1);
          dotIndex = -1;
        }
        // Ara Kod Prev Code ekleme
        var preCode = code.substr(0, dotIndex + 1);
        var insideCode = mat[1];
        if (preCode.trim() != "") {
          //data.children.push({selector:"",code:preCode.trim(),children:[]})
          data.code += preCode.trim();
        }
        code = code.substr(mat[3]);
        //code = code.pop(0, mat[3]);
        var newLssPart = Divide(insideCode);
        newLssPart.selector = tag.trim();
        data.children.push(newLssPart);
      }
      if (code.trim() != "") {
        data.code += code.trim();
      }
      return data;
    }
    function JoinTag(selector) {
      if (selector.substring(0, 1) == "&") {
        return selector.substring(1);
      }
      else {
        return " " + selector;
      }
    }
    let CSS = "";
    function Join(data, tag = "", superScript = "") {
      if (data.code.trim() != "") {
        var dumpTag = tag;
        if (superScript != "") {
          dumpTag = selectors[superScript] + "{" + dumpTag;
        }
        if (dumpTag != "") {
          CSS += dumpTag + "{" + data.code + "}" + "\n";
        }
        if (superScript != "") {
          CSS += "}\n";
        }
      }
      // @mobile ..
      for (let i = 0; i < data.children.length; i++) {
        const element = data.children[i];
        if (element.selector in selectors) {
          Join(element, tag, element.selector);
        }
        else if (element.selector.substr(0, 1) == "@") {
          CSS += JoinNormal(element);
        }
        else {
          var splitted = element.selector.split(",");
          for (let j = 0; j < splitted.length; j++) {
            const split = splitted[j];
            Join(element, tag + JoinTag(split), superScript);
          }
        }
      }
    }
    function JoinNormal(data) {
      var totalCSS = "";
      for (let i = 0; i < data.children.length; i++) {
        const element = data.children[i];
        totalCSS += JoinNormal(element);
      }
      return data.selector + "{" + totalCSS + data.code + "}";
    }
    var divided = Divide(code);
    Join(divided);
    return CSS;
  }
  


    
  documenter.translate = function(text,source='en-US',target="tr-TR"){
    return new Promise((resolve,reject)=>{
      fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl='+source+'&tl='+target+'&dt=t&q='+encodeURIComponent(text))
      .then(response => response.json())
      .then(data => {
        var result = data.filter(e=>e!=null && e instanceof Array && e.length!=0)[0].map(e=>e[0]).join(" ")
        resolve(result);
        //resolve(data[0][0][0]);
      });
    });
  }




  documenter.dropdown = function(e){
    if(e.querySelector(".dropdown-value")) return;
    let dropdown = e
    let select = document.createElement("input")
    select.style.display = "none";
    select.setAttribute("name",e.getAttribute("name"))
    e.parentElement.insertBefore(select, e)

    let value = document.createElement("div")
    value.classList.add('dropdown-value')

    let list  = document.createElement("div")
    list.classList.add('dropdown-list')
    function update(){
      Array.from(value.childNodes).map(e=>e.remove())
      // Find Names
      if(!dropdown.hasAttribute("multiple")){ // SINGLE
        let val = list.querySelector("[value='"+dropdown.getAttribute("value")+"']")
        if(val){ Array.from(val.cloneNode(true).childNodes).map(e=>value.appendChild(e)) }
      }else{ // MULTIPLE
        let v = (dropdown.getAttribute("value") || "").split(",")
        Array.from(list.querySelectorAll("[value]")).map(item=>{
          let input =item.querySelector("input[type=checkbox]");
          input.checked = v.indexOf(item.getAttribute("value")) == -1 ? false : true
        })

        let l=Array.from(list.querySelectorAll("[value]")).filter(item=>{
          return v.indexOf(item.getAttribute("value")) == -1 ? false : true
        });
        //l.map(e=>Array.from(e.cloneNode(true).childNodes).map(e=>e.tagName!="INPUT" ? value.appendChild(e) : "" ) )
        let items = l.map(e=>Array.from(e.cloneNode(true).childNodes).filter(e=>e.tagName!="INPUT" ? true : false ) )
        items.map(e=>{
          let div = document.createElement("div")
          div.className="dropdown-value-item"
          e.map(e=>div.appendChild(e))
          value.appendChild(div)
        })
      }
      
      
      select.value = dropdown.getAttribute("value")
      if(dropdown.value != dropdown.getAttribute("value")){
        dropdown.value = dropdown.getAttribute("value")
        dropdown.dispatchEvent(new Event('input', { bubbles: true }));
      }
      dropdown.value = dropdown.getAttribute("value")
      
    }
    Array.from(e.children).map(e=>{
      e.onclick = function(){
        let curr = e.getAttribute("value")
        if(dropdown.hasAttribute("multiple")){
          let v = (dropdown.getAttribute("value") || "").split(",")
          if(v.indexOf(curr)==-1){
            v.push(curr)
          }else{
            v.splice(v.indexOf(curr),1)
          }
          dropdown.setAttribute("value",v.join(","))
        }else{
          dropdown.setAttribute("value",curr)
        }
        
        update();
        if(!dropdown.hasAttribute("multiple")){
          dropdown.blur()
        }
      }
      if(dropdown.hasAttribute("multiple")){
        let checkbox = document.createElement("input")
        checkbox.type="checkbox"
        e.prepend(checkbox)
      }
      list.appendChild(e)
    });
    e.appendChild(value)
    e.appendChild(list)
    e.tabIndex = 1;
    // VarsayÄ±lan SeÃ§enek
    select.value = e.getAttribute("value")
    update();
  }
  /*
  document.addEventListener("DOMContentLoaded",function(){
    documenter.when("dropdown",function(e){
      documenter.dropdown(e)
    })
    Array.from(document.querySelectorAll("dropdown")).map(e=>{
      //documenter.dropdown(e)
    })
  })
  */
  documenter.when("dropdown",function(e){
    documenter.dropdown(e)
  })



    

  // DEFAULTER
  if(document.documentElement.requestFullscreen==null && document.documentElement.webkitRequestFullscreen){
    document.documentElement.requestFullscreen = document.documentElement.webkitRequestFullscreen
  }
  

  // WILL REMOVE
  /*
  documenter.see = function(selector, process, order){

    let triggers = []
    documenter.see = function (selector, process, order) {
      triggers.push({
        selector,
        process,
        order
      });
    }
    documenter.see(selector, process, order);

    document.addEventListener('DOMContentLoaded', function () {
      function Check(nodes) {
        for (const node of nodes) {
          if(node.nodeType===Node.ELEMENT_NODE){
            for (const trigger of triggers) {
              let selector = trigger.selector;
              if (node.matches(selector)) trigger.process.apply(node, [node]);
              if (node.querySelectorAll(selector).length > 0) {
                for (const el of node.querySelectorAll(selector)) {
                  trigger.process.apply(el, [el]);
                }
              }
            }
          }
        }
      }

      var observer = new MutationObserver((mutations) => {
        mutations = mutations.sort((a, b) => {
          return b.type.localeCompare(a.type)
        })
        for (const m of mutations) {
          if (m.type == "childList") {
            let nodes = m.addedNodes;
            Check(nodes);
          }
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      Check([document.body]);
    })
  }
  */




  

  

})()
