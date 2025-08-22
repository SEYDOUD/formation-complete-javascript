// This is a single line of code
/*Multi line comment
// alt + down
console.log(100);
console.log('Hello World');

console.log(20 , 'Hello' , true);
*/
const x = 100;
// const x = 100;
// const x = 100;

console.log(x);

console.error('Alerte');

console.warn('Warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alerte');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World',styles)

/*
========================Shortcuts=======================================
Ctrl + D : Pour edit chaque iteration d'un mot cle un en un-------------
Ctrl + shift + L : Pour selectionner toutes les iterations en meme temps
Alt + click : Pour selectionner les iterations qu'on veut---------------
Ctrl + slash : Pour commenter le bloc de code qu'on veut----------------
Alt + Shift + Down/Up : Pour dupliquer le bloc de code qu'on veut-------
Alt + Down/Up : Pour faire monter ou decendre une ligne de code---------
Ctrl + Shift + O : Pour chercher des caracteres dans VSCODE-------------
Ctrl + Shift + F : Pour chercher un mot dans tous les fichiers----------
Ctrl + B : Pour ouvrir ou fermer la sideBar-----------------------------
Ctrl + ~ : Pour ouvrir le terminal--------------------------------------
========================================================================
*/