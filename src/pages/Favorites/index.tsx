import { useFavorites } from "store/FavoritesStore";

const Favorites = () => {
  const { likes } = useFavorites();
  console.log(likes);
  return (
    <main>
      {likes.map(({ name, _id, survey }) => (
        <div key={_id}>{name || _id}</div>
      ))}
    </main>
  );
};

export default Favorites;
