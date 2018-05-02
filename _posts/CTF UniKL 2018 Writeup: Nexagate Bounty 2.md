Category : Forensic
Title : Nexagate Bounty 2
Points : 500
Attachment: EvidencePendrive.E01

---

Assalamualaikum. Hello there. So here my write up for Nexagate Bounty 2.

Let's get started. So, they gave us some files which is in E01, z01 and z02 file format. The clue is "he always hide important data in random folders".

![sig-fstm_repo](/assets/img/Forensics Nexagate Bounty 2-copy.png)

After downloaded it, the first thing I do is by issuing `file EvidencePendrive.E01` command to the E01 file. And it said, `EvidencePendrive.E01: EWF/Expert Witness/EnCase image file format.`. The question's concept are same like previous forensic competition CyberHeroes that we've been participated, where they gave us an E01 file to do the analysis on it.

So, I open the E01 file with `FTK Imager` software which is a computer forensics software made by AccessData, and do a static forensic analysis on that image.

Then, after a while we analyse the image using FTK Imager. We manage to found the flag! It was hiding in the `UserData` folder. The flag is `ctfunikl18{f0r3nsicByMrK@NEXAGATE}`. And we got the extra price for the first team to solve this question.

![sig-fstm_repo](/assets/img/Screenshot (60).png)

The question is easy actually when you know what software to use to do the forensic things on the image.


