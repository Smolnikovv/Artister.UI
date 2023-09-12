import { Subgenre } from "./Subgenre";

export interface Artist{
    id:number,
    name:string,
    yearOfOrigin:number,
    wikiUrl:string,
    pageUrl:string,
    isAccepted:boolean,
    userAddedId:number,
    subgenres:Array<Subgenre>
}