import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './orphanage'

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    path:string
    @ManyToOne(()=> Orphanage, orphanages => orphanages.images)
    @JoinColumn({name:'orphanage_id'})
    orphanage:Orphanage
    
}