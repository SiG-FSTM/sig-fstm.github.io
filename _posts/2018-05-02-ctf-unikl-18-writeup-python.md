---
layout: post
title: 'CTF UniKL 2018 Writeup: python_dis.dis2'
description: The question didn't say anything but giving us a python 2.7 byte-compiled file. This can be identified by issuing the `file` command. As the file says, it's a compiled binary so you cannot see the sources directly.
author: IceM4nn
published: true
date:   2018-05-02
categories: ctf-writeup
---

Category  : Binary<br>
Title     : python_dis.dis2<br>
Points    : 200<br>
Attachment: encrypt_decode.py<br>

The question didn't say anything but giving us a python 2.7 byte-compiled file. This can be identified by issuing the `file` command. As the file says, it's a compiled binary so you cannot see the sources directly.

By running the python binary, you get an output such:

{% highlight bash %}
$ python encrypt_decode.py
 4           0 LOAD_CONST               1 ('')
             3 STORE_FAST               0 (_1)

 8           6 SETUP_LOOP             234 (to 243)
             9 LOAD_CONST               2 (102)
            12 LOAD_CONST               3 (114)
            15 LOAD_CONST               4 (111)
            18 LOAD_CONST               5 (109)
            21 LOAD_CONST               6 (32)
            24 LOAD_CONST               7 (122)
            27 LOAD_CONST               8 (108)
            30 LOAD_CONST               9 (105)
            33 LOAD_CONST              10 (98)
            36 LOAD_CONST               6 (32)
            39 LOAD_CONST               9 (105)
            42 LOAD_CONST               5 (109)
            45 LOAD_CONST              11 (112)
            48 LOAD_CONST               4 (111)
            51 LOAD_CONST               3 (114)
            54 LOAD_CONST              12 (116)
            57 LOAD_CONST               6 (32)
            60 LOAD_CONST              13 (100)
            63 LOAD_CONST              14 (101)
            66 LOAD_CONST              15 (99)
            69 LOAD_CONST               4 (111)
            72 LOAD_CONST               5 (109)
            75 LOAD_CONST              11 (112)
            78 LOAD_CONST               3 (114)
            81 LOAD_CONST              14 (101)
            84 LOAD_CONST              16 (115)
            87 LOAD_CONST              16 (115)
            90 LOAD_CONST               6 (32)
            93 LOAD_CONST              17 (97)
            96 LOAD_CONST              16 (115)
            99 LOAD_CONST               6 (32)
           102 LOAD_CONST              18 (121)
           105 LOAD_CONST              19 (10)
           108 LOAD_CONST               2 (102)
           111 LOAD_CONST               3 (114)
           114 LOAD_CONST               4 (111)
           117 LOAD_CONST               5 (109)
           120 LOAD_CONST               6 (32)
           123 LOAD_CONST              10 (98)
           126 LOAD_CONST               9 (105)
           129 LOAD_CONST              20 (110)
           132 LOAD_CONST              17 (97)
           135 LOAD_CONST              16 (115)
           138 LOAD_CONST              15 (99)
           141 LOAD_CONST               9 (105)
           144 LOAD_CONST               9 (105)
           147 LOAD_CONST               6 (32)
           150 LOAD_CONST               9 (105)
           153 LOAD_CONST               5 (109)
           156 LOAD_CONST              11 (112)
           159 LOAD_CONST               4 (111)
           162 LOAD_CONST               3 (114)
           165 LOAD_CONST              12 (116)
           168 LOAD_CONST               6 (32)
           171 LOAD_CONST              21 (117)
           174 LOAD_CONST              20 (110)
           177 LOAD_CONST              22 (104)
           180 LOAD_CONST              14 (101)
           183 LOAD_CONST              23 (120)
           186 LOAD_CONST               8 (108)
           189 LOAD_CONST               9 (105)
           192 LOAD_CONST               2 (102)
           195 LOAD_CONST              18 (121)
           198 LOAD_CONST               6 (32)
           201 LOAD_CONST              17 (97)
           204 LOAD_CONST              16 (115)
           207 LOAD_CONST               6 (32)
           210 LOAD_CONST              21 (117)
           213 BUILD_LIST              68
           216 GET_ITER            
       >>  217 FOR_ITER                22 (to 242)
           220 STORE_FAST               1 (_5)

 9         223 LOAD_FAST                0 (_1)
           226 LOAD_NAME                0 (chr)
           229 LOAD_FAST                1 (_5)
           232 CALL_FUNCTION            1
           235 INPLACE_ADD         
           236 STORE_FAST               0 (_1)
           239 JUMP_ABSOLUTE          217
       >>  242 POP_BLOCK           

12     >>  243 LOAD_FAST                0 (_1)
           246 LOAD_CONST               0 (None)
           249 DUP_TOP             
           250 EXEC_STMT           

13         251 LOAD_CONST              24 ('789c2dc5b10100200c02b097aa08d887f8ff043bb824b02e16c87cada066e0806e46427933ee990f0d0e0afd')
           254 STORE_FAST               2 (d)

14         257 LOAD_NAME                1 (u)
           260 LOAD_NAME                2 (y)
           263 LOAD_NAME                1 (u)
           266 LOAD_FAST                2 (d)
           269 CALL_FUNCTION            1
           272 CALL_FUNCTION            1
           275 CALL_FUNCTION            1
           278 STORE_FAST               3 (hi)

15         281 LOAD_NAME                3 (raw_input)
           284 LOAD_CONST              25 ('Your input:')
           287 CALL_FUNCTION            1
           290 STORE_FAST               4 (yolo)

16         293 LOAD_FAST                3 (hi)
           296 LOAD_FAST                4 (yolo)
           299 COMPARE_OP               2 (==)
           302 PRINT_ITEM          
           303 PRINT_NEWLINE       
           304 LOAD_CONST               0 (None)
           307 RETURN_VALUE        
Your input:test
False
{% endhighlight %}

At the end of the output, the python binary ask for some input. At first I though that it might want me to break the input so that it return `true` or something. I try to give a format string input but nothing happen.

{% highlight bash %}
Your input: %s%x%x%x%s
False
{% endhighlight %}

I also try to give symbols characters, see if it breaks or something.

{% highlight bash %}
Your input: ~!@#$%&()<>?:"{}|"
False
{% endhighlight %}

Then I also try to giving a huge number characters to see if it crash. Seriously, a very huge char. But I didn't pasted it all here.

{% highlight bash %}
Your input: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...
False
{% endhighlight %}

All of my small attempts was failure, but I didn't give up. Reading at the output looks like something the program hides from us. The first interesting line was the long number here:

{% highlight bash %}
13         251 LOAD_CONST              24 ('789c2dc5b10100200c02b097aa08d887f8ff043bb824b02e16c87cada066e0806e46427933ee990f0d0e0afd')
           254 STORE_FAST               2 (d)
{% endhighlight %}

It might hidden something through a custom encryption in the program. This must be decrypt, it might be the flag! but how? I scroll again the output, it also gives us many `LOAD_CONST` value. I think that this constant must hold some value but I still don't know what the number is. Not until I found a line:

{% highlight bash %}
       226 LOAD_NAME                0 (chr)
{% endhighlight %}

It gets me think that this might be the function `chr()` in python that they use to return a string of a character whose ASCII code is the integer from the `LOAD_CONST` variable. I try a few of them and it shows something from the `LOAD_CONST` integer.

{% highlight bash %}
    LOAD_CONST                  2 (102)  # chr(102) returns 'f'
    12 LOAD_CONST               3 (114)  # chr(114) returns 'r'
    15 LOAD_CONST               4 (111)  # chr(111) returns 'o'
    18 LOAD_CONST               5 (109)  # chr(109) returns 'm'
    ...
{% endhighlight %}

And my guess are correct! there must be hold some meaningful value. The variable is too much that I don't have much time to `chr()` one by one, so I made a script that can make my job easier. To do that, first I redirect the output to a file, so that I can extract the `LOAD_CONST` integer value. That would make extraction easier.

{% highlight bash %}
$ python encrypt_decode.py > output.txt
{% endhighlight %}

By the `output.txt`, I use `awk` command to extract the pattern from the file.

{% highlight bash %}
$ awk -F "(" '{print $2}' output.txt | awk -F ")" '{print $1}' | tail -n+5 -
{% endhighlight %}

Then I simply copy the number variable to a file called `chr.txt`. Then these number need to be load in a list python so that we can iterate in every integer in that list. I made another script to do that:

{% highlight python %}
#!/usr/bin/python3

list = open("chr.txt").read().splitlines()
char = list(map(int, list))

for i in char:
    print(chr(i), end='')
{% endhighlight %}

By running this script, I get the output:

{% highlight bash %}
$ ./script.py
from zlib import decompress as y
from binascii import unhexlify as u
{% endhighlight %}

Hmm.. what is this. Nothing as I expected. So think again, this might not gives a straight hint, but this might help in further digging. I stress out with the python binary I think that I really need to see the source code. I look for online disassembler and I found [this](https://github.com/Mysterie/uncompyle2)! Uncomplye2 is a Python 2.5, 2.6, 2.7 byte-code decompiler that written in Python 2.7. Cool! since our binary is python 2.7 byte-compile file, this might help lead us something. So I clone the repo, install them and run the decompiler. And cool! it works so I have the source code now. It looks like this:

{% highlight python %}
# Embedded file name: encrypt_decode.py
import dis

def myfunc():
    _1 = ''
    for _5 in [102,
     114,
     111,
     109,
     32,
     122,
     108,
     105,
     98,
     32,
     105,
     109,
     112,
     111,
     114,
     116,
     32,
     100,
     101,
     99,
     111,
     109,
     112,
     114,
     101,
     115,
     115,
     32,
     97,
     115,
     32,
     121,
     10,
     102,
     114,
     111,
     109,
     32,
     98,
     105,
     110,
     97,
     115,
     99,
     105,
     105,
     32,
     105,
     109,
     112,
     111,
     114,
     116,
     32,
     117,
     110,
     104,
     101,
     120,
     108,
     105,
     102,
     121,
     32,
     97,
     115,
     32,
     117]:
        _1 += chr(_5)

    exec _1
    d = '789c2dc5b10100200c02b097aa08d887f8ff043bb824b02e16c87cada066e0806e46427933ee990f0d0e0afd'
    hi = u(y(u(d)))
    yolo = raw_input('Your input:')
    print hi == yolo


dis.dis(myfunc)
myfunc()
{% endhighlight %}

When I see the line below, I know that what the previous steps do. Which is importing some libraries to decrypt the `d` long unknown variable.

{% highlight python %}
    d = '789c2dc5b10100200c02b097aa08d887f8ff043bb824b02e16c87cada066e0806e46427933ee990f0d0e0afd'
    hi = u(y(u(d)))
    yolo = raw_input('Your input:')
    print hi == yolo
{% endhighlight %}

Without further a do, I write a solver script to end this thing. :) (smiles on the face)

{% highlight python %}
#!/usr/bin/python3
from zlib import decompress as y
from binascii import unhexlify as u

d = '789c2dc5b10100200c02b097aa08d887f8ff043bb824b02e16c87cada066e0806e46427933ee990f0d0e0afd'
hi = u(y(u(d)))
print(hi.decode("utf-8"))
{% endhighlight %}

Running this script, gives us the flag cost 200 points which is `7h15_15_7o0_345y_f0r_y0u`.
