


const Card = (prop) => {
  return (
    
      <div className="box">
        <div className="header">
          <div className="logo"><img src={prop.img} alt="" srcset="" /></div>
        <button className="save-btn">
  Save
  <span className="save-icon">♡</span>
</button>
        </div>
        <div className="details"><div className="name">{prop.name}
          <div className="days">{prop.days}</div>
          
        </div>
        <div className="position">{prop.position}</div>
        <div className="dets">
          <div className="timing">{prop.timing}</div>
          <div className="others">{prop.others}</div>


        </div>
        </div>
        <div className="line"></div>
        <div className="footer">
          <div className="salary">{prop.salary} <div className="location">{prop.location}</div></div>
          <button className="btn">Apply Now</button>
        </div>
        
      </div>
    
  )
}

export default Card
