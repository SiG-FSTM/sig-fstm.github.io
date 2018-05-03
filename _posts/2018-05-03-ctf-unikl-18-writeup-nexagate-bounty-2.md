---
layout: post
title: 'CTF UniKL 2018 Writeup: Nexagate Bounty 2'
author: Fareedfauzi
published: true
date:   2018-05-03
categories: ctf-writeup
---

Category : Forensic<br>
Title : Nexagate Bounty 2<br>
Points : 500<br>
Attachment: EvidencePendrive.E01<br>

---

Assalamualaikum. Hello there. Let's get started. So, they gave us some files which is in `E01`, `z01` and `z02` file format. The clue is "he always hide important data in random folders".<br> 



![alt text](https://github.com/fareedfauzi/sig-fstm.github.io/blob/master/assets/img/Forensics%20Nexagate%20Bounty%202-copy.png)



After downloaded it, the first thing I do is by issuing a `file EvidencePendrive.E01` command to the E01 file. And it said, `EvidencePendrive.E01: EWF/Expert Witness/EnCase image file format`. 

The question's concept are same like previous forensic competition CyberHeroes that we've been participated, where they give us an E01 file to do analysis on it.

So, I open the E01 file with `FTK Imager` software which is a computer forensics software made by AccessData, and do a static forensic analysis on that image.

Then, after a while analysing the image. We were manage to found the flag that was hiding in the `UserData` folder (refer image).

The flag is `ctfunikl18{f0r3nsicByMrK@NEXAGATE}`. We submit it and we got the extra price for the first team to solve this question.


![alt text](https://github.com/fareedfauzi/sig-fstm.github.io/blob/master/assets/img/Screenshot%20(60).png)


The question is easy actually when you know what software to use to do the forensic things on the image.


