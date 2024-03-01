import UserPageData from "../../data/UserPageData.json";

import Account from "../../components/AccountContent/AccountContent.jsx";

export default function User() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
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
