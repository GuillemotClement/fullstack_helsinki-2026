# Part 2 - Communiquer avec le serveur 

- Rendu d'une collection de données 
- Soumission de données avec un formulaire 
- Récupération et gestion des données stocjées dans un serveur 
- Style 

---

## Exercice 

### 2.6 : phonebook, étape1
Créons un répertoire téléphonique simple. Dans cette partie, nous n'ajouterons que des noms au répertoire.

Commençons par implémenter l'ajout d'une personne au répertoire.

### 2.7: phonebook, étape2
Empêcher l'utilisateur d'ajouter des noms qui existent déjà dans le répertoire. Les tableaux JavaScript ont de nombreuses méthodes appropriées pour accomplir cette tâche. Gardez à l'esprit comment fonctionne l'égalité des objets en Javascript.

Émettez un avertissement avec la commande alert lorsqu'une telle action est tentée

### 2.8: phonebook, étape3
Développez votre application en permettant aux utilisateurs d'ajouter des numéros de téléphone au répertoire téléphonique. Vous devrez ajouter un deuxième élément input au formulaire (avec son propre gestionnaire d'événements)

### 2.9*: phonebook, étape4
Implémentez un champ de recherche qui peut être utilisé pour filtrer la liste des personnes par nom 

### 2.10: phonebook étape5
Si vous avez implémenté votre application dans un seul composant, refactorisez-le en extrayant les parties appropriées dans de nouveaux composants. Conservez l'état de l'application et tous les gestionnaires d'événements dans le composant racine App.

Il suffit d'extraire trois composants de l'application. De bons candidats pour des composants séparés sont, par exemple, le filtre de recherche, le formulaire d'ajout de nouvelles personnes dans l'annuaire, un composant qui affiche toutes les personnes de l'annuaire et un composant qui affiche les détails d'une seule personne.

Le composant racine de l'application pourrait ressembler à ceci après la refactorisation. Le composant racine refactorisé ci-dessous n'affiche que les titres et laisse les composants extraits s'occuper du reste.