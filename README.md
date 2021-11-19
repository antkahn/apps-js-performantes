# App js performantes

## Start

Install and lauch the app:

```bash
yarn
yarn start
```

You will see that your application has 3 pages:

- a Home where you can open a popin (from material-ui), displaying a datepicker (from react-dates)
- a Graph page displaying some nice data (from highcharts)
- a Code page displaying some very interesting code (from react-syntax-highlighter)

## Initial state

Build your application:

```bash
yarn build
```

Lauch the python server that will serve your files with gzip on:

```bash
cd build
python ../GzipSimpleHTTPServer.py
```

Go to http://localhost:8000/, refresh your page with the Network tab opened: you can see that our website loads in 1.20s, and the time to see the first colored pixel (DOMContentLoaded in blue) is of 500ms.

When you launched your `yarn build`, you could see that the size of your chunks was displayed. Our biggest one has a size of 500Kb gzipped. That is waaaay too much. But why is that ?

I installed for you webpack bundle analyzer to see what contains this chunk.

Launch it:

```
yarn analyze
```

Now you can see whats in our bundle. We have several big big libraries: highlightjs is over 188Kb, highcharts 100Kb, moment 65Kb.
