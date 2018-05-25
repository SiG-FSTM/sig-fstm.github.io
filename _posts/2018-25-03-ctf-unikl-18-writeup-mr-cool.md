---
layout: post
title: 'CTF UniKL 2018 Writeup: Mr Cool'
author: Fareedfauzi
published: true
date:   2018-25-03
categories: ctf-writeup
---

Category : Forensic<br>
Title : Mr Cool<br>
Points : 150<br>
Attachment: evidence1.flp<br>

---

Assalamualaikum, hye folks. Another forensics write-up for UniKL CTF 2018. 
<br>
![alt text](https://github.com/fareedfauzi/sig-fstm.github.io/blob/master/assets/img/Forensics_Mr_Cool%20.png)
<br>
So, at first.. we downloaded the attachment soon the question were released. We use all forensics tools available that we have on our laptop. But we didnt manage to answer the question in the first 4 hours. Hmmm. So, we end up, gave up with the question and try another challenges. Hahaha. 

But after that, we saw the teams that been solves the question is increased. Hmmm. That time, we think that the question must be an easy one question, because ramai dapat solved. So, I open my forensic and stegano tools note and try all the tools, one by one until get the answer. 

First thing first, we do `file` command. 

It says, `evidence1.flp: DOS/MBR boot sector, code offset 0x3c+2, OEM-ID "MSDOS5.0", root entries 224, sectors 2880 (volumes <=32 MB) , sectors/FAT 9, sectors/track 18, serial number 0xb886b222, unlabeled, FAT (12 bit), followed by FAT`. 

Hmm nothing interesting.

Then, we randomly try other tools and we end up use `foremost` tool. And we manage to carved three `jpg` files in this evidence1.flp file.

![alt text](https://github.com/fareedfauzi/sig-fstm.github.io/blob/master/assets/img/3-jpeg-files.png)

So, again we randomly try all the tools to all the jpg files. And the flag were found in the "OK Cool Thanks Bro".jpg file with the use of `exiftool` tools.

Hehehe COOL question UniKL!!.

![alt text](https://github.com/fareedfauzi/sig-fstm.github.io/blob/master/assets/img/flag-mrcool.png)


The flag is, `ctfunikl18{y0u_c0ol_bro}`


