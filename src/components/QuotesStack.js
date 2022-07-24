import React from 'react'

const QuotesStack = ({text,from}) => {
  return (
    <>
    <ul class="list-group">
  
  <h4 class="list-group-item ms-2">"{text}"</h4>
  <h6 className='ms-2 mb-5'>Author: {from}</h6>
</ul>
    </>
  )
}
export default QuotesStack
