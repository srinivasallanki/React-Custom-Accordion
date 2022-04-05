import React, { Fragment, useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState('')
  const handleAccordion = (index) => {
    setActiveIndex(index)
  }

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return (
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            handleAccordion(index)
          }}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </Fragment>
    )
  })

  return <div className='ui accordion'>{renderItems}</div>
}

export default Accordion
