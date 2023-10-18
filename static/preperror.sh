#!/bin/bash
# Generate error files

# Run locally like this:
# bash -c "$(curl -fsSL dilanxd.com/preperror.sh)"
# 
# Specify output directory like this:
# OUT=build bash -c "$(curl -fsSL dilanxd.com/preperror.sh)"
# By default, output directory is 'build'

OUT="${OUT:-build}"

echo "preperror: generating 404"
html="<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>404 - a dilanxd.com site</title><link rel=\"stylesheet\" href=\"https://www.dilanxd.com/fonts/fonts.css\"><link rel=\"stylesheet\" href=\"../static/preperror.css\"></head><body><main><div class=\"heading\"><a href=\"https://www.dilanxd.com\"><img src=\"https://www.dilanxd.com/logo.svg\" alt=\"dilanxd.com logo\" /></a><div class=\"divider\"></div><h1>404</h1></div><p>The page you requested could not be found.</p></main></body></html>"
mkdir -p $OUT
echo "$html" > $OUT/404.html
echo "preperror: generated 404"
