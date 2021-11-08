import { Router } from 'express'
import * as theoriesCtrl from "../controllers/theories.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get("/", theoriesCtrl.index)
router.post("/", isLoggedIn, theoriesCtrl.create)

export {
  router
}
