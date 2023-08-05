import { defineEndpoint } from '@directus/extensions-sdk';
import {catchErrors} from "../middelware/catchErrors";

export default defineEndpoint((router) => {
	router.get('/', catchErrors(async (_req, res) => {
		res.send("Hello World");
	}));
});
