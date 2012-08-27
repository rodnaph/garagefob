
Garage Fob
==========

Simple NodeJS web application, backed by some hardware for opening a garage door.  Crazy!

Purpose
-------

The purpose of this app is to allow web-based access via a mobile phone to gain entry to
a garage secured by a radio fob.  Fob's are often in short supply, and expensive to replace,
so this project aims to implement a simple web-based keypad, backed by some hardware
for activating the fob to open the garage door.

Installation
------------

To install, just clone the repo, then make a copy of the sample configuration file
(config.js-sample) and name it _config.js_, and set the PIN.

You'll then need to configure one of the backends, the only one should be the amazing
robot finger backend (currently being developed in secret by Irregular Labs).

```json
{
  "pin": 1234,
  "backend": "robotfinger",
  "backends" {
    ...
  }
}
```

Troubleshooting
---------------

If you have problems, then I'll be amazed, cause it doesn't even work yet.

