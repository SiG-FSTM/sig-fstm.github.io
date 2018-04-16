---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<h1 style="text-align:center">All posts</h1>
{% for post in site.posts %}
<h3>
	{{ post.title }}
</h3>
<i><small>Published by {{ post.author }} on {{ post.date | date_to_string }}</small></i>
<p>{{ post.excerpt }}</p>
<a href="{{ post.url }}">Read More</a>
<hr>
{% endfor %}