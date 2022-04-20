/*
        Le but est \d'entrer sa date d'anniversaire et
        d'obtenir son signe astrologique , son histoire et la signification du mois entré par
        l'utilisateur
    */
const button = document.getElementById("button");
const messageSignification = document.getElementById("messageSignification");
const resetBtn = document.getElementById("reset");
const modalBody = document.getElementById("modal-body");
const titreSigneAstro = document.getElementById("titreSigneAstro");
const messageBonAsavoir = document.getElementById("messageBonAsavoir");
const resultat = document.getElementsByClassName("resultat");

const listSigneAstro = [
  " Aries/Bélier ",
  " Taurus/Taureau ",
  " Gemini/Gémeaux ",
  " Cancer/Cancer ",
  " Lion/Lion ",
  " Virgo/Virge ",
  " Libra/Balance ",
  " Scorpio/Scorpion ",
  " Sagittarius/Sagittaire ",
  " Capricorn/Capricorne ",
  " Aquarius/Verseau ",
  " Pisces/Poisson ",
];
const history = {
  1: `1In the calendar invented by the Greeks in 300 BC, they considered March as the starting point of the year. Aries represents the ancient people of shepherds who take out the flocks at the return of spring.`,
  2: `2This down to earth sign appears in the heart of spring, when light floods nature and the earth is fertile, it would come from the breeders of large cattle in Asia Minor.`,
  3: `This air sign is symbolized by two characters of which one finds in old texts the description of a two-headed dragon. It is the end of spring, the beginning of summer between these two seasons Gemini hesitates, hence his dual nature.`,
  4: `It marks the beginning of summer, when the sun is at its zenith, the fruits are ripe and the animals are lounging. By analogy, the crab which symbolizes this sign, is bathed in diffuse sensations for which time does not count and which a certain indolence rocks.`,
  5: `Leo is the 2nd sign of summer, it coincides with the time of the year when fruits abound. Being perceived as the king of animals, one understands that he is a symbol of solar force. It is also a predominant figure in Egyptian mythology: Re or Ra the god of the sun. `,
  6: `She makes the connection between two seasons, it is the Goddess of fertility that we pray to at the end of summer, when the days are getting shorter and the hour of the last harvests strikes.`,
  7: `This sign of balance marks the autumnal equinox, when the length of the days is equivalent to that of the nights would correspond to the merchant “balance content” of the first great cities of Mesopotamia. This is why this horizontal axis of opposition is symbolized by a balance with its two trays.`,
  8: `The Scorpion, animal feared by the Babylonians for its deadly stings, comes with the nights, the cold, the silence that wins over nature, the vegetation that decomposes, the season of the dead`,
  9: `It marks the transition between the end of autumn and the beginning of winter. The time when nature calms down, the sky merges with the earth. In this image, he is symbolized by the centaur, half-horse, in his lower part, half-man, in his upper part, bending an arc towards the sky.`,
  10: `It marks the winter solstice, the longest night of the year. Nature is arid, the trees skeletal, the earth is hard, the animals hibernate, there is silence, everything seems suspended... Only the goat, which symbolizes the sign and the rocky isolations of ancient Greece, still climbs the steep slopes by the north face.`,
  11: `He carries the amphora of the rainy season which brings floods.`,
  12: `This last sign concludes the wheel of the zodiac. Everything ends and everything starts again. In nature, everything is still diffuse but life is coming back. This is the time of spawning in the rivers.`,
};
const monthSignification = {
  1: ` 1The meaning of the name of the month of January comes from the Latin word Januarius, which derives its origin from the name of the Roman deity Janus. The origin of the name of this god perhaps comes from Chronos, Greek god of Time. It is an ancient divinity with two faces, one against the other, to symbolize the fact that this god looked towards the past but also towards the future. Thus, the month of January constitutes the threshold between the beginning of a new year and the end of the previous year.`,
  2: ` 2The etymology of the name of this month comes from the Latin word februarius, from the ancient Roman calendar. At the time of the primitive calendar, this month was the last of the year and it marked the passage between the end and the beginning of the year. On this occasion, the Romans celebrated great purification festivities: the ritual of Februa (purification) or Lupercalia.`,
  3: ` March also comes from the Latin, maritus, which comes from the name of the god Mars, one of the main gods of Rome. Mars, this Roman god, was the master of war, to whom generals invoked before a battle by saying "Mars, wake up". He was also a deity invoked for fertility and the protection of crops and livestock. It should be remembered that the names of Roman gods have their origin in Greek mythology. Thus, the name of the Greek god equivalent to Mars was Ares, also god of War. However, if in Roman mythology Mars enjoys a rather positive reputation, associated with virile values and honor, Ares was also associated with destruction.`,
  4: ` This word comes from the Latin aprilis, perhaps derived from the verb aperire, "to open", referring to the awakening of nature during spring when the flowers open.`,
  5: ` The month of May comes from the Latin Maius, which would refer to Maïa, the name of the Roman goddess of fertility and spring, derived from the primitive Mother Goddess.`,
  6: ` June comes from the Latin junius. This word is believed to be derived from the Roman name of the goddess Juno, wife of Jupiter.`,
  7: ` From the Latin julius, the seventh month of the year received this name in homage to Julius Caesar, the skilful dictator and soldier, to whom we owe, among many other works, the reform of the Roman calendar.`,
  8: ` August is derived from the name of the Roman Emperor Augustus, nephew of Julius Caesar, contemporary with one of the most brilliant periods of Roman culture, in which the great poets Horace and Virgil excelled.`,
  9: ` September is marked by the autumnal equinox. As in some witch rituals, the day of the equinox is a very powerful day for practitioners of the occult sciences.`,
  10: ` The month of October is also marked by witchcraft rituals, especially on odd dates.`,
  11: ` In November comes the feast of All Saints, of pagan origin and found in the Celtic tradition of Samain.Samhain, or Samhain, is the Irish holiday with Celtic origins that celebrates the transition from the bright summer season to the dark winter season. In a society that lives to the rhythm of harvests.`,
  12: `  The month of December, the last month of the calendar is associated with the color blue. This month marks the end of a whole cycle, a full circle, and the hope for renewal.`,
};
const url = {
  1: "photo/aries.png",
  2: "photo/taurus.png",
  3: "photo/gemini.png",
  4: "photo/cancer.png",
  5: "photo/leon.png",
  6: "photo/virgo.png",
  7: "photo/libra.png",
  8: "photo/scorpio.png",
  9: "photo/sagittarius.jpg",
  10: "photo/capricorn.png",
  11: "photo/aqua.png",
  12: "photo/pisces.png",
  13: "photo/error.png",
};

// -------------------- fonction reset --------------------
function reset() {
  date.value = "";
}
// -------------------- fonction numerologie --------------
function numerologie() {
  const date = document.getElementById("date");
  const dateEntree = date.value;
  const a = parseInt(dateEntree.split("-")[2]);
  const b = parseInt(dateEntree.split("-")[1]);

  const td = new Date(); // Le date d'ouverture de la page (aujourd'hui)
  const dtn = date.value; // on lit la date de naissance
  const an = dtn.substr(0, 4); // l'année (les quatre premiers caractères de la chaîne à partir de zéro)
  const age = td.getFullYear() - an; // l'âge du joueur
  document.getElementById("message").textContent = age + " years old"; // que l'on place dans la balise span d'id idAge

  // const dateIfError = td.getFullYear()+'-'+(td.getMonth()+1)+'-'+td.getDate();

  messageBonAsavoir.textContent = `${monthSignification[b]}`;

  // ===============Bélier==================
  if ((21 <= a && a < 31 && b == 3) || (1 <= a && a <= 20 && b == 4)) {
    titreSigneAstro.textContent = `${listSigneAstro[0]}`;
    messageSignification.textContent = `${history[1]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[1]}")`;
  }
  // ===============Taureau==================
  else if ((21 <= a && a < 30 && b == 4) || (1 <= a && a <= 21 && b == 5)) {
    titreSigneAstro.textContent = `${listSigneAstro[1]}`;
    messageSignification.textContent = `${history[2]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[2]}")`;
  }
  // =============== Gémeaux==================
  else if ((22 <= a && a < 31 && b == 5) || (1 <= a && a <= 21 && b == 6)) {
    titreSigneAstro.textContent = `${listSigneAstro[2]}`;
    messageSignification.textContent = `${history[3]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[3]}")`;
  }
  // ===============Cancer==================
  else if ((22 <= a && a < 30 && b == 6) || (1 <= a && a <= 22 && b == 7)) {
    titreSigneAstro.textContent = `${listSigneAstro[3]}`;
    messageSignification.textContent = `${history[4]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[4]}")`;
  }
  // ===============Lion==================
  else if ((23 <= a && a < 31 && b == 7) || (1 <= a && a <= 22 && b == 8)) {
    titreSigneAstro.textContent = `${listSigneAstro[4]}`;
    messageSignification.textContent = `${history[5]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[5]}")`;
  }
  // ===============Virgo==================
  else if ((23 <= a && a < 31 && b == 8) || (1 <= a && a <= 22 && b == 9)) {
    titreSigneAstro.textContent = `${listSigneAstro[5]}`;
    messageSignification.textContent = `${history[6]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[6]}")`;
  }
  // ===============Balance==================
  else if ((23 <= a && a < 30 && b == 9) || (1 <= a && a <= 22 && b == 10)) {
    titreSigneAstro.textContent = `${listSigneAstro[6]}`;
    messageSignification.textContent = `${history[7]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[7]}")`;
  }
  // ===============Scorpion==================
  else if ((23 <= a && a < 31 && b == 10) || (1 <= a && a <= 22 && b == 11)) {
    titreSigneAstro.textContent = `${listSigneAstro[7]}`;
    messageSignification.textContent = `${history[8]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[8]}")`;
  }
  // ===============Sagittaire==================
  else if ((23 <= a && a < 30 && b == 11) || (1 <= a && a <= 21 && b == 12)) {
    titreSigneAstro.textContent = `${listSigneAstro[8]}`;
    messageSignification.textContent = `${history[9]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[9]}")`;
  }
  // ===============Capricorne==================
  else if ((22 <= a && a < 31 && b == 12) || (1 <= a && a <= 20 && b == 1)) {
    titreSigneAstro.textContent = `${listSigneAstro[9]}`;
    messageSignification.textContent = `${history[10]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[10]}")`;
  }
  // ===============Verseau==================
  else if ((21 <= a && a < 31 && b == 1) || (1 <= a && a <= 19 && b == 2)) {
    titreSigneAstro.textContent = `${listSigneAstro[10]}`;
    messageSignification.textContent = `${history[11]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundColor = `url("${url[11]}")`;
  }
  // ===============Poisson==================
  else if ((20 <= a && a < 29 && b == 2) || (1 <= a && a <= 20 && b == 3)) {
    titreSigneAstro.textContent = `${listSigneAstro[11]}`;
    messageSignification.textContent = `${history[12]}`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[12]}")`;
  }
  // ===============ERROR==================
  else {
    titreSigneAstro.textContent = `Are you an alien ? `;
    messageSignification.textContent = `You seem not to have entered any date or the date you entered is incorrect`;
    document.querySelector(
      ".modal-content"
    ).style.backgroundImage = `url("${url[13]}")`;
    // document.querySelector(
    //   ".modal-content"
    // ).style.backgroundPosition = "top";
    messageBonAsavoir.textContent = ` Don't cry and try again.`;
    document.getElementById("message").textContent = td.getFullYear()+'-'+(td.getMonth()+1)+'-'+td.getDate();
    
  }
}

button.addEventListener("click", numerologie);
resetBtn.addEventListener("click", reset);
