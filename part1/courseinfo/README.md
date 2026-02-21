# Courseinfo

## 1.1 : courseinfo, étape 1
L'application sur laquelle nous allons commencer à travailler dans cet exercice sera développée plus en détail dans quelques-uns des exercices suivants. Dans cette série d'exercices et d'autres à venir dans ce cours, il suffit de soumettre uniquement l'état final de l'application. Si vous le souhaitez, vous pouvez également créer un commit pour chaque exercice de la série, mais cela est facultatif.

Utilisez Vite pour initialiser une nouvelle application.

Malheureusement, toute l'application se trouve dans le même composant. Refactorisez le code afin qu'il se compose de trois nouveaux composants : Header, Content et Total. Toutes les données résident toujours dans le composant App, qui transmet les données nécessaires à chaque composant à l'aide des props. Header se charge de restituer le nom du cours, Content restitue les parties et leur nombre d'exercices et Total restitue le nombre total d'exercices.

Définissez les nouveaux composants dans le fichier App.jsx.

## 1.2 : courseinfo, étape 2
Refactorisez le composant Content afin qu'il n'affiche pas les noms des parties ou leur nombre d'exercices par lui-même. Au lieu de cela, il ne rend que trois composants Part dont chacun rend le nom et le nombre d'exercices d'une partie

## 1.3 : courseinfo, étape 3
Passons à l'utilisation d'objets dans notre application. Modifiez les définitions des variables du composant App comme suit et refactorisez également l'application pour qu'elle fonctionne toujours

## 1.4 : courseinfo, étape 4
Et puis placez les objets dans un tableau. Modifiez les définitions de variable de App sous la forme suivante et modifiez les autres parties de l'application en conséquence :

NB à ce stade, vous pouvez supposer qu'il y a toujours trois éléments, il n'est donc pas nécessaire de parcourir les tableaux à l'aide de boucles. Nous reviendrons sur le sujet du rendu des composants basés sur des éléments dans des tableaux avec une exploration plus approfondie dans la prochaine partie du cours.

Cependant, ne transmettez pas différents objets en tant que props distincts du composant App aux composants Content et Total. Au lieu de cela, transmettez-les directement sous forme de tableau

## 1.5 : courseinfo, étape 5
Poussons les changements un peu plus loin. Modifiez le cours et ses parties en un seul objet JavaScript. Réparez tout ce qui casse.