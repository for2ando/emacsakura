eval((new ActiveXObject ("Scripting.FileSystemObject")).openTextFile(((new ActiveXObject("WScript.Shell")).Environment("USER"))("EMACSAKURA") + "\\elib.js").readAll()); //instead-of include directive

function queryReplace(eRegexpP) {
  var search = Editor.InputBox("Query replace: ");
  var replace = Editor.InputBox("Query replace " + search + " with: ", search);
  var title = "Query replacing " + search + " with " + replace + ": (? for help)";
  var option = (eRegexpP? 0x06: 0x00);
  Editor.SearchNext(search, option);
  while (true) {
	  var cc = Editor.CreateMenu(0, "&yes,&no,&<stay,&>one,&lredraw,&!all,&^back,&?help,&quit");
  	if (cc == 9) break;
	  if (cc == 1) { //y
		  Editor.Replace(search, replace, option);
  		//Editor.SearchNext(search, option);
  	} else if (cc == 2) { //n
  		Editor.SearchNext(search, option);
  	} else if (cc == 6) { //!
	  	var drawP = Editor.SetDrawSwitch(0);
	  	ELib.beginSelect();
  		Editor.GoFileEnd();
			Editor.ReplaceAll(search, replace, 0x80 | option);
		  ELib.endSelect();
  		Editor.SetDrawSwitch(drawP)
  		break;
	  } else if (cc == 5) { //C-l
		  Editor.ReDraw();
  	} else if (cc == 3) { //<
      var pointY = ELib.lineNo();
      var pointX = ELib.columnNo();
	  	Editor.Replace(search, replace, option);
      Editor.MoveCursor(pointY, pointX, 0);
  	} else if (cc == 4) { //>
  		Editor.Replace(search, replace, option);
	  	break;
  	} else if (cc == 7) { //^
	  	Editor.SearchPrev(search, option);
	  } else if (cc == 9) { //C-r
  		Editor.StatusMsg("not implemented yet");
	  } else if (cc == 10) { //C-w
  		Editor.StatusMsg("not implemented yet");
	  } else if (cc == 8) { //?
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
  InfoMsg("");
  Editor.SearchClearMark();
}
