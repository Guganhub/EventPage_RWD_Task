
    // Sample event data 
    var events = [
      {
        name: "Event 1",
        time: "June 20, 2023 18:00",
        seatsAvailable: 10,
        imageUrl: "https://img.freepik.com/free-vector/futurist-poster-template_1361-1317.jpg?size=626&ext=jpg&ga=GA1.2.2013832574.1686734068&semt=ais"
      },
      {
        name: "Event 2",
        time: "June 25, 2023 19:30",
        seatsAvailable: 5,
        imageUrl: "https://img.freepik.com/free-vector/watercolor-holi-twitch-background_23-2149273008.jpg?size=626&ext=jpg&ga=GA1.2.2013832574.1686734068&semt=ais"
      },
      {
        name: "Event 3",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg"
      },
      {
      name: "Event 4",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/grand-opening_52683-8448.jpg?size=626&ext=jpg&ga=GA1.2.2013832574.1686734068&semt=ais"
      },
      {
      name: "Event 5",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/premium-vector/music-event-invitation-banner_1302-21408.jpg?size=626&ext=jpg&ga=GA1.1.2013832574.1686734068&semt=ais"
      },
      {
      name: "Event 6",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/modern-event-banner-template-with-degrade-background_1361-2219.jpg?size=626&ext=jpg&ga=GA1.1.2013832574.1686734068&semt=ais"
      },
      {
      name: "Event 7",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/technology-conference-poster-template_1361-1211.jpg?size=626&ext=jpg&ga=GA1.2.2013832574.1686734068&semt=ais"
      },
      {
      name: "Event 8",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/gradient-music-festival-twitch-background_23-2149076043.jpg?size=626&ext=jpg&ga=GA1.1.2013832574.1686734068&semt=ais"
      },
      {
      name: "Event 9",
        time: "July 5, 2023 16:45",
        seatsAvailable: 15,
        imageUrl: "https://img.freepik.com/free-vector/tv-show-bright-colorful-background_1284-48189.jpg?size=626&ext=jpg&ga=GA1.2.2013832574.1686734068&semt=ais"
      }
    ];

    // Function to generate event cards
    function generateEventCards() {
      var eventList = document.getElementById("eventList");

      events.forEach(function(event) {
        var card = document.createElement("div");
        card.classList.add("card");

        var image = document.createElement("img");
        image.src = event.imageUrl;
        image.classList.add("card-img-top");

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        var eventName = document.createElement("h5");
        eventName.classList.add("card-title");
        eventName.textContent = event.name;

        var eventTime = document.createElement("p");
        eventTime.classList.add("card-text");
        eventTime.textContent = "Time: " + event.time;

        var seatsAvailable = document.createElement("p");
        seatsAvailable.classList.add("card-text");
        seatsAvailable.textContent = "Seats Available: " + event.seatsAvailable;

        var bookNowButton = document.createElement("a");
        bookNowButton.href = "#"; 
        bookNowButton.classList.add("btn", "btn-primary");
        bookNowButton.textContent = "Book Now";

        cardBody.appendChild(eventName);
        cardBody.appendChild(eventTime);
        cardBody.appendChild(seatsAvailable);
        cardBody.appendChild(bookNowButton);
        card.appendChild(image);
        card.appendChild(cardBody);
        eventList.appendChild(card);
      });
    }

    // Call the function to generate event cards
    generateEventCards();
 