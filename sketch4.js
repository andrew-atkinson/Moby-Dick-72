//
//
//Moby Dick's chapter 72, the monkey rope, set in Iceland, with a series of 'Babel' towers.
//
//

var charX, charY, charYreset, charXReset;
var textFill;

var font;
var img, img2, img3, img4, img5, img6, img7;
var fog, fog2, fog3;

var charNarrow, charWide; // modifiers for character widths
var charSize; 
var fogMove; // randomised variable for adding a little fog movement 
var imgRand; // randomiser variable for moving the landscape image around. (used for both X and Y coordinates so that image retains proportions).

var textArray1, textArray2, textArray3, textArray4, textArray5, textArray6, textArray7, textArray8, textArray9, textArray10; // text sources

var masterArray;
var aspect;

var fogArray;
var imgArray;

var randFog;

function preload() {
    font = loadFont("Eczar/Eczar-Medium.ttf");
    textFont(font);

    //landscapes!
    img = loadImage("ice-plane-2.jpg");
    img3 = loadImage("iceland2011-68-krafla.jpg");
    img4 = loadImage("iceland2011-3-krafla.jpg");
    img5 = loadImage("iceland2011-68-krafla.jpg");
    img2 = loadImage("thing2.jpg");

    // Title image
    imgTitle = loadImage("TITLE.png");

    // images array
    imgArray = [img, img2, img3, img4, img5];

    // fogs!
    fog = loadImage("fog.png");
    fog2 = loadImage("fog2.png");
    fog3 = loadImage("fog3.png");

    // fog array
    fogArray = [fog, fog2, fog3];
}

function setup() {

    //
    // textArrays
    //

    textArray1 = ["", "So strongly and ", "metaphysically did I ", "conceive of my situation ", "then, that while earnestly ", "watching his motions, I seemed ", "distinctly to perceive that my own ", "individuality was now merged in a joint ", "stock company of two; that my free will had ", "received a mortal wound; and that another’s mistake ", "or misfortune might plunge innocent me into unmerited ", "disaster and death.  Therefore, I saw that here was a sort of ", "interregnum in Providence; for its even-handed equity never could ", "have so gross an injustice.  And yet still further pondering—while ", "I jerked him now and then from between the whale and ship, which would ", "threaten to jam him—still further pondering, I say, I saw that this situation ", "of mine was the precise situation of every mortal that breathes; only, in most ", "cases, he, one way or other, has this Siamese connexion with a plurality of other ", "mortals.  If your banker breaks, you snap; if your apothecary by mistake sends you ", "poison in your pills, you die.  True, you may say that, by exceeding caution, you may ", "possibly escape these and the multitudinous other evil chances of life.  But handle Queequeg’s ", "monkey-rope heedfully as I would, sometimes he jerked it so, that I came very near sliding overboard.", "Nor could I possibly forget that, do what I would, I only had the management of one end of it. "]

    textArray2 = ["", "In the", " tumultuous ", "business of ", "cutting-in and ", "attending to a ", "whale, there is ", "much running backwards ", "and forwards among the crew. ", "Now hands are wanted here, and ", "then again hands are wanted there.  ", "There is no staying in any one place;", " for at one and the same time everything ", "has to be done everywhere.  It is much the", " same with him who endeavors the description ", "of the scene.  We must now retrace our way a", " little.  It was mentioned that upon first breaking", " ground in the whale’s back, the blubber-hook was", " inserted into the original hole there cut by the spades", " of the mates.  But how did so clumsy and weighty a mass", " as that same hook get fixed in that hole?  It was inserted there", " by my particular friend Queequeg, whose duty it was, as harpooneer,", " to descend upon the monster’s back for the special purpose referred to.", "  But in very many cases, circumstances require that the harpooneer shall", " remain on the whale till the whole flensing or stripping operation is concluded.", "  The whale, be it observed, lies almost entirely submerged, excepting the immediate", " parts operated upon.  So down there, some ten feet below the level of the deck, the poor", " harpooneer flounders about, half on the whale and half in the water, as the vast mass revolves", " like a tread-mill beneath him.  On the occasion in question, Queequeg figured in the Highland", "costume— a shirt and socks—in which to my eyes, at least, he appeared to uncommon advantage; and no one had a better chance to observe him, as will presently be seen."]

    textArray3 = ["", "Being the savage’s", "bowsman, that is, the", "person who pulled the", "bow-oar in his boat (the", "second one from forward),", "it was my cheerful duty to attend", "upon him while taking that hard-scrabble", "scramble upon the dead whale’s back.  You", "have seen Italian organ-boys holding a dancing-ape", "by a long cord.  Just so, from the ship’s steep side, did", "I hold Queequeg down there in the sea, by what is technically", "called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist."]

    textArray4 = ["", "It was a humorously", "perilous business for", "both of us.  For, before", "we proceed further, it must", "be said that the monkey-rope was", "fast at both ends; fast to Queequeg’s", "broad canvas belt, and fast to my narrow leather", "one. So that for better or for worse, we two,", "for the time, were wedded; and should poor Queequeg", "sink to rise no more, then both usage and honor demanded,", "that instead of cutting the cord, it should drag me down in", "his wake.  So, then, an elongated Siamese ligature united us.", "Queequeg was my own inseparable twin brother; nor could I any way", "get rid of the dangerous liabilities which the hempen bond entailed."]

    textArray5 = ["", "I have hinted", "that I would often", "jerk poor Queequeg", "from between the whale", "and the ship—where he would", "occasionally fall, from the incessant", "rolling and swaying of both.  But this", "was not the only jamming jeopardy he", "was exposed to.  Unappalled by the massacre", "made upon them during the night, the sharks now", "freshly and more keenly allured by the before pent", "blood which began to flow from the carcass—the rabid creatures swarmed round it like bees in a beehive."]

    textArray6 = ["", "And right", "in among", "those sharks", "was Queequeg;", "who often pushed", "them aside with his", "floundering feet.  A thing", "altogether incredible were", "it not that attracted by such", "prey as a dead whale, the otherwise", "miscellaneously carnivorous shark will seldom touch a man."]

    textArray7 = ["", "Nevertheless,", "it may well be", "believed that since", "they have such a ravenous ", "finger in the pie, it is deemed", "but wise to look sharp to them.", "Accordingly, besides the monkey-rope,", "with which I now and then jerked the poor", "fellow from too close a vicinity to the maw", "of what seemed a peculiarly ferocious shark—", "he was provided with still another protection.  Suspended", "over the side in one of the stages, Tashtego and Daggoo continually", "flourished over his head a couple of keen whale-spades, wherewith they", "slaughtered as many sharks as they could reach.  This procedure of theirs,", "to be sure, was very disinterested and benevolent of them.  They meant Queequeg’s", "best happiness, I admit; but in their hasty zeal to befriend him, and from the circumstance", "that both he and the sharks were at times half hidden by the blood-muddled water, those indiscreet", "spades of theirs would come nearer amputating a leg than a tail.  But poor Queequeg, I suppose, straining", " and gasping there with that great iron hook—poor Queequeg, I suppose, only prayed to his Yojo, and gave up his life into the hands of his gods."]

    textArray8 = ["", "Well, well,", "my dear comrade", " and twin-brother, thought", " I, as I drew in and then slacked", " off the rope to every swell of the", " sea— what matters it, after all?  Are", " you not the precious image of each and", " all of us men in this whaling world?  That", " unsounded ocean you gasp in, is Life; those", " sharks, your foes; those spades, your friends; and", " what between sharks and spades you are in a sad pickle and peril, poor lad."]


    textArray9 = ["", "But courage!", "there is good", "cheer in store ", "for you, Queequeg. ", "For now, as with blue", "lips and blood-shot eyes ", "the exhausted savage at", "last climbs up the chains", "and stands all dripping and", "involuntarily trembling over the", "side; the steward advances, and", " with a benevolent, consolatory glance", " hands him—what?  Some hot Cognac? ", " No! hands him, ye gods! hands him a cup of tepid ginger and water!"]

    textArray10 = ["", "*The monkey-rope", "is found in all whalers;", " but it was only in the Pequod", " that the monkey and his holder were ever tied together. This ", "improvement upon the original usage was introduced by no less a man", " than Stubb, in order to afford to the imperilled harpooneer  the  strongest ", " possible  guarantee  for  the  faithfulness  and  vigilance  of  his monkey-rope holder."]

    // array of arrays
    masterArray = [textArray1, textArray2, textArray3, textArray4, textArray5, textArray6, textArray7, textArray8, textArray9, textArray10];

    //inital screen draw
    aspect = img.width / img.height;
    createCanvas(windowHeight * aspect, windowHeight);
    image(img, 0, 0, windowHeight * aspect, windowHeight);
    image(imgTitle, 0, windowHeight / 4, windowHeight * aspect, windowHeight);
}


function draw() {
    charYreset = 320;
    charXreset = windowWidth / 2;
    charX = charXreset;
    charY = charYreset;
    textFillReset = 70;
    textFill = textFillReset;
    charSizeReset = 9; // default character size value
    charSize = charSizeReset;
    // modifiers for character widths and text filling incrementer
    charNarrow = 0.5;
    charWide = 0.7;
}

//
// functions
//

function windowResized() {
    // on resizing, redraw scene. 
    resizeCanvas(windowHeight * aspect, windowHeight);
    drawScene();
}

function mousePressed() {
    // new random scene
    drawScene();
}

function drawFog(tempFog) {
    //fog layer    
    fogMoveX = random(-15, 05);
    fogMoveY = random(-5, 15);
    image(tempFog, 0, 0, windowHeight * aspect, windowHeight);
    image(tempFog, 0, 0 + fogMoveY, windowHeight * aspect + fogMoveX, windowHeight + fogMoveY);
}

function drawTower(tempX, tempY, randomText) {

    var n = Math.floor(Math.random() * 3);
    drawFog(fogArray[n]);

    // character size is based on height, smallery character size with uppiness ( i.e. -y). it also factors in the size of the window such as the type retains proportion to the image. 
    charSize = (tempY / 26) * (windowHeight / 100);

    // loop to determine the vertical (y) location of the start of the tower depending upon the number of lines of text that makes it up. 
    var towerHeightY = 0;

    for (var y = 0; y <= randomText.length; y++) {
        towerHeightY += charSize + y / 5; // y/5 adds the increasing size of the text to the towerHeightY variable
    }
    charY = windowHeight / 2 - towerHeightY + tempY * 7;

    // solve this later - no need to move data from one variable to another like this. 
    var textArray = randomText;
    var charX = (tempX / 100) * windowHeight * aspect;

    // text start - first loop - for each line
    for (var j = 0; j < textArray.length; j++) {

        // reset color to darkest for new line but a little lighter for each line down (j*6)
        textFill = textFillReset + (j * 6) - (charY / 10);
        fill(textFill);
        // increment greys for each character across each line
        textFillIncrement = (80 / textArray[j].length);

        textSize(charSize);

        //negative x offset for each line
        charX -= (textArray[j].length * (charSize / 1.8) / 2);

        // loop to write a line. 
        for (var i = 0; i < textArray[j].length; i++) {

            // write character
            text(textArray[j].charAt(i), charX, charY);

            // create adaptive spacing for character widths - narrow, regular, or wide. apologies to the typographically sensitive, this is a crude tool.
            if (textArray[j].charAt(i) == 'f' || textArray[j].charAt(i) == 'i' || textArray[j].charAt(i) == 'j' || textArray[j].charAt(i) == 'l' || textArray[j].charAt(i) == 't') {
                charX += (charSize * charNarrow);
            } else if (textArray[j].charAt(i) == 'm' || textArray[j].charAt(i) == 'w' || textArray[j].charAt(i) == '–' ) {
                charX += (charSize * 0.7);
            } else {
                charX += charSize / 1.8;
            };

            // update character color
            fill(textFill += textFillIncrement);
        }

        // increment text size
        charSize += 0.2;

        // reset tone and x position      
        charY += charSize;
        textFill = textFillReset;
        charX = tempX / 100 * width;
    };
    var o = Math.floor(Math.random() * 3);
    drawFog(fogArray[o]);
}

function drawScene() {
    // this creates a random background image
    var m = Math.floor(Math.random() * 9);
    image(imgArray[m], 0, 0, windowHeight * aspect, windowHeight);

    // creates a random number of towers
    for (var j = 0; j <= random(0, 3); j++) {
        var k = Math.floor(Math.random() * 9);
        drawTower((9 * k) + 10, (6 * k) + 8, masterArray[k]);
    }
}
