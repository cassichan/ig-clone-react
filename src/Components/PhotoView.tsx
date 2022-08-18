import React from "react";
import { Photo } from "../models/photos";

//Explicitly define what the photo being passed a prop from PhotoView will look like
interface PhotoViewProp {
  photo: Photo;
}

export default function PhotoView({ photo }: PhotoViewProp) {
  return (
    <>
      <div>
        <img src={photo.photoUrl} />
      </div>
    </>
  );
}
