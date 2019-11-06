import React from 'react';
import './ImageModal.scss';

export default function ImageModal({ imgSrc, imgCaption, imgDescription, close }) {
  return (
    <div id="image-modal" className="image-modal">
      <span className="close" onClick={close} >
        <svg xmlns="http://www.w3.org/2000/svg" width="23.024" height="23.024" viewBox="0 0 23.024 23.024">
          <g id="Group_43" data-name="Group 43" transform="translate(-219.086 -1192.086)">
            <line id="Line_4" data-name="Line 4" x2="20.195" y2="20.195" transform="translate(220.5 1193.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" />
            <line id="Line_5" data-name="Line 5" x1="20.195" y2="20.195" transform="translate(220.5 1193.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" />
          </g>
        </svg>
      </span>

      <img className="modal-content" src={imgSrc} alt="Project" />

      <div className="caption">{imgCaption}</div>
      <div className="caption"><small>{imgDescription}</small></div>
    </div>
  )
}
