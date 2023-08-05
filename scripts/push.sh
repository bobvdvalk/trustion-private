#!/bin/sh
set -e
PLATFORM="linux/amd64"
REGISTRY="registry.digitalocean.com/trustion-registry"

[[ -z "$1" ]] && { echo "You have to give a version number.\nJust add as a argument for example ./kpc-push.sh v1.5" ; exit 1; }

echo "Building version $1 on platform: $PLATFORM";

docker buildx build  -t $REGISTRY:"$1" --platform $PLATFORM  --push ../.
