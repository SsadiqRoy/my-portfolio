'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

function CareerCards() {
  const [openId, setOpenId] = useState('front');

  return (
    <>
      <CareerCard title="Front-End development" openId={openId} setOpenId={setOpenId} id="front">
        I build modern, scalable user interfaces with <strong>React, Javascript, HTML, CSS, NextJs</strong>,
        implementing responsive layouts, interactive elements and functionality to web applications ensuring great looks
        and a seamless user experience across devices.
      </CareerCard>

      <CareerCard title="back-End development" openId={openId} setOpenId={setOpenId} id="back">
        I focus on building robust, efficient and scalale server-side applications and <strong>RESTful APIs </strong>
        that power seamless and high performance web expreience with <strong>NodeJs, Express, Mongodb</strong> and
        <strong> SQL</strong>.
      </CareerCard>

      <CareerCard title="UI/UX designing" openId={openId} setOpenId={setOpenId} id="ui/ux">
        I transform complex ideas into seamless user experience, creating flows that guide users effortlessly through
        your product enhancing usability and satisfaction. <br /> <br />I creatively design clean, visually appealing
        modern interfaces with harmonious and great looks.
      </CareerCard>
    </>
  );
}

export default CareerCards;

/*




*/

function CareerCard({ children, title, openId, setOpenId, id }) {
  const open = openId === id ? 'career-card--open' : '';

  return (
    <div className={`career-card ${open}`}>
      <h3>
        <span>{title}</span>
        <span className="open-btn" onClick={() => setOpenId(id)}>
          {open && <FaChevronUp />}
          {!open && <FaChevronDown />}
        </span>
      </h3>

      <div className="career-card-copy">
        <p>{children}</p>
      </div>
    </div>
  );
}
