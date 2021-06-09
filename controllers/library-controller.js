const { response, request } = require("express");
const Log = require('../models/log-model')
const mapsAPI = process.env.MAPS_URL

module.exports = {
    library_get: (request, response) => {
        if (request.isAuthenticated()) {
            Log.find({}, (error, all_Logs) => {
                if (error) {
                    return error
                } else {
                    response.render('pages/library', { data: all_Logs , mapsAPI: mapsAPI })
                }
            });
        } else {
            response.redirect('../login')
        }
    },
    create_pin_get: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/create-pin', { mapsAPI: mapsAPI })
        } else {
            response.redirect('../login')
        }
    },
    create_log_get: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/create-log', { mapsAPI : mapsAPI })
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
    id_details_post: (request, response) => {
        if (request.isAuthenticated()) {
            if (request.body.name === "") {
            const newLog = new Log({
                coords: request.body.coords,
                location: request.body.location,
                name: "Unknown",
                classification: request.body.classification,
                notes: request.body.notes,
                img1: request.body.img1,
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
                img1: request.body.img1,
                img2: request.body.img2,
                img3: request.body.img3,
                img4: request.body.img4, 
            })
            newLog.save(); }
    }
            response.redirect('/library')
        },
    update_log_get: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/update')
        } else {
            response.redirect('../login')
        }
    },
    library_map_get: (request, response) => {
        if (request.isAuthenticated()) {
            Log.find({}, (error, all_Logs) => {
                if (error) {
                    return error
                } else {
                    response.render('pages/map-view', { data: all_Logs , mapsAPI: mapsAPI })
                }
            })
        } else {
            response.redirect('../login')
        }
    },
    search_get: (request, response) => {
        const season = request.query;
        if (request.isAuthenticated()) {
            if (season === "spring") {
                // Log.aggregate([
                //     { "$match" : {$month: "$date"}}
                // ]
                // .exec((error, seasonal_Logs)=> {
                //     console.log(seasonal_Logs);
                //     // if (error) {
                //     //     return error
                //     // } else {
                //     //     response.render('pages/map-view', { data: all_Logs , mapsAPI: mapsAPI })
                //     // }
                // }))
                Log.find({
                    date: { $gte: 3, $lte: 5}
                })
            }
        } else {
            response.redirect('../login')
        }
        
    },
}

