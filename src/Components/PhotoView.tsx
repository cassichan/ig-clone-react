import React from "react";
import { Photo } from "../models/photos";
import { updateLike } from "../Services/photoServices";

//Explicitly define props PhotoView will take
interface PhotoViewProp {
  photo: Photo;
  setPhotos: Function;
}

export default function PhotoView({ photo, setPhotos }: PhotoViewProp) {
  async function handleLike(photoId: string) {
    const newLike = await updateLike(photoId);
    console.log(newLike);
    setPhotos((photos: Photo[]) => {
      return photos.map((photo: Photo) =>
        photo._id == photoId ? { ...photo, likes: newLike } : photo
      );
      //is individual photo = to id passed in this functon? if so, take what photo was and change value of likes to the newLike. otherwise just keep the photo
    });
  }
  return (
    <>
      <div>
        <h2>{photo.description || ""}</h2>
        <img src={photo.photoUrl} alt="" />
        <div
          onClick={() => {
            handleLike(photo._id || "0");
          }}
        >
          👍{photo.likes || 0}
        </div>
      </div>
    </>
  );
}
