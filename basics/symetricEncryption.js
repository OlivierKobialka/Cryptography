const { createCipheriv, createDecipheriv, randomBytes } = require("crypto");

const msg = "This is a secret message";
const key = randomBytes(32);
// iv = initialization vector
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

let encryptedMsg = cipher.update(msg, "utf8", "hex");
encryptedMsg += cipher.final("hex");

const decipher = createDecipheriv("aes256", key, iv);
let decryptedMsg = decipher.update(encryptedMsg, "hex", "utf8");
decryptedMsg += decipher.final("utf8");

console.log(`Original message: ${msg}`);
console.log(`Encrypted message: ${encryptedMsg}`);
console.log(`Decrypted message: ${decryptedMsg}`);
