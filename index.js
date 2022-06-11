// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat ()
{
    const appendCat = cats.push("Ralph");
    return appendCat
}
function destructivelyPrependCat ( )
{
    const prependCat = cats.unshift( 'Bob' );
    return prependCat
}
function destructivelyRemoveLastCat ()
{
    const removeLastCat = cats.pop()
}
function destructivelyRemoveFirstCat ()
{
    const removeCat = cats.shift();
    return removeCat
}
function appendCat ()
{
    const newCats = [ ...cats, 'Broom' ]
    return newCats
}
function prependCat ()
{
    const catPrepend = [ 'Arnold', ...cats ];
    return catPrepend
}
function removeLastCat ()
{
    const catRemove = cats.slice( 0, 2 );
    return catRemove
}
function removeFirstCat ()
{
    const removeFirst = cats.slice( 1 );
    return removeFirst
}