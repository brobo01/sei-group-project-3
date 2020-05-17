//* the reccomendations field will be part of the model schema as it will be an array of comment schemas. (reference to dinoboard models/dinosaurs & db/data/dinosaurs)

module.exports = [
  {
    name: 'Ruta 40, Argentina',
    startingPoint: 'La Quiaca, Argentina',
    endPoint: 'Cabo Virgenes, Argentina',
    distance: '5.194 km / 3,227m',
    routeImage: 'https://latam.beyondba.com/wp-content/uploads/2020/03/Ruta-40-Map-428x1024.jpg',
    image: 'https://blogpatagonia.australis.com/wp-content/uploads/2016/11/iStock-511670082.jpg',
    tags: ['South America', 'Andes'],
    ratings: {
      scenery: 5,
      enjoyment: 5
    },
    photoGallery: [],
    videos: [],
    description: 'Ruta 40 is the longest road in Argentina. In fact it’s one of the longest roads anywhere and the busiest in South America. It winds from Cabo Vírgenes (Santa Cruz) up to Quiaca (Jujuy) on the border with Bolivia. It takes in some stunning scenery along the route because this legendary road runs parallel to the Andes with sections passing by – or straight through – some 20 national parks. Connecting the country from south to north, on  Ruta 40 there are some major attractions  such as the Strait of Magellan, Perito Moreno Glacier, Lakes Region, the Wine Trail and Talampaya National Park',
    timeOfYear: 'All-year / spring and autumn best',
    highlights: ['Salinas Grandes Salt Flats', 'Cusi Cusi', 'Ruta de los Sieta Lagos'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Chicago to LA - Route 66',
    startingPoint: 'Chicago',
    endPoint: 'Los Angeles',
    distance: '1115km / 693m',
    routeImage: 'https://www.tripsavvy.com/thmb/Fi12CRuXjxKzoWMNQKVnckDnn_k=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RoadTrip_Route66_NPS-566b0fbb3df78ce1615e75f6.jpg',
    image: 'https://img.redbull.com/images/c_fill,g_auto,w_860,h_573/q_auto,f_auto/redbullcom/2015/02/10/1331704370512_3/discover-the-world-on-your-bike-route-66',
    tags: ['Route 66', 'Vegas', 'Hollywood', 'Chicago'],
    ratings: {
      scenery: 5,
      enjoyment: 5
    },
    photoGallery: [],
    videos: [],
    description: 'The romance of Route 66 continues to captivate people around the world. Running between Chicago and Los Angeles, “over two thousand miles all the way” in the words of the popular R&B anthem, this legendary old road passes through the heart of the United States on a diagonal trip that takes in some of the country’s most archetypal roadside scenes. If you’re looking for great displays of neon signs, rusty middle-of-nowhere truck stops, or kitschy Americana, do as the song says and “get your kicks on Route 66.”',
    timeOfYear: 'All-year / spring and autumn best',
    highlights: ['Grand Canyon', 'Land of Lincoln', 'Vegas detour'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Ho Chi Minh Trail, Vietnam',
    startingPoint: 'Hanoi, Vietnam',
    endPoint: 'Ho Chi Minh, Vietnam',
    distance: '1870 km / 1162m',
    routeImage: 'https://cuongs-motorbike-adventure.com/wp-content/uploads/2018/01/Ho-Chi-Minh-Trail-motorbike-tour-map.jpg',
    image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/Hai-Van-Pass-Da-Nang-Vietnam.jpg',
    tags: ['Mountains', 'Scenery', 'Villages', 'Beaches'],
    ratings: {
      scenery: 5,
      enjoyment: 5
    },
    photoGallery: [],
    videos: [],
    description: 'Weaving a course between coast and highlands, The Classic route is equal parts beach and mountain. Quiet, stunning coastal roads in the south and central provinces yield to a mighty landscape of limestone karsts on the Ho Chi Minh Road in the north-central region. Popular towns and sights, such as Mui Ne, Dalat, Nha Trang, Hoi An, the Hai Van Pass, Phong Nha Caves and Ninh Binh are all covered; but so too are off the beaten path areas, such as the beaches around Quy Nhon, the coastal back-roads north of Hue, and the Western Ho Chi Minh Road. It’s the perfect balance of must-see sights and hidden gems. Zoom in on the map below and click the map symbols for links to my guides to specific locations.',
    highlights: ['Ho Chi Minh', 'Mui Ne', 'Hanoi', 'Phong Nha Caves', 'Dalat'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'London to Le Mans',
    startingPoint: 'London, UK',
    endPoint: 'Le Mans, France',
    distance: '587km / 365m',
    routeImage: 'https://www.distantias.com/maps/distance-from-london-great_britain-to-paris-france.png',
    image: 'https://drive-my.com/media/k2/items/cache/dfa5bd35ee353a18219b16bd4f1ed9c3_XL.jpg',
    tags: ['Convoy', 'Hilly', 'Good Times', 'Atmosphere'],
    ratings: {
      scenery: 5,
      enjoyment: 5
    },
    photoGallery: [],
    videos: [],
    description: 'The drive to Le Mans has become something of a pilgrimage for British petrolheads, with thousands making the trip from the UK to northern France to soak up the thrills, spills and atmosphere of the world\'s most famous 24-hour race.',
    highlights: ['Le Mans', 'Mad Friday'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'The Great Legends Tour, Canada',
    startingPoint: 'Mattawa, Canada',
    endPoint: 'vancouver, Canada',
    distance: '1350 km / 839m',
    routeImage: 'https://www.northeasternontario.com/wp-content/uploads/2015/11/the-great-legends-route1.jpg',
    image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe805c634-f9c6-11e6-bc87-4df02d30656d.jpg?crop=1500%2C844%2C0%2C78&resize=1180',
    tags: ['Calm', 'Rocky Landscape', 'Lakes', 'Greenery'],
    ratings: {
      scenery: 5,
      enjoyment: 5
    },
    photoGallery: [],
    videos: [],
    description: 'Once in a while you just need to ride. You need to answer the calling…to clear your head, feel small again, and regain appreciation for your life on your terms. When the Great Legends of the North call, you answer that call with a growl of the throttle. Distances are great but so is the peaceful solitude. The road, seemingly endless road, touches the sky. You will find solace and compassion from the mythical giant legends: the Great Polar Bear, the Great Bison and the Great Fish, as you meander along your chosen motorcycle journey in search of mythical beings',
    highlights: ['Cochrane Polar Bear Habitat', 'Cedar Meadows’ Bison & Elk', 'Sudbury\'s Big Nickel'],
    pastTravellers: ['user123', 'fakeuser12']
  }
]