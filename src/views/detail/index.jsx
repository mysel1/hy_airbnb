import React, { memo, useEffect } from 'react'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/details-infos'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { DetailWrapper } from './style'

const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false,topAlpha:false }))
  }, [dispatch])

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)


  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
      <DetailInfos pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  )
})

export default Detail
