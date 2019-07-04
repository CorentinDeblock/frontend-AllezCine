# A. Projet Allez Cine

## Objectifs d'apprentissage

* respecter un design fourni
* consolider les acquis en git, HTML, CSS, Bootstrap
* utiliser javascript dans un projet réaliste
* avoir un nouveau projet à ajouter à son portfolio

## Mission
Réaliser, en groupe, un site internet de location et vente des films.

## Demandes

On avait un layout à respecter:
[Cliquez ici pour voir le layout](https://raw.githubusercontent.com/becodeorg/CRL-Turing-3.11/master/Projets/AllezCine/layout-one-v2.jpg?token=AL3IPZLXY4CMSEIMDYXHDI25EX276)

Consignes principales à respecter:
* lorsqu’on entre dans le site, il faut **contraindre l’utilisateur à indiquer son âge**,
* faire apparaître n’importe où sur le site une box pour la **mise en garde de cookies**
* lorsqu’on clique sur les boutons [login] ou [register], faire apparaître en JS ou jQuery dans une box un formulaire de connexion,
* les **boutons de réseaux sociaux** sont en position fixe. Si on clique sur un bouton, il doit s’allonger avec une animation,
* si on clique sur l’image ou titre du film, faire apparaître dans un modal (Bootstrap),
* créer des boutons pour filtrer les films par genre,
* lorsqu’on clique sur le bouton “plus des films”, afficher les autres films cachés,
* section "Shop Movie": utiliser les deux petits boutons à droite pour faire défiler les films de gauche à droite et vise-versa,
* Lorsqu’on clique sur le petit bouton rouge avec la flèche blanche, on monte jusqu’à l'entête du site, le petit bouton disparaît une fois que l'entête apparaît.

## Problèmes rencontrés
* Corentin a voulu faire une API, elle est finie mais pas complète. Donc on a travaillé avec un JSON que Cindy avait débuté.
* Github, trop de conflits, on s'est retrouvé avec 10 branches, c'était le bordel. Les derniers jours, on a créé une branche où on a mettait tout en commun dessus plusieurs fois par jour.
* Au début on a travaillé avec plusieurs JavaScript pour le main mais le soucis c'est que du coup le site mettait très longtemps à charger, tout marchait mais quand on a voulu tout combiner en un JavaScript, tout a buguer.
* Au début on avait mit les iframes dans le template mais le site avait du mal à lire toutes les vidéos en un coup, on a donc mit le iframe dans le JavaScript, qu'il le lise au clique sur le film mais ça a causé pleins de problèmes car il affiche dans "All" tout correctement mais une fois qu'on clique sur les genres ça affiche que l'image + titre + année mais pas le reste.

# B. Newsletter (Bonus)

[![Image](https://i.goopics.net/anAY0.jpg)](https://goopics.net/i/anAY0)

## Description du projet:

Projet proposé par Becode : liens vers le README de l'exercice <https://github.com/becodeorg/CRL-Turing-3.11/tree/master/Projets/AllezCine>.

Création d'une Newsletter promotionnelle sur le thème d'un site proposant des films en streaming. Défintion d'une Newsletter : "Une Newsletter est une lettre d'information périodique d'un site web."

Cette Newsletter est composé d'une rubrique de "nouveaux" films , de série Tv et de films dit "du passé".

## Démarrage : 

Pour débuter ce projet il faut avoir une idée de base de ce que vous voulez faire .   
Créer la structure de départ en utilisant seulement des "table".   
Insérer votre css dans les balises mêmes .

## Problèmes rencontrés : 

- Utilisation de style css dans le HTML même  =>  certaines propriétés css ne fonctionnait pas lors du rendu sur un navigateur.
- Images : hébergement ou non ??  
- Mise en page 

## Auteurs de cette Newsletter : 

- Christophe Dejaiffe   
Lien GitHub : https://github.com/christophedejaiffe
- Lesly Ghyselinck   
Lien GitHub : https://github.com/Lesly1994
