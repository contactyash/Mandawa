import React from 'react';
import { ExtendStyles } from '../css/StyledCarousal'
import Layout from '../components/Layout'
const Hotels = props => {
  return (
    <Layout fullWidth>
      <ExtendStyles>
        <div className="prev button">
        </div>
        <div className="imageDiv">
          <h1>Services</h1>
          <p>
            Our services include complete travel arrangements including airline/train ticketing, hotel accommodation, guide services and car rental reservations. We organize tours, sightseeing trips, all within your specific budget. We also handle Events and Conferences. These finer details are not often revealed to the international traveler since they do not feature in the usual standardized tour itineraries. We specialize in Special Interest & Package Tours including Art and History Study Tours, Adventure and Wildlife Tours, Yoga & Spiritual Pilgrimage Tours amongst other customized tours.
          </p>
          <h2>Transportation</h2>
          <p>At Mandawa Heritage Tours we take pride in being among the top good transporters in the region of shekhawati with a large range of vehicles. The range of transport options available are Toyota Etios cars, Toyota Innova, Toyota Innova Crysta, Deluxe Mini coaches and Deluxe Large coaches. </p>
          <h2>Guide Arrangements</h2>
          <p>We at Mandawa Heritage Tours help you with guides and tour escorts. We have senior guides and escorts on our panel who have thorough knowledge of Shekhawati and its culture, they can enlighten you with facts and data that are rarely found in the history books.
A heritage monument is as good as its described by the guide, hence its very important to have a qualified guide who can enrich your experience by providing beautiful insights about the place of visit.
Guide services are available in all popular languages spoken in the world.
</p>
          <h2>Hotel Bookings
</h2>
          <p>
            Most important part of your trip is the place where you stay. We at Mandawa Heritage Tours provide you with a selection of all categories of hotels and homestays. For every hotel or homestay that we list, we deny many others on the basis of our own review. It is only after a personal visit that we even consider a place for your stay; this ensures you get only the gems from our treasured finds. We select these places on the basis of accommodation, services, affordability vis a vis the services, congeniality of hosts and the experience that it would add to your trip.
</p>
        </div>
        <div className="next button">
        </div>
      </ExtendStyles>
    </Layout>
  );
};

export default Hotels;