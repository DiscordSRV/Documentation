# DiscordSRV Documentation

This is the documentation for DiscordSRV that uses [Mkdocs](https://github.com/mkdocs/mkdocs) to generate a static site hosted on https://docs.discordsrv.com.

## Building

[Create and activate a Python 3 virtual environment](https://docs.python.org/3/tutorial/venv.html)
```sh
$ pip install --user virtualenv
$ virtualenv env
$ source env/bin/activate
```

Install the required packages
```sh
$ pip install -r requirements.txt
```

#### Preview changes

To preview your changes to the documentation, run `mkdocs serve`. This will start a web server that will preview the documentation and recompile it as you make changes. More info is shown here: https://www.mkdocs.org/#getting-started
```sh
$ mkdocs serve
```
