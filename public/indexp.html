const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

/* =====================
   PROXY ROUTE
===================== */
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send("Missing url parameter");

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });

    const contentType = response.headers.get("content-type");
    if (contentType) res.set("Content-Type", contentType);

    const body = await response.text();
    res.send(body);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
});

/* =====================
   MAIN PAGE
===================== */
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Purple Proxy</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');
*{box-sizing:border-box;font-family:Orbitron}

body{
  margin:0;
  height:100vh;
  background:radial-gradient(circle at top,#1b002b,#000);
  color:#e6d9ff;
  overflow:hidden;
}

/* SPACE BACKGROUND */
.space{position:fixed;inset:0;z-index:0}
.planet{
  position:absolute;
  width:320px;height:320px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%,#e6c7ff,#6a00b8);
  box-shadow:0 0 80px rgba(180,100,255,.6);
  top:55%;left:50%;
  transform:translate(-50%,-50%);
}
.ring{
  position:absolute;
  width:460px;height:160px;
  border:4px solid rgba(210,150,255,.6);
  border-radius:50%;
  top:55%;left:50%;
  transform:translate(-50%,-50%) rotateX(65deg);
  animation:spin 14s linear infinite;
}
@keyframes spin{
  to{transform:translate(-50%,-50%) rotateX(65deg) rotateZ(360deg)}
}

/* TOP BAR */
header{
  position:relative;
  z-index:2;
  background:rgba(30,0,50,.85);
  padding:12px;
  display:flex;
  gap:8px;
  align-items:center;
}

.nav-btn, select{
  padding:10px 14px;
  border-radius:10px;
  border:none;
  background:#1b002b;
  color:#e6d9ff;
  cursor:pointer;
}

input{
  flex:1;
  padding:14px;
  border-radius:12px;
  border:none;
  background:#12001f;
  color:#e6d9ff;
}

.go{
  padding:14px 20px;
  border-radius:12px;
  border:none;
  background:linear-gradient(135deg,#8a2be2,#c77dff);
  font-weight:600;
  cursor:pointer;
}

.links{
  display:flex;
  gap:6px;
}
.links button{
  background:#1b002b;
}

/* IFRAME */
iframe{
  width:100%;
  height:calc(100vh - 74px);
  border:none;
  background:black;
  position:relative;
  z-index:2;
}

/* HINT */
#hint{
  position:absolute;
  top:55%;
  left:50%;
  transform:translate(-50%,-50%);
  color:#7b5cff;
  opacity:.8;
  z-index:1;
  pointer-events:none;
}
</style>
</head>

<body>

<div class="space">
  <div class="planet"></div>
  <div class="ring"></div>
</div>

<header>
  <!-- LEFT -->
  <button class="nav-btn" onclick="goBack()">⬅</button>
  <button class="nav-btn" onclick="goForward()">➡</button>
  <button class="nav-btn" onclick="reloadPage()">⟳</button>

  <!-- MODE -->
  <select id="mode">
    <option value="proxy">My Proxy</option>
    <option value="brave">Brave</option>
  </select>

  <!-- SEARCH -->
  <input id="q" placeholder="Search or enter address">
  <button class="go" onclick="go()">GO</button>

  <!-- RIGHT -->
  <div class="links">
    <button class="nav-btn" onclick="location.href='index.html'">Home</button>
    <button class="nav-btn" onclick="location.href='apps.html'">Apps</button>
    <button class="nav-btn" onclick="location.href='ProxyLinks.html'">Proxy Links</button>
    <button class="nav-btn" onclick="location.href='BlankLauncher.html'">Blank Launcher</button>
    <button class="nav-btn" onclick="location.href='chat.html'">Chatroom</button>
  </div>
</header>

<div id="hint">type smth to get started</div>
<iframe id="view"></iframe>

<script>
const frame = document.getElementById("view");

function go(){
  let q=document.getElementById("q").value.trim();
  let mode=document.getElementById("mode").value;
  if(!q) return;

  document.getElementById("hint").style.display="none";

  let url;
  if(q.includes(".") && !q.includes(" ")){
    if(!q.startsWith("http")) q="https://"+q;
    url=q;
  } else {
    url="https://search.brave.com/search?q="+encodeURIComponent(q);
  }

  frame.src = mode==="proxy"
    ? "/proxy?url="+encodeURIComponent(url)
    : url;
}

function goBack(){ try{frame.contentWindow.history.back()}catch{} }
function goForward(){ try{frame.contentWindow.history.forward()}catch{} }
function reloadPage(){ try{frame.contentWindow.location.reload()}catch{frame.src=frame.src} }

document.getElementById("q").addEventListener("keydown",e=>{
  if(e.key==="Enter") go();
});
</script>

</body>
</html>`);
});

app.listen(PORT, () => {
  console.log("Proxy running on port " + PORT);
});
