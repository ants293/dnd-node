import { models } from "./app/models";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from "./app/routes";

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Server is usadsadasdasdp!" });
});

app.use('/api', routes());


const db = models();
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the databasdfsdfsdfdsfdsfe!");
    })
    .catch((err: any) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});