const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(email, pwd) {
    const salt = randomBytes(16).toString("hex");
    const hashedPwd = scryptSync(pwd, salt, 64).toString("hex");
    const user = { email, pwd: `${salt}:${hashedPwd}` };

    users.push(user);
    return user;
}

function login(email, pwd, userSalt) {
    const hash = scryptSync(pwd, userSalt, 32).toString("hex");

    const [salt, key] = user.pwd.split(":");
    const hashedBuffer = scryptSync(pwd, salt, 64);

    const keyBuffer = Buffer.from(key, "hex");
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return "Logged in";
    } else {
        return "Wrong password";
    }
}

const users = [];

const user = signup("Alice", "password");
console.log(user);