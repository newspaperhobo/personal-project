const { response, request } = require("express");
const Log = require('../models/log-model')

module.exports = {
    library_get: (request, response) => {
        Log.find({}, (error, all_Logs) => {
            if (error) {
                return error
            } else {
                response.render('pages/library', { data : all_Logs })
            }
        })
    },
    map_get: (request,response) => {
        response.render('pages/create-pin')
    },
    create_log_get: (request, response) => {
        response.render('pages/create-log')
    },
    id_details_get: (request, response) => {
        response.render('pages/details')
    },
    id_details_post: (request, response) => {
        const newLog = new Log({
            date: request.body.date,
            id_name: request.body.id_name,
            location: request.body.location,
            classification: request.body.classification,
            notes: request.body.notes,
            img1: request.body.img1,
            img2: request.body.img2,
            img3: request.body.img3,
            img4: request.body.img4,
        });
        newLog.save();
        response.redirect('/library')
    },
    update_log_get: (request, response) => {
        response.render('pages/update')
    }

}