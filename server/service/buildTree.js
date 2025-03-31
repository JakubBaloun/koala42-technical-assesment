import characterDao from "../dao/character.dao.js";

const buildTree = async () => {
  const charactersRaw = await characterDao.listCharactersWithRealtions();

  const characters_count = charactersRaw.length;

  let totalAge = 0;
  let totalWeight = 0;
  let genders = {
    female: 0,
    male: 0,
    other: 0,
  };
  let totalNemesisAge = 0;
  let nemesisCount = 0;

  charactersRaw.forEach((character) => {
    const birthDate = new Date(character.born);
    const age = Math.floor(
      (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365.25)
    );
    totalAge += age;

    totalWeight += parseFloat(character.weight) || 0;

    switch (character.gender) {
      case "male":
        genders.male += 1;
        break;
      case "female":
        genders.female += 1;
        break;
      default:
        genders.other += 1;
    }

    character.nemesis.forEach((nem) => {
      totalNemesisAge += parseFloat(nem.years) || 0;
      nemesisCount++;
    });
  });

  //average age of characters and nemeses (till today)
  const averageAge = Math.round(
    (totalAge + totalNemesisAge) / (characters_count + nemesisCount)
  );
  const averageWeight = Math.round(totalWeight / characters_count);

  const characters = charactersRaw.map((character) => {
    const nemesis = character.nemesis.map((nemesis) => {
      const secrets = nemesis.secret.map((secret) => ({
        data: {
          id: secret.id,
          nemesis_id: secret.nemesis_id,
          secret_code: Number(secret.secret_code),
        },
      }));

      return {
        data: {
          id: nemesis.id,
          character_id: nemesis.character_id,
          is_alive: nemesis.is_alive,
          years: nemesis.years,
        },
        children: {
          has_secret: {
            records: secrets,
          },
        },
      };
    });
    return {
      data: {
        id: character.id,
        name: character.name,
        gender: character.gender,
        ability: character.ability,
        minimal_distance: character.minimal_distance,
        weight: character.weight,
        born: new Date(character.born).toString(),
        in_space_since: new Date(character.in_space_since).toString(),
        beer_consumption: character.beer_consumption,
        knows_the_answer: character.knows_the_answer,
      },
      children: {
        has_nemesis: {
          records: nemesis,
        },
      },
    };
  });

  return {
    characters_count,
    average_age: averageAge,
    average_weight: averageWeight,
    genders,
    characters,
  };
};

export default buildTree;
