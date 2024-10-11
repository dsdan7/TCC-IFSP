require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Add this middleware to parse JSON bodies

// Conexão com o MongoDB
mongoose.connect(`mongodb+srv://${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Modelo de dados
const DataSchema = new mongoose.Schema({
    LEVEL1: Number,
    LEVEL2: Number,
    PHASE: Boolean,
    BOMB1_STATUS: Boolean,
    BOMB2_STATUS: Boolean,
    BOMB1_OVERTEMP: Boolean,
    BOMB2_OVERTEMP: Boolean,
    TIME_INPUT: Date,
});

const Data = mongoose.model('Data', DataSchema);

// Rota para buscar dados
app.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para criar novo dado via POST
app.post('/data', async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.json(newData);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
