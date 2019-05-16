#!/bin/bash

echo "Setting up Clipboard. Stay back and relax..."
echo
chmod +x clipboard
FILE1=~/bin
FILE2=~/.profile
if [ -d "$FILE1" ]; then
    echo "~/bin already exists. Cool!"
    echo
    rm ~/bin/clipboard
else
    mkdir ~/bin
fi
cp clipboard ~/bin
if grep -q 'export PATH=$PATH":$HOME/bin"' "$FILE2"; then
    echo "Seems like this is not the first time you are installing this."
    echo
else
    echo 'export PATH=$PATH":$HOME/bin"' >> ~/.profile
    source ~/.profile
fi
echo "Done!.. Take it away."