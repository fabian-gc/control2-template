import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './health/health'
import getUser from './health/health'
const router = new Router()

router.get('/health', getHealth)
router.get('/health', getToken)
router.get('/health', getUser)
export default router
