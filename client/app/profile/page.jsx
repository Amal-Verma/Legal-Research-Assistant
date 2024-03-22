"use client"

import React, { useEffect } from "react";
import useGetUser from "./../integration/getUser";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useRef } from 'react';
import WebViewer from "@pdftron/webviewer";
import './page.css'

const profile = () => {
  const viewer = useRef(null);
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
    WebViewer(
    {
    path: '/webviewer/lib',
    initialDoc: 'https://calibre-ebook.com/downloads/demos/demo.docx',
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
        uri:"https://calibre-ebook.com/downloads/demos/demo.docx",
        fileType: "docx",
fileName: "docreader.docx"
    },
  ];
  let { user, getUser } = useGetUser();

  useEffect(() => {
    // setName(getUser().username)
    getUser();
    // setName(user.username)
    // console.log(user);
  }, []);
  const items = ["amal", "is", "very", "noob", "lmao", "xd"]

  return (
    <div className="bg-slate-500 h-screen w-screen">
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
              <div className="btn but" onClick={() => document.getElementById('my_modal_4').showModal()} key={index}>{item}</div>
              <dialog id="my_modal_4" className="modal">
                <div className="boxx modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <div className='MyComponent'>
<div className='webviewer' ref={viewer} style={{ height: '1000' }}></div>
</div>
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
  );
};

export default profile;
