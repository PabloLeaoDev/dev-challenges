import { Router } from 'express';
import homeCtrl from '../controllers/HomeCtrl';

const router = new Router();

router.get('/', homeCtrl.index);

export default router;
