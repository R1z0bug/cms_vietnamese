# Generated by Django 2.2.12 on 2020-04-17 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("nesteditem", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="nesteditem",
            name="content",
            field=models.TextField(blank=True, default="", verbose_name="Content"),
        ),
    ]
