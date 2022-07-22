import React from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function Trial() {
  return (
    <section className="bg-primary flex flex-col justify-center items-center p-6 my-[64px] mx-4 rounded">
      <h1 className="text-white text-center w-1/4 text-2xl font-bold py-4">Online Security For You & Your Family</h1>
      <p className="text-white font-sm py-4 text-center w-1/2">
        With our advanced technology, you can enjoy a safe and private Internet
        experience without compromising the performance of your computer and
        mobile devices.
      </p>
      <ButtonPrimary children='Try for free' className="bg-white text-primary px-8 py-4 rounded-lg py-4 font-medium hover:bg-sky-700 hover:text-white" />
    </section>
  );
}
