import routes from "../routes"
import Video from "../models/video"

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        //do not render before part of await
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        res.render("home", { pageTitle: "Home", videos: [] });
    }
    //becaues NodeJs doesn't work when occured error, use try and catch 
};
export const search = (req, res) => {
    const {
        query: { term: searchingFor }
    } = req;
    //const searchingFor = req.query.term;
    res.render("search", { pageTitle: "Search", searchingFor, videos });
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { file, title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: "Video Detail", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    };
};
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
//.render(Template, Object(, Object, …))
//use render's second factor you can give Template-variable in Pug