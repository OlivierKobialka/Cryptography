const { createSign, createVerify } = require("crypto");
const { privateKey, publicKey } = require("./keypair");

const msg = "This is a secret message";

const signer = createSign("rsa-sha256");
signer.update(msg);

const signature = signer.sign(privateKey, "hex");

const verifier = createVerify("rsa-sha256");
verifier.update(msg);
const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(`Is verified: ${isVerified}`);

