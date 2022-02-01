import { firebase_app } from "../firbaseApp"
const storage = firebase_app.storage()

export const tutorialStorageRef = storage.ref("tutorials/videos");
export const tutorialImageStorageRef = storage.ref("tutorials/thumbnails");
export const inspirationStorageRef = storage.ref("inspirations/videos");
export const inspirationImageStorageRef = storage.ref("inspirations/thumbnails");
export const backgroundImageStorageRef = storage.ref("prompts/images")
export const creationsImageStorageRef = storage.ref("creations")

export const uploadVideo = async (folder, filename) => {
    return await storage.ref(folder)
      .child(filename)
      .getDownloadURL()
}

export const uploadThumbnail = async (folder, filename) => {
  return await storage.ref(folder)
    .child(filename)
    .getDownloadURL()
}

export const uploadBackgroundImage = async (folder, filename) => {
  return await storage.ref(folder)
    .child(filename)
    .getDownloadURL()
}

export const uploadCreationImage = async (folder, filename) => {
    return await storage.ref(folder)
      .child(filename)
      .getDownloadURL()
}

export const deleteCretionImage = async (url) => {
  const refMediaFile = storage.refFromURL(url);
  await refMediaFile.delete()
}


