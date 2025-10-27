import React from "react";

interface Props {
  name: string;
  occupation: string;
  image: string;
}

const CharacterCard: React.FC<Props> = ({ name, occupation, image }) => {
  return (
    <div className="border p-4 rounded shadow-md max-w-xs">
      <img src={image} alt={`${name} ${occupation}`} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 font-bold text-lg">{name} {occupation}</h2>
    </div>
  );
};
export default CharacterCard;
