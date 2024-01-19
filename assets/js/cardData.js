document.addEventListener("DOMContentLoaded", function () {
  // provision and health care
  var cardDataArray = [
    {
      imageUrl: "assets/img/provisions/bond.jpg",
      iconClass: "fi fi-rr-bottle",
      title: "Bond supplies",
      description:
        "Liquor , Beers , Wine , Whiskey & Cigarettes",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/vegetables.jpg",
      iconClass: "fi fi-rr-carrot",
      title: "Fresh Vegetables",
      description:
        "Fresh and canned vegetables for balanced and nutritious meals",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/fruits.jpg",
      iconClass: "fi fi-rr-strawberry",
      title: "Fruits",
      description: "Fresh, juicy fruits to add a burst of vitamins to meals.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/cigarettes.jpg",
      iconClass: "fi fi-rr-wheat",
      title: "Dry Provisions",
      description: "Dals , Masala , Oils , Sugars.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/beans.jpg",
      iconClass: "fi fi-rr-peapod",
      title: "Beans and Peas, Dry",
      description: "Nutrient-rich legumes, a staple for hearty meals at sea.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/biscuits.jpg",
      iconClass: "fi fi-rr-cookie-alt",
      title: "Biscuit / Cracker Snack / Wafer",
      description:
        "Crispy snacks for quick, satisfying bites during maritime journeys.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/cakes.jpg",
      iconClass: "fi fi-rr-cake-slice",
      title: "Bread/Cake/Pastry",
      description:
        "Freshly baked essentials, from bread to pastries, for diverse cravings.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/cheese.jpg",
      iconClass: "fi fi-rr-cheese",
      title: "Butter, Cheese",
      description:
        "Dairy delights to enhance flavors in maritime culinary experiences.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/cereal.jpg",
      iconClass: "fi fi-rr-bowl-rice",
      title: "Cereals",
      description:
        "Breakfast essentials for a nutritious start to the day at sea.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    
    {
      imageUrl: "assets/img/provisions/coffee.jpg",
      iconClass: "fi fi-rr-mug-hot-alt",
      title: "Coffee / Cocoa / Tea",
      description:
        "Energizing hot beverages to keep the crew alert and refreshed..",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/dressing.jpg",
      iconClass: "fi fi-rr-pancakes",
      title: "Dressing and Vinegar",
      description: "Condiments to add flavor and zest to maritime meals",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/dairy.jpg",
      iconClass: "fi fi-rr-egg",
      title: "Eggs/Milk/Ice-Cream",
      description:
        "Essential dairy and frozen treats for balanced maritime diets",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/fish.jpg",
      iconClass: "fi fi-rr-fish",
      title: "Fish",
      description:
        "Fresh and frozen fish options for diverse culinary creations.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/pudding.jpg",
      iconClass: "fi fi-rr-custard",
      title: "Food Color / Essence / Pudding/Gelatin",
      description:
        "Culinary enhancements for creative and delightful desserts.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    
    {
      imageUrl: "assets/img/provisions/cake-mix.jpg",
      iconClass: "fi fi-rr-bag-seedling",
      title: "Grains / Cake Mix",
      description:
        "Staple grains and cake mixes for versatile meal preparation",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/jam.jpg",
      iconClass: "fi fi-rr-jam",
      title: "Jam and Marmalade",
      description: "SSweet spreads to accompany breakfast and snacks",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    
    {
      imageUrl: "assets/img/provisions/juice.jpg",
      iconClass: "fi fi-rr-drink-alt",
      title: "Juice",
      description:
        "Refreshing fruit juices to quench thirst on maritime journeys",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/meat.jpg",
      iconClass: "fi fi-rr-meat",
      title: "Meat Products",
      description: "Processed meat products for convenient meal planning.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/oil.jpg",
      iconClass: "fi fi-rr-olive-oil",
      title: "Oil and Fat",
      description: "Cooking essentials to add richness and flavor to dishes",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/pasta.jpg",
      iconClass: "fi fi-rr-bowl-chopsticks-noodles",
      title: "Pasta and Noodle",
      description: "Pasta and noodles for versatile and filling meal options",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/pickles.jpg",
      iconClass: "fi fi-rr-jar-alt",
      title: "Pickles Western & Oriental",
      description: "Tangy pickles to complement Western and Oriental cuisines.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/salt.jpg",
      iconClass: "fi fi-rr-salt-shaker",
      title: "Salt and Sugar",
      description: "Basic kitchen essentials to enhance taste in every dish.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/sauce.jpg",
      iconClass: "fi fi-rr-soup",
      title: "Sauce and Gravy / Sauce Mix",
      description: "Flavorful sauces and gravies to elevate culinary creations",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/seasoning.jpg",
      iconClass: "fi fi-rr-salt-pepper",
      title: "Seasoning and Flavor / Bouillon",
      description: "Culinary enhancers for rich and savory maritime meals.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/soft-drinks.jpg",
      iconClass: "fi fi-rr-cup-straw-swoosh",
      title: "Soft Drinks",
      description:
        "Refreshing beverages for a delightful break during the journey.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/soup-powder.jpg",
      iconClass: "fi fi-rr-bowl-spoon",
      title: "Soup Powder",
      description: "Convenient soup mixes for warm, comforting meals onboard.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/soy-bean.jpg",
      iconClass: "fi fi-rr-coffee-beans",
      title: "Soy Bean Products & Oriental Speciality",
      description:
        "Traditional soy products and Oriental specialties for diverse cuisine",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/spices.jpg",
      iconClass: "fi fi-rr-salt-pepper",
      title: "Spices and Herbs",
      description:
        "Aromatic spices and herbs to infuse flavors into maritime dishes.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/syrup.jpg",
      iconClass: "fi fi-rr-ice-cream",
      title: "Syrup",
      description: "Sweet syrups to enhance beverages and desserts.",
      readMoreLink: "#",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    
  ];

  // medicineDataArray

  var medicineCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/medical-1.jpg",
      iconClass: "fi fi-rr-syringe",
      title: "Dressings and Medical Instruments",
      description:
        "Essential tools for medical care, ensuring on-board health needs.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/medical-3.jpg",
      iconClass: "fi fi-rr-diary-clasp",
      title: "Recommended Medicines - Third Edition",
      description:
        "Updated medications per the latest International Medical Guide for Ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/medical-2.jpg",
      iconClass: "fi fi-rr-stethoscope",
      title: "Medical Stores for UK Merchant Ships",
      description:
        "UK-regulated supplies, ensuring compliance with maritime health standards and regulations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/medical-4.jpg",
      iconClass: "fi fi-rr-capsules",
      title: "Medicines",
      description:
        "Broad range of pharmaceuticals ensuring comprehensive health care at sea.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/medical-5.jpg",
      iconClass: "fi fi-rr-pharmacy",
      title: "MFAG Appendix 14",
      description:
        "Comprehensive list of recommended medicines and medical equipment.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
  ];

  var nauticalCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/nautical-1.jpg",
      iconClass: "fi fi-rr-band-aid",
      title: "Anti-Abrasion Goods",
      description:
        "Durable and protective solutions to combat wear and tear.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-3.jpg",
      iconClass: "fi fi-rr-camera-cctv",
      title: "Anti-Piracy Goods",
      description:
        "Specialized equipment to enhance maritime security and deter piracy.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-2.jpg",
      iconClass: "fi fi-rr-waveform-path",
      title: "Anti-vibration Goods",
      description:
        "Absorbent products reducing vibrations for crew comfort and safety.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-4.jpg",
      iconClass: "fi fi-rr-vest-patches",
      title: "Body Protection",
      description:
        "Comprehensive gear shielding crew members from various workplace hazards.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-5.jpg",
      iconClass: "fi fi-rr-scalpel-path",
      title: "Cut-Resistant Goods",
      description:
        "Robust materials offering protection against cuts and lacerations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-6.jpg",
      iconClass: "fi fi-rr-head-vr",
      title: "Eye Protection",
      description:
        "Safety eyewear ensuring optimal vision and protection at sea.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-7.jpg",
      iconClass: "fi fi-rr-boot",
      title: "Foot Protection",
      description:
        "High-performance footwear safeguarding against maritime work hazards.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/nautical-8.jpg",
      iconClass: "fi fi-rr-user-helmet-safety",
      title: "Head Protection",
      description:
        "Helmets and headgear providing essential protection during maritime activities.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
  ];

  var engineCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/electrical-1.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Hand Lamps",
      description:
        "Portable illumination for versatile use on maritime expeditions.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-2.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Lamp Holders",
      description:
        "Secure fixtures supporting the deployment of various maritime lamps.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "Lamps",
      description:
        "Diverse lighting solutions catering to specific maritime requirements.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Lighting Fixtures",
      description:
        "Robust fixtures ensuring reliable and efficient maritime illumination..",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-4.jpg",
      iconClass: "fi fi-rr-bullhorn",
      title: "Megaphones / Loud Speakers",
      description:
        "Powerful audio equipment for effective communication on the high seas.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-5.jpg",
      iconClass: "fi fi-rr-joystick",
      title: "Pilot Lamps",
      description:
        "Indicator lights signaling vital information for maritime navigation.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-6.jpg",
      iconClass: "fi fi-rr-plug-connection",
      title: "Plug & Receptacles",
      description:
        "Essential electrical connectors ensuring seamless power distribution on vessels.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-8.jpg",
      iconClass: "fi fi-rr-lamp",
      title: "Reflector Lamps",
      description:
        "Lamps designed to enhance and direct light for maritime applications.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-9.jpg",
      iconClass: "fi fi-rr-flux-capacitor",
      title: "Solders",
      description:
        "High-quality materials for secure and durable maritime electrical connections.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-10.jpg",
      iconClass: "fi fi-rr-light-switch",
      title: "Switches",
      description:
        "Reliable control mechanisms for managing electrical systems on board.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-11.jpg",
      iconClass: "fi fi-rr-cash-register",
      title: "Test Instruments",
      description:
        "Precision tools for accurate diagnostics and maintenance of maritime systems.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-12.jpg",
      iconClass: "fi fi-rr-washer",
      title: "Ultrasonic Parts Cleaners",
      description:
        "Advanced equipment for efficient cleaning of maritime machinery components.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/electrical-13.jpg",
      iconClass: "fi fi-rr-light-emergency-on",
      title: "Warning Lights",
      description:
        "High-visibility lights signaling potential hazards for enhanced maritime safety.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
  ];
  var cottonCharcoalCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/cotton-2.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Maritime Cleaning Cloths",
      description:
        "Robust cotton cloths engineered for effective and durable maritime cleaning.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-1.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Maritime Cotton Towels",
      description:
        "High-absorbency towels crafted for maritime hygiene and cleaning applications.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "Charcoal-infused Maritime Bedding",
      description:
        "Bedding with charcoal for freshness and comfort in maritime living spaces.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-5.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Bed Accessories",
      description:
        "Versatile accessories enhancing comfort and functionality in maritime cabins.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Laundry Accessories",
      description:
        "Essential tools and supplies for efficient maritime laundry operations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-6.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Cook & Steward Wear",
      description:
        "Maritime clothing designed for comfort and safety in kitchen environments.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/cotton-8.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Curtains",
      description:
        "Elegant curtains adding privacy and aesthetic appeal to maritime interiors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];
  // spare card

  var spareCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/spare-item-2.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Butt Hinges",
      description:
        " Sturdy hinges for reliable and smooth door movements on ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-1.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Cabinet Door Accessories",
      description:
        "Essential hardware enhancing functionality and aesthetics of cabinet doors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "Card Holders",
      description:
        "Secure holders for organized storage of identification cards on board.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-4.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Curtain Rails and Accessories",
      description:
        "Versatile rails and accessories ensuring efficient and stylish curtain installations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-5.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Drip Pans",
      description:
        "Durable pans to contain and manage liquid spills in maritime environments.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-6.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Grab Rails",
      description:
        "Safety-enhancing rails providing support and stability in ship interiors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Holders and Racks",
      description:
        "Organizational solutions for secure storage of items on maritime vessels.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Hooks and Fasteners",
      description:
        "Reliable hooks and fasteners for securing items in various ship spaces.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-9.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Lock Sets",
      description:
        "Complete sets offering secure and efficient locking solutions for maritime doors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-10.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Padlocks and Door Fastening Items",
      description:
        "Essential padlocks and fastening items ensuring door security on ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-11.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Peep Glass",
      description:
        "Small windows for discreet observation, enhancing security on vessels.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/spare-item-12.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Push Latches and Locks",
      description:
        "Convenient latches and locks for efficient and secure closure in maritime interiors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];
  
  // Stationery

  var stationeryCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/stationery-item-1.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Calculators",
      description:
        "Efficient maritime calculators for precise computations and navigational tasks.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-2.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Cameras",
      description:
        "High-quality cameras capturing moments and ensuring maritime security.ware enhancing functionality and aesthetics of cabinet doors.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "Chairs",
      description:
        "Comfortable and sturdy chairs for ergonomic seating on maritime vessels.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-4.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Computer and Ancillary Items",
      description:
        "Essential computer accessories for seamless operations on maritime computers.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-5.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Copy Machines",
      description:
        "Reliable copy machines facilitating document duplication in maritime settings.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-6.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Desk Accessories",
      description:
        "Organizational accessories enhancing workspace efficiency on ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Drawing Instruments / Rules",
      description:
        "Precision drawing instruments and rules for accurate maritime charting.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-8.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Erasers",
      description:
        "Durable erasers for precise corrections on maritime documents.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-9.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Files/Paper Holders / Trays",
      description:
        "Organizational solutions for efficient paper management on ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-10.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Filing Cabinets",
      description:
        "Secure filing cabinets for organized storage of maritime documents.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-11.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Glue / Paper Fastening Goods",
      description:
        "Quality glue and fastening supplies for secure document attachment.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-12.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Name Card Holders",
      description:
        "Professional holders for organized storage and display of maritime name cards.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/stationery-item-13.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Notebooks/Memo Pads",
      description:
        "High-quality notebooks and memo pads for efficient note-taking on board.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];

  // machinery and welding
  var machineryCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/machinery-item-1.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Air Vent Heads",
      description:
        "Efficient air vent heads for optimal ventilation in ship compartments.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-2.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Anti-splashing Tape for Ship's Engine Room",
      description:
        "Protective tape preventing splashing in the ship's engine room.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "DIN Mud Boxes",
      description:
        "Mud boxes designed to DIN standards for effective filtration on ships.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-4.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "DIN Strainers",
      description:
        "Quality DIN strainers ensuring reliable fluid filtration in maritime systems.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-5.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Emergency Shut-off Valves",
      description:
        "Crucial valves for prompt emergency shutdowns in maritime situations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-6.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Engine Starter Motor",
      description:
        "Powerful starter motors ensuring reliable ignition for ship engines.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Automatic Reverse Flow Prevention Couplings",
      description:
        "Couplings preventing reverse flow automatically for safe maritime operations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-8.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Electric Welding Equipment",
      description:
        "Cutting-edge electric welding equipment for precise and robust welds.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-9.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Electrode for Cast Iron",
      description:
        "Specialized electrodes for effective welding of cast iron components.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-10.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Electrode for High Tensile Strength Steel",
      description:
        "Welding electrodes designed for robust joints in high-strength steel.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/machinery-item-11.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Electrode for Stainless Steel",
      description:
        "Quality electrodes ensuring strong welds in maritime stainless steel applications.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];

  // ropes and hawsers

  var ropesCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/rope-item-1.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "8 strand Wire Rope",
      description:
        "Robust 8-strand wire rope for reliable strength and durability at sea.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-2.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Cable Grips",
      description:
        "Grips ensuring secure cable connections and stability in maritime settings.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "Guy Preventers & Stoppers",
      description:
        "Preventers and stoppers enhancing safety in maritime guy-wire applications.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-4.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Mooring Links & Shackles",
      description:
        "Links and shackles designed for secure and efficient mooring operations.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-5.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Slings",
      description:
        "Versatile slings providing flexible and secure cargo handling solutions.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-6.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Non-rotating Wire Rope",
      description:
        "Non-rotating wire rope for stable and controlled lifting applications at sea.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-7.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Special Quality Wire Rope",
      description:
        "High-quality wire rope designed for specialized and demanding maritime tasks.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-8.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Stainless Steel Wire Rope",
      description:
        "Corrosion-resistant stainless steel wire rope for maritime durability and strength.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-9.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Steel Wire Rope",
      description:
        "General-purpose steel wire rope for a wide range of maritime applications.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-10.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Synthetic Miscellaneous Rope",
      description:
        "Durable synthetic ropes offering versatile solutions for various maritime needs.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/rope-item-11.jpg",
      iconClass: "fi fi-rr-lights-holiday",
      title: "Synthetic Mooring Rope",
      description:
        "Synthetic mooring rope providing strength and flexibility for secure mooring.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];

  // hose and couplings

  var hoseCardDataArray = [
    {
      imageUrl: "assets/img/shipstores/hose-item-1.jpg",
      iconClass: "fi fi-rr-lightbulb-on",
      title: "Hose Couplings",
      description:
        "Robust couplings ensuring secure and efficient fluid connections at sea..",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/hose-item-2.jpg",
      iconClass: "fi fi-rr-candle-holder",
      title: "Hose Nozzles",
      description:
        "Precision-designed nozzles for controlled and effective fluid dispensing on vessels.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/shipstores/hose-item-3.jpg",
      iconClass: "fi fi-rr-lamp-floor",
      title: "GRubber Hose / P.V.C. Hose",
      description:
        "Durable rubber and P.V.C. hoses for versatile and reliable fluid transport.",
      readMoreLink: "contact.html",
      readMoreText: "Get Supply",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },

  ];

// brush and paint


var paintCardDataArray = [
  {
    imageUrl: "assets/img/shipstores/paint-item-1.jpg",
    iconClass: "fi fi-rr-lightbulb-on",
    title: "Brooms / Carpet Brushes",
    description:
      "Versatile brooms and carpet brushes for effective cleaning on maritime vessels.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-2.jpg",
    iconClass: "fi fi-rr-candle-holder",
    title: "Floor Brushes / Hand Brushes",
    description:
      "Durable floor and hand brushes designed for efficient maritime cleaning tasks.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-3.jpg",
    iconClass: "fi fi-rr-lamp-floor",
    title: "Paint Brushes / Paint Rollers",
    description:
      "Professional-grade paint brushes and rollers for precise and even coatings.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-4.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Tube Brushes / Cup Brushes",
    description:
      "Specialized tube and cup brushes for intricate and thorough cleaning in vessels.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-5.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Vikan Brushes",
    description:
      "Vikan brushes, known for quality and efficiency in maintaining maritime cleanliness.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-6.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Paste Paint",
    description:
      "Thick and adhesive paste paint for durable and protective coatings.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-7.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Putty",
    description:
      "Versatile putty for filling gaps and ensuring a smooth, even surface.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-8.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Reflecting Paint",
    description:
      "Paint designed with reflective properties for enhanced visibility and safety..",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Bituminous Paint",
    description:
      "Weather-resistant bituminous paint providing long-lasting protection to surfaces.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-10.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Remover",
    description:
      "Powerful remover for efficient stripping and cleaning of painted surfaces.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-11.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Spray Marking Paint",
    description:
      "Convenient spray marking paint for clear and visible markings on maritime surfaces..",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-12.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Stain",
    description:
      "Stain for enhancing and protecting wood surfaces on maritime vessels..",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-13.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Thinner",
    description:
      "Thinner for adjusting viscosity and facilitating smooth paint application.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-14.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Heat Resistant Paint",
    description:
      "Specially formulated paint resisting high temperatures for engine rooms and machinery.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-15.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Non-Slip Paint",
    description:
      "Slip-resistant paint ensuring safety on decks and high-traffic maritime areas.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },

];


// cleaning and chemicals

var cleaningCardDataArray = [
  {
    imageUrl: "assets/img/shipstores/clean-item-1.jpg",
    iconClass: "fi fi-rr-lightbulb-on",
    title: "Common Chemicals",
    description:
      "Versatile chemicals for various maritime cleaning and maintenance applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-2.jpg",
    iconClass: "fi fi-rr-candle-holder",
    title: "Distilled Water",
    description:
      "Purity in every drop - distilled water for essential maritime applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-3.jpg",
    iconClass: "fi fi-rr-lamp-floor",
    title: "Floor Maintenance Products",
    description:
      "Specialized products ensuring the longevity and cleanliness of maritime floors.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-4.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Galley Cleaning Detergent",
    description:
      "Powerful detergent tailored for efficient cleaning in maritime galley areas.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-5.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Hand Cleaning Soap and Detergent",
    description:
      "Gentle yet effective soaps and detergents for superior hand hygiene onboard.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-6.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Laundry Soap and Detergent",
    description:
      "Quality laundry soap and detergent for pristine maritime garment care.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-7.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Marine Maintenance Chemicals",
    description:
      "Advanced chemicals for preserving and enhancing the performance of marine equipment.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-8.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Misc. Cleaner and Polish Goods",
    description:
      "Diverse cleaners and polishes for maintaining the shine and cleanliness of various surfaces.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/clean-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Sanitary Items",
    description:
      "Essential items ensuring maritime spaces meet the highest standards of hygiene and sanitation.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },

];


// hand tools and cutting  tools


var toolsCardDataArray = [
  {
    imageUrl: "assets/img/shipstores/paint-item-1.jpg",
    iconClass: "fi fi-rr-lightbulb-on",
    title: "Anvils/Blacksmiths' Tongs",
    description:
      "Sturdy forging base, essential for blacksmithing; Tongs for secure grip.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-2.jpg",
    iconClass: "fi fi-rr-candle-holder",
    title: "Auger Bits/Gimlets",
    description:
      "Precision wood-boring tools; Gimlets for hand-drilled finesse.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-3.jpg",
    iconClass: "fi fi-rr-lamp-floor",
    title: "Bahco Tools",
    description:
      "Quality hand tools by Bahco; durability and precision in every piece.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-4.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Bars/Nail Pullers",
    description:
      "Robust nail extracting tools; Bars for heavy-duty prying.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-5.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Bolt & Nut Loosener",
    description:
      "Efficient wrench for stubborn bolts and nuts; Loosens with ease.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-6.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Carborundum Paste",
    description:
      "Abrasive paste for sharpening tools; Maintains cutting precision.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-7.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Chisels",
    description:
      "Versatile cutting tools; Chisels for carving and shaping materials. ",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-8.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Cutters/Shears",
    description:
      "Precision cutting instruments; Shears for clean, efficient cuts.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Drum Hooks/Lifting Clamps",
    description:
      "Heavy-duty lifting solutions; Drum hooks and clamps for secure handling.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Drum Opening Spanners/Drum Cocks",
    description:
      "Specialized wrenches for drum access; Cocks for controlled liquid release.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Carbide Rotary Burs",
    description:
      "High-speed material removal; Carbide burs for precision shaping.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Drill Machine Attachments/Drills",
    description:
      "Enhance drill functionality; Drills and attachments for diverse applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Hole Saws",
    description:
      "Efficiently cut large holes in various materials; Ideal for construction.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Lathe Machine Attachments/Reamers",
    description:
      "Expand lathe capabilities, Reamers for smooth, accurate hole finishing.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Screw Extractors/Taps/Dies",
    description:
      "Essential for thread repair, Screw extractors, taps, and dies for versatility.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },


];

// packing card

var packingCardDataArray = [
  {
    imageUrl: "assets/img/shipstores/paint-item-1.jpg",
    iconClass: "fi fi-rr-lightbulb-on",
    title: "Aluminium Tapes",
    description:
      "Versatile adhesive tapes with aluminum backing for durable sealing applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-2.jpg",
    iconClass: "fi fi-rr-candle-holder",
    title: "Anticorrosive Tapes",
    description:
      "Tapes designed to protect surfaces from corrosion, ensuring long-lasting durability.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-3.jpg",
    iconClass: "fi fi-rr-lamp-floor",
    title: "Brake Linings",
    description:
      "Critical friction materials for dependable and efficient braking systems.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-4.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Carbon Cloth Gloves",
    description:
      "Protective gloves with carbon cloth for heat resistance and tactile sensitivity.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-5.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Carbonized Fibre Spinning & Textile",
    description:
      "Textile products crafted from carbonized fibers for enhanced strength and resilience.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-6.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Ceramic Spinning & Textile",
    description:
      "Textile materials spun from ceramics, offering heat resistance and durability.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-7.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Door Packings",
    description:
      "Sealing solutions for doors; packings to prevent leakage and ensure insulation.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-8.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Emergency Repair Patch & Tape",
    description:
      "PQuick-fix solutions for temporary repairs; patches and tapes for emergencies.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Filter Materials",
    description:
      "High-quality materials for effective filtration in various industrial applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Gasket Removers",
    description:
      "Efficient agents to remove gaskets and adhesives for maintenance purposes.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Gaskets/Joint Sheets",
    description:
      "Durable gaskets and joint sheets for reliable sealing in diverse applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Gauge Glass Materials",
    description:
      "Materials for transparent gauge glasses, crucial for fluid level monitoring.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Glass Fibre Spinning & Textile",
    description:
      "Textile products derived from glass fibers for strength and insulation",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Heat Insulation Pipe Covers",
    description:
      "Protective covers for pipes, providing insulation against heat and cold.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Non-combustible Divisions",
    description:
      "Dividing materials resistant to combustion, ensuring fire safety in structures.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "O Rings/Copper Rings",
    description:
      "Essential sealing components; O rings and copper rings for various applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "PTFE Rings",
    description:
      "Polytetrafluoroethylene rings for superior chemical resistance and sealing.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Packings",
    description:
      "Diverse packing materials for sealing and insulation in industrial settings.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-1.jpg",
    iconClass: "fi fi-rr-lightbulb-on",
    title: "Porthole Glasses",
    description:
      "Transparent and durable glasses for portholes, ensuring visibility in marine applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-2.jpg",
    iconClass: "fi fi-rr-candle-holder",
    title: "Resin Based Maintenance Products - Belzona",
    description:
      "High-performance resin-based maintenance solutions by Belzona for industrial repairs.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-3.jpg",
    iconClass: "fi fi-rr-lamp-floor",
    title: "Resin Based Maintenance Products - Cordobond:",
    description:
      "Cordobond products offer reliable resin-based solutions for maintenance tasks.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-4.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Devcon",
    description:
      "Devcon provides effective resin-based maintenance products for industrial applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-5.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Diamant",
    description:
      "Diamant offers durable resin-based maintenance solutions for various industries.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-6.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Enecon",
    description:
      "Enecon provides advanced resin-based maintenance products for industrial repairs.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-7.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Loctite",
    description:
      "Loctite's resin-based maintenance products ensure strong and lasting repairs.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-8.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Weicon",
    description:
      "Weicon provides quality resin-based maintenance products for diverse applications.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Resin Based Maintenance Products - Wencon",
    description:
      "Wencon offers effective resin-based maintenance solutions for industrial maintenance",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Sealing & Bonding Items",
    description:
      "Comprehensive items for sealing and bonding applications in various industries.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Carbide Rotary Burs",
    description:
      "High-speed material removal; Carbide burs for precision shaping.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Seals",
    description:
      "Critical components for preventing leakage and ensuring airtight or watertight seals.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
  {
    imageUrl: "assets/img/shipstores/paint-item-9.jpg",
    iconClass: "fi fi-rr-lights-holiday",
    title: "Teflon Products",
    description:
      "Products featuring Teflon for non-stick properties and resistance to high temperatures.",
    readMoreLink: "contact.html",
    readMoreText: "Get Supply",
    arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
    contactLink: "contact.html",
  },
];

  function populateCards(dataArray, containerId) {
    var cardsContainer = document.querySelector(`#`+ containerId);
    console.log(cardsContainer, containerId)
    console.log(dataArray)
    if(cardsContainer !== null){
      var cardHtmlArray = dataArray.map((data)=> {
        return `
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="tp-services-3__item p-relative mb-30 z-index-2 wow fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div class="tp-services-3__thumb p-relative">
                <img class="w-100" loading="lazy" src="${data.imageUrl}" alt="">
              </div>
              <div class="tp-services-3__wrap d-flex align-items-start">
                <div class="tp-services-3__icon">
                  <span><i class="fa ${data.iconClass}"></i></span>
                </div>
                <div class="tp-services-3__content">
                  <h3 class="tp-services-3-title-3">
                    <a href="${data.readMoreLink}">${data.title}</a>
                  </h3>
                  <p>${data.description}</p>
                  <div class="tp-services-3__btn">
                    <a class="tp-services-btn" href="${data.contactLink}">
                      ${data.readMoreText}<i class="${data.arrowIconClass}"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
  
      cardsContainer.innerHTML = cardHtmlArray.join(" ");
      console.log(cardHtmlArray.join(" "))
    }
  }

  populateCards(cardDataArray, "provision-card");
  populateCards(medicineCardDataArray, "medical-card");
  populateCards(nauticalCardDataArray, "nautical-card");
  populateCards(engineCardDataArray, "electrical-card");
  populateCards(cottonCharcoalCardDataArray, "cotton-charcoal-card");
  populateCards(spareCardDataArray, "spare-card");
  populateCards(stationeryCardDataArray, "stationery-card");
  populateCards(machineryCardDataArray, "machinery-card");
  populateCards(ropesCardDataArray, "rope-card");
  populateCards(hoseCardDataArray, "hose-card");
  populateCards(paintCardDataArray, "paint-card");
  populateCards(cleaningCardDataArray, "cleaning-card");
  populateCards(toolsCardDataArray, "tools-card");
  populateCards(packingCardDataArray, "packing-card");



});
