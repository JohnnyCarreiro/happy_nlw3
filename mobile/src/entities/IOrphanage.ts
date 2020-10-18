export default interface IOrphanage{
    id:string
    name:string
    latitude:number
    longitude:number
    about: string
    instructions:string
    opening_hours:string
    open_on_weekends:string
    images:Array<{
        url:string
        path:string
        id:string
    }>

}
export interface IOrphanageParams{
    id:string
}
export interface ICoordinatesParams{
    coordinates:{
        latitude:number,
        longitude:number
    }
}