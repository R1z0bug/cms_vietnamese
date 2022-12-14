---
id: django-react-interop
title: Connecting React components with Django
sidebar_label: Django & React
---

`richie` is a hybrid app, that relies on both HTML pages generated by the backend (Django/DjangoCMS) based on templates, and React components rendered on the frontend for parts of these HTML pages.

## Convention

Therefore, we need a convention that enables us to easily mark those areas of the page that React needs to take control of, and to tell React which component to load there.

We decided to use a specific CSS class name along with its modifiers. We reserve the `fun-react` class and its modified children for this purpose.

## Example

Here is how we would call a "FeaturedCourses" component from a template, a plugin or a snippet:

    <div class="fun-react fun-react--featured-courses"></div>

When our JS is loaded, it will recognize this as an element it must take over, and render the FeaturedCourses component in this element.
