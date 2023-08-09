
import React, { memo, useEffect, useRef } from 'react'
import { IndiactorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex=0 } = props
  const contentRef = useRef()

  useEffect(() => {
    //获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    //content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth
    //获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    if (distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])



  return (
    <IndiactorWrapper >
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
    </IndiactorWrapper>
  )
})



export default Indicator