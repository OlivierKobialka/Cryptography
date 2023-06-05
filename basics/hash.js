const { createHash } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hash(input) {
    return createHash("sha256").update(input).digest("hex");
}

rl.question("Enter password: ", (password) => {
    const hash1 = hash(password);
    console.clear();
    console.log(`Hash of '${password}' is\nr ${hash1}`);
    rl.close();
});
