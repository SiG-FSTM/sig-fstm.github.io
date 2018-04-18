---
layout: default
---

<h1 style="text-align:center">All posts</h1>

{% for post in site.posts %}
<h3>
{{ post.title }}
</h3>
<small>Written by {{ post.author }} on {{ post.date | date_to_string }}</small>
<p>{{ post.excerpt }}</p>
<a href="{{ post.url }}">Read More</a>
<hr>
{% endfor %}