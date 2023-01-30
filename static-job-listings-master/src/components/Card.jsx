import Skill from './Skill'
import Label from './Label'
import './styles/Card.css'
import React from 'react'

const Card = ({ job }) => {
  const { company, logo, new: isNew, featured, position, postedAt, contract, location, role, level, languages, tools } = job
  const infos = [postedAt, contract, location]
  const skills = [role, level, ...languages, ...tools]

  return (
    <article className='job'>
      <div className='job--company-info'>
        <div className='job--logo'>
          <img src={logo} alt={company} />
        </div>
        <div className='job--infos'>
          <h3 className='job--infos-company'>
            {company} {isNew && (<Label isNew>NEW!</Label>)} {featured && (<Label isFeatured>FEATURED</Label>)}
          </h3>
          <h2 className='job--infos-position'>
            <a href='#'>{position}</a>
          </h2>
          <div className='job--infos-values'>{infos.map((info, idx) => {
            return (
              <React.Fragment key={idx}>
                <span>{info}</span>
                {idx < infos.length - 1 && <span> · </span>}
              </React.Fragment>
            )
          })}
          </div>
        </div>
      </div>
      <div className='job--skills'>
        {skills.map((skill, idx) => {
          return <Skill key={idx} text={skill} />
        })}
      </div>
    </article>
  )
}

export default Card
