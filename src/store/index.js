import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    state: {
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
    },
  }),
  actions: {
    toggleConfigurator() {
      this.state.showConfig = !this.state.showConfig
    },
    closeConfigurator() {
      this.state.showConfig = false;
    },
    sidebarMinimize() {
      const sidenavShow = document.querySelector('#app')
      if (this.state.isPinned) {
        sidenavShow.classList.add('g-sidenav-hidden')
        sidenavShow.classList.remove('g-sidenav-pinned')
        this.state.isPinned = false
      } else {
        sidenavShow.classList.add('g-sidenav-pinned')
        sidenavShow.classList.remove('g-sidenav-hidden')
        this.state.isPinned = true
      }
    },
    setSidebarType(payload) {
      this.state.sidebarType = payload
    },
    navbarFixed() {
      this.state.isNavFixed = !this.state.isNavFixed
    },
    toggleSidebarColor(payload) {
      this.setSidebarType(payload) // Directly call another action if needed
    },
  },
  getters: {}, // Getters remain similar, but are accessed differently in components
})
