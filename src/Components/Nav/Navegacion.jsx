import "./Navegacion.css"
import PageIcon from '../Page-icon/PageIcon'
import { faHome, faUser, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Navegacion = ({ click }) => {
  return (
    <div className="navegacion">
      <div className="navegacion_icons">
        <PageIcon
          icon={faHome}
          name="home"
          clickBtn={click}
          pageToActive="home"
        />
        <PageIcon 
          icon={faUser} 
          name="user"
          clickBtn={click}
          pageToActive="user"
        />
        <PageIcon
          icon={faGraduationCap}
          name="cap"
          clickBtn={click}
          pageToActive="curriculum"
        />
        <PageIcon
          icon={faBriefcase} 
          name="brief-case"
          clickBtn={click}
          pageToActive="xp"
        />
      </div>
    </div>
  )
}

export default Navegacion