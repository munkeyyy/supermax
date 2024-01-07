document.addEventListener("DOMContentLoaded", function () {
  var cardDataArray = [
    {
      imageUrl: "assets/img/provisions/bond.jpg",
      iconClass: "fi fi-rr-bottle",
      title: "Bond supplies",
      description:
        "Spirits and libations for onboard relaxation and enjoyment.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/beans.jpg",
      iconClass: "fi fi-rr-peapod",
      title: "Beans and Peas, Dry",
      description: "Nutrient-rich legumes, a staple for hearty meals at sea.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/cigarettes.jpg",
      iconClass: "fi fi-rr-smoking",
      title: "Cigarettes & Tobaccoes",
      description: "A selection of tobacco products for crew preferences.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/dressing.jpg",
      iconClass: "fi fi-rr-pancakes",
      title: "Dressing and Vinegar",
      description: "Condiments to add flavor and zest to maritime meals",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/dairy.jpg",
      iconClass: "fi fi-rr-egg",
      title: "Eggs/Milk/Yogurt/Ice Cream",
      description:
        "Essential dairy and frozen treats for balanced maritime diets",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/fruits.jpg",
      iconClass: "fi fi-rr-strawberry",
      title: "Fruits",
      description: "Fresh, juicy fruits to add a burst of vitamins to meals.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/jam.jpg",
      iconClass: "fi fi-rr-jam",
      title: "Jam and Marmalade",
      description: "SSweet spreads to accompany breakfast and snacks",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/j-cigarettes.jpg",
      iconClass: "fi fi-rr-smoking",
      title: "Japanese Cigarettes & Tobaccoes",
      description: "Imported Japanese tobacco products for varied preferences.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/meat.jpg",
      iconClass: "fi fi-rr-meat",
      title: "Meat Products",
      description: "Processed meat products for convenient meal planning.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/oil.jpg",
      iconClass: "fi fi-rr-olive-oil",
      title: "Oil and Fat",
      description: "Cooking essentials to add richness and flavor to dishes",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/pasta.jpg",
      iconClass: "fi fi-rr-bowl-chopsticks-noodles",
      title: "Pasta and Noodle",
      description: "Pasta and noodles for versatile and filling meal options",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/pickles.jpg",
      iconClass: "fi fi-rr-jar-alt",
      title: "Pickles Western & Oriental",
      description: "Tangy pickles to complement Western and Oriental cuisines.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/salt.jpg",
      iconClass: "fi fi-rr-salt-shaker",
      title: "Salt and Sugar",
      description: "Basic kitchen essentials to enhance taste in every dish.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/sauce.jpg",
      iconClass: "fi fi-rr-soup",
      title: "Sauce and Gravy / Sauce Mix",
      description: "Flavorful sauces and gravies to elevate culinary creations",
      readMoreLink: "#",
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/seasoning.jpg",
      iconClass: "fi fi-rr-salt-pepper",
      title: "Seasoning and Flavor / Bouillon",
      description: "Culinary enhancers for rich and savory maritime meals.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/soup-powder.jpg",
      iconClass: "fi fi-rr-bowl-spoon",
      title: "Soup Powder",
      description: "Convenient soup mixes for warm, comforting meals onboard.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
    {
      imageUrl: "assets/img/provisions/syrup.jpg",
      iconClass: "fi fi-rr-ice-cream",
      title: "Syrup",
      description: "Sweet syrups to enhance beverages and desserts.",
      readMoreLink: "#",
      readMoreText: "Get Provision",
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
      readMoreText: "Get Provision",
      arrowIconClass: "fa-sharp fa-regular fa-arrow-right",
      contactLink: "contact.html",
    },
  ];

  function populateCards(dataArray) {
    var provisionCardsContainer = document.querySelector("#provision_card");

    var cardHtmlArray = dataArray.map(function (data) {
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

    provisionCardsContainer.innerHTML = cardHtmlArray.join(" ");
  }

  populateCards(cardDataArray);
});
