# Flask Web App Tutorial

## Setup & Installtion

Make sure you have the latest version of Python installed.

```bash
git clone <repo-url>
```

```bash
pip install -r requirements.txt
```

## Running The App

```bash
python main.py
```

## Viewing The App

Go to `http://127.0.0.1:5000`

## about jinja in templates directory
all files here are using the base.html template and we are adding content by defining a block called content inside base template
for accesing a variable we need  to use this syntax -> {{var}}
for adding content we will use -> {% %}