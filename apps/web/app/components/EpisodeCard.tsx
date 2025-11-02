import { Episode } from "@/app/types/episodes";

const EpisodeCard = ({ episode }: { episode: Episode }) => {
    return (
        <div>
            <h2>{episode.name}</h2>
        </div>
    );
};

export default EpisodeCard;