import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { GET_CARDS } from '../../services/get-cards'

PipeCard.propTypes = {
    pipeId: PropTypes.number
}

const LIMIT = 2

function PipeCard({ pipeId }) {
    const [cards, setCards] = useState([])
    const [pageInfo, setPageInfo] = useState({})

    const query = {
        variables: {
            pipe_id: pipeId,
            first: LIMIT
        }
    }

    const { loading, error, data, fetchMore } = useQuery(GET_CARDS, query)

    useEffect(() => {
        if (!error && data) {
            const cards = data.cards?.edges
            if (cards.length) {
                setCards(cards)
            }

            const pageInfo = data.cards?.pageInfo
            setPageInfo(pageInfo)
        }
    }, [data])

    const handleMoreClick = () => {
        /**
         * TODO: not working
         */
        fetchMore({
            ...query,
            variables: {
                ...query.variables,
                after: pageInfo.endCursor
            }
        })
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong!</div>
    }

    return (
        <div>
            {cards.length > 0 && (
                <div>
                {cards.map(card => (
                        <div key={card.node?.id}>
                            {card.node?.title}
                        </div>
                    ))}
                    <hr />
                    <div onClick={handleMoreClick}>more...</div>
                </div>
            )}
        </div>
    )
}

export default PipeCard