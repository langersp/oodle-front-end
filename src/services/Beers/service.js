import PagedCollection from "../../models/paged-collection";
import Beer from "../../models/beer";

const baseUrl = "https://api.punkapi.com/";

const useBeersService = () => {
  async function get() {
    const url = `${baseUrl}v2/beers`;

    const result = await fetch(url);
    const beers = await result.json();

    return new PagedCollection(
      beers.map(
        (beer) =>
          new Beer(
            beer.id,
            beer.abv,
            beer.name,
            beer.description,
            beer.image_url,
            beer.tagline,
            beer.food_pairing
          )
      ),
      result.hasMore
    );
  }

  return { get };
};

export default useBeersService;
