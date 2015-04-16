#!/bin/bash
set -o pipefail

echo "$TRAVIS_BRANCH"

if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" != "true" ]
then
  echo "Deploying!" && \
  cp CNAME _site
  cd _site && \
  git init && \
  git add . && \
  git commit -m "deploy" && \
  git push --force --quiet "https://${GH_TOKEN}@github.com/bq/penguin-doc.git" master:gh-pages > /dev/null 2>&1
fi