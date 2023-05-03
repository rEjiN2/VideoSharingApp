import express from 'express';
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unsubscribeUser, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// updateUser
router.put("/:id",verifyToken ,update)


//deleteUser
router.delete("/:id",verifyToken ,deleteUser)


// getUser

router.get("/find/:id" ,getUser)

//subscribeUser verifyToken
router.put("/sub/:id", verifyToken ,subscribeUser)



//unsubscribeUser

router.put("/unsub/:id",verifyToken ,unsubscribeUser)


//likeVideo

router.put("/like/:videoId",verifyToken ,likeVideo)


//dislikeVideo

router.put("/disLike/:videoId",verifyToken ,dislikeVideo)

export default router;