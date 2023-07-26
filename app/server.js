import express from "express";
import cors from "cors";
import axios from "axios";
import http from "http";

const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));

app.get("/clans", async (req, res) => {
    try {
        const url = "https://api.clashofclans.com/v1/clans/%23Y09R909";
        const token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY3OGIxYmRlLTUzOGEtNGI0Ni1iMjY0LTQzYTllZTRkNTQ2MiIsImlhdCI6MTY5MDM4NzMyMCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCIsIjM0LjE0MS41NS4yNTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.bs21JsEt0U7yRD_x4WGTJDPPTluH-j1vJpOlEbiUhjeC2_R84Jth5-1Wlj9pbrrHSjHPlA7UlIpZPJFKbo7G_w";
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

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});