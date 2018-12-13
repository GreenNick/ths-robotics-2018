import React, { Component } from 'react'
import TeamTemplate from '../TeamTemplate/TeamTemplate'

const data = {
  teamNumber: '1320C',
  overviewDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt minima corrupti cupiditate doloremque quae, consectetur eum! Nisi quidem perspiciatis eaque, dolor explicabo ullam natus sed ratione facilis dolores architecto? Neque repellendus debitis distinctio nulla nobis totam sint quam amet rerum cupiditate molestias at blanditiis sapiente, labore illum quisquam sunt minus nostrum aperiam iste ea voluptatibus perferendis. Autem, nostrum. Ipsum?',
  teamMembers: [
    {
      name: 'Mamadou Ly',
      job: 'Captain / Builder / Driver',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Sam Torbert',
      job: 'Programmer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'James Bunting',
      job: 'Notebook Manager',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Deborah Sodiya',
      job: 'Binder Manager',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Kelly Vu',
      job: 'Binder Assistant',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    },
    {
      name: 'Kenny Vu',
      job: 'Member-in-training',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet delectus esse necessitatibus alias, possimus, exercitationem voluptatum molestias sint et eos! Iusto nisi est eaque quis labore voluptatum rerum mollitia.'
    }
  ]
}

class Team1320C extends Component {
  state = {
    robotSkillRank: 'N/A',
    programSkillRank: 'N/A',
    driveSkillRank: 'N/A',
    awardNum: 'N/A',
    worldQual: 'N/A',
    stateQual: 'N/A'
  }

  fetchSkillRank = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result[0].season_rank
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchAwardNum = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.length
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchWorldQual = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, event) => {
          return event.divisions.length > 1
            ? acc + 1
            : acc
        }, 0)
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  fetchStateQual = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse.result.reduce((acc, event) => {
          return event.loc_venue === 'Ola High School'
            ? acc + 1
            : acc
        }, 0)
      }
      throw new Error('Request failed')
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount () {
    this.fetchSkillRank('https://api.vexdb.io/v1/get_skills?season_rank=true&team=1320C&season=current&type=2')
      .then(response => this.setState({ robotSkillRank: response }))
    this.fetchSkillRank('https://api.vexdb.io/v1/get_skills?season_rank=true&team=1320C&season=current&type=0')
      .then(response => this.setState({ driveSkillRank: response }))
    this.fetchSkillRank('https://api.vexdb.io/v1/get_skills?season_rank=true&team=1320C&season=current&type=1')
      .then(response => this.setState({ programSkillRank: response }))
    this.fetchAwardNum('https://api.vexdb.io/v1/get_awards?team=1320C')
      .then(response => this.setState({ awardNum: response }))
    this.fetchWorldQual('https://api.vexdb.io/v1/get_events?team=1320C')
      .then(response => this.setState({ worldQual: response }))
    this.fetchStateQual('https://api.vexdb.io/v1/get_events?team=1320C')
      .then(response => this.setState({ stateQual: response }))
  }

  render () {
    return (
      <TeamTemplate
        teamNumber={data.teamNumber}
        overviewDesc={data.overviewDesc}
        teamMembers={data.teamMembers}
        robotSkillRank={this.state.robotSkillRank}
        programSkillRank={this.state.programSkillRank}
        driveSkillRank={this.state.driveSkillRank}
        awardNum={this.state.awardNum}
        worldQual={this.state.worldQual}
        stateQual={this.state.stateQual} />
    )
  }
}

export default Team1320C
