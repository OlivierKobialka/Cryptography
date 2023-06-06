const { createHmac } = require("crypto");

// hmac = hash-based message authentication code
const key = "secret";
const msg = "Message to be hashed";

const hmac = createHmac("sha256", key).update(msg).digest("hex");

const key2 = "secret2";
const hmac2 = createHmac("sha256", key2).update(msg).digest("hex");

console.log("=============================");
console.log(hmac);
console.log("=============================");
console.log(hmac2);
console.log("=============================");
