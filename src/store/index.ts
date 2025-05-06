import { defineStore } from 'pinia'


export type SidebarBackgroundColor = 'bg-default' | 'bg-white' | 'bg-dark';
export type AppLayout =  'default' | 'vr' | 'landing';
export type ImageLayout = 'default' | 'profile-overview';

export interface AppState {
  hideConfigButton: boolean
  isPinned: boolean
  showConfig: boolean
  sidebarType: SidebarBackgroundColor // 'bg-white' | 'bg-dark' // Example of specific string types
  isRTL: boolean
  mcolor: string
  darkMode: boolean
  isNavFixed: boolean
  isAbsolute: boolean
  showNavs: boolean
  showSidenav: boolean
  showNavbar: boolean
  showFooter: boolean
  showMain: boolean
  layout: AppLayout // Add other possible layout types
  navbarFixed_class: string
  isTransparent: string
  imageLayout: ImageLayout
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    sidebarType: 'bg-white',
    isRTL: false,
    mcolor: '',
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: 'default',
    navbarFixed_class: '',
    isTransparent: '',
    imageLayout: 'default',
  }),
  actions: {
    toggleConfigurator() {
      this.showConfig = !this.showConfig
    },
    closeConfigurator() {
      this.showConfig = false
    },
    sidebarMinimize() {
      const sidenavShow = document.querySelector('#app')

      if (sidenavShow) {
        if (this.isPinned) {
          sidenavShow.classList.add('g-sidenav-hidden')
          sidenavShow.classList.remove('g-sidenav-pinned')
          this.isPinned = false
        } else {
          sidenavShow.classList.add('g-sidenav-pinned')
          sidenavShow.classList.remove('g-sidenav-hidden')
          this.isPinned = true
        }
      }
    },
    setSidebarType(payload: SidebarBackgroundColor) {
      this.sidebarType = payload
    },
    navbarFixed() {
      this.isNavFixed = !this.isNavFixed
    },
    toggleSidebarColor(payload: SidebarBackgroundColor) {
      this.setSidebarType(payload) // Directly call another action if needed
    },
  },
  getters: {}, // Getters remain similar, but are accessed differently in components
})
