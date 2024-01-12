document.addEventListener("DOMContentLoaded", function () {
  // provision and health care
  var cardDataArray = [
    {
      imageUrl: "assets/img/provisions/bond.jpg",
      iconClass: "fi fi-rr-bottle",
      title: "Bond supplies",
      description:
        "Spirits and libations for onboard relaxation and enjoyment.",
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
      imageUrl: "assets/img/provisions/cigarettes.jpg",
      iconClass: "fi fi-rr-smoking",
      title: "Cigarettes & Tobaccoes",
      description: "A selection of tobacco products for crew preferences.",
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
      imageUrl: "assets/img/provisions/j-cigarettes.jpg",
      iconClass: "fi fi-rr-smoking",
      title: "Japanese Cigarettes & Tobaccoes",
      description: "Imported Japanese tobacco products for varied preferences.",
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
    {
      imageUrl: "assets/img/provisions/vegetables.jpg",
      iconClass: "fi fi-rr-carrot",
      title: "Vegetables",
      description:
        "Fresh and canned vegetables for balanced and nutritious meals",
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
      imageUrl: "assets/img/shipstores/spare-item-5.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-7.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
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
      imageUrl: "assets/img/shipstores/spare-item-8.jpg",
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
                <img class="w-100" src="${data.imageUrl}" alt="">
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


});
