#!/bin/bash

# Start from the current directory
STARTDIR="."

# Find all .md files and rename them to .mdx
find "$STARTDIR" -type f -name '*.md' -exec sh -c '
  for file do
    mv -- "$file" "${file%.md}.mdx"
  done
' sh {} +