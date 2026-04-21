import {
    getAllCharacters
} from "../db/characterQueries.js";

const charactersGet = async (req, res) => {
    try {
        const characters = await getAllCharacters();    
        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }   
}

export { charactersGet };