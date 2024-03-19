import { Router } from "express";

const router = Router();

// routes
// router.get("/", (req, res) => {
//   res.json({ msg: "Home @ server / routes / checklists.js" });
// });

// get all checklists
router.get("/", (req, res) => {
  res.json({ msg: "GET all checklists @ server / routes / checklists.js" });
});

// get a single checklist
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single checklist @ server / routes / checklists.js" });
});

// post a checklist
router.post("/", (req, res) => {
  res.json({ msg: "POST a checklist @ server / routes / checklists.js" });
});

// delete a checklist
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a checklist @ server / routes / checklists.js" });
});

// update a checklist
router.patch("/:id", (req, res) => {
  res.json({ msg: "PUT a checklist @ server / routes / checklists.js" });
});

export default router;
