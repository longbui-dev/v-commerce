function Picture(props: any) { 
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center h-full"><img src={props.image} alt="" className="w-10/12 h-10/12 flex justify-center"/></div>
    </div>
  )
}

export default Picture;