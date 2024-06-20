import { Navigate, useNavigate } from 'react-router-dom'

let loggedIn = true


function Stocks() {
  let navigate = useNavigate()

  { if (!loggedIn) return <Navigate to='not-logged-in' replace={true} /> }

  const handleClick = () => {
    window.alert('Sending info to the DB!')
    navigate('/')
  };


  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
    )
}

export default Stocks;
