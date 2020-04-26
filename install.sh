#!/bin/bash

echo "Setting up Clipboard. Stay back and relax..."
echo
chmod +x clipboard
FILE1=~/.clipboard
BASHRC=~/.bashrc
ZSHRC=~/.zshrc
BASHPROFILE=~/.bash_profile
if [ -d "$FILE1" ]; then
    echo "~/.clipboard already exists. Cool!"
    echo
    rm ~/.clipboard/clipboard
else
    mkdir ~/.clipboard
fi
cp clipboard ~/.clipboard

if test -f "$BASHRC"; then
    if grep -q 'export PATH=$PATH":$HOME/.clipboard"' "$BASHRC"; then
        echo "Seems like this is not the first time you are installing this."
        echo
    else
        echo 'export PATH=$PATH":$HOME/.clipboard"' >> $BASHRC
        source $BASHRC
    fi
fi

if test -f "$ZSHRC"; then
    if grep -q 'export PATH=$PATH":$HOME/.clipboard"' "$ZSHRC"; then
        echo "Seems like this is not the first time you are installing this."
        echo
    else
        echo 'export PATH=$PATH":$HOME/.clipboard"' >> $ZSHRC
        source $ZSHRC
    fi
fi

if test -f "$BASHPROFILE"; then
    if grep -q 'export PATH=$PATH":$HOME/.clipboard"' "$BASHPROFILE"; then
        echo "Seems like this is not the first time you are installing this."
        echo
    else
        echo 'export PATH=$PATH":$HOME/.clipboard"' >> $BASHPROFILE
        source $BASHPROFILE
    fi
fi

echo "Done!.. Take it away."
