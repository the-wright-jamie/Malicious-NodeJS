const fs = require("fs");

export class Worker {
  saveCookie(cookie: string) {
    const cookies = "./cookies.log";

    fs.appendFile(cookies, `\n${cookie}`, (err: any) => {
      if (err) console.log(err);
      console.log(`🍪 ${cookie}`);
    });

    return true;
  }
}
