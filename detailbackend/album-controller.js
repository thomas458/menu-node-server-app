import * as dao from "./album-dao.js";

export default function AlbumController(app) {

  const likeAlbum = async (req, res) => {
    const albumId = req.params.albumId;
    const album = await dao.findAlbumByAlbumId(albumId);
    let album123 = null;
    if (album) {
      album.likes = album.likes + 1;
      await album.save();
      album123 = album;
    } else {
      const newAlbum = await dao.createAlbum({
        ...req.body,
        albumId,
        likes: 1,
      });
      album123 = newAlbum;
    }
    const currentUser = req.session["currentUser"];
    console.log("req.session", req.session);
    const userId = currentUser._id;
    await dao.createLike(album123._id, userId);
    res.json(album123);
  };

  const findAlbumsILike = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    const likes = await dao.findLikesForUser(userId);
    const albums = likes.map((like) => like.album);
    const map = new Map();
    const ans = albums.reduce((result, obj) => {
      const aid = obj.albumId;
      if (!map.has(aid)) {
        map.set(aid, true);
        result.push(obj);
      }
      return result;
    }, []);

    res.json(ans);
  };
  app.post("/api/albums/albumId/:albumId/like", likeAlbum);
  app.get("/api/albums/i/like", findAlbumsILike);
}