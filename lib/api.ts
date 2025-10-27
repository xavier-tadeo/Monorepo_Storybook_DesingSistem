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
  
  export async function getSimpsons(): Promise<SimpsonCharacter[]> {
    const res = await fetch("https://thesimpsonsapi.com/api/characters");
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data.results;
  }
  