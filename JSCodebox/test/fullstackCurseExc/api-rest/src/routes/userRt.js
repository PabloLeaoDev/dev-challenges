import { Router } from 'express';
import userCtrl from '../controllers/UserCtrl';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// complete CRUD, but uncommon in applications of this type
router.get('/', userCtrl.index);
// router.get('/:id', userCtrl.show);

router.post('/', userCtrl.store);
router.put('/', loginRequired, userCtrl.update);
router.delete('/', loginRequired, userCtrl.delete);

export default router;

/*
index -> list users -> GET
store/create -> create users -> POST
delete -> delete users -> DELETE
show -> show a user -> GET
update -> update user -> PUT or PATCH
*/
