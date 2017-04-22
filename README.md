# api_hint
GTA Network API dummy (v1.0)

## What is this?
This is a dummy object for the client side GTA:N library.
Ok. What is it good for?
You can hint your IDE/Texteditor autocompletion about the structure of the API.
I'm using ternjs.

## Screenshots

![image](http://www.gta-op.com/api_dummy/api1.jpg)
![image](http://www.gta-op.com/api_dummy/api2.jpg)

## How to use this?
- If you're using atom, go install [tern js](https://github.com/tststs/atom-ternjs) (on linux: apm install atom-ternjs)
- Copy API.js in your client resource directory
- add "API.js" to loadEagerly in your .tern-project
- have fun!

## Where does all the text come from
The function descriptions are extracted from the [GTA Network Wiki](https://wiki.gtanet.work).
Help to improve it, then the api dummy will become better too ;)
