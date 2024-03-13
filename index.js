require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const foodController = require('./foodController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.post('/food', foodController.createFoodItem);
app.get('/food', foodController.getAllFoodItems);
app.get('/food/:id', foodController.getFoodItemById);
app.put('/food/:id', foodController.updateFoodItem);
app.delete('/food/:id', foodController.deleteFoodItem);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});