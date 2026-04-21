import { prisma } from "../lib/prisma.js";

async function getAllCharacters() {
  try {
    return await prisma.character.findMany({

    });
  } catch (err) {
    console.error("Error getting characters:", err);
    throw err;
  }
}

export { getAllCharacters };