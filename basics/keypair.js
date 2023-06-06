const { generateKeyPairSync } = require("crypto");

// rsa = Rivest–Shamir–Adleman
const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 1024,
    publicKeyEncoding: {
        type: "spki",
        format: "pem",
    },
    privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
    },
});

console.clear();
console.log(privateKey);
console.log(publicKey);

module.exports = { privateKey, publicKey };
