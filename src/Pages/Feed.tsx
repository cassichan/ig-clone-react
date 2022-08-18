import React, { useEffect, useState } from "react";
import { Photo } from "../models/photos";
import PhotoView from "../Components/PhotoView";
import "./Feed.css";

export default function Feed() {
  //Keep track of array of type "Photo" from model
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Damians site: fetch("https://live.floridajs.com/photos")
    fetch("http://localhost:5001/photos/")
      .then((res) => res.json())
      .then((data: Photo[]) => {
        // console.log(data)
        setPhotos(data);
      });
  }, []);
  return (
    <>
      <h1>The feed</h1>
      <div>
        {photos.map((photo: Photo) => {
          return <PhotoView key={photo._id} photo={photo} />;
          // return <div><img src={photo.photoUrl} alt="An image"/></div>
        })}
      </div>
    </>
  );
}
