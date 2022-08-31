import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "dc": {},
  "view_project": {
    "Upload2": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  }
}});

export default useIoStore;
