// a library for the EmacSakura (A emacs key bind and macros for Sakura editor)

function ELib() {
  
  // character code under the cursor
  this.code = function() {
    return Editor.GetLineStr(Editor.ExpandParameter("$y")).charAt(Editor.ExpandParameter("$x"))
  }
  
  // logical line number
  this.lineNo = function() {
    return Number(Editor.ExpandParameter("$y"));
  }
  
  // logical column number
  this.columnNo = function() {
    return Number(Editor.ExpandParameter("$x"));
  }
  
  // read-only flag: 0=normal, 1=readonly(file read-only or exclusive between prural windows), 2=view mode.
  this.readOnly = function() {
    return Number(Editor.ExpandParameter("${R?2$:1$:0$}"));
  }
  
  // begin selection mode
  this.beginSelect = function() {
    if (Editor.IsTextSelected() > 0) Editor.CancelMode();
    Editor.BeginSelect();
  }
  
  // end selection mode
  this.endSelect = function() {
    Editor.CancelMode();
  }
  
  // append selection to clipboard
  this.appendCopy = function() {
    var current = Editor.GetClipboard(0);
    var selected = Editor.GetSelectedString(0);
    SetClipboard(0, current + selected);
  }
  
  // append selection to clipboard, and delete selection
  this.appendCut = function() {
    this.appendCopy();
    Editor.Delete();
  }

  // backward-append selection to clipboard, and delete selection
  this.backwardAppendCut = function() {
    var current = Editor.GetClipboard(0);
    var selected = Editor.GetSelectedString(0);
    SetClipboard(0, selected + current);
    Editor.Delete();
  }
}
ELib = new ELib();
