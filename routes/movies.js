const router = require('express').Router();

router.get('/movies'); // возвращает все сохранённые пользователем фильмы
router.post('/movies'); // создаёт фильм
router.delete('/movies/_id'); // удаляет сохранённый фильм по id

module.exports = router;
