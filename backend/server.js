import express from 'express'

const app = express();

const port = process.env.Port || 3000;
app.get('/', (req, res) => {
    res.send("Hello API. This is my first server");
});

app.listen(port, () => console.log(`Server running on port ${port}`));