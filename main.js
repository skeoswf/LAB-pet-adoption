const pets = [
    {
      id: 1,
      name: "dusty!",
      color: "green",
      specialSkill: "gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "trouble!",
      color: "brown",
      specialSkill: "just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.natgeofe.com/n/9b87dda3-9946-4a1c-a97f-c21f73ced888/Meraxes-CREDIT-Carlos-Papolio_4x3.jpg"
    },
    {
      id: 3,
      name: "whiskers!",
      color: "yellow",
      specialSkill: "can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "coco!",
      color: "black",
      specialSkill: "burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "spooky!",
      color: "brown",
      specialSkill: "comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "tiger!",
      color: "black",
      specialSkill: "can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "oreo!",
      color: "yellow",
      specialSkill: "able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "ginger!",
      color: "grey",
      specialSkill: "comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      id: 9,
      name: "sassy!",
      color: "brown",
      specialSkill: "adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "sammy!",
      color: "blue",
      specialSkill: "listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "coco!",
      color: "orange",
      specialSkill: "can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "buster!",
      color: "green",
      specialSkill: "does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "chester!",
      color: "red",
      specialSkill: "expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "samantha!",
      color: "brown",
      specialSkill: "always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "coco!",
      color: "red",
      specialSkill: "burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "smokey!",
      color: "brown",
      specialSkill: "drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "muffin!",
      color: "yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "salem!",
      color: "brown",
      specialSkill: "proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "callie!",
      color: "blue",
      specialSkill: "listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "spooky!",
      color: "black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "miss kitty!",
      color: "red",
      specialSkill: "owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "snuggles!",
      color: "orange",
      specialSkill: "is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "buddy!",
      color: "red",
      specialSkill: "enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "george!",
      color: "brown",
      specialSkill: "participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "salem!",
      color: "red",
      specialSkill: "knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "bubba!",
      color: "yellow",
      specialSkill: "cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "chloe!",
      color: "green",
      specialSkill: "admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "nala!",
      color: "purple",
      specialSkill: "dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "oscar!",
      color: "green",
      specialSkill: "gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "lucy!",
      color: "red",
      specialSkill: "doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];

const petWrapper = document.querySelector("#petWrapper");

const catFilterButton = document.querySelector("#filterCat")
const dogFilterButton = document.querySelector("#filterDog")
const dinoFilterButton = document.querySelector("#filterDino")
const allFilterButton = document.querySelector("#noFilter")


let petWrapperContent = "";

const renderToDom = (array) => {

  let petWrapperContent = "";
  for (let i = 0; i < pets.length; i++) {

    petWrapperContent += 
    `<div class="petCard">
      <h1>${pets[i].name}</h1>
      <img src=${pets[i].imageUrl}>
      <h3>${pets[i].color}</h3>
      <p id="description">${pets[i].specialSkill}</p>
      <p id="type"">${pets[i].type}</p>
    </div>`;
  }
  
  petWrapper.innerHTML = petWrapperContent
}

renderToDom(pets)

const filterCat = () => {

  petWrapperContent = ""

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "cat") {
      petWrapperContent += 
    `<div class="petCard">
      <h1>${pets[i].name}</h1>
      <img src=${pets[i].imageUrl}>
      <h3>${pets[i].color}</h3>
      <p id="description">${pets[i].specialSkill}</p>
      <p id="type"">${pets[i].type}</p>
    </div>`;
    }
  }

  petWrapper.innerHTML = petWrapperContent;
}

const filterDog = () => {

  petWrapperContent = ""

  for (let i = 0; i < pets.length; i++) {

    if (pets[i].type === "dog") {
      petWrapperContent += 
    `<div class="petCard">
      <h1>${pets[i].name}</h1>
      <img src=${pets[i].imageUrl}>
      <h3>${pets[i].color}</h3>
      <p id="description">${pets[i].specialSkill}</p>
      <p id="type"">${pets[i].type}</p>
    </div>`;
    }
  }

  petWrapper.innerHTML = petWrapperContent;
}

const filterDino = () => {

  petWrapperContent = ""

  for (let i = 0; i < pets.length; i++) {
    
    if (pets[i].type === "dino") {
      petWrapperContent += 
    `<div class="petCard">
      <h1>${pets[i].name}</h1>
      <img src=${pets[i].imageUrl}>
      <h3>${pets[i].color}</h3>
      <p id="description">${pets[i].specialSkill}</p>
      <p id="type"">${pets[i].type}</p>
    </div>`;
    }
  }

  petWrapper.innerHTML = petWrapperContent;
}

const filterAll = () => {

  petWrapperContent = ""

  for (let i = 0; i < pets.length; i++) {
      petWrapperContent +=
    `<div class="petCard">
      <h1>${pets[i].name}</h1>
      <img src=${pets[i].imageUrl}>
      <h3>${pets[i].color}</h3>
      <p id="description">${pets[i].specialSkill}</p>
      <p id="type">${pets[i].type}</p>
    </div>`;
    
  }

  petWrapper.innerHTML = petWrapperContent;
}

catFilterButton.addEventListener("click", filterCat)
dogFilterButton.addEventListener("click", filterDog)
dinoFilterButton.addEventListener("click", filterDino)
allFilterButton.addEventListener("click", filterAll);

// tried making each loop into a function to satisfy DRY but it kept breaking. i will come will back to it.
