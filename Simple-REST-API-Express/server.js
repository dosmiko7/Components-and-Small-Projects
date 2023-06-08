const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/users", async (req, res) => {
	res.send(await get());
});

app.post("/users", (req, res) => {
	const newUser = req.body;
	add(newUser);
});

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));

const readData = async () => {
	const data = await fs.readFile("users.json", "utf8");
	return JSON.parse(data);
};

const writeData = async (data) => {
	await fs.writeFile("users.json", JSON.stringify(data));
};

const get = async () => {
	const data = await readData();
	return data;
};

const add = async (user) => {
	const currentData = await get();
	currentData.users.unshift(user);
	writeData(currentData);
};
