@echo off
:begin
set /p prompt=
set /p key=%prompt% <con >con
echo %key%
goto begin
