import { create } from "zustand";
import { LoginModalStore } from "../types";

const useSearchModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
