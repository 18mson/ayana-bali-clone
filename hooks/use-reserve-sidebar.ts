import { create } from 'zustand';

interface ReserveSidebarState {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useReserveSidebar = create<ReserveSidebarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
