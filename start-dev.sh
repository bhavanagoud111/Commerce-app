#!/bin/bash
cd /Users/bhavanagoudediga/Desktop/commerce/commerce-digital-twin
echo "Starting Commerce Bank application..."
echo "Current directory: $(pwd)"
echo "Package.json exists: $(test -f package.json && echo 'Yes' || echo 'No')"
npm run dev
