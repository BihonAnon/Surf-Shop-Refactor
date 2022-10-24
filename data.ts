export const people = [
  {
    id: '1',
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    id: '2',
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    gender: 'n/a',
  },
  {
    id: '3',
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    gender: 'n/a',
  },
  {
    id: '4',
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    id: '5',
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    id: '6',
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    id: '7',
    name: 'Beru Whitesun Lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    gender: 'female',
  },
  {
    id: '8',
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    gender: 'n/a',
  },
  {
    id: '9',
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    gender: 'male',
  },
  {
    id: '10',
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    gender: 'male',
  },
]
export const tags = [
  { id: '1', name: 'surfing' },
  { id: '2', name: 'beach utils' },
  { id: '3', name: 'beach snacks' },
  { id: '4', name: 'beach toys' },
  { id: '5', name: 'beach sports' },
  { id: '6', name: 'beach clothing' },
  { id: '7', name: 'beach furnature' },
]
export const products = [
  {
    id: '1',
    name: 'Surfboard',
    price: 400,
    description: 'A large board for one person',
    tags: [
      {
        id: '1',
        name: 'surfing',
      },
      {
        id: '2',
        name: 'beach-utils',
      },
     ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '2',
    name: 'Wetsuit',
    price: 200,
    description: 'A warm and waterproof suit',
    tags: [
      {
        id: '1',
        name: 'surfing',
      },
      {
        id: '6',
        name: 'beach-clothing',
      },
     ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '3',
    name: 'Beach ball',
    price: 5,
    description: 'A ball for playing on the beach',
    tags: [
      {
        id: '4',
        name: 'beach-toys',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '4',
    name: 'Beach umbrella',
    price: 30,
    description: 'A large umbrella for shade',
    tags: [
      {
        id: '2',
        name: 'beach-utils',
      },
      {
        id: '7',
        name: 'beach-furnature',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '5',
    name: 'Beach chair',
    price: 50,
    description: 'A chair for relaxing on the beach',
    tags: [
      {
        id: '2',
        name: 'beach-utils',
      },
      {
        id: '7',
        name: 'beach-furnature',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '6',
    name: 'Beach towel',
    price: 20,
    description: 'A large towel for drying off',
    tags: [
      {
        id: '2',
        name: 'beach-utils',
      },
      {
        id: '6',
        name: 'beach-clothing',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '7',
    name: 'Beach frisbee',
    price: 10,
    description: 'A frisbee for playing on the beach',
    tags: [
      {
        id: '4',
        name: 'beach-toys',
      },
      {
        id: '5',
        name: 'beach-sports',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '8',
    name: 'Beach volleyball',
    price: 15,
    description: 'A volleyball for playing on the beach',
    tags: [
      {
        id: '5',
        name: 'beach-sports',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '9',
    name: 'Beach soccer ball',
    price: 15,
    description: 'A soccer ball for playing on the beach',
    tags: [
      {
        id: '5',
        name: 'beach-sports',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '10',
    name: 'Beach football',
    price: 15,
    description: 'A football for playing on the beach',
    tags: [
      {
        id: '5',
        name: 'beach-sports',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '11',
    name: 'Beach Towel',
    price: 20,
    description: 'A large towel for drying off',
    tags: [
      {
        id: '2',
        name: 'beach-utils',
      },
      {
        id: '6',
        name: 'beach-clothing',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '12',
    name: 'Beach Frisbee',
    price: 10,
    description: 'A frisbee for playing on the beach',
    tags: [
      {
        id: '4',
        name: 'beach-toys',
      },
      {
        id: '5',
        name: 'beach-sports',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  },
  {
    id: '13',
    name: 'Beach Waterbottle',
    price: 10,
    description: 'A waterbottle for staying hydrated',
    tags: [
      {
        id: '2',
        name: 'beach-utils',
      },
      {
        id: '3',
        name: 'beach-snacks',
      },
    ],
    image: 'https://loremflickr.com/640/360',
  }
]

export const userData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
    password: 'password',
  }
]
export const orders = [
  {
    id: '1',
    userId: '1',
    orderList: [  // array of product ids
      {
        id: '1',
        quantity: 1,
      },
      {
        id: '2',
        quantity: 1,
      }
    ],
    orderTotal: 600,
    orderDate: '2020-01-01',
  }
]


