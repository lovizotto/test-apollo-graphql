import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { GET_PIPES } from '../../services/get-pipes'
import styled from 'styled-components'

Pipes.propTypes = {
    onClick: PropTypes.func.isRequired
}

const ID = 122444

function Pipes({ onClick = f => f }) {
    const { loading, error, data } = useQuery(GET_PIPES, { variables: { id: ID } })
    useEffect(() => {
        console.log(data)
    }, [data])

    if (loading) {
        return <div>Loading...</div>
    }

    const handleItemClick = (pipeId) => {
        onClick(pipeId)
    }

    return (
        <Container>
            {data.organization && (
                <>
                    <h3>Amount: {data.organization?.pipes.length}</h3>
                    <ItemWrapper>
                        {data.organization?.pipes.map((pipe, index, pipes) => (
                            <div>
                                <Item key={pipe.id}>
                                    <p>{pipe.name}</p>
                                    <Button onClick={() => handleItemClick(pipe.id)}>Detail</Button>
                                </Item>
                            </div>
                        ))}
                    </ItemWrapper>
                </>
            )}

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  min-width: 150px;
  max-width: 180px;
  font-size: 13px;
  background-color: #ff8b6602;
  margin: 16px 8px;
  flex-direction: column;
`

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #ff8b66;
  color: #333;
  padding: 16px 4px;
  cursor: pointer;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
`


export default Pipes