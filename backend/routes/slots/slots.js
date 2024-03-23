var express = require("express");
const {
  addSlots,
  getAllSlots,
  updateSlots,
  fetchdataOfSlot,
  updateSlot,
} = require("../../controller/slots/slotsController");
var router = express.Router();

router.get("/allSlots", getAllSlots);

router.post("/:gsid/addSlots", addSlots);

router.put("/:gsid/update", updateSlots);

router.get("/:slotId/slot", fetchdataOfSlot);

router.put("/:slotId/updateSlot", updateSlot);

router.delete("/:slotId/deleteSlot", updateSlot);

module.exports = router;
