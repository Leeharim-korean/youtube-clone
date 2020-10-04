import express from "express"; //┐
const app = express();        //─fist line is next gen JS and second thing is normal

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("Hello from home!");
}
//this is arrow function that is same thing with normal function
const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);