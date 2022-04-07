const express = require('express');
const router = express.Router();
const announcementCtrl = require('../controllers/announcementCtrl');

router.get('/', announcementCtrl.getAnnouncements);

router.post('/', announcementCtrl.addAnnouncement);

router.get('/:id', announcementCtrl.getAnnouncement);

router.put('/:id', announcementCtrl.updateAnnouncement);

router.delete('/:id', announcementCtrl.deleteAnnouncement);

module.exports = router;