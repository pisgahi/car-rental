"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );

    setCarList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarList(sortedData);
  };

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(function () {
        setShowToastMsg(false);
      }, 4000);
    }
  }, [showToastMsg]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Hero />
        <SearchInput />
        <CarsFilterOption
          carsList={carsOrgList}
          setBrand={(value: string) => filterCarList(value)}
          orderCarList={(value: string) => orderCarList(value)}
        />
        <CarsList carsList={carsList} />
        {showToastMsg ? <ToastMsg msg={"Booking Created Successfly"} /> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
