import express from 'express';
import { addVideo, addView, deleteVideo, getByTags, getVideo, randomVideos, search, subVideos, trendVideos, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// create a video
router.post("/",verifyToken,addVideo)

//update Video
router.put("/:id",verifyToken,updateVideo)

//delete video
router.delete("/:id",verifyToken,deleteVideo)

// get Video
router.get("/find/:id",getVideo)


router.put("/view/:id",addView)


router.get("/trend",trendVideos)


router.get("/random",randomVideos)


router.get("/sub",verifyToken,subVideos)

router.get("/tags",getByTags)

router.get("/search",search)




export default router;