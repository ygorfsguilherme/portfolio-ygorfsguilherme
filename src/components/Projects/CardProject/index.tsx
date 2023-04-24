
import { faChevronUp, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardProject.css'

interface Props {
  image: string;
  github_link: string;
  title: string;
  description: string; 
}

export function CardProject(
  {
    image,
    github_link,
    title,
    description 
  }:Props
  ) {

  return (
    <div className="card__project">
      <img
        className="card__project__image"
        src={image}
        alt="image project"
      />

      <div className="card__project__body">
        <FontAwesomeIcon 
          className="card__project__show__description" 
          icon={faChevronUp} 
          size="2x" 
        />

        <h3 className="card__project__title">
          {title}
        </h3>
        
        <p>{description}</p>
      </div>

      <div className="card__project__button">
        <a
          className="card__project__link"
          target="_blank"
          href={github_link}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCode} size="1x" />
        </a>
      </div>
    </div>
  );
}
