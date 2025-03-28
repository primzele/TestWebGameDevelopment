const Save = require('../models/save');

exports.saveGameData = async (req, res) => {
    const { userID, gameDate, failed, difficulty, completed, timeTaken } = req.body;

    console.log('Received data to save:', req.body); 

    try {
       
        if (!userID || !gameDate || difficulty === undefined || completed === undefined || timeTaken === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        let score = 1 / timeTaken * 1000;

        if ( failed !== 0 )
        // in case failed is 0, we dont want to get division by zero error
        {
            score = score / failed;
        }

        const newSave = new Save({
            userID,
            gameDate,
            failed,
            difficulty,
            completed,
            timeTaken,
            score
        });

        await newSave.save(); 
        res.status(201).json({ message: 'Game data saved successfully' });
    } catch (error) {
        console.error('Error saving game data:', error);
        res.status(500).json({ message: 'Error saving game data', error });
    }
};

exports.fetchSaveHistory = async (req, res) => {
    const { userId } = req.params;

    try {
        if (!userId) {
            return res.status(400).json({message: 'Missing userId' });
        }

        // fetch users saved games, where score is not null, order by score descending, limit to 5 results
        const saves = await Save.find({ userID: userId, score: { $ne: null } }).sort({score: -1}).limit(5).exec();
        res.status(200).json({data: saves});

    } catch (error) {
        console.error('Error fetching save game data:', error);
        res.status(500).json({message: 'Error fetching save game data', error });
    }
};
