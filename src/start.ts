import { config } from "dotenv";
config();
import { AppServer } from "./AppServer";
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})

const appServer = new AppServer();
appServer.start(3000);