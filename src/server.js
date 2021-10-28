import express from "express";

const PORT = 4000;

const app = express();

const handlehome = (req, res) => {
    return res.send("<h1>Hello</h2>");
};
const handlelogin = (req, res) => {
    return res.send({ message: "Login here."});
};

app.get("/", handlehome);
app.get("/login", handlelogin);

const handleListening = () =>
 console.log('Server listening on port http://localhost:${PORT}');

app.listen(PORT, handleListening);
