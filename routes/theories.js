import { Router } from 'express'
import * as theoriesCtrl from "../controllers/theories.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get("/", theoriesCtrl.index)
router.get("/:id", theoriesCtrl.show)
router.get("/:id/edit", isLoggedIn, theoriesCtrl.edit)
router.post("/", isLoggedIn, theoriesCtrl.create)
router.post("/:id/evidence", isLoggedIn, theoriesCtrl.createEvidence)
router.put("/:id", isLoggedIn, theoriesCtrl.update)
router.delete("/:id", isLoggedIn, theoriesCtrl.delete)


export {
  router
}
