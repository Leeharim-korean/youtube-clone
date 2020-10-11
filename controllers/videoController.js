export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
    const {
        query: { term: searchingFor }
    } = req;
    //const searchingFor = req.query.term;
    res.render("search", { pageTitle: "Search", searchingFor });
};

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
//.render(Template, Object(, Object, …))
//use render's second factor you can give Template-variable in Pug