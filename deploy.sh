#!/bin/bash
set -e

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

echo "Deploying Sanity Studio to flynt.sanity.studio..."
npx sanity deploy

echo ""
echo "Done! Studio live at https://flynt.sanity.studio/"
