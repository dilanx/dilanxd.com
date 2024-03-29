#!/bin/bash
# Generate redirects from a text file

# Run locally like this:
# bash -c "$(curl -fsSL dilanxd.com/genredir.sh)" < REDIRECT_FILE_NAME
# 
# Specify output directory like this:
# OUT=build bash -c "$(curl -fsSL dilanxd.com/genredir.sh)" < REDIRECT_FILE_NAME
# By default, output directory is 'build'

# Redirect files should look like this:
# path1 target1
# path2 target2
# ...
# 
# Example:
# guide https://example.com/guide/
# blog https://example.org/blog/

OUT="${OUT:-build}"

echo "genredir: using output directory '$OUT'"
while read line; do
  read -ra arr <<< "$line"
  one=${arr[0]}
  two=${arr[1]}

  if [ -z "$one" ]; then
    continue
  fi

  if [[ ! "$one" =~ ^\/.*$ ]]; then
    echo "genredir: invalid redirect path '$one', it must start with a slash"
    exit 1
  fi

  if [[ ! "$one" =~ ^.*\/$ ]]; then
    path="$one/"
  fi

  if [ -z "$two" ]; then
    echo "genredir: no redirect target for '/$one', skipping"
    continue
  fi
  
  html="<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><title>Redirecting...</title><script>window.location.replace(\`$two\`);</script></head></html>"
  mkdir -p $OUT$path
  echo "$html" > $OUT$path/index.html

  echo "genredir: mapped $one to '$two'"
done
