eval((new ActiveXObject("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

Editor.MoveCursor(ELib.lineNo(), 1, 0);
