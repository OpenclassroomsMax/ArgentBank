import UserPageData from "../../data/UserPageData.json";

import Account from "../../components/AccountContent/AccountContent.jsx";

import "../User/User.css"

export default function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {UserPageData.map((data) => (
        <Account
          key={data.id}
          title={data.title}
          amount={data.amount}
          descritpion={data.description}
        />
      ))}
    </main>
  );
}
