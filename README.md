## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Notes

I definitely spent more time on this than I should have.  I'd say it was at least a full day, though since my react experience is in react native I did have to spend a little extra time figuring out routing and remembering how CSS works and a few other minor things.  I clearly need to look into css-in-js because coming back to css after react native was frustrating, what with not being able to use variables. 

This is far from perfect, there are several things, especially requests, that I would want to move into a service to abstract some of the repetitive logic.  I’d also like to tie the loader in with the request service so it didn’t have to be handled on every page but could just live at the App level for page loads.  I've really just spent more time on this than I meant and I have to cut it off.  

In hindsight I guess I put time into things that weren't strictly on the extra credit list and perhaps I should have worked on  all of those first.  I do have some in here like mobile breakpoints and I suppose latest react APIs, I think.  I actually struggled to figure out what error states there are.  I'm url encoding the searches the same way npmjs does, so the only real error state is no matches which is handled.  

And now it is time to

```
          ........:oo:........
                       o//ssssssssyhhysssss+////o                   .''''''''''''.
                 mddmmm/::ddddddddddddddmmmyss::/mmN               |   PARTY!
                 o..+oodddmmmhhhhhhhhhhhdmmmmmdddooy               | ,...........'
              h::oyyhddmmm+++///////////++++++mmmddy::s            |/
           Nyyo[[sddhyyyyy::::::::::::::::::::yyymmh//oyym
           h..:oohmm+:://///::::////////////////+mmmmms..sNN
           m++sddmmm+::hddhhy::+ddddddddddddddhhhmmmmmdhh+++d
        Nsssyyhmmhssooodmmhhh::+mmdyyyyyyyyddddddmmmmmmmmo::d
      mmd../mmmmmo::shhdmmhhh::+mmhooooooooyhhmmmmmmmmmmmyssdmm
      +++++smmdddo::///dmmhhh::+mmhooooooooooommmmmddddmmmdd/++m
      ``+hhhmmhoo/:::::oooooossymmhooooooooyyymmdoooooydddmmo//N
      ++:mmmmmy:::::::::::::/yyhmmhooooooooyhhmmd:::::+yyhmmyssddd
      ooommmmmy:::::::::::::://ommhooooooooooommd:::::://shhdmm+..
      yyhmmh++/::::::::::::::::+mmhooooooooyyymmd::::::::/++hmm+//
      dddmmh++/::::::::::::::::+mmhooooooooyhhddh:::::::::::hmmysshhd
      mmmmmdhhs::::::::::::::::+mmhoooooooohhhhhy:::::::::::hmmhhh``+
      mmmmmh++/::::::::::::::::+mmdhhsooooodmm++/:::::::::::hmmsss``+
      dddmmhoo+::::::::::::::::+dddddyssyyydmm::::::::::::::hmmsoo++o
      dddmmdhho::::::::::::::::+hhdmmddddmmmmm::::::::::::::hmmsooNNN
      mmmmmh///::::::::::::::::+hhdmmmmmmmmddd::::::::::::::hmmsoo++/
      yyhmmdss+::::::::::::::::/ooydddmmmmmsoo::::::::::::::yddhyy::+
      ++ommmmmy:::::::::::::::::::ohhdmmddd/::::::::::::::::shhdmmsssNNNmmN
      ..+mmmmmy:::::::::::::::::::://shh+//:::::::::::::::::://dmmmmdoo+..o
      ``+dddmmhss+:::::::::::::::::::+++/::::::::::::::::::::::ooodddhhysshNNy++m
      ``+hhdmmdhhs///:::::::::::::::::::::::::::::::::::::::::::::yyymmmmmmmmo++hNNmdd
      ``+hhdmmdhhhhh+:::::::::::::::::::::::::::::::::::::::::::::::/hhhhhdmmmmmsoo...
      ``+ddmmmdhhhhhyyyyyyyyyyyo:::::::::::::::::::::::::::::::::::::+++++sdddmmdhhsss//+
      ``+mmmmmhsshhhhhhhhhhhhhhy++/:::::::::::::::::::::::::::::::::::::::+ssyyydmmddd///hhd
      ``+mmmmmy::shhhhhhhhhhhhhhhhs:::::::::::::::::::::::::::::::::::::::::::::ymmmmmmmh../
      ``+mmmmmy:://////////////ohhhyy+::::::::::::::::::::::::::::::::::::::::::///hddmmmhhs++s
      ``+mmmmmhssssssssssssssssydddddysssssssssssssssssssssssssssssssssssssssssssssdddmmmmmy::s
      ``+mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhooh
```




