import IUser from "@/Models/User";
import { create } from "zustand";

interface UserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => {
  const storedUser = localStorage.getItem("user");
  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    setUser: (user) => {
      set({ user });
      localStorage.setItem("user", JSON.stringify(user));
    },
    clearUser: () => {
      set({ user: null });
      localStorage.removeItem("user");
    },
  };
});

export default useUserStore;
