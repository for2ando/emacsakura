eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

// get state
var appendp = (Editor.GetCookie("document", "eKillPosY") == ELib.lineNo() && Editor.GetCookie("document", "eKillPosX") == ELib.columnNo())

// body
var pointY = ELib.lineNo();
var pointX = ELib.columnNo();
Editor.MoveCursor(Editor.GetCookie("document", "eMarkY"), Editor.GetCookie("document", "eMarkX"), 1);
if (appendp) ELib.appendCopy(); else Editor.Copy();
Editor.MoveCursor(pointY, pointX, 0);

// set state
Editor.SetCookie("document", "eKillPosY", ELib.lineNo());
Editor.SetCookie("document", "eKillPosX", ELib.columnNo());
