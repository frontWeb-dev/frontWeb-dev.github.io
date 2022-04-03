---
layout: archive
comments: false
permalink: /web/
title: 'Web'

sidebar:
  nav: 'web'
---

{% for post in site.posts %}
{% if post.tags contains "web" %}

<div class="list__item">
  <h2 class="archive__item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="page__meta">
    {{ post.date | date: "%Y-%m-%d" }} <a href="{{ post.url | relative_url }}#disqus_thread">Comments</a>
  </p>
  {% if post.excerpt %}
    <p class="archive__item-excerpt">
      {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
    </p>
  {% endif %}
</div>
{% endif %}
{% endfor %}
