import React from 'react'
interface Props{
    params : any;
}
export default function Blog(props:Props) {
    const {params} = props;
  return (
    <div>
        Bạn đang xem blog với đường dẫn : {`/${params.slug.join('/')}`}
    </div>
  )
}
