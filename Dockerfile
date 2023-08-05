FROM node:18 as base

WORKDIR /app

COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
COPY directus-app/package.json directus-app/package.json
COPY directus-extension-trustion/package.json directus-extension-trustion/package.json
COPY models/package.json models/package.json
COPY next-app/package.json next-app/package.json

FROM base as build

RUN yarn install --frozen-lockfile

COPY directus-app directus-app
COPY directus-extension-trustion directus-extension-trustion
COPY models models
COPY next-app next-app

RUN yarn build


FROM base as production

ENV NODE_ENV=production
RUN yarn install --frozen-lockfile --production

COPY --from=build /app/directus-extension-trustion/dist directus-extension-trustion/dist
COPY --from=build /app/models/dist models/dist
COPY --from=build /app/next-app/.next next-app/.next
