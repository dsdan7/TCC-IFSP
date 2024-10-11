require('dotenv').config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

mongoose.connect(`mongodb+srv://${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

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

const generateRandomData = () => ({
    LEVEL1: faker.number.int({ min: 0, max: 100 }),
    LEVEL2: faker.number.int({ min: 0, max: 100 }),
    PHASE: faker.datatype.boolean(),
    BOMB1_STATUS: faker.datatype.boolean(),
    BOMB2_STATUS: faker.datatype.boolean(),
    BOMB1_OVERTEMP: faker.datatype.boolean(),
    BOMB2_OVERTEMP: faker.datatype.boolean(),
    TIME_INPUT: faker.date.past(),
});

const seedData = async () => {
    await Data.deleteMany({});
    const data = [generateRandomData(), generateRandomData()];
    await Data.insertMany(data);
    console.log('Data seeded');
    mongoose.connection.close();
};

seedData();
