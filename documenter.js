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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&family=Ubuntu:wght@400&display=swap" rel="stylesheet">
  <!-- MD TO HTML LIBRARY -->
  <!-- CODE TO HTML LIBRARY -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css" integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css" integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body{
      font-family: 'Ubuntu', sans-serif;
      max-width:960px;
      margin:auto;
      padding-top:4em;
      line-height:1.5;
      color:#FFF;
      background:#181818;
    }
    code,.code{
      font-family: 'Ubuntu Mono', monospace;
      background: #EEE;
      color:#444;
      padding: 4px;
      border-radius:4px;
      margin:4px;
      box-sizing: border-box;
      font-size: 16px;
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
      border: 1px solid #dee2e6;
      width:100%;
    }
    table th,table td{
      border: 1px solid #dee2e6;
      padding: 0.5rem;
      /* vertical-align: top; */
    }
    button,.button{
      display:inline-block;
      background:#4AF;
      color:white;
      padding:6px 12px;
      margin:2px;
      border:none;
      border-radius:6px;
      cursor:pointer;
      font-size:16px;
      text-decoration: none;
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
  </style>
  </head>
  `;

  // Parser
  let parser = new DOMParser();
  let html = parser.parseFromString(libraries, "text/html");
  
  // Append Libraries
  document.head.append(...html.head.children);
  
  Promise.all([
    fetch("https://cdn.jsdelivr.net/npm/marked/marked.min.js").then(e=>e.text()),
    fetch("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js").then(e=>e.text()),
    fetch(parameters.file,{cache:"no-cache"}).then(e=>e.text()),
  ]).then(([_marked,_hljs,file])=>{
    eval(_marked);
    eval(_hljs);
    let doc = document.createElement("div");
    doc.innerHTML = marked.parse(file);
    doc.id = "doc";
    document.body.append(doc);
    hljs.highlightAll();
  })


})()
