import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewUser } from "../api";

type UserDraftStore = {
  draft: NewUser;
  setDraft: (user: NewUser) => void;
  clearDraft: () => void;
};

const initialDraft: NewUser = {
  email: "",
  userName: "",
};

export const useUserDraftStore = create<UserDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (user) => set({ draft: user }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "user-draft",
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);
