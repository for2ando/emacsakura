eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

var len = Editor.GetLineStr(0).length - 1
Editor.MoveCursor(ELib.lineNo(), len, 0);
