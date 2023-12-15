import { FC } from "react";
import { ISurvey } from "../../../../types/servey.interface";
import { useLocation } from "react-router-dom";
import { useFavorites } from "store/FavoritesStore";

const SurveyItem: FC<ISurvey> = ({ name, image, survey, _id }) => {
  const { pathname } = useLocation();
  const { setLikes } = useFavorites();
  return (
    // <Link to={`${pathname}/${_id}`}>
    <section className="p-4 bg-white rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setLikes({ name, _id, image, survey })}
      >
        <h1>{name}</h1>
        <span className="z-40">heart</span>
      </div>
      <img src={image || ""} alt={`Анкета: ${name}`} />
    </section>
    // </Link>
  );
};

export default SurveyItem;
