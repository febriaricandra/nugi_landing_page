import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { MdOutlineArrowForwardIos } from "react-icons/md";
export default function About({ title, desc }) {
  return (
    <section className="flex mx-auto my-12 justify-between max-w-[1200px]">
      <div className="items-center my-12 w-1/2">
        <h1 className="font-bold w-[60%] text-[40px] w-1/2">{title}</h1>
        <p className="text-grey text-[18px] w-[70%] my-8">{desc}</p>
        <div className="btn-group flex items-center">
          <ButtonPrimary
            children="Learn More"
            className={
              "bg-primary text-white px-8 py-4 rounded flex items-center hover:bg-sky-700"
            }
            icons={<MdOutlineArrowForwardIos />}
          />
        </div>
      </div>
      <div className="">
        <img src="/assets/Component 1.png" alt="about" />
      </div>
    </section>
  );
}
