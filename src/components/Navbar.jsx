import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
//import {BsArrowDownRight} from "react-icons/bs"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <section className="flex sticky top-0 bg-white justify-between mx-0 my-6 py-2 px-6">
      <Link to='/'>
        <img src="/assets/Logo.png" alt="main_logo" />
      </Link>
      <div className="div flex">
        <div className="flex">
          <ul className="flex flex-row items-center">
            <Link className="px-2 text-gray" to='/pricing'>Pricing</Link>
            <Link className="px-2 text-gray" to='/about'>About us</Link>
            <Link className="px-2 text-gray" to='/pricing'>Contact</Link>
          </ul>
        </div>
        <div className="btn flex">
          <ButtonSecondary
            className={"bg-white text-primary px-8 py-2 rounded-lg"}
            children="Login"
          />
          <ButtonPrimary
            className={"bg-primary text-white px-8 py-2 rounded-lg hover:bg-sky-700"}
            children="Sign Up"
          />
        </div>
      </div>
    </section>
  );
}
//FIXME MAX-WIDTH
