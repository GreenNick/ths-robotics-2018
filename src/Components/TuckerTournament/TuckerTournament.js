import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './TuckerTournament.module.css'
import Footer from '../Footer/Footer'

const TuckerTournament = () => {
  return (
    <main>
      <h1 className='headerText'>Tucker Tournament</h1>
      <div className='wrapper'>
        <section>
          <div>
            <h2>Setup</h2>
            <p>Sanjeena - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
            Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
            Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
          </div>
          <img src='/Images/TuckerTournament/' alt='' />
        </section>
        <section className={styles.clubContainer}>
          <h2>Clubs Involved</h2>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/TSA.jpg' alt='' />
            <div>
              <h3>Technology Student Association</h3>
              <p>At Tucker High School, our VEX Robotics program and our TSA chapter are closely interrelated. Therefore, TSA always helps to set up for the yearly tucker tournament. The TSA members are greatly appreciated when setting up, as many of them have technological expertise that can be helpful when setting up projectors or tournament management hardware. Additionally, their critical thinking skills are very helpful when confronting the many problems that come with setting up a tournament, such as efficient use of space or difficulty with wiring.</p>
            </div>
          </div>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/NHS.jpg' alt='' />
            <div>
              <h3>National Honor Society</h3>
              <p>Sanjeena - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </div>
          <div className={styles.clubs}>
            <img src='/Images/TuckerTournament/Beta.jpg' alt='' />
            <div>
              <h3>Beta Club</h3>
              <p>Sanjeena - Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus aspernatur saepe itaque sint mollitia dolore, rem ratione reprehenderit harum quasi maiores corrupti, nisi voluptates beatae alias tenetur consequatur voluptate?
              Provident iusto, nam molestias saepe a ad atque tempora. Unde modi quam dignissimos! Error reiciendis ab, deserunt ad labore fugiat repellat vitae! Et pariatur odit molestiae, nesciunt animi sed exercitationem.
              Soluta beatae neque accusantium id numquam quasi, laboriosam ab facilis culpa, quibusdam impedit optio ea tempore eaque hic. Similique consectetur dolore totam reiciendis nulla corrupti incidunt consequuntur mollitia aperiam nihil?</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default TuckerTournament
