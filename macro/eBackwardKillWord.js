eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

// get state
var appendp = (Editor.GetCookie("document", "eKillPosY") == ELib.lineNo() && Editor.GetCookie("document", "eKillPosX") == ELib.columnNo())

// body
ELib.beginSelect();
Editor.WordLeft();
if (appendp) ELib.backwardAppendCut(); else Editor.Cut();

// set state
Editor.SetCookie("document", "eKillPosY", ELib.lineNo());
Editor.SetCookie("document", "eKillPosX", ELib.columnNo());
