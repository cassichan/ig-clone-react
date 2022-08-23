import { Photo } from "../models/photos";

const photoApiUrl = "http://localhost:5001/photos/";

export async function updateLike(photoId: string): Promise<number> {
  //PATCH/photo/PHOTO_ID with body of {likes: 1}
  const fetchPhotos = await fetch(photoApiUrl + photoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: 1 }),
  });
  const photo: Photo = await fetchPhotos.json();
  const newLikes: number = photo.likes || 0;
  return newLikes + 1;
}

//Compare syntax to .then version of fetch in Feed.tsx
async function getPhotos(): Promise<Photo[]> {
  try {
    const fetchPhotos = await fetch(photoApiUrl);
    const photoList: Photo[] = await fetchPhotos.json();
    return photoList;
  } catch (err) {
    console.error(err);
    return []; //Return empty array, need to return something
  }
}
