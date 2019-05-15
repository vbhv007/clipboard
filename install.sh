#!/bin/bash

echo "Setting up Clipboard. Stay back and relax..."
chmod +x clipboard
FILE=~/bin
if [ -d "$FILE" ]; then
    echo "~/bin already exists. Cool!"
else
    mkdir ~/bin
fi
cp clipboard ~/bin
echo 'export PATH=$PATH":$HOME/bin"' >> ~/.profile
source ~/.profile
echo "Done!.. Take it away."