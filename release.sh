#!/bin/bash

set -u
: "$VERSION" &&

git checkout main &&
npm run build &&

# up version
npm version $VERSION &&
git push &&
git push --tags &&

# publish to npm
npm publish