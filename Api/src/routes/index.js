import express from "express";
import * as controllers from "../controllers/index.js";

const router = express.Router();

router.get("/home", (req,res)=>{
  console.log("hello word")
  res.send('anjay mabar')
};
// router.get("/ongoing", controllers.getOnGoing);
// router.get("/completed", controllers.getCompleted);
// router.get("/anime", controllers.getAnime);
// router.get("/movie", controllers.getMovie);
// router.get("/genre", controllers.getGenre);
// router.get("/search", controllers.getSearch);
// router.get("/anime/:slug", controllers.getAnimeDetails);
// router.get("/genre/:slug", controllers.getGenreBySlug);
// router.get("/anime/:slug/:episode", controllers.getStreamingAnime);
// router.get("/movie/:slug", controllers.getStreamingMovie);

export default router;
