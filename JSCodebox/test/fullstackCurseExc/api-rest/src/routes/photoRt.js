import { Router } from 'express';

import photoCtrl from '../controllers/PhotoCtrl';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoCtrl.store);

export default router;
