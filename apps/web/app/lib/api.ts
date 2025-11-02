// src/lib/api.ts
export interface SimpsonCharacter {
    id: string;
    name: string;
    age: number;
    birthdate: string | null;
    gender: string;
    occupation: string;
    portrait_path: string;
  }
  
  export async function getSimpsons(): Promise<{ characters: SimpsonCharacter[], episodes: any[], locations: any[] }> {
    const characters = await fetch("https://thesimpsonsapi.com/api/characters");
    const episodes = await fetch("https://thesimpsonsapi.com/api/episodes");
    const locations = await fetch("https://thesimpsonsapi.com/api/locations");
    if (!characters || !episodes || !locations) {
      return { characters: [], episodes: [], locations: [] } as { characters: SimpsonCharacter[], episodes: any[], locations: any[] };
    }
    const dataCharacters = await characters.json();
    const dataEpisodes = await episodes.json();
    const dataLocations = await locations.json();
    return {
      characters: dataCharacters.results,
      episodes: dataEpisodes.results,
      locations: dataLocations.results,
    };
  }
  