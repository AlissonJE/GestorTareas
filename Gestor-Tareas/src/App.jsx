import { Header } from "./Components/Header/Header"
import { TaskCreated } from "./Components/Main/TaskCreates/TaskCreated"
import { Taskinput } from "./Components/Main/TaskInput/Taskinput"

export const App = () => {
  return(
    <>
      <Header />
      <Taskinput />
      <TaskCreated />
    </>
  )
}