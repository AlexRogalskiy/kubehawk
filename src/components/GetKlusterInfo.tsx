import React from 'react'
import {useNavigate} from 'react-router-dom'

function GetKlusterInfo() {
  const navigate = useNavigate()

  function handleClick(){
    navigate('/dashboard')
  }
  return (
    <div className="base-container" >
    <div className="header">Enter your Kubernetes Cluster Info</div>
    <div className="content">
      <div className="form">
        <div className="form-group">
          <label htmlFor="IP">IP Address</label>
          <input type="text" name="username" placeholder="IP Address" />
        </div>
        <div className="form-group">
          <label htmlFor="cluster-name">Cluster Name</label>
          <input type="text" name="Cluster" placeholder="Cluster Name" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" onClick={handleClick}>
        Continue 🦅
      </button>
    </div>
  </div>
  )
}

export default GetKlusterInfo