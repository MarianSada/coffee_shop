import { createContext } from 'react'
import barista_bg from '../../assets/barista.jpeg'
import columbia_v60 from '../../assets/coffee_cup.jpeg'

export const MenuItems = createContext([])

export const menuProducts = [
  {
    image: columbia_v60,
    name: 'V60 Columbia Specialty',
    price: '$12'

  },
  {
    image: barista_bg,
    name: 'S20 Ethiopia New',
    price: '$15'
  },
  {
    image: barista_bg,
    name: 'New Arrival',
    price: '$10'
  },
  {
    image: barista_bg,
    name: 'S21 Ethiopia New',
    price: '$15'
  },
  {
    image: barista_bg,
    name: 'S22 Ethiopia New',
    price: '$15'
  },
  {
    image: barista_bg,
    name: 'S23 Ethiopia New',
    price: '$15'
  },
]