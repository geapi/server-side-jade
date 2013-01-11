# Demo app to show server side rendering of jade templates

The app demonstrates how one can render jade templates server side.
This can be helpful if the app/page in question should be easily crawlable/indexable by 'bots
and client side only rendering would prevent that.
I've used it successfully when both the server and client side rendering are turned on, then Google sees
the server side rendered content and the client sees the client side rendered content and gets all the javascript interactivity.


To get started just clone the repo

`git clone git@github.com:geapi/server-side-jade.git`

`cd server-side-jade`

`yes`

`bundle`

`rails s`


Feedback and Comments are very welcome.