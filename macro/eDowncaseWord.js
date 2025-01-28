eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

ELib.beginSelect();
Editor.WordRight();
Editor.ToLower();
Editor.CancelMode();
