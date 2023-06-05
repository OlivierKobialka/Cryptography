const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const msg = "This is a secret message";

const encryptedData = publicEncrypt(publicKey, Buffer.from(msg));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));
