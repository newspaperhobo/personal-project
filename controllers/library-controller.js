const { response, request } = require("express");
const Log = require('../models/log-model');
const mapsAPI = process.env.MAPS_URL;
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/imgs/library')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};


const upload = multer({ storage: storage, fileFilter: imageFileFilter });

module.exports = {
    library_get: (request, response) => {
        if (request.isAuthenticated()) {
            let query;
                Log.find({}).sort({ date: 1 }).exec(function (error, all_Logs) {
                    if (error) {
                        return error
                    } else {
                        response.render('pages/library', { data: all_Logs, mapsAPI: mapsAPI, query: query })
                    }
                });
            } else {
            response.redirect('../login')
        }
    },
    create_log_get: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/create-log', { mapsAPI: mapsAPI })
        } else {
            response.redirect('../login')
        }
    },
    id_details_get: (request, response) => {
        if (request.isAuthenticated()) {
            const { id } = request.params;
            Log.findOne({ _id: id }, (error, foundLog) => {
                if (error) {
                    return error
                } else {
                    response.render('pages/details', { log: foundLog })
                }
            })
        } else {
            response.redirect('../login')
        }
    },
    id_details_post: [upload.single('img1'), (request, response) => {
        if (request.isAuthenticated()) {
            if (request.body.name === "") {
                const newLog = new Log({
                    coords: request.body.coords,
                    location: request.body.location,
                    name: "Unknown",
                    classification: request.body.classification,
                    notes: request.body.notes,
                    img1: request.file.filename,
                    img2: request.body.img2,
                    img3: request.body.img3,
                    img4: request.body.img4,
                })
                newLog.save();
            } else {
                const newLog = new Log({
                    coords: request.body.coords,
                    location: request.body.location,
                    name: request.body.name,
                    classification: request.body.classification,
                    notes: request.body.notes,
                    img1: request.file.filename,
                    img2: request.body.img2,
                    img3: request.body.img3,
                    img4: request.body.img4,
                })
                newLog.save();
            }
        }
        response.redirect('/library')
    }],
    id_details_put: (request, response) => {
        const { id } = request.params;
        Log.findByIdAndUpdate(id, {
            $set: {
                coords: request.body.coords,
                location: request.body.location,
                date: request.body.date,
                name: request.body.name,
                classification: request.body.classification,
                notes: request.body.notes,
                img1: request.body.img1,
                img2: request.body.img2,
                img3: request.body.img3,
                img4: request.body.img4,
            }
        }, { new: true }, error => {
            if (error) {
                return error
            } else {
                response.redirect(`./${id}`);
            }
        })
    },
    id_details_delete: (request, response) => {
        const { id } = request.params;
        Log.deleteOne({ _id: id }, error => {
            if (error) {
                return error
            } else {
                response.redirect('/library')
            }
        })
    },
    update_log_get: (request, response) => {
        if (request.isAuthenticated()) {
            const { id } = request.params;
            Log.findOne({ _id: id }, (error, foundLog) => {
                if (error) {
                    return error
                } else {
                    response.render('pages/update', { foundLog: foundLog, mapsAPI: mapsAPI });
                }
            })
        } else {
            response.redirect('../login')
        }
    },
    map_search_get: (request, response) => {
        const query = request.query;
        const season = query.subSort;
        if (request.isAuthenticated()) {
        if (season === "spring") {
            Log.aggregate().project({
                name: 1,
                coords: 1,
                date: 1,
                month: {
                    $month: "$date"
                }
            }).match({
                month: { $gte: 3, $lte: 5 }
            }).exec(function (err, result) {
                response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: season })
            });
        } else if (season === "summer") {
            Log.aggregate().project({
                name: 1,
                coords: 1,
                date: 1,
                month: {
                    $month: "$date"
                }
            }).match({
                month: { $gte: 6, $lte: 8 }
            }).exec(function (err, result) {
                response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: season })
            });
        } else if (season === "autumn") {
            Log.aggregate().project({
                name: 1,
                coords: 1,
                date: 1,
                month: {
                    $month: "$date"
                }
            }).match({
                month: { $gte: 9, $lte: 11 }
            }).exec(function (err, result) {
                response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: season })
            });
        } else if (season === "winter") {
            Log.aggregate().project({
                name: 1,
                coords: 1,
                date: 1,
                month: {
                    $month: "$date"
                }
            }).match({
                $or: [{ month: 12 }, { month: { $gte: 1, $lte: 2 } }]
            }).exec(function (err, result) {
                response.render('pages/map-view', { data: result, mapsAPI: mapsAPI, query: season })
            });
        } else if (season === "all") {
            Log.find({}, (error, all_Logs) => {
                if (error) {
                    return error
                } else {
                    response.render('pages/map-view', { data: all_Logs, mapsAPI: mapsAPI, query: query })
                }
            })
        } else {
            response.redirect('library/map_view');
        }
    } else {
        response.redirect('../login')
    }
}
}

