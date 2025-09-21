#!/bin/bash
echo "🚀 Starting Commerce Bank Application..."
echo "📁 Working directory: $(pwd)"
echo "📦 Package.json exists: $(test -f package.json && echo '✅ Yes' || echo '❌ No')"
echo "🔧 Installing dependencies..."
npm install
echo "🏗️  Building application..."
npm run build
echo "🌐 Starting development server..."
npm run dev
