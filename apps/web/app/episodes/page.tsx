import { getSimpsons } from "@/lib/api";
import EpisodeCard from "@/app/components/EpisodeCard";
import { Episode } from "@/app/types/episodes";
import ArrowBack from "@/app/components/ArrowBack";

const EpisodesPage = async () => {
  let episodes: Episode[] = [];
  let simpsons: { episodes: Episode[] } = { episodes: [] };
  try {
    simpsons = await getSimpsons();
    episodes = simpsons.episodes;
    console.log(episodes);
  } catch (error) {
    console.error(error);
  }
  return (
    <main className="p-8">
      <ArrowBack />
      <h1 className="text-3xl font-bold mb-6">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </main>
  );
};

export default EpisodesPage;