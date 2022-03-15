import React from 'react'

function Tabs({tabs, updateContent}) {

  const handleClick = (e, tab) => {
    updateContent(tab.content);
  }

  return (
    <>
    {
      tabs.map((tab, i) => {
        return <button style={{backgroundColor: tab.clicked ? "black" : "gray", color: tab.clicked ? "white" : "black"}}onClick={ e => handleClick(e, tab)} key={i}>{tab.label}</button>
      })
    }
    </>
  )
}

export default Tabs