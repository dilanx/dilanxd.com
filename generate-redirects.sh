#!/bin/bash
while read one && read two; do
  echo "generate-redirects: mapping /$one to '$two'"
  html="<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><title>Redirecting...</title><script>window.location.replace(\`$two\`);</script></head></html>"
  mkdir -p build/$one
  echo "$html" > build/$one/index.html
done < redirects.txt
