#!/bin/bash

echo "Setting up Clipboard. Stay back and relax..."
chmod +x clipboard.py
mkdir ~/bin
cp clipboard ~/bin
echo 'export PATH=$PATH":$HOME/bin"' >> ~/.profile
source .profile
echo "Done!.. Take it away."