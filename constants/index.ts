const navLinks: { id: string; title: string }[] = [
   {
      id: "cocktails",
      title: "Cocktails",
   },
   {
      id: "about",
      title: "About Us",
   },
   {
      id: "art",
      title: "The Art",
   },
   {
      id: "contact",
      title: "Contact",
   },
];

const cocktailLists: { name: string; country: string; detail: string; price: string }[] = [
   {
      name: "Chapel Hill Shiraz",
      country: "AU",
      detail: "Battle",
      price: "$10",
   },
   {
      name: "Caten Malbee",
      country: "AU",
      detail: "Battle",
      price: "$49",
   },
   {
      name: "Rhino Pale Ale",
      country: "CA",
      detail: "750 ml",
      price: "$20",
   },
   {
      name: "Irish Guinness",
      country: "IE",
      detail: "600 ml",
      price: "$29",
   },
];

const mockTailLists: { name: string; country: string; detail: string; price: string }[] = [
   {
      name: "Tropical Bloom",
      country: "US",
      detail: "Battle",
      price: "$10",
   },
   {
      name: "Passionfruit Mint",
      country: "US",
      detail: "Battle",
      price: "$49",
   },
   {
      name: "Citrus Glow",
      country: "CA",
      detail: "750 ml",
      price: "$20",
   },
   {
      name: "Lavender Fizz",
      country: "IE",
      detail: "600 ml",
      price: "$29",
   },
];

const profileLists: { imgPath: string }[] = [
   {
      imgPath: "/images/profile1.png",
   },
   {
      imgPath: "/images/profile2.png",
   },
   {
      imgPath: "/images/profile3.png",
   },
   {
      imgPath: "/images/profile4.png",
   },
];

const featureLists: string[] = [
   "Perfectly balanced blends",
   "Garnished to perfection",
   "Ice-cold every time",
   "Expertly shaken & stirred",
];

const goodLists: string[] = [
   "Handpicked ingredients",
   "Signature techniques",
   "Bartending artistry in action",
   "Freshly muddled flavors",
];

const storeInfo: { heading: string; address: string; contact: { phone: string; email: string } } = {
   heading: "Where to Find Us",
   address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
   contact: {
      phone: "(555) 987-6543",
      email: "andohenrirazafinatoandro@gmail.com",
   },
};

const openingHours: { day: string; time: string }[] = [
   { day: "Mon–Thu", time: "11:00am – 12am" },
   { day: "Fri", time: "11:00am – 2am" },
   { day: "Sat", time: "9:00am – 2am" },
   { day: "Sun", time: "9:00am – 1am" },
];

const socials: { name: string; icon: string; url: string }[] = [
   {
      name: "Instagram",
      icon: "/images/insta.png",
      url: "#",
   },
   {
      name: "X (Twitter)",
      icon: "/images/x.png",
      url: "#",
   },
   {
      name: "Facebook",
      icon: "/images/fb.png",
      url: "#",
   },
];

const sliderLists: { id: number; name: string; image: string; title: string; description: string }[] = [
   {
      id: 1,
      name: "Classic Mojito",
      image: "/images/drink1.png",
      title: "Simple Ingredients, Bold Flavor",
      description:
         "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
   },
   {
      id: 2,
      name: "Raspberry Mojito",
      image: "/images/drink2.png",
      title: "A Zesty Classic That Never Fails",
      description:
         "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
   },
   {
      id: 3,
      name: "Violet Breeze",
      image: "/images/drink3.png",
      title: "Simple Ingredients, Bold Flavor",
      description:
         "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
   },
   {
      id: 4,
      name: "Curacao Mojito",
      image: "/images/drink4.png",
      title: "Crafted With Care, Poured With Love",
      description:
         "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
   },
];

export {
   navLinks,
   cocktailLists,
   mockTailLists,
   profileLists,
   featureLists,
   goodLists,
   openingHours,
   storeInfo,
   socials,
   sliderLists,
};