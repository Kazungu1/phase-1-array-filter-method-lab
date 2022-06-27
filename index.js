// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching ( driversArray, name )
{
    return driversArray.filter( item => item.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch ( driversArray, name )
{
    return driversArray.filter(item => item.toUpperCase().indexOf(name.toUpperCase()) === 0)
}
function matchName ( driversArray, string )
{
    return driversArray.filter(item => item.name === string)
}