eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

var pointY = ELib.lineNo();
var pointX = ELib.columnNo();
Editor.MoveCursor(Editor.GetCookie("document", "eMarkY"), Editor.GetCookie("document", "eMarkX"), 0);
Editor.SetCookie("document", "eMarkY", pointY);
Editor.SetCookie("document", "eMarkX", pointX);
