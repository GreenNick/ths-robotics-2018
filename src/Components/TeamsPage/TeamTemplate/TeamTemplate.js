import React from 'react'
import { array, string } from 'prop-types'
import Navigation from '../../Navigation/Navigation'
import styles from './TeamTemplate.module.css'

const headerStyle = {
  height: 550,
  backgroundImage: 'url(/Images/TeamImages/1320D.JPG',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  boxShadow: '#757575 1px 1px 2px'
}

const TeamTemplate = props => {
  const teamMemberArray = props.teamMembers
    .map((member, i) => {
      return (
        <div key={i} className={styles.teamContainer}>
          <img
            src='#'
            alt='' />
          <h3>{member.name}</h3>
          <h5>{member.job}</h5>
          <p>{member.desc}</p>
        </div>
      )
    })

  return (
    <main>
      <header style={headerStyle}>
        <h1 className={styles.teamNumber}>{props.teamNumber}</h1>
      </header>
      <div className='wrapper'>
        <section className={styles.section}>
          <img src='#' alt='' />
          <div>
            <h2>Overview</h2>
            <p>{props.overviewDesc}</p>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Team Members</h2>
          { teamMemberArray }
        </section>
        <section className={styles.section}>
          <div className={styles.graph}></div>
          <div className={styles.stats}>
            <h2>Statistics</h2>
            <p>
              Driver Skills Rank: {} <br />
              Programming Skills Rank: {} <br />
              Robot Skills Rank: {} <br />
            </p>
            <p>
              State Qualifications: {} <br />
              Worlds Qualifications: {} <br />
            </p>
            <p>
              Total Awards: {} <br />
            </p>
          </div>
        </section>
      </div>
      <Navigation style={{ backgroundColor: '#353535', opacity: '0.8' }} />
    </main>
  )
}

TeamTemplate.propTypes = {
  teamMembers: array,
  teamNumber: string,
  overviewDesc: string
}

export default TeamTemplate