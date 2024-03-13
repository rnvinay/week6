const FoodModel = require('./FoodModel');

// Create a new food item
exports.createFoodItem = async (req, res) => {
    try {
        const food = await FoodModel.create(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create food item' });
    }
};

// Retrieve all food items
exports.getAllFoodItems = async (req, res) => {
    try {
        const foods = await FoodModel.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve food items' });
    }
};

// Retrieve a specific food item by ID
exports.getFoodItemById = async (req, res) => {
    try {
        const food = await FoodModel.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food item not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve food item' });
    }
};

// Update a food item
exports.updateFoodItem = async (req, res) => {
    try {
        const food = await FoodModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!food) {
            return res.status(404).json({ error: 'Food item not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update food item' });
    }
};

// Delete a food item
exports.deleteFoodItem = async (req, res) => {
    try {
        const food = await FoodModel.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food item not found' });
        }
        res.json({ message: 'Food item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete food item' });
    }
};
