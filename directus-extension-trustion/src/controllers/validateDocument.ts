import {defineEndpoint} from '@directus/extensions-sdk';
import {catchErrors} from "../middelware/catchErrors";
import {Validation} from "models";
import type {ItemsService} from "@directus/api/dist/services/items";

export default defineEndpoint((router, {services, database}) => {
    router.get('/', catchErrors(async (req, res) => {
        const hash = req.query.hash;
        if (!hash || typeof hash !== "string") {
            res.status(400);
            res.json({
                error: 'HASH_REQUIRED'
            });
            return;
        }
        const validations: ItemsService<Validation> = new services.ItemsService(
            'validations',
            {
                schema: req.schema,
                database: database,
                accountability: null,
            }
        );
        const validation = (
            await validations.readByQuery({
                filter: {
                    hash: {
                        _eq: hash
                    }
                },
                fields: [
                    'filename',
                    'hashed_on',
                    'context',
                    'hashed_by.first_name',
                    'hashed_by.last_name',
                ],
                limit: 1
            })
        )[0];
        if (!validation) {
            res.status(404);
            res.json({
                error: 'UNSIGNED_DOCUMENT'
            });
            return;
        }

        res.json({
            signer: {
                name: [
                    // @ts-ignore
                    validation.hashed_by.first_name,
                    // @ts-ignore
                    validation.hashed_by.last_name,
                ]
                    .filter(part => !!part)
                    .join(' ') || 'unknown',
            },
            document: {
                filename: validation.filename,
                hashedOn: validation.hashed_on,
                context: validation.context
            }
        });
    }));
});
