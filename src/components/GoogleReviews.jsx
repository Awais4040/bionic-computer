'use client';

import React, { useState } from 'react';
import { FiStar, FiExternalLink } from 'react-icons/fi';

export default function GoogleReviews() {
  const [reviews] = useState([
    {
      id: 1,
      author: 'Muneeba Ahmed',
      title: 'Business Owner',
      rating: 5,
      text: 'Implemented their services in my office & we don\'t feel any need of IT department after then. From networking to camera installations, they never let us disappoint. Staff is very cooperative and professional.',
      date: '2 months ago',
      verified: true,
    },
    {
      id: 2,
      author: 'Mamoona Tahir',
      title: 'Freelancer',
      rating: 5,
      text: 'Excellent Service & Affordable Prices! The technician was incredibly humble, helpful, and professional. The service was smooth, efficient, and honest.',
      date: '3 months ago',
      verified: true,
    },
    {
      id: 3,
      author: 'Khair un Nisa Kashan',
      title: 'Student',
      rating: 5,
      text: 'Great experience at Bionic Computer today. The work was done really well and the service was quick. Highly recommended!',
      date: '1 month ago',
      verified: true,
    },
    {
      id: 4,
      author: 'Syed Saif',
      title: 'Freelancer',
      rating: 5,
      text: 'I\'ve visited several computer shops, but this one truly stood out. Staff were incredibly professional. Got my laptop repaired urgently at a fair price. 10/10',
      date: '3 weeks ago',
      verified: true,
    },
  ]);

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">See what our clients say about our services</p>
        </div>

        {/* Rating Summary */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <StarRating rating={5} />
              <p className="text-gray-600 mt-2 font-semibold">{totalReviews} Reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="md:col-span-2">
              <p className="text-gray-700 font-semibold mb-4">
                Trusted by {totalReviews}+ satisfied customers across Karachi
              </p>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-8">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-yellow-400 h-full"
                        style={{
                          width: `${stars === 5 ? 100 : stars === 4 ? 20 : 0}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{stars === 5 ? '100%' : '0%'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Individual Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Review Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-dark text-lg">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
                <p className="text-xs text-gray-500 mt-2">{review.date}</p>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Share Your Experience</h3>
          <p className="text-lg text-blue-100 mb-8">
            Have you worked with us? Leave a review on our Google Business Profile
          </p>
          <a
            href="https://share.google/daR3L0R8wJOqwVeF5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg transition"
          >
            <FiExternalLink /> Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
