import { Router } from 'express'
import * as theoriesCtrl from "../controllers/theories.js"

const router = Router()

router.get("/", theoriesCtrl.index)

export {
  router
}
