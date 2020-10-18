import { Router, Request, Response } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)


routes.get('/', (request:Request, response:Response)=>{
    response.status(200).json({message:'Server is runnig'})
})
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages',upload.array('images') , OrphanagesController.create)

export default routes