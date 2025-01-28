eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

function queryReplace(eRegexpP) {
  var search = Editor.InputBox("Query replace: ");
  var replace = Editor.InputBox("Query replace " + search + " with: ", search);
  var prompt = "Query replacing " + search + " with " + replace + ": (? for help)";
  var option = (eRegexpP? 0x06: 0x00);
  var wsh = new ActiveXObject("WScript.Shell");
  var console = wsh.Exec("sh " + wsh.Environment("USER")("EMACSAKURA") + "\\congetkey.sh");
  var conIn = console.StdIn;
  var conOut = console.StdOut;
  Editor.SearchNext(search, option);
  while (true) {
    conIn.WriteLine(prompt);
    var cc = conOut.Read(1)
	  //"&yes,&no,&<stay,&>one,&lredraw,&!all,&^back,&?help,&quit"
  	if (cc == "q") break;
	  if (cc == "y") {
		  Editor.Replace(search, replace, option);
  		//Editor.SearchNext(search, option);
  	} else if (cc == "n") {
  		Editor.SearchNext(search, option);
  	} else if (cc == "!") {
	  	var drawP = Editor.SetDrawSwitch(0);
	  	ELib.beginSelect();
  		Editor.GoFileEnd();
			Editor.ReplaceAll(search, replace, 0x80 | option);
		  ELib.endSelect();
  		Editor.SetDrawSwitch(drawP)
  		break;
	  } else if (cc == "\x0c") { //C-l
		  Editor.ReDraw();
  	} else if (cc == ",") {
      var pointY = ELib.lineNo();
      var pointX = ELib.columnNo();
	  	Editor.Replace(search, replace, option);
      Editor.MoveCursor(pointY, pointX, 0);
  	} else if (cc == ".") {
  		Editor.Replace(search, replace, option);
	  	break;
  	} else if (cc == "^") {
	  	Editor.SearchPrev(search, option);
	  } else if (cc == "\x12") { //C-r
  		Editor.StatusMsg("not implemented yet");
	  } else if (cc == "\x17") { //C-w
  		Editor.StatusMsg("not implemented yet");
	  } else if (cc == "?") { //?
		  InfoMsg("Query replacing " + search + " with " + replace + ".\n\n" +
      "Type Space or `y' to replace one match,\n" +
      "Backspace or `n' to skip to next,\n" +
      "RET or `q' to exit,\n" +
      "Period to replace one match and exit,\n" +
      "Comma to replace but not move point immediately,\n" +
      //"C-r to enter recursive edit (M-C-c to get out again),\n" +
      //"C-w to delete match and recursive edit,\n" +
      "C-l to clear the screen, redisplay, and offer same replacement again,\n" +
      "! to replace all remaining matches with no more questions,\n" +
      "^ to move point back to previous match.");
  	}
  }
  Editor.SearchClearMark();
  console.Terminate();
}
