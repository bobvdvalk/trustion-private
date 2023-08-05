import {defineEndpoint} from '@directus/extensions-sdk';
import {catchErrors} from "../middelware/catchErrors";
import multer from "multer";
import {createHash} from "crypto";
import type {ItemsService} from "@directus/api/dist/services/items";
import {Validation} from "models";


export default defineEndpoint((router, {services, database}) => {
    const upload = multer();

    router.post('/', upload.single('document'), catchErrors(async (req, res) => {
        if(!req.accountability?.user) {
            res.status(403);
            res.json({
                error: 'MUST_AUTHENTICATE'
            });
            return;
        }
        const file = req.file;
        const context = req.body.context;
        if(!file) {
            res.status(400);
            res.json({
                error: 'DOCUMENT_REQUIRED'
            });
            return;
        }
        if(!context) {
            res.status(400);
            res.json({
                error: 'CONTEXT_REQUIRED'
            });
            return;
        }
        const hash = createHash('sha1')
            .update(file.buffer)
            .digest('base64url');

        const validations: ItemsService<Validation> = new services.ItemsService(
            'validations',
            {
                schema: req.schema,
                database: database,
                accountability: null,
            }
        );
        const conflicts = await validations.readByQuery({
            filter: {
                hash: {
                    _eq: hash
                }
            }
        });
        if(conflicts.length > 0) {
            res.status(409);
            res.json({
                error: 'ALREADY_SIGNED'
            });
            return;
        }
        await validations.createOne({
            hash,
            context,
            filename: file.originalname,
            hashed_on: new Date().toISOString(),
            hashed_by: req.accountability.user,
        })
        res.json({
            hash
        });
    }));
});
