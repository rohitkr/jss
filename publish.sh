#!/bin/bash

set -e

PACKAGES=(
  css-jss
  jss
  jss-plugin-cache
  jss-plugin-camel-case
  jss-plugin-compose
  jss-plugin-default-unit
  jss-plugin-expand
  jss-plugin-extend
  jss-plugin-global
  jss-plugin-isolate
  jss-plugin-nested
  jss-plugin-props-sort
  jss-plugin-rule-value-function
  jss-plugin-rule-value-observable
  jss-plugin-template
  jss-plugin-vendor-prefixer
  jss-preset-default
  jss-starter-kit
  react-jss
)

for pkg in "${PACKAGES[@]}"; do
  echo "Publishing $pkg..."
  cd "packages/$pkg"
  npm publish --access public
  cd ../..
done