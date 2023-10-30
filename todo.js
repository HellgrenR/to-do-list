
let toDoList = []



// Skapa en funktion addToList som lägger till en sak att göra till listan och returnerar hela listan.
function addToList(todo) {
  toDoList.push({ beskrivning: todo })
  return toDoList
}


// Ibland får man saker att göra som är viktigare än alla andra. Skapa en funktion addToTopOfList som lägger till en sak att göra längst upp i listan, samt returnerar hela listan.
function addToTopOfList(todo) {
  toDoList.unshift({ beskrivning: todo })
  return toDoList
}


// Kanske var det där längst ner i att göra listan inte så viktigt? Skriv en funktion removeFromBottomOfList som tar bort den sak som är längst ner i listan och returnerar den.
function removeFromBottomOfList() {
  toDoList.pop()
  return (toDoList)
}


// Du fick äntligen det som var viktigast gjort? Skriv en funktion removeFromTopOfList som tar bort den sak som är högst i listan och returnerar den.
function removeFromTopOfList() {
  toDoList.shift()
  return (toDoList)
}


// Det är inte alltid man får saker gjorda i ordning. Skriv en funktion removeFromListByIndex till vilken man skickar ett nummer och saken på denna plats i listan tas bort. Returnera den bortplockade saken.
function removeFromListByIndex(index) {
  let removed = ""
  if (index >= 0) {
    removed = toDoList.splice(index, 1)
    return removed
  } else {
    return "Finns ej"
  }
}


// Skriv en funktion removeFromListByName som hittar en sak i listan baserat på dess namn och tart bort den. Returnera den borttagna saken.

// Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByIndex(från steg 6) inuti din funktion.
function removeFromListByName(name) {
  // hitta ett objekt som innehåller beviljad beskrivning
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].beskrivning == name) {
      let removed = toDoList.splice(i, 1)[0]
      return removed
    }
  }
}


// Skapa en att ”har gjort”-lista genom att deklarera en variabel med namnet doneList som en array.
// Skriv en funktion removeFromListAndAddToDone som flyttar en sak from att göra - listan till ”har gjort”-listan.Returnera listan över saker som är gjorda.

// Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) inuti din funktion.
let doneList = []

function removeFromListAndAddToDone(name) {
  const removed = removeFromListByName(name)
  if (removed) {
    return doneList.unshift(removed)
  }
}


// Ibland blir en sak plötsligt riktigt viktiga att göra. Skriv en funktion moveToTop som hittar en sak i listan baserat på dess namn och flyttar den till toppen. Returnera hela att göra-listan.

// Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToTopOfList(från steg 3) inuti din funktion.
function moveToTop(name) {
  // ta bort saken och spara den i removed
  let removed = removeFromListByName(name)
  let removedString = ""
  // ta ut strängen från objektet
  if (removed) {
    removedString = removed.beskrivning
  }
  // lägg till removed på toppen av listan
  addToTopOfList(removedString)
}


// Ibland blir en sak plötsligt ganska opriorieterad. Skriv en funktion moveToBottom som hittar en sak i listan baserat på dess namn och flyttar den till botten. Returnera hela att göra-listan.

// Notera: Försök att skriva mindre kod genom att återanvända / anropa removeFromListByName(från steg 7) och addToList(från steg 2) inuti din funktion.
function moveToBottom(name) {
  // ta bort saken och spara den i removed
  let removed = removeFromListByName(name)
  let removedString = ""
  // ta ut strängen från objektet
  if (removed) {
    removedString = removed.beskrivning
  }
  // lägg till removed på botten av listan
  addToList(removedString)
}


// Ibland behöver man prioritera ner något lite grann. Skriv en funktion moveDown som flyttar en sak ett steg ner i listan.

// Tips: Man kan även se detta som att saken byter plats med det som var nedanför den.
function moveDown(name) {
  for (let i = 0; i < toDoList.length - 1; i++) {
    if (toDoList[i].beskrivning === name) {
      [toDoList[i], toDoList[i + 1]] = [toDoList[i + 1], toDoList[i]]
      return toDoList
    }
  }
  return toDoList
}


// Ibland behöver man prioritera upp något lite grann. Skriv en funktion moveUp som flyttar en sak ett steg upp i listan.

// Tips: Man kan även se detta som att saken byter plats med det som var ovanför den.
function moveUp(name) {
  for (let i = 1; i < toDoList.length; i++) {
    if (toDoList[i].beskrivning === name) {
      [toDoList[i - 1], toDoList[i]] = [toDoList[i], toDoList[i - 1]]
      return toDoList
    }
  }
  return toDoList
}




















