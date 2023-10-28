import React from 'react';
import './Footer.css';

function FooterProp({ UppLinks, nameClass1, Links, nameClass2 }) {
  return (
    <>
      {Links && (
        <ul className={nameClass2}>
          {Links.map((link) => (
            <li key={link.title}>
              <a href={link.url}>
                <strong>{link.title}</strong>
                <br /> {link.description}
              </a>
            </li>
          ))}
        </ul>
      )}

      {UppLinks && (
        <ul className={nameClass1}>
          {UppLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FooterProp;