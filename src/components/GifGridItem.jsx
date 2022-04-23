import PropTypes from 'prop-types'
// Si alguine quiere usar este componente me tiene que enviar obligatoriamente el tittle y la url
export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt = {title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

