#!/bin/bash
# Generate profile-photos.json from images/profile directory

cd "$(dirname "$0")"

echo "{" > images/profile-photos.json
echo '  "photos": [' >> images/profile-photos.json

first=true
for file in images/profile/*; do
    if [[ -f "$file" ]]; then
        if [ "$first" = true ]; then
            first=false
        else
            echo "," >> images/profile-photos.json
        fi
        echo -n "    \"$file\"" >> images/profile-photos.json
    fi
done

echo "" >> images/profile-photos.json
echo "  ]" >> images/profile-photos.json
echo "}" >> images/profile-photos.json

echo "Generated images/profile-photos.json with $(find images/profile -type f | wc -l) photos"
