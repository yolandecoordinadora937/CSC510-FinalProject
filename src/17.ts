// Project setup file

import { app } from 'electron'
import * as fs from 'fs'

// Function to add a new item to the list
export function addItem(item: string) {
  const list = JSON.parse(fs.readFileSync(`${app.getPath('userData')}/items.json`, 'utf-8'));
  list.push(item);
  fs.writeFileSync(`${app.getPath('userData')}/items.json`, JSON.stringify(list, null, 2));
}

// Function to remove a specific item from the list
export function removeItem(index: number) {
  if (index < 0 || index >= this.items.length) {
    return;
  }

  const updatedList = [...this.items];
  updatedList.splice(index, 1);
  fs.writeFileSync(`${app.getPath('userData')}/items.json`, JSON.stringify(updatedList));
}
