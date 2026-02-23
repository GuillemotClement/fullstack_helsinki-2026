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

### 2.11: phonebook, étape6
Nous continuons à développer le répertoire. Stockez l'état initial de l'application dans le fichier db.json, qui doit être placé à la racine du projet.

### 2.12: phonebook, étape7
Revenons à notre application de répertoire.

Actuellement, les numéros ajoutés au répertoire ne sont pas enregistrés sur un serveur principal. Corrigez cette situation.

### 2.13: phonebook, étape8
Extrayez le code qui gère la communication avec le backend dans son propre module en suivant l'exemple présenté précédemment dans cette partie du support de cours.

### 2.14: phonebook étape9
Permettre aux utilisateurs de supprimer des entrées du répertoire. La suppression peut être effectuée via un bouton dédié pour chaque personne dans la liste du répertoire. Vous pouvez confirmer l'action de l'utilisateur en utilisant la méthode window.confirm :

La ressource associée à une personne dans le backend peut être supprimée en envoyant une requête HTTP DELETE à l'URL de la ressource. Si nous supprimons par ex. une personne qui a l'id 2, il faudrait faire une requête HTTP DELETE à l'URL localhost:3001/persons/2. Aucune donnée n'est envoyée avec la demande.

Vous pouvez effectuer une requête HTTP DELETE avec la bibliothèque axios de la même manière que nous effectuons toutes les autres requêtes.

NB : Vous ne pouvez pas utiliser le nom delete pour une variable car il s'agit d'un mot réservé en JavaScript. Par exemple. ce qui suit n'est pas possible :

### 2.15*: phonebook, étape10
Modifiez le code de sorte que si un numéro est ajouté à un utilisateur déjà existant, le nouveau numéro remplacera l'ancien numéro. Il est recommandé d'utiliser la méthode HTTP PUT pour mettre à jour le numéro de téléphone.

Si les informations de la personne sont déjà dans le répertoire, l'application peut confirmer l'action de l'utilisateur :