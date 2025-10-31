import React from "react";
import { getSimpsons,  SimpsonCharacter } from "@/lib/api";

const EpisodesPage = async () => {
  let episodes: any[] = [];
  let simpsons: { characters: SimpsonCharacter[], episodes: any[], locations: any[] } = { characters: [], episodes: [], locations: [] };
  try {
    simpsons = await getSimpsons();
    episodes = simpsons.episodes;
    console.log(episodes);
  } catch (error) {
    console.error(error);
  }
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {episodes.map((episode) => (
            episode.id
        ))}
      </div>
    </main>
  );
};

export default EpisodesPage;