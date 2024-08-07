---
title: 'Затемнение'
description: 'Как затемнить изображение с помощью ImageMagick'
---

Чтобы затемнить изображение с помощью `ImageMagick`:

```shell
magick input.png -fill black -colorize <процент>% output.png
```

## Пример

```shell
magick forest.png -fill black -colorize 60% forest-dimmed.png
```

|                              |                                |
| :--------------------------: | :----------------------------: |
| ![До](./img/dim_before.webp) | ![После](./img/dim_after.webp) |
