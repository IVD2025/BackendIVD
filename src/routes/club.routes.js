import { Router } from 'express'
import * as ClubController from '../controllers/club.controller.js'
import { requireAuth } from '../middlewares/auth.js'
import { checkAdmin }  from '../middlewares/checkAdmin.js'
import { checkAdminOClub } from '../middlewares/checkAdminOClub.js'
import { validate }    from '../middlewares/validate.js'
import { createClubSchema, updateClubSchema } from '../schemas/club.schema.js'

const router = Router()

// Rutas públicas (sin autenticación)
router.get('/',    ClubController.getAll)
router.get('/:id', ClubController.getById)
router.get('/:id/atletas',      ClubController.getAtletas)
router.get('/:id/entrenadores', ClubController.getEntrenadores)

// Crear y eliminar clubes: exclusivo de administrador
router.post('/',     requireAuth, checkAdmin, validate(createClubSchema), ClubController.create)
router.delete('/:id', requireAuth, checkAdmin, ClubController.remove)

// Editar un club: el administrador puede editar cualquiera, un club solo el suyo propio
router.put('/:id',   requireAuth, checkAdminOClub, validate(updateClubSchema), ClubController.update)

export default router