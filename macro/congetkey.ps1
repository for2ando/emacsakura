#!/c/WINDOWS/system32/WindowsPowerShell/v1.0/powershell

#Import-Module ($(dirname $MyInvocation.MyCommand.Path) + "\MoveWindow.psm1")

Add-Type -Namespace PInvoke -Name Win32 -MemberDefinition @"
   [DllImport("kernel32.dll", SetLastError = true)]
   public static extern bool FreeConsole();

   [DllImport("kernel32", SetLastError = true)]
   public static extern bool AttachConsole(int dwProcessId);

   [DllImport("user32.dll")]
   public static extern IntPtr GetForegroundWindow();

   [DllImport("user32.dll", SetLastError = true)]
   public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out int lpdwProcessId);
"@

    #Write-Host ([Console]::In.ReadLine())
    #Write-Host ([Console]::In.ReadLine())
#$input

    #[IntPtr]$winFg = [PInvoke.Win32]::GetForegroundWindow();
    #[UInt32]$processFg = 0
    #[PInvoke.Win32]::GetWindowThreadProcessId($winFg, [ref]$processFg) | Out-Null
    #[PInvoke.Win32]::FreeConsole() | Out-Null
    #[PInvoke.Win32]::AttachConsole($processFg) | Out-Null


$input | foreach {
    Write-Host $_ -NoNewLine
    #[Console]::ReadKey()|Get-Member
    #[Console]::ReadKey()
    do { $key = $host.UI.RawUI.ReadKey("IncludeKeyDown,NoEcho") } while ($key.VirtualKeyCode -lt 0x20); fWrite-Host $key.Character
    #[Console]::OpenStandardInput()|Get-Member
    #[Console]::OpenStandardInput().ReadByte()
}

