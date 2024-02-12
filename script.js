const prompt = require("prompt-sync")();

let choix = 0
console.log(" Salut, tu viens d'arriver a la grotte");

choix = parseInt(prompt("Entrez (1) ou Faire demi-tour (2)"))
while (choix != 1 && choix!= 2) {
    choix = parseInt(prompt("Entrez (1) ou Faire demi-tour (2)"))
}
if (choix === 1) {
    console.log("Tu viens d'arriver devant deux portes")
    choix = parseInt(prompt(" Droite (1) ou Gauche (2)"))
    while (choix != 1 && choix!= 2) {
        choix = parseInt(prompt(" Droite (1) ou Gauche (2)"))
    }
    if (choix === 1) {
      console.log("Tu es tombé sur un nid de serpends. ")
      choix = parseInt(prompt(" Tu combats (1), tu cours (2)"))
      while (choix != 1 && choix!= 2) {
        choix = parseInt(prompt(" Tu combats (1), tu cours (2) "))
      }
      if (choix === 1) {
        console.log("Les serpends gagne et te transforme en serpend ");
        
      }else if (choix === 2) {
        console.log(" Tu cours sans t'arreter et tombe dans un trou. Tu atterris devant un statue");
        choix = parseInt(prompt(" Tu l'as salut (1), tu lui chattouilles le nez (2)"))
        while (choix != 1 && choix!= 2) {
          choix = parseInt(prompt(" Tu l'as salut (1), tu lui chattouilles le nez (2) "))
        }
      }if (choix === 1) {
        console.log("La statue pivotte et tu arrives a la salle du trésor. Tu as gagné ! ");
      }else if (choix === 2) {
        console.log("Vous n'avez pas honte de toucher les gens comme ça ?! La statue te petrifie et tu finiras tes jours en statue ");
      }
    }else if (choix === 2) {
        console.log("Tu entre dans une piece, une potions se trouve sur une table.  ")
        choix = parseInt(prompt(" Tu l'as bois (1), tu l'as laisse (2) "))
      while (choix != 1 && choix!= 2) {
        choix = parseInt(prompt(" Tu l'as bois (1), tu l'as laisse (2) "))
      } 
      if (choix === 1) {
        console.log("Cette potion te rend riche. ");
        choix = parseInt(prompt(" Tu rentres chez toi (1), tu continue pour plus de richesses (2) "))
      while (choix != 1 && choix!= 2) {
        choix = parseInt(prompt(" Tu rentres chez toi (1), tu continue pour plus de richesses (2) "))
      }if (choix === 1) {
        console.log("Tu rentres et le malefice de la grotte fait disparaitre tes richesses arrivé chez toi ...");
        
      }else if (choix === 2) {
        console.log("Tu continue d'avancer, et tu arrive a la salle du trésor. Tu as gagné");
      }
    }else if (choix === 2) {
        console.log(" Tu continues d'avancer. et tu tombes sur une statue");
        choix = parseInt(prompt(" Tu l'as salut (1), tu lui chattouilles le nez (2)"))
        while (choix != 1 && choix!= 2) {
          choix = parseInt(prompt(" Tu l'as salut (1), tu lui chattouilles le nez (2) "))
        }
    }if (choix === 1) {
        console.log("La statue pivotte et tu arrives a la salle du trésor. Tu as gagné ! ");
      }else if (choix === 2) {
        console.log("Vous n'avez pas honte de toucher les gens comme ça ?! La statue te petrifie et tu finiras tes jours en statue ");
      }

}else if (choix === 2) {
    console.log("Au revoir ...");
} }