"use client";

import React, { useEffect } from "react";
import "./page.css";
import Image from "next/image";
import Script from "next/script";
import Navbar from "../navbar/navbar";

const profile = () => {
  const gg = [
    "./legaldoc1.pdf",
    "./legaldoc2.pdf",
    "./legaldoc3.pdf",
    "./legaldoc4.pdf",
    "./legaldoc5.pdf",
  ];
  const handleDownload = (index) => {
    // Path to your PDF file in the public directory
    const url = gg[index];
    window.open(url, "_blank");
  };

  const items = [
    "/legalimage1.jpg",
    "/legalimage2.jpg",
    "/legalimage3.jpg",
    "/legalimage4.jpg",
    "/legalimage5.jpg",
  ];
  const niggs = [
    "Non Disclosure Agreement",
    "Work for Hire Agreement",
    "Referal Agreement",
    "Property Management Agreement",
    "Agency Agreement",
  ];

  return (
    <>
      <div className="w-screen h-full" style={{ backgroundColor: "#2E2E2E" }}>
        <Navbar />

        <br />
        <br />
        <br />
        <br />

        <div className="flex justify-center items-center">
          <div className="h-screen w-5/6 ">
            <div className="cards grid grid-cols-3 gap-3">
              {items.map((item, index) => (
                <>
                  <div
                    className="btn but"
                    onClick={() =>
                      document
                        .getElementsByClassName("modalniga")
                        [index].showModal()
                    }
                    key={index}
                  >
                    <Image src={item} alt="" width={300} height={300} />
                    <div>{niggs[index]}</div>
                  </div>
                  <dialog className="modal modalniga">
                    <div className="boxx modal-box w-11/12 max-w-5xl flex ">
                      <Image src={item} alt="" width={500} height={500} />

                        <div className="flex flex-col justify-evenly items-center w-full">
                          <h3 className="font-bold text-3xl">{niggs[index]}</h3>

                          <button
                            className="btn"
                            onClick={() => {
                              handleDownload(index);
                            }}
                          >
                            Download PDF
                          </button>

                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                    </div>
                  </dialog>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
      <Script
        src="https://mediafiles.botpress.cloud/0ea2eab2-7b97-48d3-bd1b-a3a1685b6b52/webchat/config.js"
        defer
      ></Script>
    </>
  );
};

export default profile;
