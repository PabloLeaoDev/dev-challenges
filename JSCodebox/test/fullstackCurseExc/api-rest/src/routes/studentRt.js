import { Router } from 'express';
import studentCtrl from '../controllers/StudentCtrl';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentCtrl.index);
router.post('/', loginRequired, studentCtrl.store);
router.get('/:id', studentCtrl.show);
router.put('/:id', loginRequired, studentCtrl.update);
router.delete('/:id', loginRequired, studentCtrl.delete);

export default router;
