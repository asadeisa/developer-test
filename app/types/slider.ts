interface Breakpoint {
  itemsToShow: number
  snapAlign: 'center' | 'start'
}

export interface BreakpointsType {
  [key: number]: Breakpoint
}

export interface Props {
  breakpoints: BreakpointsType
  products: any[]
  showPagination: boolean
  showNavigation: boolean
  wrapAround: boolean
  autoplay: number | boolean
}