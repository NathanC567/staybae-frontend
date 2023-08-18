import { useNavigate } from "react-router-dom";
import useFavourite from "src/hooks/useFavourite";
import { useFetchProperty } from "src/hooks/useFetchProperty";
import { AxiosResponse } from "axios";
import { HeartIcon as FavouritedHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as NotFavouritedHeartIcon } from "@heroicons/react/24/outline";

interface SmallCardProps {
  id: string;
  city: string;
  country: string;
  heroImg: string;
  setIsShowFavourites: (val: boolean) => void;
}
const SmallCard = ({
  id,
  city,
  country,
  heroImg,
  setIsShowFavourites,
}: SmallCardProps) => {
  const navigate = useNavigate();
  const { isFavourite, addFavourites, removeFavourite } = useFavourite();
  const propertyIsSaved = isFavourite(id!);
  const onSuccessPropertyLoaded = (data: AxiosResponse) => {
    setIsShowFavourites(true);
  };
  const { data } = useFetchProperty(id!, onSuccessPropertyLoaded);

  const toggleSave = (event: any) => {
    event.stopPropagation();
    if (propertyIsSaved) {
      removeFavourite(id!);
    } else {
      addFavourites(data?.data);
    }
  };
  const onClickHandler = () => {
    setIsShowFavourites(false);
    navigate(`/property/${id}`);
  };
  return (
<div
  className="flex flex-row space-x-4 justify-between items-center cursor-pointer hover:shadow-md p-4"
  key={id}
  onClick={onClickHandler}
>
  <div className="flex flex-grow items-center">
    <div className="box-border h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
      <img
        src={heroImg}
        className="object-cover w-full h-full"
        alt={`${city}, ${country}`}
      />
    </div>
    <div className="flex flex-col justify-center text-left ml-4 h-full">
      <span className="text-sm font-semibold">
        {city}, {country}
      </span>
    </div>
  </div>

  {propertyIsSaved ? (
    <div
      className="cursor-pointer"
      onClick={toggleSave}
      title="Click to unsave"
    >
      <FavouritedHeartIcon className="h-6" color="red" />
    </div>
  ) : (
    <div
      className="cursor-pointer"
      onClick={toggleSave}
      title="Click to save"
    >
      <NotFavouritedHeartIcon className="h-6" />
    </div>
  )}
</div>


  );
};
export default SmallCard;
