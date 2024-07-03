// Task 3: Use the UserInfo component in your main application, passing props with appropriate data.
import UserInfo from "./components/UserInfo"


function App() {

  const userData = {
    name: 'Raymond Zheng',
    age: 30,
    email: 'raymondzheng1994@gmail.com'
  };
  return (
    <>
      <div>
      <h1>User Info</h1>
      <UserInfo {...userData} />
    </div>
    </>
  )
}

export default App
