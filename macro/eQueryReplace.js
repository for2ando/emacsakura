eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\eQueryReplaceCore.js").readAll()); //instead-of include directive

queryReplace(false);
