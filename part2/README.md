# Part 2 - Communiquer avec le serveur 

- Rendu d'une collection de données 
- Soumission de données avec un formulaire 
- Récupération et gestion des données stocjées dans un serveur 
- Style 

## Rendu de collections et modules


### Afficher une liste 

Pour itérer des listes, on utilise la méthode `map()`. Cette méthode crée un nouveau tableau dont les éléments ont été créées à partir des éléments du tableau d'origine.

Cette méthode permet de parcourir un tableau.

```js
// déclaration du tableau 
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// on affiche un élément pour chaque ligne du tableau 
return (
  <div>
    <h1>Notes</h1>
    <ul>
      {notes.map(note => 
        <li key={note.id}>
          {note.content}
        </li>
      )}
    </ul>
  </div>
)
```

- `notes` : c'est le tableau que l'on souhaite itérer.
- `note` : argument passé dans la callback. Elle contient la valeur en cours d'itération.

Les éléments générés par la méthode `map()` doivent avoir une valeur de clé unique. Cette valeur permet de déterminer comment mettre à jour la vue générée par un composant lorsque le composant est rendu à nouveau.

La méthode `map()` peut prendre un second argument `i`. Celui ci contient un index des éléments du tableau. Cette méthode n'est pas recommandé, et peut provoquer des problèmes.

```js
<ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul>
```

---

### Passage d'une liste vers un enfant 

On peut venir créer un composant `Note` dédié à l'affichage de l'élément d'une liste. Dans le composant parent, on viendras passer via des props le contenu d'une note.

```jsx
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}
```

---

## Module

Dans une application React, on utilise un fichier pour un module. 

Par convention, on utilise le répertoire `src/components` pour y placer les composants d'une application. Le fichier est nommé d'après son composant.

Par exemple, le fichier `src/components/Note.jsx` :

```jsx
import React from 'react';

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note;
```

Le fichier qui définit le composant `App`, peut venir importer le module 

```jsx
import Note from './components/Note';

const App = ({ notes }) => {
  ...
}
```