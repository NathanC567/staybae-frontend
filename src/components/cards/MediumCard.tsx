import PropertyType from "src/interfaces/Property";
import useFavourite from "src/hooks/useFavourite";
import { useFetchProperty } from "src/hooks/useFetchProperty";
import { AxiosResponse } from "axios";
import { HeartIcon as FavouritedHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as NotFavouritedHeartIcon } from "@heroicons/react/24/outline";
import Rating from "../rating/Rating";
import { format } from "date-fns";

export interface MediumCardProps {
  property: PropertyType;
  favouriteId: string;
}

const MediumCard = ({ property, favouriteId }: MediumCardProps) => {
  const formattedStartDate = format(new Date(property.dateFrom), "d");
  const formattedEndDate = format(new Date(property.dateTo), "d MMM");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const onSuccessPropertyLoaded = (data: AxiosResponse) => {};
  
  const { data } = useFetchProperty(property._id!, onSuccessPropertyLoaded);
  const { isFavourite, addFavourites, removeFavourite } = useFavourite();
  const propertyIsSaved = isFavourite(property._id!);

  const toggleSave = (event: any) => {
    event.preventDefault();
    if (propertyIsSaved) {
      removeFavourite(favouriteId!);
    } else {
      addFavourites(data?.data);
    }
  };
  

  return (
    <div className="flex flex-col h-flex-col h-[450px] items-center m-2 mt-5 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out rounded-b-lg">
      <div className="overflow-hidden rounded-t-lg w-full">
        <img
          className="relative h-60 w-full object-cover"
          src={property.heroImg}
          alt={`${property.city} - ${property.country}`}
        />
        {propertyIsSaved ? (
          <div
          className="text-red-600 absolute top-4 right-6 cursor-pointer"
          onClick={toggleSave}
          title="Saved as favourite"
        >
          <FavouritedHeartIcon className="h-6" color="red" />
          <span className="text-sm ml-2"></span>
        </div>
      ) : (
        <div
          className="text-red-600 absolute top-4 right-6 cursor-pointer"
          onClick={toggleSave}
          title="Not saved as favourite"
        >
          <NotFavouritedHeartIcon className="h-6" />
          <span className="text-sm ml-2"></span>
        </div>
        )}

        {/* Property Details */}

        <div className="flex flex-col p-6 w-full space-y-2">
          <div className="flex flex-row space-x-3 items-center">
            <span className="text-sm">{property.numBeds} BEDS</span>
            <span>&bull;</span>
            <span className="text-sm">{property.numRooms} Rooms</span>
            <span>&bull;</span>
            <span className="text-sm">{property.numToilets} Toilets</span>
          </div>

          <div className="flex flex-row justify-between">
            <span className="font-bold text-md">
              {property.city}, {property.country}
            </span>
            <Rating
              id={property._id!}
              ratingScore={property.rating}
              doSingle={true}
              propertyRating={property.rating}
            />
          </div>
          <span className="text-sm text-gray-500">{property.caption}</span>
          <span className="text-sm">{range}</span>
          <div className="flex flex-row">
            <span className="font-semibold">&pound;{property.totalPrice}</span>
            <span>&nbsp;total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
