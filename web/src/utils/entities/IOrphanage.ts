export interface IOrphanage{
    id:string
    name:string
    latitude:number
    longitude:number
    about:string
    instructions:string
    opening_hours:string
    open_on_weekends:boolean
    images:Array<{
        url:string
        path:string
        id:string
    }>
  }

  export interface IOrphanageParams{
      id:string
  }