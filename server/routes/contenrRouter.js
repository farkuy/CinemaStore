const Router = require(`express`)
const router = new Router();
const contentController = require('../controllers/contentController')


router.post('/', contentController.create);
/*
router.delete('/', contentController.delete)
*/
router.get('/', contentController.getAll);
router.get('/:id', contentController.getOne);

module.exports = router;