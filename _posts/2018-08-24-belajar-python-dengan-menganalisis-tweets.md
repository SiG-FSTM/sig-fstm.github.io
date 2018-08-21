---
layout: post
language : Bahasa Melayu
title: 'Belajar Python dengan menganalisis tweet Tun Dr Mahathir'
description: 
author: AreRex14
published: true
date:   2018-08-24
categories: programming
---

Twitter sering menjadi tempat perbualan hangat netizen terhadap isu-isu yang melanda negara. Hanya dengan satu tweet kontroversi, ia boleh membawa seribu satu makna kepada hala tuju sebuah kepimpinan dan reaksi rakyatnya. Dalam posting kali ini, saya nak berkongsi tentang bahasa pengaturcaraan yang popular dan mudah untuk belajar iaitu Python dan cara yang seronok nak belajar adalah dengan kita menganalisis tweet daripada Twitter.

# Tutorial ini untuk anda jika:
* Anda ada kefahaman asas tentang pengaturcaraan, tetapi tak tahu sangat Python
* Anda tahu Python, tapi tak tahu bagaimana nak menggunakan untuk membaca dan menganalisa data teks daripada web

Tutorial ini hanya untuk tahap mereka yang baru belajar, dan tidak kompleks. Program analisa tweet akan menjalankan analisa tweet secara manual disebabkan masalah akaun Pembangun App Twitter saya masih dalam proses verifikasi.

Artikel ini sangat terhad, jika dibandingkan melalui sesi meetup jika anda mahu. Jika anda mahu tahu lebih lanjut tentang modul Python untuk fungsi kompleks untuk program analisa tweet anda dan bagaimana nak membaca tweet secara langsung melalui akaun Pembangun App Twitter, boleh terus komen di ruangan komen.

# Mari mulakan

Kita akan mulakan dengan kod mudah dan akan menambahnya kemudian seiring dengan prosesnya. Pergi ke direktori yang anda mahu dan buat satu folder khas, simpan kod anda di situ. Anda akan jalankan fail kod tersebut dengan menggunakan cmd atau terminal untuk Linux.

Apabila menerangkan kod, saya memperkenalkan beberapa konsep baru. Periksa [dokumentasi rasmi](https://docs.python.org/3.6/) untuk mendapatkan pemahaman yang lebih mendalam tentang konsep-konsep ini.

Pastikan anda merujuk sumber-sumber lain, komen di bawah, jika anda _lost_. Dan ingat: dokumentasi rasmi Python, Google, dan [StackOverflow](http://stackoverflow.com/) adalah kawan terbaik anda.

# Prasyarat

Pastikan anda sudah ada [Python3.6](https://www.python.org/) atau versi baru. Periksa versi Python dengan `py --version` untuk Windows. Jika anda mendapat ralat atau versinya bawah 3.6, anda perlu muatturun dan pasang versi baru.

Anda juga perlu mempunyai kod editor yang menyokong Python, kod editor biasa pun boleh, asalkan anda menyimpan fail tersebut dengan .py tapi saya sarankan anda guna kod editor seperti [Atom](https://atom.io/) atau [SublimeText](https://www.sublimetext.com/). 

Posting ini tidak mempunyai nombor baris kod terbina, jadi anda perlu melihat nombor baris kod di dalam editor kod anda. 

# Pendekatan pertama
Kita akan pecahkan ayat tweet kepada perkataan-perkataan.

## first.py

```python
tweet_string = "Prime Minister Tun Dr Mahathir Mohamad received courtesy call by Secretary of State of the United States of America, H.E Mike Pompeo @SecPompeo at Perdana Putra this morning. A range of issues such as bilateral relations, regional & international matters were discussed"
tweet_words = tweet_string.split()
number_of_words = len(tweet_words)
print(tweet_words)
print("Number of words in this tweet is: " + str(number_of_words))

# iterate through the words in the tweet string
print("Words in the tweet are:")
for w in tweet_words:
    len_of_w = len(w)
    print("number of letters in " + w + " is " + str(len_of_w))
print("End of the words in the tweet")
```

Seperti yang anda dapat lihat, saya telah menyalin satu tweet Tun secara manual, memberikannya kepada pemboleh ubah, dan menggunakan kaedah [split()](https://docs.python.org/3/library/stdtypes.html#str.split) untuk memecahkannya ke dalam kata-kata. split() mengembalikan [**list**](https://docs.python.org/3/tutorial/introduction.html#lists), yang saya panggil tweet_words. Kita boleh mengira bilangan item dalam senarai menggunakan fungsi **len**. Dalam baris 4 dan 5, kita mencetak hasil langkah-langkah sebelumnya. Beri perhatian kepada fungsi **str** pada baris 5. Kenapa ada di situ?

Akhirnya, dalam baris 9, kita melengkapkan tweet_words: iaitu, kita pergi ke item tweet_words satu demi satu, menyimpannya dalam w, dan kemudian gunakan w dalam baris 10 dan 11. Jadi, baris 10 dan 11 dapat dijalankan banyak kali, masing-masing dengan nilai yang berbeza untuk w. Anda sepatutnya dapat meneka apa yang baris 10 dan 11 buat.

Simpan kod ini ke first.py. Jika anda berada di Mac atau Linux, pergi ke Terminal. Dalam folder di mana anda telah menyimpan fail itu, taip `python3.6 first.py`, dan tekan Enter. Di Windows, anda perlu menaip `py first.py` di Command Prompt.

# Pendekatan kedua
Mari baiki kod kita, supaya kita dapat mengetahui sama ada tweet itu "buruk" atau "baik".

Idea di sini adalah untuk membuat dua senarai perkataan yang baik dan kata-kata yang tidak baik, dan menambah atau menurunkan nilai tweet berdasarkan bilangan perkataan yang terkandung dalam senarai tersebut.

## second.py

```python
"""
To evaluate the good or bad score of a tweet, we count the number of good and
bad words in it.
if a word is good, increase the value of good_words by one
else if a word is bad, increase the value of bad_words by one
if good_words > bad_words then it's a good tweet otherwise it's a bad tweet

"""

tweet_string = "Prime Minister Tun Dr Mahathir Mohamad received courtesy call by Secretary of State of the United States of America, H.E Mike Pompeo @SecPompeo at Perdana Putra this morning. A range of issues such as bilateral relations, regional & international matters were discussed"
tweet_words = tweet_string.split()
number_of_words = len(tweet_words)

number_of_good_words = 0
number_of_bad_words = 0

good_words = ["Thanks", "historic", "paychecks"]
bad_words = ["taxes"]

for w in tweet_words:
    print(w)
    if w in good_words:
        number_of_good_words += 1 # same as writing number_of_good_words = number_good_words + 1
    elif w in bad_words:
        number_of_bad_words += 1

print("There are " + str(number_of_good_words) + " good words in this tweet")
print("There are " + str(number_of_bad_words) + " bad words in this tweet")

if number_of_good_words > number_of_bad_words:
    print("What a things to say! HUGE!")
elif number_of_bad_words > number_of_good_words:
    print("Surely you're joking man! SAD!")
else:
    print("Neutral! He is a human after all")
```

Jadi dalam baris 14 dan 15, kita memulakan dua nilai, masing-masing mewakili bilangan perkataan yang baik dan kata-kata buruk dalam tweet. Dalam baris 17 dan 18, kita mencipta senarai perkataan yang baik dan buruk. Ini, sudah tentu, senarai yang sangat subjektif, jadi jangan ragu untuk menukar senarai ini berdasarkan pendapat peribadi anda sendiri.

Dalam baris 20, kita melangkau setiap perkataan dalam tweet itu satu demi satu. Setelah mencetaknya pada baris 21, kita periksa sama ada perkataan itu wujud dalam good_words atau bad_words, dan menambah number_of_good_words atau number_of_bad_words, masing-masing. Seperti yang anda lihat, untuk memeriksa sama ada item ada dalam senarai, kita boleh menggunakan kata kunci **in**.

Juga, perhatikan sintaks jika: anda perlu menaip kolon (:) selepas condition(if...elif...else...). Juga, semua kod yang perlu dijalankan di dalam perlu diindentikasi.

Boleh anda teka apakah baris 30-35 lakukan?

# Pendekatan ketiga

Anggapan kita setakat ini ialah perkataan baik atau buruk. Tetapi di dunia nyata, kata-kata membawa pelbagai nilai takrifan: hebat lebih baik daripada baik-baik saja, dan buruk adalah lebih baik daripada dahsyat. Setakat ini, kod kita tidak mengambil kira perkara ini.

Jadi kita akan menggunakan struktur data Python yang dipanggil **dictionary**. **Dictionary** adalah senarai item, dengan setiap item mempunyai kunci dan nilai. Oleh itu, **dictionary** adalah _list of key-value pairs_ (kadangkala dipanggil _key-values store_).

Kita boleh menentukan **dictionary** dengan meletakkan senarai kunci:nilai dalam _curly braces_. Tengok baris 14 dalam kod di bawah.

## third.py

```python
"""
To evaluate the good or bad score of a tweet, we first split our tweet. 
We then associate each word with positive and negative values, respectively, using a dictionary.
Finally, we caculate the average word weight of a tweet, and decide if it's a good or bad one 
based on that.

"""

# Break down a string into words
def get_words(str):
    return str.split()

# Iterate through the words in the tweet string
word_weights = {"Thanks": 1.0, "historic": 0.5, "paychecks": 0.8, "taxes": -1.0}

#Calculate the average value of words in list_of_words
def get_average_word_weight(list_of_words):
    number_of_words = len(list_of_words)
    sum_of_word_weights = 0.0
    for w in list_of_words:
        if w in word_weights:
            sum_of_word_weights += word_weights[w]

    return sum_of_word_weights / number_of_words

tweet_string = "Prime Minister Tun Dr Mahathir Mohamad received courtesy call by Secretary of State of the United States of America, H.E Mike Pompeo @SecPompeo at Perdana Putra this morning. A range of issues such as bilateral relations, regional & international matters were discussed"
words = get_words(tweet_string)
avg_tweet_weight = get_average_word_weight(words)

print("The weight of the tweet is " + str(avg_tweet_weight))

if avg_tweet_weight > 0:
    print("What a things to say! HUGE!")
elif avg_tweet_weight < 0:
    print("Surely you're joking man! SAD!")
else:
    print("Neutral! He is a human after all")
```

Seperti yang anda dapat lihat, kita hanya menggunakan **dictionary** tunggal. Kita memberi kata-kata buruk kepada nilai negatif, dan kata-kata baik nilai positif. Pastikan nilai antara -1.0 dan +1.0. Kemudian, kita menggunakan **dictionary** word_weights dalam baris 21 untuk memeriksa sama ada perkataan wujud di dalamnya, dan dalam baris 22 untuk memikirkan nilai yang diberikan kepada perkataan itu. Ini sama dengan apa yang kita lakukan dalam kod sebelumnya.

Satu lagi penambahbaikan dalam kod ini ialah ia berstruktur lebih baik: kita cuba memisahkan bahagian logik yang berlainan ke dalam fungsi yang berbeza. Seperti yang anda lihat dalam baris 10 dan 17, fungsi ditakrifkan dengan kata kunci **def**, diikuti dengan nama fungsi, diikuti oleh sifar atau lebih banyak _arguments_ dalam kurungan. Selepas menentukan fungsi ini, kita menggunakannya dalam baris 27 dan 28.

Cuba jalankan kod tersebut. Anda sepatutnya dapat memutuskan sama ada tweet terkini Tun Dr Mahathir adalah sesuai dengan jawatannya atau tidak.

Kongsikan pendapat anda, dan tunjukkan post ini ❤ jika anda suka.