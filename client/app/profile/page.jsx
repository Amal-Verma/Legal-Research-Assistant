"use client";

import React, { useEffect } from "react";
import useGetUser from "./../integration/getUser";
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import "./page.css";
import Image from "next/image";
import Script from "next/script";
// import l1 from '../public/legalimage1.jpg';
const profile = () => {
  const gg = ["./legaldoc1.pdf","./legaldoc2.pdf","./legaldoc3.pdf","./legaldoc4.pdf","./legaldoc5.pdf"]
  // const handleDownload = (x) => { // Path to your PDF file in the public directory
  //   const url=x
  //   window.open(url, '_blank');
  // };

  const viewer = useRef(null);
  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "https://calibre-ebook.com/downloads/demos/demo.docx",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here ...
      });
    });
  }, []);
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "docreader.docx",
    },
  ];
  let { user, getUser } = useGetUser();

  useEffect(() => {
    // setName(getUser().username)
    getUser();
    // setName(user.username)
    // console.log(user);
  }, []);
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
      <div className="bg-slate-500 h-full w-screen">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{user.username}</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="ghk">
          <div className="title">Defaults</div>
          <div className="cards ">
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
                  {/* <button onClick={handleDownload(index)}>Download PDF</button> */}

                  {/* <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div> */}
                </div>
                <dialog className="modal modalniga">
                  <div className="boxx modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <Image src={item} alt="" width={500} height={500} />
                    <div>{niggs[index]}</div>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            ))}
          </div>
        </div>
      </div>
      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
<Script src="https://mediafiles.botpress.cloud/0ea2eab2-7b97-48d3-bd1b-a3a1685b6b52/webchat/config.js" defer></Script>
    </>
  );
};

export default profile;
