# Notifi.Click and Hackathon Nightmares

This last weekend I was lucky enough to travel to Barcelona for [HackUPC](https://hackupc.com).

Myself and [Bede](https://bede.io) bought tickets the day before we flew out, we had it in our heads that an Amazon Dash hack would be simple and fun! Well, Prime Now, a short flight and several metro stops later we're at UPC.

The event kicks off, we end up doing some domain roulette; as per, and find ourselves buying [rightswiperecipe.club](http://rightswiperecipe.club). The premise was to swipe through ingredients, until you matched with a recipe. Simple right? Well, replicating the Tinder UI was beyond my limited frontend skillset so ~5 hours in we bailed and started work on a new hack...

The idea? What if we could make a no-cost notification system that could be used by anyone, for anything, anywhere in the world? [notify.click](https://notify.click) was our solution. It turns out you can (fairly simply) intercept the requests these Dash buttons send.

> Bonus tip: don't fully finish the Dash setup to avoid having enough Kleenex boxes to build a 1:1 scale cardboard Eiffel tower.

Thus begins what I'll call 'The Dark Times'. We quickly realise that you need to be on the same subnet as the buttons in order to intercept their requests, well, we're connected to eduroam. Of course, the university has a lot of access points and the odds of us connecting to the same one are pretty low. A few disgusting ideas later; the worst of which involving tethering a phone to a laptop and then connecting the buttons to the laptop, we stumble across a phone connected by ethernet. I dig through the cable monster that's developed in my bag and uncover a pocket router -- we're off!

The rest of the hack was relatively plain sailing. We ran into a few issues with intermittent requests and a lot more setting up our AWS nanoservices architecture (see [Bede's](https://bede.io) blog for more details). It's over, we managed to scrape the 'best use of AWS' prize and you can expect to see some tech specific writeups v. soon!

Check out our (questionable quality) source over at [aranscope/notifi](https://github.com/aranscope/notifi.click) and thanks again to the excellent team at HackUPC.

