eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

Editor.SetCookie("document", "eMarkY", ELib.lineNo());
Editor.SetCookie("document", "eMarkX", ELib.columnNo());
