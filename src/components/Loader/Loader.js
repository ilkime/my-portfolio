import React, { useEffect } from 'react';
import './Loader.css'; // Import the CSS file
import TypeIt from 'typeit';
const Loader = () => {
  useEffect(() => {
    const instance = new TypeIt('#codeit', {
      speed: 150,
      startDelay: 900,
      loop: true,
      afterComplete: (instance) => {
        document.querySelector('.loader').style.display = 'none';
      },
    })
      .type('<em class="c-braces" style="margin-right: 6px;">{{</em><em class="c-braces">}}</em>')
      .pause(500)
      .delete(2)
      .pause(300)
      .type('<em>CODE</em>')
      .pause(750)
      .delete(1)
      .pause(750)
      .type('<em>ONIST</em><em class="c-braces">}}</em>')
      .pause(1500)
      .go();

    return () => {
      instance.destroy(); // Clean up the TypeIt instance
    };
  }, []);

  return (
    <div className="loader">
      <h1 id="codeit"></h1>
    </div>
  );
};

export default Loader;
