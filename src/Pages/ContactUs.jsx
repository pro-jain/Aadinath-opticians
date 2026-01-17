import React from 'react'
import './CSS/ContactUs.css'

const MAP_CENTER = {lat: 25.149831, lng: 75.854253
}
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_CENTER.lat},${MAP_CENTER.lng}`
const SUPPORT_EMAIL = 'jainashish74@yahoo.com'
const WHATSAPP_NUMBER = '+91 8290440216'
const WHATSAPP_URL = 'https://wa.me/918290440216'

const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="contact-card">
          <p className="eyebrow">We are here to help</p>
          <h1>Contact Us</h1>
          <p className="lede">
            Visit our store, drop us an email, or ping us on WhatsApp. We respond quickly during business hours.
          </p>

          <div className="contact-details">
            <div>
              <span className="label">Store</span>
              <p>Aadinath Opticians, 1-N-22, Vigyan Nagar Kota, Rajasthan</p>
            </div>
            <div>
              <span className="label">Email</span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="link">{SUPPORT_EMAIL}</a>
            </div>
            <div>
              <span className="label">WhatsApp</span>
              <a href={WHATSAPP_URL} className="link" target="_blank" rel="noreferrer">
                {WHATSAPP_NUMBER}
              </a>
            </div>
            <div>
              <span className="label">Hours</span>
              <p>Everyday, 08:00 AM - 10:00 AM & 6:00 PM - 10:00 PM</p>
            </div>
          </div>

          <div className="actions">
            <a className="btn primary" href={`mailto:${SUPPORT_EMAIL}`}>Email Us</a>
            <a className="btn ghost" href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Store location"
            className="map-embed"
            src="https://maps.google.com/maps?q=25.149831,75.854253&z=16&output=embed"
            width="100%"
            height="380"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
