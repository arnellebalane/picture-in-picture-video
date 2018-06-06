# Picture-in-Picture: Video

[Picture-in-Picture (PiP)][1] demo on a video element. PiP currently works only on video elements for now.

Picture-in-Picture is currently behind a browser flag in Chrome 69, so you will have to enable some these flags
in order for the demo to work. Go to [chrome://flags](chrome://flags)and enable the following flags:

- Experimental Web Platform features [#enable-experimental-web-platform-features][2]
- Enable Picture-in-Picture [#enable-picture-in-picture][3]
- Enable the use of SurfaceLayer objects for videos [#enable-surfaces-for-videos][4]

[See live demo][5]

## Running this project

```bash
$ git clone https://github.com/arnellebalane/picture-in-picture-video
$ cd picture-in-picture-video

# Serve files over HTTP, e.g.
$ python -m SimpleHTTPServer
```


[1]: https://developers.google.com/web/updates/2017/09/picture-in-picture
[2]: chrome://flags/#enable-experimental-web-platform-features
[3]: chrome://flags/#enable-picture-in-picture
[4]: chrome://flags/#enable-surfaces-for-videos
[5]: https://picture-in-picture-video.arnelle.me/
