import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './AboutUs.module.css'
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <main>
      <h1 className='headerText'>About Us</h1>
      <div className='wrapper'>
        <section>
          <img src='/Images/AboutUs/OurSchool.jpg' alt='' />
          <div>
            <h2>Our School</h2>
            <p>Tucker High is a public high school in DeKalb County, Georgia. The school was first established in 1916 and has since grown to 1,800 enrolled students. The student body is very diverse with a large immigrant population. We have a variety of advanced programs such as IB and STEM. Our school maintains a balance of academics, athletics, and extracurricular activities. We have both Vex and TSA after school clubs. We greatly value STEM subjects and always put in maximum effort when working on our projects.</p>
            <p>The different STEM groups in our school have formed a community of their own. Many of us have been in the same classes together for years now and we have developed long-lasting friendships. We have grown attached to the programs we participate in due to the hours we have spent working together late into the night.</p>
          </div>
        </section>
        <section className={styles.values}>
          <h2>Our Values</h2>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/DetIcon.svg' alt='Hammer, symbolizing determination' />
            </div>
            <h3>Determination</h3>
            <p>Determination is the will to keep working no matter how bleak the situation may seem. It is a concept which is constantly pushing us to strive to the top. We always try to stay focused on a clear objective, and we work to the best of our abilities to achieve that goal.</p>
          </div>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/CopIcon.svg' alt='Shaking hands, symbolizing solidarity' />
            </div>
            <h3>Solidarity</h3>
            <p>Solidarity means working together to achieve a common goal that benefits all. It is the glue that unites teams and keeps their productivity high. We believe it is important to learn each other's strengths and weaknesses to maximize results and grow as individuals.</p>
          </div>
          <div className={styles.valueContainer}>
            <div className={styles.icon}>
              <img src='/Images/svg/IntIcon.svg' alt='Fountain pen, symbolizing integrity' />
            </div>
            <h3>Integrity</h3>
            <p>Integrity is the internal obligation to be honest to yourself and to others. We view cheating as totally unacceptable and damaging to your team. We all have a moral imperative to stay true to the spirit of the game so that we can develop further as engineers.</p>
          </div>
        </section>
        <section>
          <div>
            <h2>Our History</h2>
            <p>Tucker High School’s VEX Robotics program was established in 2010 and has excelled ever since. Throughout multiple different games and multiple different teams, Tucker High School Robotics has consistently performed well and has been improving yearly since its inception. Many alumni contributed to our program’s success, including members such as Thomas Lebeskal, Samuale Ossire, BJ Barclay, Zion Hunte, Amyn Said, Daniel Wade, and Gabriel Harris. Without these prominent alumni and others, our robotics program would not where it is today. Additionally, numerous advisors we’ve had over the years, such as Mr. Booth and Mr. Hicks have greatly contributed to our success by helping to transfer previous years’ knowledge to incoming students</p>
          </div>
          <img src='/Images/AboutUs/OurHistory.jpg' alt='' />
        </section>
      </div>
      <Footer />
      <Navigation dark={true} />
    </main>
  )
}

export default AboutUs
