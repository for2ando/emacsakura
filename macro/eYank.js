eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive
try {

if (ELib.readOnly() > 0) { Editor.MsgBeep(3); throw null; }
if (Editor.getClipboard(0) == "") throw null;
Editor.SetCookie("document", "eMarkY", ELib.lineNo());
Editor.SetCookie("document", "eMarkX", ELib.columnNo());
Paste();
Editor.SetCookie("document", "eKillPosY", -1);
Editor.SetCookie("document", "eKillPosX", -1);

} catch(err) {}
