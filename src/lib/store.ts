import { create } from "zustand";
import { api } from "./api";

type Store = {
  user_id: string;
  username: string;
  email: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setUserId: (id: string) => void;
  setEmail: (value: string) => void;
  setUsername: (value: string) => void;
  setLoggedOut: () => void;
};

const getUserData = async (uid: string) => {
  try {
    const response = await api.get(`/user/${uid}`);
    if (response.data.success) {
    }
  } catch (error) {}
};

export const useStore = create<Store>()((set) => {
  let uid;
  if (typeof window !== "undefined") {
    uid = localStorage.getItem("uid");
    if (!uid) {
      //* Handle Case
    }
  }

  return {
    user_id: uid || "",
    username: "",
    email: "",
    isLoggedIn: false,
    setIsLoggedIn(value) {
      set(() => ({ isLoggedIn: value }));
    },
    setUserId(id) {
      set(() => ({ user_id: id }));
    },
    setEmail(value) {
      set(() => ({ email: value }));
    },
    setUsername(value) {
      set(() => ({ username: value }));
    },
    setLoggedOut() {
      if (typeof window !== "undefined") {
        localStorage.removeItem("uid");
      }
      set(() => ({
        user_id: "",
        username: "",
        email: "",
        isLoggedIn: false,
      }));
    },
  };
});
