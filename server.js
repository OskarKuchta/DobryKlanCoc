import express from "express";
import cors from "cors";
import axios from "axios";
import http from "http";

const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));

app.get("/clans/main", async (req, res) => {
    try {
        const url = 'https://api.clashofclans.com/v1/clans/%23Y09R909';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE5ZDY1MjlhLTE5NWUtNDQzNC1hMDdkLWVlOGVkMjczOWZkOCIsImlhdCI6MTY5MDk3ODkzMCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCIsIjMuNjkuMjIuOTciLCIzNS4xNTkuMzMuMTkzIl0sInR5cGUiOiJjbGllbnQifV19.ZQCGRbgIC8mA2DV7BSsNIyz-QbEhb3kGLogJPumkEBhRniCkERv7WP8OktN5Klp0C8IG-fyAr4o8BU29dMC3Xg";
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

app.get("/clans/ak", async (req, res) => {
    try {
        const url = 'https://api.clashofclans.com/v1/clans/%232qupvlcgc';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE5ZDY1MjlhLTE5NWUtNDQzNC1hMDdkLWVlOGVkMjczOWZkOCIsImlhdCI6MTY5MDk3ODkzMCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCIsIjMuNjkuMjIuOTciLCIzNS4xNTkuMzMuMTkzIl0sInR5cGUiOiJjbGllbnQifV19.ZQCGRbgIC8mA2DV7BSsNIyz-QbEhb3kGLogJPumkEBhRniCkERv7WP8OktN5Klp0C8IG-fyAr4o8BU29dMC3Xg";
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