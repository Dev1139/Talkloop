import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme:localStorage.getItem("Talkloop-theme")||"coffee",
  setTheme:(theme)=>{
    localStorage.setItem("Talkloop-theme",theme);    
    set({theme})
},
}))


