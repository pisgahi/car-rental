import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import CarCardSkelton from "./CarCardSkeleton";
import BookingModal from "../CarBooking/BookingModal";

const CarsList = (props: any) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);

  useEffect(() => {
    if (props.carsList) {
      setIsLoaded(false);
    }
  }, [props.carsList]);

  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {/* <CarCardSkelton/> */}
      {!isLoaded &&
        props.carsList.map((car: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
      {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkelton />) : null}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>}>open modal</button> */}
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  );
};

export default CarsList;
