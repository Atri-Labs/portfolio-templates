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
    },
    "Upload5": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload6": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload8": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "view_page": {
    "Upload3": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload4": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload7": {
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
