import { create } from 'zustand'

export type ProfileState = {
  name: string,
  email: string,

  changeProfile: (name: string, email: string) => void
}


export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'kevin',
  email: 'kevincuadros@gmail.com',

  changeProfile(name, email) {
    set({
      name,
      email
    })
  },
  
}))