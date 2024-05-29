import { create } from 'zustand'

export type ProfileState = {
  name: string,
  email: string
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'kevin',
  email: 'kevincuadros@gmail.com'
}))