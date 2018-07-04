---
layout: post
title:  "CTF UniKL 2018 Writeup: Is it the same?"
description: Hello there! In this challenge, we are given a unique type of file 'tw3_uni.exe.jpg.pdf.png.apk', that seemingly contains no hidden information on first sight.
author: imrankhairuddin
date:   2018-05-07
categories: ctf-writeup
---

Category : Cryptography<br>
Title : Is it the same?<br>
Points : 100<br>
Attachment: tw3_uni.exe.jpg.pdf.png.apk<br>

Hello there! In this challenge, we are given a unique type of file 'tw3_uni.exe.jpg.pdf.png.apk', that seemingly contains no hidden information on first sight.

![alt text](/assets/img/uniklctf-crypto1.png)

We tried issuing a 'file' command:

{% highlight bash %} root@MLAUPG1: file tw3_uni.exe.jpg.pdf.png.apk
tw3_uni.exe.jpg.pdf.png.apk: JPEG image data, JFIF standard 1.01, resolution (DPI), density 72x72, segment length 16, Exif Standard: [TIFF image data, big-endian, direntries=12, height=900, bps=0, PhotometricIntepretation=RGB, orientation=upper-left, width=945] {% endhighlight %}

It was an image type file. Then we tried issuing a 'strings' command and saw this:

![alt text](/assets/img/uniklctf-crypto2.png)

Interesting! At the end of the strings content a url link. Time to go online and look at [link](https://pastebin.com/yyEYvSAG) .

![alt text](/assets/img/uniklctf-crypto3.png)

We are getting close. Now we just need to decode the strings with [link](https://codebeautify.org/base64-decode) . When decoding Base64 text, four characters are typically converted back to three bytes. The only exceptions are when padding characters exist. A single '=' indicates that the four characters will decode to only two bytes, while '==' indicates that the four characters will decode to only a single byte. For example:

![alt text](/assets/img/uniklctf-crypto4.png)

So, we need to decode it twice.  Viola, we got the flag!

![alt text](/assets/img/uniklctf-crypto5.png)

The flag is 'uniklctf(y0u_pl4y3d_TW3_y3t?)'

