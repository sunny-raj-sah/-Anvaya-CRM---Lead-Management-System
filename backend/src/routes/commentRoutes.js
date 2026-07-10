import express from "express";

import {
  getComments,
  addComment,
  removeComment,
 
} from "../controllers/commentController.js";

const router = express.Router();

router.get(
  "/:leadId/comments",
  getComments
);

router.post(
  "/:leadId/comments",
  addComment
);

router.delete(
   "/comments/:id",
  removeComment
);

 



export default router;