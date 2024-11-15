import { Router } from 'express';
import userCtrl from '../controllers/UserCtrl';

const router = new Router();

router.post('/', userCtrl.store);
router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.delete);

export default router;

/*
index -> list users -> GET
store/create -> create users -> POST
delete -> delete users -> DELETE
show -> show a user -> GET
update -> update user -> PUT or PATCH
*/
