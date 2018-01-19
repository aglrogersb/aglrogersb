var roomArray = [
  { /*0*/
    title:"Welcome, " + localStorage.getItem("playername") + "!",
    text: "<br />Our tale begins in the Kingdom of Atherol, in the ancient plane of Oshma.<br /><br />" +
     "The intimidating city is under a strict dictatorship by the sinister king Opeth Demonblood.<br /><br />" +
     "The king routinely torments the people, subjecting them to needless executions in a variety of ways.<br /><br />" +
     "And now, the king has decided that it is your turn to meet the chopping block.<br /><br />" +
     "You must escape from your cell and defeat the evil ruler, " +
     "freeing the people once and for all!<br /><br /><br /><br />" +
     "Are you up for the challenge?",
     choices:[
       {
         text: "Yes",
         index: 2
       },
       {
         text: "No",
         index: 1
       },
     ],
  },
  { /*1*/
    title:"You Lose",
    text: "<br />You chose against the path of fame and glory, and instead decided to patiently wait for your immolation in your cell." +
     "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />" +
     "Play again?",
     choices:[
       {
         text: "Yes",
         index: 0
       },
       {
         text: "No",
         index: 99
      },
     ],
  },
  { /*2*/
    title:"Jail Cell",
    text: "<br />You are in your cell.<br /><br />" +
     "It is cold and dark. Outside of the bars you can see a dark room and several other cells.<br /><br />" +
     "In the middle of the room, there is a variety of torture equipment laid out on the table.<br /><br />" +
     "On the floor of your cell there is a wooden bucket and a dirty rag on the floor." +
     "<br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
       {
         text: "Investigate the bucket",
         index: 3
       },
       {
         text: "Investigate the rag",
         index: 4
       },
       {
         text: "Investigate the cell door",
         index: 5
       },
     ],
  },
  { /*3*/
    title:"Investigate the Bucket",
    text: "<br />The sides of the wooden bucket seem to be splintering.<br /><br />" +
     "You hear the screams of another prisoner as he is taken into the execution room.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
       {
         text: "Break off splinter",
         index: 6
       },
       {
         text: "Back to cell",
         index: 2
       },
     ],
  },
  { /*4*/
    title:"Investigate the Rag",
    text: "<br />The rag is nothing but a thin, worn cloth.<br /><br />" +
     "On lifting the rag up, you find that it is concealing nothing.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
       {
         text: "Back to cell",
         index: 2
       },
     ],
  },
  { /*5*/
    title:"Investigate the Cell Door",
    text: "<br />The door is nothing but a series of metal bars.<br /><br />" +
     "It is locked shut with a keyhole on the outside.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
       {
         text: "Back to cell",
         index: 2
       },
     ],
  },
  { /*6*/
    title:"Break Off Splinter",
    text: "<br />You reach your hand through the bars of your cell and dextrously use the broken off splinter to pick the lock.<br /><br />" +
     "With a bit of luck, it finally opens.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
       {
         text: "Go to dungeon",
         index: 7
       },
     ],
  },
  { /*7*/
    title:"Go To Dungeon",
    text: "<br />The dungeon is dark and miserable.<br /><br />" +
     "There are three other cells, all of which are now empty.<br /><br />" +
     "You find your equipment in a box outside your cell.<br /><br />" +
     "<br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Go through north door",
        index: 8
      },
      {
        text: "Go through east door",
        index: 9
      },
      {
        text: "Go through south door",
        index: 10
      },
     ],
  },
  { /*8*/
    title:"Go Through North Door",
    text: "<br />You are now in the execution room.<br /><br />" +
     "To save some time, the guards decide to execute you there and then.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Attack!",
        index: 11
      },
      {
        text: "Retreat!",
        index: 7
      },
     ],
  },
  { /*9*/
    title:"Go Through East Door",
    text: "<br />You are in a long hallway. It is dark and empty.<br /><br />" +
     "You hear some footsteps approaching. There are doors all around.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Go through north door",
        index: 12
      },
     ],
  },
  { /*10*/
    title:"Go Through South Door",
    text: "<br />You have found your way into the sewer.<br /><br />" +
     "Surrounding you are a plethora of tortured bodies; some without heads.<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Go through west door",
        index: 13
      },
     ],
  },
  { /*11*/
    title:"Attack!",

     choices:[
      {
        text: "Go through east door",
        index: 12
      },
      {
        text: "Go through south door",
        index: 7
      },
     ],
  },
  { /*12*/
    title:"Main Hall",
    text: "<br />You have found your way into the main hall!<br /><br />" +
     "The king is sitting at his throne, but he hasn't noticed you!<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Attack!",
        index: 14
      },
      {
        text: "Retreat!",
        index: 9
      },
     ],
  },
  { /*13*/
    title:"Escape",
    text: "<br />You have managed to escape through the sewers!<br /><br />" +
     "The king is sitting at very much alive, however. Get back in there!<br /><br />" +
     "<br /><br /><br /><br /><br /><br /><br /><br />" +
     "Play again?",
     choices:[
      {
        text: "Yes",
        index: 0
      },
      {
        text: "No",
        index: 99
      },
     ],
  },
  { /*14*/
    title:"Showdown",
    text: "<br />You run at the Demon King but he quickly notices you and grabs you in his hand.<br /><br />" +
     "You can sacrifice yourself and cast a forbidden spell, killing the dictator and yourself,<br /><br />" +
     "Or you can escape and run away alive.<br /><br />" +
     "<br /><br /><br /><br /><br /><br />" +
     "What do you want to do?",
     choices:[
      {
        text: "Sacrifice",
        index: 15
      },
      {
        text: "Escape",
        index: 16
      },
     ],
  },
  { /*15*/
    title:"Sacrifice",
    text: "<br />You cast a massive area of effect spell, vaporising everyone in the great hall, including yourself.<br /><br />" +
     "The peace has been restored, and now the people can live freely once again.<br /><br />" +
     "And that is the end of my awful story. I'm so sorry.<br /><br />" +
     "<br /><br /><br /><br /><br /><br />" +
     "Play again?",
     choices:[
      {
        text: "Yes",
        index: 0
      },
      {
        text: "No",
        index: 99
      },
     ],
  },
  { /*16*/
    title:"Escape",
    text: "<br />You manage to escape the grasp of the demon overlord and flee from the scene.<br /><br />" +
     "You saved yourself, but will forever be remembered as a coward.<br /><br />" +
     "And that is the end of my awful story. I'm so sorry.<br /><br />" +
     "<br /><br /><br /><br /><br /><br />" +
     "Play again?",
     choices:[
      {
        text: "Yes",
        index: 0
      },
      {
        text: "No",
        index: 99
      },
     ],
  },
]
