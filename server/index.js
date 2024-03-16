import {Server} from 'socket.io'
import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const io = new Server(8000, {
  cors: true,
});

const db = new pg.Client({
    user: "postgres" ,
    host: "localhost",
    database: "Mercer",
    password: "vishwas",
    port: 5432,
});

db.connect();

const app = express();
const PORT=5000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use(bodyParser.json());
app.use(cors());

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});


app.post("/signup", async (req, res) => {
  const { fname, lname, password, email } = req.body;

  try {
    console.log("Received form data:", { fname, lname, password, email });

    const check = await db.query("SELECT * FROM signup WHERE email = $1", [email]);
    if (check.rows.length > 0) {
      return res.send("Email already exists. Try using a different email");
    } else {
      const result = await db.query(
        "INSERT INTO signup(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [fname, lname, email, password]
      );
      console.log("Signup Successful:", result.rows);
      return res.send("Signup Successful");
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return res.status(500).send("An error occurred during signup");
  }
});

app.post("/login", async (req, res) => {
  const {Email, Password}= req.body

  try {
      const result = await db.query(
        "SELECT password FROM signup WHERE email = $1",
        [Email] 
      );
      if (result.rows.length > 0) {
        const getPassword = result.rows[0].password;
        if (getPassword == Password) {
          res.send("User Exist Login succesfull");
          res.sendFile(__dirname + "/client/index.html");
        } else {
          res.send("Incorrect Password");
        }
      } else {
          res.sendFile(__dirname + "/client/signup.html");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(Password, Email);
  });



app.listen(PORT , ()=>{
  console.log('Server is running on PORT ');
})