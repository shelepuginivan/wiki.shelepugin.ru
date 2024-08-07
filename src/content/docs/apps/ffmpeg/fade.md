---
title: Проявление и затухание
description: Как применить эффект проявления или затухания (fade) с помощью ffmpeg
---

Как добавить эффект проявления или затухания с помощью `ffmpeg`.

:::note

Для всех команд ниже:

-   **Начало** &mdash; время начала затухания (в секундах от начала)
-   **Продолжительность** &mdash; продолжительность эффекта (в секундах)

:::

## Аудио

```shell title=Затухание
ffmpeg -i in.mp3 -af afade=t=out:st=<начало>:d=<продолжительность> out.mp3
```

```shell title=Проявление
ffmpeg -i in.mp3 -af afade=t=in:st=0:d=<продолжительность> out.mp3
```

## Видео

```shell title=Затухание
ffmpeg -i in.mp4 -vf fade=t=out:st=<начало>:d=<продолжительность> out.mp4
```

```shell title=Проявление
ffmpeg -i in.mp4 -vf fade=t=in:st=0:d=<продолжительность> out.mp4
```

## Комбинирование фильтров

Если нужно применить и проявление, и затухание, опции разделяются запятыми:

```shell
ffmpeg -i video.mp4 -vf "fade=t=in:st=0:d=10,fade=t=out:st=10:d=5" -c:a copy out.mp4
```

## См. также

-   [How do I fade in and out in FFmpeg?](https://video.stackexchange.com/questions/28269/how-do-i-fade-in-and-out-in-ffmpeg)
