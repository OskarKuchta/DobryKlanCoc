import express from "express";
import cors from "cors";
import axios from "axios";
import serverless from "serverless-http";
const app = express();
const router = express.Router();

router.use(cors({
    origin: "*"
}));

router.get("/clans/main", async (req, res) => {
    try {
        const url = 'https://cocproxy.royaleapi.dev/v1/clans/%23Y09R909';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI5OThlOWMzLTFlOTgtNDBiYS1iODFlLTcxZTk0NjhkM2FhMiIsImlhdCI6MTY5MTI1MTQ2MCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.MfwLGOxHjlO1qy8N1Hh6LeX9bhAqcY0n_cNrY26Nctlg3R3GSIQOzkuwy6ngqGZnhCvEKOnFFnx6TuFOyfWNAw";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };
        res.header("Access-Control-Allow-Origin", "*");

        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data from the Clash of Clans API.",
        });
    }
});

router.get("/clans/ak", async (req, res) => {
    try {
        const url = 'https://cocproxy.royaleapi.dev/v1/clans/%232qupvlcgc';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI5OThlOWMzLTFlOTgtNDBiYS1iODFlLTcxZTk0NjhkM2FhMiIsImlhdCI6MTY5MTI1MTQ2MCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.MfwLGOxHjlO1qy8N1Hh6LeX9bhAqcY0n_cNrY26Nctlg3R3GSIQOzkuwy6ngqGZnhCvEKOnFFnx6TuFOyfWNAw";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };
        res.header("Access-Control-Allow-Origin", "*");

        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data from the Clash of Clans API.",
        });
    }
});
app.use('/.netlify/functions/server', router);
export const handler = serverless(app);