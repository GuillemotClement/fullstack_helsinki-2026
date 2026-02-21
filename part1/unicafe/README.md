# Unicafé 

## 1.6 : unicafé, étape1
Comme la plupart des entreprises, Unicafe recueille les commentaires de ses clients. Votre tâche consiste à mettre en place une application Web pour recueillir les commentaires des clients. Il n'y a que trois options pour les commentaires : bon, neutre et mauvais.

L'application doit afficher le nombre total de commentaires recueillis pour chaque catégorie. 

Notez que votre application ne doit fonctionner que pendant une seule session de navigateur. Une fois que vous avez actualisé la page, les commentaires recueillis sont autorisés à disparaître.

## 1.7 : unicafé, étape2
Développez votre application pour qu'elle affiche plus de statistiques sur les retours collectés : le nombre total de retours collectés, le score moyen (bon : 1, neutre : 0, mauvais : -1) et le pourcentage de retours positifs.

## 1.8 : unicafé, étape3
Refactorisez votre application afin que l'affichage des statistiques soit extrait dans son propre composant Statistics. L'état de l'application doit rester dans le composant racine App.

## 1.9 : unicafé, étape4
Modifiez votre application pour n'afficher les statistiques qu'une fois les commentaires recueillis.

## 1.10 : unicafé, étape5
Continuons à refactoriser l'application. Extrayez les deux composants suivants :

Bouton pour définir les boutons utilisés pour soumettre des commentaires
StatisticLine pour afficher une seule statistique, par ex. la note moyenne.
Pour être clair : le composant StatisticLine affiche toujours une seule statistique, ce qui signifie que l'application utilise plusieurs composants pour afficher toutes les statistiques.

## 1.11* : unicafé, étape6
Affichez les statistiques dans un tableau HTML