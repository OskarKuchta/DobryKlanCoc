import express from "express";
import cors from "cors";
import axios from "axios";
import serverless from "serverless-http";
const app = express();
const router = express.Router();

router.use(cors({
    origin: "*"
}));

router.get("/clan/main", async (req, res) => {
    try {
        const url = 'https://cocproxy.royaleapi.dev/v1/clans/%23Y09R909';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFkZGZkNmM4LTA4YWUtNDc0OS05OWI3LTFiZDc1ZDgxYWY4NCIsImlhdCI6MTY5NTg4ODM0Mywic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.18SHpFfhQlVE8wQpgvkp9E0d8oVpDbQ5TP4vjLnBWeAyovwAe74MJLy7eqzrWE1AZFhQj-uuaoz90opiTRaRgQ";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        };
        res.set({
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        });
        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data from the Clash of Clans API.",
        });
    }
});

router.get("/clan/ak", async (req, res) => {
    try {
        const url = 'https://cocproxy.royaleapi.dev/v1/clans/%232qupvlcgc';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFkZGZkNmM4LTA4YWUtNDc0OS05OWI3LTFiZDc1ZDgxYWY4NCIsImlhdCI6MTY5NTg4ODM0Mywic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.18SHpFfhQlVE8wQpgvkp9E0d8oVpDbQ5TP4vjLnBWeAyovwAe74MJLy7eqzrWE1AZFhQj-uuaoz90opiTRaRgQ";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        };
        res.set({
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        });
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