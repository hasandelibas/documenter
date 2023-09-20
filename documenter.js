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
      max-width:960px;
      margin:auto;
      padding-top:50px;
      line-height:1.5;
      font-size:16px;
      --color:#222;
      --background:#F8F8F8;
      --color-primary:#17E;
      --color-primary-text:#FFF;
      --menu-width: 260px;
      color:var(--color);
      background:var(--background);
    }
    body.theme-dark{
      --color:#FFF;
      --background:#222;
    }
    body.theme-light{
      --color:#222;
      --background:#F8F8F8;
    }
    content{
      display:block;
      position:fixed;
      top:50px;
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
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      gap: 10px;
      box-shadow:0 0 10px #0008;
      background:var(--background);
    }
    header .space{
      flex:1;
    }
    header a,[button],.button,button{
      border-radius: 20px;
      padding: 6px 16px;
      text-decoration: none;
      background: var(--color-primary);
      color: white;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      font-family: inherit;
      box-sizing: border-box;
      line-height: 1.5;
    }
    [button],.button{
      margin-right: 6px;
    }
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
      opacity:.8;
    }
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
    }
    menu a{
      display:block;
      padding:10px;
      text-decoration:none;
      color:var(--color);
      border-radius:6px;
      /* NEW */
      border-radius: 0px 90px 90px 0px; 
    }
    menu a:hover{
      background:#8882;
    }
    menu a.active{
      background:var(--color-primary);
      color:var(--color-primary-text);
      opacity: 1;
    }
    menu .menu-H2 {
      padding-left: 24px;
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
    }

    body.hide-menu menu{
      display:none;
    }
    body.hide-menu main{
      width: 100%;
      left:0px;
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
    }
    
    table code{
      margin:0;
      padding:4px;
    }
    table{
      border-collapse: collapse;
      border: 1px solid #8884;
      width:100%;
    }
    table th,table td{
      border: 1px solid #8884;
      padding: 0.5rem;
      /* vertical-align: top; */
    }
    button,.button,[button]{
      display:inline-block;
      background:var(--color-primary);
      color:white;
      padding:6px 12px;
      margin:2px;
      border:none;
      border-radius:20px;
      cursor:pointer;
      font-size:16px;
      text-decoration: none;
    }
    input,textarea{
      display:inline-block;
      padding:6px 12px;
      margin:2px;
      border:none;
      border-radius:6px;
      font-size:16px;
    }
    button:hover,.button:hover{
      box-shadow:0 0 6px #0002;
    }
    
    .preview{
      padding: 4px;
      padding-top: 2.4em;
      position: relative;
      margin: 4px;
      box-shadow: 0 0 34px #0004;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .preview::before{
      content: attr(title);
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIwIiByeT0iNi4yNTAwNCIgcng9IjYuMjUwMDQiIGlkPSJzdmdfMiIgY3k9IjE0IiBjeD0iMjciIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZkZDgwMCIvPgogIDxlbGxpcHNlIHN0cm9rZS13aWR0aD0iMCIgcnk9IjYuMjUwMDQiIHJ4PSI2LjI1MDA0IiBpZD0ic3ZnXzEiIGN5PSIxNCIgY3g9IjEyIiBzdHJva2U9IiNmZmYiIGZpbGw9IiNlZDU5NGEiLz4KICA8ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjAiIHJ5PSI2LjI1MDA0IiByeD0iNi4yNTAwNCIgaWQ9InN2Z18zIiBjeT0iMTQiIGN4PSI0MyIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjNWFjMDVhIi8+Cjwvc3ZnPg==");
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.4em;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: contain;
      background-color: #f1f1f1;
      display: flex;
      align-items: center;
      color: #666;
      text-indent: 82px;
      font-weight: bold;
    }

    body{
      opacity:0;
    }
    a{
      /*
      color: var(--color-primary);
      font-weight: bold;
      text-decoration: none;
      */
    }
    h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0.5em 0;
    }
    pre code{
      overflow-x:auto;
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
    }
    li[prefix="+"]:before{
      color: var(--color-primary);
    }
    li[prefix="+"]:after{
      content: "";
      color: var(--color-primary);
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
      background: var(--color);
    }

    header menu-opener{
      width: 40px;
      height: 40px;
      min-width:40px;
      min-height:40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      cursor: pointer;
    }

    menu-opener:hover{
      background: #0002;      
    }
    
    @media (max-width: 600px) {
      body{
        --menu-width: calc(100% - 0px);
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
      border-radius: 100%;
      cursor: pointer;
      background:transparent;
      color:inherit;
      padding:0;
    }
    [icon-button]:hover{
      background: #0002;
    }

  </style>
  </head>
  `;


Element.prototype.empty = function(){
  while(this.firstChild){
    this.removeChild(this.firstChild)
  }
}
  // Parser
  let parser = new DOMParser();
  let html = parser.parseFromString(libraries, "text/html");
  
  // Append Libraries
  document.head.append(...html.head.children);


  if(parameters.theme){
    document.body.classList.add("theme-"+parameters.theme)
  }


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
      //{ pattern: /``(.*?)``/g, replacement: '<code>$1</code>' },
      //{ pattern: /`(.*?)`/g, replacement: '<code>$1</code>' },
      { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' },

      { pattern: /^# (.*?)$/gm, replacement: '<h1>$1</h1>' },
      { pattern: /^## (.*?)$/gm, replacement: '<h2>$1</h2>' },
      { pattern: /^### (.*?)$/gm, replacement: '<h3>$1</h3>' },
      { pattern: /^#### (.*?)$/gm, replacement: '<h4>$1</h4>' },
      { pattern: /^##### (.*?)$/gm, replacement: '<h5>$1</h5>' },
      { pattern: /^###### (.*?)$/gm, replacement: '<h6>$1</h6>' },
      { pattern: /^\s*\- (.*)/gm, replacement: '<li prefix="-">\n$1\n</li>' },
      { pattern: /^\s*\+ (.*)/gm, replacement: '<li prefix="+">\n$1\n</li>' },
      { pattern: /^\s*\* (.*)/gm, replacement: '<li prefix="*">\n$1\n</li>' },
      
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
      console.log(mat)
      let language = mat[1].split("\n")[0].trim()

      let className="language-"+language
      console.log(className)
      if(language=="js"){
        className="language-javascript"
      }
      let code = mat[1].split("\n").slice(1).join("\n")
      code = code.split("<").join("&lt;")
      htmlText = htmlText.replace(mat[0], '<pre><code class="'+className+'">'+code+'</code></pre>' )
    }

    rules.forEach(rule => {
      htmlText = htmlText.replace(rule.pattern, rule.replacement);
    });


    return htmlText;
  
  }


  
  
  document.addEventListener("DOMContentLoaded", Render)
  //document.addEventListener("load", Render)


  function Render(){
    let header = document.body.querySelector("header")
    if(header){
      document.body.className += header.getAttribute("body-class")
      header.remove()

      // menu-opener
      let contains = header.getAttribute("body-class") && header.getAttribute("body-class").indexOf("hide-menu") > -1 
      if( !document.body.querySelector("header menu-opener") && !contains ){
        let menuOpener = document.createElement("menu-opener");
        menuOpener.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`
        header.prepend(menuOpener)
        menuOpener.onclick = ()=>{
          document.body.classList.toggle("hide-menu")
        }
      }

    }


    let menu    = document.createElement("menu")
    let main    = document.createElement("main")
    let content = document.createElement("content")
    
    main.innerHTML = MarkdownConverter(document.body.innerHTML)
    main.id="main"
    document.body.empty()
    
    menu.innerHTML = Array.from(main.querySelectorAll("h1,h2")).map(e=>{
      let a = document.createElement("a")
      e.id = e.innerText.trim().split(/\s+/).join("-")
      a.href = "#" + e.id
      a.innerText = e.innerText
      a.className = "menu-"+e.tagName
      a.setAttribute("onclick","Array.from(document.querySelectorAll('menu a')).map(e=>e.classList.remove('active'));this.classList.add('active');")
      if(decodeURIComponent(location.hash).substring(1)==e.id){a.classList.add("active")} 
      return a.outerHTML
    }).join("")

    
    
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
      }
      document.head.prepend(title)
    }
    // Show
    document.body.style.opacity="1"
    // Scroll #hash
    var target = Array.from(document.body.querySelectorAll("[id]")).find(e=>e.id==decodeURIComponent(location.hash).substr(1))
    if(target) target.scrollIntoView();
        
  }

  fetch("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js").then(e=>e.text()).then(e=>{
    eval(e);
    hljs.highlightAll();
  })
  /*
  Promise.all([
    fetch("https://cdn.jsdelivr.net/npm/marked/marked.min.js").then(e=>e.text()),
    fetch("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js").then(e=>e.text()),
  ]).then(([_marked,_hljs])=>{
    eval(_marked);
    eval(_hljs);
    //Render()
    hljs.highlightAll();
  })
  */







  progressElement = null
  function createProgressElement(){
    if(progressElement){
      progressElement.className = ""
    }
    if(progressElement) return;
    progressElement = document.createElement("div")
    progressElement.style.position="absolute";
    progressElement.style.top  = "0px"
    progressElement.style.height  = "2px"

    if(document.querySelector("header")) document.querySelector("header").appendChild(progressElement)
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

  window.DOC = {}
  window.Documenter = window.DOC;

  DOC.loading = function(){
    createProgressElement()
    progressElement.style.left    = "20%"
    progressElement.style.right   = "20%"
    progressElement.style.background = "var(--color-primary, #17E)"
    progressElement.style.display = "block";
    progressElement.className = "documenter-breathing"
  }

  DOC.success = function(){
    createProgressElement()
    progressElement.style.left    = "0px"
    progressElement.style.right   = "0px"
    progressElement.style.background = "#4C4"
    setTimeout(e=>{ progressElement.style.display = "none"; },2000);
  }



  DOC.download = function(url){
    createProgressElement()
    return new Promise((res,rej)=>{
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          var percentComplete = (event.loaded / event.total) * 100;
          let _percent =  percentComplete.toFixed(0) + "%"
          progressElement.style.width = _percent
          progressElement.style.left    = "0px"
          progressElement.style.background = "var(--color-primary, #17E)"
        }
      });
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          var downloadedData = xhr.responseText;
          progressElement.style.background = "#4C4";
          setTimeout(e=>{progressElement.remove()},3000)
          res(downloadedData)
          console.log('Download completed!');
        } else {
          console.error('Error downloading the file. Status code: ' + xhr.status);
        }
      });
      xhr.send();
    })
  }


})()
