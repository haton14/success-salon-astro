import React from 'react';
import styles from './Card.module.css';

interface Props {
  title: string;
  body: string;
  href: string;
}

const Card: React.FC<Props> = ({ href, title, body }) => {
  return (
    <li className={styles.linkCard}>
      <a href={href}>
        <h3>
          {title}
          <span>&emsp;&#12297;</span>
        </h3>
        <p className={styles.text}>{body}</p>
      </a>
    </li>
  );
};

export default Card;
