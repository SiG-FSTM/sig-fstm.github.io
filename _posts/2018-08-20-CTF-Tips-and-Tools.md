There is a lot of tools used by us (KUIS-team) during CTF Competitions. So, it takes time to build up collection of tools an tips used in ctf and remember them all. This repo helps to keep all these scattered tools and tips at one place.

# ELF file or PE file -> Reverse Engineering or Pwn

  * Execute the binary first, know the flow of the program.
  * Play with static analysis first (maybe using IDA Pro) then go to dynamic (maybe you can use gdb-peda). For details, visit this site https://malwaretips.com/threads/difference-between-static-and-dynamic-malware-analysis.44258/
  * When do analysis static or dynamic focus on strcmp. function call, conditional jump.
  * `file` command.
  * `strings` command.
  * `ltrace` command for analysis library function.
  * `strace` command for analysis system and signal function.
  * `nm` command.
  * `readelf -a (all) atau pun -h (file header)` = will displays information about ELF files.
  * `cppcheck` command. It provides unique code analysis to detect bugs and focuses on detecting undefined behaviour and dangerous coding constructs.
  * Use **DIE**, **PEBear** and other tools to do static analysis about information of the PE file.
  * Use **HxD** software to check the header.
  * **IDA pro**, **Binary Ninja**, **Hopper** for Static Analysis.
  * `gdb` (GDB Debugger), a cli tools for dynamic Analysis on ELF Linux file format
  * **Immunity Debugger** or **x64dbg** for Dyanamic Analysis on PE file (EXE, DLL).
  * `ApkTool` for R.E android.
  * Scan the binary on virustotal.com to know something malicious.
  * **InnoBF**
  * `UPX -d` to unpack packed binary
  * **dnSpy** is powerful for RE .net binary. Edit -> compile -> save all. To recognize it is a .net binary, try analysis use pebear and if you found a "mscoree.dll", it's a .net binary.
  * Analyse the source code (usually pwn categories gave us C source code).
  * Do exploitation.
  * use `pwntools`
  * use `strings`
  * use `gdb`
  * Improve your python script skills




# Web link -> Web Exploitation
  * View Page Source.
  * Inspect Element tools.
  * Sql Injection. (method).
  * XSS. (method).
  * File traversing. (method).
  * **Burpsuite** tools for penetration testing.
  * **SQLMap** tools.
  * Cookies.
  * User Agent.
  * Tamper data.
  * URL Injection. (method).
  * URL trick. (method).
  * Shell upload in file uploader. https://github.com/b374k/b374k.
  * LFI. (method).
  * RFI. (method).
  * `dirb` tools.
  * look for robots.txt
  * Save page as to look to full code of JS.
  * **WPScan** .
  * **DirBuster** tools.
  * password[]
  * index.php
  * .htaccess
  * ../
  * index.php.bak
  * console.log(function) at inspect element.
  * try execute some Linux/Windows command at textbox.


# Image/Music/Zip files/ Other Files -> Stegano / Forensics
* `file` command first.
* `cat` command and `grep` command.
* `strings -el` for little endian and `grep` command.
* Analysis header using **HxD**.
* fix the header.
* file carving. 
* **hxd**. 
* **photoshop**.
* rename image file to rar / zip.
* Zoom in and Zoom out the image.
* **TinEye**.
* `imagemagick`.
* `sng` command is compiler/decompiler for Scriptable Network Graphics.
* `unzip` command.
* `zipdetails -v` command.
* `zipinfo` command.
* `zip -F input.zip -out output.zip` and `zip -FF input.zip -out output.zip` attempt to repair a corrupted zip file.
* `Stegslove` [java -jar Stegsolve.jar] (command).
* `binwalk` [-e for extract. -z for carve data from files.].
* `foremost` command. 
* `steghide` command. [steghide -extract -sf] with password.
* `pngcheck` command. for PNGs to check for any corruption.
* `pngtools` command.
* `exiftool` command. 
* `zsteg` command.
* **Audacity** (Music).
* **Sonic Visualizer** (Music).
* **Spamimic** (text).
* **Deepsound** (Music).
* `stegcracker`.
* **stegdetect**.
* **StegSpy**.

# Digital Forensics
* Common locations for various artifacts
* Web: browsing history, cookies, cache files, ...
* Windows OS: registry table, event logs, ...
* Linux: configuration files, log files, ...
* Mobile phones: app data

# Jumbled text -> Crypto
* Google.
* Look for online tools.
* factordb.com for rsa.
* double or more decryption.
* https://crackstation.net/.
* rsactftool.

# Pcap files -> Packet Analysis
* `strings` command the pcap!!
* **Wireshark**
follow tcp streams
export data
expert info
filter
osi layer
find by string
conversation
* **NetworkMiner**
* https://www.packettotal.com/
* `aircrack-ng <pcap> -w <wordlist>`
* `airdecap-ng -p <password> <pcap>`
* `netcat`
* open the server ip in web browser

# Memory dump -> Forensics
* `Volatility`

# Trivia.
* **Google** is your friend using Google quote tricks or other google tricks.
* source code of the ctf platform

# Bruteforce
* `fcrackzip` brute-force guesses a zip password (for passwords <7 characters or so). (command)
* `stegcracker <file> [<wordlist>]`

# Programming
* when it comes for programming just google the reference. Try to understand the flow.

# Other CTF tools and tips Repo / Website links
* http://g33kinfo.com/info/archives/6261
* https://github.com/apsdehal/awesome-ctf#crypto
* https://resources.infosecinstitute.com/tools-of-trade-and-resources-to-prepare-in-a-hacker-ctf-competition-or-challenge/
* http://ctfwriteups.blogspot.com/2013/12/basic-tips-on-hacking-challenges-in.html
* https://github.com/zardus/ctf-tools
* https://github.com/MrMugiwara/CTF-Tools
* https://github.com/SandySekharan/CTF-tool
* https://www.quora.com/What-are-your-top-5-must-have-tools-for-a-hacking-challenge-or-CTF
* https://www.digitalmunition.me/2016/03/ctf-tools-setup-scripts-security-research-tools/
* https://ctfs.github.io/resources/topics/steganography/invisible-text/README.html
* https://libraries.io/github/any-how/CTF-TOOLS
* https://pequalsnp-team.github.io/cheatsheet/steganography-101
