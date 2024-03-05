import CharacterList from "./CharacterList";

const CharacterListPage = () => {
  const character = {
    id: "3c305e51-7129-4272-b1d6-90e25a599a2e",
    type: "character",
    attributes: {
      slug: "aberforth-dumbledore",
      alias_names: ["Ab"],
      animagus: null,
      blood_status: "Half-blood",
      boggart: null,
      born: "Between 1 September 1883 and 31 August 1884, Mould-on-the-Wold, England, Great Britain (presumably)",
      died: null,
      eye_color: "Bright blue",
      family_members: [
        "Percival Dumbledore (father) †",
        "Kendra Dumbledore (mother) †",
        "Albus Dumbledore (older brother) †",
        "Ariana Dumbledore (youngest sister) †",
        "Aurelius Dumbledore (biological son)",
        "Honoria (aunt)",
        "Dumbledore family",
      ],
      gender: "Male",
      hair_color: "Grey",
      height: null,
      house: null,
      image:
        "https://static.wikia.nocookie.net/harrypotter/images/4/40/Aberforth_Dumbledore.jpg",
      jobs: ["Owner and Barman of the Hog's Head Inn"],
      marital_status: null,
      name: "Aberforth Dumbledore",
      nationality: "English",
      patronus: "Goat",
      romances: ["Aurelius Dumbledore's mother (former lover)"],
      skin_color: null,
      species: "Human",
      titles: [],
      wands: ["Unknown length, wood and core"],
      weight: null,
      wiki: "https://harrypotter.fandom.com/wiki/Aberforth_Dumbledore",
    },
    links: {
      self: "/v1/characters/3c305e51-7129-4272-b1d6-90e25a599a2e",
    },
  };

  const didArray = new Array(20).fill(character);

  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-wtfbrown min-h-svh p-10">
      <p className="text-4xl font-bold mb-4 text-wtfdarkbrown">
        Harry Potter character list
      </p>
      <CharacterList characterArray={didArray} />
    </div>
  );
};

export default CharacterListPage;
