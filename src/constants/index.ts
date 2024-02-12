export const servicesAvailable = [
  {
    label: 'Home Internet',
    name: 'home'
  },
  {
    label: 'Business Internet',
    name: 'business'
  }
]

export const offersAvailable = [
  {
    bandwidthDown: 3,
    bandwidthUp: 1,
    title: 'DSL3',
    name: 'dsl3',
    description: 'Basic internet connectivity needs, email.',
    price: 40,
    type: ['home']
  },
  {
    bandwidthDown: 7,
    bandwidthUp: 1,
    title: 'DSL7',
    name: 'dsl7',
    description: 'Stream content to watch or listen to.',
    price: 45,
    type: ['home']
  },
  {
    bandwidthDown: 30,
    bandwidthUp: 10,
    title: 'CABLE30',
    name: 'cable30',
    description: 'Stream more demanding content in better quality.',
    price: 55,
    type: ['home']
  },
  {
    bandwidthDown: 70,
    bandwidthUp: 10,
    title: 'CABLE70',
    name: 'cable70',
    description: 'Stream higher quality content.',
    price: 65,
    type: ['home']
  },
  {
    bandwidthDown: 100,
    bandwidthUp: 30,
    title: 'CABLE100',
    name: 'cable100',
    description: 'Stream yourself for others to watch.',
    price: 70,
    type: ['home']
  },
  {
    bandwidthDown: 100,
    bandwidthUp: 50,
    title: 'FIBER100',
    name: 'fiber100',
    description: 'Get and give things fast.',
    price: 80,
    type: ['business', 'home']
  },
  {
    bandwidthDown: 100,
    bandwidthUp: 100,
    title: 'FIBER100+',
    name: 'fiber100plus',
    description: 'Get and give things fast.',
    price: 85,
    type: ['business']
  },
  {
    bandwidthDown: 300,
    bandwidthUp: 100,
    title: 'FIBER300',
    name: 'fiber300',
    description: 'Blaze your way to content delivery.',
    price: 90,
    type: ['business', 'home']
  },
  {
    bandwidthDown: 1000,
    bandwidthUp: 1000,
    title: 'FIBER1000',
    name: 'fiber1000',
    description: "There's no stopping you.",
    price: 100,
    type: ['business', 'home']
  },
  {
    bandwidthDown: 1600,
    bandwidthUp: 1600,
    title: 'FIBER1600',
    name: 'fiber1600',
    description: 'Top of the line.',
    price: 120,
    type: ['business']
  }
]
