const {Content, ContentInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

const uuid = require('uuid')
const path = require('path')
const {where} = require("sequelize");
class ContentController {
    async create(req, res, next) {
        try {
            let {name, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + `.jpg`;
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const content = await Content.create({name, brandId, typeId, img: fileName})


            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    ContentInfo.create({
                        title: i.title,
                        description: i.description,
                        contentId: content.id
                    })
                )
            }


            return res.json(content)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }

    }

    /*async delete(req, res, next) {
        try {
            let {name, brandId, typeId, info} = req.body;

        } catch (err) {
            next(ApiError.internal(err.message))
        }
    }*/

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let contents;
        if(!brandId && !typeId) {
            contents = await Content.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId) {
            contents = await Content.findAndCountAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId) {
            contents = await Content.findAndCountAll({where: {typeId}, limit, offset})
        }
        if(brandId && typeId) {
            contents = await Content.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(contents)
    }

    async getOne(req, res) {
        const {id} = req.params
        const content = await Content.findOne(
            {
                where: {id},
                include: [{model: ContentInfo, as: `info`}]
            }
        )
        return res.json(content)
    }
}

module.exports = new ContentController()