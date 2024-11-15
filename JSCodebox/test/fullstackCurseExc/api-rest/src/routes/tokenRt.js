import { Router } from 'express';
import tokenCtrl from '../controllers/TokenCtrl';

const router = new Router();

router.post('/', tokenCtrl.store);

export default router;
