import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card name="Amazon" days="5 days ago" position="Senior UI/UX designer" timing="Part-time" others="Senior Role" salary="$120/hr" location="Mumbai,India" img="https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png"/>
      <Card name="Google" days="6 days ago" position="Senior Developer" timing="Part-time" others="Senior Role" salary="$200/hr" location="Bengaluru,India" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U4pRN-hmnCKRp5bBpsxjHfbbutWDEgFRUo0YrTP2ag&s=10"/>
    </div>
  )
}

export default App
