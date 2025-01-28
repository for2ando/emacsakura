//eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

Editor.CancelMode();
var filePath = Editor.FileOpenDialog("", "");
if (filePath != "") {
  Editor.InsFile(filePath, 99, 0);
}
