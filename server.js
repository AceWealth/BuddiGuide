require("dotenv").config();
const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(compression());

const strainRouter = require("./api/routes/strain_router");
const userRouter = require("./api/routes/user_router");

server.use("/api/strains", strainRouter);
server.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
	// Set static
	server.use(express.static("client/build"));
	server.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

module.exports = server;
