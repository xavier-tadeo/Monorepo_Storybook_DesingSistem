import React from "react";
import CharacterCard from "./components/CharacterCard";
import { getSimpsons, SimpsonCharacter } from "../lib/api";

const HomePage = async () => {
  let characters: SimpsonCharacter[] = [];
  const imagetPattern = "https://cdn.thesimpsonsapi.com/200{image_path}"

  try {
    characters = await getSimpsons();
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Simpsons Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters?.map((char, index) => (
          <CharacterCard
            key={index}
            name={char.name}
            occupation={char.occupation}
            image={imagetPattern.replace("{image_path}", char.portrait_path)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
